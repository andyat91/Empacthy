import "./Mosaic.css"



export default function Mosaic() {

    return(

        <div className="mosaic">
            <div className="rowmosaic">
                <div className="mosaicgeneric">
                    Mosaico 1
                    </div>
                <div className="mosaicgeneric">Mosaico 2</div>
                <div className="mosaicgeneric">Mosaico 3</div>
            </div>
            <div className="rowmosaic">
                <div className="mosaicgeneric">Mosaico 4</div>
                <div className="mosaicgeneric">Mosaico 5</div>
                <div className="mosaicgeneric">Mosaico 6</div>
            </div>
            <div className="rowmosaic">
                <div className="mosaicgeneric">Mosaico 7</div>
                <div className="mosaicgeneric">Mosaico 8</div>
                <div className="mosaicgeneric">Mosaico 9</div>
            </div>
        </div>
    )
}