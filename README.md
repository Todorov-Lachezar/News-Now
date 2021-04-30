# News Now

## Prerequisites

- Node 12 or above
- AWS CLI
  - https://aws.amazon.com/cli/
- AWS CDK Toolkit
  - Install by running: `npm install -g aws-cdk`

## Deployment steps

You need to first upload our stopwords list to AWS Transcribe. Within the AWS Console,
navigate to `Amazon Transcribe > Vocabulary Filtering` and click on `Create vocabulary filter`.
Name the vocabulary filter `stopwords`, select `English, US (en-US)` for language, `file upload` for Vocabulary input source and upload the `stopwords.txt` file located at the root of this project.
Finally click on `Create vocabulary filter`.

Once thats is done, you will need to export the following environment variables:

```
AWS_REGION=your-region-here
AWS_SESSION_TOKEN=your-token-here (optional)
AWS_ACCESS_KEY_ID=your-key-id
AWS_SECRET_ACCESS_KEY=your-access-here
NEWS_API_KEY=879bea30fb7e461caae3d1af1fd452d1
```

Finally, run the following commands within the `deploy` folder:

```
npm install
node deploy.js
```

The script will print the website's URL once everything is ready.

You should now be able to use News Now.
