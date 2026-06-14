import React from 'react';

const clients = [
    { name: 'Dental Nova',       industry: 'Odontología' },
    { name: 'FitZone',           industry: 'Gimnasio' },
    { name: 'Casa & Raíz',       industry: 'Inmobiliaria' },
    { name: 'Clínica Bienestar', industry: 'Salud' },
    { name: 'Moda Urbana',       industry: 'E-commerce' },
    { name: 'Academia Pro',      industry: 'Educación' },
    { name: 'Bella Estética',    industry: 'Belleza' },
    { name: 'Restaurante Alma',  industry: 'Gastronomía' },
    { name: 'LegalPro',          industry: 'Jurídico' },
    { name: 'AgenciaX',          industry: 'Marketing' },
    { name: 'MediCare Plus',     industry: 'Salud' },
    { name: 'InmueblesCo',       industry: 'Inmobiliaria' },
];

const track = [...clients, ...clients];

export default function ClientsStrip() {
    return (
        <section className="pt-20 pb-10 bg-white">

            {/* Línea superior centrada con degradado en puntas */}
            <div className="flex justify-center mb-2">
                <div className="w-2/3 h-[5px] rounded-full" style={{
                    background: 'linear-gradient(to right, transparent, #6025A0 30%, #2661D6 70%, transparent)'
                }} />
            </div>

            <div className="relative overflow-hidden">
                {/* Fade lateral izquierdo */}
                <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                {/* Fade lateral derecho */}
                <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <div className="flex gap-12 items-center marquee-track">
                    {track.map((client, i) => (
                        <div key={i} className="flex-shrink-0 flex flex-col items-center gap-0.5">
                            <span className="text-base font-display font-bold text-gray-400 whitespace-nowrap tracking-tight">
                                {client.name}
                            </span>
                            <span className="text-[10px] font-medium text-gray-300 uppercase tracking-wider">
                                {client.industry}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Línea inferior centrada con degradado en puntas */}
            <div className="flex justify-center mt-2">
                <div className="w-2/3 h-[5px] rounded-full" style={{
                    background: 'linear-gradient(to right, transparent, #6025A0 30%, #2661D6 70%, transparent)'
                }} />
            </div>

            <style>{`
                .marquee-track {
                    animation: marquee 55s linear infinite;
                    width: max-content;
                }
                .marquee-track:hover {
                    animation-play-state: paused;
                }
                @keyframes marquee {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
}
