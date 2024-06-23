import "../../../style/message.css";
import "../../../style/home.css"
import 'react-toastify/dist/ReactToastify.min.css';

import { auth, dataBase } from "../../../firebase-config";
import {   onValue, push, ref, set } from "firebase/database";


import { Navigate, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { MessageContexte } from "../../../context/messageContexte";

function ChatPrivate() {
    const inputRef = useRef([]);
    const formRef = useRef();
    const { detailUser, userSelect } = useContext(MessageContexte);
    const [messagesListe, setMessagesListe] = useState([]);
    const navigate = useNavigate();

    const addInput = el => {
        if (el && !inputRef.current.includes(el)) {
            inputRef.current.push(el);
        }
    };

    function change() {
        navigate("/private/private-home");
    }



    const sendMessage = async (e) => {
        e.preventDefault();
        try {
            const user = auth.currentUser;
            if (user) {
                const messageRef = ref(dataBase, 'Messages')
                const newMessageRef = push(messageRef)
                set(newMessageRef, {
                    message: inputRef.current[0].value,
                    id_message: detailUser.id + userSelect.id,
                    dateSend: Date.now()
                });

                inputRef.current[0].value = ""; // Reset le formulaire après avoir envoyer le message
            }
        } catch (error) {
            console.log('une erreur est survenue, veuillez vérifier votre connexion internet et actualiser la page');
        }
    };

    useEffect(() => {
        const messageRef = ref(dataBase, "Messages");
        const unsubscribe = onValue(messageRef, (snapshot) => {
            if (snapshot.exists()) {
                const messageArray = Object.entries(snapshot.val()).map(([id, data]) => ({
                    id,
                    ...data,
                }));
                setMessagesListe(messageArray);
            } else {
                console.log("Aucune data a été récupérée !");
            }
        });

        return () => unsubscribe(); // Clean up the listener on component unmount, merci chatgpt pour la ligne 100, sans elle mon code marche pas <3
    }, []);
    const convertTime = (unixTimestamp) => {
        const date = new Date(unixTimestamp);
        return date.toLocaleString();
    }
    return (userSelect.length !== 0 ? (
        <>
            <div className="homeBackground">
                <h1>{userSelect.nom} {userSelect.prenom}</h1>
                <i onClick={() => change()} className="fa-solid fa-arrow-left"></i>

                <ul>
                    {messagesListe.map((doc, id) => (
                        (((doc.id_message.substr(0,28) === detailUser.id || doc.id_message.substr(0,28) === userSelect.id) && ( doc.id_message.substr(28) === detailUser.id || doc.id_message.substr(28) === userSelect.id )  ) && (
                            (doc.id_message === detailUser.id + userSelect.id ? (
                                
                                <li className="blue" key={id}>
                                    <p className="dateBlue">{ convertTime(doc.dateSend) }</p>
                                    <span className="bule1">{doc.message}</span>
                                </li>

                            ) : (

                                <li className="black" key={id}>
                                    <i className="fa-solid fa-circle-user"></i>
                                    <span className="bule2">{doc.message}</span>
                                    <p className="dateBlack">{ convertTime(doc.dateSend) }</p>

                                </li>
                            ))
                        )) 
                    ))}
                </ul>
                <div className="containerFormulaire">
                    <form className="formulaireMessage" ref={formRef} onSubmit={sendMessage}>
                        <i className="fa-solid fa-circle-user logoFormulaire"></i>

                        <input className="inputTypeTextMessage" ref={addInput} type="text" placeholder="Votre messsage"/>
                        <button className="buttonSubmitMessage" type="submit">
                            <i className="fa-solid fa-paper-plane" style={{color: "#3639cf"}}></i>
                        </button>
                    </form>

                </div>
            </div>
        </>
        ) : (
            <>
                <h1>connard tu as casser mon app !</h1>
                <Navigate to="/private/private-home" />
            </>
        )
    );
}

export default ChatPrivate;
