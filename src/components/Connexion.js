import logo from "../img/logo-taille-reel-cat.svg"
import { useContext, useRef, useState } from "react"
import { UserContext } from "../context/userContext.js"
// import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import "../style/loginSign.css"

function Connexion(){
    const { modalState, toggleModals, signIn } = useContext(UserContext)
    // const navigate = useNavigate()
    const [ hiddenMdpConnexion, setHiddenMdpConnexion ] = useState(true)


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
        let errors=0
        for(let i =0; i<2; i++){
            if(inputs.current[i].value.trim() === "" || inputs.current[i].value === null  ){
                switch (i) {
                    case 0:
                        toast.error("Le champ Email est vide", { containerId:"error"})
                        errors++
                        break;
                    case 1:
                        toast.error("Le champ mot de passe est vide", { containerId: "error"})  
                        errors++
                        break ;
                    default:
                     
                }                       
            }
        }
        if(errors !==0){
            return
        }
        try {
            const creed = await signIn(
                inputs.current[0].value,
                inputs.current[1].value
            )
            
            console.log(creed)
            setTimeout(() => {

                toast.success("Heureux de vous revoir !", {containerId:"succes"})
            }, "1000");
            // navigate("/private/private-home")
            
            
        } catch {
            toast.error("Mot de passe incorrect", {containerId:"error"})

            
        }
    }


    return(modalState.modalConnexion && 
        <>
            <ToastContainer containerId="error" position="bottom-right" />
            <ToastContainer containerId="error" position="bottom-right" />
            <ToastContainer containerId="succes" position="bottom-right"/>

            <div className="containermodalC">
                
            
                <div className="containerLogo">
                    <img className="logoSite" src={logo} alt="logo chat me"/>
                </div>
                <div className="containerLoginSign">
                    <h1 className="titrePages">Connexion</h1>
                    <form className="formulaire" ref={formRef} onSubmit={infoFormulaire}>
                        <div className="inputComponent">
                            <label htmlFor="mail">Email</label>
                            <input ref={addInputs} id="mail" placeholder="Votre mail ici" type="email" />
                        </div>
                            <div className="inputComponent">
                                <label htmlFor="mdp">Mot de passe</label>
                                {hiddenMdpConnexion ? (
                                <div className="containerinputEye">
                                    <input ref={addInputs} id="mdp" placeholder="Votre mot de passe ici" type="password" />
                                    <i onClick={() => { setHiddenMdpConnexion(false)}} className="fa-solid fa-eye"></i>
                                </div>

                                ) : (
                                <div className="containerinputEye">
                                    <input ref={addInputs} id="mdp" placeholder="Votre mot de passe ici" type="text" />
                                    <i onClick={() => { setHiddenMdpConnexion(true)}} className="fa-solid fa-eye-slash"></i>
                                </div>

                                )}
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