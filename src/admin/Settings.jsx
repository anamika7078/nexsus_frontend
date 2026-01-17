import React, { useState, useEffect } from 'react';
import { User, Lock, Bell, Shield, Calendar, Mail, Phone, Building2, Eye, EyeOff, Key } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { apiFetch } from '../utils/api';

const Settings = () => {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [activeTab, setActiveTab] = useState('profile');

    // Profile state
    const [profileData, setProfileData] = useState({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        role: 'admin',
        createdAt: '',
        lastLogin: ''
    });

    // Password state
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [showPasswords, setShowPasswords] = useState({
        current: false,
        new: false,
        confirm: false
    });

    // Notification state
    const [notifications, setNotifications] = useState({
        newLeads: true,
        weeklySummary: true,
        systemUpdates: true
    });

    // Registration Secret state
    const [registrationSecret, setRegistrationSecret] = useState('');
    const [secretSaving, setSecretSaving] = useState(false);

    const [message, setMessage] = useState({ type: '', text: '' });

    useEffect(() => {
        fetchProfile();
        fetchRegistrationSecret();
    }, []);

    const fetchRegistrationSecret = async () => {
        try {
            const res = await apiFetch('/api/user/registration-secret', {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            if (res.ok) {
                const data = await res.json();
                setRegistrationSecret(data.secretKey);
            }
        } catch (error) {
            console.error('Error fetching registration secret:', error);
        }
    };

    const fetchProfile = async () => {
        try {
            const res = await apiFetch('/api/user/profile', {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });

            if (res.status === 401) {
                localStorage.clear();
                window.location.href = '/admin/login';
                return;
            }

            if (res.ok) {
                const data = await res.json();
                setProfileData(data.user);
                setNotifications(data.user.emailNotifications || notifications);
            }
        } catch (error) {
            console.error('Error fetching profile:', error);
            showMessage('error', 'Failed to load profile data');
        } finally {
            setLoading(false);
        }
    };

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        setSaving(true);

        try {
            const res = await apiFetch('/api/user/profile', {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: profileData.name,
                    email: profileData.email,
                    phone: profileData.phone,
                    companyName: profileData.companyName
                })
            });

            const data = await res.json();

            if (res.ok) {
                setProfileData(data.user);
                showMessage('success', 'Profile updated successfully!');
            } else {
                showMessage('error', data.message || 'Failed to update profile');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            showMessage('error', 'Failed to update profile');
        } finally {
            setSaving(false);
        }
    };

    const handlePasswordChange = async (e) => {
        e.preventDefault();

        if (passwordData.newPassword !== passwordData.confirmPassword) {
            showMessage('error', 'New passwords do not match');
            return;
        }

        if (passwordData.newPassword.length < 6) {
            showMessage('error', 'Password must be at least 6 characters');
            return;
        }

        setSaving(true);

        try {
        const res = await apiFetch('/api/user/password', {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    currentPassword: passwordData.currentPassword,
                    newPassword: passwordData.newPassword
                })
            });

            const data = await res.json();

            if (res.ok) {
                setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
                showMessage('success', 'Password changed successfully!');
            } else {
                showMessage('error', data.message || 'Failed to change password');
            }
        } catch (error) {
            console.error('Error changing password:', error);
            showMessage('error', 'Failed to change password');
        } finally {
            setSaving(false);
        }
    };

    const handleNotificationUpdate = async () => {
        setSaving(true);

        try {
            const res = await apiFetch('/api/user/notifications', {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(notifications)
            });

            const data = await res.json();

            if (res.ok) {
                showMessage('success', 'Notification preferences updated!');
            } else {
                showMessage('error', data.message || 'Failed to update preferences');
            }
        } catch (error) {
            console.error('Error updating notifications:', error);
            showMessage('error', 'Failed to update preferences');
        } finally {
            setSaving(false);
        }
    };

    const showMessage = (type, text) => {
        setMessage({ type, text });
        setTimeout(() => setMessage({ type: '', text: '' }), 5000);
    };

    const handleSecretUpdate = async (e) => {
        e.preventDefault();
        setSecretSaving(true);
        try {
            const res = await apiFetch('/api/user/registration-secret', {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ newSecret: registrationSecret })
            });

            const data = await res.json();
            if (res.ok) {
                showMessage('success', 'Registration master key updated!');
            } else {
                showMessage('error', data.message || 'Failed to update key');
            }
        } catch (error) {
            console.error('Error updating secret:', error);
            showMessage('error', 'Failed to update key');
        } finally {
            setSecretSaving(false);
        }
    };

    const getPasswordStrength = (password) => {
        if (!password) return { label: '', color: '', width: '0%' };
        if (password.length < 6) return { label: 'Weak', color: 'bg-red-500', width: '33%' };
        if (password.length < 10) return { label: 'Medium', color: 'bg-yellow-500', width: '66%' };
        return { label: 'Strong', color: 'bg-green-500', width: '100%' };
    };

    const passwordStrength = getPasswordStrength(passwordData.newPassword);

    const tabs = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'security', label: 'Security', icon: Lock },
        { id: 'notifications', label: 'Notifications', icon: Bell }
    ];

    if (loading) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="text-textSecondary text-lg">Loading settings...</div>
            </div>
        );
    }

    return (
        <div>
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-white">Settings</h2>
                <p className="text-textSecondary mt-2">Manage your account settings and preferences</p>
            </div>

            {/* Alert Messages */}
            {message.text && (
                <div className={`mb-6 p-4 rounded-xl border ${message.type === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-red-500/10 border-red-500/20 text-red-400'}`}>
                    {message.text}
                </div>
            )}

            {/* Tabs */}
            <div className="flex gap-4 mb-6 border-b border-white/10">
                {tabs.map(tab => {
                    const Icon = tab.icon;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${activeTab === tab.id
                                ? 'border-accent text-white'
                                : 'border-transparent text-textSecondary hover:text-white'
                                }`}
                        >
                            <Icon className="w-5 h-5" />
                            <span className="font-medium">{tab.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* Profile Tab */}
            {activeTab === 'profile' && (
                <Card>
                    <form onSubmit={handleProfileUpdate} className="space-y-6">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                                {profileData.name ? profileData.name.charAt(0).toUpperCase() : 'A'}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">{profileData.name || 'Admin User'}</h3>
                                <p className="text-textSecondary">{profileData.email}</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-textSecondary mb-2">
                                    <User className="w-4 h-4 inline mr-2" />
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    value={profileData.name}
                                    onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-textSecondary focus:outline-none focus:border-accent transition-colors"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-textSecondary mb-2">
                                    <Mail className="w-4 h-4 inline mr-2" />
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={profileData.email}
                                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-textSecondary focus:outline-none focus:border-accent transition-colors"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-textSecondary mb-2">
                                    <Phone className="w-4 h-4 inline mr-2" />
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    value={profileData.phone}
                                    onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-textSecondary focus:outline-none focus:border-accent transition-colors"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-textSecondary mb-2">
                                    <Building2 className="w-4 h-4 inline mr-2" />
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    value={profileData.companyName}
                                    onChange={(e) => setProfileData({ ...profileData, companyName: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-textSecondary focus:outline-none focus:border-accent transition-colors"
                                    placeholder="Enter company name"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                            <div>
                                <label className="block text-sm font-medium text-textSecondary mb-2">
                                    <Shield className="w-4 h-4 inline mr-2" />
                                    Role
                                </label>
                                <input
                                    type="text"
                                    value={profileData.role}
                                    disabled
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-textSecondary cursor-not-allowed"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-textSecondary mb-2">
                                    <Calendar className="w-4 h-4 inline mr-2" />
                                    Member Since
                                </label>
                                <input
                                    type="text"
                                    value={profileData.createdAt ? new Date(profileData.createdAt).toLocaleDateString() : 'N/A'}
                                    disabled
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-textSecondary cursor-not-allowed"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <Button type="submit" disabled={saving}>
                                {saving ? 'Saving...' : 'Save Changes'}
                            </Button>
                        </div>
                    </form>
                </Card>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
                <Card>
                    <form onSubmit={handlePasswordChange} className="space-y-6">
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-white mb-2">Change Password</h3>
                            <p className="text-textSecondary text-sm">Ensure your account is using a long, random password to stay secure.</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-textSecondary mb-2">
                                Current Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPasswords.current ? 'text' : 'password'}
                                    value={passwordData.currentPassword}
                                    onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-textSecondary focus:outline-none focus:border-accent transition-colors pr-12"
                                    placeholder="Enter current password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPasswords({ ...showPasswords, current: !showPasswords.current })}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-textSecondary hover:text-white transition-colors"
                                >
                                    {showPasswords.current ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-textSecondary mb-2">
                                New Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPasswords.new ? 'text' : 'password'}
                                    value={passwordData.newPassword}
                                    onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-textSecondary focus:outline-none focus:border-accent transition-colors pr-12"
                                    placeholder="Enter new password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPasswords({ ...showPasswords, new: !showPasswords.new })}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-textSecondary hover:text-white transition-colors"
                                >
                                    {showPasswords.new ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                            {passwordData.newPassword && (
                                <div className="mt-2">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-xs text-textSecondary">Password Strength</span>
                                        <span className={`text-xs font-medium ${passwordStrength.color.replace('bg-', 'text-')}`}>
                                            {passwordStrength.label}
                                        </span>
                                    </div>
                                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${passwordStrength.color} transition-all duration-300`}
                                            style={{ width: passwordStrength.width }}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-textSecondary mb-2">
                                Confirm New Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPasswords.confirm ? 'text' : 'password'}
                                    value={passwordData.confirmPassword}
                                    onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-textSecondary focus:outline-none focus:border-accent transition-colors pr-12"
                                    placeholder="Confirm new password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPasswords({ ...showPasswords, confirm: !showPasswords.confirm })}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-textSecondary hover:text-white transition-colors"
                                >
                                    {showPasswords.confirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <Button type="submit" disabled={saving}>
                                {saving ? 'Changing...' : 'Change Password'}
                            </Button>
                        </div>
                    </form>

                    {profileData.email === 'admin@gmail.com' && (
                        <div className="pt-8 mt-8 border-t border-white/10">
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                    <Key className="w-5 h-5 text-indigo-400" />
                                    System Security
                                </h3>
                                <p className="text-textSecondary text-sm">Control who can register as an admin on this system.</p>
                            </div>

                            <form onSubmit={handleSecretUpdate} className="grid md:grid-cols-3 gap-4 items-end">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-textSecondary mb-2">
                                        Master Registration Key
                                    </label>
                                    <input
                                        type="text"
                                        value={registrationSecret}
                                        onChange={(e) => setRegistrationSecret(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-textSecondary focus:outline-none focus:border-indigo-500 transition-colors font-mono"
                                        placeholder="Enter Access Key"
                                        required
                                    />
                                </div>
                                <Button type="submit" disabled={secretSaving} className="w-full">
                                    {secretSaving ? 'Updating...' : 'Update Key'}
                                </Button>
                            </form>
                            <p className="mt-4 text-xs text-textSecondary italic">
                                * Users must provide this exact key on the Sign Up page to create an account.
                            </p>
                        </div>
                    )}
                </Card>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
                <Card>
                    <div className="space-y-6">
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-white mb-2">Email Notifications</h3>
                            <p className="text-textSecondary text-sm">Manage your email notification preferences.</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                                <div>
                                    <h4 className="text-white font-medium">New Lead Notifications</h4>
                                    <p className="text-textSecondary text-sm">Get notified when a new lead is submitted</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={notifications.newLeads}
                                        onChange={(e) => setNotifications({ ...notifications, newLeads: e.target.checked })}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                                </label>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                                <div>
                                    <h4 className="text-white font-medium">Weekly Summary</h4>
                                    <p className="text-textSecondary text-sm">Receive a weekly summary of leads and activities</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={notifications.weeklySummary}
                                        onChange={(e) => setNotifications({ ...notifications, weeklySummary: e.target.checked })}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                                </label>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                                <div>
                                    <h4 className="text-white font-medium">System Updates</h4>
                                    <p className="text-textSecondary text-sm">Get notified about system updates and maintenance</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={notifications.systemUpdates}
                                        onChange={(e) => setNotifications({ ...notifications, systemUpdates: e.target.checked })}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                                </label>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <Button onClick={handleNotificationUpdate} disabled={saving}>
                                {saving ? 'Saving...' : 'Save Preferences'}
                            </Button>
                        </div>
                    </div>
                </Card>
            )}
        </div>
    );
};

export default Settings;
