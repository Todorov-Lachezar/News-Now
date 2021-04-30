import { Router } from 'express';
import AWS from 'aws-sdk';

AWS.config.update({ region: process.env.AWS_REGION });

const router = Router();
const s3 = new AWS.S3();

router.get('/:resultId', (req, res) => {
  const { resultId } = req.params;

  if (!resultId) {
    return res.status(400).send();
  }

  s3.getObject(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    { Bucket: process.env.BUCKET_NAME!, Key: `results/${resultId}.json` },
    (error: Error, data: AWS.S3.GetObjectOutput) => {
      if (error || !data.Body) {
        return res.status(404).send();
      }

      return res.json(JSON.parse(data.Body.toString('utf-8')));
    }
  );
});

export default router;
