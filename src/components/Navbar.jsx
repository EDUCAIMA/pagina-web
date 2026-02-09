import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe, LogIn } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Closes mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        {
            name: "Productos",
            dropdown: [
                { name: "Agentes IA", path: "/productos/agente-ia" },
                { name: "Marketing Automático", path: "/productos/agente-ia" }, // Placeholder for now
                { name: "Pagos Digitales", path: "/productos/agente-ia" }, // Placeholder
                { name: "Telemedicina", path: "/productos/agente-ia" } // Placeholder
            ]
        },
        {
            name: "Soluciones",
            dropdown: [
                { name: "Para Odontólogos", path: "/soluciones/para-odontologos" },
                { name: "Para Estéticas", path: "#" },
                { name: "Para Clínicas", path: "#" },
                { name: "Casos de Éxito", path: "#" }
            ]
        },
        {
            name: "Recursos",
            dropdown: [
                { name: "Blog", path: "#" },
                { name: "Guías Gratuitas", path: "#" },
                { name: "Webinars", path: "#" },
                { name: "Centro de Ayuda", path: "#" }
            ]
        },
        { name: "Precios", path: "/precios" }
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`transition-all duration-500 rounded-2xl ${scrolled ? 'glass px-6 py-2' : 'bg-transparent px-0'}`}>
                    <div className="flex justify-between items-center h-16">

                        {/* Logo */}
                        <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
                            <img src="/vexvel_logo.png" alt="VexVel Logo" className="w-10 h-10 object-contain mr-3 group-hover:scale-110 transition-transform" />
                            <span className="text-2xl font-bold tracking-tight text-surface-900">
                                VexVel
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <div
                                    key={link.name}
                                    className="relative group h-16 flex items-center"
                                    onMouseEnter={() => setActiveDropdown(link.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    {link.dropdown ? (
                                        <button
                                            className="px-4 py-2 rounded-lg flex items-center text-[15px] font-medium text-surface-600 hover:text-brand hover:bg-brand/5 transition-all duration-200 gap-1 outline-none"
                                        >
                                            {link.name}
                                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180 text-brand' : ''}`} />
                                        </button>
                                    ) : (
                                        <Link
                                            to={link.path}
                                            className="px-4 py-2 rounded-lg flex items-center text-[15px] font-medium text-surface-600 hover:text-brand hover:bg-brand/5 transition-all duration-200 gap-1"
                                        >
                                            {link.name}
                                        </Link>
                                    )}

                                    {/* Dropdown Menu */}
                                    {link.dropdown && (
                                        <div className={`absolute top-full left-0 w-64 mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-surface-100 p-2 transform transition-all duration-300 origin-top-left ${activeDropdown === link.name ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}>
                                            <div className="grid gap-1">
                                                {link.dropdown.map((item) => (
                                                    <Link key={item.name} to={item.path} className="px-4 py-3 text-[14px] text-surface-600 hover:bg-brand/5 hover:text-brand rounded-xl transition-all font-medium flex items-center justify-between group">
                                                        {item.name}
                                                        <div className="w-1.5 h-1.5 rounded-full bg-brand opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Desktop Actions */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <button className="p-2 text-surface-500 hover:text-brand hover:bg-brand/5 rounded-xl transition-all flex items-center gap-2 text-[14px] font-medium">
                                <Globe className="w-4 h-4" />
                                <span>ES</span>
                            </button>
                            <a href="https://saas-clinico-bot-production.up.railway.app/login" className="text-surface-600 font-semibold text-[15px] hover:text-brand transition-colors px-4 py-2">
                                Iniciar Sesión
                            </a>
                            <a href="https://saas-clinico-bot-production.up.railway.app/register" className="btn-primary !px-6 !py-2.5 !text-[15px] !rounded-xl">
                                Comenzar Gratis
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-surface-900 p-2 hover:bg-surface-100 rounded-xl transition-all">
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`lg:hidden fixed inset-0 z-40 bg-white transform transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'} top-0 border-t border-surface-100 overflow-y-auto pb-20 pt-24 px-4`}>
                <div className="space-y-6">
                    {navLinks.map((link) => (
                        <div key={link.name} className="space-y-4">
                            <div className="flex justify-between items-center px-4">
                                {link.dropdown ? (
                                    <span className="text-xl font-bold text-surface-900">{link.name}</span>
                                ) : (
                                    <Link to={link.path} className="text-xl font-bold text-surface-900 block w-full">{link.name}</Link>
                                )}
                            </div>

                            {link.dropdown && (
                                <div className="grid gap-2 px-4">
                                    {link.dropdown.map((item) => (
                                        <Link key={item.name} to={item.path} className="block text-surface-600 py-3 px-4 bg-surface-50 rounded-2xl hover:text-brand font-medium">
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    <div className="pt-8 space-y-4 px-4">
                        <div className="flex items-center justify-between px-6 py-4 bg-surface-50 rounded-2xl">
                            <span className="font-medium text-surface-600">Idioma</span>
                            <div className="flex items-center gap-2">
                                <Globe className="w-4 h-4 text-brand" />
                                <span className="font-bold text-surface-900">ES</span>
                            </div>
                        </div>
                        <a href="https://saas-clinico-bot-production.up.railway.app/login" className="block w-full py-4 text-center font-bold text-surface-900 bg-surface-100 rounded-2xl hover:bg-surface-200 transition-all">
                            Iniciar Sesión
                        </a>
                        <a href="https://saas-clinico-bot-production.up.railway.app/register" className="block w-full py-4 text-center font-bold text-white bg-brand rounded-2xl shadow-xl shadow-brand/20 active:scale-95 transition-all">
                            Comenzar Gratis
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
