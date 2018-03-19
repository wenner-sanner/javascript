function Livro(titulo) {
    this.titulo = titulo;
}

let livro = new Livro('ECS6, O novo javascript');

console.log(`Livro: ${livro.titulo}`);