


// Spread Operator.

//let primeiros = [1, 2, 3,];
//
//let numeros = [...primeiros, 4, 5, 10];
//console.log(numeros);

//let pessoa = {
    //nome: 'Maria',
    //idade: 50,
    //cargo: 'Secretaria'
//};

//let novaPessoa = {
  // ...pessoa,
  // status: 'ATIVO',
  // cidade: 'Itamaraju / BA',
  // telefone: '73 99983 8827'
//};
//console.log(novaPessoa);

function novoUsuario(info){
    let dados = {
    ...info,
    status:'ATIVO',
    inicio: '20/04/1988',
    codigo: '12345'
    };
    console.log(dados);
}

novoUsuario({ nome:'Jose', sobrenome: 'Almeida', cargo: "DEV" });
