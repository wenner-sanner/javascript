// O this dentro do	callback guarda	o valor do objeto pai
// da função callback e não da função que recebe o callback
const equipe = {
    nome: 'Guerreiros Z',
    membros: ['Goku', 'Kuririn', 'Vegeta'],

    membrosDaEquipe: function() {
        const that = this; //agora encherga o contexto do pai
        this.membros.forEach(function(membro) {
            console.log(`${membro} é da  equipe ${that.nome}`);
        })
    }
}

equipe.membrosDaEquipe();