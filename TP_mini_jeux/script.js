class Personnage{
    constructor(pseudo,classe,santé,attaque,niveau = 1){
        this.pseudo = pseudo;
        this.classe = classe;
        this.santé = santé;
        this.attaque = attaque ;
        this.niveau = niveau ;
    }
    evoluer(){
        this.niveau ++;
        console.log('vous avez pris 1 niveau supplementaire vous etes niveau '+this.niveau)
    }
    verifsanté(){
        if (this.santé<=0){
            this.santé == 0;
            console.log(this.pseudo + " a perdu !")
        }else{
            console.log(this.pseudo+ " a actuellement  "+ this.santé + " pts de vie")
        }
    }
    get information(){
        return this.pseudo + " "+ this.classe +" a "+ this.santé+" points de vie et est au niveau "+this.niveau;
    }
}

// let momo = new Personnage("momo","guerrier","100","épee40",1)

class Magicien extends Personnage{
    constructor(pseudo,classe,santé,attaque,niveau){
    super(pseudo,"magicien",170,90,niveau)
}
attaquer(enemi){
    enemi.santé -= this.attaque;
    console.log(this.pseudo+" attaque " +enemi.pseudo+" en lancant le sort de feu "+this.attaque+" pts de degats");
    this.evoluer();
    enemi.verifsanté();
}
coupsecial(enemi){
    enemi.santé -= this.attaque*5;
    console.log(this.pseudo+" attaque avec son coup spécial puissance des arcanes " +enemi.pseudo+ " de "+this.attaque*5+ " dégâts")
    this.evoluer();
    enemi.verifsanté();
}
}
// let momo2 = new Magicien("momo2",)

class Guerrier extends Personnage{
    constructor(pseudo,classe,santé,attaque,niveau){
        super(pseudo,"guerrier",350,50,niveau)
}
attaquer(enemi){
    enemi.santé -= this.attaque;
    console.log(this.pseudo+" attaque " +enemi.pseudo+" avec son épée "+this.attaque+" pts de degats");
    this.evoluer();
    enemi.verifsanté();  
}
coupsecial(enemi){
    enemi.santé -= this.attaque*5;
    console.log(this.pseudo+" attaque avec son coup spécial haches de guerre " +enemi.pseudo+ " de "+this.attaque*5+ " dégâts")
    this.evoluer();
    enemi.verifsanté();
}
}

let aragorn = new Guerrier("Aragorn")
let gandalf = new Magicien("Gandalf")

console.log(aragorn.information);
console.log(gandalf.information);
gandalf.attaquer(aragorn);
console.log(aragorn.information);
aragorn.attaquer(gandalf);
console.log(gandalf.information);
gandalf.coupsecial(aragorn);
