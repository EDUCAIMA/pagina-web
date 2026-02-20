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
            const API_URL = 'https://backend-production-7bbf.up.railway.app/api/auth/demo-register';

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
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-brand-dark rounded-3xl p-8 md:p-12 shadow-2xl text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        ¿Listo para modernizar tu clínica?
                    </h2>
                    <p className="text-blue-100 text-lg mb-8">
                        Prueba nuestra Demo Gratis y descubre cuánto tiempo y dinero estás dejando sobre la mesa.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4 text-left max-w-md mx-auto">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-1">Correo Electrónico</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                                placeholder="tu@empresa.com"
                                disabled={isLoading}
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-blue-100 mb-1">Teléfono / WhatsApp</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                                placeholder="+1234567890"
                                disabled={isLoading}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-white text-brand-dark hover:bg-blue-50 py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2 mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Creando tu entorno...
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    Probar Demo Gratis
                                </>
                            )}
                        </button>

                        {message.text && (
                            <div className={`mt-4 p-3 rounded-lg text-sm text-center font-medium ${message.type === 'success' ? 'bg-green-500/20 text-green-200 border border-green-500/30' : 'bg-red-500/20 text-red-200 border border-red-500/30'}`}>
                                {message.text}
                            </div>
                        )}

                        {!message.text && (
                            <p className="text-xs text-center text-blue-200 mt-4">
                                Te enviaremos tus credenciales de acceso por correo.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
