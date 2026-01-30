import React from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        // Construct WhatsApp message
        const message = `Hola, mi nombre es ${data.name} de la clínica ${data.clinic}. Me gustaría agendar una demo.`;
        const whatsappUrl = `https://wa.me/573000000000?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-brand-dark rounded-3xl p-8 md:p-12 shadow-2xl text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        ¿Listo para modernizar tu clínica?
                    </h2>
                    <p className="text-blue-100 text-lg mb-8">
                        Agenda una demostración sin compromiso y descubre cuánto dinero estás dejando sobre la mesa.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4 text-left max-w-md mx-auto">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-1">Nombre Completo</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                                placeholder="Dr. Juan Pérez"
                            />
                        </div>

                        <div>
                            <label htmlFor="clinic" className="block text-sm font-medium text-blue-100 mb-1">Nombre de la Clínica</label>
                            <input
                                type="text"
                                name="clinic"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                                placeholder="Clínica Dental Sonrisas"
                            />
                        </div>

                        <button type="submit" className="w-full bg-white text-brand-dark hover:bg-blue-50 py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2 mt-6">
                            <Send className="w-5 h-5" />
                            Solicitar Demo Gratis
                        </button>
                        <p className="text-xs text-center text-blue-200 mt-4">
                            Serás redirigido a WhatsApp para coordinar la hora.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
