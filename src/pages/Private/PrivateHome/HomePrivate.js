import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase-config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import "../../../style/home.css"
function HomePrivate(){
    const navigate = useNavigate()
    function change(){
        navigate("/private/private-message")
    }
    const logOut = async () => {
        try {
            await signOut(auth)
            navigate('/')
        } catch (error) {
            toast.error('Nous n\'avons pas réussi à vous déconnecter, vérifier votre connexion internet et réessayer !', {position:"bottom-right"} )

            
        }
    }
    return(
        <>
            <h1>Hi, tu es sur la page HomePrivate!</h1>
            <p onClick={logOut}>déconnexion </p>
            <p onClick={() => change() } >chat</p>
            <ToastContainer />
        </>
    )
}

export default HomePrivate;