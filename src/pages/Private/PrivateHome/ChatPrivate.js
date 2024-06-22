import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../firebase-config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import "../../../style/home.css"
import { useContext, useEffect, useRef, useState } from "react";
import { MessageContexte } from "../../../context/messageContexte";
import { addDoc, collection, getDocs, orderBy, query, where } from "firebase/firestore";

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

    const logOut = async () => {
        try {
            await signOut(auth);
            navigate('/');
        } catch (error) {
            toast.error('Nous n\'avons pas réussi à vous déconnecter, vérifier votre connexion internet et réessayer !', { position: "bottom-right" });
        }
    };

    const sendMessage = async (e) => {
        e.preventDefault();
        try {
            const user = auth.currentUser;
            if (user) {
                await addDoc(collection(db, "Messages"), {
                    message: inputRef.current[0].value,
                    user_id_send: detailUser.id,
                    user_id_recieve: userSelect,
                    id_message: detailUser.id + userSelect,
                    dateSend: Date.now()
                });

                inputRef.current[0].value = ""; // Reset input after sending message
            }
        } catch (error) {
            console.log('une erreur est survenue, veuillez vérifier votre connexion internet et actualiser la page');
        }
    };

    async function getMessages() {
        const combinedQuery = query(collection(db, "Messages"), where("id_message", "in", [detailUser.id + userSelect, userSelect + detailUser.id]), orderBy("dateSend", "desc"));
        const querySnapshot = await getDocs(combinedQuery);
        const tableMessage = [];
        querySnapshot.forEach((doc) => {
            tableMessage.push(doc.data().message);
        });
        setMessagesListe(tableMessage);
    }

    useEffect(() => {
        getMessages();
    }, [detailUser, userSelect]);

    return (
        <>
            <div className="homeBackground">
                <h1>page des chat private</h1>
                <p onClick={logOut}>déconnexion </p>
                <p onClick={() => change()}>home</p>
                <ToastContainer />
                <form ref={formRef} onSubmit={sendMessage}>
                    <input ref={addInput} type="text" />
                    <input type="submit" />
                </form>
                <ul>
                    {messagesListe.toReversed().map((doc, id) => (
                        <li key={id}>
                            {doc}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ChatPrivate;
