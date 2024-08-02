function HeroSection ({title, heroBGImage}) {
    
    return (
        <div className="relative w-full">
            {/* Yellow border */}
            <div className="absolute left-0 z-10 w-full">
                <div className="w-1 h-screen bg-yellow-400 "></div>
            </div>
        <div style={{ backgroundImage: `url(${heroBGImage})`,height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }} className="relative flex items-center justify-center">
            <div className="flex flex-col text-white text-center z-20">
            <h3 className="text-2xl font-bold">{title}
			</h3>
        </div>
        </div>
        </div>
    )
}

export default HeroSection