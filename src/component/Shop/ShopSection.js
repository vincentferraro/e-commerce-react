
import Card from "./Card/Card";
import ShopNav from "./ShopNav";
import { useArticlesListContext } from "../../provider/ArticleProvider";
// Images

// import Article1 from "../../assets/img/articles/article_1.jpg"
// import Article2 from "../../assets/img/articles/article_2.jpg"
// import Article3 from "../../assets/img/articles/article_3.jpg"


const ShopSection = ()=>{
    const {articles} =useArticlesListContext()
    // const dataShop = [{
    //     src:Article1,
    //     alt:"Article 1",
    //     description:'Mudcloth and Wool Blanket',
    //     price:'$50.00',
    //     discount:'',
    //     status:''
    // },{
    //     src:Article2,
    //     alt:"Article 2",
    //     description:'Mali Carmen African Mudcloth ',
    //     price:'$40.00',
    //     discount:'',
    //     status:'SOLD OUT'
    // },
    // {
    //     src:Article3,
    //     alt:"Article 3",
    //     description:'Swell Rope Bowl ',
    //     price:'$30.00',
    //     discount:'',
    //     status:''
    // }]

    return(
        <div>
            <div>
                <h2> Shop</h2>
            </div>
        <ShopNav />
        <section>
        {
            articles.map(element => <Card key={element.id} {...element}/> )
        }
        </section>
        </div>  
    )
}

export default ShopSection;