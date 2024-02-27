import CardBenefits from "../../components/CardBenefits/CardBenefits";
import CardBenefitsOrg from "../../components/CardBenefitsOrg/CardBenefitsOrg";
import Form from "../../components/Form/Form";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import Mosaic from "../../components/Mosaic/Mosaic";
import "./Home.css"

export default function Home() {

    return(
        <div className=" home">
       <Jumbotron/> 
       <Mosaic/>
       <CardBenefits/>
       <CardBenefitsOrg/>
       <Form/>
       </div>
    )
}