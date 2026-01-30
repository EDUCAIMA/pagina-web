import React from 'react';
import { MessageSquare, RefreshCw, Calendar, Info, HeartPulse } from 'lucide-react';

const AiAgentsPage = () => {
    const agents = [
        {
            title: "Agente de Marketing",
            desc: "Capta leads de tus campañas de Facebook/Instagram y los califica automáticamente en segundos.",
            roi: "Aumenta conversion de leads en un 40%",
            icon: <MessageSquare className="w-8 h-8 text-white" />,
            color: "bg-blue-500"
        },
        {
            title: "Agente de Re-marketing",
            desc: "Reactiva conversaciones antiguas con pacientes que preguntaron precios pero no agendaron.",
            roi: "Recupera hasta $2M en ventas perdidas / mes",
            icon: <RefreshCw className="w-8 h-8 text-white" />,
            color: "bg-purple-500"
        },
        {
            title: "Agente de Recordatorios",
            desc: "Confirma citas 24h antes por WhatsApp y gestiona reagendamientos automáticos sin intervención humana.",
            roi: "Reduce el ausentismo (No-shows) al 1%",
            icon: <Calendar className="w-8 h-8 text-white" />,
            color: "bg-green-500"
        },
        {
            title: "Agente de Atención General",
            desc: "Resuelve dudas frecuentes 24/7 sobre ubicación, precios base y preparación para citas.",
            roi: "Ahorra 4 horas diarias de secretaría",
            icon: <Info className="w-8 h-8 text-white" />,
            color: "bg-orange-500"
        },
        {
            title: "Seguimiento Post-Tratamiento",
            desc: "Envía cuidados y recomendaciones automáticas después de cirugías o procedimientos.",
            roi: "Mejora la retención y referidos",
            icon: <HeartPulse className="w-8 h-8 text-white" />,
            color: "bg-pink-500"
        }
    ];

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Header */}
            <div className="bg-surface-50 pt-32 pb-20 px-4 border-b border-gray-200">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-brand/10 text-brand font-bold text-sm mb-6">
                        Nuestros Productos
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Un equipo de expertos digitales<br />
                        <span className="text-brand">trabajando 24/7 para ti</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        No es solo un chatbot. Son agentes especializados en cada etapa del viaje de tu paciente.
                    </p>
                </div>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {agents.map((agent, idx) => (
                        <div key={idx} className="group bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl hover:border-brand/20 transition-all duration-300">
                            <div className={`${agent.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                                {agent.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{agent.title}</h3>
                            <p className="text-gray-500 mb-6 leading-relaxed">
                                {agent.desc}
                            </p>
                            <div className="bg-surface-50 p-4 rounded-xl border border-gray-100">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Impacto (ROI)</span>
                                <span className="font-semibold text-brand-dark">{agent.roi}</span>
                            </div>
                        </div>
                    ))}

                    {/* CTA Card */}
                    <div className="bg-brand-dark rounded-2xl p-8 flex flex-col justify-center text-center items-center">
                        <h3 className="text-2xl font-bold text-white mb-4">¿Necesitas uno a medida?</h3>
                        <p className="text-blue-100 mb-8">
                            Podemos entrenar un agente específico para las necesidades únicas de tu clínica.
                        </p>
                        <button className="bg-white text-brand-dark px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors w-full">
                            Hablar con Ventas
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiAgentsPage;
