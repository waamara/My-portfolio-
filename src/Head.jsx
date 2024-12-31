import icone from "../src/assets/icon.png"

const Head = () => {
    return (
        <div className="flex flex-row justify-around w-full">
            <div className=" flex flex-row  ">
                <p className="flex-grow">Home</p>
                <p className="flex-grow">About</p>
                <p className="flex-grow">Works</p>
            </div>
            <div className="flex flex-row">
                <p className="mr-3">get in touch  </p>
                <img src={icone} alt="send icone" />
            </div>
        </div>
    )
}

export default Head