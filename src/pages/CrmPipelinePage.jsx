import React from 'react';
import { LayoutDashboard, TrendingUp, Users, Bell, Filter, BarChart2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const stages = [
    { label: 'Nuevo lead',    count: 24, color: '#6B6585' },
    { label: 'Contactado',    count: 18, color: '#2F69E2' },
    { label: 'Calificado',   count: 11, color: '#5B2BB0' },
    { label: 'Propuesta',     count: 7,  color: '#431E7D' },
    { label: 'Cerrado ✓',   count: 5,  color: '#16A34A' },
];

const features = [
    {
        icon: Filter,
        title: 'Pipeline visual',
        desc: 'Arrastra y suelta oportunidades entre etapas. Ve el valor total de tu pipeline en tiempo real.',
    },
    {
        icon: Bell,
        title: 'Alertas de seguimiento',
        desc: 'Nunca olvides contactar a un prospecto. El sistema te avisa cuándo es el momento exacto.',
    },
    {
        icon: Users,
        title: 'Historial completo',
        desc: 'Cada conversación, nota y tarea quedán registradas en el perfil del contacto automáticamente.',
    },
    {
        icon: TrendingUp,
        title: 'Forecast de ventas',
        desc: 'Proyecta tus ingresos del mes con precisión basada en el estado real de tu pipeline.',
    },
    {
        icon: BarChart2,
        title: 'Reportes en tiempo real',
        desc: 'Tasas de conversión, velocidad de ciclo de venta y rendimiento por agente en un solo panel.',
    },
    {
        icon: LayoutDashboard,
        title: 'Vistas personalizadas',
        desc: 'Filtra por vendedor, etapa, fecha o valor. Cada miembro del equipo ve solo lo que necesita.',
    },
];

export default function CrmPipelinePage() {
    return (
        <div className="bg-vx-base min-h-screen">

            {/* Hero */}
            <section className="pt-32 pb-20 px-6 bg-vx-surface border-b border-vx-border">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="section-label mb-4 block">CRM y Pipeline</span>
                    <h1 className="font-display text-5xl lg:text-6xl font-bold text-vx-text leading-tight mb-6">
                        Todas tus oportunidades,{' '}
                        <span className="gradient-brand-text">sin perder ninguna</span>
                    </h1>
                    <p className="text-vx-muted text-lg max-w-2xl mx-auto mb-10">
                        Un pipeline visual que tu agente IA alimenta solo. Desde el primer mensaje hasta el cierre, cada lead queda trazado y sin escaparse.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://saas-clinico-bot-production.up.railway.app/register" className="btn-primary">
                            Probar gratis <ArrowRight className="w-4 h-4" />
                        </a>
                        <Link to="/precios" className="btn-ghost">Ver planes</Link>
                    </div>
                </div>
            </section>

            {/* Pipeline demo */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <p className="section-label text-center mb-10">Tu pipeline en vivo</p>
                    <div className="grid grid-cols-5 gap-3">
                        {stages.map((s) => (
                            <div key={s.label} className="card p-4 flex flex-col gap-3">
                                <div className="h-1 rounded-full w-full" style={{ background: s.color }} />
                                <p className="text-xs font-semibold text-vx-muted">{s.label}</p>
                                <p className="font-mono text-2xl font-bold text-vx-text">{s.count}</p>
                                <p className="text-xs text-vx-dim">oportunidades</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 px-6 bg-vx-elevated border-y border-vx-border">
                <div className="max-w-5xl mx-auto">
                    <p className="section-label text-center mb-3">Funcionalidades</p>
                    <h2 className="font-display text-3xl font-bold text-vx-text text-center mb-14">
                        Todo lo que necesita tu equipo de ventas
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f) => (
                            <div key={f.title} className="card p-6 flex flex-col gap-3">
                                <div className="w-10 h-10 rounded-lg bg-vx-brand/10 flex items-center justify-center">
                                    <f.icon className="w-5 h-5 text-vx-brand" />
                                </div>
                                <h3 className="font-display font-bold text-vx-text">{f.title}</h3>
                                <p className="text-sm text-vx-muted leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="font-display text-3xl font-bold text-vx-text mb-4">
                        Empieza a cerrar más hoy
                    </h2>
                    <p className="text-vx-muted mb-8">
                        Configura tu pipeline en menos de 24 horas. Sin contratos, sin tarjeta de crédito.
                    </p>
                    <a href="https://saas-clinico-bot-production.up.railway.app/register" className="btn-primary">
                        Crear cuenta gratis <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </section>
        </div>
    );
}
