import * as dotenv from 'dotenv';
dotenv.config();

import { Consumer, SQSMessage } from 'sqs-consumer';
import { textToKeywords, Transcribe } from './utils/transcribe';
import { getNews } from './services/news';

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

  const keywords = textToKeywords(
    audioTranscribeResult.results.transcripts[0].transcript
  );

  const res = await getNews(keywords);

  console.log(JSON.stringify(res, undefined, 2));
};

const app = Consumer.create({
  queueUrl: 'https://sqs.us-east-1.amazonaws.com/349542123908/news-now-queue',
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

app.start();
