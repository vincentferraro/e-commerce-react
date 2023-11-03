
import Card from "./Card/Card";
import ShopNav from "./ShopNav";
import { useArticlesListContext } from "../../provider/ArticleProvider";
// Images

// import Article1 from "../../assets/img/articles/article_1.jpg"
// import Article2 from "../../assets/img/articles/article_2.jpg"
// import Article3 from "../../assets/img/articles/article_3.jpg"


const ShopSection = ()=>{
    const {articles} =useArticlesListContext()

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