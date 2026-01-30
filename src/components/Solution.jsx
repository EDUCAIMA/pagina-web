import React from 'react';
import { MessageSquare, RefreshCw, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';

const Solution = () => {
    const features = [
        {
            tag: "Interactividad 24/7",
            title: "Agente IA WhatsApp",
            description: "Responde inmediatamente a cualquier hora. Agenda citas, resuelve dudas frecuentes y califica a los pacientes antes de pasarlos a un humano.",
            image: "/whatsapp-ia.png",
            icon: <MessageSquare className="w-6 h-6 text-success" />,
            bgColor: "bg-success/5",
            accentColor: "text-success",
            points: ["Respuesta en < 5 segundos", "Tono humano y empático", "Integración oficial con Meta"]
        },
        {
            tag: "Crecimiento Exponencial",
            title: "Recuperación de Ventas",
            description: "¿Pacientes que preguntan precio y no vuelven? Nuestra IA les hace seguimiento automático persuasivo para que agenden.",
            image: "/sales-recovery.png",
            icon: <RefreshCw className="w-6 h-6 text-brand" />,
            bgColor: "bg-brand/5",
            accentColor: "text-brand",
            reverse: true,
            points: ["Seguimiento automático inteligente", "Reactiva bases de datos antiguas", "Incrementa conversión un 35%"]
        },
        {
            tag: "Control Total",
            title: "Dashboard Estratégico",
            description: "Deja de adivinar. Ten el control total de cuántas citas se agendaron, cuántas se confirmaron y cuánto dinero ingresó.",
            image: "/dashboard.png",
            icon: <BarChart3 className="w-6 h-6 text-brand-accent" />,
            bgColor: "bg-brand-accent/5",
            accentColor: "text-brand-accent",
            points: ["Reportes en tiempo real", "Métricas de asistencia", "Control de ingresos proyectados"]
        }
    ];

    return (
        <section id="solution" className="py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-32 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/5 border border-brand/10 text-brand font-bold text-xs uppercase tracking-widest mb-6">
                        Nuestra Propuesta
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-surface-900 mb-6 tracking-tight">
                        Tu Recepcionista <span className="text-gradient">Inteligente 24/7</span>
                    </h2>
                    <p className="text-xl text-surface-500 max-w-2xl mx-auto font-light leading-relaxed">
                        Automatiza lo repetitivo, recupera ventas y toma el control total de tu negocio con tecnología de punta.
                    </p>
                </div>

                <div className="space-y-40">
                    {features.map((feature, index) => (
                        <div key={index} className={`flex flex-col ${feature.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 lg:gap-24`}>
                            {/* Image side */}
                            <div className="w-full md:w-1/2 relative group">
                                <div className={`absolute -inset-4 ${feature.bgColor} rounded-[40px] blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700`}></div>
                                <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-8 border-white group-hover:scale-[1.02] transition-transform duration-700">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-auto object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-surface-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>

                                {/* Floating Badge */}
                                <div className={`absolute -bottom-6 ${feature.reverse ? '-left-6' : '-right-6'} glass p-4 rounded-2xl shadow-xl animate-float hidden lg:block`}>
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 ${feature.bgColor} rounded-xl flex items-center justify-center`}>
                                            {feature.icon}
                                        </div>
                                        <p className="font-bold text-surface-900 text-sm">{feature.tag}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Content side */}
                            <div className="w-full md:w-1/2 space-y-8">
                                <div className={`inline-flex p-3 rounded-2xl ${feature.bgColor} ${feature.accentColor}`}>
                                    {feature.icon}
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-3xl md:text-4xl font-extrabold text-surface-900 tracking-tight leading-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-lg text-surface-500 font-medium leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                                <ul className="grid gap-4">
                                    {feature.points.map((point, i) => (
                                        <li key={i} className="flex items-center gap-4 group/item">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success/10 flex items-center justify-center group-hover/item:bg-success group-hover/item:text-white transition-colors duration-300">
                                                <CheckCircle2 className="w-4 h-4 text-success group-hover/item:text-inherit" />
                                            </div>
                                            <span className="text-surface-700 font-medium">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4">
                                    <button className="flex items-center gap-2 text-brand font-bold hover:gap-4 transition-all duration-300 group">
                                        Saber más del producto
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solution;
