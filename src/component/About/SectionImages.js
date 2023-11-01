import MaruAbout0 from "../../assets/img/maru_about_0.jpg"
import MaruAbout1 from "../../assets/img/maru_about_1.jpg"
import MaruAbout2 from "../../assets/img/maru_about_2.jpg"
import MaruAbout3 from "../../assets/img/maru_about_3.jpeg"

const SectionImages = ()=>{

    const styles= {
        width:"100px",
        height:"100px"
    }
    const dataImg= [
        {
            src:MaruAbout0,
            alt:"Photography of landscape rock"
        },
        {
            src:MaruAbout1,
            alt:"A Women  diving a fabric in the paint"
        },{
            src:MaruAbout2,
            alt:"Women rolling thin an elastic wire around on a cloth "
        },{
            src:MaruAbout3,
            alt:"Paint bucket"
        },
    ]
    return (
        <section className="section-text-image">
            {dataImg.map(element => <img style={styles}src={element.src} alt={element.alt} />)}
        </section>
    )
}
export default SectionImages;