import React from 'react';
import { Link } from 'react-router-dom';

const cols = [
    {
        title: 'Producto',
        links: [
            { label: 'Agente de IA',     path: '/productos/agente-ia' },
            { label: 'CRM y Pipeline',   path: '/#solution' },
            { label: 'Automatizaciones', path: '/#solution' },
        ],
    },
    {
        title: 'Soluciones',
        links: [
            { label: 'Para ventas',   path: '/soluciones/para-ventas' },
            { label: 'Para soporte',  path: '/soluciones/para-soporte' },
            { label: 'Para agencias', path: '/soluciones/para-agencias' },
        ],
    },
    {
        title: 'Recursos',
        links: [
            { label: 'Blog',            path: '/recursos/blog' },
            { label: 'Centro de ayuda', path: '/recursos/ayuda' },
            { label: 'Casos de éxito',  path: '/recursos/casos' },
        ],
    },
    {
        title: 'Empresa',
        links: [
            { label: 'Sobre nosotros',       path: '/empresa/nosotros' },
            { label: 'Contacto',             path: '/empresa/contacto' },
            { label: 'Trabaja con nosotros', path: '/empresa/careers' },
        ],
    },
];

const Footer = () => (
    <footer style={{ background: 'linear-gradient(135deg, #1A0E46 0%, #112060 55%, #0C1A4A 100%)', paddingTop: 32, paddingBottom: 20, position: 'relative', overflow: 'hidden' }}>

        {/* Blobs decorativos */}
        <div style={{ position: 'absolute', bottom: -60, left: -60, width: 280, height: 280, borderRadius: '50%', background: 'rgba(124,58,237,0.10)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: -40, right: -40, width: 220, height: 220, borderRadius: '50%', background: 'rgba(38,97,214,0.10)', filter: 'blur(50px)', pointerEvents: 'none' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            {/* Top grid */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-4">

                {/* Brand */}
                <div className="col-span-2 space-y-4">
                    <div className="flex items-center gap-2.5">
                        <img src="/vexvel_logo.png?v=4" alt="VexVel" className="w-8 h-8 object-contain" />
                        <span className="font-display text-lg font-bold" style={{ color: 'white' }}>VexVel</span>
                    </div>
                    <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(255,255,255,0.85)' }}>
                        Tu agente de IA, siempre cerrando. CRM inteligente con automatización de leads para equipos de ventas.
                    </p>
                </div>

                {/* Link columns */}
                {cols.map((col) => (
                    <div key={col.title}>
                        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)', marginBottom: 18 }}>
                            {col.title}
                        </p>
                        <ul className="space-y-3">
                            {col.links.map((l) => (
                                <li key={l.label}>
                                    <Link to={l.path}
                                        style={{ fontSize: 13, color: 'white', textDecoration: 'none', transition: 'color 0.2s' }}
                                        onMouseEnter={e => e.target.style.color = '#C4B5FD'}
                                        onMouseLeave={e => e.target.style.color = 'white'}>
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Bottom bar */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 10, marginTop: 4, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                <p style={{ fontFamily: 'monospace', fontSize: 11, color: 'white' }}>
                    © {new Date().getFullYear()} VexVel · Hecho en Colombia
                </p>

                {/* Sociales centrados */}
                <div style={{ display: 'flex', gap: 20 }}>
                    {[
                        { label: 'Instagram', href: '#' },
                        { label: 'LinkedIn',  href: '#' },
                        { label: 'YouTube',   href: 'https://www.youtube.com/channel/UCu0GMWxnBjuRW-fd3xlddjg' },
                    ].map((s) => (
                        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                            style={{ fontSize: 12, fontWeight: 600, color: 'white', transition: 'color 0.2s', textDecoration: 'none' }}
                            onMouseEnter={e => e.target.style.color = '#A78BFA'}
                            onMouseLeave={e => e.target.style.color = 'white'}>
                            {s.label}
                        </a>
                    ))}
                </div>

                <div style={{ display: 'flex', gap: 24 }}>
                    {[
                        { label: 'Privacidad',      href: '#' },
                        { label: 'Términos de uso', href: '#' },
                        { label: 'Cookies',         href: '#' },
                    ].map((l) => (
                        <a key={l.label} href={l.href}
                            style={{ fontSize: 11, color: 'white', textDecoration: 'none', transition: 'color 0.2s' }}
                            onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                            onMouseLeave={e => e.target.style.color = 'white'}>
                            {l.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
