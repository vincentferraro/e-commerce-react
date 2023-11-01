
import MaruHeader from "../../assets/img/maru_shop_header.jpg"
import { Link } from "react-router-dom";
const HomeHeader = (props)=>{
    return(
        <header style={ {backgroundImage:{MaruHeader}}} className="flex flex-row h-[814px] border-2 border-solid border-red-600">
            <img className="w-[618px] h-[681px] "src={props.src}  alt={props.alt}/>
            <div>
                <h1>What’s Real Never Washes Away.</h1>
                <Link to="/shop">Shop Now</Link>
            </div>
        </header>
    )
}

export default HomeHeader;