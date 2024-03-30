// Exercice pour manipuler les boucles for 
const listeMots = ["Cachalot", "Pétunia" ,"Serviette"]
const listePhrases = ["Pas de panique !", "La vie, l’univers et le reste", "Merci pour le poisson"]
let choixUser = prompt("mots ou phrases")
let score = 0

if (choixUser === "mots") {
    let motUser = prompt("Veuillez taper un mot")
    for (let i = 0; i < listeMots.length; i++) {
        if (motUser === listeMots[i]) {
        score++
        break
        }
        }
} else {
    let phraseUser = prompt("Veuillez taper un phrase !")
    for (let i = 0; i < listePhrases.length; i++) {
        if (phraseUser === listePhrases[i]) {
        score++
        break
        }
        }
}

console.log("Votre score est de " + score)


