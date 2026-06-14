import React, { useEffect, useRef, useState } from 'react';

const stats = [
    { prefix: '+', value: 38, suffix: '%', label: 'Aumento en ventas',    desc: 'promedio en los primeros 90 días' },
    { prefix: '',  value: 91, suffix: '%', label: 'Retención de clientes', desc: 'con seguimiento automatizado por IA' },
    { prefix: '< ',value: 3,  suffix: 's', label: 'Tiempo de respuesta',   desc: 'el agente responde al instante, 24/7' },
    { prefix: '',  value: 12, suffix: 'h', label: 'Ahorradas por semana',  desc: 'que tu equipo recupera en tareas manuales' },
];

function CountUp({ target, prefix, suffix, running }) {
    const [count, setCount] = useState(0);
    const rafRef = useRef(null);

    useEffect(() => {
        if (!running) { setCount(0); return; }
        const duration = 1600;
        const start = performance.now();
        const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafRef.current);
    }, [running, target]);

    return <span>{prefix}{count}{suffix}</span>;
}

const Problem = () => {
    const sectionRef = useRef(null);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setRunning(true); },
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="problem" ref={sectionRef} style={{ background: '#F9F8F9', paddingTop: '48px', paddingBottom: '48px' }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1.6fr] gap-10 items-center">

                    {/* Col 1 — Texto */}
                    <div className="flex flex-col gap-5 max-w-xs">
                        <p className="text-base leading-relaxed text-gray-900">
                            La diferencia entre ganar y perder un trato suele medirse en minutos. Cada lead que no recibe respuesta en los primeros 5 minutos tiene un <span className="font-semibold">80% menos de probabilidad de convertirse en cliente.</span>
                        </p>
                        <p className="text-base leading-relaxed text-gray-900">
                            Sin automatización, tu equipo llega tarde, improvisa seguimientos y pierde negocios que ya estaban ganados. VexVel cierra esa brecha — responde, califica y agenda <span className="font-semibold">mientras tú duermes.</span>
                        </p>
                        <div className="flex flex-col gap-3 mt-1">
                            {[
                                'Respuesta inmediata, las 24 horas',
                                'Seguimientos automáticos sin esfuerzo',
                                'Pipeline siempre actualizado en tiempo real',
                            ].map(item => (
                                <div key={item} className="flex items-center gap-2.5">
                                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#6025A0' }} />
                                    <span className="text-sm font-medium text-gray-900">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Col 2 — Imagen */}
                    <div className="rounded-2xl overflow-hidden w-full flex items-center justify-center">
                        <img
                            src="/WhatsApp.png"
                            alt="Resultados VexVel"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Col 3 — Título + 4 indicadores */}
                    <div className="flex flex-col gap-5">
                        <h2 className="font-display font-bold tracking-tight leading-tight text-gray-900"
                            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>
                            Los{' '}
                            <span style={{
                                background: 'linear-gradient(135deg, #6025A0, #2661D6)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}>
                                leads
                            </span>{' '}
                            no esperan.<br />Tu equipo, sí.
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                        {stats.map((s) => (
                            <div key={s.label} className="rounded-2xl p-6 bg-white flex flex-col gap-2"
                                style={{ boxShadow: '0 2px 16px rgba(96,37,160,0.08), 0 0 0 1px rgba(124,58,237,0.10)' }}>
                                <p className="font-display font-bold text-gray-900 leading-none"
                                    style={{ fontSize: '2.4rem' }}>
                                    <CountUp target={s.value} prefix={s.prefix} suffix={s.suffix} running={running} />
                                </p>
                                <p className="text-sm font-semibold text-gray-800">{s.label}</p>
                                <p className="text-xs text-gray-400 leading-snug">{s.desc}</p>
                            </div>
                        ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Problem;
