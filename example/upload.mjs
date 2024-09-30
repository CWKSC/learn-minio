// https://min.io/docs/minio/linux/developers/javascript/minio-javascript.html
// https://min.io/docs/minio/linux/developers/javascript/API.html

import * as Minio from 'minio'

const minioClient = new Minio.Client({
  endPoint: 'localhost',
  port: 19000,
  useSSL: false,
  accessKey: 'jfGsoSU4bypzCo7f0VqC',
  secretKey: '77k4nEw5hyAFenOcVTKnJFjKDBAZULR7OBgarBuo',
})

// File to upload
const sourceFile = './test-file.txt'

// Destination bucket
const bucket = 'js-test-bucket'

// Destination object name
const destinationObject = 'my-test-file.txt'

// Check if the bucket exists
// If it doesn't, create it
const exists = await minioClient.bucketExists(bucket)
if (exists) {
  console.log('Bucket ' + bucket + ' exists.')
} else {
  await minioClient.makeBucket(bucket, 'us-east-1')
  console.log('Bucket ' + bucket + ' created in "us-east-1".')
}

// Set the object metadata
var metaData = {
  'Content-Type': 'text/plain',
  'X-Amz-Meta-Testing': 1234,
  example: 5678,
}

// Upload the file with fPutObject
// If an object with the same name exists,
// it is updated with new data
await minioClient.fPutObject(bucket, destinationObject, sourceFile, metaData)
console.log('File ' + sourceFile + ' uploaded as object ' + destinationObject + ' in bucket ' + bucket)

await minioClient.fPutObject(bucket, 'ttttest-file-2.txt', './test-file-2.txt')
console.log('File ' + './test-file-2.txt' + ' uploaded as object ' + 'ttttest-file-2.txt' + ' in bucket ' + bucket)




