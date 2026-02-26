"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    name: "Turbo S1",
    price: "$2,499",
    desc: "Lightweight Urban Explorer",
    bg: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC8IebJ8VtQi8Qdl-T7tNN9ZNdtmdoeG_8MFAdhYjPT9AXtlyYGiH2VW_ZoQ_D3B6TcoEXEYlWw7mbBWjiljGw8x1ksvoLQEp2MZesfCg1wLiWRjQV7f4DTuctVzMW6qlGVCdjRsbF6c4JzVm9gb1ElNNBsKmkhncz8jQoest1q-1T2Vbi2dxcW0lkie-gNWmdR_PHyHFTbmRPngdCU4oajUKWQnsWemtrX7Lhiy-OLb0A1xFYkyTfLFFJThitV-MrKGhs-FgzOiPo")',
  },
  {
    name: "Mountain Pro",
    price: "$3,199",
    desc: "All-Terrain Beast",
    bg: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBvWrrAgQEKj2N8H0QvWdb1do3UFqGZnDIbyj1EpYsLKhfePU-xvYHzVJMu6vjSrL90qQTXDGZKBwjLCn5p5i83QlMKBe9R6D9UuJamSZTe8KQprNcm3ZbGXd9dJgNhPd6NCcymf_Ciy-WZbSF5vgsgCWm__oZkf4mZosAkDJ-3X5vaPbnrBhjr_Jv9i3b1xlSERfL184N8ZJk8aDg0M5QaTDrQqH29Rfj4bIC8juixr50lNyOTFHC7DT31EnhI_0sEf3gRUDIrklE")',
  },
  {
    name: "City Glider",
    price: "$1,899",
    desc: "Foldable Commuter",
    bg: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAHS2357fUpk26ZzCE6MWlCJ3mWuADFiFo7KrqQBtR_c0V41-O9ZsE42sV3ytLfpwRBTYkoiEesEQIu9_VLYuD2RhcjcMwDNw8lK_1hM87jSni9G9wkcEcYj88ST4jgpQc-T5MLfWK6TlawuQDY6YQWs2Q1gl3Wv8ELP_ewm1IoTc8nQJ2wojRCKXBLLNv9wg2F9bwVh-JQQSYq9ThWLHrLL_te51oU-wQfH-w6nT_9eas7woAgRssftlv_8EcH-Se_vhyRvO_y4LU")',
  },
  {
    name: "Eco Cruiser",
    price: "$1,499",
    desc: "Daily Sustainable Travel",
    bg: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBLApP_pAd4dOFrIutsDOKE3acyBJ6WXm4K_NYLrPqxwoSb05gq4492J8HcoEJRVkHlnu-b7-oJR2qLsrhjr_HoRYBriYCmPQ1F9flDqvmlgDcClFpvqM8aAH8Y9B3bIm3c3L1e5QBjNnD5w4i_NVNNJTNdpWS48BqBdnFurSmQRPYu-qQ-RmIXXmfRhFHKNkjV1T646hX9MBdwz98tMqxSsa6iFP6tnmmYvuFtweyIPgxbwF4ZX051B5J2DHcEJAvlKgoXeASYUhk")',
  },
];

const categories = [
  { name: "BMX", icon: "directions_bike" },
  { name: "Escooter", icon: "electric_scooter" },
  { name: "Off Road", icon: "terrain" },
  { name: "Economie", icon: "eco" },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-0 w-full">
      {/* Hero Section */}
      <section className="px-6 md:px-20 py-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-accent text-white"
        >
          <div className="flex flex-col md:flex-row items-center gap-10 p-8 md:p-16">
            <div className="flex flex-col gap-6 md:w-1/2 z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col gap-2"
              >
                <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                  Ride the Future
                </h1>
                <p className="text-lg md:text-xl font-normal opacity-90 max-w-lg">
                  Experience the next generation of urban mobility with our premium, high-performance electric bikes.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/products" className="flex min-w-[150px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold hover:bg-white hover:text-primary transition-colors shadow-lg shadow-primary/20">
                  Shop Now
                </Link>
                <button className="flex min-w-[150px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white/10 text-white text-base font-bold hover:bg-white/20 border border-white/20 transition-all backdrop-blur-sm">
                  Learn More
                </button>
              </motion.div>
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full h-[300px] md:h-[450px] bg-center bg-no-repeat bg-contain z-10"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQ9Vtr7OhdI2kBJwWJ6sGnus_O1YREX-ZZFP1xs0M2w8nXTQioHgmc7i9Rd4p_iDOvs_46VKPnrA_alsTPVceXGA1-aNV3HwKk9-vRzRetWvQF2izwEMn5TT2RH_Dv3rAWZErfLrQuFf_NY_kziHBFr4mJCVStRPNDyYe_-lDtPHVZ0pztLHK-4rOA5nqESbDTTjt78z90xEIRMufcBlZizsmlan-rhmOPsAlCAoa2XCiEsS9PCVFyj3KSyDv4PlVWDhrzl_HG5eU")' }}
              />
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/20 to-transparent pointer-events-none"></div>
        </motion.div>
      </section>

      {/* Famous Products Section */}
      <section className="px-6 md:px-20 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-8"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Famous Products</h2>
            <p className="text-slate-500 mt-2">Our most wanted high-performance electric rides.</p>
          </div>
          <Link href="/products" className="text-primary font-bold hover:underline flex items-center gap-1">
            See All <span className="material-symbols-outlined">chevron_right</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col gap-4 p-4 rounded-xl bg-white dark:bg-[#1a0c0a] border border-slate-100 dark:border-white/5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-full aspect-square bg-slate-100 dark:bg-white/5 rounded-lg overflow-hidden">
                <div
                  className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: product.bg }}
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold group-hover:text-primary transition-colors">{product.name}</h3>
                  <span className="text-primary font-bold text-lg">{product.price}</span>
                </div>
                <p className="text-slate-500 text-sm">{product.desc}</p>
              </div>
              <Link href="/products/1" className="w-full py-2.5 rounded-lg bg-primary/10 text-primary font-bold text-sm hover:bg-primary hover:text-white transition-colors text-center">
                View Details
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Us With Video Placeholder */}
      <section className="px-6 md:px-20 py-24 bg-white dark:bg-[#150a08]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2 w-full aspect-video bg-slate-100 dark:bg-white/5 rounded-2xl relative overflow-hidden flex items-center justify-center border border-slate-200 dark:border-white/10 shadow-xl group cursor-pointer"
          >
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/20 transition-colors z-0"></div>
            <div className="w-20 h-20 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform z-10">
              <span className="material-symbols-outlined text-5xl text-primary ml-1">play_arrow</span>
            </div>
            <p className="absolute bottom-6 font-bold text-slate-500 dark:text-slate-400 tracking-wider text-sm uppercase">Video Placeholder</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 flex flex-col gap-6"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
              Who We Are
            </h2>
            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              At VoltRide, we are pioneers of the electric revolution. Our commitment to high-performance, sustainable mobility drives everything we do. We believe that urban transportation should be clean, efficient, and exhilarating. By combining cutting-edge technology with premium design, we craft electric bikes that empower you to explore your world with speed, style, and a smaller carbon footprint.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="px-6 md:px-20 py-24 bg-slate-50 dark:bg-[#1a0c0a]/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Browse by Category</h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-6 group cursor-pointer"
            >
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-white dark:bg-[#23120f] shadow-xl flex items-center justify-center border-4 border-transparent group-hover:border-primary transition-all duration-300 overflow-hidden relative group-hover:shadow-primary/20">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                <span className="material-symbols-outlined text-5xl md:text-6xl text-primary group-hover:scale-110 transition-transform">{cat.icon}</span>
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors">{cat.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section Preview */}
      <section className="px-6 md:px-20 py-24 bg-white dark:bg-[#150a08]">
        <div className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 flex flex-col gap-8"
          >
            <div>
              <h2 className="text-4xl font-black text-slate-900 dark:text-slate-100 mb-4">Contact Us</h2>
              <p className="text-slate-500 text-lg">Have questions? We're here to help you find your perfect ride.</p>
            </div>
            <form className="flex flex-col gap-6" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Full Name</label>
                  <input className="rounded-lg h-12 px-4 border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all dark:text-white" placeholder="John Doe" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                  <input className="rounded-lg h-12 px-4 border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all dark:text-white" placeholder="john@example.com" type="email" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Message</label>
                <textarea className="rounded-lg p-4 border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all dark:text-white resize-none" placeholder="How can we help?" rows={4}></textarea>
              </div>
              <button className="bg-primary text-white font-bold py-4 px-8 rounded-lg hover:bg-primary-dark transition-all w-fit shadow-lg shadow-primary/20" type="submit">
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 flex flex-col gap-8"
          >
            <div className="w-full h-[400px] rounded-2xl bg-slate-100 dark:bg-white/5 relative overflow-hidden flex items-center justify-center border border-slate-200 dark:border-white/10 group">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#b81f00_1.5px,transparent_1.5px)] [background-size:24px_24px] group-hover:scale-105 transition-transform duration-700"></div>
              <div className="z-10 text-center flex flex-col items-center gap-4 p-8 bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-2xl shadow-xl">
                <span className="material-symbols-outlined text-6xl text-primary animate-bounce">location_on</span>
                <p className="text-xl font-bold text-slate-900 dark:text-white">VoltRide HQ</p>
                <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">123 Electric Way, Innovation District<br />Tech City, TC 94103</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/10 cursor-pointer group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Call Us</p>
                  <p className="font-bold text-slate-900 dark:text-white">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/10 cursor-pointer group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Email Us</p>
                  <p className="font-bold text-slate-900 dark:text-white">hello@voltride.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
