import React from 'react';
import { Calendar, MessageCircle, Clock, CheckCircle2, TrendingUp, Users, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ForDentistsPage = () => {
    const services = [
        {
            title: "Agendamiento Inteligente",
            desc: "Gestiona citas nuevas y reagendamientos de forma automática, sincronizado con tu calendario.",
            icon: <Calendar className="w-6 h-6 text-white" />,
            color: "bg-blue-500"
        },
        {
            title: "Atención 24/7",
            desc: "Tu clínica nunca cierra. Responde consultas y captura pacientes incluso fuera de horario laboral.",
            icon: <Clock className="w-6 h-6 text-white" />,
            color: "bg-green-500"
        },
        {
            title: "Resolución de Dudas",
            desc: "Aclara preguntas frecuentes sobre procedimientos, precios y preparaciones al instante.",
            icon: <MessageCircle className="w-6 h-6 text-white" />,
            color: "bg-purple-500"
        },
        {
            title: "Recordatorios Automáticos",
            desc: "Envía alertas por WhatsApp para confirmar asistencia y reducir el ausentismo.",
            icon: <Zap className="w-6 h-6 text-white" />,
            color: "bg-orange-500"
        },
        {
            title: "Oferta de Servicios",
            desc: "Promociona tratamientos de blanqueamiento, ortodoncia e implantes de forma proactiva.",
            icon: <TrendingUp className="w-6 h-6 text-white" />,
            color: "bg-pink-500"
        },
        {
            title: "Recuperación de Pacientes",
            desc: "Reactiva a pacientes que no han vuelto a control con mensajes personalizados.",
            icon: <Users className="w-6 h-6 text-white" />,
            color: "bg-indigo-500"
        }
    ];

    const benefits = [
        {
            number: "40%",
            label: "Reducción de tiempo administrativo",
            desc: "Libera a tu personal de tareas repetitivas para que se enfoquen en la atención presencial."
        },
        {
            number: "24/7",
            label: "Disponibilidad total",
            desc: "Capta pacientes nocturnos o de fin de semana que competencia pierde por no contestar."
        },
        {
            number: "+30%",
            label: "Aumento en asistencia",
            desc: "Los recordatorios automáticos aseguran que tus pacientes lleguen a sus citas."
        },
        {
            number: "0",
            label: "Pacientes perdidos",
            desc: "Ninguna llamada o mensaje se queda sin respuesta, garantizando máxima conversión."
        }
    ];

    return (
        <div className="bg-white min-h-screen font-sans">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white/0 -z-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-6 tracking-wide uppercase">
                        Soluciones para Odontólogos
                    </span>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                        Transforma tu Clínica Dental con <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Inteligencia Artificial</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Automatiza la gestión de citas, responde a tus pacientes al instante y llena tu agenda sin esfuerzo manual.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30">
                            Agendar Demo Gratis
                        </button>
                        <Link to="/precios" className="bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all">
                            Ver Planes
                        </Link>
                    </div>
                </div>
            </div>

            {/* Benefits Stats Section */}
            <div className="bg-white py-16 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((stat, idx) => (
                            <div key={idx} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                                <span className="block text-4xl md:text-5xl font-black text-blue-600 mb-2">{stat.number}</span>
                                <span className="block text-lg font-bold text-gray-900 mb-2">{stat.label}</span>
                                <p className="text-gray-500 text-sm leading-relaxed">{stat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Todo lo que tu consultorio necesita</h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                            Nuestras herramientas están diseñadas específicamente para el flujo de trabajo de una clínica odontológica moderna.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className={`${service.color} w-12 h-12 rounded-xl flex items-center justify-center shadow-lg mb-6`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Final */}
            <div className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <div className="bg-gradient-to-tr from-blue-600 to-cyan-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                ¿Listo para modernizar tu clínica?
                            </h2>
                            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                                Únete a los odontólogos que ya están automatizando su atención y haciendo crecer su negocio con MedFlowAI.
                            </p>
                            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg">
                                Comenzar Ahora
                            </button>
                        </div>
                        {/* Decorative circles */}
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForDentistsPage;
