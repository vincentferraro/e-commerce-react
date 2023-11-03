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

    return( <footer className="h-[346px] bg-[#F1F1EF] flex flex-row justify-around">
            <ul className="flex flex-col border-2 border-black justify-center  text-base underline">
                {dataFooter1.map(element => <Link className="m-1"key={element.id}to={element.to}>{element.name}</Link>)}
            </ul>
            <ul className="flex flex-col border-2 border-black justify-center  text-base">
                <li className="text-4xl font-light">Maru</li>
            </ul>
            <ul className="flex flex-col border-2 border-black justify-center  text-base underline">
                {dataFooter2.map(element =><Link  className="m-1" key={element.id}to={ element.to}>{element.name}</Link>)}
            </ul>
    </footer>)
}

export default Footer;