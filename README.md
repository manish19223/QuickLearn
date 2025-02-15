# QuickLearn App

This project is a full-stack QuickLearn  application built with React and Vite on the frontend, and Node.js with Express.js and MongoDB on the backend. The application includes features for user and admin authentication, course creation, course purchase, and more.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation and Setup](#installation-and-setup)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Course QuickLearn App allows users to browse and purchase courses, while admins can create, update, and delete courses. The app uses JWT for authentication and integrates with Stripe for payment processing.

## Features

- User authentication (signup, login, logout)
- Admin authentication (signup, login, logout)
- Course creation and management by admin
- Course purchase by users
- Payment integration with Stripe
- Responsive design with Tailwind CSS

## Tech Stack

**Frontend:**

- React
- Vite
- Tailwind CSS
- Axios
- React Router
- React Hot Toast
- ESLint

**Backend:**

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- Cloudinary (for image uploads)
- Stripe (for payment processing)
- Zod (for validation)

## Installation and Setup

### Backend

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/course-selling-app.git
   cd course-selling-app/backend
   ```
