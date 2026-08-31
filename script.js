// Lista de objetos
const produtos = [
    {
        id: 1,
        nome: "Notebook",
        preco: 3500
    },
    {
        id: 2,
        nome: "Mouse",
        preco: 80
    },
    {
        id: 3,
        nome: "Teclado",
        preco: 150
    }
];

// Selecionando elementos do DOM
const listaProdutos = document.querySelector("#listaProdutos");
const formulario = document.querySelector("#formulario");
const nomeProduto = document.querySelector("#nomeProduto");
const precoProduto = document.querySelector("#precoProduto");

// Função responsável por criar um produto
function criarProduto(nome, preco) {
    return {
        id: Date.now(),
        nome: nome,
        preco: Number(preco)
    };
}

// Função responsável por mostrar os produtos na tela
function mostrarProdutos() {

    // Limpa a lista antes de renderizar novamente
    listaProdutos.innerHTML = "";

    produtos.forEach(function(produto) {

        const item = document.createElement("li");

        item.innerHTML = `
            <span>
                <strong>${produto.nome}</strong>
                - R$ ${produto.preco.toFixed(2)}
            </span>

            <button 
                class="remover" 
                onclick="removerProduto(${produto.id})"
            >
                Remover
            </button>
        `;

        listaProdutos.appendChild(item);
    });
}

// Função para adicionar um novo produto
function adicionarProduto(evento) {

    evento.preventDefault();

    const nome = nomeProduto.value;
    const preco = precoProduto.value;

    const novoProduto = criarProduto(nome, preco);

    produtos.push(novoProduto);

    mostrarProdutos();

    formulario.reset();
}

// Função para remover um produto
function removerProduto(id) {

    const indice = produtos.findIndex(function(produto) {
        return produto.id === id;
    });

    if (indice !== -1) {
        produtos.splice(indice, 1);
    }

    mostrarProdutos();
}

// Evento do formulário
formulario.addEventListener("submit", adicionarProduto);

// Mostra os produtos quando a página é carregada
mostrarProdutos();
