// selecteur pour le bouton du formulaire 
let buttonForm = document.querySelector("#validation");
// selecteur des entrée utilisateur 
let titreNote = document.querySelector("#titreNote");
let contenuNote= document.querySelector("#contenuNote");
// selecteur de la div ou l'on voudrait faire apparaitre la todolist
let affichage = document.querySelector(".toDoAffichage")

// creation d'un tableau vide pour ne pas avoir d'entrée null
var tableauSauvegarde = [];
// variable qui get les données sauvegardé
var tableauSauvegardeJSON = localStorage.getItem("sauvegarde");
// verification en entrée de page si il y a des données stocké en "storage" ou creation de tableau vide
if (tableauSauvegardeJSON != null){
    tableauSauvegarde = JSON.parse(tableauSauvegardeJSON);
    console.log("test");
}




// Grace au selecteur activation via le submit 
buttonForm.addEventListener("click",function(event){
    // if pour etre sure que les entrées soit rempli
    if(titreNote.value.length == "" || contenuNote.value.length == "" ){
        alert("veuillez remplir tous les champs")
    }else{
    // creation des elements 
    let conteneurAffichage = document.createElement("div")
    let titreNoteAffichage = document.createElement("h3");
    let contenuNoteAffichage = document.createElement("li");
    // remplissage des elements
    titreNoteAffichage.textContent = titreNote.value;
    contenuNoteAffichage.textContent = contenuNote.value;
    // affichage des elements
    affichage.append(conteneurAffichage);
    conteneurAffichage.append(titreNoteAffichage);
    conteneurAffichage.append(contenuNoteAffichage);
// rendre deplacable / draggable la div contenant les entrées utilisateur
// Pour faire un élément déplaçable, définissez l'attribut draggable sur true
    conteneurAffichage.setAttribute("draggable","true");
    
    // ajout d'un background color pour mieux visualiser les todo
    conteneurAffichage.style.backgroundColor = "yellow";
    // l'attribut ondragstart appelle une fonction, drag(évent), qui spécifie les données à faire glisser.
    conteneurAffichage.setAttribute("ondragstart","drag(event)");
    // preventdefault utiliser pour garder l'affichage
    event.preventDefault();

    // variable qui prend les entrée utilisateur en tableau 
    let sauvegardeMemo = [titreNote.value,contenuNote.value];
    // push des entrée utilisateur sur le tableau existant 
    tableauSauvegarde.push(sauvegardeMemo);
    // variable qui transforme en string le tableau en vue de le stocké en "storage"    
    let json = JSON.stringify(tableauSauvegarde);
    // Enregistrement en "storage"via le setitem(clef personnel,variable contenant le tableau mis en string)
    localStorage.setItem("sauvegarde",json);

    // attribution d'un id a la div crée par note , id egale a sa clef dans le tableau stocké , pour que les 2 est un lien
    conteneurAffichage.setAttribute("id",`${tableauSauvegarde.length-1}`);
    }
});

// Appelez preventDefault() pour éviter que navigateur fait la manipulation par défaut des données
function allowDrop(ev) {
    ev.preventDefault();
}
// Le dataTransfer.setData() dans le script et une méthode qui définit le type de données et la valeur des données glissées:
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
// Obtenir les données glissées avec la méthode dataTransfer.getData ("Texte"). 
// Cette méthode va retourner les données qui ont été fixés au même type dans la méthode setData ()
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
// pensez a mettre ces attributs dans le HTML ou l'on veut prendre / mettre les données déplacable
// ondrop="drop(event)" ondragover="allowDrop(event)"

// dans l'endroit HTML on met ondrop=deleteNote(event) pour appeler la fonction de supression ci-dessous
function deleteNote(ev){
    var data = ev.dataTransfer.getData("text");
    var el = document.getElementById(data);
    el.parentNode.removeChild(el);
}


// etape a faire :

// creer un system permettant de reaffiché ce qui est stocké a leur place respective ( switch case ?)

// verifier si certain etait en "poubelle" et ne pas les afficher






