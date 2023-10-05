import AWS from 'aws-sdk';

export async functinon uploadToS3(file:File) {
    try{
        AWS.config.update({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        })
    }   catch (error)
};