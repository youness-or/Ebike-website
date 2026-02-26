"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
// In Next.js 15 app router, params is passed as a Promise in page components.
import { use } from "react";

const productImages = [
    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDswr89XH7QuDyUhkI3u0hEZRlQOylWrLaWIpk7-rG4aSJe9FJm1Sw47LP9EuRPlIBX891oIDNsM-7adc_wPCWVywTkGMZfzsfCF5xgLrBePrY70fcVWIskd-7PI0awMJ3wb4NjngRL0qn9d-0O42he76CVt-gl9N4gAq-0EPQfw_9sqwM2s9WnV8Joq6ybxaeim7dMAJ3HPhGvMemdAXunF4SJMjApwkLdNrwU1uTpWWtAzywoSmXLbru0KFZATVTdvV3sTNismkY", alt: "Modern sleek black and red electric mountain bike profile" },
    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDz9n5UDVBzMp4iynu6v2QNZT5z4aM23EKjah6QqOvGbwnk3pzsbG5o47Q0gfpG1ldV-Gxxtxifb5HanhNT4EX7J8whIqMkCcNWXlSxvVbiW_7gVKEFvja_MT5XZSFPkQlhbaD5rDOeWZJibJRNgNrU3UmwRdOMoE-Cml6RnkZsxg4Q5g5yiGL3jUIFEnr3zRoGH_mU4g5j3aRLaH2mm5TWXLbejOUDqNeCtR2xhyK92jT8ayg8jzXHDSbdNB6wlfBFsktC_Kr8gdY", alt: "Side view of e-bike frame" },
    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcXjcRL0RdJOfb3IOh7aUfMGaNg_fzTJSH521TpRMqRRurmQlhrwxvd56AEZ3gjJuPm5K3-r3Txj05FM8si-EJHZaeXH0MfsYdDtCaZG_EbSxQEP9c1uYKKLkRjO9Yr6lOnUb5ccEr5LL5mNWvw7YfG_kMdr2LqVsIPfo3kbicmdFk_0x60pTRmDzWC5GPdK7a8njM1uSdkPRSUH7sizatgjZ1JfyTgm3XUUnSlDnOLTCUyvBy0Yu4kSaBhms6vIfwjzP1pTAx6WY", alt: "Close up of e-bike digital display" },
    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHC0Dvda5w6tq_Q7fnrM9Xg28wyO3hAqZRbfL683c5Ba1O6MxosSQMWHTs-MuYhVk2P-FdvarTRnHKkMqJWH7uCkL7uxFjM7VC24JCD25SafeDTU5_y42x6v4y2ZmEJfqqLDTifX3RBBBk07-DKphmlF9k6JOEB9i6iqx4nilbBKA-5Qris8W5Mvp0NXHoB5ryx2hK-8j6popEJ6-YmCh3ixbu-nb-VDiSpvOeUmf-2IYG9ZoVgcDlERIaT_srQS0JRHMWSaQcu_4", alt: "E-bike motor and pedals close up" },
    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCLNNdSbzqlO_wkgRSVJleQ4ylRXqQxYU_vutKXb6QvjvvHvSMFlVpFvXQRq4pTWpGaPw7VNFKtcxZjmx9HeEgPMBSymEnWNsl7SmN79fVrLKPQgxGm12rZbznMD5GcBVWPLJk7CLuLZRMaIKbgtFx4ae_iM3Muc340_YI0p2WPHZgITQbUOtJ8PED3innNH9C1itemQjz2igL2VdpMEVH6yRutPf1w9u4Ib3F8iAEj23Cy3CXm3f7oGmNj6l0oywBEHNk_sMiAz0", alt: "Action shot of e-bike on road" },
];

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [activeImage, setActiveImage] = useState(0);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Breadcrumbs */}
            <nav className="mx-auto w-full max-w-7xl px-6 py-6">
                <ol className="flex items-center gap-2 text-sm font-medium text-slate-500">
                    <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                    <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-xs">chevron_right</span>
                        <Link href="/products" className="hover:text-primary transition-colors">Electric Bikes</Link>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                        <span className="material-symbols-outlined text-xs">chevron_right</span>
                        <span>Volt X-1 Pro</span>
                    </li>
                </ol>
            </nav>

            {/* Product Section */}
            <section className="mx-auto w-full max-w-7xl px-6 pb-16">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    {/* Left: Product Image Gallery */}
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            className="aspect-square w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-white/5 border border-primary/5 shadow-md flex items-center justify-center relative p-8"
                        >
                            <motion.img
                                key={activeImage}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                src={productImages[activeImage].img}
                                alt={productImages[activeImage].alt}
                                className="w-full h-full object-contain drop-shadow-2xl"
                            />
                        </motion.div>

                        <div className="grid grid-cols-5 gap-3">
                            {productImages.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImage(idx)}
                                    className={`aspect-square rounded-xl bg-slate-100 dark:bg-white/5 border-2 transition-all p-2 ${activeImage === idx ? 'border-primary scale-105 shadow-md shadow-primary/20' : 'border-transparent hover:border-primary/50 opacity-70 hover:opacity-100'
                                        }`}
                                >
                                    <img src={img.img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover rounded-lg" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Product Details */}
                    <div className="flex flex-col justify-center space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-sm mb-4 border border-primary/20">
                                New Arrival
                            </span>
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
                                Volt X-1 Pro
                            </h1>
                            <div className="mt-4 flex items-center gap-4">
                                <p className="text-3xl font-bold text-primary">$1,299.00</p>
                                <span className="text-sm font-medium text-slate-400 dark:text-slate-500 line-through">$1,599.00</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-4"
                        >
                            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Unleash Ultimate Performance</h3>
                            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                                Experience total freedom with the Volt X-1 Pro. Engineered for both city commutes and rugged trails, it features a high-density lithium-ion battery delivering up to 60 miles per charge. With its intelligent 750W motor, reach top speeds of 28mph effortlessly while maintaining smooth control.
                            </p>
                        </motion.div>

                        {/* Specs Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="grid grid-cols-2 gap-6 rounded-2xl bg-white dark:bg-white/5 p-6 border border-primary/10 shadow-lg shadow-black/5"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary">battery_charging_full</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Battery</p>
                                    <p className="font-bold text-slate-800 dark:text-slate-200">48V 15Ah Samsung</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary">speed</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Top Speed</p>
                                    <p className="font-bold text-slate-800 dark:text-slate-200">28 MPH</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary">map</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Range</p>
                                    <p className="font-bold text-slate-800 dark:text-slate-200">Up to 60 Miles</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary">weight</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Weight</p>
                                    <p className="font-bold text-slate-800 dark:text-slate-200">52 lbs</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Actions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col gap-4 sm:flex-row pt-4"
                        >
                            <button className="flex-1 flex items-center justify-center gap-3 rounded-xl bg-primary px-8 py-4 text-lg font-bold text-white hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1">
                                <span className="material-symbols-outlined">shopping_cart</span>
                                Add to Cart
                            </button>
                            <button className="flex-1 rounded-xl border-2 border-primary bg-transparent px-8 py-4 text-lg font-bold text-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-all hover:-translate-y-1">
                                Buy It Now
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex items-center gap-6 text-sm text-slate-500 font-medium"
                        >
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                                <span>Free Shipping</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                                <span>2-Year Warranty</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Detailed Specifications Section */}
            <section className="border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20 py-24">
                <div className="mx-auto w-full max-w-7xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">Technical Specifications</h2>
                        <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-primary"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "Drive System",
                                icon: "settings_suggest",
                                specs: [
                                    { label: "Motor Type", value: "Brushless Hub" },
                                    { label: "Power", value: "750W Peak" },
                                    { label: "Torque", value: "80 Nm" },
                                    { label: "Assist Levels", value: "5 Levels" },
                                ]
                            },
                            {
                                title: "Frame & Components",
                                icon: "architecture",
                                specs: [
                                    { label: "Material", value: "6061 Aluminum" },
                                    { label: "Suspension", value: "Front Air Fork" },
                                    { label: "Brakes", value: "Hydraulic Disc" },
                                    { label: "Drivetrain", value: "Shimano 8-Speed" },
                                ]
                            },
                            {
                                title: "Electronics",
                                icon: "settings_input_component",
                                specs: [
                                    { label: "Display", value: "Full-Color LCD" },
                                    { label: "Lights", value: "Integrated LED" },
                                    { label: "Charging Time", value: "4-6 Hours" },
                                    { label: "USB Charging", value: "Yes, Port On Display" },
                                ]
                            }
                        ].map((section, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#1a0c0a] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <h4 className="mb-6 text-xl font-bold text-primary flex items-center gap-3">
                                    <span className="material-symbols-outlined text-2xl p-2 rounded-lg bg-primary/10">{section.icon}</span>
                                    {section.title}
                                </h4>
                                <ul className="space-y-4 text-slate-600 dark:text-slate-400">
                                    {section.specs.map((spec, i) => (
                                        <li key={i} className={`flex justify-between ${i !== section.specs.length - 1 ? 'border-b border-slate-100 dark:border-white/5 pb-3' : ''}`}>
                                            <span className="font-medium">{spec.label}</span>
                                            <span className="font-bold text-slate-800 dark:text-slate-200">{spec.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
