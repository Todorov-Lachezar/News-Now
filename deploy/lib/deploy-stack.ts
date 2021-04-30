import * as path from "path";
import * as cdk from "@aws-cdk/core";
import * as s3 from "@aws-cdk/aws-s3";
import * as s3Deploy from "@aws-cdk/aws-s3-deployment";
import * as iam from "@aws-cdk/aws-iam";
import * as sqs from "@aws-cdk/aws-sqs";
import * as lambda from "@aws-cdk/aws-lambda";
import * as destinations from "@aws-cdk/aws-lambda-destinations";
import * as ec2 from "@aws-cdk/aws-ec2";
import * as ecs from "@aws-cdk/aws-ecs";
import * as ecsPatterns from "@aws-cdk/aws-ecs-patterns";
import { S3EventSource } from "@aws-cdk/aws-lambda-event-sources";
import * as uuid from "uuid";

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

    const newsNowBucketName = `news-now-${uuid.v4()}`;
    const newsNowBucket = new s3.Bucket(this, "NewsNowBucket", {
      bucketName: newsNowBucketName,
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

    const vpc = new ec2.Vpc(this, "NewsNowVPC", {
      maxAzs: 3,
    });

    const trafficCluster = new ecs.Cluster(this, "NewsNowTrafficCluster", {
      vpc,
    });

    new ecsPatterns.ApplicationLoadBalancedFargateService(
      this,
      "NewsNowTrafficService",
      {
        cluster: trafficCluster,
        cpu: 512,
        desiredCount: 3,
        taskImageOptions: {
          image: ecs.ContainerImage.fromRegistry(
            "camilo86/swen-team-11:traffic"
          ),
          environment: {
            BUCKET_NAME: newsNowBucketName,
            AWS_REGION: process.env.AWS_REGION!,
            AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID!,
            AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY!,
            AWS_SESSION_TOKEN: process.env.AWS_SESSION_TOKEN!,
          },
          containerPort: 8080,
        },
        memoryLimitMiB: 2048,
        publicLoadBalancer: true,
      }
    );

    const searchCluster = new ecs.Cluster(this, "NewsNowSearchCluster", {
      vpc,
    });

    new ecsPatterns.ApplicationLoadBalancedFargateService(
      this,
      "NewsNowSearchService",
      {
        cluster: searchCluster,
        cpu: 512,
        desiredCount: 3,
        taskImageOptions: {
          image: ecs.ContainerImage.fromRegistry(
            "camilo86/swen-team-11:search"
          ),
          environment: {
            BUCKET_NAME: newsNowBucketName,
            AWS_REGION: process.env.AWS_REGION!,
            AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID!,
            AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY!,
            AWS_SESSION_TOKEN: process.env.AWS_SESSION_TOKEN!,
            NEWS_API_KEY: process.env.NEWS_API_KEY!,
            QUEUE_URL: queue.queueUrl,
          },
          containerPort: 8080,
        },
        memoryLimitMiB: 2048,
        publicLoadBalancer: true,
      }
    );
  }
}
