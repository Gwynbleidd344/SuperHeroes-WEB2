# SuperHero Catalog 🦸‍♂️

This project is a full-stack web application designed to manage a catalog of superheroes. It features a React-based frontend and a Node.js Express backend.

## Features ✨

-   **View Superheroes:** Display a list of Marvel superheroes. 🦸‍♀️
-   **Add New Superheroes:** Add new characters to the catalog. ➕
-   **Update Superheroes:** Modify existing superhero details. ✏️
-   **Delete Superheroes:** Remove superheroes from the catalog. 🗑️
-   **Search Functionality:** Filter superheroes by name. 🔍
-   **Theme Toggling:** Switch between light and dark themes. 💡🌙
-   **Responsive Design:** Optimized for various screen sizes. 📱💻

## Technologies Used 🛠️

### Frontend 🚀

-   **React:** A JavaScript library for building user interfaces. ⚛️
-   **Vite:** A fast build tool for modern web projects. ⚡
-   **Tailwind CSS:** A utility-first CSS framework for rapid UI development. 💨
-   **Boxicons:** Free open source SVG icons. 📦

### Backend ⚙️

-   **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine. 🟢
-   **Express.js:** A fast, unopinionated, minimalist web framework for Node.js. 🌐
-   **CORS:** Middleware to enable Cross-Origin Resource Sharing. 🔗
-   **File System (fs):** Used for basic JSON file-based data storage. 📁

## Setup and Installation 🚀

Follow these steps to get the project up and running on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/Gwynbleidd344/SuperHeroes-WEB2.git
```
```bash
cd marvel-web2
```

### 2. Backend Setup

Navigate to the `backend` directory and install the dependencies:

```bash
cd backend
```
```bash
npm install
```

Create a `user.json` file in the `backend` directory to store your data. Initially, it should contain an empty array of characters:

```json
{
  "characters": []
}
```

### 3. Frontend Setup

Navigate to the `frontend` directory and install the dependencies:

```bash
cd frontend
npm install
```

## Running the Application ▶️

### 1. Start the Backend Server

From the `backend` directory, run:

```bash
npm start
```

The backend server will run on `http://localhost:8080`.

### 2. Start the Frontend Development Server

From the `frontend` directory, run:

```bash
npm run dev
```

The frontend application will be accessible at `http://localhost:5173` (or another port if 5173 is in use).

## Project Structure 📂

```
marvel-web2/
├── backend/
│   ├── controllers/
│   │   └── controller.js
│   ├── node_modules/
│   ├── package.json
│   ├── routes/
│   │   └── route.js
│   ├── server.js
│   └── user.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   │   ├── font/
│   │   │   │   └── BitcountPropSingle_Cursive-Medium.ttf
│   │   │   └── image/
│   │   │       └── heroes-logo.png
│   │   ├── components/
│   │   │   ├── AddPopUp.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── CardList.jsx
│   │   │   ├── Header.jsx
│   │   │   └── Update.jsx
│   │   ├── context/
│   │   │   └── ThemeContext.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── vite-env.d.ts
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── tailwind.config.js
│   └── vite.config.js
├── .gitignore
└── README.md
```