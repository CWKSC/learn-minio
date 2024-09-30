import * as Minio from 'minio'

const minioClient = new Minio.Client({
    endPoint: 'localhost',
    port: 19000,
    useSSL: false,
    accessKey: 'jfGsoSU4bypzCo7f0VqC',
    secretKey: '77k4nEw5hyAFenOcVTKnJFjKDBAZULR7OBgarBuo',
})

const bucket = 'js-test-bucket'

minioClient.fGetObject(bucket, 'my-test-file.txt', './output/my-test-file.txt', function (err) {
    if (err) {
        return console.log(err)
    }
    console.log('success')
})


minioClient.fGetObject(bucket, 'ttttest-file-2.txt', './output/222.txt', function (err) {
    if (err) {
        return console.log(err)
    }
    console.log('success')
})




