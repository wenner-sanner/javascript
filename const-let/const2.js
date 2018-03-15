//objeto pessoa com const, podemos alterar, excluire acrescentar propriedades
const pessoa = {
    nome: 'Wenner'
}

pessoa.idade = 12;

console.log(pessoa);

//atribuindo um outro objeto à variavel, erro
const novaPessoa = {
    nome: 'Maria Luiza'
}

pessoa = novaPessoa;