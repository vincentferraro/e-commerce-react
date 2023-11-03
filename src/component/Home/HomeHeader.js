
import MaruHeader from "../../assets/img/maru_shop_header.jpg"
import { Link } from "react-router-dom";
const HomeHeader = (props)=>{
    return(
        <header style={{backgroundImage:`url(${MaruHeader})`, backgroundSize:'contain'}} className="flex flex-row h-[814px] border-2 border-solid border-red-600">
            <img className="w-4/12 h-4/5 m-auto "src={props.src}  alt={props.alt}/>
            <div className="flex flex-col w-6/12 justify-center">
                <h1 className="text-7xl font-light text-white mb-9">What’s Real <br></br>Never Washes Away.</h1>
                <div className="flex-row justify-center items-center h-20 w-[366px] bg-[#C8A47E]">
                <Link className="flex flex-row justify-center items-center text-white" to="/shop">Shop Now</Link>
                </div>
                
            </div>
        </header>
    )
}

export default HomeHeader;