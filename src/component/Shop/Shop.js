import SectionHeader from "../About/SectionHeader";

import MaruShopHeader from "../../assets/img/maru_about_header.jpg"
import ShopSection from "./ShopSection";
const Shop = ()=>{

    const sectionHeaderData ={
        message:"It connects you to the process of designing your own clothes and home goods in a way that gives you more respect and curiosity for the materials used and the process itself.",
        backgroundImage:MaruShopHeader
    }

    
    return(
    <div>
        <SectionHeader message={sectionHeaderData.message} backgroundImage={sectionHeaderData.backgroundImage} />
        
        <main>
        <ShopSection />
        </main>
    </div>
    )
}

export default Shop;