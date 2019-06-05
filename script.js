// usamos querySelector para referenciar algum item do DOM
const prancheta = document.querySelector("#prancheta");
let botaoCriar = document.querySelector(".botaoCriar");
let inputItem = document.querySelector(".inputItem");
let controles = document.querySelector("#controles");
let mensagemErro = document.querySelector(".erro");

// a função addEventListener é usada para executar o código através do clique do botão "botãoCriar" pelo usuário
botaoCriar.addEventListener("click", ()=>{
    //createElement cria uma tag
    //crie uma tag de li no meu html
    let itemDaLista = document.createElement("li");
    //setAttribute serve para colocar uma propriedade na tag criada
    itemDaLista.setAttribute("class", "item");
    let botaoApagar = document.createElement("button");
    botaoApagar.setAttribute("class", "botaoRemover");
    //innerHTML serve para acrescentar valor a uma tag
    botaoApagar.innerHTML = "X";

    //para acessar o valor digitado em um input usmos o .value
    if(inputItem.value.length > 20){
        mensagemErro.innerHTML = "Por favor insira um item menor.";
        //é possível acessar o estilo de elemento pelo JS acessando a propriedade .style
        mensagemErro.style.display = "block";

    //o método trim serve para eliminar quaisquer espaços em branco de uma string
    } else if(inputItem.value.trim() === ""){
            mensagemErro.innerHTML = "Por favor digite um item.";
            mensagemErro.style.display = "block";
    }else { 
        mensagemErro.style.display = "none";
        //insiro dentro da minha tag um valor
        itemDaLista.innerHTML = inputItem.value;
        //com o appendChild nós inserimos nosso elemento lista dentro da prancheta
        prancheta.appendChild(itemDaLista);
        itemDaLista.appendChild(botaoApagar);
        removerItem(botaoApagar, itemDaLista);
        inputItem.value = "";
    }
    

})

//criamos a função removerItem que é chamada dentro do código acima recebendo os parâmetros necessários
//para ser executada quando houver o clique do botão de remover
function removerItem(botao, item) {
    botao.addEventListener("click", ()=>{
        item.parentNode.removeChild(item);
    })

}


