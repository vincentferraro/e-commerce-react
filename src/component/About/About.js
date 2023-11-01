import SectionHeader from "./SectionHeader";
import SectionTextImage from "./SectionTextImage";
import SectionImages from "./SectionImages";

import MaruAboutHeader from "../../assets/img/maru_about_header.jpg"
const About =()=>{

    const sectionHeaderData ={
        message:"There’s something special about using plants to dye your own fabric. It connects you to the process of designing your own clothes and home goods in a way that gives you more respect and curiosity for the materials used and the process itself.",
        backgroundImage:MaruAboutHeader
    }
    return(<div>
        <SectionHeader message={sectionHeaderData.message} backgroundImage={sectionHeaderData.backgroundImage}/>
        <SectionTextImage />
        <SectionImages />
        
    </div>)


}
export default About;