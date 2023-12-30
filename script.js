
// FIND
let listagem = [5, 3, "Jose", 2, "Joao"]

let busca = listagem.find((item)=>{
   return item === "Jose";
})

//console.log(busca);

// FILTER

let palavras = ["Joao", "Maria", "Jose", "Pedro Silva", "Estudante de Programação", "Jose"]

let resultado = palavras.filter((item)=>{
    return item === "Jose";
})

console.log(resultado);

