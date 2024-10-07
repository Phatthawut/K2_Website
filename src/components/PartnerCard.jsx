function PartnerCard () {
    const partnerLists = [
        
        {
            partnerImage: "images/partner_pdf.webp",
            partnername: "Power Development Fund Thailand",
            partnerDetail: "Government Agency"
        },
        {
            partnerImage: "images/partner_seansuk.webp",
            partnername: "Saensuk City (Bangsaen)",
            partnerDetail: "Municipality"
        },
        {
            partnerImage: "images/partner_bay.webp",
            partnername: "Bay Computing",
            partnerDetail: "Cyber Scurity"
        },
        {
            partnerImage: "images/partner_phibun.webp",
            partnername: "Phibun City (Ubol Ratchathani)",
            partnerDetail: "Municipality"
        },
        {
            partnerImage: "images/partner_dga.webp",
            partnername: "DGA",
            partnerDetail: "Digital Government Agency"
        },
    ]

    return (
        <div className="w-full">
            <section>
                <h2 className="text-3xl font-bold text-center py-6">Our Partner</h2>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {partnerLists.map((partner, index) =>
                    <div key={index} className="flex justify-center w-full">
                        <img className="w-1/2" src= {partner.partnerImage} />
                        <div className="flex flex-col gap-8 w-1/2 py-14 md:py-8 px-1 bg-slate-100 font-OpenSans text-lg">
                            <h3 className="w-1/2 text-wrap">{partner.partnername}</h3>
                            <h3 className="w-1/2 font-semibold">{partner.partnerDetail}</h3>
                        </div>
                    </div>
                    )}
                    </div>
            </section>
        </div>
    )
}

export default PartnerCard

{{/* 
    {
            partnerImage: "images/partner_bmw.webp",
            partnername: "BMW",
            partnerDetail: "Corparate id maxime quos porro placeat quasi"
        },
*/}}