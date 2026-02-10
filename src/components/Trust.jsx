const Trust = () => {
    return (
        <section className="pt-16 pb-8 bg-surface-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-xs font-black text-surface-400 uppercase tracking-[0.3em] mb-12">
                    Potenciado por tecnología Líder en la Industria
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700 hover:opacity-100">
                    {/* WhatsApp API */}
                    <div className="flex items-center gap-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png" alt="WhatsApp Business API" className="h-8 w-auto hover:scale-110 transition-transform" />
                        <span className="font-bold text-surface-900 text-lg hidden sm:block">WhatsApp API</span>
                    </div>

                    {/* OpenAI */}
                    <div className="flex items-center gap-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" alt="OpenAI" className="h-6 w-auto hover:scale-110 transition-transform" />
                    </div>

                    {/* Google Cloud */}
                    <div className="flex items-center gap-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" alt="Google Cloud" className="h-6 w-auto hover:scale-110 transition-transform" />
                        <span className="font-bold text-surface-900 text-lg hidden sm:block">Google Cloud</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trust;
