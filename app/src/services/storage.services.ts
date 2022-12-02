import AWS from "aws-sdk";

// AWS information
// const S3_BUCKET = "colibristoragesystem";
// const REGION = "eu-central-1";

// AWS configuration update
AWS.config.update({
    accessKeyId: import.meta.env.VITE_S3_ACCESS,
    secretAccessKey: import.meta.env.VITE_S3_SECRET
});

// Create new bucket
const myBucket = new AWS.S3({
    params: { Bucket: import.meta.env.VITE_S3_BUCKET },
    region: import.meta.env.VITE_S3_REGION
});

// Props interface
type UploadProps = {
    file: any,
    key: string // The key should be a the content plus the exercise id
}

const uploadFile = async ({ file, key }: UploadProps) => {
    const params = {
        Body: file,
        Bucket: import.meta.env.VITE_S3_BUCKET,
        Key: key, 
        ContentType: file.type
    };

    await myBucket.putObject(params).send();
    return key;
};

const StorageService = Object.freeze({ uploadFile });

export default StorageService;
