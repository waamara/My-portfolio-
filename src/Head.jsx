import icone from "../src/assets/icon.png"

const Head = () => {
    return (
        <div className="flex flex-row justify-around w-full mt-12">
            <div className=" flex flex-row justify-around w-[300px] ">
                <div><p className="flex-grow">Home</p>
                </div>
                <div><p className="flex-grow">About</p>
                </div> 
                <div><p className="flex-grow">Works</p>
                </div>
            </div>
            <div className="flex flex-row">
                <p className="mr-3">get in touch  </p>
                <img src={icone} alt="send icone" />
            </div>
        </div>
    )
}

export default Head