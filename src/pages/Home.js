import Connexion from "../components/Connexion";
import Inscription from "../components/Inscription";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import "../style/home.css"
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