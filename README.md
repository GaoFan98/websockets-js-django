# WebSocket Chat Applications

This repository contains two implementations of a real-time chat application using WebSockets:

1. **Django Channels Implementation** - A chat application built with Django and Django Channels
2. **JavaScript Implementation** - A chat application built with pure JavaScript and the ws library

Both applications demonstrate the working principles of WebSockets through a chat interface with similar features and UI.

## Features

- Multiple chat rooms
- Real-time messaging
- Join/leave notifications
- Username customization
- Clean, modern UI

## Getting Started

Each implementation has its own directory with a separate README file containing detailed setup and usage instructions.

### Django Channels Implementation

Located in the `django` directory. Uses Django Channels with Daphne for WebSocket handling.

To run:
```bash
cd django
docker-compose up --build
```

Access at: http://localhost:8000

### JavaScript Implementation

Located in the `javascript` directory. Uses the ws library for WebSocket handling.

To run:
```bash
cd javascript
docker-compose up --build
```

Access at: http://localhost:3000

## Testing with Multiple Users

To properly test WebSocket functionality:

1. Open the application in two different browser windows or tabs
2. Enter the same room name in both windows but use different usernames
3. Send messages from one window and observe them appearing in real-time in the other window
4. Try joining and leaving rooms to see the system notifications

## Requirements

- Docker and Docker Compose

## Learning Resources

These applications demonstrate several key concepts:

- WebSocket communication
- Real-time data exchange
- Room-based chat functionality
- Docker containerization
- Frontend/backend integration

For more details, see the README files in each implementation directory. 