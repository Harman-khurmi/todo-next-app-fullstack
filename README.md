# Todo List Full Stack Application

A modern, full-stack todo list application built with Next.js, React, and MongoDB. Create, manage, and organize daily tasks with a clean and intuitive interface.

## 📋 Overview

A complete full-stack todo application demonstrating modern web development practices. Add tasks instantly without page reloads and manage them seamlessly.

## ✨ Features

- **Auto-focus Input** - Title field focused on page load for instant task entry
- **Keyboard Navigation** - Tab between fields, Ctrl+Enter to submit
- **Form Validation** - Prevents empty submissions with error messages
- **Smart Cursor** - Returns to title field after submission or validation error
- **Real-time Updates** - Tasks displayed without page refresh
- **Responsive Design** - Mobile, tablet, and desktop compatible
- **Dark Theme** - Modern UI with green accent colors
- **Instant Creation** - Add tasks without page reload

## 🛠️ Tech Stack

### Frontend
- **Next.js 16.1.6** - React framework
- **React 19.2.3** - UI library
- **Tailwind CSS 4** - Styling
- **Axios** - HTTP client
- **React Toastify** - Notifications
- **Lucide React** - Icons

### Backend & Database
- **Next.js API Routes** - Serverless endpoints
- **Node.js** - Runtime
- **MongoDB** - NoSQL database
- **Mongoose 9.2.2** - ODM

### Development
- **ESLint** - Linting
- **Babel React Compiler** - Optimization
- **PostCSS** - CSS processing

## ⚡ Getting Started

### Prerequisites
- Node.js v16+
- npm/yarn
- MongoDB Atlas account

📝 Usage
Page loads - title input auto-focused
Enter task title
Press Tab → move to description
Enter task description
Press Ctrl+Enter OR click "Add Task"
Validation checks both fields are filled
On success, form clears and cursor returns to title
Tasks display in table below form

🎨 Styling
Tailwind CSS with dark theme (bg-zinc-950, text-white) and green accents. Mobile-first responsive design using Tailwind breakpoints.

🔄 Key Features Explained
Auto-focus & Keyboard
Title auto-focused on load
Natural tab navigation
Ctrl+Enter submits from textarea
Validation
Both fields required
Error toast on empty submission
Focus returns to title for correction
Database
MongoDB connection via db.js
Connects on server startup
Mongoose schema validation
🚀 Future Enhancements
Edit/delete todos
Mark complete/incomplete
Filter by status
Search functionality
Due dates
User authentication
Drag-and-drop ordering

---

Happy Task Managing!