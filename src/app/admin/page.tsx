"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const navItems = [
    { icon: "dashboard", label: "Overview", active: true },
    { icon: "electric_bike", label: "E-Bikes", active: false },
    { icon: "category", label: "Accessories", active: false },
    { icon: "shopping_bag", label: "Orders", active: false },
    { icon: "group", label: "Customers", active: false },
    { icon: "settings", label: "Settings", active: false },
];

const stats = [
    { label: "Total Revenue", value: "$124,500", icon: "payments", trend: "+12.5%", positive: true },
    { label: "Total Orders", value: "856", icon: "shopping_cart", trend: "+5.2%", positive: true },
    { label: "Active Customers", value: "1,204", icon: "group", trend: "+1.2%", positive: true },
    { label: "Pending Shipments", value: "24", icon: "local_shipping", trend: "-2.4%", positive: false },
];

const recentOrders = [
    { id: "#1024", customer: "Sarah Jenkins", date: "Today, 10:24 AM", total: "$2,499.00", status: "Processing" },
    { id: "#1023", customer: "Michael Chen", date: "Yesterday, 4:15 PM", total: "$55.50", status: "Shipped" },
    { id: "#1022", customer: "Emma Wilson", date: "Mar 1, 2:30 PM", total: "$1,850.00", status: "Delivered" },
    { id: "#1021", customer: "David Brown", date: "Feb 28, 9:00 AM", total: "$120.00", status: "Delivered" },
];

export default function AdminDashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-[calc(100vh-73px)] bg-slate-50 dark:bg-background-dark/50">
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`fixed lg:static top-[73px] left-0 h-[calc(100vh-73px)] w-64 bg-white dark:bg-black/40 border-r border-slate-200 dark:border-white/10 z-50 transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} flex flex-col`}>
                <div className="p-6 pb-2 border-b border-slate-200 dark:border-white/10">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider relative">
                        Admin <span className="text-primary">Panel</span>
                        <div className="absolute -bottom-2.5 left-0 w-8 h-1 bg-primary rounded-full"></div>
                    </h2>
                </div>

                <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                    {navItems.map((item, index) => (
                        <button
                            key={index}
                            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all font-medium text-sm ${item.active ? 'bg-primary/10 text-primary' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-slate-200'}`}
                        >
                            <span className={`material-symbols-outlined ${item.active ? 'filled' : ''}`}>{item.icon}</span>
                            {item.label}
                        </button>
                    ))}
                </nav>

                <div className="p-4 border-t border-slate-200 dark:border-white/10">
                    <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-colors font-medium text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10">
                        <span className="material-symbols-outlined">logout</span>
                        Log Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 min-w-0 flex flex-col h-[calc(100vh-73px)] overflow-y-auto">
                {/* Top header */}
                <header className="bg-white/80 dark:bg-black/20 backdrop-blur-md border-b border-slate-200 dark:border-white/10 sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="lg:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg transition-colors"
                        >
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Overview</h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2 relative text-slate-500 hover:bg-slate-100 dark:hover:bg-white/10 rounded-full transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center overflow-hidden flex-shrink-0">
                            <span className="material-symbols-outlined text-primary">admin_panel_settings</span>
                        </div>
                    </div>
                </header>

                <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto w-full">

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                            >
                                <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>

                                <div className="flex items-start justify-between mb-4 relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-black/30 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">{stat.icon}</span>
                                    </div>
                                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${stat.positive ? 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400'}`}>
                                        {stat.trend}
                                    </span>
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">{stat.label}</h3>
                                    <p className="text-3xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">{stat.value}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Recent Orders Table */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl shadow-sm lg:col-span-2 overflow-hidden flex flex-col"
                        >
                            <div className="px-6 py-5 border-b border-slate-200 dark:border-white/10 flex justify-between items-center bg-slate-50/50 dark:bg-transparent">
                                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Recent Orders</h3>
                                <button className="text-sm font-medium text-primary hover:text-primary-dark transition-colors">View All</button>
                            </div>
                            <div className="overflow-x-auto flex-1">
                                <table className="w-full text-left border-collapse min-w-[600px]">
                                    <thead>
                                        <tr className="bg-slate-50 dark:bg-black/20 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider">
                                            <th className="px-6 py-4 font-bold border-b border-slate-200 dark:border-white/10">Order ID</th>
                                            <th className="px-6 py-4 font-bold border-b border-slate-200 dark:border-white/10">Customer</th>
                                            <th className="px-6 py-4 font-bold border-b border-slate-200 dark:border-white/10">Date</th>
                                            <th className="px-6 py-4 font-bold border-b border-slate-200 dark:border-white/10">Total</th>
                                            <th className="px-6 py-4 font-bold border-b border-slate-200 dark:border-white/10">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 dark:divide-white/10 text-sm font-medium">
                                        {recentOrders.map((order, i) => (
                                            <tr key={i} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group">
                                                <td className="px-6 py-4 text-slate-900 dark:text-slate-100">{order.id}</td>
                                                <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs shrink-0">
                                                            {order.customer.charAt(0)}
                                                        </div>
                                                        {order.customer}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-slate-500">{order.date}</td>
                                                <td className="px-6 py-4 text-slate-900 dark:text-slate-100">{order.total}</td>
                                                <td className="px-6 py-4">
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${order.status === 'Delivered' ? 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400' :
                                                            order.status === 'Processing' ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400' :
                                                                'bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400'
                                                        }`}>
                                                        {order.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>

                        {/* Quick Actions / Activity */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                            className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl shadow-sm flex flex-col"
                        >
                            <div className="px-6 py-5 border-b border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-transparent">
                                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Quick Actions</h3>
                            </div>
                            <div className="p-6 space-y-4 flex-1">
                                <button className="w-full flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-white/10 hover:border-primary dark:hover:border-primary hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-left group">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined">add_circle</span>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100">Add New Product</h4>
                                        <p className="text-xs text-slate-500 mt-1">Create a new e-bike or accessory</p>
                                    </div>
                                    <span className="material-symbols-outlined ml-auto text-slate-400 group-hover:text-primary transition-colors">chevron_right</span>
                                </button>

                                <button className="w-full flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-white/10 hover:border-primary dark:hover:border-primary hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-left group">
                                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined">campaign</span>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100">Create Promotion</h4>
                                        <p className="text-xs text-slate-500 mt-1">Setup discount codes or sales</p>
                                    </div>
                                    <span className="material-symbols-outlined ml-auto text-slate-400 group-hover:text-primary transition-colors">chevron_right</span>
                                </button>

                                <button className="w-full flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-white/10 hover:border-primary dark:hover:border-primary hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-left group">
                                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined">manage_accounts</span>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100">Manage Users</h4>
                                        <p className="text-xs text-slate-500 mt-1">View customer accounts and roles</p>
                                    </div>
                                    <span className="material-symbols-outlined ml-auto text-slate-400 group-hover:text-primary transition-colors">chevron_right</span>
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>
        </div>
    );
}
