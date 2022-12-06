import AWS from "aws-sdk";

// AWS configuration update
AWS.config.update({
    accessKeyId: import.meta.env.VITE_S3_ACCESS,
    secretAccessKey: import.meta.env.VITE_S3_SECRET
});


const myBucket = new AWS.S3({
    params: { Bucket: import.meta.env.VITE_S3_BUCKET },
    region: import.meta.env.VITE_S3_REGION
});

// Props interface
type FileUploadProps = {
    file: any,
    key: string // The key should be a the content plus the exercise id
}

// Upload image file to storage bucket
const uploadFile = async ({ file, key }: FileUploadProps) => {
    await myBucket.putObject({
        Body: file,
        Bucket: import.meta.env.VITE_S3_BUCKET,
        Key: key, 
        ContentType: file.type
    }).send();

    return key;
};

const StorageService = Object.freeze({ uploadFile });

export default StorageService;
