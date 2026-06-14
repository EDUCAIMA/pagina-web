import React from 'react';
import { Zap, Clock, MessageCircle, Mail, RefreshCw, GitBranch, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const flows = [
    {
        trigger: 'Lead entra por WhatsApp',
        steps: ['Agente responde en 30 seg', 'Califica con preguntas clave', 'Agenda cita automáticamente', 'Notifica al vendedor'],
    },
    {
        trigger: 'Lead no responde en 24 h',
        steps: ['Reintento por WhatsApp', 'Si no abre → Email de seguimiento', 'Si no responde → Recordatorio día 3', 'Marca como "Requiere atención"'],
    },
    {
        trigger: 'Cita confirmada',
        steps: ['Recordatorio 24 h antes', 'Recordatorio 1 h antes', 'Post-cita: solicita feedback', 'Si no cerró → flujo de recuperación'],
    },
];

const features = [
    { icon: Clock,         title: 'Triggers por tiempo',     desc: 'Dispara acciones basadas en tiempo transcurrido sin respuesta o sin actividad.' },
    { icon: MessageCircle, title: 'Multi-canal',              desc: 'WhatsApp, email, SMS — el agente escoge el canal con mejor probabilidad de respuesta.' },
    { icon: GitBranch,     title: 'Lógica condicional',       desc: 'Si el lead abrió el mensaje pero no respondió, sigue un camino diferente al que nunca lo vio.' },
    { icon: RefreshCw,     title: 'Secuencias de re-enganche', desc: 'Reactiva leads fríos con mensajes personalizados según cuánto tiempo llevan sin actividad.' },
    { icon: Mail,          title: 'Plantillas inteligentes',   desc: 'Mensajes que se adaptan con el nombre, empresa y contexto de cada prospecto.' },
    { icon: Zap,           title: 'Sin código',               desc: 'Activa flujos pre-construidos en minutos o crea los tuyos con nuestro editor visual.' },
];

export default function AutomatizacionesPage() {
    return (
        <div className="bg-vx-base min-h-screen">

            {/* Hero */}
            <section className="pt-32 pb-20 px-6 bg-vx-surface border-b border-vx-border">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="section-label mb-4 block">Automatizaciones</span>
                    <h1 className="font-display text-5xl lg:text-6xl font-bold text-vx-text leading-tight mb-6">
                        Flujos que trabajan{' '}
                        <span className="gradient-brand-text">mientras tú duermes</span>
                    </h1>
                    <p className="text-vx-muted text-lg max-w-2xl mx-auto mb-10">
                        Define una vez qué debe pasar con cada lead y VexVel lo ejecuta solo: seguimientos, recordatorios, re-enganches y cierres en piloto automático.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://saas-clinico-bot-production.up.railway.app/register" className="btn-primary">
                            Probar gratis <ArrowRight className="w-4 h-4" />
                        </a>
                        <Link to="/precios" className="btn-ghost">Ver planes</Link>
                    </div>
                </div>
            </section>

            {/* Flujos demo */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <p className="section-label text-center mb-3">Flujos incluidos</p>
                    <h2 className="font-display text-3xl font-bold text-vx-text text-center mb-14">
                        Ejemplos de automatización lista para usar
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {flows.map((flow) => (
                            <div key={flow.trigger} className="card p-6 flex flex-col gap-4">
                                <div className="inline-flex items-center gap-2 bg-vx-brand/10 text-vx-brand text-xs font-semibold px-3 py-1.5 rounded-full w-fit">
                                    <Zap className="w-3.5 h-3.5" /> Trigger
                                </div>
                                <p className="font-display font-bold text-vx-text text-sm">{flow.trigger}</p>
                                <div className="space-y-2 mt-1">
                                    {flow.steps.map((step, i) => (
                                        <div key={i} className="flex items-start gap-2.5">
                                            <span className="font-mono text-xs text-vx-dim mt-0.5 w-4 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                                            <p className="text-xs text-vx-muted leading-relaxed">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 px-6 bg-vx-elevated border-y border-vx-border">
                <div className="max-w-5xl mx-auto">
                    <p className="section-label text-center mb-3">Capacidades</p>
                    <h2 className="font-display text-3xl font-bold text-vx-text text-center mb-14">
                        Motor de automatización completo
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
                        Activa tu primer flujo hoy
                    </h2>
                    <p className="text-vx-muted mb-8">
                        Configura en menos de 10 minutos. Sin código, sin contratos.
                    </p>
                    <a href="https://saas-clinico-bot-production.up.railway.app/register" className="btn-primary">
                        Empezar gratis <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </section>
        </div>
    );
}
