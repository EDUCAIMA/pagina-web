import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Bot, ArrowRight, Sparkles } from 'lucide-react';

const industries = [
    {
        keywords: ['odontolog', 'dental', 'dentista', 'ortodonci', 'clinica dental'],
        label: 'Clínica Dental / Odontología',
        path: '/soluciones/para-odontologos',
        emoji: '🦷',
        desc: 'Agenda citas automáticamente, recuerda tratamientos y recupera pacientes inactivos con un agente IA activo las 24 horas.',
    },
    {
        keywords: ['restauran', 'comida', 'cocina', 'bar ', 'cafeteria', 'cafetería', 'gastro', 'hotel', 'hospedaje'],
        label: 'Restaurante / Hostelería',
        path: '/productos/agente-ia',
        emoji: '🍽️',
        desc: 'Gestiona reservas, responde sobre el menú y aumenta la ocupación de tus mesas sin levantar el teléfono.',
    },
    {
        keywords: ['inmobil', 'bienes raices', 'bienes raíces', 'propied', 'apartamento', 'arriendo', 'alquiler', 'finca raiz'],
        label: 'Inmobiliaria',
        path: '/productos/agente-ia',
        emoji: '🏠',
        desc: 'Califica prospectos en segundos, agenda visitas y da seguimiento a cada lead sin esfuerzo manual.',
    },
    {
        keywords: ['gym', 'gimnasio', 'fitness', 'crossfit', 'yoga', 'pilates', 'entrenamiento'],
        label: 'Gimnasio / Centro Fitness',
        path: '/productos/agente-ia',
        emoji: '💪',
        desc: 'Inscribe nuevos miembros, recuerda renovaciones y responde horarios sin intervención humana.',
    },
    {
        keywords: ['salon', 'salón', 'belleza', 'estetica', 'estética', 'peluquer', 'spa', 'manicure', 'barber'],
        label: 'Salón de Belleza / Estética',
        path: '/productos/agente-ia',
        emoji: '💅',
        desc: 'Agenda citas automáticamente, envía recordatorios y reactiva clientes que no han vuelto.',
    },
    {
        keywords: ['clinica', 'clínica', 'medic', 'salud', 'doctor', 'veterinar', 'psicolog', 'nutricion'],
        label: 'Clínica / Centro de Salud',
        path: '/productos/agente-ia',
        emoji: '🏥',
        desc: 'Gestiona citas médicas, responde preguntas frecuentes y mejora la experiencia de tus pacientes.',
    },
    {
        keywords: ['agencia', 'marketing', 'publicidad', 'diseño', 'digital', 'creatividad'],
        label: 'Agencia de Marketing',
        path: '/productos/agente-ia',
        emoji: '📊',
        desc: 'Califica leads entrantes y automatiza el seguimiento de prospectos para que tu equipo cierre más.',
    },
    {
        keywords: ['tienda', 'ecommerc', 'venta', 'ropa', 'moda', 'producto', 'fashion'],
        label: 'Tienda / E-commerce',
        path: '/productos/agente-ia',
        emoji: '🛍️',
        desc: 'Atiende consultas, rastrea pedidos y recupera carritos abandonados en automático.',
    },
    {
        keywords: ['educac', 'academia', 'colegio', 'escuela', 'instituto', 'curso', 'capacitac'],
        label: 'Centro Educativo / Academia',
        path: '/productos/agente-ia',
        emoji: '🎓',
        desc: 'Inscribe estudiantes, responde sobre cursos y gestiona matriculaciones sin esfuerzo.',
    },
    {
        keywords: ['juridic', 'abogado', 'legal', 'notaria', 'notaría', 'bufete'],
        label: 'Despacho Jurídico',
        path: '/productos/agente-ia',
        emoji: '⚖️',
        desc: 'Agenda consultas, califica casos y da seguimiento a clientes potenciales las 24 horas.',
    },
    {
        keywords: ['seguro', 'aseguradora', 'poliza', 'póliza', 'financier', 'banco', 'credito'],
        label: 'Seguros / Finanzas',
        path: '/productos/agente-ia',
        emoji: '📋',
        desc: 'Califica prospectos, agenda citas de asesoría y mantiene a tus clientes informados en todo momento.',
    },
];

const fallback = {
    label: 'tu negocio',
    path: '/productos/agente-ia',
    emoji: '🚀',
    desc: 'Sin importar el sector, nuestro agente IA se adapta a tu negocio para atender clientes y cerrar más ventas en automático.',
};

function matchIndustry(text) {
    const lower = text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    for (const industry of industries) {
        for (const kw of industry.keywords) {
            const kwNorm = kw.normalize('NFD').replace(/[̀-ͯ]/g, '');
            if (lower.includes(kwNorm)) return industry;
        }
    }
    return { ...fallback, label: text };
}

const BOT_INTRO = '¡Hola! Cuéntame qué tipo de empresa tienes y te mostraré cómo nuestro Agente IA puede ayudarte.';

const NICHES = ['Odontológico', 'Inmobiliario', 'Restaurantes', 'Fitness', 'Educativo', 'Estética', 'Jurídico', 'E-commerce'];

function RotatingWord() {
    const [displayed, setDisplayed] = useState('');
    const [wordIdx,   setWordIdx]   = useState(0);
    const [erasing,   setErasing]   = useState(false);

    useEffect(() => {
        const word = NICHES[wordIdx];
        if (!erasing && displayed.length < word.length) {
            const t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 75);
            return () => clearTimeout(t);
        }
        if (!erasing && displayed.length === word.length) {
            const t = setTimeout(() => setErasing(true), 1600);
            return () => clearTimeout(t);
        }
        if (erasing && displayed.length > 0) {
            const t = setTimeout(() => setDisplayed(d => d.slice(0, -1)), 45);
            return () => clearTimeout(t);
        }
        if (erasing && displayed.length === 0) {
            setErasing(false);
            setWordIdx(i => (i + 1) % NICHES.length);
        }
    }, [displayed, erasing, wordIdx]);

    return (
        <span className="inline-flex items-center gap-1">
            <span style={{
                background: 'linear-gradient(to right, #6025A0, #2661D6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
            }}>{displayed}</span>
            <span className="rotating-cursor" style={{ color: '#6025A0', fontWeight: 300 }}>|</span>
        </span>
    );
}

export default function AgentFinder() {
    const [messages, setMessages]   = useState([{ from: 'bot', text: '' }]);
    const [typing, setTyping]       = useState(true);
    const [input, setInput]         = useState('');
    const [loading, setLoading]     = useState(false);
    const [done, setDone]           = useState(false);
    const bottomRef                 = useRef(null);
    const inputRef                  = useRef(null);
    const subtitleRef               = useRef(null);
    const footer1Ref                = useRef(null);
    const footer2Ref                = useRef(null);
    const [subtitleVisible,  setSubtitleVisible]  = useState(false);
    const [footer1Visible,   setFooter1Visible]   = useState(false);
    const [footer2Visible,   setFooter2Visible]   = useState(false);
    const navigate                  = useNavigate();
    const sectionRef                = useRef(null);
    const [sectionH, setSectionH]   = useState(0);

    // Sincroniza el placeholder con la altura real de la sección (incluso si cambia)
    useEffect(() => {
        if (!sectionRef.current) return;
        const ro = new ResizeObserver(entries => {
            setSectionH(entries[0].contentRect.height);
        });
        ro.observe(sectionRef.current);
        return () => ro.disconnect();
    }, []);

    // Efecto salida hacia arriba desde el primer pixel de scroll
    useEffect(() => {
        const onScroll = () => {
            if (!sectionRef.current) return;
            sectionRef.current.style.transform = `translateY(-${window.scrollY}px)`;
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Scroll-reveal: entra desde la derecha, sale hacia la izquierda
    useEffect(() => {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.target === subtitleRef.current) setSubtitleVisible(e.isIntersecting);
                if (e.target === footer1Ref.current)  setFooter1Visible(e.isIntersecting);
                if (e.target === footer2Ref.current)  setFooter2Visible(e.isIntersecting);
            });
        }, { threshold: 0.5 });
        [subtitleRef, footer1Ref, footer2Ref].forEach(r => r.current && obs.observe(r.current));
        return () => obs.disconnect();
    }, []);

    // Efecto typewriter al montar
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            i++;
            setMessages([{ from: 'bot', text: BOT_INTRO.slice(0, i), typing: i < BOT_INTRO.length }]);
            if (i >= BOT_INTRO.length) {
                clearInterval(interval);
                setTyping(false);
            }
        }, 28);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (typing) return;
        if (messages.length <= 1) return; // Solo scroll tras interacción del usuario
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, loading, typing]);

    function handleSend() {
        const trimmed = input.trim();
        if (!trimmed || loading || done) return;

        const match = matchIndustry(trimmed);

        setMessages(prev => [...prev, { from: 'user', text: trimmed }]);
        setInput('');
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setMessages(prev => [...prev, { from: 'bot', type: 'result', match, query: trimmed }]);
            setDone(true);
        }, 1600);
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') handleSend();
    }

    function handleReset() {
        setMessages([{ from: 'bot', text: '' }]);
        setInput('');
        setDone(false);
        setLoading(false);
        setTyping(true);
        let i = 0;
        const interval = setInterval(() => {
            i++;
            setMessages([{ from: 'bot', text: BOT_INTRO.slice(0, i), typing: i < BOT_INTRO.length }]);
            if (i >= BOT_INTRO.length) {
                clearInterval(interval);
                setTyping(false);
            }
        }, 28);
        setTimeout(() => inputRef.current?.focus(), BOT_INTRO.length * 28 + 100);
    }

    return (
      <>
        {/* Placeholder que reserva el espacio en el flujo del documento */}
        <div style={{ height: sectionH }} />

        <section ref={sectionRef} className="pt-10 pb-2 relative overflow-hidden" style={{ position: 'fixed', top: 64, left: 0, right: 0, zIndex: 5, willChange: 'transform', background: '#F9F8F9' }}>
            {/* Glow sutil de fondo */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#49218A]/6 rounded-full blur-[100px]" />
            </div>

            <div className="relative max-w-4xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-gray-900 leading-tight title-slide-in">
                        ¿Para qué tipo de empresa<br />
                        necesitas tu{' '}
                        <span style={{
                            background: 'linear-gradient(to right, #6025A0, #2661D6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>Agente de IA?</span>
                    </h2>
                    <div className="mt-4 text-3xl lg:text-4xl xl:text-5xl font-display font-bold h-14 flex items-center justify-center title-slide-in" style={{ animationDelay: '0.1s' }}>
                        <RotatingWord />
                    </div>
                    <p ref={subtitleRef} className="mt-8 mb-8 text-gray-900 text-base title-slide-in" style={{
                        animationDelay: '0.15s',
                        transition: 'opacity 0.5s ease, transform 0.5s ease',
                        opacity: subtitleVisible ? 1 : 0,
                        transform: subtitleVisible ? 'translateX(0)' : 'translateX(-60px)',
                    }}>Escribe el tipo de negocio y te mostramos la solución exacta.</p>
                </div>
                <style>{`
                    @keyframes slideFromTop {
                        from { opacity: 0; transform: translateY(-40px); }
                        to   { opacity: 1; transform: translateY(0); }
                    }
                    .title-slide-in {
                        opacity: 0;
                        animation: slideFromTop 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                    }
                    @keyframes blinkCursor {
                        0%, 100% { opacity: 1; }
                        50%      { opacity: 0; }
                    }
                    .rotating-cursor { animation: blinkCursor 0.7s step-end infinite; }
                `}</style>

                {/* Chat card */}
                <div className="rounded-2xl overflow-hidden"
                    style={{
                        background: '#ede6ff',
                        border: '2px solid rgba(124,58,237,0.45)',
                        boxShadow: '0 0 60px rgba(124,58,237,0.35), 0 0 120px rgba(124,58,237,0.18), 0 8px 40px rgba(0,0,0,0.08)',
                        transition: 'box-shadow 0.15s ease, border-color 0.15s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#7c3aed'; e.currentTarget.style.boxShadow = '0 0 80px rgba(124,58,237,0.6), 0 0 160px rgba(124,58,237,0.35), 0 16px 60px rgba(0,0,0,0.18)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.45)'; e.currentTarget.style.boxShadow = '0 0 60px rgba(124,58,237,0.35), 0 0 120px rgba(124,58,237,0.18), 0 8px 40px rgba(0,0,0,0.08)'; }}
                >
                    {/* Messages */}
                    <div className="px-6 py-6 space-y-4 min-h-[220px] max-h-[340px] overflow-y-auto" style={{ background: '#ede6ff' }}>
                        {messages.map((msg, i) => (
                            <Message key={i} msg={msg} navigate={navigate} onReset={handleReset} />
                        ))}

                        {loading && (
                            <div className="flex items-end gap-2.5">
                                <BotAvatar />
                                <div className="bg-white border border-purple-100 rounded-2xl rounded-bl-sm px-4 py-3">
                                    <TypingDots />
                                </div>
                            </div>
                        )}
                        <div ref={bottomRef} />
                    </div>

                    {/* Input */}
                    <div className="px-4 py-4 flex gap-3 items-center" style={{ borderTop: '1px solid rgba(124,58,237,0.25)', background: '#e4dbff' }}>
                        {/* Avatar usuario */}
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                            <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                            </svg>
                        </div>
                        {/* Campo de texto */}
                        <div className="flex-1 flex items-center gap-2 bg-white rounded-full px-4 py-2.5 border border-purple-200 shadow-sm">
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder={done ? 'Escribe otro tipo de empresa…' : 'Escribe tu tipo de empresa…'}
                                disabled={loading}
                                className="flex-1 bg-transparent text-gray-800 placeholder-gray-400 text-sm outline-none"
                            />
                        </div>
                        {/* Botón enviar circular */}
                        <button
                            onClick={done ? handleReset : handleSend}
                            disabled={loading}
                            className="flex-shrink-0 w-10 h-10 rounded-full bg-[#49218A] hover:bg-[#5a28a8] flex items-center justify-center transition-colors shadow-md"
                        >
                            <Send className="w-4 h-4 text-white" />
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-3 mt-4 mb-10">
                    <p ref={footer1Ref} className="text-base text-gray-900" style={{
                        transition: 'opacity 0.5s ease, transform 0.5s ease',
                        opacity: footer1Visible ? 1 : 0,
                        transform: footer1Visible ? 'translateX(0)' : 'translateX(-60px)',
                    }}>
                        Más de <span style={{ color: '#6025A0', fontWeight: 700 }}>20 industrias</span> compatibles
                    </p>
                    <span style={{
                        display: 'inline-block', width: '3px', height: '18px',
                        background: '#6025A0', borderRadius: '2px',
                        opacity: footer1Visible && footer2Visible ? 1 : 0,
                        transition: 'opacity 0.5s ease 1s',
                    }} />
                    <p ref={footer2Ref} className="text-base text-gray-900" style={{
                        transition: 'opacity 0.5s ease 1s, transform 0.5s ease 1s',
                        opacity: footer2Visible ? 1 : 0,
                        transform: footer2Visible ? 'translateX(0)' : 'translateX(-60px)',
                    }}>
                        Configuración en menos de <span style={{ color: '#6025A0', fontWeight: 700 }}>24 h</span>
                    </p>
                </div>
            </div>
        </section>
      </>
    );
}

function Message({ msg, navigate, onReset }) {
    if (msg.from === 'user') {
        return (
            <div className="flex justify-end">
                <div className="bg-[#49218A] text-white text-sm px-4 py-2.5 rounded-2xl rounded-br-sm max-w-[75%]">
                    {msg.text}
                </div>
            </div>
        );
    }

    if (msg.type === 'result') {
        const { match } = msg;
        return (
            <div className="flex items-start gap-2.5">
                <BotAvatar />
                <div className="bg-white border border-purple-100 rounded-2xl rounded-bl-sm px-4 py-4 max-w-[85%] space-y-3 shadow-sm">
                    <p className="text-sm text-gray-700">
                        ¡Perfecto! Aquí tienes la solución para{' '}
                        <span className="text-gray-900 font-semibold">{match.label}</span>:
                    </p>
                    <div className="bg-[#49218A]/5 border border-[#49218A]/15 rounded-xl px-4 py-3 flex gap-3 items-start">
                        <span className="text-2xl leading-none mt-0.5">{match.emoji}</span>
                        <p className="text-sm text-gray-600 leading-relaxed">{match.desc}</p>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        <button
                            onClick={() => navigate(match.path)}
                            className="inline-flex items-center gap-1.5 bg-[#49218A] hover:bg-[#5a28a8] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                        >
                            Ver solución completa
                            <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <button
                            onClick={onReset}
                            className="text-sm text-gray-400 hover:text-gray-700 px-3 py-2 transition-colors"
                        >
                            Buscar otra industria
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-end gap-2.5">
            <BotAvatar />
            <div className="bg-white border border-purple-100 rounded-2xl rounded-bl-sm px-4 py-2.5 max-w-[85%]">
                <p className="text-sm text-gray-700">
                    {msg.text}
                    {msg.typing && (
                        <span className="inline-block w-[2px] h-[14px] bg-[#49218A] ml-0.5 align-middle cursor-blink" />
                    )}
                </p>
            </div>
        </div>
    );
}

function BotAvatar() {
    return (
        <>
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#49218A] flex items-center justify-center bot-levitate"
                style={{ boxShadow: '0 4px 12px rgba(73,33,138,0.4)' }}>
                <Bot className="w-4 h-4 text-white" />
            </div>
            <style>{`
                @keyframes levitate {
                    0%, 100% { transform: translateY(0px); box-shadow: 0 4px 12px rgba(73,33,138,0.4); }
                    50%       { transform: translateY(-6px); box-shadow: 0 10px 20px rgba(73,33,138,0.25); }
                }
                .bot-levitate { animation: levitate 2.4s ease-in-out infinite; }
            `}</style>
        </>
    );
}

function TypingDots() {
    return (
        <div className="flex gap-1 items-center py-1">
            {[0, 1, 2].map(i => (
                <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-gray-400"
                    style={{ animation: `bounce 1.2s ${i * 0.2}s infinite` }}
                />
            ))}
            <style>{`
                @keyframes bounce {
                    0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
                    30% { transform: translateY(-5px); opacity: 1; }
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                .cursor-blink { animation: blink 0.7s step-end infinite; }
            `}</style>
        </div>
    );
}
