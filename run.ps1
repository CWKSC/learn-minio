docker run `
    --rm `
    -e MINIO_ROOT_PASSWORD=test1234 `
    -e MINIO_ROOT_USER=test `
    -p 9000:9000 `
    -p 9001:9001 `
    quay.io/minio/minio server /data --console-address ":9001"