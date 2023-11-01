import SectionHeader from "../About/SectionHeader";

// Images
import ContactHeader from "../../assets/img/contact_header.jpg"
import ContactImage from "../../assets/img/contact_2.jpeg"

const Contact = ()=>{

    const sectionHeaderData ={
        message:"Unlike other dying processes, we treat every product with care by respecting the materials used and the process itself.",
        backgroundImage:ContactHeader
    }

    const dataLink = [{
        href:"#",
        name:"General Supply Co."
    },
    {
        href:"#",
        name:"Indigo Now"
    },{
        href:"#",
        name:"Desert Industries"
    }]

    const styleImg={
        width:"100px",
        heigh:"100px"
    }
    return(
        <div>
            <SectionHeader message={sectionHeaderData.message} />
            <section>
                <div>
                    <h2>Press & General Inquiries</h2>
                    <span>If you have any questions or comments, please contact us via email or phone. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                    <ul>
                        <a href="#">Instagram</a>
                        <a href="#">Facebook</a>
                        <a href="#">X</a>
                    </ul>
                </div>
                <div>
                    <h2>Email</h2>
                    <pan>email@example.com</pan>
                    <h2>Phone</h2>
                    <span>+1 (555) 555 - 555</span>
                </div>

            </section>
            <section>
                { dataLink.map(element => <a href={element.href}>{element.name}</a>)}
                <img style={styleImg} src={ContactImage} alt="Hands is rolling up elastic wire around clothe"/>
            </section>
        </div>
    )
}

export default Contact;