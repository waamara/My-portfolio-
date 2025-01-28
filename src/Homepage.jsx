import Dow from "../src/assets/Icon.png"
import See from "../src/assets/Icon (1).png"
import Myimg from "../src/assets/Myimg.jpg" 
import Icon from "../src/assets/Icon.png"

const Homepage = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row'>
                <div className='ml-[100px] w-[450px] mt-20 '>
                    <p>hello world</p>
                    <p className='text-xl font-semibold '>Im Aymen Berbiche</p>
                    <p className='w-[400px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto unde enim sunt exercitationem sapiente doloremque quidem ex nam, vitae, quibusdam rem eos ratione id, ut mollitia quaerat molestias officiis veritatis!</p>
                    <div className='flex  flex-row  mt-8'>
                        <p className='font-semibold'>Resume</p>
                        <button className='ml-4'>Dowland cv</button>
                        <img src={Dow} alt="dowland-icon"
                            className='bg-black' />
                        <button className='ml-4'>see cv</button>
                        <img src={See} alt="see-icon"
                            className='bg-black' />
                    </div>
                    <div className='flex  flex-row  mt-6'>
                        <p className='font-semibold'>Follow on </p>
                        <a href="" className='ml-4'>Linkedin</a>
                        <a href="" className='ml-4'>Facebook</a>
                        <a href="" className='ml-4'>Instagram</a>
                        <a href="" className='ml-4'>Github</a>
                    </div>
                </div>
                <div className='flex flex-col mt-24 '>
                    <div className='bg-slate-300 w-[200px] h-[150px] rounded-md'>
                    </div>
                    <div className='bg-slate-300 w-[200px] h-[100px] mt-2 rounded-md '>
                    </div>
                </div>
                <div >
                    <img src={Myimg} alt="my-image" className='w-[205px]  mt-24 ml-20 rounded-lg' />
                    <div className='flex flex-row mt-4 ml-12'>
                        <img src={Icon} alt="enligne-Icone" className='bg-black' /> <p>available for work</p>
                        <img src={Icon} alt="locaiton-Icone" className='bg-black' /> <p>Algeria</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-row' >
                <div className=' m-20 w-[400px] h-[150px] rounded-md bg-slate-200'>
                    <p className='m-4'>Popular repo</p>
                </div>
                <div className=' mt-20 w-[500px] h-[150px] rounded-md bg-slate-200'>
                    <p className='m-4'>My Github Controbutions </p>
                </div>
            </div>

        </div>

    )
}

export default Homepage