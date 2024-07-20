function ProjectCard ({projectClientName,
    projectName, projectType, projectImage, projectBGImage}) {
        return (
            <section>
                <div className="flex">
                    <img src={projectImage} />
                    <div style={{ backgroundImage: `url(${projectBGImage})` }} className="bg-cover bg-center flex flex-col justify-center text-xl font-semibold px-4 gap-4">
                    <h3>{projectClientName}</h3>
                        <div>
                        <h3 className="">{projectName}</h3>
                        <h3>{projectType}</h3>
                        <hr />
                        </div>
                    </div>

                </div>
            </section>
        )
}

export default ProjectCard