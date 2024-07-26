<h1 align="center">E-commerce Website</h1>



<p align="center">
  An E-commerce platform to browse, search, and purchase products seamlessly.
</p>

---

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
---

## Introduction

Welcome to the **E-commerce Website**, a platform where you can explore a wide variety of products with ease. This project is built using Node.js for the backend API and Firebase for authentication, providing a seamless shopping experience with features like product search, category filters, and user reviews.

---

## Features

- **Product Search:** Easily search for products using a search bar.
- **Category Browsing:** Choose products by category for a more focused shopping experience.
- **Side Filters:** Filter products by category, brand, or price range.
- **Sorting Options:** Sort products by best rated, price high to low, or low to high.
- **User Reviews:** Add comments and rate products to share your feedback.
- **User Authentication:** Secure signup and login using Firebase, with email verification.
- **Admin Panel:** Admins can create and manage products, ensuring up-to-date inventory.

---

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript, React.js, Nextjs.
- **Backend:** Node.js, Express.js.
- **Authentication:** Firebase.
- **Hosting:** Vercel.

---

## Installation

Follow these steps to set up the project on your local machine:



## Clone the Repository
```bash
git clone https://github.com/Ahmedhany23/ecommerce.git
cd ecommerce

# Install Dependencies
npm install

# Set Up Environment Variables
# Added to next.config.mjs
 env: {
    base_URL: `https://ecommerce-backend-production-fdab.up.railway.app/`,
    admin_email:  'admin@admin.com',
    admin_password: "admin123456",
  },

# Run the Server
npm run dev

