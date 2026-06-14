import React, { useState, useEffect, useRef } from 'react';
import { Send, Loader2 } from 'lucide-react';

const CTAFinal = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [msg, setMsg] = useState({ text: '', type: '' });
    const [visible, setVisible] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold: 0.2 }
        );
        if (headerRef.current) obs.observe(headerRef.current);
        return () => obs.disconnect();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));
        setIsLoading(true);
        setMsg({ text: '', type: '' });
        try {
            const res = await fetch('https://app.vexvel.com/api/auth/demo-register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    name: data.name,
                    company: data.company,
                    email: data.email,
                    phone: data.phone,
                }),
            });
            const resData = await res.json();
            if (res.ok) {
                setMsg({ text: '¡Listo! Revisa tu correo para obtener acceso.', type: 'success' });
                setTimeout(() => { window.location.href = 'https://app.vexvel.com/login'; }, 3000);
            } else {
                setMsg({ text: resData.detail || 'Error al crear la cuenta. Inténtalo de nuevo.', type: 'error' });
            }
        } catch {
            setMsg({ text: 'Error de conexión. Inténtalo de nuevo.', type: 'error' });
        } finally {
            setIsLoading(false);
        }
    };

    const inputStyle = {
        width: '100%',
        background: '#FFFFFF',
        border: '1px solid #E4E4F0',
        borderRadius: 10,
        padding: '12px 16px',
        color: '#211C42',
        fontSize: 14,
        outline: 'none',
        fontFamily: '"Space Grotesk", sans-serif',
        transition: 'border-color 0.2s, box-shadow 0.2s',
    };

    const labelStyle = {
        display: 'block',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: '#6B6585',
        marginBottom: 6,
    };

    return (
        <section id="contact" className="py-16 relative overflow-hidden" style={{ background: '#F9F8F9' }}>
            {/* Blobs decorativos suaves */}
            <div style={{ position: 'absolute', top: '-80px', left: '-60px', width: 320, height: 320, borderRadius: '50%', background: 'rgba(124,58,237,0.06)', filter: 'blur(60px)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-60px', right: '-40px', width: 260, height: 260, borderRadius: '50%', background: 'rgba(38,97,214,0.06)', filter: 'blur(50px)', pointerEvents: 'none' }} />

            <div className="relative max-w-6xl mx-auto px-6 lg:px-8">

                {/* Encabezado centrado */}
                <div className="text-center mb-10" ref={headerRef}>
                    <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4" style={{
                        color: '#1A1035',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0) scale(1)' : 'translateY(36px) scale(0.97)',
                        transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.4,0,0.2,1)',
                    }}>
                        Tu agente IA, activo en menos de{' '}
                        <span style={{ color: '#7C3AED' }}>24 horas.</span>
                    </h2>
                    <p className="text-lg max-w-xl mx-auto" style={{
                        color: '#000000',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.6s ease 0.15s, transform 0.6s cubic-bezier(0.4,0,0.2,1) 0.15s',
                    }}>
                        Sin tarjeta de crédito. Sin contratos. Empieza gratis y escala cuando quieras.
                    </p>
                </div>

                {/* Form */}
                <div className="max-w-xl mx-auto">
                    <div style={{
                        background: '#FFFFFF',
                        border: '1px solid #E4E4F0',
                        borderRadius: 20,
                        padding: 32,
                        boxShadow: '0 4px 24px rgba(67,30,125,0.08)',
                    }}>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label style={labelStyle}>Nombre contacto</label>
                                    <input type="text" name="name" required disabled={isLoading}
                                        placeholder="Tu nombre" style={inputStyle}
                                        onFocus={e => { e.target.style.borderColor = '#7C3AED'; e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.12)'; }}
                                        onBlur={e => { e.target.style.borderColor = '#E4E4F0'; e.target.style.boxShadow = 'none'; }} />
                                </div>
                                <div>
                                    <label style={labelStyle}>Nombre empresa</label>
                                    <input type="text" name="company" required disabled={isLoading}
                                        placeholder="Tu empresa" style={inputStyle}
                                        onFocus={e => { e.target.style.borderColor = '#7C3AED'; e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.12)'; }}
                                        onBlur={e => { e.target.style.borderColor = '#E4E4F0'; e.target.style.boxShadow = 'none'; }} />
                                </div>
                            </div>
                            <div>
                                <label style={labelStyle}>Correo electrónico</label>
                                <input type="email" name="email" required disabled={isLoading}
                                    placeholder="tu@empresa.com" style={inputStyle}
                                    onFocus={e => { e.target.style.borderColor = '#7C3AED'; e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.12)'; }}
                                    onBlur={e => { e.target.style.borderColor = '#E4E4F0'; e.target.style.boxShadow = 'none'; }} />
                            </div>
                            <div>
                                <label style={labelStyle}>WhatsApp / Teléfono</label>
                                <input type="text" name="phone" required disabled={isLoading}
                                    placeholder="+57 300 000 0000" style={inputStyle}
                                    onFocus={e => { e.target.style.borderColor = '#7C3AED'; e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.12)'; }}
                                    onBlur={e => { e.target.style.borderColor = '#E4E4F0'; e.target.style.boxShadow = 'none'; }} />
                            </div>

                            <button type="submit" disabled={isLoading} style={{
                                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                                background: 'linear-gradient(135deg, #7c3aed, #2661D6)',
                                border: 'none', borderRadius: 10, padding: '14px 24px',
                                color: 'white', fontFamily: '"Space Grotesk", sans-serif',
                                fontWeight: 700, fontSize: 15, cursor: isLoading ? 'not-allowed' : 'pointer',
                                opacity: isLoading ? 0.6 : 1,
                                boxShadow: '0 4px 20px rgba(124,58,237,0.3)',
                                transition: 'opacity 0.2s, transform 0.2s',
                                marginTop: 4,
                            }}
                                onMouseEnter={e => { if (!isLoading) e.currentTarget.style.transform = 'translateY(-2px)'; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
                            >
                                {isLoading
                                    ? <><Loader2 className="w-4 h-4 animate-spin" /> Creando tu cuenta...</>
                                    : <><Send className="w-4 h-4" /> Probar Demo Gratis</>
                                }
                            </button>

                            {msg.text && (
                                <p style={{
                                    fontSize: 13, textAlign: 'center', padding: '8px 12px', borderRadius: 8,
                                    background: msg.type === 'success' ? '#F0FDF4' : '#FEF2F2',
                                    color: msg.type === 'success' ? '#16A34A' : '#DC2626',
                                    border: `1px solid ${msg.type === 'success' ? '#BBF7D0' : '#FECACA'}`,
                                }}>{msg.text}</p>
                            )}
                            {!msg.text && (
                                <p style={{ fontSize: 12, textAlign: 'center', color: '#9B98AE', paddingTop: 4 }}>
                                    Te enviamos las credenciales de acceso por correo.
                                </p>
                            )}
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CTAFinal;
