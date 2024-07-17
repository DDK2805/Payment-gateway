# Payment Gateway Service

This is a scalable and secure payment gateway service that handles different types of transactions (e.g., credit card, debit card, digital wallets). This project includes the backend implementation using Node.js and Express, API documentation with Swagger, containerization with Docker, and CI/CD pipeline setup.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Design Document](#design-document)
- [Contributing](#contributing)
- [License](#license)

## Features

- Handles various types of transactions.
- CRUD operations for payments.
- Payment processing and refund handling.
- API documentation using Swagger.
- Containerization with Docker.
- CI/CD pipeline for continuous integration and deployment.

## Requirements

- Node.js (v12 or later)
- MongoDB
- Docker (optional, for containerization)
- AWS CLI (optional, for deployment)
- Git

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/payment-gateway.git
   cd payment-gateway


2. Install dependencies:

    npm install
   
3.Set up environment variables:

Create a .env file in the root directory and add the following variables:

MONGO_URI=mongodb://localhost:27017/payment-gateway
JWT_SECRET=your_jwt_secret

4.Start MongoDB:

Ensure MongoDB is running on your local machine. If not, start it using:

mongod

5.Running the Application

npm start / node server.js

---------------------------------------------------------------------------

6.Testing the Endpoints

Login Endpoint
Request:

URL: http://localhost:3000/login
Method: POST
Headers: Content-Type: application/json
Body: (raw JSON)
json

{
  "username": "user1",
  "password": "password1"
}
Response:

json

{
  "token": "your_jwt_token"
}

Protected Route
Request:

URL: http://localhost:3000/protected
Method: GET
Headers:
plaintext

Authorization: Bearer your_jwt_token

Replace your_jwt_token with the actual token received from the login response.

Response:

json
Copy code
{
  "message": "This is a protected route",
  "user": {
    "id": 1,
    "username": "user1",
    "iat": timestamp,
    "exp": timestamp
  }
}

-----------------------------------------------------------------

Testing Endpoints:

Create a Payment:

http
Copy code
POST http://localhost:3000/api/payments
Body (JSON):

json
Copy code
{
  "amount": 100,
  "currency": "USD",
  "paymentMethod": "credit_card"
}

Process a Payment:

POST http://localhost:3000/api/payments/{payment_id}/process


Retrieve Payment Status:

GET http://localhost:3000/api/payments/{payment_id}


Handle Refund:

POST http://localhost:3000/api/payments/{payment_id}/refund


Verify Responses:

Check the responses in Postman to ensure they match the expected outputs.
