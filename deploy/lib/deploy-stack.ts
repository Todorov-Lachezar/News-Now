import * as cdk from "@aws-cdk/core";
import * as s3 from "@aws-cdk/aws-s3";
import * as iam from "@aws-cdk/aws-iam";

export class DeployStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const webBucket = new s3.Bucket(this, "NewsNowWebBucket", {
      publicReadAccess: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      websiteIndexDocument: "index.html",
    });

    const newsNowBucket = new s3.Bucket(this, "NewsNowBucket", {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    const newsNowBucketPolicy = new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: ["s3:*"],
      resources: [`${newsNowBucket.bucketArn}/*`],
      principals: [new iam.AnyPrincipal()],
    });

    newsNowBucket.addToResourcePolicy(newsNowBucketPolicy);
  }
}
