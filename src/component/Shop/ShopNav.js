import { Link } from "react-router-dom"

const ShopNav = ()=>{

    const dataShopNav = [{
        to:"/bowls",
        name:"Bowls"
    },
    {
        to:"/kits",
        name:"Kits"
    },
    {
        to:"/mudcloths",
        name:"Mudcloths"
    }]

    return(
        <nav>
            
            <ul>
                {dataShopNav.map(element => <Link to={element.to}>{element.name}</Link>)}
            </ul>
        </nav>
    )
}

export default ShopNav;