
import MaruHeader from "../../assets/img/maru_shop_header.jpg"
import { Link } from "react-router-dom";
const HomeHeader = (props)=>{
    return(
        <header style={ {backgroundImage:{MaruHeader}}}>
            <img src={props.src} style={props.styles} alt={props.alt}/>
            <div>
                <h1>What’s Real Never Washes Away.</h1>
                <Link to="/shop">Shop Now</Link>
            </div>
        </header>
    )
}

export default HomeHeader;