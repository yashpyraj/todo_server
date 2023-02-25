# React Native Todo List App

![React Native Logo](https://img.icons8.com/office/80/000000/react.png)
![Node.js Logo](https://img.icons8.com/color/80/000000/nodejs.png)
![MongoDB Logo](https://img.icons8.com/color/80/000000/mongodb.png)

This is a full-stack todo list app built with React Native, Zustand, Node.js, Express, and MongoDB. It allows users to create and manage their todo items, mark them as completed or not completed, and view their own todo list only after logging in.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [App Architecture](#app-architecture)
- [File Structure](#file-structure)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install and run the app locally, follow these steps:

1. Clone this repository:
git clone https://github.com/yashpyraj/todo_server.git
2. Install the required dependencies:
cd todo_server && yarn
3. Start the backend server:
yarn server
4. Open a new terminal window and start the React Native app:
yarn start
5. If you're using an iOS device or simulator, run:
yarn ios
If you're using an Android device or emulator, run:

## Features

- User authentication using JWTs
- Create, read, update, and delete todo items
- Mark todo items as completed or not completed
- View todo items in a list sorted by creation date
- View only the authenticated user's todo list

## Technologies Used

- React Native
- Zustand
- Node.js
- Express
- MongoDB
- React Native Navigation
- Axios
- JSON Web Tokens (JWTs)

## App Architecture

The app is built using a client-server architecture. The client side of the app is built using React Native and Zustand for state management. The server side of the app is built using Node.js, Express, and MongoDB.

The app uses React Native Navigation to implement a navigation stack that allows the user to navigate between the login, signup, and todo list screens.

## File Structure

|-- node_modules
|-- src
| |-- components
| | |-- TodoItem.tsx
| |-- screens
| | |-- LoginScreen.tsx
| | |-- SignupScreen.tsx
| | |-- TodoListScreen.tsx
| |-- store
| | |-- auth.ts
| | |-- index.ts
| | |-- todos.ts
| |-- App.tsx
|-- index.js
|-- package.json
|-- yarn.lock



The `components` folder contains the `TodoItem` component, which is used to render individual todo items.

The `screens` folder contains the `LoginScreen`, `SignupScreen`, and `TodoListScreen` components, which represent the login/signup screens and the main todo list screen, respectively.

The `store` folder contains the `auth` and `todos` stores, which manage the authentication state and the todo data, respectively.

Finally, the `App.tsx` file is the entry point of the app, and the `index.js`, `package.json`, and `yarn.lock` files are standard files for a React Native project.

