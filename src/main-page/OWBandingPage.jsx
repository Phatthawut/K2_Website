
import ServiceBanner from '../components/ServiceBanner';
import ProjectCard from '../components/ProjectCard'

function OWBandingPage () {
    const workType = "Branding & Visual Design";
    const projectLists = [
        {
            projectClientName: "Nongmon Market",
            projectName: "NONGMON 24+7",
            projectType: "Banding & Visual Design",
            projectImage: "images/service_branding_nongmon.webp",
            projectBGImage: "images/service_branding_bg01.webp"
        },
        {
            projectClientName: "Power Development Fund Thailand",
            projectName: "PDF ERC",
            projectType: "Mini Website",
            projectImage: "images/service_branding_pdf.webp",
            projectBGImage: "images/service_branding_bg02.webp"
        },
        {
            projectClientName: "Power Development Fund Thailand",
            projectName: "Hope Spot",
            projectType: "Visual Identity",
            projectImage: "images/service_branding_hopespot.webp",
            projectBGImage: "images/service_branding_bg01.webp"
        },
        {
            projectClientName: "Songkla Chamber of Commerce",
            projectName: "Hatyai",
            projectType: "Visual Identity",
            projectImage: "images/service_branding_hatyai.webp",
            projectBGImage: "images/service_branding_bg02.webp"
        },
    ]
    

    return (
        
        <div className='max-w-[1440px] mx-auto'>
            <ServiceBanner />
            {/* <div className='bg-blue-800'>
            <h2 className='text-white text-md font-bold px-32'>( K2 Venture Creative Communication Agency )</h2>
            <div className='text-white text-5xl h-screen px-12'>
                <div className='py-4 space-y-[-16px]'>
                <h3>OUR</h3>
                <h3>WORK</h3>
                </div>
                <h3 className='pb-4'>{workType}</h3>
            </div>
            </div> */}
                <div className='w-full'>
                {projectLists.map((project, index) => (
                    <ProjectCard
                        key={index}
                        projectClientName= {project.projectClientName}
                        projectName= {project.projectName}
                        projectType= {project.projectType}
                        projectImage= {project.projectImage}
                        projectBGImage= {project.projectBGImage}
                    />
                ))}
                </div>
            </div>
    )
}

export default OWBandingPage