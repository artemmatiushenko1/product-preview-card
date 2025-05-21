import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws';
import * as awsx from '@pulumi/awsx';

const bucket = new aws.s3.BucketV2('my-bucket');

// Export the name of the bucket
export const bucketName = bucket.id;
