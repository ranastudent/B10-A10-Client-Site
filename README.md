
<img height="800" src="https://i.ibb.co.com/RkvMYqgW/B10A10p1.png" alt="Crowdfunding Platform Screenshot" />

# Crowdfunding Platform

Welcome to the Crowdfunding Platform! This project aims to provide a seamless and efficient way for users to create, manage, and support crowdfunding campaigns.

Live Site URL: [b10-a10-auth-ce68e.firebaseapp.com](https://b10-a10-auth-ce68e.firebaseapp.com)

# Features

- **User Registration and Authentication**: Secure user registration and login functionality to ensure user data privacy and security.
- **Create and Manage Campaigns**: Users can create new crowdfunding campaigns, update existing ones, and manage their campaigns effortlessly.
- **Donation Management**: Supporters can donate to campaigns, and users can track their donations and see the impact they are making.
- **Responsive Design**: The platform is designed to be fully responsive, ensuring a seamless experience across all devices.
- **Real-time Updates**: Campaigns and donations are updated in real-time, providing users with the latest information and progress.

# Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Hosting**: Vercel

# How to Run the Project Locally

To run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/crowdfunding-platform.git
   cd crowdfunding-platform
   ```

2. **Install Dependencies**:
   Navigate to both the frontend and backend directories and install the required dependencies.
   
   Frontend:
   ```bash
   cd frontend
   npm install
   ```

   Backend:
   ```bash
   cd backend
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the `backend` directory and add the following environment variables:
   ```plaintext
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the Backend Server**:
   ```bash
   cd backend
   npm start
   ```

   The backend server will start running on `http://localhost:5000`.

5. **Run the Frontend Server**:
   Open a new terminal window and navigate to the `frontend` directory:
   ```bash
   cd frontend
   npm start
   ```

   The frontend server will start running on `http://localhost:3000`.

6. **Access the Application**:
   Open your web browser and go to `http://localhost:3000` to see the application in action.
