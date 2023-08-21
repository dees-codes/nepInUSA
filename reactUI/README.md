# What is the project about

NepinUSA - the next generation online college application tool for Nepali students.

## Available Scripts

In the project directory, do the following in the order below to launch the app:

### `npm install`

Installs all the dependencies of the project based off pacakge.json

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Spinning up Docker container for local development:

1. Install docker desktop.

2. Build docker image for fastAPI folder using the following command:
   docker build -t reactui-app .

3. After the image is built, run the docker container using following command:
   docker run -p 3000:3000 reactui-app

4. Access your fast API app's Swagger documentation at:
   http://localhost:3000/

