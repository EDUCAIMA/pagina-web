import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, MessageCircle, CalendarCheck, HelpCircle, ShoppingBag, SkipBack, SkipForward } from 'lucide-react';

/* ── YouTube Player con controles personalizados ──────────────────── */
function VideoPlayer() {
    const iframeRef = useRef(null);
    const timeRef   = useRef(182); // tiempo aproximado actual (empieza en segundo 182)

    // Incrementa el contador de tiempo cada segundo para rastrear posición
    useEffect(() => {
        const tick = setInterval(() => { timeRef.current += 1; }, 1000);
        return () => clearInterval(tick);
    }, []);

    const postCmd = (func, args) => {
        iframeRef.current?.contentWindow?.postMessage(
            JSON.stringify({ event: 'command', func, args }),
            '*'
        );
    };

    const seek = (delta) => {
        timeRef.current = Math.max(0, timeRef.current + delta);
        postCmd('seekTo', [timeRef.current, true]);
        postCmd('playVideo', []);
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
        <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 20, overflow: 'hidden', background: '#0D0720' }}>
            <iframe
                ref={iframeRef}
                src="https://www.youtube.com/embed/W5zj26sRdm8?start=182&autoplay=1&mute=1&loop=1&playlist=W5zj26sRdm8&controls=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&enablejsapi=1&origin=http://localhost:3000"
                title="VexVel demo"
                allow="autoplay; encrypted-media"
                style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            />

            {/* Capa que cubre TODO el iframe — bloquea botones de YouTube */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 3, cursor: 'default' }} />

            {/* Botones personalizados — encima de la capa bloqueadora */}
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

/* ── Capability cards ─────────────────────────────────────────────── */
const capabilities = [
    { icon: MessageCircle, label: 'Atiende clientes',  desc: '24 / 7 sin intervención humana', bg: '#2058C8', hover: '#1748A8' },
    { icon: CalendarCheck, label: 'Agenda citas',       desc: 'Sincroniza el calendario solo',   bg: '#16A34A', hover: '#0E7A35' },
    { icon: HelpCircle,    label: 'Resuelve dudas',     desc: 'Respuesta inmediata, siempre',    bg: '#7C3AED', hover: '#5B28B0' },
    { icon: ShoppingBag,   label: 'Vende productos',    desc: 'Cierra ventas directo en el chat', bg: '#C2610C', hover: '#9A4C09' },
];

function CapCard({ icon: Icon, label, desc, bg, hover }) {
    const [on, setOn] = useState(false);
    return (
        <div
            onMouseEnter={() => setOn(true)}
            onMouseLeave={() => setOn(false)}
            style={{
                background: on ? hover : bg,
                transform: on ? 'translateY(-6px) scale(1.03)' : 'translateY(0) scale(1)',
                boxShadow: on ? '0 20px 48px rgba(0,0,0,0.45)' : '0 2px 10px rgba(0,0,0,0.25)',
                transition: 'all 0.22s cubic-bezier(0.4,0,0.2,1)',
                borderRadius: 12,
                padding: '14px 16px',
                cursor: 'default',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
            }}
        >
            <div style={{ background: 'rgba(255,255,255,0.18)', borderRadius: 10, width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon style={{ width: 18, height: 18, color: 'white' }} />
            </div>
            <div>
                <p style={{ fontSize: 13, fontWeight: 700, color: 'white', fontFamily: '"Space Grotesk",sans-serif', lineHeight: 1.2 }}>{label}</p>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)', marginTop: 2, lineHeight: 1.3 }}>{desc}</p>
            </div>
        </div>
    );
}

/* ── Business avatars ─────────────────────────────────────────────── */
const biz = [
    { emoji: '🦷', bg: '#2F69E2' },
    { emoji: '🏠', bg: '#5B2BB0' },
    { emoji: '💪', bg: '#16A34A' },
    { emoji: '🍽️', bg: '#C2610C' },
];

/* ── CTA wrappers with hover-purple-ring ──────────────────────────── */
function PrimaryBtn({ href, children }) {
    const [on, setOn] = useState(false);
    return (
        <a href={href}
            onMouseEnter={() => setOn(true)}
            onMouseLeave={() => setOn(false)}
            style={{
                outline: on ? '2px solid #A855F7' : '2px solid transparent',
                outlineOffset: 3,
                transition: 'outline-color 0.18s ease',
                borderRadius: 8,
            }}
            className="btn-primary">
            {children}
        </a>
    );
}

function GhostBtn({ onClick, children }) {
    const [on, setOn] = useState(false);
    return (
        <button onClick={onClick}
            onMouseEnter={() => setOn(true)}
            onMouseLeave={() => setOn(false)}
            style={{
                background: 'transparent',
                border: on ? '1.5px solid #A855F7' : '1.5px solid rgba(255,255,255,0.35)',
                color: on ? '#E9D5FF' : 'rgba(255,255,255,0.85)',
                padding: '11px 20px',
                borderRadius: 8,
                fontFamily: '"Space Grotesk",sans-serif',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                transition: 'border-color 0.18s ease, color 0.18s ease',
                whiteSpace: 'nowrap',
            }}>
            {children}
        </button>
    );
}

/* ── Animated play icon ───────────────────────────────────────────── */
function PlayIcon() {
    return (
        <span className="relative flex items-center justify-center w-6 h-6 flex-shrink-0">
            {/* Outer ping ring */}
            <span className="absolute inset-0 rounded-full border border-white/50 animate-ping" />
            {/* Inner circle */}
            <span className="relative z-10 w-5 h-5 rounded-full border-[1.5px] border-white flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-white" style={{ marginLeft: 1 }}>
                    <polygon points="5,3 19,12 5,21" />
                </svg>
            </span>
        </span>
    );
}

/* ── Chat card ────────────────────────────────────────────────────── */
const chat = [
    { from: 'user', text: '¿Tienen citas disponibles para mañana?' },
    { from: 'bot',  text: '¡Hola! Sí, tengo las 10 am y las 3 pm libres. ¿Cuál te queda mejor?' },
    { from: 'user', text: 'Las 10 am, por favor.' },
    { from: 'bot',  text: null, action: true },
];

const agentActions = [
    { done: true,  text: 'Horario verificado' },
    { done: true,  text: 'Cita agendada · mañana 10:00 am' },
    { done: false, text: 'Enviando confirmación por WhatsApp…' },
];

function LiveClock() {
    const [t, setT] = useState('');
    useEffect(() => {
        const f = () => new Date().toTimeString().slice(0, 8);
        setT(f());
        const id = setInterval(() => setT(f()), 1000);
        return () => clearInterval(id);
    }, []);
    return <span className="font-mono text-[11px]" style={{ color: '#A78BFA' }}>{t}</span>;
}

/* ══════════════════════════════════════════════════════════════════ */
const Hero = () => (
    <section
        className="relative overflow-hidden"
        style={{
            background: 'linear-gradient(135deg, #1A0E46 0%, #112060 55%, #0C1A4A 100%)',
            paddingTop: 56,
            paddingBottom: 64,
        }}>

        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none"
            style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
            }} />
        {/* Bloom left */}
        <div className="absolute top-0 left-0 w-[700px] h-[500px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at top left, rgba(47,105,226,0.18) 0%, transparent 65%)' }} />
        {/* Bloom right */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at bottom right, rgba(124,58,237,0.14) 0%, transparent 65%)' }} />

        <div className="relative max-w-[1600px] mx-auto px-6 lg:pl-10 lg:pr-6">
            <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-8 lg:gap-10 items-center">

                {/* ── LEFT ────────────────────────────────────────── */}
                <div className="space-y-5">

                    <h1 className="font-display text-5xl md:text-6xl lg:text-[62px] font-bold leading-[1.06] tracking-tight"
                        style={{ color: 'white' }}>
                        Atiende, agenda<br />
                        y vende —{' '}
                        <span style={{
                            background: 'linear-gradient(90deg, #818CF8 0%, #C084FC 55%, #A78BFA 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            en automático.
                        </span>
                    </h1>

                    <p style={{ color: 'white', fontSize: 17, lineHeight: 1.65, maxWidth: 420, margin: '20px 0' }}>
                        Tu agente de IA responde clientes, resuelve dudas, agenda citas y cierra ventas por WhatsApp, Instagram o tu sitio web — sin que tú estés presente.
                    </p>

                    {/* Capability cards */}
                    <div className="grid grid-cols-2 gap-4" style={{ margin: '20px 0' }}>
                        {capabilities.map(c => <CapCard key={c.label} {...c} />)}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-1">
                        <PrimaryBtn href="https://saas-clinico-bot-production.up.railway.app/register">
                            Probar gratis <ArrowRight className="w-4 h-4" />
                        </PrimaryBtn>
                        <GhostBtn onClick={() => document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' })}>
                            <PlayIcon />
                            Ver cómo funciona
                        </GhostBtn>
                    </div>

                    {/* Social proof */}
                    <div className="flex items-center gap-4 pt-3"
                        style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                        <div className="flex -space-x-2">
                            {biz.map((b, i) => (
                                <div key={i}
                                    className="w-9 h-9 rounded-full flex items-center justify-center text-base border-2"
                                    style={{ background: b.bg, borderColor: '#120B2E' }}>
                                    {b.emoji}
                                </div>
                            ))}
                        </div>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
                            +80 negocios ya automatizan con{' '}
                            <span style={{ color: '#C084FC', fontWeight: 700 }}>VexVel</span>
                        </p>
                    </div>
                </div>

                {/* ── RIGHT — Video con marco ─────────────────── */}
                <div className="relative" style={{
                    padding: '3px',
                    boxShadow: '0 0 40px 8px rgba(124,58,237,0.45), 0 0 80px 20px rgba(38,97,214,0.25), 0 32px 80px rgba(0,0,0,0.6)',
                    borderRadius: 22,
                }}>

                    {/* Marco exterior con degradado morado→azul */}
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
                        background: 'linear-gradient(135deg, rgba(124,58,237,0.35), rgba(38,97,214,0.35))',
                        filter: 'blur(16px)',
                        zIndex: 0,
                    }} />

                    {/* Contenedor del video */}
                    <div style={{
                        position: 'relative',
                        borderRadius: 20,
                        overflow: 'hidden',
                        aspectRatio: '16/9',
                        background: '#0D0720',
                        zIndex: 1,
                    }}>
                        <VideoPlayer />
                    </div>
                </div>

            </div>
        </div>

        {/* spin keyframe for the loader */}
        <style>{`
            @keyframes spin { to { transform: rotate(360deg); } }
            @keyframes gradientShift {
                0%   { background-position: 0% 50%; }
                50%  { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
        `}</style>
    </section>
);

export default Hero;
