function addNumber(number) { // ajouter un nombre à l'écran 
    screen.innerHTML += (number.currentTarget.innerHTML)
    return screen
}

function createValue(){ 
    value =  parseInt(screen.innerHTML)
    screen.innerHTML = ""
    console.log(value);
    return value;
}

function operatorValuePlus() { 
    value = "+"
    console.log(value);
    return value;
}

function operatorValueMoins() { 
    value = "-"
    console.log(value);
    return value;
}

function operatorValueMultiplie() { 
    value = "*"
    console.log(value);
    return value;
}

function operatorValueDivise() { 
    value = "/"
    console.log(value);
    return value;
}


// Initialisation des variables 

// valeus de stockage
let valueStorage = [];


// valeur DOM
let number = []*10
let screen = document.getElementById('ecran')
for(let i=0; i<10; i++ ) { // Initialisation des boutons de 0 à 9
    number[i] = document.getElementById(`i${i}`).addEventListener('click', addNumber)
}

let plus        =     document.getElementById('iplus').addEventListener('click', function() { 
    valueStorage.push(createValue())
    valueStorage.push(operatorValuePlus())
});

let moins       =     document.getElementById('imoins').addEventListener('click', function() { 
    valueStorage.push(createValue())
    valueStorage.push(operatorValueMoins())
});

let multiplie   =     document.getElementById('imultiplie').addEventListener('click', function() { 
    valueStorage.push(createValue())
    valueStorage.push(operatorValueMultiplie())
});

let divise      =     document.getElementById('idivise').addEventListener('click', function() { 
    valueStorage.push(createValue())
    valueStorage.push(operatorValueDivise())
});

let resultat    =     document.getElementById('iresult').addEventListener('click', function() { 
    valueStorage.push(createValue())
    valueStorage = eval(valueStorage.join(''))
    console.log(valueStorage)
    screen.innerHTML = valueStorage    
});
