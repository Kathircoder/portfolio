import ProfileImg from '../img/kathirImg.jpg'

const Profile = () => {
    return (
        <>
            <div className="h-screen w-screen">
            <div className="w-full flex flex-row"> 
            <div  className="w-1/2 p-12"> 
            <h1 className='text-4xl font-bold p-6'>Hi I'am kathiravan <span className="text-red-600 font-bold text-3xl">B</span></h1>
            <h1 className="text-red-600 font-bold  ml-6 mb-4 text-3xl">Software Developer</h1>
            <h1 className=" text-black font-bold text-xl ml-6 mb-4 my-[10%] text-balance"> leverages cutting-edge information technology to advance biopharmaceutical research and development. By harnessing data analytics, machine learning, and bioinformatics, Portio Bio enhances the discovery and optimization of innovative therapeutics.</h1>
            </div>
            <div className="w-1/2">
            <img src={ ProfileImg } alt="" className='h-[60%]  rounded-bl-full absolute left-90 right-20 top-40'/>
            </div>
            </div>
            <div className="flex flex-row justify-center text-center gap-7 ">
          <img src="https://res.cloudinary.com/dve8r06ul/image/upload/v1726569019/atom_wcytoz.png" className="h-10 w-10 "/>
          <img src="https://res.cloudinary.com/dve8r06ul/image/upload/v1726568558/developer_g80rja.png" className="h-10 w-10 "/>
          <img src="https://res.cloudinary.com/dve8r06ul/image/upload/v1726739795/html_a6djri.png" className="h-10 w-10 "/>
          <img src="https://res.cloudinary.com/dve8r06ul/image/upload/v1726739926/cascading-style-sheets_m3eb94.png" className="h-10 w-10 "/>
          <img src="https://res.cloudinary.com/dve8r06ul/image/upload/v1726740319/java_xxqlqe.png" className="h-10 w-10 "/>
          <img src="https://res.cloudinary.com/dve8r06ul/image/upload/v1726741241/python_tdjbi6.png" className="h-10 w-10 "/>
          <img src="https://res.cloudinary.com/dve8r06ul/image/upload/v1726742577/sql-server_l3olh9.png" className="h-10 w-10 "/>

        </div>
        </div>
        </>
    )
}

export default Profile