import AWS from "aws-sdk";

const S3_BUCKET = "colibristoragesystem";
const REGION = "eu-central-1";

AWS.config.update({
  accessKeyId: "AKIAJCN7BXSGZVFJSVHA",
  secretAccessKey: "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",
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});

const uploadFile = async (file: any) => {
  const params = {
    Body: file,
    Bucket: S3_BUCKET,
    Key: file.name, //The key should be a the content plus the exercise id
  };

  await myBucket.putObject(params).send();

  const url = myBucket.getSignedUrl("getObject", { Key: params.Key });

  return url;
};

const StorageService = Object.freeze({
  uploadFile,
});

export default StorageService;
