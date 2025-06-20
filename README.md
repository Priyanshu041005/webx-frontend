# WebX Frontend – Profile Dashboard App

A responsive and modern **React + Tailwind CSS** based frontend app that lets users **sign up, log in, edit profiles, and switch between light/dark themes**. 



## Features

-  **Authentication flow** (login, signup)
-  **Dashboard** with editable user profile
-  **Tailwind CSS styling**
-  **Dark/Light mode toggle**
-  **Persistent login** using `localStorage`
- **Toast notifications**
- Fully **responsive** across devices



## Project Structure


webx-frontend/
├── public/
│   └── index.html
├── src/
│   ├── assets/             
│   ├── components/
│   │   └── ThemeToggle.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Dashboard.jsx
│   │   └── EditProfile.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
├── postcss.config.js
└── README.md



## Setup Instructions


1. **Clone the repository**
   ```bash
   git clone https://github.com/Priyanshu041005/webx-frontend.git
   cd webx-frontend
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run the app**
   ```bash
   npm run dev
   ```
4. **Build for production**
   ```bash
   npm run build
   ```


## Tech Stack


1. React 19

2. Tailwind CSS 3

3. React Router

4. React Context API

5. react-toastify



## Author

Priyanshu Paliwal










