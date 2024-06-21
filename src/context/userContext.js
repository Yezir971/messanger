import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import { createContext, useState, useEffect } from "react"
import { auth } from "../firebase-config"

export const UserContext = createContext()

export function UserContextProvider(props){




    const signUp = (email,pwd) => createUserWithEmailAndPassword(auth,email,pwd)
    const signIn = (email,pwd) => signInWithEmailAndPassword(auth,email,pwd)
    
    const [currentUser, setCurrentUser] = useState();
    const [loadingData, setLoadingData] = useState(true);

    useEffect(() =>{
        const pasInscrit = onAuthStateChanged(auth, (currentUser)=>{
            setCurrentUser(currentUser)
            setLoadingData(false)
        })
        return pasInscrit;
    }, [])
    // modal 
    const [modalState, setModalState] = useState({
        modalInscription: false,
        modalConnexion: true
    })

    function toggleModals(modal){
        if(modal === "connexion"){
            setModalState({
                modalInscription: false,
                modalConnexion: true 
            })
        }
        if(modal === "inscription"){
            setModalState({
                modalInscription: true,
                modalConnexion: false 
            })
        }
        if(modal === "close"){
            setModalState({
                modalInscription: false,
                modalConnexion: false 
            })
        }
    }
    return(
        <UserContext.Provider value= {{modalState, toggleModals, signUp, currentUser, signIn}} >
            {!loadingData && props.children}
        </UserContext.Provider>
    )

}
