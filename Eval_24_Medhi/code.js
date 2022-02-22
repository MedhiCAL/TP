let inputext = document.querySelector('.prix');
let inputbuton = document.querySelector('.btn');
let affichage = document.querySelector('p');
let counter = 0;
let randNumb = Math.floor(Math.random()*1000);


inputbuton.addEventListener("click",verification);

function verification(){
    let usernb =inputext.value;
    if(isNaN(usernb)){
        affichage.textContent ="il faut rentrer un chiffre!";
    }else if(usernb<0){
        affichage.textContent ="pas besoin d'aller endessous de 0 !";
    }else if(usernb>1000){
        affichage.textContent ="pas besoin d'aller audessus de 1000 !";
    }else{
        counter ++;
        if(usernb<randNumb){
            affichage.textContent ="c'est plus !";
        }else if (usernb>randNumb){
            affichage.textContent ="c'est moin !";
        }else{
            affichage.textContent ="gagné ! en " + counter + " coups!";
    }
}
inputext.value =" ";
}



