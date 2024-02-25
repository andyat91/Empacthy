import parquesky from "../../assets/images/parquesky.jpg"
import "./Jumbotron.css"
export default function Jumbotron() {

    return(
        <div className="jumbotron">
            
            <img src={parquesky} alt="skyline"/>
            <h3 className="textphoto">Conectamos empresas con ONGs en un perfecto match de valores</h3>
         
        </div>
    )
}