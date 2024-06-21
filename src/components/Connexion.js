import logo from "../img/logo-taille-reel-cat.svg"
import { useContext, useRef } from "react"
import { UserContext } from "../context/userContext"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import "../style/loginSign.css"

function Connexion(){
    const { modalState, toggleModals, signIn } = useContext(UserContext)
    const navigate = useNavigate()

    function toggle(event){
        document.documentElement.style.overflow = 'hidden';
        toggleModals(event)

    }
    const inputs = useRef([])
    const formRef = useRef();
    const addInputs = el => {
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el)
        }

    }
    const infoFormulaire = async (e) =>{
        e.preventDefault()
        try {
            const creed = await signIn(
                inputs.current[0].value,
                inputs.current[1].value
            )
            console.log(creed)
            formRef.current.reset();
            navigate("/private/private-home")
            
            
        } catch {
            toast.error("Mot de passe incorrect", {position:"bottom-right"})

            
        }
    }


    return(modalState.modalConnexion && 
        <>
            <ToastContainer />
            <div className="containermodalC">
                
            
                <div className="containerLogo">
                    <img className="logoSite" src={logo} alt="logo chat me"/>
                </div>
                <div className="containerLoginSign">
                    <h1 className="titrePages">Connexion</h1>
                    <form ref={formRef} onSubmit={infoFormulaire}>
                        <div className="inputComponent">
                            <label htmlFor="mail">Email</label>
                            <input ref={addInputs} id="mail" placeholder="Votre mail ici" type="email" />
                        </div>
                        <div className="inputComponent">
                            <label htmlFor="mdp">Mot de passe</label>
                            <input ref={addInputs} id="mdp" placeholder="Votre mot de passe ici" type="password" />
                        </div>


                        <input className="inputSubmit" type="submit" value={"connexion"}/>
                    </form>
                    <p className="texteSwitch">Pas de compte, <span onClick={()=> toggle("inscription")} >inscrivez-vous</span></p>
                </div>
            </div>
            
            
        
        </>
    )
}

export default Connexion