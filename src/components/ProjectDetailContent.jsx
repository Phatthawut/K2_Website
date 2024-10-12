function ProjectDetailContent ({projectDetailDescription, descriptionList}) {

    if (!projectDetailDescription || !descriptionList || descriptionList.length === 0) {
        return null; // Don't render anything if data is missing
    }

    const [firstPart, ...rest] = projectDetailDescription.projectType.split(' ')
    const secondPart = rest.join(' ')

    const projectDescriptionParagraphs = projectDetailDescription.projectDescription.split('<!--split-->')

    return (
        <section className="flex justify-center">
            <div className="mx-8 md:mx-20 max-w-[1024px]">
                <div className="py-12">
                <div className="text-center">
                    <h3 className="font-OpenSans uppercase text-3xl">{projectDetailDescription.clientName}</h3>
                    <h4><span className="font-Merriweather text-3xl italic">{firstPart}</span> <span className="font-OpenSans text-3xl uppercase">{secondPart}</span></h4>
                </div>
                {projectDescriptionParagraphs.map((paragraph, index) =>( <p key={index} className="pt-6">{paragraph}</p> ))}
                </div>
                {descriptionList.map((description, index) => {
                    if (!description.listname.trim() && !description.description.trim()) {
                        return null
                    }
                    const paragraphs = description.description.split('<!--split-->')
                    return (
                        <div key={index}>
                            <div className="divider bg-white h-0.5 w-2/4"></div>
                            <h3 className="font-BodoniModa text-xl italic -mt-2">{descriptionList.listname}</h3>
                            {paragraphs.map ((paragraph, i) => (
                                <p key={i} className="font-NotoSans font-semibold pt-2 pb-8">{paragraph}</p>
                            ))}
                        </div>
                    )
                })}
                </div>
        </section>
    );
}
export default ProjectDetailContent