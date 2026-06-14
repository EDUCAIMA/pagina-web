import React from 'react';
import { ArrowRight } from 'lucide-react';

const plans = [
    {
        name: 'Básico',
        price: '$79.000',
        period: '/mes COP',
        desc: 'Para negocios que empiezan a automatizar su proceso de ventas.',
        features: [
            'Hasta 200 leads/mes',
            'Agente IA por WhatsApp',
            'CRM con pipeline básico',
            'Agenda automática',
            'Soporte por email',
        ],
        cta: 'Empezar',
        highlight: false,
    },
    {
        name: 'Profesional',
        price: '$150.000',
        period: '/mes COP',
        desc: 'El plan favorito de equipos de ventas que quieren escalar.',
        features: [
            'Hasta 1.000 leads/mes',
            'Agente IA multicanal (WA + IG + email)',
            'CRM con score de leads y pipeline completo',
            'Automatización de seguimientos',
            'Dashboard de métricas avanzado',
            'Soporte prioritario 24/7',
        ],
        cta: 'Empezar gratis',
        highlight: true,
    },
    {
        name: 'Empresarial',
        price: '$290.000',
        period: '/mes COP',
        desc: 'Para equipos con necesidades de personalización avanzada.',
        features: [
            'Leads ilimitados',
            'Todos los canales + API personalizada',
            'CRM con múltiples pipelines y usuarios',
            'Reportes ejecutivos y segmentación',
            'Integraciones a medida',
            'Gerente de cuenta dedicado',
        ],
        cta: 'Hablar con ventas',
        highlight: false,
    },
];

const Pricing = () => (
    <section id="pricing" className="border-t border-vx-border py-24 lg:py-32 bg-vx-base">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16">
                <p className="section-label mb-4">Precios</p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-vx-text tracking-tight max-w-xl">
                    Simple. Transparente. Sin sorpresas.
                </h2>
                <p className="text-vx-muted text-lg mt-4 max-w-lg">
                    Sin contratos de permanencia. Cancela cuando quieras. Configuración inicial sin costo.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                {plans.map((plan) => (
                    <div key={plan.name} className="relative flex flex-col"
                        style={plan.highlight ? {
                            background: 'linear-gradient(120deg, #2F69E2, #431E7D)',
                            padding: '1px',
                            borderRadius: '13px',
                        } : {}}>
                        <div className={`flex flex-col flex-1 rounded-xl p-8 ${plan.highlight ? 'bg-vx-surface' : 'card'}`}>
                            {plan.highlight && (
                                <span className="section-label mb-4" style={{ color: '#2F69E2' }}>Más popular</span>
                            )}
                            <p className="font-display text-lg font-bold text-vx-text">{plan.name}</p>
                            <div className="flex items-baseline gap-1 mt-3 mb-1">
                                <span className="font-mono text-4xl font-bold text-vx-text">{plan.price}</span>
                                <span className="text-vx-dim text-sm">{plan.period}</span>
                            </div>
                            <p className="text-vx-muted text-sm leading-snug mb-8">{plan.desc}</p>

                            <ul className="space-y-3 flex-1 mb-8">
                                {plan.features.map((f) => (
                                    <li key={f} className="flex items-start gap-2.5 text-sm">
                                        <span className="text-vx-success font-bold flex-shrink-0 mt-0.5">✓</span>
                                        <span className="text-vx-muted">{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className={`flex items-center justify-center gap-2 w-full py-3 rounded-lg font-display font-semibold text-sm transition-all ${plan.highlight ? 'btn-primary' : 'btn-ghost'}`}>
                                {plan.cta}
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Pricing;
