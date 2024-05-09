//Cette fonction affiche la popup pour partager son score.

function afficherPopup(){
    let popupBackground = document.querySelector(".popupBackground")
    //La popup est masquée par défaut (display:none), ajouter la classe "active"
    // va changer son display et la rendre visible.
    popupBackground.classList.add("active")
}

//Cette fonction cache la popup pour partager son score.
function cacherPopup(){
    let popupBackground = document.querySelector(".popupBackground")
    // La popup est masquée par défaut (display:none), supprimer la classe "active"
    // va rétablir cet affichage par défaut. 
    popupBackground.classList.remove("active")
}


//Cette fonction initialise les écouteurs d'événements qui concernent l'affichage de la popup.
function initAddEventListenerPopup(){
     let btnPartage = document.querySelector(".zonePartage button")
     let popupBackground = document.querySelector(".popupBackground")

     // Quand on a cliqué sur le bouton partagé, on affiche la popup
     btnPartage.addEventListener("click", () => {
        afficherPopup()
     })

     btnPartage.addEventListener("click", (event) =>{
         // Si on a cliqué précisément sur la popupBackground 
        // (et pas un autre élément qui se trouve dedant)
        if(event.target === popupBackground)
            cacherPopup()
     })

}