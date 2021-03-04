function main() { 
    setTimeout(initCalculator, 2000);
    setTimeout(beginningUser,5000);
}

function initCalculator() { 
    firstInput = "Bienvenue !";
    screen.innerHTML += firstInput;
}  

function beginningUser() { 
    screen.innerHTML = "";
}





function addNumbers(buttonCollection) { 
    // screen.innerHTML = 
}


// Création de la bibliothèque des boutons
buttonCollection = document.getElementsByClassName('btn');

// Initialisation des boutons de 1 à 9
let buttonSelector = [];
for(i=0; i<=9; i++) { 
    buttonSelector[i] = document.getElementById('i'+[i]).addEventListener('click', addNumbers);
}

// boutons spéciaux récupérés à partir de la collection
dotButton = buttonCollection[10];
moreButton = buttonCollection[11];
lessButton = buttonCollection[12];
diviseButton = buttonCollection[13];
multiplicationButton = buttonCollection[14];
deleteButton = buttonCollection[15];
resultButton = buttonCollection[16];

screen = document.getElementById('ecranUtilisateur');

main();