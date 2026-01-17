import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Shield, Briefcase, GraduationCap } from 'lucide-react';

const roles = [
    { id: 'business', label: 'Business Owner', icon: Briefcase },
    { id: 'it', label: 'IT Manager', icon: Shield },
    { id: 'student', label: 'Student', icon: GraduationCap },
    { id: 'general', label: 'General Visitor', icon: User },
];

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! Welcome to Nexsus Cyber Solutions. I'm your virtual assistant. To get started, please tell me who you are:", sender: 'bot', type: 'role-selector' }
    ]);
    const [inputText, setInputText] = useState("");
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleRoleSelect = (role) => {
        const userMsg = { id: Date.now(), text: role.label, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);

        // Simulate bot response
        setTimeout(() => {
            let botResponseText = "";
            switch (role.id) {
                case 'business':
                    botResponseText = "Great! We help businesses secure their assets. Are you interested in a Security Audit or a Sales Enquiry?";
                    break;
                case 'it':
                    botResponseText = "Hello Technical Lead. Do you need details on our SOC Monitoring or Penetration Testing services?";
                    break;
                case 'student':
                    botResponseText = "Welcome future cyber expert! Looking for internship opportunities or training programs?";
                    break;
                case 'general':
                    botResponseText = "Thanks for visiting! How can we assist you today? Feel free to ask about our services.";
                    break;
                default:
                    botResponseText = "How can we assist you today?";
            }

            const botMsg = { id: Date.now() + 1, text: botResponseText, sender: 'bot' };
            setMessages(prev => [...prev, botMsg]);
        }, 600);
    };

    const handleSend = async (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        const userMsg = { id: Date.now(), text: inputText, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInputText("");

        // Check if message looks like an email to capture lead
        const emailRegex = /\S+@\S+\.\S+/;
        if (emailRegex.test(inputText)) {
            fetch('/api/chatbot/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: inputText,
                    role: messages.find(m => m.type === 'role-selector-response')?.text || 'General',
                    interest: "Chat Conversation",
                    name: "Chat Visitor"
                })
            }).catch(err => console.error("Bot Lead Error:", err));
        }

        // Try fetching from Knowledge Base if not an email
        try {
            const botRes = await fetch('/api/faqs/query', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: inputText })
            });
            const botData = await botRes.json();

            setTimeout(() => {
                const botMsg = {
                    id: Date.now() + 1,
                    text: botData.success ? botData.answer : "I'm not sure about that. If you leave your email, our team will get back to you! Or you can email support@Nexsuscyber.com.",
                    sender: 'bot'
                };
                setMessages(prev => [...prev, botMsg]);
            }, 1000);
        } catch (error) {
            console.error('Bot Query Error:', error);
        }
    };

    return (
        <>
            <div className="fixed bottom-6 right-6 z-50">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.9 }}
                            className="bg-primary border border-white/20 rounded-2xl shadow-glow w-[350px] h-[500px] flex flex-col overflow-hidden mb-4"
                        >
                            <div className="bg-secondary/20 p-4 border-b border-white/10 flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                                    <span className="font-bold text-white">Nexsus Assistant</span>
                                </div>
                                <button onClick={() => setIsOpen(false)} className="text-textSecondary hover:text-white">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-primary/95">
                                {messages.map((msg) => (
                                    <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                        <div className={`max-w-[80%] p-3 rounded-xl text-sm ${msg.sender === 'user' ? 'bg-accent text-white rounded-br-none' : 'bg-white/10 text-textSecondary rounded-bl-none'}`}>
                                            {msg.text}
                                        </div>
                                    </div>
                                ))}

                                {/* Render Role Selector if last message was role-selector */}
                                {messages[messages.length - 1]?.type === 'role-selector' && (
                                    <div className="grid grid-cols-2 gap-2 mt-2">
                                        {roles.map((role) => (
                                            <button
                                                key={role.id}
                                                onClick={() => handleRoleSelect(role)}
                                                className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex flex-col items-center gap-1 text-xs text-textSecondary hover:text-white transition-colors"
                                            >
                                                <role.icon className="w-4 h-4 text-accent" />
                                                {role.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            <form onSubmit={handleSend} className="p-3 border-t border-white/10 flex gap-2">
                                <input
                                    type="text"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    placeholder="Type a message..."
                                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-accent"
                                />
                                <button type="submit" className="bg-accent text-white p-2 rounded-lg hover:bg-accent/80 transition-colors">
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-accent text-white p-4 rounded-full shadow-glow flex items-center justify-center cursor-pointer"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
                </motion.button>
            </div>
        </>
    );
};

export default Chatbot;
