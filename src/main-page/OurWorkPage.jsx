import ProjectCard from '../components/ProjectCard'

function OurWorkPage () {
    const workType = "Branding & Visual Design";
    const projectLists = [
        {
            projectClientName: "Nongmon Market",
            projectName: "NONGMON 24+7",
            projectType: "Banding & Visual Design",
            projectImage: "https://placehold.co/440",
            projectBGImage: "https://placehold.co/440/azure/white"
        },
        {
            projectClientName: "Power Development Fund Thailand",
            projectName: "PDF ERC",
            projectType: "Mini Website",
            projectImage: "https://placehold.co/440",
            projectBGImage: "https://placehold.co/440/snow/white"
        },
        {
            projectClientName: "Power Development Fund Thailand",
            projectName: "Hope Spot",
            projectType: "Visual Identity",
            projectImage: "https://placehold.co/440",
            projectBGImage: "https://placehold.co/440/azure/white"
        },
        {
            projectClientName: "Songkla Chamber of Commerce",
            projectName: "Hatyai",
            projectType: "Visual Identity",
            projectImage: "https://placehold.co/440",
            projectBGImage: "https://placehold.co/440/snow/white"
        },
    ]
    

    return (
        <div className='w-full'>
            <div className='bg-blue-800'>
            <h2 className='text-white text-center text-md font-bold px-32'>( K2 Venture Creative Communication Agency )</h2>
            <div className='text-white text-5xl px-12'>
                <div className='py-4 space-y-[-16px]'>
                <h3>OUR</h3>
                <h3>WORK</h3>
                </div>
                <h3 className='pb-4'>{workType}</h3>
            </div>
            </div>
            <div>
                <div className='w-fit'>
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
        </div>
    )
}

export default OurWorkPage