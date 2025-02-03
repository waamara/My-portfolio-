import { Link } from "react-router-dom"
import icone from "../src/assets/icon.png"

const Head = () => {
    return (
        <div>
            <div className="flex flex-row justify-around w-full pt-12 ">
                <div className=" flex flex-row justify-around w-[300px] ">
                    <div>
                        <Link to="/"><p className="flex-grow">Home</p></Link>
                    </div>
                    <div>
                        <Link to="/about" > <p className="flex-grow">About</p></Link>
                    </div>
                    <div>
                        <Link to="/works"> <p className="flex-grow">Works</p></Link>
                    </div>
                </div>
                <div className="flex flex-row ">
                    <Link to="/contact">
                        <p className="mr-3">get in touch  </p>
                        <img src={icone} alt="send icone" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Head