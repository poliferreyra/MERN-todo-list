# My ToDo List

## Description

**My ToDo List** is a web application for task management built with the MERN stack (MongoDB, Express, React, Node.js) and **TypeScript**. It allows users to create, edit, complete, and delete tasks. The project uses **Next.js (App Router)** on the frontend and a **Node.js** server with **Express** on the backend. This is my first practical approach to this stack and to organizing full-stack applications.

---

## Technologies Used

### Frontend

- **Next.js** (App Router)
- **React** (v18)
- **TypeScript**
- **Redux Toolkit** for state management
- **Styled-components** for dynamic styles
- **React Hook Form** for forms
- **Axios** for HTTP requests

### Backend

- **Node.js** with **Express** (v4)
- **TypeScript**
- **MongoDB** as the database
- **Mongoose** for data modeling
- **JWT** for authentication
- **Dotenv** for environment configuration

---

## Installation

## 1. Clone the repository

```bash
git clone https://github.com/poliferreyra/MERN-todo-list.git
cd MERN-todo-list

INSTALL DEPENDENCIES

You can use the console or the integrated terminal in Visual Studio Code (VSC).

**Backend:**

cd backend
npm install

**Frontend:**

cd frontend
npm install
```

## 2. MongoDB Setup

To use MongoDB in your project, follow these steps to set up the database, create a collection, and get the required `MONGO_URI`.

---

### Step 1: Sign up for MongoDB

1. Log in to your [MongoDB Atlas](https://www.mongodb.com/es) account.
2. Sign up using your Google account and follow the steps.

### Step 2: Create a Project in MongoDB Atlas

1. On the dashboard, click on **"New Project"**.
2. Enter a name for your project (e.g., "ToDo App") and click **"Next"**.
3. Add team members if needed, or skip this step by clicking **"Create Project"**.
4. Once your project is created, you'll be taken to the project dashboard where you can proceed to create a cluster.

### Step 3: Get the Mongo URI

1. Go to your project dashboard in [MongoDB Atlas](https://www.mongodb.com/).
2. In the left sidebar, click on **"Database Deployments"**.
3. Locate your cluster and click on the **"Driver"** button and follow de steps.
4. Copy the connection string that appears. It will look something like this:

mongodb+srv://<username>:<password>@clustername.mongodb.net/<dbname>?retryWrites=true&w=majority

5. Replace the placeholders in the connection string:
- `<username>`: Your MongoDB username.
- `<password>`: Your MongoDB password.
- `<dbname>`: The name of your database.

6. Paste the updated connection string into your `.env` file as the value for `MONGO_URI`, like this:

```env
MONGO_URI=mongodb+srv://your_username:your_password@clustername.mongodb.net/your_database?retryWrites=true&w=majority
```

## 3. Configure Auth0

To use Auth0 in your project, follow these steps to generate the necessary keys and set them up in your local environment.

### Step 1: Create an Auth0 account

1. Visit  [Auth0](https://auth0.com/) and sign up or log in if you already have an account.

### Step 2: Create a new application

1. In the Auth0 dashboard, go to the **Applications** section.
2. Click **Create Application**.
3. Choose the type of application you want to create (e.g., **Web Applications**).
4. Name your application and click **Create**.

### Step 3: Get your Auth0 credentials

1. In the settings page of your newly created application, you’ll find the following values:
   - **Client ID**: This is your client ID, which you’ll need for configuration.
   - **Client Secret**: This is the secret associated with your client.
   - **Domain**: This is your Auth0 application’s domain, formatted as `https://<your-domain>.auth0.com`.
   
   Copy these values as you’ll need them in the next step.

### Step 4: Configure Auth0 Public Key

To configure the Auth0 public key for verifying RS256 tokens, follow these steps:

- Navigate to the Applications section and select the application you are working with.
- Go to the Settings tab and scroll down to find the Signing Keys section.
- Locate the public key, which is used to verify the JWT signature. Download or copy the public key.
- Save the key in a file named **public.pem** and place it in your project root directory or any secure location.

### Step 5: Set up environment variables

Use the provided example files (`.env.example` y `.env.local.example`) as a base to configure your environment variables.

```
**Backend:**

.env

PORT=4000
FRONTEND_URL=http://localhost:3000
MONGO_URI=mongodb://localhost:27017/todo
AUTH0_PUBLIC_KEY_LOCATION=public.pem

**Frontend:**

env.local

AUTH0_SECRET=tu-clave-secreta-aqui
AUTH0_BASE_URL=http://localhost:3000
AUTH0_ISSUER_BASE_URL=https://dev-xyz.auth0.com
AUTH0_CLIENT_ID=tu-client-id-aqui
AUTH0_CLIENT_SECRET=tu-client-secret-aqui
AUTH0_AUDIENCE=http://localhost:4000/api
```

## Usage

### Start the server

**Backend:**

```bash
cd backend
npm run dev
```

**Frontend:**

```bash
cd frontend
npm dev:frontend
```

Open your browser at  [http://localhost:3000](http://localhost:3000) to access the application.

## Features

- Full CRUD task management.
- Authentication using JWT (JSON Web Tokens).
- Responsive design with React.
- RESTful API for communication between frontend and backend.

## Test

To run tests, use the following command in the backend directory:

```bash
npm test
```

## Contact

If you have any questions or suggestions, feel free to reach out to me:

- **LinkedIn:** [Poli Ferreyra](https://linkedin.com/in/poliferreyra)

