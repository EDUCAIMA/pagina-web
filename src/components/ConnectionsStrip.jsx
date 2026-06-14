import React from 'react';

const logos = [
    { src: '/conexiones/intagram.png',         label: 'Instagram' },
    { src: '/conexiones/facebool.png',          label: 'Facebook' },
    { src: '/conexiones/gmail.png',             label: 'Gmail' },
    { src: '/conexiones/google drive.png',      label: 'Google Drive' },
    { src: '/conexiones/google calendario.png', label: 'Google Calendar' },
];

// 4 copias para loop seamless (igual que Trust)
const track = [...logos, ...logos, ...logos, ...logos];

const ConnectionsStrip = () => (
    <section style={{ background: '#F9F8F9', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: 16, paddingBottom: 20, overflow: 'hidden' }}>
        <p style={{
            textAlign: 'center',
            marginBottom: 14,
            fontSize: '0.6rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#9CA3AF',
        }}>
            Conecta con las herramientas que ya usas.
        </p>

        <div className="relative">
            {/* Fade izquierdo */}
            <div style={{
                position: 'absolute', left: 0, top: 0, height: '100%', width: 160,
                background: 'linear-gradient(to right, #F9F8F9, transparent)',
                zIndex: 10, pointerEvents: 'none',
            }} />
            {/* Fade derecho */}
            <div style={{
                position: 'absolute', right: 0, top: 0, height: '100%', width: 160,
                background: 'linear-gradient(to left, #F9F8F9, transparent)',
                zIndex: 10, pointerEvents: 'none',
            }} />

            <div className="conn-track" style={{ display: 'flex', gap: 40, alignItems: 'center', width: 'max-content' }}>
                {track.map((logo, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                        <img src={logo.src} alt={logo.label} style={{ height: 24, width: 'auto', objectFit: 'contain' }} />
                        <span style={{ fontSize: 13, fontWeight: 600, color: '#374151', whiteSpace: 'nowrap' }}>
                            {logo.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>

        <style>{`
            .conn-track {
                animation: conn-marquee 28s linear infinite;
            }
            .conn-track:hover {
                animation-play-state: paused;
            }
            @keyframes conn-marquee {
                from { transform: translateX(0); }
                to   { transform: translateX(-25%); }
            }
        `}</style>
    </section>
);

export default ConnectionsStrip;
