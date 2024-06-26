import { useContext } from "react";
import "../style/conversations.css"

// import { useNavigate } from "react-router-dom";
import { MessageContexte } from "../context/messageContexte.js";


function Conversations({ nom, prenom, id}){
    const { setUserSelect , userSelect, setNavigates } = useContext(MessageContexte)
    // const navigate = useNavigate()
    function change(){
        setUserSelect({
            "id": id,
            "nom": nom,
            "prenom":prenom
        })
        setNavigates(true)
        // navigate("/private/private-message")
    }
    
    console.log(userSelect.id !== undefined )

    return(
        <>

                <div onClick={() => change()} className="vignetteUser">  
                    <i className="fa-solid fa-circle-user"></i>
                    <div className="containerNomPrenomVignetteUser">
                        <p >{nom} {prenom} </p>
                    </div>
                </div>

            


            
        
        </>
    )
}

export default Conversations;