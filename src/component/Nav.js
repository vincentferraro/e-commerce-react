
import { Link } from "react-router-dom";

const Nav = ()=>{


    const dataNav1 = [{
            id:1,
            to:"/shop",
            name:"Shop"
        },
        {
            id:2,
            to:"/about",
            name:"About"
        },
        {
            id:3,
            to:"/contact",
            name:"Contact"
        }
    ]
    

    return(
        <nav>
            <ul>
            {dataNav1.map(element => <Link key={element.id} to={element.to}>{element.name}</Link>)}
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
