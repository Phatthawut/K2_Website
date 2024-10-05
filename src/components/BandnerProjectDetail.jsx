function BandnerSection ({bandnerName}) {
    const heroData = [
        {
            clientName: "Nongmon Market",
            title: "bandner",
            description: "Banding & Visual Design",
            heroBGImage: "images/hero_bg.webp"
        },
    ]
    return (
        <section>
            <div className="relative w-full">
                <div style={{ backgroundImage: `url(${heroData[0]. heroBGImage})`,height: '80vh', backgroundSize: 'cover', backgroundPosition: 'center' }} className="relative flex items-center justify-center">
                    <div className="flex flex-col absolute text-white gap-28 md:gap-48 px-10 md:px-28">
                        <div>
                            <h3 className="font-Domine text-sm md:text-xl">( Branding )</h3>
                            <h3 className="text-3xl md:text-5xl lg:text-7xl font-OpenSans">Nongmon 24+7</h3>
                            <h3 className="text-2xl md:text-5xl lg:text-7xl font-semibold font-Merriweather">Brand Visual Identity</h3>
                        </div>
                        <div>
                        <h3 className="font-OpenSans text-right md:text-2xl uppercase">Nongmon market</h3>
                        <div className="flex justify-between items-center">
                            <h3 className="w-24 md:w-28 uppercase font-OpenSans font-semibold md:text-2xl">/ client</h3>
                            <div className="w-5/6 divider h-0.5 bg-white"></div>
                        </div>
                        <p className="font-OpenSans text-sm md:pt-8 md:text-2xl lg:pl-44 md:leading-7">Brand visual identity for the Power Development Fund of Thailand and partners, under the Integrated Communication project, focusing on the themat
                        ‘Clean Energy for Life’ with creating modern aesthetics, unity and accessibility in mind</p>
                        </div>
                    </div>    
                </div>
            </div>
        </section>
    )
}

export default BandnerSection