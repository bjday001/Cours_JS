// Exercice Fonctions

const listeMots = ["Cachalot", "Pétunia" ,"Serviette"]
const listePhrases = ["Pas de panique !", "La vie, l’univers et le reste", "Merci pour le poisson"]

function afficherResultat(score) {
    let resultatJoueur = console.log("Voici votre score " + score + "point.")  

    return resultatJoueur
}

function choisirPhrasesOuMots() {
    let choixUser = prompt("la liste de mots ou la liste de phrases")
    if (choixUser==="la liste de mots") {
        return choixUser
    } 
    if (choixUser==="la liste de phrases") {
        return choixUser
    } 
    
}

function lancerBoucleDeJeu(listeProposition) {
    let motUser = prompt("Veuillez taper un mot")
    let score = 0
   

        for (let i = 0; i < listeProposition.length; i++) { 
            if (motUser === listeProposition[i]) {
                

            score++
            
            }
            }

   return score
            }
    
    


function lancerJeu() {
    
    let choixUser = choisirPhrasesOuMots()
    

    if (choixUser === "la liste de mots") {
        score = lancerBoucleDeJeu(listeMots)


        
    }
    else {
        score =  lancerBoucleDeJeu(listePhrases)


    }

    return score 
    
}

lancerJeu()
afficherResultat(score)

