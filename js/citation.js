"use strict";

/* Générateur de citation */


//Class

//It's a class that stores parts of a sentence
//Also used to select a random part in order to generate a sentence
class PartList {     
    constructor() {
        this.addPart = [];
    }
    
    //indexOf keep and return the first index of every theme 
    //Parameters : self : array, value : what we want
    onlyUnique(value, index, self) {
        return self.indexOf(value) === index; 
    }
    
    //method to return a random number
    random(min, max) {  
        //Math.random value is between 0 and 1. We use Math.floor in order to get an integer between min and max.
        return Math.floor(Math.random() * (max - min + 1)) + min;  
    }

    //method to return a random non themed part of sentence
    readRandomPart() {  
        let randomPartIndex = this.random(0, this.addPart.length-1);
    
        return this.addPart[randomPartIndex].toString();
    }
}

//class that stores one part of sentence without theme
class NormalPart {  
    constructor(text) {
        this.text = text;
    }

    toString() { 
        return `${this.text}`;
    }
}


//class that stores one part of sentence with theme from FirstPartList's class
class ThemedPart extends NormalPart {  
    constructor(text, theme) {
        super(text);
        this.theme = theme;
    }
}

//class that stores all possible first parts of sentences 
//It's a table of ThemedPart
class FirstPartlist extends PartList{  
    constructor() {
        super();

        this.addPart.push(new ThemedPart("Quand j'ai commencé à ressentir de l'amour pour mon conjoint, ", "Amour"));
        this.addPart.push(new ThemedPart("Un sentiment est vite parti, du coup ", "Amour"));
        this.addPart.push(new ThemedPart("Comme un Aigle ma vue est aiguisée, ", "Animal"));
        this.addPart.push(new ThemedPart("Pour le plaisir de la chair, ", "Amour"));
        this.addPart.push(new ThemedPart("Tel un serpent, ", "Animal"));
        this.addPart.push(new ThemedPart("Sur League of Legends, ", "Jeux"));
        this.addPart.push(new ThemedPart("J'ai choisi comme race un Elfe de la nuit, ", "Jeux"));
        this.addPart.push(new ThemedPart("Pour battre Illidan Hurlorage, ", "Jeux"));
        this.addPart.push(new ThemedPart("Dans Hunger Games, ", "Films"));
        this.addPart.push(new ThemedPart("Depuis que j'ai croisé Anakin Skywalker, ", "Films"));
        this.addPart.push(new ThemedPart("Longtemps après la visite d'E.T, ", "Films"));
        this.addPart.push(new ThemedPart("Le tigre est le roi de la jungle en Thaïlande, c'est pourquoi ", "Animal"));
        this.addPart.push(new ThemedPart("Les sentiments c'est pour les tapettes, c'est pourquoi ", "Amour"));
        this.addPart.push(new ThemedPart("Quand le chat a fait ses griffes sur le canapé, ", "Animal"));
        this.addPart.push(new ThemedPart("J'ai croisé Mario qui faisait ses courses à Carrefour et depuis ", "Jeux"));
        this.addPart.push(new ThemedPart("On m'a dit que Terminator était très fort, c'est pourquoi ", "Films"));
    }
    
    loadAvailableTheme() {  //method to list all theme we have
        const availableTheme = [];
        this.addPart.forEach(element => availableTheme.push(element.theme));

        const uniqueAvailableTheme = availableTheme.filter(this.onlyUnique); //Delete the duplicates, return only once the theme

        return uniqueAvailableTheme;
    }


    //method to pick a random selected theme part of sentence and return it 
    readRandomThemedPart(theme) { 

        //filter compare the theme of every elements of the array to return those with the theme we selected 
        let filteredFirstPart = this.addPart.filter(element=>element.theme === theme); 
    
        if (filteredFirstPart.length === 0) {
            filteredFirstPart = this.addPart; //if the variable stores nothing, we use the entire array
            console.warn("Aucune correspondance pour ce thème, toutes les phrases sont utilisées.");
        }
    
        //variable that select a random part a/mong filteredFirstPart.
        const selectedPartIndex = this.random(0,filteredFirstPart.length-1); 
        return filteredFirstPart[selectedPartIndex].toString(); 
        
    }
}

//class that stores all possible second parts of sentences 
//It's a table of NormalPart
class SecondPartlist extends PartList{  //class with all second parts of sentence
    constructor() {
        super();
        this.addPart.push(new NormalPart("j'en ai conclu que la mousse au chocolat n'était mon fort, "));
        this.addPart.push(new NormalPart("j'ai appellé les Avengers pour m'aider dans ma quête, "));
        this.addPart.push(new NormalPart("j'ai crié après le perroquet "));
        this.addPart.push(new NormalPart("j'ai toujours voulu devenir un super-héros "));
        this.addPart.push(new NormalPart("mon copain a acheté des champignons hallucinogènes "));
        this.addPart.push(new NormalPart("j'ai acheté des nouvelles épées kikoodelamortquitue "));
        this.addPart.push(new NormalPart("Nina mon perroquet a crié son mécontentement "));
        this.addPart.push(new NormalPart("ma copine m'a dit : Lui c'est un mec facile !, "));
        this.addPart.push(new NormalPart("je me suis mise à écouter Rammstein "));
        this.addPart.push(new NormalPart("j'ai ressorti ma vieille Nintendo DS "));
        this.addPart.push(new NormalPart("le père Noël est sorti de sous la cheminée "));
        this.addPart.push(new NormalPart("ma mère m'a dit : Rien ne vaut les gâteaux !, "));
        this.addPart.push(new NormalPart("je me suis poussée à me remettre au sport "));
        this.addPart.push(new NormalPart("un castor est sorti de la rivière "));
        this.addPart.push(new NormalPart("Jean-pierre Pernault à parlé du Coronavirus au 20h çà m'a fait réfléchir, "));
    }
}

//class that stores all possible third parts of sentences 
//It's a table of NormalPart
class ThirdPartlist extends PartList{  //class with all third parts of sentence
    constructor() {
        super();
        this.addPart.push(new NormalPart("çà m'a donné la diarhée!"));
        this.addPart.push(new NormalPart("j'ai déclaré forfait."));
        this.addPart.push(new NormalPart("de toute façon le coronavirus va tous nous tuer!"));
        this.addPart.push(new NormalPart("du coup à la place, j'ai chanté du Feder sous la douche."));
        this.addPart.push(new NormalPart("et sinon, l'apocalypse est toujours prévu pour 2012?"));
        this.addPart.push(new NormalPart("toutefois, je suis toujours en train de bûcher sur ce projet!"));
        this.addPart.push(new NormalPart("toute contente, j'ai pris mon copain dans les bras."));
        this.addPart.push(new NormalPart("je regrette déjà mon régime... "));
        this.addPart.push(new NormalPart("et finalement j'ai appris que mon vol pour la Thailande était annulé... :'("));
        this.addPart.push(new NormalPart("du coup je suis allée acheter des oeufs."));
        this.addPart.push(new NormalPart("et je me rends compte qu'inventer des phrases sans queue ni tête était un vrai sport !"));
        this.addPart.push(new NormalPart("c'est alors que mon chat s'est mis à bouder car il avait plus de croquette."));
        this.addPart.push(new NormalPart("et je me suis rendue compte que le confinement c'est pas si mal en fait."));
        this.addPart.push(new NormalPart("c'est là que j'ai compris que lire un dictionnaire en Anglais n'aiderait en rien."));
        this.addPart.push(new NormalPart("faut dire que lire Le monde de Narnia qui fait 1200pages çà m'a bien motivé!"));
    }
}

//Class that contains UI (user interface) logic 
//This class use for the main execution code, is using static methods and variables for easy execution
class Main {
    static firstPartlistImpl = new FirstPartlist();
    static secondPartListImpl = new SecondPartlist();
    static thirdPartListImpl = new ThirdPartlist();

    //Method that add the three parts to make one sentence.
    static readRandomSentence(theme) {
        console.log(Main.firstPartlistImpl.readRandomThemedPart(theme) + Main.secondPartListImpl.readRandomPart() + Main.thirdPartListImpl.readRandomPart());  
    }

    static initialize() {  //Main method
        console.log(`Bienvenue sur mon générateur de citations!`);

        let availableTheme = Main.firstPartlistImpl.loadAvailableTheme(); 
        let choice = prompt(`Choisissez un thème parmi ${availableTheme.toString()} ou Random`);
        console.log(`Vous avez choisi le thème ${choice}.`); //Choice of  thetheme

        let numberCitation = prompt(`Combien en souhaitez-vous ? (Entre 1 et 5)`); //Choice of the number of citations
        
        if (numberCitation>5 || numberCitation<0) {
            console.warn("Nous n'avons pas compris votre choix, merci de choisir à nouveau un nombre en 1 et 5.");
            //If the number isn't between 1 and 5, warning message and restart.
            Main.initialize();
        }

            else {
                for (let i = 0; i < numberCitation; i++) {
                Main.readRandomSentence(choice); //return the number of citations we selected
            }
        }

        if (confirm('Voulez-vous quitter le programme ?')) {

            console.log('Merci de votre visite :) ');
          } else {

            Main.initialize();
          }
    }
}

//Let's go !
//Run code from main class
Main.initialize();
