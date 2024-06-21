import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase-config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import "../../../style/home.css"

function ChatPrivate(){
    const navigate = useNavigate()
    function change(){
        navigate("/private/private-home")
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
            <h1>page des chat private</h1>
            <p onClick={logOut}>déconnexion </p>
            <p onClick={() => change()} >home</p>
            <ToastContainer />
        </>
    )
}
export default ChatPrivate