import News from "../News/News"
import "./NewsList.css"

export default function NewsList({newslist}){

return(
    <div>
        {newslist.map((news,index)=> (
           <News   key={index} {...news}/>
        ))}
    </div>
)
}