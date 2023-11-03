import { Link } from "react-router-dom"

const ShopNav = ()=>{

    const dataShopNav = [{
        id:1,
        to:"/bowls",
        name:"Bowls"
    },
    {
        id:2,
        to:"/kits",
        name:"Kits"
    },
    {
        id:3,
        to:"/mudcloths",
        name:"Mudcloths"
    },]

    return(
        <nav>
            
            <ul>
                {dataShopNav.map(element => <Link key={element.id}to={element.to}>{element.name}</Link>)}
            </ul>
        </nav>
    )
}

export default ShopNav;