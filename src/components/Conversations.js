import "../style/conversations.css"

import { useNavigate } from "react-router-dom";

function Conversations({ nom, prenom}){
    const navigate = useNavigate()
    function change(){
        navigate("/private/private-message")
    }
    


    return(
        <div className="vignetteUser">  
            <i className="fa-solid fa-circle-user"></i>
            <div>
                <p onClick={() => change()}>{nom} {prenom} </p>

            </div>
        </div>
    )
}

export default Conversations;