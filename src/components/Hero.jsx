import React from 'react';
import { Calendar, Bot, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand/5 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-accent/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content Left */}
                    <div className="space-y-10 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/5 border border-brand/10 text-brand font-medium text-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                            </span>
                            Nueva Era de Agentes IA
                        </div>

                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-surface-900 leading-[1.1] tracking-tight">
                                Atiende y agenda clientes de forma automatica <br />
                                <span className="text-gradient">con inteligencia artificial</span>
                            </h1>
                            <p className="text-xl text-surface-500 leading-relaxed max-w-xl font-light">
                                Deja de perder espacios en tu agenda por no contactar a tus clientes a tiempo, Nuestro agente inteligente gestiona pacientes, confirma citas y recupera ventas mientras tú te enfocas en lo que importa
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="btn-primary group">
                                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                Agendar Demo Gratis
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button onClick={() => window.open('https://wa.me/573000000000', '_blank')} className="btn-secondary group">
                                <Bot className="w-5 h-5 text-brand group-hover:rotate-12 transition-transform" />
                                Hablar con la IA
                            </button>
                        </div>

                        <div className="flex items-center gap-6 pt-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-2xl border-4 border-white overflow-hidden bg-surface-100 shadow-sm">
                                        <img src={`https://i.pravatar.cc/150?u=saas${i}`} alt="User" />
                                    </div>
                                ))}
                                <div className="w-12 h-12 rounded-2xl border-4 border-white bg-brand flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-brand/20">
                                    +50
                                </div>
                            </div>
                            <div className="space-y-1">
                                <div className="flex text-yellow-400 gap-0.5">
                                    {[1, 2, 3, 4, 5].map((s) => <span key={s}>★</span>)}
                                </div>
                                <p className="text-sm text-surface-500 font-medium tracking-tight">
                                    Más de 50 clínicas confían en nosotros
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Image Right */}
                    <div className="relative lg:h-[600px] flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent rounded-full blur-[100px] animate-pulse"></div>

                        {/* Main Image Container */}
                        <div className="relative w-full max-w-[540px] animate-float">
                            <div className="relative rounded-[32px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border-[8px] border-brand/30 glass p-2">
                                <img
                                    src="/hero-ia.png"
                                    alt="IA Medical Interface"
                                    className="w-full h-full object-cover rounded-[24px]"
                                />

                                {/* Floating Overlay Card */}
                                <div className="absolute bottom-8 -left-8 right-8 glass p-6 rounded-2xl animate-fade-in" style={{ animationDelay: '1s', opacity: 0 }}>
                                    <div className="flex items-center gap-5">
                                        <div className="w-14 h-14 bg-success/10 rounded-2xl flex items-center justify-center">
                                            <Bot className="w-8 h-8 text-success" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center mb-1">
                                                <p className="text-xs font-bold text-success uppercase tracking-widest">IA Activa</p>
                                                <span className="w-2 h-2 bg-success rounded-full animate-ping"></span>
                                            </div>
                                            <p className="font-bold text-surface-900 text-lg">
                                                Nueva Cita Agendada
                                            </p>
                                            <p className="text-sm text-surface-500 font-medium">Paciente: Ana Pérez • Hoy 4:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-accent/20 rounded-3xl blur-2xl animate-pulse"></div>
                            <div className="absolute -bottom-10 -right-4 w-32 h-32 bg-brand/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
