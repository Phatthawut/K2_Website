function ProjectDetailContent ({projectDetailDescription, descriptionList}) {

    const [firstPart, secondPart] = projectDetailDescription.projectType.split(' ');

    return (
        <section className="flex justify-center">
            <div className="mx-8 md:mx-20 max-w-[1024px]">
                <div className="py-12">
                <div className="text-center">
                    <h3 className="font-OpenSans uppercase text-3xl">{projectDetailDescription.clientName}</h3>
                    <h4><span className="font-Merriweather text-3xl italic">{firstPart}</span> <span className="font-OpenSans text-3xl uppercase">{secondPart}</span></h4>
                </div>
                <p className="pt-6">{projectDetailDescription.projectDescription}</p>
                </div>
                {descriptionList.map((descriptionList, index) => 
                (<div key={index}>
                    <div className="divider bg-white h-0.5 w-2/4"></div>
                    <h3 className="font-BodoniModa text-xl italic -mt-2">{descriptionList.listname}</h3>
                    <p className="font-NotoSans font-semibold pt-2 pb-8">{descriptionList.description}</p>
                </div> ))}
                </div>
        </section>
    )
}
export default ProjectDetailContent