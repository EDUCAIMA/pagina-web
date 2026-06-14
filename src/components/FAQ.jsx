import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const items = [
    {
        q: '¿Necesito saber programar para usar VexVel?',
        a: 'No. La configuración es completamente visual. En la primera sesión de onboarding te ayudamos a conectar tus canales y configurar el agente. Generalmente toma menos de 2 horas.',
    },
    {
        q: '¿Cuánto tiempo tarda la configuración inicial?',
        a: 'Entre 1 y 3 días hábiles. Nuestro equipo se encarga de la integración con WhatsApp Business API y Google Calendar.',
    },
    {
        q: '¿El agente suena igual que un humano?',
        a: 'Está diseñado para sonar natural y empático. Puedes personalizar el tono, el nombre y los mensajes. La mayoría de usuarios no nota diferencia hasta que el agente escala a un humano.',
    },
    {
        q: '¿Qué pasa si el agente no puede responder algo?',
        a: 'El agente escala automáticamente al miembro de tu equipo que configures. La conversación se transfiere con contexto completo.',
    },
    {
        q: '¿Puedo cancelar cuando quiera?',
        a: 'Sí. No hay contratos de permanencia ni penalizaciones. Cancela en cualquier momento desde tu panel de control.',
    },
    {
        q: '¿Con qué canales se integra VexVel?',
        a: 'WhatsApp Business API (oficial), Instagram Direct, Gmail, Google Calendar, Facebook Messenger, y próximamente Slack y Zapier.',
    },
];

/* Círculo decorativo con hover */
function Orb({ size, top, left, right, bottom, color, hoverColor, blur = 60, delay = 0 }) {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                position: 'absolute',
                width: size, height: size,
                top, left, right, bottom,
                borderRadius: '50%',
                background: hovered ? hoverColor : color,
                filter: `blur(${blur}px)`,
                transition: 'background 0.6s ease, transform 0.6s ease',
                transform: hovered ? 'scale(1.25)' : 'scale(1)',
                pointerEvents: 'auto',
                zIndex: 0,
                animationDelay: `${delay}s`,
            }}
        />
    );
}

function FAQItem({ item, index, open, onToggle }) {
    const isOpen = open === index;
    return (
        <div style={{
            borderRadius: 16,
            background: isOpen ? 'rgba(167,139,250,0.1)' : 'rgba(255,255,255,0.04)',
            border: isOpen ? '1px solid rgba(167,139,250,0.35)' : '1px solid rgba(255,255,255,0.07)',
            transition: 'all 0.25s ease',
            overflow: 'hidden',
            position: 'relative',
            zIndex: 1,
        }}>
            <button
                onClick={() => onToggle(index)}
                style={{
                    width: '100%', display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', gap: 16,
                    padding: '18px 22px', textAlign: 'left',
                    background: 'none', border: 'none', cursor: 'pointer',
                }}
            >
                <span style={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontWeight: 600, fontSize: 16,
                    color: isOpen ? '#E9D5FF' : 'rgba(255,255,255,0.82)',
                    lineHeight: 1.4, transition: 'color 0.2s',
                }}>
                    {item.q}
                </span>
                <div style={{
                    width: 26, height: 26, borderRadius: '50%', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: isOpen ? 'linear-gradient(135deg,#7c3aed,#2661D6)' : 'rgba(255,255,255,0.07)',
                    transition: 'background 0.25s',
                }}>
                    {isOpen
                        ? <Minus className="w-3 h-3" style={{ color: '#fff' }} />
                        : <Plus  className="w-3 h-3" style={{ color: 'rgba(255,255,255,0.45)' }} />
                    }
                </div>
            </button>

            <div style={{
                maxHeight: isOpen ? 200 : 0,
                overflow: 'hidden',
                transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)',
            }}>
                <p style={{
                    padding: '0 22px 18px',
                    fontSize: 15, lineHeight: 1.75,
                    color: 'rgba(255,255,255,0.55)',
                }}>
                    {item.a}
                </p>
            </div>
        </div>
    );
}

const FAQ = () => {
    const [open, setOpen] = useState(null);
    const toggle = (i) => setOpen(open === i ? null : i);

    return (
        <section className="py-16 lg:py-20 relative overflow-hidden" style={{
            background: 'linear-gradient(135deg, #1A0E46 0%, #112060 55%, #0C1A4A 100%)',
        }}>
            {/* Círculos decorativos — hover cambia de color */}
            <Orb size={280} top="-80px"  left="-80px"  color="rgba(124,58,237,0.10)"  hoverColor="rgba(124,58,237,0.28)"  blur={55} />
            <Orb size={200} top="30px"   right="-60px" color="rgba(38,97,214,0.10)"   hoverColor="rgba(38,97,214,0.28)"   blur={50} delay={0.3} />
            <Orb size={160} bottom="0px" left="30%"    color="rgba(167,139,250,0.08)" hoverColor="rgba(167,139,250,0.22)" blur={45} delay={0.6} />
            <Orb size={120} bottom="40px" right="10%"  color="rgba(96,165,250,0.07)"  hoverColor="rgba(96,165,250,0.22)"  blur={40} delay={0.2} />

            <div className="relative max-w-3xl mx-auto px-6 lg:px-8" style={{ zIndex: 1 }}>

                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="font-display font-bold tracking-tight"
                        style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', color: 'white', lineHeight: 1.2 }}>
                        Preguntas{' '}
                        <span style={{
                            background: 'linear-gradient(90deg, #A78BFA, #60A5FA)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            frecuentes.
                        </span>
                    </h2>
                    <p className="mt-3 text-base" style={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '0.01em' }}>
                        Todo lo que necesitas saber antes de automatizar tu negocio.
                    </p>

                    {/* Línea decorativa */}
                    <div style={{
                        margin: '20px auto 0',
                        width: 160, height: 3, borderRadius: 4,
                        background: 'linear-gradient(90deg, #7c3aed, #2661D6)',
                    }} />
                </div>

                {/* Acordeón en 2 columnas en desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {/* Col izquierda */}
                    <div className="flex flex-col gap-3">
                        {items.slice(0, 3).map((item, i) => (
                            <FAQItem key={i} item={item} index={i} open={open} onToggle={toggle} />
                        ))}
                    </div>
                    {/* Col derecha */}
                    <div className="flex flex-col gap-3">
                        {items.slice(3).map((item, i) => (
                            <FAQItem key={i + 3} item={item} index={i + 3} open={open} onToggle={toggle} />
                        ))}
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="mt-10 text-center">
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)' }}>
                        ¿Tienes otra pregunta?{' '}
                        <a href="/empresa/contacto"
                            style={{ color: '#A78BFA', fontWeight: 600, textDecoration: 'none' }}
                            onMouseEnter={e => e.target.style.color = '#C4B5FD'}
                            onMouseLeave={e => e.target.style.color = '#A78BFA'}>
                            Escríbenos →
                        </a>
                    </p>
                </div>

            </div>
        </section>
    );
};

export default FAQ;
