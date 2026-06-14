import React from 'react';

const logos = [
    { alt: 'WhatsApp',  src: '/logos marcas tecnologia/WhatsApp_icon.png',                label: 'WhatsApp API' },
    { alt: 'OpenAI',    src: '/logos marcas tecnologia/OpenAI_Logo.svg.png',              label: null },
    { alt: 'Claude AI', src: '/logos marcas tecnologia/Claude_AI_symbol.svg.png',         label: 'Claude AI' },
    { alt: 'Gemini',    src: '/logos marcas tecnologia/Google_Gemini_logo_2025.svg.png',  label: null },
    { alt: 'AWS',       src: '/logos marcas tecnologia/Amazon_Web_Services_Logo.svg.png', label: null },
    { alt: 'Grok',      src: '/logos marcas tecnologia/grok-3.svg',                       label: null },
];

const track = [...logos, ...logos, ...logos, ...logos];

const Trust = () => (
    <section className="border-t border-vx-border bg-vx-elevated pt-4 pb-5 overflow-hidden">
        <p className="section-label text-center mb-4" style={{ fontSize: '0.6rem' }}>Potenciado por tecnología líder</p>

        <div className="relative">
            {/* Fade izquierdo */}
            <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-vx-elevated to-transparent z-10 pointer-events-none" />
            {/* Fade derecho */}
            <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-vx-elevated to-transparent z-10 pointer-events-none" />

            <div className="flex gap-10 items-center trust-track">
                {track.map((logo, i) => (
                    <div key={i} className="flex items-center gap-1.5 flex-shrink-0">
                        <img src={logo.src} alt={logo.alt} className="h-6 w-auto" />
                        {logo.label && (
                            <span className="font-semibold text-vx-text text-xs whitespace-nowrap">{logo.label}</span>
                        )}
                    </div>
                ))}
            </div>
        </div>

        <style>{`
            .trust-track {
                width: max-content;
                animation: trust-marquee 30s linear infinite;
            }
            .trust-track:hover {
                animation-play-state: paused;
            }
            @keyframes trust-marquee {
                from { transform: translateX(0); }
                to   { transform: translateX(-25%); }
            }
        `}</style>
    </section>
);

export default Trust;
