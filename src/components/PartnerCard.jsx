function PartnerCard () {
    const partnerLists = [
        
        {
            partnerImage: "images/partner_pdf.webp",
            partnername: "ERC",
            partnerDetail: ""
        },
        {
            partnerImage: "images/partner_seansuk.webp",
            partnername: "Saensuk City",
            partnerDetail: ""
        },
        {
            partnerImage: "images/partner_bay.webp",
            partnername: "Bay Computing",
            partnerDetail: ""
        },
        {
            partnerImage: "images/partner_phibun.webp",
            partnername: "Phibun City",
            partnerDetail: ""
        },
        {
            partnerImage: "images/partner_dga.webp",
            partnername: "DGA",
            partnerDetail: ""
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
                        <div className="flex flex-col justify-center items-center w-1/2 bg-slate-100">
                            <h3 className="text-lg md:text-xl pb-4">{partner.partnername}</h3>
                            <h3 className="text-lg font-medium px-4">{partner.partnerDetail}</h3>
                        </div>
                    </div>
                    )}
                    </div>
            </section>
        </div>
    )
}

export default PartnerCard