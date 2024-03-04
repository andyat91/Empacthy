
import { Link } from "react-router-dom"
import "./CompanyHome.css"
import { useAuthContext } from "../../context/AuthContext"
import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import { host } from "../../const/host";


export default function CompanyHome() {

const { user } = useAuthContext();
const [infoMatch, setInfoMatch] = useState([]);


useEffect(()=> {

    let id= user.id;

    async function Match() {

        try {
           
            const response = await fetch(`${host}/data/match/${id}`);
            const infoMatch =  await response.json();
            setInfoMatch(infoMatch);

        } catch (error) {
            toast.error(error)
        }
    }
    Match()

},[user])

    return(

        <div className="companyhome wrap">

         
            <div className="">
                <h4>Mis Matches</h4>
                {infoMatch.map((match)=> (   
                <div className="matchorg" key={match.id}>
                    <p>{match.denominacion} </p>
                    <p>{match.causas} </p>
                    <p>{match.causas} </p>
                    <p>{match.causas} </p>
                </div>
                ))}
            </div>
            <Link to="/perfil">Perfil</Link>
        </div>
    )
}