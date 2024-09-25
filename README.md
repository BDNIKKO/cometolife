# Rock Paper Scissors Tournament - Dockerized Web App

## Project Overview

This is a simple Rock Paper Scissors game tournament web application. It allows two players to enter their names, play the game, and track their scores and rounds. The app was created using HTML, CSS, JavaScript, and Bootstrap.

This README provides instructions on how to build and run the project using Docker.

## Prerequisites

Make sure you have the following installed on your system:
- [Docker](https://www.docker.com/get-started)

## How to Build and Run the Docker Container

### Step 1: Clone the Repository
First, clone the project repository or download the project files to your local machine.

```bash
git clone https://github.com/your-username/cometolife.git
cd cometolife
```

### Step 2: Build the Docker Image

Build the Docker image using the Dockerfile provided in the project directory. This image will include Nginx as the web server to serve the static files (HTML, CSS, JS).

```bash
docker build -t cometolife-app .
```

### Step 3: Run the Docker Container

Run the container, mapping port 8080 on your local machine to port 80 inside the container:

```bash
docker run -d -p 8080:80 cometolife-app
```

The `-d` flag runs the container in detached mode, and `-p 8080:80` maps the container's port 80 (where Nginx serves the app) to port 8080 on your local machine.

### Step 4: Access the Application

Open your browser and go to:

```
http://localhost:8080
```

You should see the Rock Paper Scissors Tournament web app running!

## Dockerfile Details

- **Base Image**: Nginx (Alpine version)
- **COPY Command**: Copies all the project files (HTML, CSS, JS) into the Nginx web directory `/usr/share/nginx/html`.

### Dockerfile Contents:
```Dockerfile
# Use an official Nginx image as the base
FROM nginx:alpine

# Copy your static files (HTML, CSS, JS) to the Nginx web directory
COPY . /usr/share/nginx/html

# Expose port 80 to allow web traffic
EXPOSE 80
```

## Project Structure

```
COMETOLIFE/
│
├── images/
│   ├── rps_final.jpg
│   ├── rps_roughdraft.jpg
│   ├── rps.jpg
├── app.js           # JavaScript logic for the game
├── index.html       # Main HTML page
├── styles.css       # Custom CSS styling
├── Dockerfile       # Docker configuration file
├── .dockerignore    # Excludes unnecessary files from the Docker build
└── README.md        # This README file
```

## .dockerignore Contents

This file helps exclude unnecessary files from being added to the Docker image:

```plaintext
# Ignore git folder
.git

# Node modules (if you have any future dependencies)
node_modules

# Logs and temporary files
*.log
tmp/
```

## Additional Information

- The game can be started by entering player names and pressing the "Start Game" button.
- The game will keep track of each round and display the winner of each round in real-time.
- Game history is shown at the bottom of the page after each round.

---
