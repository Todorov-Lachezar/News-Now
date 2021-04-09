import { Router } from 'express';
import Busboy from 'busboy';
import AWS from 'aws-sdk';
import { PassThrough } from 'stream';

const router = Router();
const s3 = new AWS.S3({ region: 'us-east-1' });

router.post('/', (req, res) => {
  const busboy = new Busboy({ headers: req.headers });

  busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
    file.pipe(uploadFromStream(s3, filename));

    file.on('end', () => {
      res.status(204).send();
    });
  });

  req.pipe(busboy);
});

function uploadFromStream(s3: AWS.S3, filename: string) {
  const pass = new PassThrough();

  s3.upload({ Bucket: 'news-now-s3', Key: filename, Body: pass }, (err) => {
    console.error(err);
  });

  return pass;
}

export default router;
