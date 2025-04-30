# 📚 Library Management System

A modern, responsive, and secure web application built for a school to efficiently manage its library. The system allows users to add, update, and categorize books, borrow and return them, and view detailed records — all through a seamless interface.

## 🌐 Live Website
[🔗 Live Site](https://library-management-syste-55454.web.app/)

## 🚀 Technologies Used

- **Frontend:** React.js, React Router DOM, Tailwind CSS, React Hook Form, React Rating Stars, SweetAlert2, Toastify
- **Backend:** Node.js, Express.js, MongoDB, JWT
- **Authentication:** Firebase Auth (Email/Password, Google)
- **Deployment:** Netlify (Client), Render/Vercel (Server)

## ✨ Key Features

### ✅ Authentication & Authorization
- Secure login and registration using Firebase (email/password + Google).
- Protected routes using JWT (JSON Web Token).
- Role-based access for key pages.
- Password validation and error handling.

### 📖 Book Management
- **Add Book:** Upload book cover, details, rating, and category.
- **Update Book:** Edit book info via protected route.
- **Delete Book:** (Optional).
- **Borrow Book:** Opens a modal, decreases quantity with `$inc`, prevents duplicate borrowing.
- **Return Book:** Increases quantity with `$inc`, removes from borrowed list.

### 📄 Pages & Routing
- **Home Page:** Banner/Slider, 4 Book Category Cards, 2 Extra Sections.
- **All Books Page:** Card/Table toggle, filter available books, update buttons.
- **Details Page:** Protected; shows detailed info and allows borrowing.
- **Add Book Page:** Protected form for adding books.
- **Borrowed Books Page:** Protected; shows user-specific borrowed books with return feature.
- **Login & Register:** With validation, toast notifications, and error feedback.
- **404 Not Found Page:** Custom-designed.
- **Dynamic Title:** Changes based on route.

### 🛡️ Security
- Firebase config & MongoDB URI secured via `.env` files.
- CORS handled correctly in production.
- JWT authentication implemented and protected routes secured.

### 📱 Responsive Design
- Fully responsive layout for mobile, tablet, and desktop.
- Eye-pleasing color contrast and layout spacing (non-Gobindo design 😄).

### 🔄 Others
- Loading spinners while fetching data.
- Toast / SweetAlert notifications on all actions (add/update/borrow/return).
- Hover effects and display name/photoURL on login.
- Prevents borrow button if quantity = 0.
