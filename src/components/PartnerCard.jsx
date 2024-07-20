function PartnerCard () {
    const partnerLists = [
        {
            partnerImage: "https://placehold.co/185x220",
            partnername: "BMW",
            partnerDetail: "Corparate id maxime quos porro placeat quasi"
        },
        {
            partnerImage: "https://placehold.co/185x220",
            partnername: "ERC",
            partnerDetail: "Asperiores nesciunt beatae possimus corporis deserunt."
        },
        {
            partnerImage: "https://placehold.co/185x220",
            partnername: "Saensuk City",
            partnerDetail: "Corparate id maxime quos porro placeat quasi"
        },
        {
            partnerImage: "https://placehold.co/185x220",
            partnername: "Bay Computing",
            partnerDetail: "Asperiores nesciunt beatae possimus corporis deserunt."
        },
        {
            partnerImage: "https://placehold.co/185x220",
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
        <>
            <section>
                <h2 className="text-3xl font-bold text-center py-6">Our Partner</h2>
                    {partnerLists.map((partner, index) =>
                    <div key={index} className="flex justify-center">
                        <img src= {partner.partnerImage} />
                        <div className="flex flex-col justify-center items-center bg-slate-100">
                            <h3 className="text-lg pb-4">{partner.partnername}</h3>
                            <h3 className="text-lg font-medium px-4">{partner.partnerDetail}</h3>
                        </div>
                    </div>
                    )}
            </section>
        </>
    )
}

export default PartnerCard