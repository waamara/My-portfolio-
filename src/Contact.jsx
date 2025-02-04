import Email from "../src/assets/email (3).png"
import Linkedin from "../src/assets/linkedin.png"

const Contact = () => {
    return (
        <div className='flex flex-row h-screen '>
            <div className='m-24'>
                <p className='font-semibold text-3xl'>Let's Connect !</p>
                <p className='w-[400px] mt-4 mb-8'>Lorem ipsum, dolor sit amet cons corrupti beatae amet laborum architecto rem neque temporibus</p>
                <input type="text" placeholder='Full Name' className="bg-transparent  p-2  border-b-2  border-b-blue-400  mr-6" />
                <input type="email" placeholder='Email' className="bg-transparent  p-2  border-b-2  border-b-blue-400  mr-6" /><br />
                <input type="text" placeholder='Message' className="mt-10 mb-12 w-[420px]  bg-transparent  p-2  border-b-2  border-b-blue-400 " /> <br />
                <button className='border-none  bg-blue-400 p-2 rounded-lg w-[160px] '>Send message</button>
            </div>
            <div className='mt-36 ml-24'>
                <p className='text-xl font-semibold mb-3'>Contact</p>
                <div className="flex flex-row   border-b-2 mb-3  border-b-blue-400">
                    <img src={Email} alt="email-icone" className="w-4 h-4 mt-1 mr-4" />
                    <p>aymenemail@gmail.com</p>  <br /> 
                </div>
                <div className="flex flex-row  border-b-2   border-b-blue-400">
                    <img src={Linkedin} alt="linkedin-icone" className="w-4 h-4 mt-1 mr-4" />
                    <a href="https://www.linkedin.com/in/aymen-berbiche-772a13280/" >Reach me on LinkedIn</a>
                </div> 
                <p className='text-xl font-semibold mt-6 mb-4'>Social Media</p>
                <p>Text</p>
                <p>Text</p>
            </div>
        </div>
    )
}

export default Contact