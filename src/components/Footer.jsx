import React from 'react';
import { Facebook, Youtube, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-surface-900 text-surface-400 py-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <div className="flex items-center gap-3">
                            <img src="/vexvel_logo.png" alt="VexVel Logo" className="w-8 h-8 object-contain" />
                            <span className="text-2xl font-bold text-white">
                                VexVel
                            </span>
                        </div>
                        <p className="max-w-xs text-lg font-light leading-relaxed">
                            Ayudamos a clínicas y consultorios en Colombia a automatizar su agenda y aumentar sus ventas con Inteligencia Artificial de vanguardia.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Producto</h4>
                        <ul className="space-y-4 font-medium">
                            <li><a href="#problem" className="hover:text-brand transition-colors">Problemas</a></li>
                            <li><a href="#solution" className="hover:text-brand transition-colors">Solución</a></li>
                            <li><a href="#pricing" className="hover:text-brand transition-colors">Precios</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Legal</h4>
                        <ul className="space-y-4 font-medium">
                            <li><a href="#" className="hover:text-brand transition-colors">Privacidad</a></li>
                            <li><a href="#" className="hover:text-brand transition-colors">Términos</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm">© {new Date().getFullYear()} VexVel. Todos los derechos reservados.</p>
                    <p className="text-sm flex items-center gap-2">
                        Hecho con <span className="text-red-500 animate-pulse">❤️</span> en Colombia
                    </p>
                </div>
            </div>

            {/* Social Media Section */}
            <div className="border-t border-white/5 mt-6 pt-6">
                <div className="flex justify-center gap-6">
                    <a href="https://www.youtube.com/channel/UCu0GMWxnBjuRW-fd3xlddjg" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-surface-800 text-surface-400 hover:text-white hover:bg-brand transition-all duration-300 group">
                        <Facebook className="w-5 h-5" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCu0GMWxnBjuRW-fd3xlddjg" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-surface-800 text-surface-400 hover:text-white hover:bg-brand transition-all duration-300 group">
                        <Youtube className="w-5 h-5" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCu0GMWxnBjuRW-fd3xlddjg" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-surface-800 text-surface-400 hover:text-white hover:bg-brand transition-all duration-300 group">
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCu0GMWxnBjuRW-fd3xlddjg" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-surface-800 text-surface-400 hover:text-white hover:bg-brand transition-all duration-300 group">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5"
                        >
                            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                        </svg>
                    </a>
                    <a href="https://www.youtube.com/channel/UCu0GMWxnBjuRW-fd3xlddjg" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-surface-800 text-surface-400 hover:text-white hover:bg-brand transition-all duration-300 group">
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
