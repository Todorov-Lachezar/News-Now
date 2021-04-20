import { Consumer, SQSMessage } from 'sqs-consumer';

const handleMessage = async (message: SQSMessage) => {
  console.log(`Processing new message: ${message.MessageId}`);

  if (!message.Body) {
    throw new Error("Message doesn't contain a body");
  }

  const { filePath, content } = JSON.parse(message.Body).responsePayload;

  console.log(`Recieved file (${filePath}): `);
  console.log(content);
};

const app = Consumer.create({
  queueUrl: 'https://sqs.us-east-1.amazonaws.com/349542123908/news-now-queue',
  handleMessage
});

app.on('message_processed', (message: SQSMessage) => {
  console.log(`Successfully processed (${message.MessageId})`);
});

app.on('error', (err) => {
  console.error(err.message);
});

app.on('processing_error', (err) => {
  console.error(err);
});

app.start();
