import "../../../style/home.css"
import 'react-toastify/dist/ReactToastify.min.css';

import { auth, db } from "../../../firebase-config";
import { useEffect, useState } from "react";
import { doc, getDoc,getDocs , collection } from "firebase/firestore";
import Nav from "../../../components/Nav";
// import { ToastContainer, toast } from "react-toastify";
import DateT from "../../../components/DateT";
import Conversations from "../../../components/Conversations";
function HomePrivate(){
    const [detailUser, setDetailUser] = useState(null)
    const [allUser, setAllUser] = useState([])
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
            <div className="homeBackground">
                {detailUser    && (
                    <>

                        <Nav />
                        <DateT />
                        <h1><span className="hiStyle">Hi,</span> <span className="hiNameStyle">{detailUser.nom} {detailUser.prenom}</span></h1>
                        
                        {allUser.map((doc) => {
                            return( doc.id !== detailUser.id && (
                                <Conversations
                                    key={doc.id}
                                    nom={doc.nom}
                                    prenom={doc.prenom}
                                    
                                />
                            ))
                            
                        })}
                        
                    </>

                ) 
                // : (
                //     <>  
                //         {toast.success("Chargement...",{position:"bottom-right"})}
                //         <ToastContainer />
                //     </>
                // )
                }


            </div>

        </>
    )
}

export default HomePrivate;