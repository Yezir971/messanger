import { signOut } from "firebase/auth";
import logo from "../img/logo-taille-reel-cat1.svg"
import { auth } from "../firebase-config";
import { toast, ToastContainer } from "react-toastify";
import {  useNavigate } from "react-router-dom";
import "../style/nav.css"




function Nav(){
    const navigate = useNavigate()
    const logout = async ()=>{
        try {
            await signOut(auth)
            navigate('/')

            
        } catch (error) {
            toast.error('Nous n\'avons pas réussi à vous déconnecter, vérifier votre connexion internet et réessayer !', {position:"bottom-right"} )
            
        }

    }
    return(
        <>
            <div className="navBar">
                <img src={logo} alt="logo site" />
                <i onClick={() => logout()}  className="fa-solid fa-right-from-bracket" style={{color: "#f70808"}}></i>

            </div>

            <ToastContainer containerId="error" position="bottom-right"/>
            <ToastContainer containerId="succes" position="bottom-right"/>
            

        </>
    )
}

export default Nav;