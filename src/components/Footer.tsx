import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-accent text-white dark:bg-[#1a0c0a]">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-12">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3 text-primary">
                            <span className="material-symbols-outlined text-3xl">electric_bolt</span>
                            <h2 className="text-white text-2xl font-bold">VoltRide</h2>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Leading the revolution in urban transportation with clean, efficient, and powerful electric bikes for everyone.
                        </p>
                        <div className="flex gap-4">
                            <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                                <span className="material-symbols-outlined text-sm">public</span>
                            </a>
                            <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                                <span className="material-symbols-outlined text-sm">share</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
                        <ul className="flex flex-col gap-4 text-slate-300 text-sm">
                            <li><Link className="hover:text-primary transition-colors" href="/">Home</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="/products">Shop All Bikes</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">Financing</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">Test Rides</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Support</h3>
                        <ul className="flex flex-col gap-4 text-slate-300 text-sm">
                            <li><Link className="hover:text-primary transition-colors" href="#">Manuals</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">Shipping Policy</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">Returns & Refunds</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Newsletter</h3>
                        <p className="text-slate-300 text-sm mb-4">Stay updated with the latest e-bike tech.</p>
                        <form className="flex flex-col gap-3">
                            <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-primary focus:outline-none transition-all text-white placeholder:text-slate-400" placeholder="Your email address" type="email" />
                            <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 rounded-lg text-sm transition-all">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-xs">
                    <p>© {new Date().getFullYear()} VoltRide Electric Mobility Inc. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link className="hover:text-white transition-colors" href="#">Privacy Policy</Link>
                        <Link className="hover:text-white transition-colors" href="#">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
