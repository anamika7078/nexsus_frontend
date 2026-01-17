import React, { useState, useEffect } from 'react';
import { Users, FileText, TrendingUp, Clock, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import { apiFetch } from '../utils/api';

const Dashboard = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDashboardStats();
    }, []);

    const fetchDashboardStats = async () => {
        try {
            const res = await apiFetch('/api/dashboard/stats', {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });

            if (res.status === 401) {
                localStorage.clear();
                window.location.href = '/admin/login';
                return;
            }

            if (res.ok) {
                const data = await res.json();
                setStats(data.stats);
            }
        } catch (error) {
            console.error('Error fetching dashboard stats:', error);
        } finally {
            setLoading(false);
        }
    };

    const getStatusColor = (status) => {
        const colors = {
            'New': 'text-emerald-400',
            'Pending': 'text-yellow-400',
            'Contacted': 'text-blue-400',
            'Reviewed': 'text-blue-400',
            'Qualified': 'text-purple-400',
            'Sent': 'text-purple-400',
            'Accepted': 'text-green-400',
            'Closed': 'text-green-400',
            'Declined': 'text-red-400',
            'Lost': 'text-red-400'
        };
        return colors[status] || 'text-textSecondary';
    };

    const formatTimeAgo = (date) => {
        const now = new Date();
        const diff = now - new Date(date);
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);

        if (minutes < 1) return 'Just now';
        if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        return `${days} day${days > 1 ? 's' : ''} ago`;
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="text-textSecondary text-lg">Loading dashboard...</div>
            </div>
        );
    }

    const statCards = [
        {
            label: "Total Leads",
            value: stats?.totalLeads || 0,
            icon: Users,
            color: "text-blue-400",
            link: "/admin/leads"
        },
        {
            label: "Total Quotes",
            value: stats?.totalQuotes || 0,
            icon: FileText,
            color: "text-purple-400",
            link: "/admin/quotes"
        },
        {
            label: "Leads This Week",
            value: stats?.leadsThisWeek || 0,
            icon: TrendingUp,
            color: "text-emerald-400"
        },
        {
            label: "Quotes This Week",
            value: stats?.quotesThisWeek || 0,
            icon: Clock,
            color: "text-yellow-400"
        }
    ];

    return (
        <div>
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-white">Dashboard Overview</h2>
                <p className="text-textSecondary mt-2">Welcome back! Here's what's happening with your business.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {statCards.map((stat, i) => (
                    <Link key={i} to={stat.link || '#'} className={stat.link ? 'cursor-pointer' : 'cursor-default'}>
                        <Card className="flex items-center gap-4 hover:border-accent/40 transition-all">
                            <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                                <stat.icon className="w-8 h-8" />
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">{stat.value}</div>
                                <div className="text-sm text-textSecondary">{stat.label}</div>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>

            {/* Status Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <Card>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-accent" />
                        Leads by Status
                    </h3>
                    <div className="space-y-3">
                        {stats?.leadsByStatus && stats.leadsByStatus.length > 0 ? (
                            stats.leadsByStatus.map((item, i) => (
                                <div key={i} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                                    <span className="text-white font-medium">{item._id}</span>
                                    <span className={`font-bold ${getStatusColor(item._id)}`}>{item.count}</span>
                                </div>
                            ))
                        ) : (
                            <div className="text-textSecondary text-center py-4">No leads yet</div>
                        )}
                    </div>
                </Card>

                <Card>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-accent" />
                        Quotes by Status
                    </h3>
                    <div className="space-y-3">
                        {stats?.quotesByStatus && stats.quotesByStatus.length > 0 ? (
                            stats.quotesByStatus.map((item, i) => (
                                <div key={i} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                                    <span className="text-white font-medium">{item._id}</span>
                                    <span className={`font-bold ${getStatusColor(item._id)}`}>{item.count}</span>
                                </div>
                            ))
                        ) : (
                            <div className="text-textSecondary text-center py-4">No quotes yet</div>
                        )}
                    </div>
                </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            <Clock className="w-5 h-5 text-accent" />
                            Recent Leads
                        </h3>
                        <Link to="/admin/leads" className="text-accent hover:text-white text-sm flex items-center gap-1 transition-colors">
                            View All <Eye className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="space-y-3">
                        {stats?.recentLeads && stats.recentLeads.length > 0 ? (
                            stats.recentLeads.map((lead, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 hover:bg-white/5 rounded-lg transition-colors border-b border-white/5 last:border-0">
                                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-white text-sm font-medium truncate">{lead.name}</div>
                                        <div className="text-xs text-textSecondary truncate">{lead.email} • {lead.type}</div>
                                        <div className="text-xs text-textSecondary mt-1">{formatTimeAgo(lead.createdAt)}</div>
                                    </div>
                                    <span className={`text-xs font-bold ${getStatusColor(lead.status)} flex-shrink-0`}>
                                        {lead.status}
                                    </span>
                                </div>
                            ))
                        ) : (
                            <div className="text-textSecondary text-center py-8">No recent leads</div>
                        )}
                    </div>
                </Card>

                <Card>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            <Clock className="w-5 h-5 text-accent" />
                            Recent Quotes
                        </h3>
                        <Link to="/admin/quotes" className="text-accent hover:text-white text-sm flex items-center gap-1 transition-colors">
                            View All <Eye className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="space-y-3">
                        {stats?.recentQuotes && stats.recentQuotes.length > 0 ? (
                            stats.recentQuotes.map((quote, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 hover:bg-white/5 rounded-lg transition-colors border-b border-white/5 last:border-0">
                                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-white text-sm font-medium truncate">{quote.name}</div>
                                        <div className="text-xs text-textSecondary truncate">{quote.email} • {quote.service}</div>
                                        <div className="text-xs text-textSecondary mt-1">{formatTimeAgo(quote.createdAt)}</div>
                                    </div>
                                    <span className={`text-xs font-bold ${getStatusColor(quote.status)} flex-shrink-0`}>
                                        {quote.status}
                                    </span>
                                </div>
                            ))
                        ) : (
                            <div className="text-textSecondary text-center py-8">No recent quotes</div>
                        )}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
