import React from 'react';
import { UserX, TrendingDown, BatteryWarning } from 'lucide-react';

const Problem = () => {
    const problems = [
        {
            icon: <UserX className="w-10 h-10 text-red-500" />,
            title: "Inasistencia de Pacientes",
            description: "El 20% de tus pacientes olvida su cita. Eso significa sillones vacíos y tiempos muertos que no se recuperan.",
            className: "md:col-span-1"
        },
        {
            icon: <TrendingDown className="w-10 h-10 text-orange-500" />,
            title: "Pérdida de Dinero",
            description: "Cada hueco en la agenda es dinero perdido.",
            className: "md:col-span-1"
        },
        {
            icon: <BatteryWarning className="w-10 h-10 text-brand-accent" />,
            title: "Fatiga Administrativa",
            description: "Tu recepcionista pasa horas respondiendo los mismos mensajes en WhatsApp en lugar de atender a los pacientes en sala.",
            className: "md:col-span-1"
        }
    ];

    return (
        <section id="problem" className="pt-8 pb-32 bg-surface-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand font-bold text-xs uppercase tracking-widest mb-6">
                        El Desafío Actual
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-surface-900 mb-6 tracking-tight">
                        ¿Por qué tu clínica no <span className="text-brand">crece</span> más rápido?
                    </h2>
                    <p className="text-xl text-surface-500 max-w-2xl mx-auto font-light leading-relaxed">
                        Detectamos los "enemigos silenciosos" que están frenando la rentabilidad de tu consultorio médico.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden rounded-[32px] p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 bg-white border border-surface-200 ${problem.className}`}
                        >
                            {/* Hover Gradient Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-brand/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="relative z-10">
                                <div className="mb-8 w-16 h-16 rounded-2xl bg-surface-50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                    {problem.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-surface-900 mb-4 tracking-tight">{problem.title}</h3>
                                <p className="text-surface-500 leading-relaxed font-medium">
                                    {problem.description}
                                </p>
                            </div>

                            {/* Decorative element */}
                            <div className="absolute bottom-[-20px] right-[-20px] w-24 h-24 bg-surface-50 rounded-full group-hover:scale-150 transition-transform duration-700 opacity-50"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Problem;
