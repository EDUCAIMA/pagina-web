import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const industries = [
    {
        emoji: '🦷',
        name: 'Odontología & Salud',
        description: 'Agenda citas, reduce inasistencias y recupera pacientes que no regresaron — todo automáticamente.',
        useCases: ['Confirmación de citas por WhatsApp', 'Recordatorios automáticos', 'Recuperación de pacientes inactivos', 'Calificación de urgencias'],
    },
    {
        emoji: '🏠',
        name: 'Inmobiliaria',
        description: 'Filtra compradores serios, agenda visitas automáticamente y mantén a tus brokers enfocados en cerrar.',
        useCases: ['Calificación de compradores/arrendatarios', 'Agendamiento de visitas', 'Seguimiento a prospectos fríos', 'Pipeline de propiedades'],
    },
    {
        emoji: '🎓',
        name: 'Educación & Academias',
        description: 'Convierte interesados en matriculados con seguimiento automático y responde dudas sobre programas las 24 horas.',
        useCases: ['Información automática de programas', 'Seguimiento a prospectos matriculables', 'Recordatorio de fechas de inicio', 'Captación de leads por redes'],
    },
    {
        emoji: '💅',
        name: 'Spa & Estética',
        description: 'Llena tu agenda sin esfuerzo: la IA atiende reservas, confirma horarios y reactiva clientes que no han vuelto.',
        useCases: ['Reservas automáticas de servicios', 'Recordatorio de citas pendientes', 'Reactivación de clientes inactivos', 'Promociones personalizadas'],
    },
    {
        emoji: '🍽️',
        name: 'Restaurantes & Delivery',
        description: 'Toma pedidos, gestiona reservas y lanza campañas de fidelización sin agregar personal al equipo.',
        useCases: ['Pedidos por WhatsApp automatizados', 'Gestión de reservas en sala', 'Campañas de fidelización', 'Encuestas de satisfacción'],
    },
    {
        emoji: '⚖️',
        name: 'Servicios Profesionales',
        description: 'Abogados, contadores, consultores: la IA precalifica casos, agenda consultas y mantiene comunicación activa.',
        useCases: ['Precalificación de casos/necesidades', 'Agenda de consultas iniciales', 'Seguimiento post-consulta', 'Documentos y recordatorios'],
    },
];

const IndustriesSection = () => {
    const [active, setActive] = useState(0);
    const current = industries[active];

    return (
        <section id="industrias" className="py-24 bg-paper-off border-t border-paper-border">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="mb-14">
                    <span className="section-tag">Multi-vertical</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mt-4 tracking-tight max-w-xl">
                        Diseñado para tu industria
                    </h2>
                    <p className="text-ink-soft text-lg mt-4 max-w-lg">
                        VexVel adapta sus agentes IA y el CRM a las necesidades de cada sector. Elige el tuyo.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Selector */}
                    <div className="lg:col-span-2 flex flex-col gap-2">
                        {industries.map((ind, i) => (
                            <button
                                key={ind.name}
                                onClick={() => setActive(i)}
                                className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-150 font-medium text-sm ${
                                    active === i
                                        ? 'bg-brand text-white border-brand'
                                        : 'bg-white text-ink border-paper-border hover:border-brand/40 hover:text-brand'
                                }`}
                            >
                                <span className="text-xl">{ind.emoji}</span>
                                <span className="truncate">{ind.name}</span>
                            </button>
                        ))}
                    </div>

                    {/* Detail */}
                    <div className="lg:col-span-3 bg-white border border-paper-border rounded-2xl p-8 lg:p-10">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-5xl">{current.emoji}</span>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-ink-muted">Caso de uso</p>
                                <h3 className="font-display text-2xl font-bold text-ink mt-1">{current.name}</h3>
                            </div>
                        </div>

                        <p className="text-ink-soft leading-relaxed mb-8">{current.description}</p>

                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-4">
                                Lo que automatiza VexVel
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {current.useCases.map((uc, i) => (
                                    <li key={i} className="flex items-center gap-3 bg-paper-off rounded-lg px-4 py-3 border border-paper-border">
                                        <span className="text-brand font-bold text-sm">✓</span>
                                        <span className="text-sm font-medium text-ink">{uc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="mt-8 inline-flex items-center gap-2 text-brand font-semibold text-sm group"
                        >
                            Ver demo para {current.name}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
