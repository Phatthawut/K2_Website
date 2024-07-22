function ProjectCard ({projectClientName,
    projectName, projectType, projectImage, projectBGImage}) {
        return (
            <section className="flex justify-center">
                <div className="flex w-full">
                    <img className="w-3/5" src={projectImage} />
                    <div style={{ backgroundImage: `url(${projectBGImage})` }} className="w-2/5 bg-center flex flex-col justify-center text-xl font-semibold px-4 gap-4">
                    <h3>{projectClientName}</h3>
                        <div className="border-b">
                        <h3 className="">{projectName}</h3>
                        <h3>{projectType}</h3>
                        </div>
                    </div>

                </div>
            </section>
        )
}

export default ProjectCard