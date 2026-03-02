"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md transition-colors">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-2 text-primary hover:opacity-90 transition-opacity">
                        <span className="material-symbols-outlined text-4xl">electric_bolt</span>
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">VoltRide</h2>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors">E-Bikes</Link>
                        <Link href="/accessories" className="text-sm font-medium hover:text-primary transition-colors">Accessories</Link>
                        <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">Support</Link>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden lg:flex items-center bg-primary/5 dark:bg-primary/10 rounded-lg px-3 py-1.5 border border-primary/10">
                        <span className="material-symbols-outlined text-primary text-xl">search</span>
                        <input className="bg-transparent border-none focus:ring-0 text-sm w-48 placeholder:text-slate-500 outline-none" placeholder="Search models..." type="text" />
                    </div>

                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 hover:bg-primary/10 rounded-full text-slate-700 dark:text-slate-200 transition-colors flex items-center justify-center"
                            aria-label="Toggle Dark Mode"
                        >
                            <span className="material-symbols-outlined">
                                {theme === "dark" ? "light_mode" : "dark_mode"}
                            </span>
                        </button>
                    )}

                    <button className="p-2 hover:bg-primary/10 rounded-full text-slate-700 dark:text-slate-200 relative transition-colors">
                        <span className="material-symbols-outlined">shopping_cart</span>
                        <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">2</span>
                    </button>
                    <Link href="/auth" className="p-2 hover:bg-primary/10 rounded-full text-slate-700 dark:text-slate-200 transition-colors">
                        <span className="material-symbols-outlined">account_circle</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}
