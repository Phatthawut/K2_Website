import ProjectCard from '../components/ProjectCard'

function OurWorkPage () {
    const projectLists = [
        {
            projectClientName: "Nongmon Market",
            projectName: "NONGMON 24+7",
            projectType: "Banding & Visual Design",
            projectImage: "https://placehold.co/220x220",
            projectBGImage: "https://placehold.co/170x220/azure/white"
        },
        {
            projectClientName: "Power Development Fund Thailand",
            projectName: "PDF ERC",
            projectType: "Mini Website",
            projectImage: "https://placehold.co/220x220",
            projectBGImage: "https://placehold.co/170x220/snow/white"
        },
        {
            projectClientName: "Power Development Fund Thailand",
            projectName: "Hope Spot",
            projectType: "Visual Identity",
            projectImage: "https://placehold.co/220x220",
            projectBGImage: "https://placehold.co/170x220/azure/white"
        },
        {
            projectClientName: "Songkla Chamber of Commerce",
            projectName: "Hatyai",
            projectType: "Visual Identity",
            projectImage: "https://placehold.co/220x220",
            projectBGImage: "https://placehold.co/170x220/snow/white"
        },
    ]
    

    return (
        <section>
            <div>
                <h2>Our Work</h2>
                <div>
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
        </section>
    )
}

export default OurWorkPage