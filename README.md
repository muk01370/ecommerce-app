# eCommerce App

An eCommerce web application built using the MERN stack (MongoDB, Express.js, React, Node.js). This project allows users to browse products, add them to the shopping cart, and proceed to checkout. The app also includes features like user authentication, order management, and admin functionalities.

## Demo

You can view the live demo of the application here:  
**https://ecommerce-app-frontend-7ifc.onrender.com/**

## Features

- **User Authentication**: Users can register, log in, and manage their account.
- **Product Listing**: View a list of available products with pagination.
- **Shopping Cart**: Add products to the cart, modify quantities, and remove items.
- **Order Placement**: Users can place orders and view their order history.
- **Admin Panel**: Admin users can manage products and orders.
- **Responsive Design**: Mobile and tablet-friendly interface.
- **Checkout Process**: Integrated payment gateway (e.g., Stripe or another service).

## Tech Stack

- **Frontend**: React, Redux, React Router, Material-UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Integration**: Stripe (or your chosen payment processor)
- **State Management**: Redux
- **Deployment**: [Insert your deployment method if applicable, e.g., Heroku, Netlify]

## Installation

To get the project up and running locally, follow these steps:

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (either local instance or MongoDB Atlas)

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/muk01370/ecommerce-app.git
   cd ecommerce-app
   
**2. Backend Setup:**
Navigate to the backend directory and install dependencies:

bash
Copy
cd backend
npm install
Create a .env file in the backend directory to store sensitive credentials (like MongoDB URI, JWT Secret, etc.).
Example .env:

ini
Copy
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key

**3. Frontend Setup:**
Navigate to the frontend directory and install dependencies:

bash
Copy
cd ../frontend
npm install

**4. Run the Project:**
Backend: Start the backend server:
bash
Copy
cd backend
npm start
Frontend: Start the frontend application:

bash
Copy
cd ../frontend
npm start
The frontend will be available at http://localhost:3000 and the backend API at http://localhost:5000.

**Usage**
**Sign Up and Log In:**

Create a new user account or log in using the existing credentials.
**Browse Products:**

View the list of available products and filter them by category or search term.
**Add to Cart:**

Add items to the shopping cart and proceed to checkout.
**Place Order:**

Complete the order by entering payment information (via Stripe or another service).
**Admin Features:**

Admin users can log in to the admin panel to manage products and orders.
**Contributing**
Contributions are welcome! If you'd like to help improve the project, feel free to fork the repository, make changes, and submit a pull request.

**Steps to contribute:**
Fork the repository
Create a new branch for your feature or fix
Make your changes and commit them
Push to your forked repository
Submit a pull request with a description of your changes
**License**
This project is licensed under the MIT License - see the LICENSE file for details.
