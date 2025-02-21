import Myimg from "../src/assets/Myimg.jpg"
import Star from "../src/assets/Staricon.png"
import Linkedin from "../src/assets/linkedin.png"
import Email from "../src/assets/email (3).png"

const About = () => {
    return (
        <div className='flex flex-col h-full pb-14 '>
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
            <div className='flex flex-row ml-28'>
                <div className='w-[400px] h-[300px] backdrop-brightness-150 rounded-xl mt-10 mr-10'>
                    <div className='flex flex-row justify-center p-4 '>
                        <p className="text-lg font-semibold">My skills</p>
                        <img src={Star} alt="star-img" />
                    </div>
                    <div>
                        <p className="text-xs text-center" >The Advanced Technologies I Use ✨</p>
                    </div>
                </div>
                <div className='w-[600px] h-[300px] backdrop-brightness-150 rounded-xl mt-10'>
                    <div className='flex flex-row  p-4 '>
                        <p className="text-lg font-semibold">Experience</p>
                        <img src={Star} alt="star-img" />
                    </div>
                    <div className="overflow-y-scroll h-[230px]">
                        <div className="bg-slate-600 rounded-xl m-4 p-4  ">
                            <p>Jul. 2023 - Ago. 2023</p> <br />
                            <div className="flex flex-row justify-between">
                                <p >Senior Graphic Designer</p>
                                <p>Research and brainstorm various design ideas for <br />  content and marketing...</p>
                            </div>
                            <p>Pinnacle | Full-time</p>
                        </div>
                        <div className="bg-slate-600 rounded-xl m-4 p-4  ">
                            <p>Jul. 2023 - Ago. 2023</p> <br />
                            <div className="flex flex-row justify-between">
                                <p >Senior Graphic Designer</p>
                                <p>Research and brainstorm various design ideas for <br />  content and marketing...</p>
                            </div>
                            <p>Pinnacle | Full-time</p>
                        </div>
                        <div className="bg-slate-600 rounded-xl m-4 p-4  ">
                            <p>Jul. 2023 - Ago. 2023</p> <br />
                            <div className="flex flex-row justify-between">
                                <p >Senior Graphic Designer</p>
                                <p>Research and brainstorm various design ideas for <br />  content and marketing...</p>
                            </div>
                            <p>Pinnacle | Full-time</p>
                        </div>
                        <div className="bg-slate-600 rounded-xl m-4 p-4  ">
                            <p>Jul. 2023 - Ago. 2023</p> <br />
                            <div className="flex flex-row justify-between">
                                <p >Senior Graphic Designer</p>
                                <p>Research and brainstorm various design ideas for <br />  content and marketing...</p>
                            </div>
                            <p>Pinnacle | Full-time</p>
                        </div>
                        <div className="bg-slate-600 rounded-xl m-4 p-4  ">
                            <p>Jul. 2023 - Ago. 2023</p> <br />
                            <div className="flex flex-row justify-between">
                                <p >Senior Graphic Designer</p>
                                <p>Research and brainstorm various design ideas for <br />  content and marketing...</p>
                            </div>
                            <p>Pinnacle | Full-time</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row ml-28'>
                <div className='w-[550px] h-[270px] backdrop-brightness-150 rounded-xl mt-10 mr-10'>
                    <div className='flex flex-row  p-4 '>
                        <p className="text-lg font-semibold">Testamonial </p>
                        <img src={Star} alt="star-img" />
                    </div>
                    <div className="bg-slate-900 m-4  rounded-xl p-3">
                        <div className="flex flex-row">
                            <div>
                                <img src={Myimg}
                                alt="person-image"
                                className="w-[50px] rounded-xl" />
                            </div>
                            <div className="ml-4">
                                <p className="mb-2">Full name</p>
                                <p>Role lorem ipsum</p>
                            </div>
                        </div>
                        <div className="mt-3">
                            <p>Lorem ipsum dolor sit amet, consectetur <br /> iscing elit, sed do eiusmod tempor incididunt ut labore elit,</p>
                            <p className="mt-4">17 oct 2024</p>
                        </div>
                    </div>
                </div>
                <div className='w-[450px] h-[270px] backdrop-brightness-150 rounded-xl mt-10'>
                    <div className='flex flex-col  p-4 justify-center text-center '>
                        <p className="mb-5 text-3xl font-semibold">Let's create something <br /> great together !</p>
                        <p >Feel free to reach out anytime you have a <br /> project idea – I’d love to collaborate!</p>
                    </div>
                    <div className="ml-20"> 
                        <div className="flex flex-row  w-52   border-b-2 mb-3  border-b-blue-400">
                            <img src={Email} alt="email-icone" className="w-4 h-4 mt-1 mr-4" />
                            <p>aymenemail@gmail.com</p>  <br />
                        </div>
                        <div className="flex flex-row w-52  border-b-2   border-b-blue-400">
                            <img src={Linkedin} alt="linkedin-icone" className="w-4 h-4 mt-1 mr-4" />
                            <a href="https://www.linkedin.com/in/aymen-berbiche-772a13280/"  >Reach me on LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About