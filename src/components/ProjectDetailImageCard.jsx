
function ProjectDetailImageCard ({imageList}) {
        return (
            <section className="w-full">
                <div className="grid grid-cols-2 bg-violet-100 pb-8">
                    {imageList.map((imageSrc, index) => (
                        <div key={index} className={index >=2 ? 'px-1 md:px-4 pt-2 md:pt-7' : '' }>
                            <img className="w-full" src={imageSrc} alt={`Project Image ${index+1}`} />
                        </div>
                    ))}
                </div>
            </section>
        )
}

export default ProjectDetailImageCard