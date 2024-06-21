import Home from "./pages/Home";
import Private from "./pages/Private/Private";
import ChatPrivate from "./pages/Private/PrivateHome/ChatPrivate";
import HomePrivate from "./pages/Private/PrivateHome/HomePrivate";
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<Private />}>
          <Route path="/private/private-home" element={<HomePrivate />} />
          <Route path="/private/private-message" element={<ChatPrivate />} />
        </Route>        
      </Routes>
    </>
  );
}

export default App;
