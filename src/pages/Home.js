import HomePrivate from "./Private/PrivateHome/HomePrivate";
import Connexion from "../components/Connexion";
import Inscription from "../components/Inscription";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import "../style/home.css"



function Home(){

    const {currentUser} = useContext(UserContext)
    console.log(currentUser)

    return(
        <>
        {!currentUser ? (  
            
                <div className="logInscriptionBackground">
                    <Connexion />
                    <Inscription />
                </div>
             ) : (
                <div className="homeBackground">
                    <HomePrivate />
                </div>
            )}
        </>
    )
}

export default Home;