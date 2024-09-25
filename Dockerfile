# Use an official Nginx image as the base image
FROM nginx:alpine

# Copy the current directory contents into the Nginx web directory
COPY . /usr/share/nginx/html

# Expose port 80 to allow web traffic
EXPOSE 80
