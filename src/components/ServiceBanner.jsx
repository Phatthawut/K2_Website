function BandnerSection ({bannerName}) {

    const [firstPart, ...rest] = bannerName.split(' ')
    const secondPart = rest.join(' ')
    
    const serviceData =
        {
            title: "our",
            title2: "Work", }
    return (
        <div className="relative w-full">
        <div className="relative flex flex-col items-center justify-evenly bg-blue-700 h-[100vh] text-white font-bold">
            <div className="md:w-4/5 mt-32">
                <div className="divider mx-auto bg-white h-0.5"></div>
                <h2 className="font-Domine text-3xl md:text-4xl text-center mx-auto w-1/2 md:w-[10em] lg:hidden">( K2 Venture Creative Comunication Agency )</h2>
                <div className="lg:flex justify-between font-Domine text-lg hidden">
                    <div>( K2 Venture</div>
                    <div>Creative Comunication Agency)</div>
                </div>
            </div>
            <div className="text-6xl md:text-7xl lg:text-8xl w-full pl-12 md:pl-32 lg:pl-48">
                <h3 className="font-Arapey italic font-medium">{serviceData.title}</h3>
                <h3 className=" -mt-6 md:-mt-7 lg:-mt-9 font-normal uppercase">{serviceData.title2}</h3>
            </div>
            
            <div className="w-full text-6xl md:text-8xl lg:text-9xl pl-12 md:pl-32 lg:pl-48 uppercase">
                <h3 className="font-Anek font-light">{firstPart}</h3>
                <h3 className="font-semibold -mt-4 md:-mt-6 lg:-mt-7">{secondPart}</h3>
            </div>
            
        </div>
        </div>
    )
}

export default BandnerSection