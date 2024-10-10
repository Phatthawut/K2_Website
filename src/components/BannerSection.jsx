function BannerSection ({bandnerName}) {
    const heroData = [
        {
            clientName: "Nongmon Market",
            title: "bandner",
            description: "Banding & Visual Design",
            heroBGImage: "https://placehold.co/1440x600"
        },
    ]
    return (
        <div className="relative w-full">
        <div style={{ backgroundImage: `url(${heroData[0]. heroBGImage})`,height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }} className="relative flex items-center justify-center">
            <div className="flex flex-col text-white text-center z-20">
            <h3 className="text-2xl font-bold">{heroData[0].title}
			</h3>
        </div>
        </div>
        </div>
    )
}

export default BannerSection