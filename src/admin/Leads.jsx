import React, { useState, useEffect } from 'react';
import { Download, Trash2, Eye, Search, Filter } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Modal from '../components/ui/Modal';
import Select from '../components/ui/Select';
import { apiFetch } from '../utils/api';

const Leads = () => {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedLead, setSelectedLead] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');

    const deleteLead = async (id) => {
        if (!window.confirm("Are you sure you want to delete this lead?")) return;

        try {
            const res = await apiFetch(`/api/leads/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });

            if (res.status === 401) {
                localStorage.clear();
                window.location.href = '/admin/login';
                return;
            }

            if (res.ok) {
                setLeads(leads.filter(lead => lead._id !== id));
            } else {
                alert("Failed to delete lead");
            }
        } catch (error) {
            console.error("Error deleting lead:", error);
        }
    };

    const updateLeadStatus = async (id, status) => {
        try {
            const res = await apiFetch(`/api/leads/${id}/status`, {
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
                setLeads(leads.map(lead => lead._id === id ? data.lead : lead));
            } else {
                alert("Failed to update status");
            }
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    const exportToCSV = () => {
        if (!leads.length) return;

        const headers = ["Name,Email,Phone,Type,Message,Date,Status"];
        const rows = leads.map(lead =>
            `"${lead.name}","${lead.email}","${lead.phone || 'N/A'}","${lead.type}","${lead.message || ''}","${new Date(lead.createdAt).toLocaleDateString()}","${lead.status}"`
        );

        const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `Nexsus_leads_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const viewLeadDetails = (lead) => {
        setSelectedLead(lead);
        setIsModalOpen(true);
    };

    useEffect(() => {
        const fetchLeads = async () => {
            try {
                const searchParam = searchQuery ? `&search=${searchQuery}` : '';
                const statusParam = statusFilter !== 'all' ? `&status=${statusFilter}` : '';

                const res = await apiFetch(`/api/leads?${searchParam}${statusParam}`, {
                    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
                });

                if (res.status === 401) {
                    localStorage.clear();
                    window.location.href = '/admin/login';
                    return;
                }

                if (!res.ok) throw new Error("Failed to fetch");
                const data = await res.json();
                setLeads(data.leads || []);
            } catch (error) {
                console.error("Backend not running or error:", error);
                setLeads([]);
            } finally {
                setLoading(false);
            }
        };

        fetchLeads();
    }, [searchQuery, statusFilter]);

    const getStatusColor = (status) => {
        const colors = {
            'New': 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
            'Contacted': 'bg-blue-500/10 text-blue-500 border-blue-500/20',
            'Qualified': 'bg-purple-500/10 text-purple-500 border-purple-500/20',
            'Closed': 'bg-green-500/10 text-green-500 border-green-500/20',
            'Lost': 'bg-red-500/10 text-red-500 border-red-500/20'
        };
        return colors[status] || colors['New'];
    };

    const statusOptions = ['New', 'Contacted', 'Qualified', 'Closed', 'Lost'];
    const filterOptions = [{ label: 'All Status', value: 'all' }, ...statusOptions.map(s => ({ label: s, value: s }))];

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-white">Leads & Inquiries</h2>
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
                        placeholder="Search by name or email..."
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
                                <th className="p-4 font-semibold">Phone</th>
                                <th className="p-4 font-semibold">Type</th>
                                <th className="p-4 font-semibold">Date</th>
                                <th className="p-4 font-semibold">Status</th>
                                <th className="p-4 font-semibold">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {loading ? (
                                <tr><td colSpan="7" className="p-4 text-center text-textSecondary">Loading...</td></tr>
                            ) : leads.length === 0 ? (
                                <tr><td colSpan="7" className="p-4 text-center text-textSecondary">No leads found.</td></tr>
                            ) : (
                                leads.map((lead) => (
                                    <tr key={lead._id} className="hover:bg-white/5 transition-colors text-sm">
                                        <td className="p-4 text-white font-medium">{lead.name}</td>
                                        <td className="p-4 text-textSecondary">{lead.email}</td>
                                        <td className="p-4 text-textSecondary">{lead.phone || 'N/A'}</td>
                                        <td className="p-4 text-accent">{lead.type}</td>
                                        <td className="p-4 text-textSecondary">{new Date(lead.createdAt).toLocaleDateString()}</td>
                                        <td className="p-4">
                                            <div className="w-32">
                                                <Select
                                                    options={statusOptions}
                                                    value={lead.status}
                                                    onChange={(val) => updateLeadStatus(lead._id, val)}
                                                    variant="status"
                                                    position="top"
                                                    className={getStatusColor(lead.status)}
                                                />
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => viewLeadDetails(lead)}
                                                    className="text-accent hover:text-white transition-colors"
                                                    title="View Details"
                                                >
                                                    <Eye className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => deleteLead(lead._id)}
                                                    className="text-red-400 hover:text-red-300 transition-colors"
                                                    title="Delete Lead"
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

            {/* Lead Details Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Lead Details"
                size="lg"
            >
                {selectedLead && (
                    <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-textSecondary text-sm">Name</label>
                                <p className="text-white font-medium mt-1">{selectedLead.name}</p>
                            </div>
                            <div>
                                <label className="text-textSecondary text-sm">Email</label>
                                <p className="text-white font-medium mt-1">{selectedLead.email}</p>
                            </div>
                            <div>
                                <label className="text-textSecondary text-sm">Phone</label>
                                <p className="text-white font-medium mt-1">{selectedLead.phone || 'N/A'}</p>
                            </div>
                            <div>
                                <label className="text-textSecondary text-sm">Type</label>
                                <p className="text-accent font-medium mt-1">{selectedLead.type}</p>
                            </div>
                            <div>
                                <label className="text-textSecondary text-sm">Status</label>
                                <p className={`font-bold mt-1 inline-block px-2 py-1 rounded-full text-xs ${getStatusColor(selectedLead.status)}`}>
                                    {selectedLead.status}
                                </p>
                            </div>
                            <div>
                                <label className="text-textSecondary text-sm">Date Received</label>
                                <p className="text-white font-medium mt-1">{new Date(selectedLead.createdAt).toLocaleString()}</p>
                            </div>
                        </div>
                        {selectedLead.message && (
                            <div>
                                <label className="text-textSecondary text-sm">Message</label>
                                <p className="text-white mt-1 bg-white/5 p-4 rounded-lg border border-white/10">
                                    {selectedLead.message}
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Leads;
