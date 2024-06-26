import { useContext } from "react"
import { UserContext } from "../../context/userContext.js"
// import { Outlet, useLocation, Navigate } from "react-router-dom"
import { Outlet, Navigate } from "react-router-dom"

// Outlet nnous permet de montrer des routes imbriquer 
// useLocation nous permet d'avoir des informations sur la localisation 
// Navigate nous permet de naviguer  
function Private(){
    const {currentUser} = useContext(UserContext)

    if(!currentUser){
        return <Navigate to="/messanger" />
        // return <Navigate to="/" />
    }
    
    return(
        <>
            <Outlet />        
        
        </>
    )

}

export default Private