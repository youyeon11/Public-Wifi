# Use the official Node.js image as a base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json into the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code into the working directory
COPY . .

# Build the React application for production
RUN npm run build

# Install a lightweight HTTP server for serving the static files
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Command to serve the built application
CMD ["serve", "-s", "build", "-l", "3000"]