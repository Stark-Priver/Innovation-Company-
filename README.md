📦 Company Innovation Platform — Full Stack System
A full-featured platform for a Tanzanian company specializing in:

Project Design & Implementation (ICT & Electronics)

Research, Book, and Report Writing

Online Learning System (LMS)

Digital & Physical Storefront

Client Portal with Project Tracking

Local Payment Gateway Integration: AzamPay, ZenoPay, Selcom

📘 Table of Contents
📌 Project Overview

🔧 Technologies Used

📁 Project Structure

🚀 Getting Started

🛠 Features

💳 Payment Integration

🧪 Testing

📄 License

📌 Project Overview
This project is a multi-role platform that supports:

Clients requesting custom ICT/Electronics/Research projects

Tracking progress with downloadable deliverables

Students purchasing and enrolling in online courses

Admins managing users, projects, courses, and orders

Vendors and internal team members handling content

Integration with Tanzanian mobile payment gateways

🔧 Technologies Used
Layer	Tech Stack
Frontend	React.js, Tailwind CSS, Axios, React Router
Backend	Node.js, Express.js, REST API
Database	PostgreSQL, Sequelize ORM
Auth	JWT (Token-based Authentication)
File Storage	AWS S3 / Local FS
Payments	AzamPay API, ZenoPay API, Selcom API
Hosting	Compatible with Railway, HostAfrica, Vercel

📁 Project Structure
bash
Copy
Edit
/client             → React Frontend
  /src
    /components     → Shared UI components
    /pages          → Auth, Dashboard, Projects, Courses, Store
    /services       → Axios API calls
    /assets         → Images, Icons

/server             → Node.js Backend
  /controllers      → Business logic
  /models           → Sequelize models
  /routes           → Express routes
  /middlewares      → Auth, error handling
  /utils            → Payment integration, file upload
  /config           → DB, env, and payment setup
🚀 Getting Started
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-org/innovation-platform.git
cd innovation-platform
2. Environment Setup
Ensure you have Node.js, PostgreSQL, and Jules (as your IDE) installed.

Create .env files in both /client and /server:

/server/.env
env
Copy
Edit
PORT=5000
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=your_db_password
DB_NAME=innovation_db
JWT_SECRET=your_jwt_secret
AZAMPAY_API_KEY=your_key
ZENOPAY_SECRET=your_secret
SELCOM_KEY=your_key
3. Install Dependencies
Backend
bash
Copy
Edit
cd server
npm install
Frontend
bash
Copy
Edit
cd ../client
npm install
4. Run Development Servers
bash
Copy
Edit
# In /server
npm run dev

# In /client
npm start
5. Database Setup
Make sure PostgreSQL is running. Then in /server:

bash
Copy
Edit
npx sequelize-cli db:create
npx sequelize-cli db:migrate
🛠 Features
👥 User Roles
Client

Admin

Writer/Designer

Student

Instructor

🧱 Core Modules
🔧 Project Management
Client submits a project (with files)

Admin assigns team

Feedback loop with file uploads

Project status tracker

Download progress reports or final chapters

🎓 Learning (LMS)
Enroll & pay for courses

Watch video lessons

Take quizzes, download materials

Receive certificate after completion

🛍️ E-Commerce Store
Shop electronics kits, books, templates

Add to cart, checkout via local payments

Download digital content post-purchase

💳 Payment Integration
All payments handled via secure, Tanzanian gateways:

Gateway	Notes
AzamPay	STK Push, QR Code, Web API
ZenoPay	Wallets, Airtel/Tigo/Vodacom integrations
Selcom	Mobile, Card, USSD, Bank

Webhook handlers update payment status in real-time.

🧪 Testing
Use Postman or Swagger for testing backend APIs.
Sample test cases are provided in /server/tests.

Run backend tests:

bash
Copy
Edit
npm run test
🛡 Security & Best Practices
JWT-based auth with role-level access

Secure file uploads

HTTPS recommended

CORS configured

Input validation and sanitization

📄 License
This project is licensed under the MIT License.

📫 Contact
For any questions or support:

📧 Email: support@pritechvior.co.tz
📞 Phone: +255 627147681
🌍 Website: pritechvior.co.tz
