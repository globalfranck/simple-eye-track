console.log("Running the eyes !");
let pupille = document.getElementsByClassName("pupille")
let coordinate = document.getElementById("texte_coordonnes");


/* Chaque mouvement de la souris, entraine l'appel de la fonction onmousemove qui récupéère les coordonnés de la souris (position navigateur).
x représente la coordonnée horizontale (abscisse) proportionnellement à la largeur de la fenetre du navigateur
y représente la coordonnée verticale (ordonnée) proportionnellement à la hauteur de la fenetre du navigateur
*/ 


document.onmousemove = function(){
    let x = event.clientX * 100 / window.innerWidth;
    let y = event.clientY * 100 / window.innerHeight;

    /* Affichage en temps réel des coordonnées X et Y */
    let coordonnes_x = Math.round(x);
    let coordonnes_y = Math.round(y);
    coordinate.textContent = "X : " + coordonnes_x + ", Y :  " + coordonnes_y;

    /* x et y doivent être en pourcentage pour le CSS */
    x = x + "%"
    y = y + "%"
  
    /* Amélioration du suivi des pupilles, translation inversé pour recentrer les pupilles */
    for(let i = 0 ; i < pupille.length ; i++) {
        pupille[i].style.left = x ;
        pupille[i].style.top = y ;
        pupille[i].style.transform = "translate(-"+x+",-"+y+")";
    }

}