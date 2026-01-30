import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Chatbot from './components/chatbot/Chatbot';
import CursorFollower from './components/ui/CursorFollower';
import SplashScreen from './components/ui/SplashScreen';
import PageLoader from './components/ui/PageLoader';
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

function App() {
    const location = useLocation();
    const [isInitialLoading, setIsInitialLoading] = useState(true);
    const [isPageLoading, setIsPageLoading] = useState(false);
    const isAdminRoute = location.pathname.startsWith('/admin');

    useEffect(() => {
        // Handle page transition loader
        if (!isInitialLoading) {
            setIsPageLoading(true);
            const timer = setTimeout(() => setIsPageLoading(false), 800);
            return () => clearTimeout(timer);
        }
    }, [location.pathname, isInitialLoading]);

    // 3D Transition variants
    const pageVariants = {
        initial: {
            opacity: 0,
            rotateY: 15,
            scale: 0.95,
            z: -100
        },
        animate: {
            opacity: 1,
            rotateY: 0,
            scale: 1,
            z: 0,
            transition: {
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1]
            }
        },
        exit: {
            opacity: 0,
            rotateY: -15,
            scale: 0.95,
            z: -100,
            transition: {
                duration: 0.6,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="bg-primary min-h-screen font-sans selection:bg-accent selection:text-white overflow-x-hidden">
            <AnimatePresence>
                {isInitialLoading && (
                    <SplashScreen finishLoading={() => setIsInitialLoading(false)} />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isPageLoading && !isAdminRoute && <PageLoader />}
            </AnimatePresence>

            <ScrollToTop />
            {!isAdminRoute && <CursorFollower />}
            {!isAdminRoute && <Navbar />}
            
            <main className="perspective-1000 preserve-3d">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageVariants}
                        className="preserve-3d"
                    >
                        <Routes location={location}>
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
                    </motion.div>
                </AnimatePresence>
            </main>

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