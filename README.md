Acrux Test

Acrux Test is an Express app that runs on http://localhost:3001.
Getting started

To get started with Acrux Test, follow these steps:

    Clone this repository to your local machine.
    Navigate to the project directory in your terminal.
    Install the dependencies using npm install.
    Start the app using npm start.

bash

git clone https://github.com/your-username/acrux-test.git
cd acrux-test
npm install
npm start

Once the app is running, you can access it by navigating to http://localhost:3001 in your web browser.
API Routes

The Acrux Test app provides the following API routes:
GET /

Returns a simple welcome message.
POST /users

Creates a new user in the database. Requires a JSON payload in the request body with the following properties:

    name: The name of the user (string)
    email: The email address of the user (string)
    password: The password of the user (string)

Example request:

json

{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}

Example response:

json

{
  "id": "60b9f06b7e4bdf3c4c98d422",
  "name": "John Doe",
  "email": "john.doe@example.com"
}

GET /users

Returns a list of all users in the database.

Example response:

json

[
  {
    "id": "60b9f06b7e4bdf3c4c98d422",
    "name": "John Doe",
    "email": "john.doe@example.com"
  },
  {
    "id": "60b9f0a27e4bdf3c4c98d423",
    "name": "Jane Doe",
    "email": "jane.doe@example.com"
  }
]

Configuration

The app can be configured using environment variables:

    PORT: The port number to run the app on (default: 3001)
    MONGODB_URI: The MongoDB connection string (default: mongodb://localhost/acrux-test)

To set an environment variable, you can either set it directly in your shell before starting the app, or create a .env file in the project directory with the following format:

makefile

VARIABLE=value

For example:

bash

PORT=4000
MONGODB_URI=mongodb://username:password@host:port/database

License

Acrux Test is licensed under the MIT License. Feel free to use, modify and distribute this app as you see fit.