# Nexsus Cyber Solutions Website

A premium, cyber-tech themed website for "Nexsus Cyber Solutions", featuring a modern responsive UI, admin panel, and backend API with persistent storage.

## 🚀 Features

### Frontend (React + Vite)
- **Premium Design**: Dark/Navy theme (`#141E30`), glassmorphism cards, and Framer Motion animations.
- **Pages**: Home, About, Services, Contact, and Admin Dashboard.
- **Components**:
    - Sticky Navbar with blur effect.
    - Floating Chatbot Widget (Role-based).
    - Animated Stats and Process flow.
    - Admin Panel with Leads visualization.

### Backend (Node.js + Express)
- **API**: Endpoints for Contact Forms and Chatbot leads.
- **Database**: MongoDB integration (via Mongoose) for persistent lead storage.
- **Email**: Nodemailer integration to send admin notifications on new leads.

## 🛠️ Tech Stack
- **Frontend**: React, Tailwind CSS, Framer Motion, React Router, Lucide React.
- **Backend**: Node.js, Express, Mongoose, Nodemailer, Dotenv.
- **Database**: MongoDB.

## 📦 Installation & Run

### 1. Backend Setup
Navigate to the backend folder:
```bash
cd backend
npm install
```

Configure Environment Variables (`backend/.env`):
```ini
PORT=5000
MONGO_URI=mongodb://localhost:27017/Nexsus-cyber
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

Start the Server:
```bash
npm run dev
# Server runs on http://localhost:5000
```

### 2. Frontend Setup
Navigate to the project root (in a new terminal):
```bash
cd 'c:\Live Project\Nexsus'
npm install
```

Start the Frontend:
```bash
npm run dev
# App runs on http://localhost:5173
```

## 🔐 Admin Access
- **URL**: `/admin/login`
- **Demo Credentials**:
    - Email: `admin@Nexsus.com`
    - Password: `admin`

## 📁 Project Structure
```
src/
├── admin/          # Admin Layout & Pages
├── components/     # UI, Layout, Sections, Chatbot
├── pages/          # Public Pages (Home, About, etc.)
backend/
├── models/         # Mongoose Schemas (Lead.js)
├── controllers/    # Route Logic (Contact, Leads)
├── routes/         # API Routes
├── server.js       # Entry Point
```

---
© 2026 Nexsus Cyber Solutions
