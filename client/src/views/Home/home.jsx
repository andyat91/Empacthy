import CardBenefits from "../../components/CardBenefits/CardBenefits";
import CardBenefitsOrg from "../../components/CardBenefitsOrg/CardBenefitsOrg";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import Mosaic from "../../components/Mosaic/Mosaic";
import "./Home.css"

export default function Home() {

    return(
        <div className="wrap home">
       <Jumbotron/> 
       <Mosaic/>
       <CardBenefits/>
       <CardBenefitsOrg/>
       </div>
    )
}