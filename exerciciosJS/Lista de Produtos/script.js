const produtos = [{nome:"Computador",categoria:"Tecnologia", preco:"8000" },
                  {nome:"Monitor",categoria:"Tecnologia", preco:"1000" },
                  {nome:"Teclado",categoria:"Tecnologia", preco:"200"}] 

let produtotabela = document.getElementById("produtoslista")

for( i=0 ;i<produtos.length; i++){
let produtoTabelaLinha = document.createElement('tr');
let produtoTabelaDadosNome = document.createElement('td');
produtoTabelaDadosNome.innerHTML = produtos[i].nome;
produtoTabelaLinha.appendChild(produtoTabelaDadosNome);
produtotabela.appendChild(produtoTabelaLinha);

let produtoTabelaDadosCategoria = document.createElement('td');
produtoTabelaDadosCategoria.innerHTML = produtos[i].categoria;
produtoTabelaLinha.appendChild(produtoTabelaDadosCategoria);
produtotabela.appendChild(produtoTabelaLinha);

let produtoTabelaDadosPreco = document.createElement('td');
produtoTabelaDadosPreco.innerHTML = produtos[i].preco;
produtoTabelaLinha.appendChild(produtoTabelaDadosPreco);
produtotabela.appendChild(produtoTabelaLinha);

}