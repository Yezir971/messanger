import { useNavigate } from "react-router-dom";

function HomePage(){
    const navigate = useNavigate()
    function change(direction){
        navigate(direction)

    }
    return(
        <>
            <h1>Bienvenu vous etes connecter retourner sur la page de profil <span onClick={() => change("/private/private-home")} >ici</span></h1>

        </>
    )
}

export default HomePage