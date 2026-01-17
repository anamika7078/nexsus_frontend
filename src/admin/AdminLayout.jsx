import React, { useState, useRef } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import {
    LayoutDashboard, Users, Settings, LogOut,
    MessageSquare, FileText, ChevronLeft, ChevronRight,
    TrendingUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Portal Tooltip Component
const Tooltip = ({ children, text, isVisible }) => {
    const [coords, setCoords] = useState({ top: 0, left: 0 });
    const targetRef = useRef(null);

    const handleMouseEnter = () => {
        if (targetRef.current) {
            const rect = targetRef.current.getBoundingClientRect();
            // Position above the element
            setCoords({
                top: rect.top - 40,
                left: rect.left + rect.width / 2
            });
        }
    };

    return (
        <div
            ref={targetRef}
            onMouseEnter={handleMouseEnter}
            className="relative flex items-center justify-center w-full"
        >
            {children}
            {isVisible && createPortal(
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 10, x: '-50%' }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, scale: 0.8, y: 10, x: '-50%' }}
                        style={{
                            position: 'fixed',
                            top: coords.top,
                            left: coords.left,
                            zIndex: 9999,
                        }}
                        className="bg-accent text-white px-3 py-1.5 rounded-lg text-[10px] font-black tracking-widest uppercase shadow-2xl pointer-events-none whitespace-nowrap border border-white/10"
                    >
                        {text}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-accent" />
                    </motion.div>
                </AnimatePresence>,
                document.body
            )}
        </div>
    );
};

const AdminLayout = () => {
    const navigate = useNavigate();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);

    const handleLogout = () => {
        localStorage.clear();
        navigate('/admin/login');
    };

    const navItems = [
        { to: "/admin/dashboard", icon: LayoutDashboard, label: "Dashboard" },
        { to: "/admin/analytics", icon: TrendingUp, label: "Advanced Analysis" },
        { to: "/admin/leads", icon: Users, label: "Leads" },
        { to: "/admin/quotes", icon: FileText, label: "Quotes" },
        { to: "/admin/chatbot", icon: MessageSquare, label: "Chatbot Q&A" },
        { to: "/admin/settings", icon: Settings, label: "Settings" }
    ];

    return (
        <div className="flex h-screen bg-primary text-white overflow-hidden">
            {/* Sidebar */}
            <motion.aside
                initial={false}
                animate={{ width: isCollapsed ? 80 : 256 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-primary/50 border-r border-white/10 flex flex-col relative z-20"
            >
                {/* Collapse Toggle Button */}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="absolute -right-4 top-24 bg-accent text-white p-2 rounded-full border-2 border-primary shadow-2xl hover:scale-110 transition-transform z-50 group"
                    title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
                >
                    {isCollapsed ? (
                        <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                    ) : (
                        <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
                    )}
                </button>

                <div className={`p-6 border-b border-white/10 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
                    <AnimatePresence mode="wait">
                        {!isCollapsed ? (
                            <motion.h1
                                key="logo-text"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-accent whitespace-nowrap tracking-tighter"
                            >
                                Nexsus ADMIN
                            </motion.h1>
                        ) : (
                            <motion.div
                                key="logo-icon"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center font-black text-white shadow-lg shadow-accent/20"
                            >
                                N
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <nav className="flex-1 p-4 space-y-2 overflow-y-auto no-scrollbar">
                    {navItems.map((item) => (
                        <div
                            key={item.to}
                            onMouseEnter={() => setHoveredItem(item.to)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <Tooltip text={item.label} isVisible={isCollapsed && hoveredItem === item.to}>
                                <NavLink
                                    to={item.to}
                                    className={({ isActive }) => `
                                        flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 relative w-full
                                        ${isActive ? 'bg-accent text-white shadow-lg shadow-accent/20 font-bold' : 'text-textSecondary hover:bg-white/5 hover:text-white'}
                                        ${isCollapsed ? 'justify-center px-0' : ''}
                                    `}
                                >
                                    <item.icon className={`shrink-0 ${isCollapsed ? 'w-6 h-6' : 'w-5 h-5'}`} />
                                    <AnimatePresence>
                                        {!isCollapsed && (
                                            <motion.span
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -10 }}
                                                className="whitespace-nowrap"
                                            >
                                                {item.label}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </NavLink>
                            </Tooltip>
                        </div>
                    ))}
                </nav>

                <div className="p-4 border-t border-white/10">
                    <div
                        onMouseEnter={() => setHoveredItem('logout')}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        <Tooltip text="Logout" isVisible={isCollapsed && hoveredItem === 'logout'}>
                            <button
                                onClick={handleLogout}
                                className={`flex items-center gap-4 px-4 py-3 w-full text-left text-textSecondary hover:text-red-400 transition-all duration-300 rounded-xl hover:bg-red-500/10 relative ${isCollapsed ? 'justify-center px-0' : ''}`}
                            >
                                <LogOut className={`shrink-0 ${isCollapsed ? 'w-6 h-6' : 'w-5 h-5'}`} />
                                <AnimatePresence>
                                    {!isCollapsed && (
                                        <motion.span
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -10 }}
                                            className="whitespace-nowrap font-medium"
                                        >
                                            Logout
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </button>
                        </Tooltip>
                    </div>
                </div>
            </motion.aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto bg-[#0a0b10] p-8 custom-scrollbar relative z-10">
                <div className="max-w-[1600px] mx-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
