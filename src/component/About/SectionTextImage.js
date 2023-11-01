import MaruAboutPortrait from "../../assets/img/maru_about_portrait.jpg"
const SectionTextImage = ()=>{

    const styles= {
        width:"100px",
        height: "100px"
    }
    return (
        <section className="section-text-image">
            <img style={styles} src={MaruAboutPortrait} alt="Portrait of a Women seat down on a chair"/>
            <p>
            There’s something special about using plants to dye your own fabric. It connects you to the process of designing your own clothes and home goods in a way that gives you more respect and curiosity for the materials used and the process itself.
            </p>
        </section>
    )
}
export default SectionTextImage;