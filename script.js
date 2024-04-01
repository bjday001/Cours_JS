// Exercice pour manipuler le DOM grace au queryselector

// Ici je cible tous les inputs contenu dans toutes les div ayant pur class 'zoneChoix'
let listeInputRadio = document.querySelectorAll(".zoneChoix input");
//console.log(listeInputRadio);

// Je parcours le contenu de ma variable, qui est un tableau
for (let i = 0; i < listeInputRadio.length; i++) {
    console.log(listeInputRadio[i]);
}

let baliseZonePropositionSpan = document.querySelector("#zoneProposition span");
console.log(baliseZonePropositionSpan);