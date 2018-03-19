function parametroObrigatorio(parametro) {
    throw new Error(`O parâmetro "${parametro}, é obrigatório"`);
}

function insereNaTela(objeto = parametroObrigatorio('objeto')) {

}

insereNaTela();

insereNaTela('objeto');