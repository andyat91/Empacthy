import CompanyInformation from "../../components/CompanyInformation/CompanyInformation";
import UserInformation from "../../components/UserInformation/UserInformation";
import "./CompanyHome.css"


export default function CompanyHome() {




    return(

        <div className="companyhome wrap">
        <CompanyInformation />
        <UserInformation/>
        </div>
    )
}