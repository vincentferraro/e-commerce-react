
import { useArticlesListContext } from "../../provider/ArticleProvider"

const HomeImages =()=>{
    const {articles} = useArticlesListContext()

    const styles={
        width:"100px",
        height:"100px"
    }
    return(<section className="flex flex-row justify-around items-center gn-bottom  h-[810px] border-2 border-solid border-red-700">
        {articles.slice(1).map(element => <img className="h-[637px] w-[744px]" key={element.id} src={element.src} alt={element.alt}/>)}
        </section>)
}

export default HomeImages;