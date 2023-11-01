
import { useArticlesListContext } from "../../provider/ArticleProvider"

const HomeImages =()=>{
    const {articles} = useArticlesListContext()

    const styles={
        width:"100px",
        height:"100px"
    }
    return(<section>
        {articles.slice(1).map(element => <img style={styles} key={element.id} src={element.src} alt={element.alt}/>)}
        </section>)
}

export default HomeImages;