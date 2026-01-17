import React, { useState, useEffect } from 'react';
import { Download, Trash2, Eye, Search, Filter } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Modal from '../components/ui/Modal';
import Select from '../components/ui/Select';
import { apiFetch } from '../utils/api';

const Quotes = () => {
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedQuote, setSelectedQuote] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');

    useEffect(() => {
        fetchQuotes();
    }, [searchQuery, statusFilter]);

    const fetchQuotes = async () => {
        try {
            const searchParam = searchQuery ? `&search=${searchQuery}` : '';
            const statusParam = statusFilter !== 'all' ? `&status=${statusFilter}` : '';

            const res = await apiFetch(`/api/quotes?${searchParam}${statusParam}`, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });

            if (res.status === 401) {
                localStorage.clear();
                window.location.href = '/admin/login';
                return;
            }

            if (!res.ok) throw new Error("Failed to fetch");
            const data = await res.json();
            setQuotes(data.quotes || []);
        } catch (error) {
            console.error("Error fetching quotes:", error);
            setQuotes([]);
        } finally {
            setLoading(false);
        }
    };

    const deleteQuote = async (id) => {
        if (!window.confirm("Are you sure you want to delete this quote?")) return;

        try {
            const res = await apiFetch(`/api/quotes/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });

            if (res.status === 401) {
                localStorage.clear();
                window.location.href = '/admin/login';
                return;
            }

            if (res.ok) {
                setQuotes(quotes.filter(quote => quote._id !== id));
            } else {
                alert("Failed to delete quote");
            }
        } catch (error) {
            console.error("Error deleting quote:", error);
        }
    };

    const updateQuoteStatus = async (id, status) => {
        try {
            const res = await apiFetch(`/api/quotes/${id}/status`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ status })
            });

            if (res.status === 401) {
                localStorage.clear();
                window.location.href = '/admin/login';
                return;
            }

            if (res.ok) {
                const data = await res.json();
                setQuotes(quotes.map(quote => quote._id === id ? data.quote : quote));
            } else {
                alert("Failed to update status");
            }
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    const exportToCSV = () => {
        if (!quotes.length) return;

        const headers = ["Name,Email,Phone,Company,Service,Budget,Timeline,Message,Status,Date"];
        const rows = quotes.map(quote =>
            `"${quote.name}","${quote.email}","${quote.phone || 'N/A'}","${quote.company || 'N/A'}","${quote.service}","${quote.budget || 'Not Specified'}","${quote.timeline || 'Not Specified'}","${quote.message || ''}","${quote.status}","${new Date(quote.createdAt).toLocaleDateString()}"`
        );

        const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `Nexsus_quotes_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const viewQuoteDetails = (quote) => {
        setSelectedQuote(quote);
        setIsModalOpen(true);
    };

    const getStatusColor = (status) => {
        const colors = {
            'Pending': 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
            'Reviewed': 'bg-blue-500/10 text-blue-500 border-blue-500/20',
            'Sent': 'bg-purple-500/10 text-purple-500 border-purple-500/20',
            'Accepted': 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
            'Declined': 'bg-red-500/10 text-red-500 border-red-500/20'
        };
        return colors[status] || colors['Pending'];
    };

    const statusOptions = ['Pending', 'Reviewed', 'Sent', 'Accepted', 'Declined'];
    const filterOptions = [{ label: 'All Status', value: 'all' }, ...statusOptions.map(s => ({ label: s, value: s }))];

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-white">Quote Requests</h2>
                    <p className="text-textSecondary mt-2">Manage and track all quote requests from customers</p>
                </div>
                <Button onClick={exportToCSV} className="flex items-center gap-2 text-sm">
                    <Download className="w-4 h-4" /> Export CSV
                </Button>
            </div>

            {/* Search and Filter Bar */}
            <div className="flex gap-4 mb-6">
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search by name, email, or service..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-textSecondary focus:outline-none focus:border-accent transition-colors"
                    />
                </div>
                <div className="w-48">
                    <Select
                        options={filterOptions}
                        value={statusFilter}
                        onChange={setStatusFilter}
                        placeholder="Filter Status"
                    />
                </div>
            </div>

            <Card className="overflow-visible">
                <div>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/10 text-textSecondary text-sm uppercase">
                                <th className="p-4 font-semibold">Name</th>
                                <th className="p-4 font-semibold">Email</th>
                                <th className="p-4 font-semibold">Service</th>
                                <th className="p-4 font-semibold">Budget</th>
                                <th className="p-4 font-semibold">Date</th>
                                <th className="p-4 font-semibold">Status</th>
                                <th className="p-4 font-semibold">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {loading ? (
                                <tr><td colSpan="7" className="p-4 text-center text-textSecondary">Loading...</td></tr>
                            ) : quotes.length === 0 ? (
                                <tr><td colSpan="7" className="p-4 text-center text-textSecondary">No quotes found.</td></tr>
                            ) : (
                                quotes.map((quote) => (
                                    <tr key={quote._id} className="hover:bg-white/5 transition-colors text-sm">
                                        <td className="p-4 text-white font-medium">{quote.name}</td>
                                        <td className="p-4 text-textSecondary">{quote.email}</td>
                                        <td className="p-4 text-accent">{quote.service}</td>
                                        <td className="p-4 text-textSecondary">{quote.budget || 'Not Specified'}</td>
                                        <td className="p-4 text-textSecondary">{new Date(quote.createdAt).toLocaleDateString()}</td>
                                        <td className="p-4">
                                            <div className="w-32">
                                                <Select
                                                    options={statusOptions}
                                                    value={quote.status}
                                                    onChange={(val) => updateQuoteStatus(quote._id, val)}
                                                    variant="status"
                                                    position="top"
                                                    className={getStatusColor(quote.status)}
                                                />
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => viewQuoteDetails(quote)}
                                                    className="text-accent hover:text-white transition-colors"
                                                    title="View Details"
                                                >
                                                    <Eye className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => deleteQuote(quote._id)}
                                                    className="text-red-400 hover:text-red-300 transition-colors"
                                                    title="Delete Quote"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </Card>

            {/* Quote Details Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Quote Request Details"
                size="lg"
            >
                {selectedQuote && (
                    <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-textSecondary text-sm">Name</label>
                                <p className="text-white font-medium mt-1">{selectedQuote.name}</p>
                            </div>
                            <div>
                                <label className="text-textSecondary text-sm">Email</label>
                                <p className="text-white font-medium mt-1">{selectedQuote.email}</p>
                            </div>
                            <div>
                                <label className="text-textSecondary text-sm">Phone</label>
                                <p className="text-white font-medium mt-1">{selectedQuote.phone}</p>
                            </div>
                            <div>
                                <label className="text-textSecondary text-sm">Company</label>
                                <p className="text-white font-medium mt-1">{selectedQuote.company || 'N/A'}</p>
                            </div>
                            <div>
                                <label className="text-textSecondary text-sm">Service</label>
                                <p className="text-white font-medium mt-1">{selectedQuote.service}</p>
                            </div>
                            <div>
                                <label className="text-textSecondary text-sm">Budget Range</label>
                                <p className="text-white font-medium mt-1">{selectedQuote.budget || 'Not Specified'}</p>
                            </div>
                            <div>
                                <label className="text-textSecondary text-sm">Timeline</label>
                                <p className="text-white font-medium mt-1">{selectedQuote.timeline || 'Not Specified'}</p>
                            </div>
                            <div>
                                <label className="text-textSecondary text-sm">Status</label>
                                <p className={`font-bold mt-1 inline-block px-2 py-1 rounded-full text-xs ${getStatusColor(selectedQuote.status)}`}>
                                    {selectedQuote.status}
                                </p>
                            </div>
                            <div>
                                <label className="text-textSecondary text-sm">Date Submitted</label>
                                <p className="text-white font-medium mt-1">{new Date(selectedQuote.createdAt).toLocaleString()}</p>
                            </div>
                        </div>
                        {selectedQuote.message && (
                            <div>
                                <label className="text-textSecondary text-sm">Additional Details</label>
                                <p className="text-white mt-1 bg-white/5 p-4 rounded-lg border border-white/10">
                                    {selectedQuote.message}
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Quotes;
