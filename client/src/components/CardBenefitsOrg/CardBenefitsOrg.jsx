
import sembrar from "../../assets/images/sembrar.jpg"
import "../CardBenefits/CardBenefits.css"
export default function CardBenefits() {

    return(

        <div className="cardbusiness">
            
            <div className="businessbenefits">
                <h4>Principales beneficios de las Organizaciones</h4>
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                </ul>

            </div>
            <img src={sembrar} alt="Beneficios de empresa"/>
        </div>
    )
}