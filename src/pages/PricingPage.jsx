import React from 'react';
import { Check, Shield, HelpCircle, ArrowRight } from 'lucide-react';

const PricingPage = () => {
    const features = [
        "Soporte técnico preferencial 24/7",
        "Integración oficial WhatsApp API",
        "3.000 mensajes / mes incluidos",
        "Dashboard de métricas en tiempo real",
        "Actualizaciones mensuales gratuitas",
        "Onboarding y capacitación personalizada"
    ];

    const faqs = [
        {
            q: "¿El valor incluye el IVA?",
            a: "Sí, el precio de $150.000 COP es final incluido IVA."
        },
        {
            q: "¿Qué métodos de pago aceptan?",
            a: "Aceptamos transferencias Bancolombia, Nequi y pagos PSE a través de nuestra pasarela segura."
        },
        {
            q: "¿Puedo cancelar en cualquier momento?",
            a: "Absolutamente. No tenemos cláusulas de permanencia. Puedes cancelar tu suscripción cuando lo desees."
        },
        {
            q: "¿Qué pasa si supero los mensajes incluidos?",
            a: "El sistema te avisará al llegar al 90%. Puedes recargar paquetes adicionales de mensajes a precios preferenciales."
        }
    ];

    return (
        <div className="bg-surface-50 min-h-screen pb-20">
            <div className="bg-brand-dark pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Inversión Transparente</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Sin costos ocultos ni letras pequeñas. Todo lo que necesitas para automatizar tu clínica.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 -mt-10">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto border border-gray-100">
                    <div className="md:flex">
                        <div className="p-10 md:w-1/2 flex flex-col justify-center bg-gray-50 border-r border-gray-100">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="bg-brand/10 text-brand px-3 py-1 rounded-full text-sm font-bold">Plan Profesional</span>
                            </div>
                            <div className="flex items-baseline mb-2">
                                <span className="text-5xl font-bold text-gray-900">$150.000</span>
                                <span className="text-gray-500 ml-2">/ mes</span>
                            </div>
                            <p className="text-gray-600 mb-8">COP + IVA incluido</p>
                            <button href="#" className="w-full bg-brand hover:bg-brand-dark text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-brand/20 transition-all transform hover:-translate-y-1">
                                Comenzar Ahora
                            </button>
                            <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                                <Shield className="w-3 h-3" /> Garantía de satisfacción 30 días
                            </p>
                        </div>

                        <div className="p-10 md:w-1/2">
                            <h3 className="text-lg font-bold text-gray-900 mb-6">Todo lo que incluye:</h3>
                            <ul className="space-y-4">
                                {features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="bg-green-100 p-1 rounded-full text-green-600 mt-0.5">
                                            <Check className="w-4 h-4" />
                                        </div>
                                        <span className="text-gray-600 text-[15px]">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div className="max-w-3xl mx-auto mt-20">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Preguntas Frecuentes</h2>
                    <div className="grid gap-6">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                    <HelpCircle className="w-5 h-5 text-brand" />
                                    {faq.q}
                                </h3>
                                <p className="text-gray-600 pl-7">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingPage;
