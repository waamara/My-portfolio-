import Myimg from "../src/assets/Myimg.jpg"
import Star from "../src/assets/Staricon.png"

const About = () => {
    return (
        <div className='flex flex-col h-screen'>
            <div className='flex flex-row ml-32 mt-16'>
                <div className='flex flex-row w-[550px] mr-20' >
                    <img src={Myimg} alt="Myimg" className='w-[150px] mr-8' />
                    <div>
                        <p className='text-2xl font-semibold mb-4 mt-4'>Im Aymen Berbiche</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minima et debitis quisquam nulla earum vel inventore magni, quibusdam voluptate praesentium odio.  </p>
                    </div>
                </div>
                <div className='w-[250px] h-[200px] bg-gray-900 rounded-xl'>
                    <div className='flex flex-row justify-center p-3 font-medium  '>
                        <p className="text-lg mr-3">Interests</p>
                        <img src={Star} alt="star-img" />
                    </div>
                    <div>
                        <div className="backdrop-brightness-200  h-[30px] w-[95px]  rounded-xl pl-4  "><p>Branding</p></div>
                        <div className="backdrop-brightness-200  h-[30px] w-[95px]  rounded-xl pl-4  "><p>Branding</p></div>
                        <div className="backdrop-brightness-200  h-[30px] w-[95px]  rounded-xl pl-4  "><p>Branding</p></div>
                        <div className="backdrop-brightness-200  h-[30px] w-[95px]  rounded-xl pl-4  "><p>Branding</p></div>
                        <div className="backdrop-brightness-200  h-[30px] w-[95px]  rounded-xl pl-4  "><p>Branding</p></div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row'>
                <div className="ml-28">
                    <div className='w-[250px] h-[200px] backdrop-brightness-150 rounded-xl mt-10'>
                        <div className='flex flex-row justify-center p-4 '>
                            <p className="text-lg font-semibold">My skills</p>
                            <img src={Star} alt="star-img" />
                        </div>
                        <div>
                            <p className="text-xs text-center" >The Advanced Technologies I Use ✨</p> 
                        </div>
                    </div> 
                    <div className='w-[250px] h-[200px] backdrop-brightness-150 rounded-xl mt-10'>
                        <div className='flex flex-row justify-center p-4 '>
                            <p className="text-lg font-semibold">My skills</p>
                            <img src={Star} alt="star-img" />
                        </div>
                        <div>
                            <p className="text-xs text-center" >The Advanced Technologies I Use ✨</p> 
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row'>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default About