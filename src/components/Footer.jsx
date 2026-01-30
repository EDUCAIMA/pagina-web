import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-surface-900 text-surface-400 py-24 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center shadow-lg shadow-brand/20">
                                <span className="text-white font-black text-sm">M</span>
                            </div>
                            <span className="text-2xl font-bold text-white">
                                MedFlow<span className="text-gradient">AI</span>
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

                <div className="border-t border-white/5 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm">© {new Date().getFullYear()} MedFlowAI. Todos los derechos reservados.</p>
                    <p className="text-sm flex items-center gap-2">
                        Hecho con <span className="text-red-500 animate-pulse">❤️</span> en Colombia
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
