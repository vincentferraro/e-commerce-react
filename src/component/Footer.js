import { Link } from "react-router-dom"

const Footer = ()=>{

    const dataFooter1 =[
        {
            to:"/instagram",
            name:"Instagram"
        },
        {
            to:"/shop",
            name:"Shop"
        },
        {
            to:"/about",
            name:"About"
        }
    ]

    const dataFooter2= [
        {
            to:"/X",
            name:"X"
        },
        {
            to:"/mail",
            name:"mail"
        },
        {
            to:"/phone",
            name:"Phone"
        }
    ]

    return( <footer>
            <ul>
                {dataFooter1.map(element => <Link to={element.to}>{element.name}</Link>)}
            </ul>
            <ul>
                <li>Maru</li>
            </ul>
            <ul>
                {dataFooter2.map(element =><Link to={ element.to}>{element.name}</Link>)}
            </ul>
    </footer>)
}

export default Footer;