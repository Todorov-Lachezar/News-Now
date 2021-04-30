import * as path from "path";
import * as cdk from "@aws-cdk/core";
import * as s3 from "@aws-cdk/aws-s3";
import * as s3Deploy from "@aws-cdk/aws-s3-deployment";
import * as iam from "@aws-cdk/aws-iam";
import * as sqs from "@aws-cdk/aws-sqs";
import * as lambda from "@aws-cdk/aws-lambda";
import * as destinations from "@aws-cdk/aws-lambda-destinations";
import { S3EventSource } from "@aws-cdk/aws-lambda-event-sources";

export class DeployStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const webBucket = new s3.Bucket(this, "NewsNowWebBucket", {
      publicReadAccess: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "404.html",
    });

    new s3Deploy.BucketDeployment(this, "DeployNewsNowWeb", {
      sources: [
        s3Deploy.Source.asset(path.join(__dirname, "..", "..", "web", "out")),
      ],
      destinationBucket: webBucket,
    });

    const newsNowBucket = new s3.Bucket(this, "NewsNowBucket", {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    newsNowBucket.addToResourcePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ["s3:*"],
        resources: [`${newsNowBucket.bucketArn}/*`],
        principals: [new iam.AnyPrincipal()],
      })
    );

    const queue = new sqs.Queue(this, "NewsNowQueue");

    const queryFunc = new lambda.Function(this, "QueryFunc", {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: "index.handler",
      code: lambda.Code.fromAsset(
        path.join(__dirname, "..", "..", "query", "news-now-query-func.zip")
      ),
      onSuccess: new destinations.SqsDestination(queue),
    });

    queryFunc.addEventSource(
      new S3EventSource(newsNowBucket, {
        events: [s3.EventType.OBJECT_CREATED],
        filters: [{ prefix: "transcriptions/", suffix: ".json" }],
      })
    );
  }
}
