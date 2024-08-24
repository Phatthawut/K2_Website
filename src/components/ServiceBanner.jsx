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
            <h2 className="font-Domine text-3xl text-center w-1/2">( K2 Venture Creative Comunication Agency )</h2>
            <div className="text-6xl w-full pl-8 leading-3">
                <h3 className="text-7xl font-Arapey italic font-medium">{serviceData.title}</h3>
                <h3 className="font-normal uppercase">{serviceData.title2}</h3>
            </div>
            
            <div className="w-full text-5xl pl-8 uppercase leading-10">
                <h3 className="font-Arapey font-light">{serviceData.description}</h3>
                <h3 className="font-normal">{serviceData.description2}</h3>
            </div>
            
        </div>
        </div>
    )
}

export default BandnerSection