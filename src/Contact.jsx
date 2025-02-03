const Contact = () => {
    return (
        <div className='flex flex-row h-screen '>
            <div className='m-24'>
                <p className='font-semibold text-3xl'>Let's Connect !</p>
                <p className='w-[400px] mt-4 mb-8'>Lorem ipsum, dolor sit amet cons corrupti beatae amet laborum architecto rem neque temporibus</p>
                <input type="text" placeholder='Full Name' className="bg-blue-950 p-2  border-2  border-b-white  mr-6" />
                <input type="email" placeholder='Email' /><br />
                <input type="text" placeholder='Message' className='mt-10 mb-12' /> <br />
                <button className='border-none  bg-slate-400 p-2'>Send message</button>
            </div>
            <div className='mt-36 ml-24'>
                <p className='text-xl font-semibold mb-3'>Contact</p> 
                <a href="" >aymenemail@gmail.com</a>  <br />
                <a href="" >Reach me on LinkedIn</a>
                <p className='text-xl font-semibold mt-6 mb-4'>Social Media</p> 
                <p>Text</p>
                <p>Text</p>
            </div>
        </div>
    )
}

export default Contact