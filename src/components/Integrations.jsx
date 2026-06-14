import React from 'react';

const integrations = [
    { name: 'WhatsApp Business',  src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png' },
    { name: 'Gmail',              src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png' },
    { name: 'Google Calendar',    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/512px-Google_Calendar_icon_%282020%29.svg.png' },
    { name: 'Instagram',          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/512px-Instagram_icon.png' },
    { name: 'Facebook Messenger', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/512px-Facebook_Messenger_logo_2020.svg.png' },
    { name: 'Google Drive',       src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/512px-Google_Drive_icon_%282020%29.svg.png' },
];

const Integrations = () => (
    <section id="integrations" className="border-t border-vx-border py-24 lg:py-32" style={{ background: '#F9F8F9' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16">
                <p className="section-label mb-4">Integraciones</p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-vx-text tracking-tight max-w-xl">
                    Conecta con las herramientas que ya usas.
                </h2>
                <p className="text-vx-muted text-lg mt-4 max-w-lg leading-relaxed">
                    VexVel se integra nativamente con tu stack actual. Sin cambiar de herramientas.
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {integrations.map((int) => (
                    <div key={int.name} className="card flex flex-col items-center gap-3 py-8 px-4 hover:shadow-card-hover transition-shadow group">
                        <img src={int.src} alt={int.name} className="w-8 h-8 object-contain" />
                        <span className="text-xs text-vx-dim group-hover:text-vx-muted transition-colors text-center leading-tight">
                            {int.name}
                        </span>
                    </div>
                ))}
            </div>

            <p className="text-center text-vx-dim text-sm mt-8 font-mono">
                + próximamente Zapier · Slack · HubSpot
            </p>
        </div>
    </section>
);

export default Integrations;
