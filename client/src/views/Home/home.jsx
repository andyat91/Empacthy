import CardBenefits from "../../components/CardBenefits/CardBenefits";
import CardBenefitsOrg from "../../components/CardBenefitsOrg/CardBenefitsOrg";
import Form from "../../components/Form/Form";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import "./Home.css"

export default function Home() {

    return(
        <div className=" home">
       <Jumbotron/> 

       <CardBenefits/>
       <CardBenefitsOrg/>
       <Form/>
       </div>
    )
}