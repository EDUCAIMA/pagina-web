import React from 'react';

const metrics = [
    { value: '3.2×', label: 'más reuniones agendadas',                detail: 'vs. sin automatización' },
    { value: '47%',  label: 'leads calificados sin intervención humana', detail: 'en promedio' },
    { value: '8h',   label: 'ahorradas por semana en seguimientos',   detail: 'por asesor comercial' },
    { value: '94%',  label: 'tasa de respuesta del agente IA',        detail: 'en menos de 30 seg' },
];

const Results = () => (
    <section className="border-t border-vx-border py-24 lg:py-32 bg-vx-base">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16">
                <p className="section-label mb-4">Resultados</p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-vx-text tracking-tight max-w-xl">
                    Números que hablan solos.
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((m, i) => (
                    <div key={i} className="card p-8 flex flex-col gap-3 hover:shadow-card-hover transition-shadow">
                        <span className="font-mono text-5xl font-bold text-vx-brand">{m.value}</span>
                        <p className="text-vx-text text-sm font-medium leading-snug">{m.label}</p>
                        <p className="font-mono text-xs text-vx-dim">{m.detail}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Results;
