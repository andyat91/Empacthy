import "./Mosaic.css"
import ElementMosaic from "../ElementMosaic/ElementMosaic";


export default function Mosaic() {

    return(

        <div className="mosaic">
            <div className="rowmosaic">
                <ElementMosaic/>
                <ElementMosaic/>
                <ElementMosaic/>
            </div>
            <div className="rowmosaic">
                <ElementMosaic/>
                <ElementMosaic/>
                <ElementMosaic/>
            </div>
            <div className="rowmosaic">
                <ElementMosaic/>
                <ElementMosaic/>
                <ElementMosaic/>
            </div>
        </div>
    )
}