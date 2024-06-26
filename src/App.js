import "./style/home.css"

// import Private from "./pages/Private/Private.js";
import HomePrivate from "./pages/Private/PrivateHome/HomePrivate.js";
// import {Navigate, Route, Routes} from "react-router-dom"
// import Home from "./pages/Home.js";
import Connexion from "./components/Connexion.js";
import Inscription from "./components/Inscription.js";
import { UserContext } from "./context/userContext.js";
import { useContext } from "react";

function App() {
  const {currentUser} = useContext(UserContext)

  return (
    <>
      {!currentUser ? (  
            
        <div className="logInscriptionBackground">
            <Inscription />
            <Connexion />
        </div>
        ) : (
          <>
            <HomePrivate />
          </>
      )}

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="private" element={<Private />}>
          <Route path="private/private-home" element={<HomePrivate />} />
          <Route path="private/private-message" element={<ChatPrivate />} />
        </Route>        
      </Routes> */}
    </>
  );
}

export default App;
