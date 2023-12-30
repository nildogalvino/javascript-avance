
// MAP = PERCORRER UM ARRAY

//let lista = ["MARIA", "JOSE", "JOAO", "ANTONIO"];

//lista.map((item, index) =>{
//    console.log(`PASSANDO: ${item} - Esta na posicao ${index}`);
//});


// Reduce = O reduce busca reduzir um array

let numeros = [5, 3, 2, 5];

let total = numeros.reduce((acumulador, numero, indece, original) => {
    console.log(`${acumulador} - total ate o momento`);
    console.log(`${numero} - valor atual`);
   //console.log(`${indece} - indece atual`);
   //console.log(`${original} - array original`);
    console.log("=================================");

    return acumulador += numero;
});

console.log("TOTAL DO REDUCE: " + total);


