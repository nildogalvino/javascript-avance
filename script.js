


// Descontruir um Objeto


let pessoa = {
    nome: 'Nildo',
    sobrenome: 'Galvino',
    empresa: 'NG Tech',
    cargo: 'Programador Fullstack',    
};

//console.log(pessoa.nome);
//console.log(pessoa.cargo);

//let nome = 'TESTE';
//
//const { nome:nomePessoa, cargo, empresa, sobrenome } = pessoa;
//
//console.log('nome da pessoa ' + nomePessoa);
//console.log(sobrenome);
//
//
//console.log(cargo);
//console.log(empresa);



// ===========================================================


let nomes = ['Maria', 'Jose', 'Joao'];

//let {0:Maria, 2:terceiraPessoa } = nomes;
//console.log(Maria);
//console.log(terceiraPessoa);

let [primeironome, segundonome, terceironome] = nomes;
console.log(primeironome);
console.log(segundonome);
console.log(terceironome);