# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire React app to the container
COPY . .

# Build the React app
RUN npm run build

# Serve the built app using a lightweight web server
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# Expose the port that the app will run on
EXPOSE 3000
