import AWS from "aws-sdk";

const S3_BUCKET = "colibristoragesystem";
const REGION = "eu-central-1";

AWS.config.update({accessKeyId: "AKIAJCN7BXSGZVFJSVHA", secretAccessKey: "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"});

const myBucket = new AWS.S3({
    params: {
        Bucket: S3_BUCKET
    },
    region: REGION
});

const uploadFile = async ({file, key} : {
    file: any,
    key: string
}) => {
    const params = {
        Body: file,
        Bucket: S3_BUCKET,
        Key: key,
        ContentType: file.type
    };

    await myBucket.putObject(params).send();

    return key;
};

const StorageService = Object.freeze({uploadFile});

export default StorageService;
