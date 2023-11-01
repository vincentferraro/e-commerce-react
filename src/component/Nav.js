
import { Link, Route, Routes } from "react-router-dom";

const Nav = ()=>{


    const dataNav1 = [{
            to:"/shop",
            name:"Shop"
        },
        {
            to:"/about",
            name:"About"
        },
        {
            to:"/contact",
            name:"Contact"
        }
    ]
    

    return(
        <nav>
            <ul>
            {dataNav1.map(element => <Link to={element.to}>{element.name}</Link>)}
            </ul>
            <ul>
                <Link to="/" > Marus</Link>
            </ul>
            <ul>
                <Link to="/card">Card</Link>
            </ul>
        </nav>
        
    )

}


export default Nav;
