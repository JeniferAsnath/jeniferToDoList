// // Je récupère le cookie portant le nom "prenom"
// var cookie = getCookie("idUser");

// // Je regarde si la variable cookie est vide ou null
// if(cookie == "" || cookie == null || cookie == "null") {
//     // Si oui, je demande à la personne d'entrer son nom
//    let nom = prompt("entrez votre nom ?");
//    let prenom = prompt("entrez votre prenom ?");
//    let idUser = nom + prenom
    
//     // Vu qu'aucun cookie n'existe, je le cré
//     // Et je le fais expiré dans 7 jours
//     setCookie("idUser", idUser, 7);
// } else {
//     // Si non, je lui dis bonjour
//     alert("Bonjour " + cookie);
// }

// // Je demande si l'on veut que je supprime le cookie
// if(confirm("Voulez vous supprimer le cookie ?")) {
//     delCookie("idUser");
// }

let p = document.getElementById("visites")
if(typeof localStorage!='undefined') {
    // Récupération de la valeur dans web storage
    var nbvisites = localStorage.getItem('visites');
    // Vérification de la présence du compteur
    if(nbvisites!=null) {
      // Si oui, on convertit en nombre entier la chaîne de texte qui fut stockée
      nbvisites = parseInt(nbvisites);
    } else {
      nbvisites = 1;
    }
// Incrémentation
nbvisites++;
// Stockage à nouveau en attendant la prochaine visite...
localStorage.setItem('visites',nbvisites);
// Affichage dans la page
document.getElementById('visites').innerHTML = nbvisites;
} else {
alert("localStorage n'est pas supporté");
}

