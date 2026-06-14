import React from 'react';

const testimonials = [
    {
        quote: 'Antes perdíamos leads porque no los contactábamos a tiempo. Con VexVel el agente responde al instante y nosotros solo cerramos. Aumentamos las citas confirmadas un 40% en el primer mes.',
        name: 'Diego Martínez',
        role: 'Gerente Comercial',
        company: 'Inmobiliaria Horizonte',
        avatar: 'https://i.pravatar.cc/80?u=diego',
    },
    {
        quote: 'Nunca pensé que un agente de IA pudiera sonar tan humano. Mis pacientes no notan la diferencia y ahorro más de 6 horas a la semana en coordinación de agenda.',
        name: 'Carolina Reyes',
        role: 'Directora',
        company: 'Clínica Dental Sonrisa',
        avatar: 'https://i.pravatar.cc/80?u=carolina',
    },
    {
        quote: 'El CRM siempre estaba desactualizado porque nadie tenía tiempo. Ahora se llena solo. El equipo de ventas se enfoca en cerrar, no en administrar.',
        name: 'Andrés Ospina',
        role: 'CEO',
        company: 'Academia Digital Crea',
        avatar: 'https://i.pravatar.cc/80?u=andres',
    },
];

const Testimonials = () => (
    <section className="border-t border-vx-border py-24 lg:py-32 bg-vx-elevated">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16">
                <p className="section-label mb-4">Testimonios</p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-vx-text tracking-tight max-w-xl">
                    Lo que dicen quienes ya cierran más.
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((t, i) => (
                    <div key={i} className="card p-8 flex flex-col gap-6 hover:shadow-card-hover transition-shadow">
                        <p className="text-vx-muted text-sm leading-relaxed flex-1">"{t.quote}"</p>
                        <div className="flex items-center gap-3 border-t border-vx-border pt-6">
                            <img src={t.avatar} alt={t.name}
                                className="w-9 h-9 rounded-full object-cover border border-vx-border shadow-card" />
                            <div>
                                <p className="text-vx-text text-sm font-semibold font-display">{t.name}</p>
                                <p className="text-vx-dim text-xs">{t.role} · {t.company}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Testimonials;
