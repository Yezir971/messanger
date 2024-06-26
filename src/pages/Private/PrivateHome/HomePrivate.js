import "../../../style/home.css"
import 'react-toastify/dist/ReactToastify.min.css';

import { useContext } from "react";
import Nav from "../../../components/Nav.js";
import DateT from "../../../components/DateT.js";
import Conversations from "../../../components/Conversations.js";
import { MessageContexte } from "../../../context/messageContexte.js";
import ChatPrivate from "./ChatPrivate.js";

function HomePrivate(){
    const { detailUser, allUser, navigates } = useContext(MessageContexte) 
    

    return(
        <>
            {navigates ? (
                <>
                    <ChatPrivate />
                
                </>

                
                
            ) : (
                <div className="homeBackground">
                    {detailUser    && (
                        <>

                            <Nav />
                            <DateT />
                            <h1><span className="hiStyle">Hi,</span> <span className="hiNameStyle">{detailUser.nom} {detailUser.prenom}</span></h1>
                            <h2 className="sousTitreConv">Voici les utilisateurs avec lesquels tu peux discuter !</h2>
                            <div className="containerAllUser">
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

                            </div>
                            
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
            )}
        </>
    )
}

export default HomePrivate;