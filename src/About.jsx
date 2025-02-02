import React from 'react'
import Myimg from "../src/assets/Myimg.jpg"
import Star from "../src/assets/Staricon.png"

const About = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row ml-32 mt-16'>
                <div className='flex flex-row w-[550px] mr-20' >
                    <img src={Myimg} alt="Myimg" className='w-[150px] mr-8' />
                    <div>
                        <p className='text-2xl font-semibold mb-4'>Im Aymen Berbiche</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minima et debitis quisquam nulla earum vel inventore magni, quibusdam voluptate praesentium odio.  </p>
                    </div>
                </div>
                <div className='w-[250px] h-[200px] bg-slate-400 rounded-xl'>
                    <div className='flex flex-row justify-center p-4 '>
                        <p>Interests</p>
                        <img src={Star} alt="star-img" />
                    </div>
                </div>
            </div>
            <div className='flex flex-row'>
                <div>
                    <div className='w-[250px] h-[200px] bg-slate-400 rounded-xl'>
                        <div className='flex flex-row justify-center p-4 '>
                            <p>my skills</p>
                            <p>The Advanced Technologies I Use to Build Exceptional Websites That Delight Users and Achieve Results</p>
                            <img src={Star} alt="star-img" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='w-[250px] h-[200px] bg-slate-400 rounded-xl'>
                        <div className='flex flex-row justify-center p-4 '>
                            <p>Interests</p>
                            <img src={Star} alt="star-img" />
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