# ChitChat

A modern real-time chat application that allows users to connect, exchange messages instantly, share images, and see online user status in real time.

## Live Preview
https://chit-chat-app-tau.vercel.app/

## Features
- User Authentication (Sign Up & Login)
- Real-Time Messaging with Socket.IO
- Online/Offline User Status
- Image Sharing
- User Profile Management
- Secure JWT Authentication
- Cloud Image Storage with Cloudinary
- Responsive UI for Desktop and Mobile
- MongoDB Database Integration

## Tech Stack
### Frontend
- React.js
- React Router
- Tailwind CSS
- Axios
- Socket.IO Client
### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- JWT Authentication
- Cloudinary

## Project Structure
```text
chitchat/ 
│ 
├── client/ 
│   ├── src/ 
│   ├── public/ 
│   └── package.json 
│ 
├── server/ 
│   ├── controllers/ 
│   ├── models/ 
│   ├── routes/ 
│   ├── middleware/ 
│   ├── config/ 
│   └── server.js 
│   └── README.md
```

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/sanyuja-zagade/chitchat.git
cd chitchat
```

### 2. Install Frontend Dependencies

```bash
cd client
npm install
```

### 3. Install Backend Dependencies

```bash
cd ../server
npm install
```

### 4. Configure Environment Variables

## Environment Variables

### Client (`client/.env`)

```env
VITE_BACKEND_URL=http://localhost:5000
```

### Server (`server/.env`)

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```


### 5. Start the Backend

```bash
npm run server
```

### 6. Start the Frontend

```bash
cd ../client
npm run dev
```

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request