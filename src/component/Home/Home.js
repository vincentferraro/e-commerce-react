//Images
import Article2 from "../../assets/img/articles/article_2.jpg"

// Components
import HomeHeader from "./HomeHeader"
import SectionHeader from "../About/SectionHeader"
import HomeImages from "./HomeImages"
import HomeSubscription from "./HomeSubscription"
// Context API

const Home = ()=>{
    
    
    const img = {
        src:Article2,
        alt:"Article 2",
        styles:{
            width:"100px",
            height:"100px"
        }
    }
    return(<div>
        <HomeHeader {...img}/>
        <SectionHeader message="Organically dyed textiles and ceramics from Santa Fe, New Mexico." />
        <HomeImages />
        <HomeSubscription />
    </div>) 

}

export default Home;