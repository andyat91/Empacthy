import { useRef } from "react";
import skyvideo from "../../assets/videos/skyvideo.mp4";
import "./Jumbotron.css";

export default function Jumbotron() {
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
 
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

    return(
        <div className="jumbotroncontainer">
        <div className="jumbotron">
            
            <video 
            autoPlay 
            loop 
            muted 
            className="video"
            onEnded={handleVideoEnded}
            ref={videoRef}
            >
                <source src={skyvideo} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
            </video>
            <h3 className="textphoto">Conectamos empresas con ONGs en un perfecto match de valores</h3>
         
        </div>
        </div>
    )
}