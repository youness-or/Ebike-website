"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const accessories = [
    {
        id: 1,
        name: "Aero Helmet Pro",
        price: "$89.99",
        desc: "Lightweight, aerodynamic helmet with built-in LED safety lights and magnetic buckle.",
        badge: "Best Seller",
        type: "Safety",
        targetImgText: "Helmet Image",
    },
    {
        id: 2,
        name: "Titanium U-Lock Defender",
        price: "$120.00",
        desc: "Heavy-duty titanium U-lock to keep your electric bike perfectly safe anywhere you go.",
        type: "Security",
        targetImgText: "U-Lock Image",
    },
    {
        id: 3,
        name: "Lumina NightRider 1000",
        price: "$55.50",
        desc: "1000 lumen front light for maximum visibility and safety during deep night rides.",
        badge: "New Arrival",
        type: "Lighting",
        targetImgText: "Light Image",
    },
    {
        id: 4,
        name: "Cargo Rear Rack XL",
        price: "$145.00",
        desc: "Durable aluminum rear rack featuring a 50lb capacity for all your major hauling needs.",
        type: "Utility",
        targetImgText: "Rack Image",
    },
    {
        id: 5,
        name: "ErgoComfort Plus Saddle",
        price: "$75.00",
        desc: "Premium memory foam saddle designed specifically for extremely long distance riding comfort.",
        badge: "Premium",
        type: "Comfort",
        targetImgText: "Saddle Image",
    },
    {
        id: 6,
        name: "Secure Grip Phone Mount",
        price: "$35.00",
        desc: "Shock-absorbing, fully adjustable mount that safely fits all modern rugged smartphones.",
        type: "Utility",
        targetImgText: "Mount Image",
    },
];

export default function Accessories() {
    return (
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 min-h-screen">
            {/* Breadcrumbs & Header */}
            <div className="mb-8">
                <nav className="flex text-sm font-medium text-slate-500 mb-4">
                    <Link href="/" className="hover:text-primary">Home</Link>
                    <span className="mx-2 text-primary/30">/</span>
                    <span className="text-slate-900 dark:text-slate-100">Accessories</span>
                </nav>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Accessories & Gear</h1>
                        <p className="mt-2 text-slate-600 dark:text-slate-400">Enhance your electric bike experience with top-tier premium accessories.</p>
                    </motion.div>
                    <div className="flex items-center gap-2 text-sm z-10">
                        <span className="text-slate-500">Sort by:</span>
                        <select className="bg-transparent border-primary/20 rounded-lg focus:ring-primary focus:border-primary text-sm font-medium py-1 px-3 dark:bg-background-dark appearance-none">
                            <option>Featured</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Newest Arrivals</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar Filters */}
                <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
                    <div className="lg:hidden">
                        <div className="flex items-center bg-white dark:bg-background-dark border border-primary/20 rounded-xl px-4 py-2 shadow-sm">
                            <span className="material-symbols-outlined text-primary mr-2">search</span>
                            <input className="w-full bg-transparent border-none focus:ring-0 outline-none" placeholder="Search accessories..." type="text" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-bold border-b border-primary/10 pb-2">Category</h3>
                        <div className="flex flex-wrap gap-2">
                            <button className="px-4 py-2 rounded-full text-sm font-medium bg-primary text-white shadow-md shadow-primary/20">All Accessories</button>
                            <button className="px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-white/5 border border-primary/20 hover:border-primary transition-colors">Safety</button>
                            <button className="px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-white/5 border border-primary/20 hover:border-primary transition-colors">Security</button>
                            <button className="px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-white/5 border border-primary/20 hover:border-primary transition-colors">Utility</button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-bold border-b border-primary/10 pb-2">Price Range</h3>
                        <div className="px-2 pt-2">
                            <input className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider-thumb" max="300" min="10" step="10" type="range" defaultValue={300} />
                            <div className="flex justify-between mt-3 text-sm font-medium text-slate-500">
                                <span>$10</span>
                                <span>$300</span>
                            </div>
                        </div>
                    </div>

                </aside>

                {/* Product Grid */}
                <section className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {accessories.map((item, i) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="group bg-white dark:bg-white/5 border border-primary/10 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col"
                            >
                                <div className="relative h-64 w-full bg-slate-100 dark:bg-black/20 overflow-hidden cursor-pointer flex items-center justify-center border-b border-primary/5">
                                    {item.badge && (
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                                                {item.badge}
                                            </span>
                                        </div>
                                    )}
                                    <div className="absolute top-4 right-4 z-10">
                                        <button className="bg-white/80 dark:bg-black/50 backdrop-blur-md p-2 rounded-full text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors shadow-sm">
                                            <span className="material-symbols-outlined text-lg">favorite</span>
                                        </button>
                                    </div>
                                    <Link href={`#`} className="w-full h-full flex items-center justify-center text-2xl font-extrabold text-slate-300 dark:text-slate-600 drop-shadow-sm transition-transform duration-700 group-hover:scale-110 select-none">
                                        {item.targetImgText}
                                    </Link>
                                </div>

                                <div className="p-5 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-2 gap-2">
                                        <Link href={`#`}>
                                            <h3 className="text-lg font-bold group-hover:text-primary transition-colors leading-tight">
                                                {item.name}
                                            </h3>
                                        </Link>
                                        <span className="text-xl font-black text-primary whitespace-nowrap">{item.price}</span>
                                    </div>

                                    <p className="text-sm text-slate-500 mb-6 flex-1">
                                        {item.desc}
                                    </p>

                                    <div className="flex items-center justify-between mb-6 text-xs font-bold text-slate-400 dark:text-slate-500">
                                        <span className="flex items-center gap-1.5 uppercase tracking-wider"><span className="material-symbols-outlined text-sm">category</span> {item.type}</span>
                                    </div>

                                    <button className="w-full bg-slate-100 dark:bg-black/40 hover:bg-primary text-slate-900 dark:text-white hover:text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all">
                                        <span className="material-symbols-outlined">add_shopping_cart</span>
                                        Add to Cart
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-16 flex items-center justify-center gap-2">
                        <button className="flex items-center justify-center h-10 w-10 rounded-lg bg-white dark:bg-white/5 border border-primary/10 hover:bg-primary hover:text-white transition-all shadow-sm">
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button className="h-10 w-10 rounded-lg bg-primary text-white font-bold shadow-md shadow-primary/20">1</button>
                        <button className="h-10 w-10 rounded-lg bg-white dark:bg-white/5 border border-primary/10 hover:bg-primary hover:text-white transition-all font-bold shadow-sm">2</button>
                        <button className="flex items-center justify-center h-10 w-10 rounded-lg bg-white dark:bg-white/5 border border-primary/10 hover:bg-primary hover:text-white transition-all shadow-sm">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}
