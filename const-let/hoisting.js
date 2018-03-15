//podemos chamar a função antes, porque sua declaração é movida para o topo
imprimirNome('Wenner');

function imprimirNome(nome) {
    console.log(nome);
}

//const e let possuem TDZ (Time Dead Zone)
let valor = 0;

if (true) {
    console.log(valor);

    let valor;
    valor = 1;
    console.log(valor);
}