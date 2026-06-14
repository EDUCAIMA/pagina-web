import React, { useState, useEffect } from 'react';
import {
    Menu, X, ChevronDown,
    // Soluciones dropdown
    TrendingUp, Headphones, Briefcase,
    // Recursos
    BookOpen, FileCode, HelpCircle, Star,
    // Empresa
    Users, Mail, UserPlus,
    // Industrias
    Stethoscope, Smile, Wrench, UtensilsCrossed, Dumbbell,
    Building2, Scissors, GraduationCap, Scale, ShoppingCart,
    // Soluciones mega menú
    MessageCircle, ShoppingBag, Target, CalendarCheck, LifeBuoy,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const ACCENT = '#49218A';

const navLinks = [
    // ── Inicio (sin dropdown) ──────────────────────────────────────────
    { name: 'Inicio', path: '/' },

    // ── Producto (mega menú) ───────────────────────────────────────────
    {
        name: 'Producto',
        megaMenu: true,
        industries: [
            { name: 'Clínicas médicas',      path: '/productos/agente-ia',          icon: Stethoscope },
            { name: 'Odontología',           path: '/soluciones/para-odontologos',  icon: Smile },
            { name: 'Talleres mecánicos',    path: '/productos/agente-ia',          icon: Wrench },
            { name: 'Restaurantes',          path: '/productos/agente-ia',          icon: UtensilsCrossed },
            { name: 'Gimnasios',             path: '/productos/agente-ia',          icon: Dumbbell },
            { name: 'Inmobiliarias',         path: '/productos/agente-ia',          icon: Building2 },
            { name: 'Salones de belleza',    path: '/productos/agente-ia',          icon: Scissors },
            { name: 'Educación / Academias', path: '/productos/agente-ia',          icon: GraduationCap },
            { name: 'Despachos jurídicos',   path: '/productos/agente-ia',          icon: Scale },
            { name: 'E-commerce',            path: '/productos/agente-ia',          icon: ShoppingCart },
        ],
    },

    // ── Soluciones ─────────────────────────────────────────────────────
    {
        name: 'Soluciones',
        cols: 1,
        dropdown: [
            {
                name: 'Atención al cliente',
                desc: 'Responde consultas y resuelve dudas 24/7',
                path: '/soluciones/para-soporte',
                icon: MessageCircle,
            },
            {
                name: 'Venta de productos',
                desc: 'Cierra más ventas con menos esfuerzo',
                path: '/soluciones/para-ventas',
                icon: ShoppingBag,
            },
            {
                name: 'Seguimiento a leads',
                desc: 'Nutre y convierte prospectos en automático',
                path: '/soluciones/para-ventas',
                icon: Target,
            },
            {
                name: 'Agendamiento de citas',
                desc: 'Agenda y recuerda citas sin intervención humana',
                path: '/productos/agente-ia',
                icon: CalendarCheck,
            },
            {
                name: 'Soporte post-venta',
                desc: 'Fideliza clientes con seguimiento automático',
                path: '/soluciones/para-soporte',
                icon: LifeBuoy,
            },
        ],
    },

    // ── Precios (sin dropdown) ─────────────────────────────────────────
    { name: 'Precios', path: '/precios' },

    // ── Recursos ───────────────────────────────────────────────────────
    {
        name: 'Recursos',
        cols: 2,
        alignRight: true,
        dropdown: [
            {
                name: 'Blog',
                desc: 'Artículos sobre IA, ventas y CRM',
                path: '/recursos/blog',
                icon: BookOpen,
            },
            {
                name: 'Documentación',
                desc: 'Guías técnicas y referencias de API',
                path: '/recursos/documentacion',
                icon: FileCode,
            },
            {
                name: 'Centro de ayuda',
                desc: 'Tutoriales y preguntas frecuentes',
                path: '/recursos/ayuda',
                icon: HelpCircle,
            },
            {
                name: 'Casos de éxito',
                desc: 'Cómo otros negocios crecen con VexVel',
                path: '/recursos/casos',
                icon: Star,
            },
        ],
    },

    // ── Empresa ────────────────────────────────────────────────────────
    {
        name: 'Empresa',
        cols: 1,
        alignRight: true,
        dropdown: [
            {
                name: 'Sobre nosotros',
                desc: 'Nuestra misión y el equipo detrás de VexVel',
                path: '/empresa/nosotros',
                icon: Users,
            },
            {
                name: 'Contacto',
                desc: 'Habla con nuestro equipo comercial',
                path: '/empresa/contacto',
                icon: Mail,
            },
            {
                name: 'Trabaja con nosotros',
                desc: 'Posiciones abiertas en VexVel',
                path: '/empresa/careers',
                icon: UserPlus,
            },
        ],
    },
];

const Navbar = () => {
    const [isOpen, setIsOpen]                 = useState(false);
    const [scrolled, setScrolled]             = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileOpen, setMobileOpen]         = useState(null);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setActiveDropdown(null);
        setMobileOpen(null);
    }, [location]);

    return (
        <nav className={`fixed w-full z-50 transition-shadow duration-300 bg-white border-b border-gray-100 ${scrolled ? 'shadow-sm' : ''}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}
                        className="flex items-center gap-2.5 flex-shrink-0">
                        <img src="/vexvel_logo.png?v=4" alt="VexVel" className="w-11 h-11 object-contain" />
                        <span className="font-display text-2xl font-bold text-vx-text tracking-tight">VexVel</span>
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden lg:flex items-center gap-0.5">
                        {navLinks.map((link) => {
                            const isActive = link.path
                                ? location.pathname === link.path
                                : link.dropdown?.some(item => {
                                    const cleanPath = item.path.split('#')[0];
                                    return cleanPath.length > 1 && location.pathname === cleanPath;
                                });
                            const activeClass = isActive ? 'text-[#49218A] font-semibold' : 'text-gray-900';

                            return (
                            <div key={link.name} className="relative"
                                onMouseEnter={() => (link.dropdown || link.megaMenu) && setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}>

                                {(link.dropdown || link.megaMenu) ? (
                                    <button className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium hover:text-[#49218A] transition-colors rounded-lg hover:bg-purple-50/60 ${activeClass}`}>
                                        {link.name}
                                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === link.name || isActive ? 'text-[#49218A]' : ''} ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                                    </button>
                                ) : (
                                    <Link to={link.path}
                                        className={`block px-3.5 py-2 text-sm font-medium hover:text-[#49218A] hover:bg-purple-50/60 rounded-lg transition-colors ${activeClass}`}>
                                        {link.name}
                                    </Link>
                                )}

                                {/* ── Mega menú — Producto (2 columnas) ───────────────── */}
                                {link.megaMenu && (
                                    <div className={`absolute top-full mt-3 rounded-2xl overflow-hidden transition-all duration-200 origin-top-left ${
                                        activeDropdown === link.name
                                            ? 'opacity-100 translate-y-0 scale-100 visible'
                                            : 'opacity-0 -translate-y-3 scale-95 invisible'
                                    }`} style={{
                                        minWidth: '560px',
                                        left: 0,
                                        background: '#fff',
                                        border: '1px solid #e5e7eb',
                                        boxShadow: '0 12px 48px rgba(0,0,0,0.13)',
                                    }}>
                                        <div className="p-5">
                                            <div className="flex gap-0">
                                                {/* Columna izquierda */}
                                                <div className="flex-1 flex flex-col">
                                                    {link.industries.slice(0, 5).map(item => (
                                                        <Link key={item.name} to={item.path}
                                                            className="group flex items-center gap-3.5 px-3 py-3 rounded-xl hover:bg-purple-50 transition-colors">
                                                            <item.icon className="w-5 h-5 flex-shrink-0 text-[#6025A0] group-hover:text-[#49218A] transition-colors" />
                                                            <span className="text-base text-gray-900 group-hover:text-[#49218A] transition-colors font-medium">{item.name}</span>
                                                        </Link>
                                                    ))}
                                                </div>
                                                {/* Divisor vertical morado */}
                                                <div className="w-px mx-2 rounded-full" style={{ background: 'linear-gradient(to bottom, transparent, #7c3aed 20%, #7c3aed 80%, transparent)' }} />
                                                {/* Columna derecha */}
                                                <div className="flex-1 flex flex-col">
                                                    {link.industries.slice(5).map(item => (
                                                        <Link key={item.name} to={item.path}
                                                            className="group flex items-center gap-3.5 px-3 py-3 rounded-xl hover:bg-purple-50 transition-colors">
                                                            <item.icon className="w-5 h-5 flex-shrink-0 text-[#6025A0] group-hover:text-[#49218A] transition-colors" />
                                                            <span className="text-base text-gray-900 group-hover:text-[#49218A] transition-colors font-medium">{item.name}</span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )}

                                {/* ── Dropdown estándar ────────────────────────────────── */}
                                {link.dropdown && (
                                    <div className={`absolute top-full mt-3 rounded-2xl overflow-hidden transition-all duration-200 ${
                                        link.alignRight ? 'origin-top-right' : 'origin-top-left'
                                    } ${
                                        activeDropdown === link.name
                                            ? 'opacity-100 translate-y-0 scale-100 visible'
                                            : 'opacity-0 -translate-y-3 scale-95 invisible'
                                    }`} style={{
                                        minWidth: '520px',
                                        ...(link.alignRight ? { right: 0 } : { left: 0 }),
                                        background: '#fff',
                                        border: '1px solid #e5e7eb',
                                        boxShadow: '0 12px 48px rgba(0,0,0,0.13)',
                                    }}>

                                        {/* 2 columnas con divisor morado — mismo estilo que Producto */}
                                        <div className="flex gap-0 p-5">
                                            {/* Col izquierda */}
                                            <div className="flex-1 flex flex-col">
                                                {link.dropdown.slice(0, Math.ceil(link.dropdown.length / 2)).map((item) => (
                                                    <Link key={item.name} to={item.path}
                                                        className="group flex items-center gap-3.5 px-3 py-3 rounded-xl hover:bg-purple-50 transition-colors">
                                                        <item.icon className="w-5 h-5 flex-shrink-0 text-[#6025A0] group-hover:text-[#49218A] transition-colors" />
                                                        <div className="min-w-0">
                                                            <p className="text-base font-medium text-gray-900 group-hover:text-[#49218A] transition-colors leading-tight">{item.name}</p>
                                                            {item.desc && <p className="text-xs text-gray-400 mt-0.5 leading-snug">{item.desc}</p>}
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                            {/* Divisor vertical morado */}
                                            <div className="w-px mx-2 rounded-full" style={{ background: 'linear-gradient(to bottom, transparent, #7c3aed 20%, #7c3aed 80%, transparent)' }} />
                                            {/* Col derecha */}
                                            <div className="flex-1 flex flex-col">
                                                {link.dropdown.slice(Math.ceil(link.dropdown.length / 2)).map((item) => (
                                                    <Link key={item.name} to={item.path}
                                                        className="group flex items-center gap-3.5 px-3 py-3 rounded-xl hover:bg-purple-50 transition-colors">
                                                        <item.icon className="w-5 h-5 flex-shrink-0 text-[#6025A0] group-hover:text-[#49218A] transition-colors" />
                                                        <div className="min-w-0">
                                                            <p className="text-base font-medium text-gray-900 group-hover:text-[#49218A] transition-colors leading-tight">{item.name}</p>
                                                            {item.desc && <p className="text-xs text-gray-400 mt-0.5 leading-snug">{item.desc}</p>}
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                )}
                            </div>
                            );
                        })}
                    </div>

                    {/* Desktop CTAs */}
                    <div className="hidden lg:flex items-center gap-3">
                        <div className="relative group">
                            <a href="https://app.vexvel.com"
                                className="text-sm font-medium text-gray-900 hover:text-[#49218A] transition-all duration-200 px-3 py-2 block rounded-lg border border-transparent hover:border-[#49218A]">
                                Iniciar sesión
                            </a>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0 pointer-events-none z-50">
                                <div className="relative bg-[#49218A] text-white text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
                                    Accede a tu cuenta
                                    <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-[#49218A]" />
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <a href="https://saas-clinico-bot-production.up.railway.app/register"
                                className="btn-primary transition-all duration-200 ring-0 hover:ring-2 hover:ring-[#49218A] hover:ring-offset-2">
                                Probar gratis
                            </a>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0 pointer-events-none z-50">
                                <div className="relative bg-[#49218A] text-white text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
                                    Sin tarjeta de crédito
                                    <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-[#49218A]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile toggle */}
                    <button onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-gray-600 hover:text-[#49218A] transition-colors rounded-lg hover:bg-purple-50">
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="px-5 py-6 border-t border-gray-100 divide-y divide-gray-100">
                    {navLinks.map((link) => (
                        <div key={link.name} className="py-3">
                            {link.dropdown ? (
                                <>
                                    <button
                                        onClick={() => setMobileOpen(mobileOpen === link.name ? null : link.name)}
                                        className="w-full flex items-center justify-between py-1">
                                        <span className="text-base font-semibold text-gray-900 font-display">{link.name}</span>
                                        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${mobileOpen === link.name ? 'rotate-180' : ''}`} />
                                    </button>
                                    {mobileOpen === link.name && (
                                        <div className="mt-3 space-y-1 pl-1">
                                            {link.dropdown.map((item) => (
                                                <Link key={item.name} to={item.path}
                                                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-purple-50 transition-colors group">
                                                    <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-[#49218A] flex items-center justify-center flex-shrink-0 transition-colors">
                                                        <item.icon className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-semibold text-gray-800 group-hover:text-[#49218A] transition-colors leading-tight">{item.name}</p>
                                                        <p className="text-xs text-gray-400 leading-tight mt-0.5">{item.desc}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : link.megaMenu ? (
                                <>
                                    <button
                                        onClick={() => setMobileOpen(mobileOpen === link.name ? null : link.name)}
                                        className="w-full flex items-center justify-between py-1">
                                        <span className="text-base font-semibold text-gray-900 font-display">{link.name}</span>
                                        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${mobileOpen === link.name ? 'rotate-180' : ''}`} />
                                    </button>
                                    {mobileOpen === link.name && (
                                        <div className="mt-3 space-y-1 pl-1">
                                            {link.industries.map((item) => (
                                                <Link key={item.name} to={item.path}
                                                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-purple-50 transition-colors group">
                                                    <div className="w-7 h-7 rounded-lg bg-purple-100 group-hover:bg-[#49218A] flex items-center justify-center flex-shrink-0 transition-colors">
                                                        <item.icon className="w-3.5 h-3.5 text-[#6025A0] group-hover:text-white transition-colors" />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-700 group-hover:text-[#49218A] transition-colors">{item.name}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link to={link.path}
                                    className="block py-1 text-base font-semibold text-gray-900 font-display hover:text-[#49218A] transition-colors">
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}

                    <div className="pt-5 space-y-3">
                        <a href="https://app.vexvel.com"
                            className="block w-full py-3 text-center text-sm font-semibold text-gray-700 border border-gray-200 rounded-lg hover:border-[#49218A] hover:text-[#49218A] transition-colors">
                            Iniciar sesión
                        </a>
                        <a href="https://saas-clinico-bot-production.up.railway.app/register"
                            className="btn-primary w-full justify-center">
                            Probar gratis
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
