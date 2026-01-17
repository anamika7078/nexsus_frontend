import React, { useState, useEffect } from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, Legend
} from 'recharts';
import { motion } from 'framer-motion';
import {
    TrendingUp, Users, FileText, ChevronUp, ChevronDown,
    Calendar, Filter, Download, PieChart as PieChartIcon,
    BarChart3, Activity, Sparkles, Target, Zap, Clock
} from 'lucide-react';
import Card from '../components/ui/Card';
import Select from '../components/ui/Select';

const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4'];

const Analytics = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [timeRange, setTimeRange] = useState('14');

    const timeRangeOptions = [
        { value: '7', label: 'Last 7 Days' },
        { value: '14', label: 'Last 14 Days' },
        { value: '30', label: 'Last 30 Days' },
        { value: '90', label: 'Last 3 Months' }
    ];

    useEffect(() => {
        fetchAnalytics(timeRange);
    }, [timeRange]);

    const fetchAnalytics = async (days) => {
        setLoading(true);
        try {
            const response = await fetch(`/api/dashboard/analytics?days=${days}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            const result = await response.json();
            if (result.success) {
                setData(result.analytics);
            }
        } catch (error) {
            console.error('Error fetching analytics:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[calc(100vh-200px)]">
                <div className="relative">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-accent"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent font-bold">A</div>
                </div>
            </div>
        );
    }

    // Process daily data for the main chart - Merging facts and filling gaps
    const getDailyData = () => {
        const leads = data?.dailyLeads || [];
        const quotes = data?.dailyQuotes || [];
        const daysToShow = parseInt(timeRange);

        const result = [];
        const now = new Date();

        for (let i = daysToShow - 1; i >= 0; i--) {
            const date = new Date(now);
            date.setDate(date.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];

            const lead = leads.find(l => l._id === dateStr);
            const quote = quotes.find(q => q._id === dateStr);
            const lCount = lead ? lead.count : 0;
            const qCount = quote ? quote.count : 0;

            result.push({
                name: date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
                Leads: lCount,
                Quotes: qCount,
                Avg: (lCount + qCount) / 2
            });
        }
        return result;
    };

    const dailyData = getDailyData();

    const pieData = (data?.serviceDistribution || []).map(item => ({
        name: item._id || 'Unknown',
        value: item.count
    }));

    // Generate insights based on data
    const generateInsights = () => {
        const insights = [];
        if (data?.conversionInfo?.rate > 20) {
            insights.push({ title: "High Conversion", text: "Your closure rate is performing 15% above average.", type: "success" });
        } else {
            insights.push({ title: "Growth Opportunity", text: "Targeted follow-ups could improve conversion rate by 5-10%.", type: "warning" });
        }

        const topService = data?.serviceDistribution?.[0]?._id || "Web Development";
        insights.push({ title: "Primary Demand", text: `${topService} is currently your most requested service.`, type: "info" });

        return insights;
    };

    const insights = generateInsights();

    const exportData = () => {
        if (!data) return;

        const headers = ["Date", "Leads", "Quotes"];
        const rows = dailyData.map(d => [d.name, d.Leads, d.Quotes]);

        const csvContent = [headers, ...rows]
            .map(e => e.join(","))
            .join("\n");

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", `analytics_report_${timeRange}days.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="space-y-8 pb-12">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
                        Advanced Analysis <Sparkles className="text-accent h-6 w-6" />
                    </h1>
                    <p className="text-textSecondary">Real-time business performance and market intelligence</p>
                </div>
                <div className="flex gap-3 bg-white/5 p-1.5 rounded-2xl border border-white/10 shadow-xl items-center">
                    <Select
                        options={timeRangeOptions}
                        value={timeRange}
                        onChange={(val) => setTimeRange(val)}
                        className="min-w-[170px]"
                        variant="default"
                    />
                    <button
                        onClick={exportData}
                        className="flex items-center gap-2 bg-accent text-white px-5 py-2 rounded-xl text-sm font-bold hover:shadow-lg hover:shadow-accent/40 transition-all duration-300 h-[46px]"
                    >
                        <Download size={16} /> Export
                    </button>
                </div>
            </div>

            {/* Smart Insights Panel */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {insights.map((insight, idx) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        key={idx}
                        className="bg-accent/5 border border-accent/20 rounded-2xl p-4 flex gap-4 items-start"
                    >
                        <div className="p-2 bg-accent/10 rounded-xl text-accent">
                            <Zap size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-sm">{insight.title}</h4>
                            <p className="text-xs text-textSecondary mt-1">{insight.text}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Top Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "Total Leads", val: data?.conversionInfo?.totalLeads, icon: Users, color: "accent", status: "+12%" },
                    { label: "Conversion Rate", val: `${(data?.conversionInfo?.rate || 0).toFixed(1)}%`, icon: Target, color: "indigo-500", status: "+5.2%" },
                    { label: "Successful Sales", val: data?.conversionInfo?.conversions, icon: Activity, color: "emerald-500", status: "+8%" },
                    { label: "Response Time", val: "1.2h", icon: Clock, color: "amber-500", status: "-15%" }
                ].map((item, idx) => (
                    <Card key={idx} className={`p-6 border-l-4 border-l-${item.color}`}>
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-2 bg-${item.color}/10 rounded-lg text-${item.color}`}>
                                <item.icon size={24} />
                            </div>
                            <div className="text-emerald-400 text-xs font-bold bg-emerald-400/10 px-2 py-1 rounded-full">
                                {item.status}
                            </div>
                        </div>
                        <div className="text-2xl font-bold text-white mb-1">{item.val}</div>
                        <div className="text-textSecondary text-sm font-medium">{item.label}</div>
                    </Card>
                ))}
            </div>

            {/* Main Visualizations */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Productivity Mix Chart */}
                <Card className="lg:col-span-2 p-8 text-white">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">Productivity Mix</h3>
                            <p className="text-sm text-textSecondary">Daily output of business inquiries</p>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                                <span className="text-xs font-medium text-textSecondary uppercase tracking-wider">Leads</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-accent"></div>
                                <span className="text-xs font-medium text-textSecondary uppercase tracking-wider">Quotes</span>
                            </div>
                        </div>
                    </div>
                    <div className="h-[400px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={dailyData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorQuotes" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" vertical={false} />
                                <XAxis
                                    dataKey="name"
                                    stroke="#475569"
                                    fontSize={10}
                                    tickLine={false}
                                    axisLine={false}
                                    interval="preserveStartEnd"
                                />
                                <YAxis
                                    stroke="#475569"
                                    fontSize={10}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#1a1c2e',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: '12px',
                                        fontSize: '12px'
                                    }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="Leads"
                                    stroke="#10b981"
                                    strokeWidth={3}
                                    fillOpacity={1}
                                    fill="url(#colorLeads)"
                                />
                                <Area
                                    type="monotone"
                                    dataKey="Quotes"
                                    stroke="#6366f1"
                                    strokeWidth={3}
                                    fillOpacity={1}
                                    fill="url(#colorQuotes)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                {/* Market Intelligence (Pie) */}
                <Card className="p-8 flex flex-col justify-between">
                    <div>
                        <div className="mb-10 text-center">
                            <h3 className="text-xl font-bold text-white mb-1">Market Interest</h3>
                            <p className="text-sm text-textSecondary">Service distribution heatmap</p>
                        </div>
                        <div className="h-[320px] w-full relative">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={pieData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={85}
                                        outerRadius={110}
                                        paddingAngle={8}
                                        dataKey="value"
                                        stroke="none"
                                    >
                                        {pieData.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={COLORS[index % COLORS.length]}
                                                className="hover:opacity-80 transition-opacity cursor-pointer outline-none"
                                            />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#1a1c2e',
                                            border: 'none',
                                            borderRadius: '12px',
                                            color: '#fff'
                                        }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                                <span className="block text-2xl font-bold text-white">
                                    {pieData.reduce((acc, curr) => acc + curr.value, 0)}
                                </span>
                                <span className="text-[10px] text-textSecondary uppercase font-black">Total Hits</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 pt-8 border-t border-white/5">
                        {pieData.slice(0, 4).map((item, index) => (
                            <div key={index} className="group cursor-default">
                                <div className="flex justify-between items-center text-sm mb-1.5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2.5 h-2.5 rounded-full shadow-lg shadow-current" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                                        <span className="text-textSecondary group-hover:text-white transition-colors">{item.name}</span>
                                    </div>
                                    <span className="text-white font-bold">{item.value}</span>
                                </div>
                                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${(item.value / (pieData.reduce((a, b) => a + b.value, 0) || 1)) * 100}%` }}
                                        className="h-full rounded-full"
                                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Analytics;
