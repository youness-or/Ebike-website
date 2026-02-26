"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const products = [
    {
        id: 1,
        name: "VoltMaster Pro X1",
        price: "$2,499",
        desc: "High-torque mid-drive motor with a massive 750Wh integrated battery for long range adventures.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLhmH0u-fYLoQzm1zHeZxVqDy1yxCaEmfWvZNus4eB2wYQz1Afrkq_HVr8pRUmffRSF1RotKo0qHWZKdcr16u9UTNeJ9uFSIcV7EHAQnjiBekvplicc5-NMIiObGsqOIXZj5WV38UqTZNrtyR8xVsX0LARHhwgtD4HJ-3l_FtAJJtsbW5sdT1I561GYCaLMF0StHTLCBuETKPe_M6ReIO8QTCJrI-gZNkdRPsYHFzk8gNBpf6n13hghDu64AYLnyxx1pkwnndT5S4",
        badge: "Top Rated",
        power: "750W",
        range: "60 Miles",
        speed: "28 mph",
    },
    {
        id: 2,
        name: "TrailBlazer Fat-Tire",
        price: "$1,850",
        desc: "Conquer any terrain with 4-inch fat tires and upgraded dual suspension system.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVa_mKq6mCQOBhim8p5XYaR9UP-uDTgz6YrByNZfad_tvB14wF60y4dc6tOJLy1byjdT1sQm7rzhq-p2fFaDVhmr9mq0CDS_JdQ_ZzRaASUk1gRxWIBZF-pBes8GXNEcsrcH71iwaAtuxGsHAZ9Zc9ivhp8FFhz36sGov1K6Yx7nSGi3rdjEnIY9wP_zGkTqxXtmb7G8shYBdaQhR5ki79tRWcvhcVKRraJQI-ITPGGyw2NR8sk0CO8s31zs_3AwX849m-8ae4uUc",
        power: "500W",
        range: "45 Miles",
        speed: "20 mph",
    },
    {
        id: 3,
        name: "UrbanGlide City",
        price: "$1,200",
        desc: "The ultimate daily commuter. Lightweight frame, integrated lights, and a stealthy battery.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvav12Q9LImTganEMFAZSifnVMX4rI0og5vonQqxg_FcCjlNOcgIDc9znc9RotBn6TO-c4YlPt04nL4w_0eGojMBXgMfXel66_mCEkO7cLWEvWN8vAFvEPW245acLuq4d3QuERvwvKlMrEvxFI6CibBD5JEHjT4no-jJqjqVRpse2A1wDhOse0Qs1z_FLEBH2oFK5zV2htQZrrp1jNfE7HFdWwErTpXEPlvYr1CG8znwEcdL0btbi15JTBB_yl0wyo9NSutnCG2c8",
        badge: "New Arrival",
        power: "350W",
        range: "35 Miles",
        speed: "20 mph",
    },
    {
        id: 4,
        name: "Bolt BMX Extreme",
        price: "$1,450",
        desc: "Compact, powerful, and ready for the park. The first truly performant electric BMX.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcGsW68KjNFuUUZVbNIhZmXbj5uA_56LSNr67lRBlUGNW7x1ISVkCZQ6uSrFLBjDtvSGJxERCmT2N-1saS6AkPz89jc5ib9AgjtOBuOv1Ee_OecFmwZwutGT7eeHmDrB7KIxdRRIpk4efjRH43K45UpUZuhEY0oH3b-ZXxEcmcgwsPzo90j80x2mllv-ajD_Rm7pM2buWhJFS9c9xvlYsCEMtnO9AvZ1_2VKV1Pwb9jpMGwcAx6zdeXVgU84OHEj3fMgoWkReUDDU",
        power: "500W",
        range: "25 Miles",
        speed: "20 mph",
    },
    {
        id: 5,
        name: "EcoPath Hauler",
        price: "$3,200",
        desc: "Replace your car. Heavy-duty rear rack with 350lb weight capacity and dual battery option.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpGECxrnrlXq9TwLHuMf11yu7MDFESPXJAATxcTtKVPavJQxR03PeuoLUq0q9o01AmFZIIU3veS2sujJ5SpwzUPvJszIYfDJOmNBKSi9is_LbAhgno7lXQC_L8yAybnIpJH_Z61YZsyF8nBm7DWrAjRCYXyzuztAjJcLUSQNiNSaCtKSfTMquET6do1qZoNaRP7CGIqf-6nvCvExf-qY1EkaIc59aijR0GSlREkqMo9LSLAmpIuzZW7Wz60xBPVS5QSWgqob5AiAI",
        badge: "Premium",
        power: "1000W",
        range: "80 Miles",
        speed: "28 mph",
    },
    {
        id: 6,
        name: "VoltMaster Fold S",
        price: "$1,599",
        desc: "Perfect for apartment living. Folds in seconds without sacrificing power or range.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsUYfkfYxLgR7WggOwiESkhHdcskvZZ-4otUGlIwbISkEZicmPPcTbXls5d1fYFJ1qxoY6fLJJm95Ucdv6y3JXpSycVt_ypLKK2MMaBaCaOmA245vRypsCJ_u9HFp_xtVTe6AU85tEfQ6lSlkqAw460iqpoQMiZUytVJe-K4ACL3VkWcaMUwY5MBYiij8YZh7Xq0vy7_5rzeX2HL-_wuyqRrR9eyspapnkzLYv0mhkTiMy9K8YpIec5DgwbrIlVLAYReEC9tKJGt4",
        power: "500W",
        range: "40 Miles",
        speed: "20 mph",
    },
];

export default function ProductListing() {
    return (
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            {/* Breadcrumbs & Header */}
            <div className="mb-8">
                <nav className="flex text-sm font-medium text-slate-500 mb-4">
                    <Link href="/" className="hover:text-primary">Home</Link>
                    <span className="mx-2 text-primary/30">/</span>
                    <span className="text-slate-900 dark:text-slate-100">Electric Bikes</span>
                </nav>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Electric Bikes</h1>
                        <p className="mt-2 text-slate-600 dark:text-slate-400">Discover our range of high-performance electric vehicles designed for every lifestyle.</p>
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
                            <input className="w-full bg-transparent border-none focus:ring-0 outline-none" placeholder="Search bikes..." type="text" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-bold border-b border-primary/10 pb-2">Category</h3>
                        <div className="flex flex-wrap gap-2">
                            <button className="px-4 py-2 rounded-full text-sm font-medium bg-primary text-white shadow-md shadow-primary/20">All Bikes</button>
                            <button className="px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-white/5 border border-primary/20 hover:border-primary transition-colors">BMX</button>
                            <button className="px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-white/5 border border-primary/20 hover:border-primary transition-colors">Off-road</button>
                            <button className="px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-white/5 border border-primary/20 hover:border-primary transition-colors">City Cargo</button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-bold border-b border-primary/10 pb-2">Price Range</h3>
                        <div className="px-2 pt-2">
                            <input className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider-thumb" max="5000" min="500" step="100" type="range" defaultValue={5000} />
                            <div className="flex justify-between mt-3 text-sm font-medium text-slate-500">
                                <span>$500</span>
                                <span>$5,000</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-bold border-b border-primary/10 pb-2">Speed Class</h3>
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input className="rounded border-primary/30 text-primary focus:ring-primary w-5 h-5 bg-white dark:bg-white/5" type="checkbox" />
                            <span className="text-sm group-hover:text-primary transition-colors">Class 1 (20 mph)</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input className="rounded border-primary/30 text-primary focus:ring-primary w-5 h-5 bg-white dark:bg-white/5" type="checkbox" />
                            <span className="text-sm group-hover:text-primary transition-colors">Class 2 (20 mph + Throttle)</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input className="rounded border-primary/30 text-primary focus:ring-primary w-5 h-5 bg-white dark:bg-white/5" type="checkbox" />
                            <span className="text-sm group-hover:text-primary transition-colors">Class 3 (28 mph)</span>
                        </label>
                    </div>
                </aside>

                {/* Product Grid */}
                <section className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {products.map((p, i) => (
                            <motion.div
                                key={p.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="group bg-white dark:bg-white/5 border border-primary/10 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col"
                            >
                                <div className="relative h-64 w-full bg-slate-100 dark:bg-black/20 overflow-hidden cursor-pointer">
                                    {p.badge && (
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                                                {p.badge}
                                            </span>
                                        </div>
                                    )}
                                    <div className="absolute top-4 right-4 z-10">
                                        <button className="bg-white/80 dark:bg-black/50 backdrop-blur-md p-2 rounded-full text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors shadow-sm">
                                            <span className="material-symbols-outlined text-lg">favorite</span>
                                        </button>
                                    </div>
                                    <Link href={`/products/${p.id}`}>
                                        <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src={p.img} alt={p.name} />
                                    </Link>
                                </div>

                                <div className="p-5 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-2 gap-2">
                                        <Link href={`/products/${p.id}`}>
                                            <h3 className="text-lg font-bold group-hover:text-primary transition-colors leading-tight">
                                                {p.name}
                                            </h3>
                                        </Link>
                                        <span className="text-xl font-black text-primary whitespace-nowrap">{p.price}</span>
                                    </div>

                                    <p className="text-sm text-slate-500 mb-6 line-clamp-2">
                                        {p.desc}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto mb-6 text-xs font-bold text-slate-400 dark:text-slate-500 px-1">
                                        <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">bolt</span> {p.power}</span>
                                        <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">distance</span> {p.range}</span>
                                        <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">speed</span> {p.speed}</span>
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
                        <button className="h-10 w-10 rounded-lg bg-white dark:bg-white/5 border border-primary/10 hover:bg-primary hover:text-white transition-all font-bold shadow-sm">3</button>
                        <span className="px-2 text-slate-400">...</span>
                        <button className="h-10 w-10 rounded-lg bg-white dark:bg-white/5 border border-primary/10 hover:bg-primary hover:text-white transition-all font-bold shadow-sm">12</button>
                        <button className="flex items-center justify-center h-10 w-10 rounded-lg bg-white dark:bg-white/5 border border-primary/10 hover:bg-primary hover:text-white transition-all shadow-sm">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}
