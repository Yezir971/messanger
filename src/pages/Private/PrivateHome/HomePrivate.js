import "../../../style/home.css"
import 'react-toastify/dist/ReactToastify.min.css';

import { useContext } from "react";
import Nav from "../../../components/Nav";
import DateT from "../../../components/DateT";
import Conversations from "../../../components/Conversations";
import { MessageContexte } from "../../../context/messageContexte";

function HomePrivate(){
    const { detailUser, allUser } = useContext(MessageContexte) 
 

    return(
        <>
            <div className="homeBackground">
                {detailUser    && (
                    <>

                        <Nav />
                        <DateT />
                        <h1><span className="hiStyle">Hi,</span> <span className="hiNameStyle">{detailUser.nom} {detailUser.prenom}</span></h1>
                        <h2 className="sousTitreConv">Voici les utilisateurs avec qui tu peux discuter !</h2>
                        {allUser.map((doc) => {
                            return( doc.id !== detailUser.id && (
                                <Conversations
                                    key={doc.id}
                                    nom={doc.nom}
                                    prenom={doc.prenom}
                                    id = {doc.id}
                                    
                                    
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