function PartnerCard () {
    const partnerLists = [
        {
            partnerImage: "https://placehold.co/370x440",
            partnername: "BMW",
            partnerDetail: "Corparate id maxime quos porro placeat quasi"
        },
        {
            partnerImage: "https://placehold.co/370x440",
            partnername: "ERC",
            partnerDetail: "Asperiores nesciunt beatae possimus corporis deserunt."
        },
        {
            partnerImage: "https://placehold.co/370x440",
            partnername: "Saensuk City",
            partnerDetail: "Corparate id maxime quos porro placeat quasi"
        },
        {
            partnerImage: "https://placehold.co/370x440",
            partnername: "Bay Computing",
            partnerDetail: "Asperiores nesciunt beatae possimus corporis deserunt."
        },
        {
            partnerImage: "https://placehold.co/370x440",
            partnername: "Phibun City",
            partnerDetail: "Corparate id maxime quos porro placeat quasi."
        },
        {
            partnerImage: "https://placehold.co/185x220",
            partnername: "DGA",
            partnerDetail: "Asperiores nesciunt beatae possimus corporis deserunt."
        },
    ]

    return (
        <div className="w-full">
            <section>
                <h2 className="text-3xl font-bold text-center py-6">Our Partner</h2>
                    {partnerLists.map((partner, index) =>
                    <div key={index} className="flex justify-center w-full">
                        <img className="w-1/2" src= {partner.partnerImage} />
                        <div className="flex flex-col justify-center items-center w-1/2 bg-slate-100">
                            <h3 className="text-lg pb-4">{partner.partnername}</h3>
                            <h3 className="text-lg font-medium px-4">{partner.partnerDetail}</h3>
                        </div>
                    </div>
                    )}
            </section>
        </div>
    )
}

export default PartnerCard