
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
        <div className="h-36 text-xl flex flex-row items-center justify-between border-solid border-2 border-black ">
            <ul className="flex flex-row justify-between w-52 border-2 border-red-600">
            {dataNav1.map(element => <Link key={element.id} to={element.to}>{element.name}</Link>)}
            </ul>
            <ul className="border-2 border-red">
                <Link to="/" > Marus</Link>
            </ul>
            <ul>
                <Link to="/card">Card</Link>
            </ul>
        </div>
        
    )

}


export default Nav;
