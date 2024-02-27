import empresa from "../../assets/images/empresa.jpg"
import "./CardBenefits.css"
export default function CardBenefits() {

    return(

        <div className="cardbusiness wrap">
            <img src={empresa} alt="Beneficios de empresa"/>
            <div className="businessbenefits">
                <h4>Principales beneficios de las empresas</h4>
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                </ul>

            </div>
        </div>
    )
}