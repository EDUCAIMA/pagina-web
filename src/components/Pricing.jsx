import React from 'react';
import { Check, Zap } from 'lucide-react';

const Pricing = () => {
    return (
        <section id="pricing" className="py-32 bg-surface-900 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/20 rounded-full blur-[120px] animate-pulse"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-20 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-light font-bold text-xs uppercase tracking-widest mb-6">
                        Inversión Inteligente
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        Precio <span className="text-gradient">Simple y Transparente</span>
                    </h2>
                    <p className="text-xl text-surface-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Sin comisiones ocultas ni sorpresas. Todo el poder de la IA en una sola tarifa fija.
                    </p>
                </div>

                <div className="max-w-xl mx-auto relative group">
                    {/* Shadow Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-brand to-brand-accent rounded-[40px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

                    <div className="relative glass-dark rounded-[40px] p-10 md:p-16 border border-white/10 text-center">
                        {/* Popular tag */}
                        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                            <span className="bg-brand text-white px-6 py-2 rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-2xl">
                                Plan Profesional
                            </span>
                        </div>

                        <div className="flex justify-center items-baseline mb-2">
                            <span className="text-6xl md:text-7xl font-black text-white">$150.000</span>
                            <span className="text-2xl text-surface-400 ml-3 font-medium">/mes</span>
                        </div>
                        <p className="text-brand-light mb-12 font-bold tracking-widest uppercase text-sm">Pesos Colombianos (COP)</p>

                        <div className="grid gap-5 text-left mb-12">
                            {[
                                "Agente IA 24/7 en WhatsApp",
                                "Agenda y calendario ilimitado",
                                "Recordatorios automáticos",
                                "Recuperación de ventas perdida",
                                "Dashboard de métricas avanzado",
                                "Soporte prioritario 24/7",
                                "Sin contratos de permanencia"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-4 group/item">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center border border-brand/30">
                                        <Check className="w-4 h-4 text-brand-light" />
                                    </div>
                                    <span className="text-surface-300 font-medium group-hover/item:text-white transition-colors">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="btn-primary !w-full !py-5 !text-xl shadow-2xl shadow-brand/40 group">
                            <Zap className="w-6 h-6 fill-current group-hover:scale-125 transition-transform" />
                            Activar mi Agente IA
                        </button>

                        <div className="mt-8 flex items-center justify-center gap-2 text-surface-500 text-sm font-medium">
                            <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse"></span>
                            Configuración inicial BONIFICADA (Gratis)
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
