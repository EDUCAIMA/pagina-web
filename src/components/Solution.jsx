import React, { useRef, useState, useEffect } from 'react';
import { SkipBack, SkipForward } from 'lucide-react';

/* ── Video player con controles personalizados ── */
function VideoPlayer({ src }) {
    const videoRef = useRef(null);

    const seek = (delta) => {
        if (!videoRef.current) return;
        videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime + delta);
    };

    const btnStyle = {
        background: 'rgba(0,0,0,0.60)',
        border: '1px solid rgba(255,255,255,0.22)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        color: 'white',
        borderRadius: 8,
        padding: '7px 18px',
        fontSize: 13,
        fontFamily: '"Space Grotesk", sans-serif',
        fontWeight: 600,
        cursor: 'pointer',
        display: 'flex', alignItems: 'center', gap: 6,
    };

    return (
        <div style={{ position: 'relative', width: '100%', borderRadius: 20, overflow: 'hidden', background: '#000' }}>
            <video
                ref={videoRef}
                src={src}
                autoPlay
                muted
                loop
                playsInline
                style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            {/* Botones personalizados */}
            <div style={{
                position: 'absolute', bottom: 14, left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex', gap: 10, zIndex: 4,
            }}>
                <button style={btnStyle} onClick={() => seek(-10)}>
                    <SkipBack size={14} /> 10s
                </button>
                <button style={btnStyle} onClick={() => seek(10)}>
                    10s <SkipForward size={14} />
                </button>
            </div>
        </div>
    );
}

const Solution = () => {
    const headerRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold: 0.2 }
        );
        if (headerRef.current) obs.observe(headerRef.current);
        return () => obs.disconnect();
    }, []);

    return (
    <section id="solution" className="py-14" style={{ background: '#F9F8F9' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

            {/* Encabezado */}
            <div className="mb-12 overflow-hidden" ref={headerRef}>
                <h2
                    className="font-display text-4xl md:text-5xl font-bold tracking-tight max-w-xl"
                    style={{
                        color: '#111',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(40px)',
                        transition: 'opacity 0.55s ease, transform 0.55s cubic-bezier(0.4,0,0.2,1)',
                    }}
                >
                    Tu{' '}
                    <span style={{
                        background: 'linear-gradient(135deg, #6025A0, #2661D6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>
                        pipeline
                    </span>
                    , siempre al día.
                </h2>
                <p
                    className="text-lg mt-4 leading-relaxed font-medium whitespace-nowrap"
                    style={{
                        color: '#111',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(40px)',
                        transition: 'opacity 0.55s ease 0.15s, transform 0.55s cubic-bezier(0.4,0,0.2,1) 0.15s',
                    }}
                >
                    Cada lead entra al CRM, se califica y avanza en el pipeline solo. Tú ves todo en tiempo real.
                </p>
            </div>

            {/* Marco del video/imagen — mismo estilo que Hero y HowItWorks */}
            <div className="relative" style={{
                padding: '3px',
                borderRadius: 22,
                boxShadow: '0 0 40px 8px rgba(124,58,237,0.35), 0 0 80px 20px rgba(38,97,214,0.18), 0 32px 80px rgba(0,0,0,0.18)',
            }}>
                {/* Marco degradado animado */}
                <div style={{
                    position: 'absolute', inset: 0,
                    borderRadius: 22,
                    background: 'linear-gradient(135deg, #7c3aed 0%, #2661D6 50%, #7c3aed 100%)',
                    backgroundSize: '200% 200%',
                    animation: 'gradientShift 4s ease infinite',
                    zIndex: 0,
                }} />
                {/* Glow exterior */}
                <div style={{
                    position: 'absolute', inset: -8,
                    borderRadius: 28,
                    background: 'linear-gradient(135deg, rgba(124,58,237,0.25), rgba(38,97,214,0.25))',
                    filter: 'blur(16px)',
                    zIndex: 0,
                }} />

                {/* Contenido: imagen ahora, reemplazar src por video cuando esté listo */}
                <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', zIndex: 1 }}>
                    {/* Barra navegador simulada */}
                    <div style={{
                        display: 'flex', alignItems: 'center', gap: 8,
                        padding: '10px 16px',
                        background: '#1a1a2e',
                        borderBottom: '1px solid rgba(255,255,255,0.08)',
                    }}>
                        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57', opacity: 0.8 }} />
                        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FEBC2E', opacity: 0.8 }} />
                        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840', opacity: 0.8 }} />
                        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                            <span style={{
                                fontFamily: 'monospace', fontSize: 11,
                                color: 'rgba(255,255,255,0.45)',
                                background: 'rgba(255,255,255,0.07)',
                                borderRadius: 6, padding: '2px 12px',
                            }}>
                                app.vexvel.com/pipeline
                            </span>
                        </div>
                    </div>

                    <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                        <video
                            src="/video logo.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                    </div>
                </div>
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

export default Solution;
