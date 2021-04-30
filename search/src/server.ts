import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import AWS from 'aws-sdk';
import { Consumer, SQSMessage } from 'sqs-consumer';
import { textToKeywords, Transcribe } from './utils/transcribe';
import { getNews } from './services/news';

AWS.config.update({ region: process.env.AWS_REGION });

const s3 = new AWS.S3();
const server = express();
const port = process.env.PORT || 8080;

const handleMessage = async (message: SQSMessage) => {
  console.log(`Processing new message: ${message.MessageId}`);

  if (!message.Body) {
    throw new Error("Message doesn't contain a body");
  }

  const audioTranscribeResult = JSON.parse(message.Body).responsePayload
    .content as Transcribe;

  if (audioTranscribeResult.results.transcripts.length === 0) {
    throw new Error('Transcribe result does not have any transcription');
  }

  const resultId = audioTranscribeResult.jobName;

  const keywords = textToKeywords(
    audioTranscribeResult.results.transcripts[0].transcript
  );

  const res = await getNews(keywords);
  const { transcript } = audioTranscribeResult.results.transcripts[0];

  s3.upload(
    {
      Bucket: process.env.BUCKET_NAME!,
      Key: `results/${resultId}.json`,
      Body: Buffer.from(JSON.stringify({ ...res, transcript }), 'utf-8')
    },
    (err: Error, data: AWS.S3.ManagedUpload.SendData) => {
      if (err) {
        console.error(err);
        throw new Error('Could not upload file');
      }
    }
  );
};

const app = Consumer.create({
  queueUrl: process.env.QUEUE_URL,
  handleMessage
});

app.on('message_processed', (message: SQSMessage) => {
  console.log(`Successfully processed: ${message.MessageId}`);
});

app.on('error', (err) => {
  console.error(err.message);
});

app.on('processing_error', (err) => {
  console.error(err);
});

server.get('/', (req, res) => res.json({ message: 'Search service is ok!' }));

app.start();
server.listen(port, () =>
  console.log(`Search service is running in port ${port}`)
);
