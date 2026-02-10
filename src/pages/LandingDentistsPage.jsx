import React, { useState } from 'react';
import {
    CheckCircle2,
    ArrowRight,
    MessageSquare,
    Calendar,
    Bell,
    Users,
    BarChart3,
    Shield,
    Play,
    X
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingDentistsPage = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <div className="font-sans antialiased text-surface-900 bg-white selection:bg-brand/10 selection:text-brand">

            {/* --- HEADER MINIMALISTA --- */}
            <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-surface-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 group">
                        <img
                            src="/vexvel_logo.png?v=4"
                            alt="VexVel Logo"
                            className="w-10 h-10 object-contain group-hover:scale-105 transition-transform"
                        />
                        <span className="text-xl font-bold tracking-tight text-surface-900">
                            VexVel
                        </span>
                    </Link>

                    <div className="flex items-center gap-4">
                        <a
                            href="#precios"
                            className="hidden sm:block px-5 py-2.5 text-sm font-medium text-surface-600 border border-surface-200 rounded-full hover:border-brand hover:text-brand transition-all"
                        >
                            Precios
                        </a>
                        <a
                            href="https://saas-clinico-bot-production.up.railway.app/register"
                            className="btn-primary !px-6 !py-2.5 !rounded-full shadow-lg shadow-brand/20"
                        >
                            Comenzar Gratis
                        </a>
                    </div>
                </div>
            </header>

            {/* --- HERO SECTION --- */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                        {/* Left Content */}
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand text-sm font-semibold mb-6">
                                <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
                                Especial para Odontólogos
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-surface-900 mb-6 leading-[1.1]">
                                Automatiza tu agenda mientras <span className="text-brand">atiendes.</span>
                            </h1>

                            <p className="text-xl text-surface-600 mb-8 leading-relaxed max-w-lg">
                                El asistente de IA que confirma citas, reactiva pacientes y responde dudas por WhatsApp, todo sin intervención humana.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#consultoria"
                                    className="btn-primary !px-8 !py-4 !text-lg !rounded-full shadow-xl shadow-brand/25 flex items-center justify-center gap-2 group"
                                >
                                    Agendar Demo
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>

                                <button
                                    onClick={() => setIsVideoOpen(true)}
                                    className="px-8 py-4 text-lg font-medium text-surface-700 bg-surface-50 hover:bg-surface-100 rounded-full transition-all flex items-center justify-center gap-3 group border border-surface-200"
                                >
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                        <Play className="w-4 h-4 text-surface-900 fill-current ml-0.5" />
                                    </div>
                                    Ver cómo funciona
                                </button>
                            </div>

                            <div className="mt-10 flex items-center gap-4 text-sm text-surface-500">
                                <div className="flex -space-x-2">
                                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Doctor" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Doctor" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                                    <img src="https://randomuser.me/api/portraits/men/86.jpg" alt="Doctor" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                                    <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Doctor" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                                </div>
                                <p>Confianza de +500 clínicas en Latam</p>
                            </div>
                        </div>

                        {/* Right Image / Dashboard Visual */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100/50 to-purple-100/50 rounded-[2.5rem] blur-3xl opacity-50 -z-10"></div>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-surface-200/60 bg-white">
                                <div className="absolute top-0 w-full h-8 bg-surface-50 border-b border-surface-100 flex items-center px-4 gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                                </div>
                                {/* Dashboard Video Placeholder */}
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-auto object-cover pt-8"
                                >
                                    <source src="/dashboard-video.mp4" type="video/mp4" />
                                    <img src="/dashboard.png" alt="Dashboard VexVel" className="w-full h-auto object-cover pt-8" />
                                </video>

                                {/* Floating Elements mimicking reference */}

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- IMPACT STATS (DARK NAVY) --- */}
            <section className="py-20 bg-[#0B1120] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
                        <div className="text-center px-4">
                            <div className="text-4xl lg:text-5xl font-bold mb-2 tracking-tight">98%</div>
                            <div className="text-sm font-medium text-blue-200/80 uppercase tracking-wider">Tasa de Asistencia</div>
                        </div>
                        <div className="text-center px-4">
                            <div className="text-4xl lg:text-5xl font-bold mb-2 tracking-tight">3.5X</div>
                            <div className="text-sm font-medium text-blue-200/80 uppercase tracking-wider">Retorno de Inversión</div>
                        </div>
                        <div className="text-center px-4">
                            <div className="text-4xl lg:text-5xl font-bold mb-2 tracking-tight">24/7</div>
                            <div className="text-sm font-medium text-blue-200/80 uppercase tracking-wider">Disponibilidad</div>
                        </div>
                        <div className="text-center px-4">
                            <div className="text-4xl lg:text-5xl font-bold mb-2 tracking-tight">+15h</div>
                            <div className="text-sm font-medium text-blue-200/80 uppercase tracking-wider">Ahorro Semanal</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FEATURES GRID --- */}
            <section className="py-24 bg-surface-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-surface-900 mb-4">
                            Todo lo que necesitas para crecer
                        </h2>
                        <p className="text-lg text-surface-600">
                            Herramientas diseñadas para eliminar el trabajo manual administrativo de tu clínica.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-surface-200/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 text-brand">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-surface-900 mb-3">Respuestas Automáticas</h3>
                            <p className="text-surface-600 leading-relaxed">
                                Tu IA responde preguntas frecuentes sobre precios, tratamientos y horarios al instante, 24/7.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-surface-200/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 text-indigo-600">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-surface-900 mb-3">Agendamiento Real</h3>
                            <p className="text-surface-600 leading-relaxed">
                                Sincronización directa con Google Calendar. Citas reales agendadas en tu calendario, no solo 'leads'.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-surface-200/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center mb-6 text-purple-600">
                                <Bell className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-surface-900 mb-3">Recordatorios de Citas</h3>
                            <p className="text-surface-600 leading-relaxed">
                                Envío automático de recordatorios por WhatsApp para reducir inasistencias drásticamente.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-surface-200/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center mb-6 text-pink-600">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-surface-900 mb-3">Reactivación de Pacientes</h3>
                            <p className="text-surface-600 leading-relaxed">
                                Contacta pacientes antiguos para sus controles periódicos automáticamente, llenando huecos en la agenda.
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-surface-200/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center mb-6 text-green-600">
                                <BarChart3 className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-surface-900 mb-3">Reportes de Gestión</h3>
                            <p className="text-surface-600 leading-relaxed">
                                Entiende qué tratamientos son más solicitados y optimiza tu oferta con datos reales.
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-surface-200/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 text-orange-600">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-surface-900 mb-3">Seguridad de Datos</h3>
                            <p className="text-surface-600 leading-relaxed">
                                Tus datos y los de tus pacientes están encriptados y seguros. Cumplimos todas las normas de privacidad.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PRICING SECTION --- */}
            <section id="precios" className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-surface-900 mb-4">Planes Simples y Transparentes</h2>
                        <p className="text-lg text-surface-600">Sin contratos forzosos. Cancela cuando quieras.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                        {/* PLAN INICIAL */}
                        <div className="p-8 rounded-3xl border border-surface-200 bg-surface-50 hover:border-brand/30 transition-all group">
                            <h3 className="text-xl font-bold text-surface-900 mb-2">Inicial</h3>
                            <div className="flex items-baseline mb-6">
                                <span className="text-4xl font-extrabold text-brand">$24</span>
                                <span className="text-surface-500 ml-2">/mes</span>
                            </div>
                            <p className="text-sm text-surface-600 mb-8 min-h-[40px]">Para consultorios que inician su automatización.</p>
                            <a href="#" className="block w-full py-3 text-center rounded-xl border border-surface-900 text-surface-900 font-bold hover:bg-surface-900 hover:text-white transition-all">Empezar Prueba</a>

                            <ul className="mt-8 space-y-4">
                                <li className="flex gap-3 text-sm text-surface-600">
                                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" /> 1 Agente IA
                                </li>
                                <li className="flex gap-3 text-sm text-surface-600">
                                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" /> 500 conversaciones/mes
                                </li>
                                <li className="flex gap-3 text-sm text-surface-600">
                                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" /> Agenda Básica
                                </li>
                                <li className="flex gap-3 text-sm text-surface-600">
                                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" /> Soporte por Email
                                </li>
                            </ul>
                        </div>

                        {/* PLAN CLINICA PRO */}
                        <div className="p-8 rounded-3xl border-2 border-brand bg-[#0B1120] text-white relative transform md:-translate-y-4 shadow-2xl">
                            <div className="absolute top-0 right-0 bg-brand text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl uppercase tracking-wider">Más Popular</div>
                            <h3 className="text-xl font-bold mb-2">Clínica Pro</h3>
                            <div className="flex items-baseline mb-6">
                                <span className="text-5xl font-extrabold">$59</span>
                                <span className="text-blue-200 ml-2">/mes</span>
                            </div>
                            <p className="text-sm text-blue-100 mb-8 min-h-[40px]">Potencia total para clínicas en crecimiento.</p>
                            <a href="#" className="block w-full py-3 text-center rounded-xl bg-brand text-white font-bold hover:bg-blue-600 transition-all shadow-lg shadow-brand/25">Comenzar Ahora</a>

                            <ul className="mt-8 space-y-4">
                                <li className="flex gap-3 text-sm text-blue-50">
                                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" /> 3 Agentes IA
                                </li>
                                <li className="flex gap-3 text-sm text-blue-50">
                                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" /> Conversaciones Ilimitadas
                                </li>
                                <li className="flex gap-3 text-sm text-blue-50">
                                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" /> Reactivación de Pacientes
                                </li>
                                <li className="flex gap-3 text-sm text-blue-50">
                                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" /> Soporte Prioritario WhatsApp
                                </li>
                                <li className="flex gap-3 text-sm text-blue-50">
                                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" /> Dashboard Avanzado
                                </li>
                            </ul>
                        </div>

                        {/* PLAN RED DE CLINICAS */}
                        <div className="p-8 rounded-3xl border border-surface-200 bg-surface-50 hover:border-brand/30 transition-all group">
                            <h3 className="text-xl font-bold text-surface-900 mb-2">Red de Clínicas</h3>
                            <div className="flex items-baseline mb-6">
                                <span className="text-4xl font-extrabold text-surface-900">$119</span>
                                <span className="text-surface-500 ml-2">/mes</span>
                            </div>
                            <p className="text-sm text-surface-600 mb-8 min-h-[40px]">Para múltiples sedes y alto volumen (hasta 5 sedes).</p>
                            <a href="#" className="block w-full py-3 text-center rounded-xl border border-surface-900 text-surface-900 font-bold hover:bg-surface-900 hover:text-white transition-all">Contactar Ventas</a>

                            <ul className="mt-8 space-y-4">
                                <li className="flex gap-3 text-sm text-surface-600">
                                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" /> Multi-sede (hasta 5)
                                </li>
                                <li className="flex gap-3 text-sm text-surface-600">
                                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" /> API Access
                                </li>
                                <li className="flex gap-3 text-sm text-surface-600">
                                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" /> Manager Dedicado
                                </li>
                                <li className="flex gap-3 text-sm text-surface-600">
                                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" /> Personalización Total
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- CONTACT SECTION (ELEGANT REDESIGN) --- */}
            <section id="consultoria" className="py-24 bg-surface-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-surface-100 relative overflow-hidden">
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10 text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-4 tracking-tight">
                                Agenda una Consultoría Personalizada
                            </h2>
                            <p className="text-lg text-surface-600">
                                ¿Tienes dudas sobre cómo implementar IA en tu clínica? Déjanos tus datos.
                            </p>
                        </div>

                        <form className="relative z-10 space-y-6 max-w-2xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-surface-700 ml-1">Nombre Completo</label>
                                    <input
                                        type="text"
                                        placeholder="Dr. Juan Pérez"
                                        className="w-full px-6 py-4 rounded-xl bg-surface-50 border border-surface-200 text-surface-900 placeholder:text-surface-400 focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-surface-700 ml-1">Correo Electrónico</label>
                                    <input
                                        type="email"
                                        placeholder="doctor@clinica.com"
                                        className="w-full px-6 py-4 rounded-xl bg-surface-50 border border-surface-200 text-surface-900 placeholder:text-surface-400 focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all outline-none"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-surface-700 ml-1">Teléfono Móvil</label>
                                <input
                                    type="tel"
                                    placeholder="+57 300 123 4567"
                                    className="w-full px-6 py-4 rounded-xl bg-surface-50 border border-surface-200 text-surface-900 placeholder:text-surface-400 focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all outline-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-surface-700 ml-1">Mensaje o Dudas</label>
                                <textarea
                                    rows="4"
                                    placeholder="Hola, me gustaría saber si se integra con mi software actual..."
                                    className="w-full px-6 py-4 rounded-xl bg-surface-50 border border-surface-200 text-surface-900 placeholder:text-surface-400 focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all outline-none resize-none"
                                ></textarea>
                            </div>

                            <button className="w-full py-4 bg-surface-900 text-white font-bold text-lg rounded-xl shadow-xl hover:bg-black transition-all transform hover:-translate-y-0.5">
                                Enviar Consulta
                            </button>

                            <p className="text-xs text-center text-surface-400 mt-4">
                                Tus datos están seguros. Te responderemos en menos de 24 horas.
                            </p>
                        </form>
                    </div>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="bg-white border-t border-surface-100 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <img src="/vexvel_logo.png?v=4" alt="VexVel" className="w-8 h-8 object-contain opacity-80" />
                        <span className="text-lg font-bold text-surface-900">VexVel</span>
                    </div>
                    <div className="flex gap-8 text-sm text-surface-500 font-medium">
                        <a href="#" className="hover:text-brand transition-colors">Política de Privacidad</a>
                        <a href="#" className="hover:text-brand transition-colors">Términos de Uso</a>
                    </div>
                    <div className="text-sm text-surface-400">
                        © 2024 VexVel AI. Todos los derechos reservados.
                    </div>
                </div>
            </footer>

            {/* --- VIDEO MODAL --- */}
            {isVideoOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl">
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-surface-900 text-white rounded-full transition-all"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/kBmnx9AQIkw?autoplay=1"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>
            )}

        </div>
    );
};

export default LandingDentistsPage;
