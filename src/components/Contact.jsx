import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        setIsLoading(true);
        setMessage({ text: '', type: '' });

        try {
            const API_URL = 'https://app.vexvel.com/api/auth/demo-register';

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    email: data.email,
                    phone: data.phone
                })
            });

            const resData = await response.json();

            if (response.ok) {
                setMessage({
                    text: '¡Éxito! Tu cuenta está lista. Revisa tu correo electrónico para obtener tu contraseña.',
                    type: 'success'
                });

                setTimeout(() => {
                    window.location.href = 'https://app.vexvel.com/login';
                }, 3000);
            } else {
                setMessage({
                    text: resData.detail || 'Ocurrió un error al crear la cuenta. Por favor revísalo e intenta de nuevo.',
                    type: 'error'
                });
            }
        } catch (error) {
            console.error('Error de red:', error);
            setMessage({
                text: 'Error de conexión. Inténtalo de nuevo.',
                type: 'error'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-32 bg-surface-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-surface-200 to-transparent"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="relative overflow-hidden bg-slate-900 rounded-[2.5rem] p-10 md:p-16 text-center text-white border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)] group">
                    {/* Glowing Orbs behind the form */}
                    <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[30rem] h-[30rem] bg-brand/30 blur-[130px] rounded-full mix-blend-screen opacity-50 group-hover:opacity-70 transition-opacity duration-1000"></div>
                    <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[25rem] h-[25rem] bg-brand-accent/30 blur-[120px] rounded-full mix-blend-screen opacity-40 group-hover:opacity-60 transition-opacity duration-1000"></div>

                    {/* Very subtle mesh overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900/90 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-50 text-sm font-medium mb-10 backdrop-blur-md shadow-inner">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                            </span>
                            Acceso Inmediato
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-white leading-tight">
                            ¿Listo para <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500 whitespace-nowrap">modernizar</span> tu clínica?
                        </h2>
                        <p className="text-slate-300 text-lg md:text-xl mb-14 max-w-2xl mx-auto font-light leading-relaxed">
                            Prueba nuestra Demo Gratis y descubre cuánto tiempo y dinero estás dejando sobre la mesa. No requiere tarjeta de crédito.
                        </p>

                        <form onSubmit={handleSubmit} className="w-full max-w-md relative bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl">
                            <div className="space-y-6 text-left">
                                <div className="group/input">
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2 ml-1 transition-colors group-focus-within/input:text-white">Correo Electrónico Médico</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-5 py-4 rounded-2xl bg-slate-900/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-300 shadow-inner"
                                        placeholder="dr.juan@clinica.com"
                                        disabled={isLoading}
                                    />
                                </div>

                                <div className="group/input">
                                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2 ml-1 transition-colors group-focus-within/input:text-white">Teléfono / WhatsApp</label>
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        required
                                        className="w-full px-5 py-4 rounded-2xl bg-slate-900/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-300 shadow-inner"
                                        placeholder="+1 234 567 890"
                                        disabled={isLoading}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full mt-8 relative overflow-hidden bg-brand hover:brightness-110 text-white py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)] hover:shadow-[0_0_60px_-15px_rgba(59,130,246,0.8)] hover:-translate-y-1 active:translate-y-0 group/btn"
                            >
                                {/* Botón Overlay Shine */}
                                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover/btn:animate-[shimmer_1.5s_infinite]"></div>

                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-6 h-6 animate-spin text-white" />
                                        <span>Creando entorno...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-6 h-6 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                                        <span>Probar Demo Gratis</span>
                                    </>
                                )}
                            </button>

                            {message.text && (
                                <div className={`mt-6 p-4 rounded-xl text-sm text-center font-medium backdrop-blur-md border animate-in fade-in slide-in-from-bottom-2 ${message.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border-rose-500/20'}`}>
                                    {message.text}
                                </div>
                            )}

                            {!message.text && (
                                <p className="text-sm text-center text-slate-400 mt-6 font-medium">
                                    Te enviaremos tus credenciales de acceso.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
