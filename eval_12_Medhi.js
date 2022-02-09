// Pour voir si tout vas bien jusque ici nous allons créer un calculateur en boite de dialogue
// (une sorte de calculatrice simplifiée).
// Objectif :
// - Demandez de faire un choix entre addition – soustraction – multiplication – division
// - Indice : pour un retour à la ligne « \n » tant que l’utilisateur ne choisis pas une des quatre
// proposition il serait bien de répéter la question.
// - Demandez de rentrer un nombre, puis un deuxieme
// - Indice : Répéter la demande si un nombre n’est pas rentré, je vous laisse chercher la
// fonction qui permet de checker cela.
// - Crée 4 fonctions correspond aux 4 méthodes de calculs
// - Selon le choix de l’utilisateur appelé la fonction correspondante
// - Affichez le résultat isNaN
// - Proposez à l’utilisateur de recommencer \n\n
function addition(a,b){
    let result1 ;
    result1 =a+b;
    return(result1);
}

function soustraction(a,b){
    let result2 ;
    result2 =a-b;
    return(result2);
}

function multiplication(a,b){
    let result3 ;
    result3 =a*b;
    return(result3)
}

function division(a,b){
    let result4 ;
    result4 =a/b;
    return(result4)
}
function calculatrice(){
    var a;
    while (isNaN(a) || a === undefined){
        a=prompt("veuillez rentrer una premier nombre");
    }
    var b;
    while (isNaN(b) || b === undefined){
        b=prompt("veuillez rentrer un deuxieme nombre");
    }
    b=parseInt(b)
    a=parseInt(a)

    var choix=prompt("addition \n soustraction \n multiplication \n division");
    switch (choix.toLowerCase()){
        case "addition" : alert(addition(a,b))
        break;
        case "soustraction" : alert(soustraction(a,b))
        break;
        case "multiplication" : alert(multiplication(a,b))
        break;
        case "division" : alert(division(a,b))
        break;
        default : alert("votre entrée est incorrect")  
    }
}

calculatrice()

recommencer = prompt("on recommence ?")
if (recommencer === true){
    calculatrice()
}else{
    prompt("au revoir")
}

