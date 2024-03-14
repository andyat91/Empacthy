import PlanExplanation from "../../components/PlanExplanation/PlanExplanation"
import "./Plan.css"
import { useAuthContext } from "../../context/AuthContext"
export default function Plans() {

const { user } = useAuthContext()
    return(
        <div id="plans" className="wrap">
            <div className="currentplan">
            <h4>Tu plan actual es: </h4>
            <h4 id="currentplanselected">
            {user.plan == 0 ? "Empacthy Community":
                                    user.plan == 1 ? "Empacthy Transcendent": "Empacthy Universe"} </h4>
        </div>
        <h5>Estos son nuestros planes:</h5>
        <PlanExplanation/>
        </div>
    )
}