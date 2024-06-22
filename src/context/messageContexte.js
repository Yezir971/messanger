import { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase-config";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export const MessageContexte = createContext()


export function MessageContexteProvider(props){


    const [detailUser, setDetailUser] = useState(null)
    const [allUser, setAllUser] = useState([])
    const [userSelect, setUserSelect] = useState('')
    const informationUser = async () => {
        auth.onAuthStateChanged(async (user) => {
            if(user){
                const docRef = doc(db, "Users", user.uid)
                const captureDoc = await getDoc(docRef)
                if(captureDoc.exists()  ){
                    setDetailUser(captureDoc.data())
                }else{
                    console.log("utilisatuer non logger")
                }
                const querySnapshot = await getDocs(collection(db, "Users"));
                setAllUser(querySnapshot.docs.map(doc => 
                    doc.data()
                    
                )); 
            }
        });
    };
    useEffect(() => {
        informationUser()
    }, [])

    return(
        <>
            <MessageContexte.Provider value={{ detailUser, allUser,userSelect, setUserSelect }}>
                {props.children}
            </MessageContexte.Provider>


        
        
        
        </>
    )
}