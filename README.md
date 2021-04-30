# News Now

## Prerequisites

- Node 12 or above
- AWS CDK Toolkit
  - Install by running: `npm install -g aws-cdk`
- AWS Account of course

## Deployment steps

You will need to export the following environment variables:

```
AWS_REGION=your-region-here
AWS_SESSION_TOKEN=your-token-here (optional)
AWS_ACCESS_KEY_ID=your-key-id
AWS_SECRET_ACCESS_KEY=your-access-here
NEWS_API_KEY=879bea30fb7e461caae3d1af1fd452d1
```

Once you have exported the environment variables, run the following commands within the `deploy` folder:

1. `cdk bootstrap`
2. `cdk deploy`

At this point you should have News Now configured in your AWS account.
Visit the AWS Console, search for `S3` and look for the bucket containing the name `NewsNowWeb...`. Copy the `index.html` file's public url and visit that URL in your browser.

You should now be able to use News Now
