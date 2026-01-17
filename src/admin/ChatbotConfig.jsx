import React, { useState, useEffect } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Plus, Trash2, MessageSquare } from 'lucide-react';

const ChatbotConfig = () => {
    const [faqs, setFaqs] = useState([]);
    const [newQuestion, setNewQuestion] = useState({ question: '', answer: '' });
    const [loading, setLoading] = useState(true);

    const fetchFaqs = async () => {
        try {
            const res = await fetch('/api/faqs');
            const data = await res.json();
            if (data.success) setFaqs(data.faqs);
        } catch (error) {
            console.error('Error fetching FAQs:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFaqs();
    }, []);

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/faqs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(newQuestion)
            });
            const data = await res.json();
            if (data.success) {
                setFaqs([data.faq, ...faqs]);
                setNewQuestion({ question: '', answer: '' });
            }
        } catch (error) {
            console.error('Error adding FAQ:', error);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Delete this Q&A?")) return;
        try {
            const res = await fetch(`/api/faqs/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            if (res.ok) {
                setFaqs(faqs.filter(f => f._id !== id));
            }
        } catch (error) {
            console.error('Error deleting FAQ:', error);
        }
    };

    return (
        <div>
            <h2 className="text-3xl font-bold text-white mb-8">Chatbot Q&A Management</h2>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Add Form */}
                <Card className="lg:col-span-1 h-fit">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <Plus className="w-5 h-5 text-accent" /> Add New Q&A
                    </h3>
                    <form onSubmit={handleAdd} className="space-y-4">
                        <div>
                            <label className="block text-sm text-textSecondary mb-2">User Question</label>
                            <input
                                type="text"
                                required
                                value={newQuestion.question}
                                onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
                                className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none"
                                placeholder="What services do you offer?"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-textSecondary mb-2">Bot Answer</label>
                            <textarea
                                rows="4"
                                required
                                value={newQuestion.answer}
                                onChange={(e) => setNewQuestion({ ...newQuestion, answer: e.target.value })}
                                className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none"
                                placeholder="We offer SOC monitoring, VAPT..."
                            ></textarea>
                        </div>
                        <Button type="submit" className="w-full justify-center gap-2">
                            Add to Knowledge base
                        </Button>
                    </form>
                </Card>

                {/* List */}
                <Card className="lg:col-span-2">
                    <h3 className="text-xl font-bold text-white mb-6">Current Knowledge Base</h3>
                    <div className="space-y-4">
                        {loading ? <p className="text-textSecondary">Loading...</p> :
                            faqs.length === 0 ? <p className="text-textSecondary">No Q&As added yet.</p> :
                                faqs.map((faq) => (
                                    <div key={faq._id} className="p-4 bg-white/5 border border-white/10 rounded-xl group relative">
                                        <button
                                            onClick={() => handleDelete(faq._id)}
                                            className="absolute top-4 right-4 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                        <div className="flex gap-3 mb-2">
                                            <MessageSquare className="w-5 h-5 text-accent shrink-0" />
                                            <h4 className="text-white font-bold">{faq.question}</h4>
                                        </div>
                                        <p className="text-textSecondary text-sm ml-8 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                ))
                        }
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ChatbotConfig;
