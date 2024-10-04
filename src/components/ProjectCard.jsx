import { Link } from "react-router-dom"

function ProjectCard ({projectClientName,
    projectName,projectLink, projectType, projectImage, projectBGImage}) {
        return (
            <section className="flex justify-center w-full">
                <Link to={projectLink} className="w-full">
                <div className="flex w-full text-white md:text-3xl">
                    <img className="w-3/5" src={projectImage} />
                    <div style={{ backgroundImage: `url(${projectBGImage})` }} className="w-2/5 bg-center flex flex-col justify-center font-semibold px-4 py-4 gap-3">
                    <div className="font-Domine leading-4 md:leading-none md:pl-4">
                    <h3>Client :  </h3>
                    <h3>{projectClientName}</h3>
                    </div>
                        <div className="leading-4 border-b md:leading-none md:pl-4">
                        <h3 className="font-Open Sans font-light">{projectName}</h3>
                        <h3 className="pb-2 font-Merriweather">{projectType}</h3>
                        </div>
                    </div>
                    </div>
                </Link>
            </section>
        )
}

export default ProjectCard