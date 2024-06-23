import { useContext, useRef } from "react"
import { UserContext } from "../context/userContext"
import { auth, db } from "../firebase-config"
import { setDoc, doc } from "firebase/firestore"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useNavigate } from "react-router-dom"
import "../style/loginSign.css"


function Inscription(){
    const { modalState, toggleModals, signUp } = useContext(UserContext)
    const navigate = useNavigate()



    const toggle = event =>{
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
        let errors =0;
        for(let i =0; i<5; i++){
            if(inputs.current[i].value.trim() === ""){
                switch (i) {
                    case 0:
                        toast.error("Le champ nom est vide", { containerId:"error"})
                        break ;                        

                        
                        
                
                    case 1:
                        toast.error("Le champ prénom est vide", { containerId: "error"})
                        
                        break ;                        

                        
                
                    case 2:
                        toast.error("Le champ email est vide.", { containerId:"error"})
                        break ;                        


                        
                
                    case 3:
                        toast.error("Le champ mot de passe est vide.", { containerId:"error"})
                        break ;                        

                        
                        
                
                    case 4:
                        toast.error("Le champ mot de passe de confirmation est vide.", { containerId:"error"})
                        break ; 
                    default:
                                           
                }
            }
        }
        if(errors !==0){
            return
        }
        if(inputs.current[3].value.length <= 6 || inputs.current[4].value.length <= 6 ){
            toast.error("Le mot de passe doit faire minimum 6 caractères.", { containerId:"error"})
            return
        }
        if(inputs.current[3].value !== inputs.current[4].value){
            toast.error("Le mot de passe de confirmation est différent du mot de passe.", {containerId:"error"})
            return
        }


        try {
            const creed = await signUp(
                inputs.current[2].value,
                inputs.current[3].value
            )
            console.log(creed)
            const user = auth.currentUser;
            if(user){
                await setDoc(doc(db, "Users", user.uid), {
                    email:user.email,
                    nom: inputs.current[0].value,
                    prenom: inputs.current[1].value,
                    id: user.uid
                })
            }
            // toast.success("Inscription réussi !", {position:"bottom-right"})

            toast.success("Votre compte a été crée avec succès !", {containerId:"succes"})
            navigate("/private/private-home")
            
            
            
        } catch (error) {
            toast.error(error.message, {containerId:"error"})
        }
    }

    return(modalState.modalInscription &&
        <>
            <ToastContainer containerId="error" position="bottom-right" />
            <ToastContainer containerId="error" position="bottom-right"/>
            <ToastContainer containerId="error"position="bottom-right" />
            <ToastContainer containerId="error" position="bottom-right"/>
            <ToastContainer containerId="error" position="bottom-right"/>
            <ToastContainer containerId="error" position="bottom-right"/>
            <ToastContainer containerId="error" position="bottom-right"/>
            <ToastContainer containerId="error" position="bottom-right"/>
            <ToastContainer containerId="succes" position="bottom-right"/>
            <div  className="containermodalI" >
                <h1 className="titreinscription">Inscription</h1>
                <div className="containerLoginSign">
                    <form ref={formRef} onSubmit={infoFormulaire}>
                        <div className="formulaire inputComponent">
                            <label htmlFor="nom">Nom</label>
                            <input 
                            ref={addInputs}
                            id="nom" 
                            placeholder="Votre nom ici" 
                            type="text" />
                        </div>

                        <div className="inputComponent">
                            <label htmlFor="prenom">Prénom</label>
                            <input 
                            ref={addInputs}
                            id="prenom" 
                            placeholder="Votre prénom ici" 
                            type="text" />
                        </div>
        

                        <div className="inputComponent">
                            <label htmlFor="mail">Email</label>
                            <input 
                            ref={addInputs}
                            id="mail" 
                            placeholder="Votre mail ici" 
                            type="email" />
                        </div>

                        <div className="inputComponent">
                            <label htmlFor="mdp">Mot de passe</label>
                            <input 
                            ref={addInputs}
                            id="mdp" 
                            placeholder="Votre mot de passe ici" 
                            type="password" />
                        </div>

                        <div className="inputComponent">
                            <label htmlFor="confirmMdp">Confirmez votre mot de passe</label>
                            <input 
                            ref={addInputs}
                            id="confirmMdp" 
                            placeholder="Confirmez votre motre mot de passe ici" 
                            type="password" />
                        </div>

                        <input className="inputSubmit" type="submit" value={"connexion"}/>
                    </form>
                    <p className="texteSwitch">Déjà un compte, <span onClick={()=>toggle("connexion") } >connectez-vous</span></p>


                </div> 
            </div>


        </>
    )
}

export default Inscription