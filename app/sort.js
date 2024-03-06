let btnOrdernarPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdernarPreco.addEventListener('click', ordernarLivrosPorPreço);

function ordernarLivrosPorPreço() {
   let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
   exibirLivros(livrosOrdenados);
}
