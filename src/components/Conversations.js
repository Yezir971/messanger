import { useContext } from "react";
import "../style/conversations.css"

import { useNavigate } from "react-router-dom";
import { MessageContexte } from "../context/messageContexte";

function Conversations({ nom, prenom, id}){
    const { setUserSelect } = useContext(MessageContexte)
    const navigate = useNavigate()
    function change(){
        setUserSelect({
            "id": id,
            "nom": nom,
            "prenom":prenom
        })
        navigate("/private/private-message")
    }
    


    return(
        <div className="vignetteUser">  
            <i className="fa-solid fa-circle-user"></i>
            <div className="containerNomPrenomVignetteUser">
                <p onClick={() => change()}>{nom} {prenom} </p>
            </div>
        </div>
    )
}

export default Conversations;