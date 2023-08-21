For local development:

1. Install docker desktop.

2. Build docker image for fastAPI folder using the following command:
   docker build -t fastapi-app .

3. After the image is built, run the docker container using following command:
   docker run -p 8000:8000 fastapi-app

4. Access your fast API app's Swagger documentation at:
   http://localhost:8000/docs
