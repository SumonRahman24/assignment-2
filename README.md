# MyExpressTypeScriptApp

MyExpressTypeScriptApp is a Node.js application built with Express, TypeScript, and Mongoose. It includes validation with Joi and other useful tools.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed [Node.js](https://nodejs.org/) (version 14.x or later).
- You have installed [MongoDB](https://www.mongodb.com/try/download/community) and it is running on your local machine or you have access to a MongoDB Atlas cluster.
- You have a package manager like npm (comes with Node.js) or yarn.

## Installation

To install the application, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/SumonRahman24/assignment-2.git
   ```
2. Navigate to the project directory:
   ```sh
   cd MyExpressTypeScriptApp
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
   _or_ if you use yarn:
   ```sh
   yarn install
   ```

## Running the Application

To run the application locally, follow these steps:

1. Ensure you are in the project directory.
2. Compile the TypeScript code:
   ```sh
   npm run build
   ```
   _or_ if you use yarn:
   ```sh
   yarn build
   ```
3. Start the application:
   ```sh
   npm run dev
   ```
   _or_ if you use yarn:
   ```sh
   yarn start
   ```
4. Open your web browser and go to:
   ```
   http://localhost:5000
   ```

## Configuration

The application requires a configuration file to connect to the MongoDB database and set up other environment variables. Here’s how you can set up your configuration:

1. Create a `.env` file in the root directory.
2. Add the following environment variables in the `.env` file:

   ```env
   PORT=5000
   ```
