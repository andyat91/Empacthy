import skyvideo from "../../assets/videos/skyvideo.mp4"
import "./Jumbotron.css"
export default function Jumbotron() {

    return(
        <div className="jumbotron">
            
            <video autoPlay loop muted id="background-video">
                <source src={skyvideo} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
            </video>
            <h3 className="textphoto">Conectamos empresas con ONGs en un perfecto match de valores</h3>
         
        </div>
    )
}