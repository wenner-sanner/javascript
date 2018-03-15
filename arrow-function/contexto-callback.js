// O this dentro do	callback guarda	o valor do objeto pai
// da função callback e não da função que recebe o callback
const equipe = {
    nome: 'Guerreiros Z',
    membros: ['Goku', 'Kuririn', 'Vegeta'],

    membrosDaEquipe1: function() {
        const that = this; //agora encherga o contexto do pai
        this.membros.forEach(function(membro) {
            console.log(`${membro} é da  equipe ${that.nome}`);
        });
    },

    //resolvendo com arrow function. Foi projetada para capturar
    //o this do seu contexto delimitador
    membrosDaEquipe2: function() {
        const that = this; //agora encherga o contexto do pai
        this.membros.forEach((membro) => {
            console.log(`${membro} é da  equipe ${that.nome}`);
        });
    }
}

console.log('Sem arrow function:')
equipe.membrosDaEquipe1();

console.log('\nCom arrow function:')
equipe.membrosDaEquipe2();