function ProjectDetailContent () {
    const projectDes = [{
        clientName: 'Nongmon',
        projectType: 'Visual Identity',
        projectDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quas, debitis earum error pariatur libero dolorum repellendus consequatur, necessitatibus quisquam quae, asperiores esse sunt officia perspiciatis culpa dignissimos architecto! At!'
    }]

    const [firstPart, secondPart] = projectDes[0].projectType.split(' ');

    const demoList = [
        {
        listname: 'Color Palette',
        description: 'Color Palette ได้รับแรงบันดาลใจมาจากสีสันสดใสของชายหาดบางแสน ภาพติดตาที่ทุกคนคุ้นเคยเป็นอย่างดี ไม่ว่าจะเป็น ร่มชายหาดสีสันฉูดฉาด, เก้าอี้ชายหาดลายทาง, หาดทรายเม็ดละเอียด และสีของน้ำทะเล จนได้มาเป็น สีแดง, สีเหลือง, สีน้ำเงิน, สีน้ำตาลอ่อน และสีเทอควอยส์'},
        {
            listname: 'deom 02',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quas, debitis earum error pariatur libero dolorum repellendus consequatur, necessitatibus quisquam quae, asperiores esse sunt officia perspiciatis culpa dignissimos architecto! At!'},
        {
            listname: 'deom 03',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quas, debitis earum error pariatur libero dolorum repellendus consequatur, necessitatibus quisquam quae, asperiores esse sunt officia perspiciatis culpa dignissimos architecto! At!'},
        {
            listname: 'deom 04',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quas, debitis earum error pariatur libero dolorum repellendus consequatur, necessitatibus quisquam quae, asperiores esse sunt officia perspiciatis culpa dignissimos architecto! At!'}

    ]
    return (
        <section>
            <div className="mx-8 md:mx-20">
                <div className="py-6">
                <div className="text-center">
                    <h3 className="font-OpenSans uppercase text-3xl">{projectDes[0].clientName}</h3>
                    <h4><span className="font-Merriweather text-3xl italic">{firstPart}</span> <span className="font-OpenSans text-3xl uppercase">{secondPart}</span></h4>
                </div>
                <p className="pt-6">{projectDes[0].projectDescription}</p>
                </div>
                {demoList.map((demoList, index) => 
                (<div key={index}>
                    <div className="divider bg-white h-0.5 w-2/4"></div>
                    <h3 className="font-BodoniModa text-xl italic -mt-2">{demoList.listname}</h3>
                    <p className="font-NotoSans font-semibold pt-2 pb-8">{demoList.description}</p>
                </div> ))}
                </div>
        </section>
    )
}
export default ProjectDetailContent