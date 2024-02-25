import "./Mosaic.css"
import puzle from "../../assets/images/puzle.jpg"
import mapa from "../../assets/images/mapa.jpg"
import obstaculos from  "../../assets/images/obstaculos.jpg"
import comunicar from "../../assets/images/comunicar.jpg"
import BrandLogo from "../../assets/icons/BrandLogo"
export default function Mosaic() {

    return(

        <div className="mosaic">
            <div className="rowmosaic">
                <div className="mosaicgeneric">
                    <img src={puzle} />
                    </div>
                <div className="mosaicgeneric">
                    <h3>Conectando</h3>
                    <h4>Empresas y Organizaciones</h4>
                </div>
                <div className="mosaicgeneric">
                    <img src={mapa} />
                    </div>
            </div>
            <div className="rowmosaic">
                <div className="mosaicgeneric">
                <h3>Eliminando</h3>
                    <h4>Obstaculos</h4>
                </div>
                <div className="mosaicgeneric brandlogo">
                    <h1><BrandLogo/> </h1>
                </div>
                <div className="mosaicgeneric">
                <h3>Amplificando ++</h3>
                <h4>Fortaleciendo Impacto Positivo</h4>
                </div>
            </div>
            <div className="rowmosaic">
            <div className="mosaicgeneric">
                    <img src={obstaculos} />
                    </div>
                <div className="mosaicgeneric">
                <h3>Comunicando</h3>
                    <h4>Propositos</h4>
                </div>
                <div className="mosaicgeneric">
                    <img src={comunicar} />
                    </div>
            </div>
        </div>
    )
}