import React, { useEffect, useRef, useState } from 'react';
import { X, Send } from 'lucide-react';

/* ── Respuestas del bot ──────────────────────────────────────────── */
const rules = [
    {
        keys: ['hola', 'buenas', 'buenos', 'hey', 'hi'],
        reply: '¡Hola! 👋 Soy el asistente de VexVel. ¿En qué puedo ayudarte hoy? Puedo contarte sobre nuestros planes, integraciones o cómo funciona el agente IA.',
    },
    {
        keys: ['precio', 'plan', 'costo', 'vale', 'cuesta', 'cobran', 'tarifa'],
        reply: 'Tenemos 3 planes:\n• **Básico** — $79k/mes: 1 agente, hasta 500 conversaciones.\n• **Profesional** — $150k/mes: 3 agentes, leads ilimitados.\n• **Empresarial** — $290k/mes: agentes ilimitados + CRM completo.\n\n¿Quieres ver los detalles en nuestra página de precios?',
    },
    {
        keys: ['integra', 'whatsapp', 'gmail', 'calendar', 'instagram', 'conecta'],
        reply: 'VexVel se integra con:\n• WhatsApp Business API\n• Gmail e Instagram\n• Google Calendar\n• Facebook Messenger\n• Google Drive\n• Zapier y Make\n\nTodo sin necesidad de código. 🔌',
    },
    {
        keys: ['demo', 'prueba', 'probar', 'gratis', 'trial'],
        reply: '¡Puedes empezar gratis ahora mismo! 🚀\nSin tarjeta de crédito y con configuración en menos de 24 horas.\n\n👉 Ve a "Probar gratis" en el menú superior.',
    },
    {
        keys: ['que hace', 'cómo funciona', 'como funciona', 'para que sirve', 'para qué'],
        reply: 'VexVel es un agente de IA + CRM que:\n• Atiende clientes 24/7 por WhatsApp, Instagram o tu web.\n• Califica leads automáticamente.\n• Agenda citas en tu calendario.\n• Cierra ventas sin intervención humana.\n\nTu equipo solo recibe los prospectos calificados. 🎯',
    },
    {
        keys: ['industria', 'sector', 'negocio', 'tipo', 'sirve para'],
        reply: 'VexVel funciona para cualquier negocio que reciba clientes: clínicas, gimnasios, inmobiliarias, restaurantes, e-commerce, academias, agencias de marketing y más. ¡Más de 20 industrias!',
    },
    {
        keys: ['contacto', 'hablar', 'asesor', 'humano', 'persona'],
        reply: 'Claro, puedes contactar a nuestro equipo en:\n📧 hola@vexvel.com\n\nO ve a **Empresa → Contacto** en el menú. Te respondemos en menos de 24 horas.',
    },
    {
        keys: ['crm', 'pipeline', 'leads', 'embudo'],
        reply: 'El CRM de VexVel te permite:\n• Ver todos tus leads en un pipeline visual.\n• Hacer seguimiento automático a cada prospecto.\n• Ver reportes de conversión en tiempo real.\n• Gestionar el equipo de ventas desde un solo lugar. 📊',
    },
];

const WELCOME = '¡Hola! 👋 Soy el asistente de VexVel. ¿En qué puedo ayudarte? Pregúntame sobre precios, integraciones, cómo funciona o cualquier duda.';

function getReply(text) {
    const lower = text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    for (const rule of rules) {
        if (rule.keys.some(k => lower.includes(k))) return rule.reply;
    }
    return 'No estoy seguro de cómo responder eso, pero puedo ayudarte con preguntas sobre precios, integraciones, cómo funciona VexVel o agendar una demo. ¿Qué te gustaría saber? 😊';
}

/* ── Burbuja de mensaje ──────────────────────────────────────────── */
function Bubble({ msg }) {
    const isBot = msg.from === 'bot';
    return (
        <div style={{ display: 'flex', justifyContent: isBot ? 'flex-start' : 'flex-end', marginBottom: 8 }}>
            {isBot && (
                <img src="/chatbot.png" alt="bot" style={{ width: 26, height: 26, borderRadius: '50%', objectFit: 'cover', marginRight: 8, flexShrink: 0, alignSelf: 'flex-end' }} />
            )}
            <div style={{
                background: isBot ? '#F3EEFF' : '#7C3AED',
                color: isBot ? '#211C42' : 'white',
                borderRadius: isBot ? '14px 14px 14px 4px' : '14px 14px 4px 14px',
                padding: '9px 13px',
                fontSize: 13,
                lineHeight: 1.5,
                maxWidth: '78%',
                whiteSpace: 'pre-line',
            }}>
                {msg.text}
            </div>
        </div>
    );
}

function TypingDots() {
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 8, alignItems: 'flex-end', gap: 8 }}>
            <img src="/chatbot.png" alt="bot" style={{ width: 26, height: 26, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
            <div style={{ background: '#F3EEFF', borderRadius: '14px 14px 14px 4px', padding: '10px 14px', display: 'flex', gap: 4 }}>
                {[0, 1, 2].map(i => (
                    <span key={i} style={{
                        width: 6, height: 6, borderRadius: '50%', background: '#7C3AED',
                        animation: `dotBounce 1.2s ease-in-out ${i * 0.2}s infinite`,
                        display: 'inline-block',
                    }} />
                ))}
            </div>
        </div>
    );
}

/* ══════════════════════════════════════════════════════════════════ */
export default function FloatingAvatar() {
    const [entered,  setEntered]  = useState(false);
    const [open,     setOpen]     = useState(false);
    const [messages, setMessages] = useState([{ from: 'bot', text: WELCOME }]);
    const [input,    setInput]    = useState('');
    const [loading,  setLoading]  = useState(false);
    const [onLeft,   setOnLeft]   = useState(false);
    const [scrollY,  setScrollY]  = useState(0);
    const bottomRef  = useRef(null);
    const inputRef   = useRef(null);
    const rafRef     = useRef(null);
    const currentY   = useRef(0);
    const rawScroll  = useRef(0);

    useEffect(() => {
        const t = setTimeout(() => setEntered(true), 400);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        const onScroll = () => {
            rawScroll.current = window.scrollY;
            setOnLeft(window.scrollY > window.innerHeight * 0.8);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        const loop = () => {
            currentY.current += (rawScroll.current - currentY.current) * 0.06;
            setScrollY(currentY.current);
            rafRef.current = requestAnimationFrame(loop);
        };
        rafRef.current = requestAnimationFrame(loop);
        return () => {
            window.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(rafRef.current);
        };
    }, []);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, loading]);

    useEffect(() => {
        if (open) setTimeout(() => inputRef.current?.focus(), 300);
    }, [open]);

    function sendMessage() {
        const text = input.trim();
        if (!text || loading) return;
        setMessages(prev => [...prev, { from: 'user', text }]);
        setInput('');
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setMessages(prev => [...prev, { from: 'bot', text: getReply(text) }]);
        }, 900 + Math.random() * 400);
    }

    const vh             = typeof window !== 'undefined' ? window.innerHeight : 700;
    const baseTop        = vh * 0.08;
    const parallaxOffset = scrollY * 0.7;
    const topPos         = Math.min(baseTop + parallaxOffset, vh - 200);
    const chatTop        = Math.min(topPos - 20, vh - 480);
    const side           = onLeft ? { left: 28, right: 'auto' } : { right: 28, left: 'auto' };
    const chatSide       = onLeft ? { left: 190, right: 'auto' } : { right: 190, left: 'auto' };

    return (
        <>
            {/* Avatar */}
            <div style={{
                position: 'fixed', ...side, top: topPos, zIndex: 50,
                opacity: entered ? 1 : 0,
                transform: entered ? 'scale(1)' : 'scale(0.6)',
                transition: 'left 0.7s cubic-bezier(0.34,1.56,0.64,1), right 0.7s cubic-bezier(0.34,1.56,0.64,1), opacity 0.6s ease, transform 0.6s cubic-bezier(0.34,1.56,0.64,1)',
                cursor: 'pointer',
            }} onClick={() => setOpen(o => !o)}>
                <div style={{ position: 'absolute', inset: -12, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)', filter: 'blur(8px)', animation: 'avatarGlow 3s ease-in-out infinite' }} />
                <img src="/chatbot.png" alt="VexVel AI" style={{
                    width: 150, height: 150, borderRadius: '50%', objectFit: 'cover', display: 'block', position: 'relative',
                    animation: open ? 'none' : 'avatarLevitate 3s ease-in-out infinite',
                    filter: 'drop-shadow(0 8px 24px rgba(124,58,237,0.5))',
                    transform: onLeft ? 'scaleX(-1)' : 'scaleX(1)',
                    transition: 'transform 0.5s ease',
                }} />
                {/* Badge de notificación */}
                {!open && (
                    <div style={{ position: 'absolute', top: 8, right: onLeft ? 'auto' : 8, left: onLeft ? 8 : 'auto', width: 14, height: 14, borderRadius: '50%', background: '#16A34A', border: '2px solid white', animation: 'pulse 2s ease-in-out infinite' }} />
                )}
            </div>

            {/* Chat panel */}
            {open && (
                <div style={{
                    position: 'fixed', ...chatSide, top: chatTop,
                    width: 320, zIndex: 49,
                    background: 'white', borderRadius: 16,
                    boxShadow: '0 20px 60px rgba(0,0,0,0.18), 0 0 0 1px rgba(124,58,237,0.12)',
                    overflow: 'hidden', display: 'flex', flexDirection: 'column',
                    animation: 'slideIn 0.25s cubic-bezier(0.34,1.56,0.64,1)',
                    maxHeight: 440,
                }}>
                    {/* Header */}
                    <div style={{ background: 'linear-gradient(135deg, #5B2BB0, #2F69E2)', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <img src="/chatbot.png" alt="bot" style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover' }} />
                            <div>
                                <p style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 13, color: 'white', lineHeight: 1.2 }}>Asistente VexVel</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ADE80', display: 'inline-block' }} />
                                    <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.8)', fontFamily: 'monospace' }}>en línea</span>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setOpen(false)} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: 8, padding: 6, cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'white' }}>
                            <X size={14} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div style={{ flex: 1, overflowY: 'auto', padding: '14px 12px 6px', background: '#FAFAFF' }}>
                        {messages.map((m, i) => <Bubble key={i} msg={m} />)}
                        {loading && <TypingDots />}
                        <div ref={bottomRef} />
                    </div>

                    {/* Input */}
                    <div style={{ padding: '10px 12px', borderTop: '1px solid #E4E4F0', display: 'flex', gap: 8, background: 'white' }}>
                        <input
                            ref={inputRef}
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && sendMessage()}
                            placeholder="Escribe tu pregunta…"
                            style={{ flex: 1, border: '1px solid #E4E4F0', borderRadius: 8, padding: '8px 12px', fontSize: 13, outline: 'none', fontFamily: 'Inter, sans-serif', background: '#FAFAFF', color: '#211C42' }}
                        />
                        <button onClick={sendMessage} style={{ width: 36, height: 36, borderRadius: 8, background: '#7C3AED', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <Send size={15} color="white" />
                        </button>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes avatarLevitate {
                    0%   { transform: translateY(0px);   }
                    50%  { transform: translateY(-12px); }
                    100% { transform: translateY(0px);   }
                }
                @keyframes avatarGlow {
                    0%   { opacity: 0.6; transform: scale(1);    }
                    50%  { opacity: 1;   transform: scale(1.15); }
                    100% { opacity: 0.6; transform: scale(1);    }
                }
                @keyframes dotBounce {
                    0%, 80%, 100% { transform: translateY(0); }
                    40%           { transform: translateY(-6px); }
                }
                @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50%      { transform: scale(1.3); opacity: 0.7; }
                }
                @keyframes slideIn {
                    from { opacity: 0; transform: scale(0.92) translateY(8px); }
                    to   { opacity: 1; transform: scale(1) translateY(0); }
                }
            `}</style>
        </>
    );
}
