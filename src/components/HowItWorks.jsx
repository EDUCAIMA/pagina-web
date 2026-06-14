import React, { useState, useEffect, useRef } from 'react';
import { Zap, BarChart2, CalendarCheck, Trophy, ArrowRight } from 'lucide-react';

const steps = [
    {
        icon: Zap,
        title: 'Capta',
        desc: 'El agente detecta y responde leads entrantes en segundos por WhatsApp, Instagram o email — sin intervención humana.',
    },
    {
        icon: BarChart2,
        title: 'Califica',
        desc: 'La IA analiza la conversación y asigna un score según presupuesto, urgencia y fit. Solo pasan los leads que valen.',
    },
    {
        icon: CalendarCheck,
        title: 'Agenda',
        desc: 'El agente consulta tu disponibilidad y agenda la cita en Google Calendar. El prospecto recibe confirmación al instante.',
    },
    {
        icon: Trophy,
        title: 'Cierra',
        desc: 'El trato se marca como ganado en el CRM. El agente sigue con el siguiente lead mientras tú celebras.',
        highlight: true,
    },
];

function useInView(threshold = 0.2) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [threshold]);
    return [ref, visible];
}

function StepCard({ step, delay, visible }) {
    const [hovered, setHovered] = useState(false);
    const active = hovered || step.highlight;
    return (
        <div
            className="flex flex-col gap-4 p-7 rounded-2xl"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: active
                    ? 'linear-gradient(135deg, rgba(124,58,237,0.35), rgba(38,97,214,0.28))'
                    : 'rgba(255,255,255,0.05)',
                border: active
                    ? '1px solid rgba(167,139,250,0.6)'
                    : '1px solid rgba(255,255,255,0.08)',
                boxShadow: hovered
                    ? '0 0 0 1px rgba(167,139,250,0.4), 0 0 30px 6px rgba(124,58,237,0.35), 0 8px 32px rgba(0,0,0,0.4)'
                    : step.highlight ? '0 0 40px rgba(124,58,237,0.18)' : 'none',
                opacity: visible ? 1 : 0,
                transform: visible
                    ? (hovered ? 'translateY(-6px)' : 'translateY(0)')
                    : 'translateY(28px)',
                transition: `opacity 0.4s ease ${delay}ms, transform 0.4s cubic-bezier(0.4,0,0.2,1) ${delay}ms, background 0.25s, border 0.25s, box-shadow 0.25s`,
                cursor: 'default',
            }}
        >
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
                    style={{
                        background: active ? 'linear-gradient(135deg,#7c3aed,#2661D6)' : 'rgba(167,139,250,0.12)',
                        transition: 'background 0.25s',
                    }}>
                    <step.icon className="w-5 h-5" style={{ color: active ? '#fff' : '#A78BFA' }} />
                </div>
                <h3 className="font-display text-xl font-bold" style={{ color: 'white' }}>
                    {step.title}{step.highlight && <span style={{ color: '#A78BFA' }}> ✓</span>}
                </h3>
            </div>
            <p className="text-sm leading-relaxed" style={{
                color: hovered ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.55)',
                transition: 'color 0.25s',
            }}>
                {step.desc}
            </p>
        </div>
    );
}

const HowItWorks = () => {
    const [headerRef, headerVisible] = useInView(0.2);
    const [cardsRef, cardsVisible] = useInView(0.1);

    return (
        <section id="how" className="py-14" style={{
            background: 'linear-gradient(135deg, #1A0E46 0%, #112060 55%, #0C1A4A 100%)',
        }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* ── Header 2 columnas ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

                    {/* Izquierda — título con blob + animación slide-in */}
                    <div className="relative" ref={headerRef}>
                        {/* Blob decorativo */}
                        <div style={{
                            position: 'absolute',
                            top: '-60px',
                            left: '-80px',
                            width: '420px',
                            height: '420px',
                            borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%',
                            background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.18) 0%, rgba(38,97,214,0.10) 50%, transparent 75%)',
                            filter: 'blur(32px)',
                            pointerEvents: 'none',
                            zIndex: 0,
                        }} />

                        <div className="relative z-10" style={{
                            opacity: headerVisible ? 1 : 0,
                            transform: headerVisible ? 'translateX(0)' : 'translateX(-60px)',
                            transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.4,0,0.2,1)',
                        }}>
                            <h2 className="font-display font-bold tracking-tight leading-tight"
                                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white' }}>
                                Cuatro pasos.{' '}
                                <span style={{
                                    background: 'linear-gradient(90deg, #A78BFA, #60A5FA)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}>
                                    Cero fricción.
                                </span>
                            </h2>
                            <p className="text-lg leading-relaxed mt-5" style={{ color: 'rgba(255,255,255,0.75)' }}>
                                Desde el primer mensaje hasta el trato cerrado, VexVel automatiza cada paso del proceso comercial. Tu equipo solo interviene cuando realmente importa.
                            </p>
                            <a href="https://saas-clinico-bot-production.up.railway.app/register"
                                className="inline-flex items-center gap-2 text-sm font-semibold mt-6 group w-fit"
                                style={{ color: '#A78BFA' }}>
                                Ver demo en vivo
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Derecha — imagen con marco */}
                    <div className="relative" style={{
                        padding: '3px',
                        borderRadius: 22,
                        boxShadow: '0 0 40px 8px rgba(124,58,237,0.45), 0 0 80px 20px rgba(38,97,214,0.25), 0 32px 80px rgba(0,0,0,0.6)',
                    }}>
                        <div style={{
                            position: 'absolute', inset: 0,
                            borderRadius: 22,
                            background: 'linear-gradient(135deg, #7c3aed 0%, #2661D6 50%, #7c3aed 100%)',
                            backgroundSize: '200% 200%',
                            animation: 'gradientShift 4s ease infinite',
                            zIndex: 0,
                        }} />
                        <div style={{
                            position: 'absolute', inset: -8,
                            borderRadius: 28,
                            background: 'linear-gradient(135deg, rgba(124,58,237,0.35), rgba(38,97,214,0.35))',
                            filter: 'blur(16px)',
                            zIndex: 0,
                        }} />
                        <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', zIndex: 1 }}>
                            <img src="/sales-recovery.png" alt="Sales Recovery" className="w-full h-auto object-contain block" />
                        </div>
                    </div>
                </div>

                {/* ── 4 pasos ── */}
                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
                    {steps.map((step, i) => (
                        <div key={i} className="flex">
                            <StepCard step={step} delay={i * 100} visible={cardsVisible} />
                            {i < steps.length - 1 && (
                                <div className="hidden lg:flex items-center justify-center w-10 flex-shrink-0">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <line x1="2" y1="16" x2="22" y2="16" stroke="#A78BFA" strokeWidth="2.5" strokeLinecap="round"/>
                                        <polyline points="14,8 22,16 14,24" stroke="#A78BFA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
            <style>{`
                @keyframes gradientShift {
                    0%   { background-position: 0% 50%; }
                    50%  { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        </section>
    );
};

export default HowItWorks;
