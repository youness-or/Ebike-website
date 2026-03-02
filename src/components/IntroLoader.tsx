"use client";

import { motion } from "framer-motion";

export function IntroLoader() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-50 dark:bg-[#150a08]"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-4"
            >
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-20 h-20 rounded-full border-4 border-slate-200 dark:border-white/10 border-t-primary flex items-center justify-center p-2"
                >
                    <span className="material-symbols-outlined text-4xl text-primary animate-pulse">electric_bolt</span>
                </motion.div>
                <div className="flex flex-col items-center gap-1 mt-4">
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">VoltRide</h1>
                    <p className="text-sm font-bold tracking-widest text-slate-400 uppercase">Powering up...</p>
                </div>

                <div className="w-48 h-1.5 bg-slate-200 dark:bg-white/10 rounded-full mt-6 overflow-hidden relative">
                    <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.8, ease: "easeInOut" }}
                        className="absolute top-0 bottom-0 left-0 bg-primary rounded-full"
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}
