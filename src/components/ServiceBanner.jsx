function BandnerSection ({bandnerName}) {
    const serviceData =
        {
            clientName: "Nongmon Market",
            title: "our",
            title2: "Work",
            description: "Branding &",
            description2: "Visual Design"
        }
    return (
        <div className="relative w-full">
            
        <div className="relative flex flex-col items-center justify-evenly bg-blue-700 h-[100vh] text-white font-bold">
            <h2 className="font-Domine text-3xl md:text-5xl lg:text-
            xl text-center w-1/2 lg:mt-36">( K2 Venture Creative Comunication Agency )</h2>
            <div className=" w-full pl-12 md:pl-32">
                <h3 className="text-7xl md:text-8xl font-Arapey italic font-medium">{serviceData.title}</h3>
                <h3 className="text-5xl md:text-7xl -mt-6 md:-mt-8 font-normal uppercase">{serviceData.title2}</h3>
            </div>
            
            <div className="w-full text-5xl md:text-8xl pl-12 md:pl-32 uppercase">
                <h3 className="font-Arapey font-light">{serviceData.description}</h3>
                <h3 className="font-light -mt-4 lg:-mt-9">{serviceData.description2}</h3>
            </div>
            
        </div>
        </div>
    )
}

export default BandnerSection