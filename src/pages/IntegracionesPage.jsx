import React from 'react';
import { ArrowRight, Puzzle, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const integrations = [
    { name: 'WhatsApp Business',   category: 'Mensajería',   desc: 'Recibe y responde leads directamente en WhatsApp con tu agente IA.',       color: '#25D366' },
    { name: 'Gmail',               category: 'Email',        desc: 'Envía secuencias de seguimiento y lee respuestas sin salir de VexVel.',      color: '#EA4335' },
    { name: 'Google Calendar',     category: 'Calendario',   desc: 'Agenda citas automáticamente y sincroniza disponibilidad en tiempo real.',    color: '#4285F4' },
    { name: 'Instagram',           category: 'Redes sociales', desc: 'Captura leads desde DMs y comentarios de tus publicaciones.',              color: '#E1306C' },
    { name: 'Facebook Messenger',  category: 'Mensajería',   desc: 'Atiende consultas de tus anuncios de Facebook sin intervención humana.',     color: '#0084FF' },
    { name: 'Google Drive',        category: 'Documentos',   desc: 'Adjunta propuestas y documentos directamente desde tu Drive.',               color: '#34A853' },
    { name: 'Zapier',              category: 'Automatización', desc: 'Conecta VexVel con más de 6.000 aplicaciones mediante Zapier.',            color: '#FF4A00' },
    { name: 'Slack',               category: 'Notificaciones', desc: 'Recibe alertas de nuevos leads y cierres directamente en tu canal.',       color: '#4A154B' },
    { name: 'HubSpot',             category: 'CRM externo',  desc: 'Sincroniza contactos y actividad con tu CRM de HubSpot existente.',          color: '#FF7A59' },
    { name: 'Stripe',              category: 'Pagos',        desc: 'Cobra depósitos y abonos directamente desde el chat de ventas.',             color: '#635BFF' },
    { name: 'Typeform',            category: 'Formularios',  desc: 'Importa leads de formularios y lánzalos directo a tu pipeline.',             color: '#262627' },
    { name: 'Make (Integromat)',   category: 'Automatización', desc: 'Flujos avanzados con lógica compleja conectando cualquier herramienta.',   color: '#6D00CC' },
];

export default function IntegracionesPage() {
    return (
        <div className="bg-vx-base min-h-screen">

            {/* Hero */}
            <section className="pt-32 pb-20 px-6 bg-vx-surface border-b border-vx-border">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="section-label mb-4 block">Integraciones</span>
                    <h1 className="font-display text-5xl lg:text-6xl font-bold text-vx-text leading-tight mb-6">
                        Conéctalo con lo que{' '}
                        <span className="gradient-brand-text">ya estás usando</span>
                    </h1>
                    <p className="text-vx-muted text-lg max-w-2xl mx-auto mb-10">
                        VexVel se integra con las herramientas que ya usa tu equipo. Sin migraciones, sin fricción — solo resultados desde el primer día.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://saas-clinico-bot-production.up.railway.app/register" className="btn-primary">
                            Probar gratis <ArrowRight className="w-4 h-4" />
                        </a>
                        <Link to="/precios" className="btn-ghost">Ver planes</Link>
                    </div>
                </div>
            </section>

            {/* Grid de integraciones */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <p className="section-label text-center mb-3">Disponibles ahora</p>
                    <h2 className="font-display text-3xl font-bold text-vx-text text-center mb-14">
                        Más de 12 integraciones nativas
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {integrations.map((item) => (
                            <div key={item.name} className="card p-5 flex items-start gap-4 group hover:shadow-card-hover transition-shadow">
                                <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-white font-display font-bold text-sm"
                                    style={{ background: item.color }}>
                                    {item.name.slice(0, 2)}
                                </div>
                                <div className="min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <p className="font-display font-semibold text-vx-text text-sm">{item.name}</p>
                                        <span className="text-xs text-vx-dim border border-vx-border rounded px-1.5 py-0.5 flex-shrink-0">{item.category}</span>
                                    </div>
                                    <p className="text-xs text-vx-muted leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ¿No ves tu herramienta? */}
            <section className="py-16 px-6 bg-vx-elevated border-y border-vx-border">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="w-12 h-12 rounded-xl bg-vx-brand/10 flex items-center justify-center mx-auto mb-5">
                        <Puzzle className="w-6 h-6 text-vx-brand" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-vx-text mb-3">
                        ¿No ves tu herramienta?
                    </h2>
                    <p className="text-vx-muted mb-8">
                        Podemos conectar VexVel con cualquier sistema que tenga API. Cuéntanos qué usas y lo evaluamos sin costo.
                    </p>
                    <Link to="/empresa/contacto" className="btn-primary">
                        Hablar con el equipo <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="font-display text-3xl font-bold text-vx-text mb-4">
                        Empieza conectado desde el día 1
                    </h2>
                    <p className="text-vx-muted mb-8">
                        Configura tus integraciones en minutos. Sin tarjeta de crédito.
                    </p>
                    <a href="https://saas-clinico-bot-production.up.railway.app/register" className="btn-primary">
                        Crear cuenta gratis <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </section>
        </div>
    );
}
