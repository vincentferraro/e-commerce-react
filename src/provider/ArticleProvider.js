import React from "react";

//Images
import Article1 from "../assets/img/articles/article_1.jpg"
import Article2 from "../assets/img/articles/article_2.jpg"
import Article3 from "../assets/img/articles/article_3.jpg"

const ArticlesContext = React.createContext()

const articlesList = [{
    id:1,
    src:Article1,
    alt:"Article 1",
    description:'Mudcloth and Wool Blanket',
    price:'$50.00',
    discount:'',
    status:''
},{
    id:2,
    src:Article2,
    alt:"Article 2",
    description:'Mali Carmen African Mudcloth ',
    price:'$40.00',
    discount:'',
    status:'SOLD OUT'
},
{
    id:3,
    src:Article3,
    alt:"Article 3",
    description:'Swell Rope Bowl ',
    price:'$30.00',
    discount:'',
    status:''
}]

const ArticleProvider = ({children})=>{
    const [articles]=React.useState(articlesList)

    return(
        <ArticlesContext.Provider value={{articles}}>
            {children}
        </ArticlesContext.Provider>
    )
}

export const useArticlesListContext = ()=> React.useContext(ArticlesContext)

export default ArticleProvider;