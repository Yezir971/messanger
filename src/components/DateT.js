import "../style/date.css"


function DateT(){
    let nDate = new Date()

    let jour = "";
    switch (nDate.getDay()) {
        case 1:
            jour = "Lundi"
            break;
        case 2:
            jour = "Mardi"
            break;
        case 3:
            jour = "Mercredi"
            break;
        case 4:
            jour = "Jeudi"
            break;
        case 5:
            jour = "Vendredi"
            break;
        case 6:
            jour = "Samedi"
            break;
        case 0:
            jour = "Dimanche"
            break;
        default:
            break;
    }

// prédéfinir le nom des mois 
    let mois = "";
    switch (nDate.getMonth()) {
        case 0:
            mois = "Janvier"
            break;
        case 1:
            mois = "Février"
            break;
        case 2:
            mois = "Mars"
            break;
        case 3:
            mois = "Avril"
            break;
        case 4:
            mois = "Mai"
            break;
        case 5:
            mois = "Juin"
            break;
        case 6:
            mois = "Juillet"
            break;
        case 7:
            mois = "Août"
            break;
        case 8:
            mois = "Septembre"
            break;
        case 9:
            mois = "Octobre"
            break;
        case 10:
            mois = "Novembre"
            break;
        case 11:
            mois = "Décembre"
            break;
        default:
            break;
    }

    return(
        <div>
            <p className="date">{jour} {nDate.getDate()} {mois} { nDate.getFullYear()}</p>
        
        </div>
    )
}

export default DateT;