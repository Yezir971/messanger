import "../style/home.css"
import Connexion from "../components/Connexion.js";
import Inscription from "../components/Inscription.js";
import { useContext } from "react";
import { UserContext } from "../context/userContext.js";
import { Navigate } from "react-router-dom";



function Home(){

    const {currentUser} = useContext(UserContext)

    return(
        <>
        {!currentUser ? (  
            
                <div className="logInscriptionBackground">
                    <Connexion />
                    <Inscription />
                </div>
             ) : (
                <Navigate to="/private/private-home" />
            )}
        </>
    )
}

export default Home;