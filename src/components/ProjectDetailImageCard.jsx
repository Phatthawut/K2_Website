import { Link } from "react-router-dom"

function ProjectDetailImageCard () {
    const imageList = [
        'images/service_branding_pdf.webp', 'images/service_branding_hopespot.webp', 'images/service_branding_hatyai.webp', 'images/service_branding_nongmon.webp', 'images/service_branding_pdf.webp', 'images/service_branding_hopespot.webp', 'images/service_branding_hatyai.webp', 'images/service_branding_nongmon.webp'
    ]
        return (
            <section className="w-full">
                <div className="grid grid-cols-2 bg-violet-100">
                    {imageList.map((imageSrc, index) => (
                        <div key={index} className={index >=2 ? 'px-1 md:px-4 pt-2 md:pt-7' : '' }>
                            <img className="" src={imageSrc} alt={`Project Image ${index+1}`} />
                        </div>
                    ))}
                </div>
            </section>
        )
}

export default ProjectDetailImageCard