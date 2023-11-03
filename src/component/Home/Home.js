//Images
import Article4 from "../../assets/img/articles/article_4.jpeg"
// Components
import HomeHeader from "./HomeHeader"
import SectionHeader from "../About/SectionHeader"
import HomeImages from "./HomeImages"
import HomeSubscription from "./HomeSubscription"
// Context API

const Home = ()=>{
    
    
    const img = {
        src:Article4,
        alt:"Article 4",
        styles:{
            width:"100px",
            height:"100px"
        }
    }
    return(<div>
        <HomeHeader {...img}/>
        <SectionHeader className="bg-[#F1F1EF] flex justify-center items-center p- text-4xl h-[325px]" message="Organically dyed textiles and ceramics from Santa Fe,  New Mexico." />
        <HomeImages />
        <HomeSubscription />
    </div>) 

}

export default Home;