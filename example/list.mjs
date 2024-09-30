
import * as Minio from 'minio'

const minioClient = new Minio.Client({
    endPoint: 'localhost',
    port: 19000,
    useSSL: false,
    accessKey: 'jfGsoSU4bypzCo7f0VqC',
    secretKey: '77k4nEw5hyAFenOcVTKnJFjKDBAZULR7OBgarBuo',
})

const bucket = 'js-test-bucket'

const stream = minioClient.listObjectsV2(bucket, '', true, '')

stream.on('data', function (obj) {
  console.log(obj)
})
stream.on('error', function (err) {
  console.log(err)
})

