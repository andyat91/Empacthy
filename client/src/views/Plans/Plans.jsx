import PlanExplanation from "../../components/PlanExplanation/PlanExplanation"
import "./Plan.css"
import { useAuthContext } from "../../context/AuthContext"
import PaymentForm from "../../components/PaymentForm/PaymentForm"
import Form from "../../components/Form/Form"


export default function Plans() {

   
    const { user,updateUser } = useAuthContext()



function onPlanChange(newPlan) {
    const updatedUser = { ...user, plan: newPlan };
    updateUser(updatedUser);
  }


    return(
        <div id="plans" className="wrap">
            <div className="currentplan">
            <h3>Tu plan actual  </h3>
            <h5 id="currentplanselected">
            {user.plan == 0 ? "Empacthy Community":
                                    user.plan == 1 ? "Empacthy Transcendent": "Empacthy Universe"} </h5>
        </div>
        
        <PlanExplanation/>
        
        <PaymentForm onPlanChange={onPlanChange} />
        <Form/>
        </div>
    )
}