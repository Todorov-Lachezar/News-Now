import { Router } from 'express';
import Busboy from 'busboy';
import AWS from 'aws-sdk';
import { PassThrough } from 'stream';

AWS.config.update({ region: 'us-east-1' });

const router = Router();
const s3 = new AWS.S3();
const transcribe = new AWS.TranscribeService();

router.post('/', (req, res) => {
  const busboy = new Busboy({ headers: req.headers });

  busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
    file.pipe(
      uploadFromStream(s3, filename, (err, data) => {
        if (err) {
          console.error(err);
          return res.status(400).send();
        }

        transcribe.startTranscriptionJob(
          {
            TranscriptionJobName: `${filename}-${Date.now()}`,
            LanguageCode: 'en-US',
            MediaFormat: 'mp3',
            OutputBucketName: 'news-now-s3',
            OutputKey: `transcriptions/${filename}.json`,
            Media: {
              MediaFileUri: `s3://${data.Bucket}/recordings/${filename}`
            }
          },
          (err, data) => {
            if (err) {
              console.error(err);
              return res.status(400).send();
            }

            return res.json(data);
          }
        );
      })
    );
  });

  req.pipe(busboy);
});

function uploadFromStream(
  s3: AWS.S3,
  filename: string,
  cb: (error: Error, data: AWS.S3.ManagedUpload.SendData) => void
) {
  const pass = new PassThrough();

  s3.upload(
    {
      Bucket: 'news-now-s3',
      Key: `recordings/${filename}`,
      Body: pass,
      Tagging: 'public=yes'
    },
    cb
  );

  return pass;
}

export default router;