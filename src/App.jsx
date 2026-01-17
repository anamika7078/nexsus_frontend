import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Chatbot from './components/chatbot/Chatbot';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Features from './pages/Features';
import Contact from './pages/Contact';
import AdminLayout from './admin/AdminLayout';
import Login from './admin/Login';
import Register from './admin/Register';
import ForgotPassword from './admin/ForgotPassword';
import Dashboard from './admin/Dashboard';
import Leads from './admin/Leads';
import Industries from './pages/Industries';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import ScrollToTop from './components/layout/ScrollToTop';
import ProtectedRoute from './components/auth/ProtectedRoute';
import ChatbotConfig from './admin/ChatbotConfig';
import Settings from './admin/Settings';
import Quotes from './admin/Quotes';
import Analytics from './admin/Analytics';



// Placeholder pages
const Placeholder = ({ title }) => (
    <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="text-4xl text-white font-bold mb-4">{title}</h1>
        <p className="text-textSecondary">Content coming soon...</p>
    </div>
);



function App() {
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith('/admin');

    return (
        <div className="bg-primary min-h-screen font-sans selection:bg-accent selection:text-white">
            <ScrollToTop />
            {!isAdminRoute && <Navbar />}
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/features" element={<Features />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />

                {/* Admin Routes */}
                <Route path="/admin/login" element={<Login />} />
                <Route path="/admin/register" element={<Register />} />
                <Route path="/admin/forgot-password" element={<ForgotPassword />} />

                {/* Protected Admin Routes */}
                <Route element={<ProtectedRoute />}>
                    <Route element={<AdminLayout />}>
                        <Route path="/admin/dashboard" element={<Dashboard />} />
                        <Route path="/admin/analytics" element={<Analytics />} />
                        <Route path="/admin/leads" element={<Leads />} />
                        <Route path="/admin/quotes" element={<Quotes />} />
                        <Route path="/admin/chatbot" element={<ChatbotConfig />} />
                        <Route path="/admin/settings" element={<Settings />} />
                    </Route>
                </Route>
            </Routes>
            {!isAdminRoute && <Footer />}
            {!isAdminRoute && <Chatbot />}
        </div>
    );
}

// Wrap App in Router here to allow useLocation hook usage inside App content
const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
