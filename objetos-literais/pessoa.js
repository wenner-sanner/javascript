//No ES6, se o nome da variavel coincide com o da propriedade do objeto
//podemos simplesmente passar somente os nomes das variáveis sem
//decalarar as propriedades do objeto
let nome = "Wenner";
let sobrenome = "Sanner"

const pessoa = { nome, sobrenome };
console.log(pessoa.nome);
console.log(pessoa.sobrenome);