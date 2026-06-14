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
            const response = await fetch('https://app.vexvel.com/api/auth/demo-register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({ email: data.email, phone: data.phone }),
            });

            const resData = await response.json();

            if (response.ok) {
                setMessage({ text: '¡Listo! Revisa tu correo para obtener tus credenciales de acceso.', type: 'success' });
                setTimeout(() => { window.location.href = 'https://app.vexvel.com/login'; }, 3000);
            } else {
                setMessage({ text: resData.detail || 'Error al crear la cuenta. Inténtalo de nuevo.', type: 'error' });
            }
        } catch {
            setMessage({ text: 'Error de conexión. Inténtalo de nuevo.', type: 'error' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="bg-ink border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left — Copy */}
                    <div className="space-y-6 text-white">
                        <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest bg-brand text-white rounded">
                            Demo Gratis
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                            Pruébalo en
                            <br />
                            tu negocio.
                        </h2>
                        <p className="text-white/60 text-lg leading-relaxed max-w-md">
                            Sin tarjeta de crédito. Sin contrato. En menos de 24 horas tu CRM y agente IA estarán listos.
                        </p>

                        {/* Trust bullets */}
                        <ul className="space-y-3 pt-4 border-t border-white/10">
                            {[
                                'Configuración inicial sin costo',
                                'Soporte en español incluido',
                                'Cancela cuando quieras',
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                                    <span className="w-4 h-4 rounded-full bg-brand flex items-center justify-center flex-shrink-0 text-white text-[10px] font-bold">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right — Form */}
                    <div className="bg-white rounded-2xl p-8">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-ink-muted mb-2">
                                    Correo Electrónico
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    disabled={isLoading}
                                    placeholder="tu@empresa.com"
                                    className="w-full px-4 py-3 rounded-lg border border-paper-border text-ink placeholder-ink-muted focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-ink-muted mb-2">
                                    WhatsApp / Teléfono
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    required
                                    disabled={isLoading}
                                    placeholder="+57 300 000 0000"
                                    className="w-full px-4 py-3 rounded-lg border border-paper-border text-ink placeholder-ink-muted focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors text-sm"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Creando tu cuenta...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4" />
                                        Probar Demo Gratis
                                    </>
                                )}
                            </button>

                            {message.text && (
                                <div className={`p-4 rounded-lg text-sm font-medium border ${
                                    message.type === 'success'
                                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                        : 'bg-red-50 text-red-700 border-red-200'
                                }`}>
                                    {message.text}
                                </div>
                            )}

                            {!message.text && (
                                <p className="text-xs text-center text-ink-muted">
                                    Te enviamos las credenciales de acceso por correo.
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
