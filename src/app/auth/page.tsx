"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-background-dark py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full relative z-10"
            >
                <div className="bg-white dark:bg-white/5 border border-primary/10 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm p-8">
                    <div className="text-center mb-8">
                        <Link href="/" className="inline-flex items-center justify-center gap-2 text-primary hover:opacity-90 transition-opacity mb-6">
                            <span className="material-symbols-outlined text-4xl">electric_bolt</span>
                            <span className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">VoltRide</span>
                        </Link>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-2">
                            {isLogin ? "Welcome Back" : "Create Account"}
                        </h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            {isLogin
                                ? "Enter your details to sign in to your account"
                                : "Sign up to start your effortless ride journey"}
                        </p>
                    </div>

                    {/* Toggle */}
                    <div className="flex bg-slate-100 dark:bg-black/30 p-1 rounded-xl mb-8 relative">
                        <motion.div
                            className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white dark:bg-white/10 rounded-lg shadow-sm"
                            animate={{ left: isLogin ? "4px" : "calc(50%)" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`flex-1 py-2 text-sm font-bold relative z-10 transition-colors ${isLogin ? "text-primary" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                                }`}
                        >
                            Sign In
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`flex-1 py-2 text-sm font-bold relative z-10 transition-colors ${!isLogin ? "text-primary" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                                }`}
                        >
                            Sign Up
                        </button>
                    </div>

                    <div className="w-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isLogin ? "login" : "register"}
                                initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
                                transition={{ duration: 0.3 }}
                                className="w-full"
                            >
                                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                    {!isLogin && (
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Full Name</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <span className="material-symbols-outlined text-sm text-slate-400">person</span>
                                                </div>
                                                <input
                                                    type="text"
                                                    placeholder="John Doe"
                                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary focus:bg-white dark:focus:bg-black/40 outline-none transition-all text-sm font-medium text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email Address</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <span className="material-symbols-outlined text-sm text-slate-400">mail</span>
                                            </div>
                                            <input
                                                type="email"
                                                placeholder="you@example.com"
                                                className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary focus:bg-white dark:focus:bg-black/40 outline-none transition-all text-sm font-medium text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <div className="flex items-center justify-between">
                                            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Password</label>
                                            {isLogin && (
                                                <a href="#" className="text-xs font-bold text-primary hover:text-primary/80 transition-colors">
                                                    Forgot Password?
                                                </a>
                                            )}
                                        </div>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <span className="material-symbols-outlined text-sm text-slate-400">lock</span>
                                            </div>
                                            <input
                                                type="password"
                                                placeholder="••••••••"
                                                className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary focus:bg-white dark:focus:bg-black/40 outline-none transition-all text-sm font-medium text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all mt-4"
                                    >
                                        {isLogin ? "Sign In" : "Create Account"}
                                    </button>
                                </form>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
