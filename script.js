

// REST Operator.

//function convidados(...nomes){
//     console.log("SEJA BEM VINDOS TODOS CONVIDADOS");
//     console.log(nomes);
//}
//
//convidados("Lucas", "Matheus", "Maria", "Joao Mario");

function sorteador(...numeros){
    console.log(numeros);

    const numeroGerado = Math.floor(Math.random() * numeros.length);
    console.log("Numero gerado foi: " + numeros [numeroGerado]);
}

sorteador(1, 2, 3, 15, 25, 90, 55, 34);