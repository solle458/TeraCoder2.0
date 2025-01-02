docker build -t teracoder2.0:latest .
docker container run -it -d -p 9000:9000 --name teracoder2.0 teracoder2.0
