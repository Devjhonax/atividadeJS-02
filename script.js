//variavéis
let user = getPLayerName("naiala bomfim souza")
let win = 115
let loose = 25
let reusltado = calc(win, loose)
let ranking = ""

//funções
function getPLayerName(name){
    let usuario = name.split(" ")[0]
    return usuario
}

function calc(vitoria, derrota){
    let result = vitoria - derrota
    return result
}



//Resultado de ranking com base no calculo
if (reusltado === 10){
    ranking = "Ferro"
}

else if(reusltado >= 11 && reusltado <= 20){
    ranking = "Bronze"
}

else if (reusltado >=21 && reusltado <=50){
    ranking = "Prata"
}

else if (reusltado >=51 && reusltado <=80){
    ranking = "Ouro"
}

else if (reusltado >=81 && reusltado <=90){
    ranking = "Diamante"
}

else if (reusltado >=91 && reusltado <=100){
    ranking = "Lenda"
}

else if (reusltado >=101){
    ranking = "Imortal"
}

//Saída
console.log("Olá " + user)
console.log("Numero de vitórias:" + win + " Numero de derrotas:" + loose)
console.log("Com base nas suas partidas seu nivel é " + ranking)