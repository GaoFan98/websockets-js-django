# JavaScript WebSocket Chat Application

A simple real-time chat application built with pure JavaScript and WebSockets. This application demonstrates the working principles of WebSockets through a chat interface where users can join chat rooms, send messages in real-time, and exit chat rooms.

## Features

- Multiple chat rooms support
- Real-time messaging
- Join/leave notifications
- User name customization
- Clean, modern UI

## Technology Stack

- Node.js
- Express.js for serving static files
- ws library for WebSocket implementation
- Docker for containerization

## Getting Started

### Prerequisites

- Docker and Docker Compose

### Running the Application

1. Clone this repository
2. Navigate to the `javascript` directory
3. Run the following command to start the application:

```bash
docker-compose up --build
```

4. Open your browser and go to `http://localhost:3000`

### How to Use

1. On the homepage, enter a room name and your username
2. Click "Join Chat" button
3. You'll be redirected to the chat room
4. Start sending messages
5. To exit, click the "Exit Chat" button

### Testing with Multiple Users

To test the chat with multiple users:

1. Open the application in two different browser windows or tabs
2. Enter the same room name in both windows but use different usernames
3. Send messages from one window and observe them appearing in real-time in the other window
4. Try joining and leaving rooms to see the system notifications

## How it Works

- The application uses the native WebSocket API in the browser
- The server uses the 'ws' library to handle WebSocket connections
- Each chat room is managed as a separate group of connections
- Messages are broadcasted to all users in the same room
- System messages notify when users join or leave a room

## Docker Configuration

- Node.js Alpine base image
- Volumes for live code updates during development
- Port mapping for easy access

## Development Notes

- The current setup uses in-memory storage for simplicity
- For production, you might want to use a database to persist messages 