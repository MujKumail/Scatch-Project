👜 SCATCH – Bag Shop Website

SCATCH is a modern e-commerce website for bags, built using Node.js, Express.js, MongoDB, and EJS. The platform supports users, product listings, and owner management, with essential features like login, flash messaging, and session handling.

🚀 Features

🛍️ Product Listing & Management

👤 User Registration & Login

🧑‍💼 Owner Portal for Bag Upload

📦 Bag Details Page

💬 Flash Messaging for Alerts

🔐 Session Management with express-session

🧭 Modular Routing Structure

🛠️ Tech Stack

Backend: Node.js, Express.js

Database: MongoDB with Mongoose

Templating Engine: EJS

Styling: CSS (in /public)

Environment Management: dotenv

Session & Flash Handling: express-session, connect-flash

Others: cookie-parser, express.json, express.urlencoded

📁 Project Structure

SCATCH/
│

├── config/
│   └── mongoose-connection.js       # MongoDB connection setup
│

├── routes/
│   ├── index.js                     # Home & shared routes
│   ├── ownersRouter.js              # Routes for shop owners
│   ├── productsRouter.js            # Routes for bags/products
│   └── usersRouter.js               # Routes for user authentication
│

├── views/
│   ├── includes/                    # Header, footer, partials
│   ├── products/                    # Product-related views
│   ├── users/                       # Login/Register views
│   ├── owners/                      # Owner dashboard/views
│   └── index.ejs                    # Homepage
│

├── public/                          # Static files (CSS, images)
│
├── .env                             # Environment variables
├── .gitignore
├── app.js                           # Main server file
└── README.md

🔧 Environment Setup

1. Clone the repository
 
   git clone https://github.com/your-username/scatch-bag-shop.git
   cd scatch-bag-shop

2. Install dependencies
  
   npm install

🔐 Authentication & Security

User sessions are managed using express-session.

Flash messages are shown on login/logout and form submissions.

Passwords and sensitive info should be hashed and secured (future enhancement).

✨ Suggested Improvements

🛒 Add Cart & Checkout functionality

🔍 Add search & filter for bags

📈 Admin dashboard with analytics

📷 Image upload for bags using Multer

📱 Make responsive with modern CSS framework (e.g., Tailwind, Bootstrap)

    
