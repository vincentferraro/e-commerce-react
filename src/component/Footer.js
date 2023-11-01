import { Link } from "react-router-dom"

const Footer = ()=>{

    const dataFooter1 =[
        {
            id:1,
            to:"/instagram",
            name:"Instagram"
        },
        {
            id:2,
            to:"/shop",
            name:"Shop"
        },
        {
            id:3,
            to:"/about",
            name:"About"
        }
    ]

    const dataFooter2= [
        {   id:1,
            to:"/X",
            name:"X"
        },
        {   id:2,
            to:"/mail",
            name:"mail"
        },
        {
            id:3,
            to:"/phone",
            name:"Phone"
        }
    ]

    return( <footer>
            <ul>
                {dataFooter1.map(element => <Link key={element.id}to={element.to}>{element.name}</Link>)}
            </ul>
            <ul>
                <li>Maru</li>
            </ul>
            <ul>
                {dataFooter2.map(element =><Link key={element.id}to={ element.to}>{element.name}</Link>)}
            </ul>
    </footer>)
}

export default Footer;