/*
function ready(){

    //Remover do carrinho
    const btnRemove = document.getElementsByClassName('remove-product-button')

    for (var i = 0; i < btnRemove.length; i++){
        btnRemove[i].addEventListener('click', removerProduto)
    }

    // mapeando botao quantidade
    const qtdIput = document.getElementsByClassName('product-qtd-input')
    for(var i =0; i < qtdIput.length; i++){
        qtdIput[i].addEventListener('change', updateTotal)
    }

    //click de adicionar produto
    const btnAdicionar = document.getElementsByClassName('comprou')
    for(var i =0; i < btnAdicionar.length; i++){
        btnAdicionar[i].addEventListener('click', addProduto) 
        
    }
} // fim ready


function addProduto(event){  
    
    event.prevenDefault()
    const button = event.target
    const infoPro = button.parentElement.parentElement
    const imagePro = infoPro.getElementsByClassName('doce-item--img')[0].src
    const nomePro =  infoPro.getElementsByClassName('doce-item--name')[0].innerText
    const pricePro = infoPro.getElementsByClassName('doce-item--price')[0].innerText
    console.log(nomePro)   

    let addCarrinho = document.createElement('tr')
        addCarrinho.classList.add('cart-product')

    addCarrinho.innerHTML = 
    `
    <tr><!--Sepraçao dos produtos por linha-->
    <td> 
      <div class="product">
        <img src="${imagePro}" alt="">
        <div class="info">
          <div class="name">${omePro}</div>
        </div>
      </div>
    </td>
    <td> ${pricePro}</td>
    <td>
      <div class="qty">
        <button>
          <i class="fa-solid fa-minus"></i>
        </button>
        <span>1</span>
        <button>
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
    </td>
    <td>R$:45</td>
    <td>
      <button class="remove">
        <i class="fa-regular fa-trash-can"></i>
      </button>
    </td>
  </tr>
    `
    const produtoAdicionado = document.querySelector('.cart-table tbody') 
    produtoAdicionado.appendChild(addCarrinho)

    return false;
    updateTotal()
}








function removerProduto(event){
    event.target.parentElement.parentElement.remove()
    updateTotal()
}


function updateTotal(){
    // var para guardar os cálculo dos produtos
    let valorTotal = 0;

    // acessando valores dos produtos
    const docesAdicionados = document.getElementsByClassName('section')

    for (var i = 0; i < docesAdicionados.length; i++){
        //console.log(docesAdicionados[i])
        const precoProduto = docesAdicionados[i].getElementsByClassName('doce-item--price')[0].innerText.replace("R$",'').replace(',','.')
        //console.log(precoProduto)

        //acessando a quantidade do produtos
        const qtdProduto = docesAdicionados[i].getElementsByClassName('product-qtd-input')[0].value
        //console.log(qtdProduto)

        // calculando

        valorTotal = valorTotal + (precoProduto * qtdProduto)       
    }

    let totalFormatado = valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

     document.querySelector('.cart-total-container span').innerText = totalFormatado

  }



/// layout

/*


function carrinho() {

 let addCarrinho = document.createElement('tr')

addCarrinho.innerHTML = `
     <tr class="produtoAdd"><!--Sepraçao dos produtos por linha-->
                <td> 
                  <div class="product">
                    <div class="imgAdd"><img src="imagens/barra-chocolate.jpg" alt=""></div>
                    <div class="info">
                      <div class="name">Barra Recheada</div>
                    </div>
                  </div>
                </td>
                <td ><span class="priceAdd">R$45</span></td>
                <td>
                  <div class="qty">
                    <button class="minus">
                      <i class="fa-solid fa-minus"></i>
                    </button>
                    <span class="doce-item--qtd">1</span>
                    <button class="plus">
                      <i class="fa-solid fa-plus"></i>
                    </button>
                  </div>
                </td>
                <td><span class="totParcial">R$45</span></td>
                <td>
                  <button class="remove">
                    <i class="fa-regular fa-trash-can"></i>
                  </button>
                </td>
              </tr>
 `
}

 // acessar seçao de produtos adicionados

      const adicionados = document.getElementsByClassName("produtoAdd");
      for (var i = 0; i < adicionados.length; i++) {
        //acessando o nome dos produtos adicionados
        let nomeAdd =
          adicionados[i].getElementsByClassName("info")[0].innerText;

        //acessando o preço dos produtos adicionados
        let pricePro = adicionados[i]
          .getElementsByClassName("priceAdd")[0]
          .innerText.replace("R$", "")
          .replace(",", ".");

        //Total parcial dos produtos adicionados
        let totParcial = adicionados[i]
          .getElementsByClassName("totParcial")[0]
          .innerText.replace("R$", "")
          .replace(",", ".");

        // acessando a quantidade do produtos
        let qtdProduto =
          adicionados[i].getElementsByClassName("qty")[0].innerText;
        /* console.log(
          `Produto ${nomeAdd} Preço ${pricePro} Quantidade ${qtdProduto} soma parcial ${totParcial}`
        );

        const menos = adicionados[i]
          .querySelector(".minus")
          .addEventListener("click", () => {
            qtdProduto = Number(qtdProduto) - 1;
            totParcial = Number(pricePro) * qtdProduto;
             console.log(
              `Produto ${nomeAdd} Preço ${pricePro} Quantidade ${qtdProduto} soma parcial ${totParcial}`
            );

            if (qtdProduto < 1) {
              alert(`Quantidade Invalida ${nomeAdd}`);
            }

            const mais = adicionados[i]
              .querySelector(".plus")
              .addEventListener("click", () => {
                qtdProduto = Number(qtdProduto) + 1;
                totParcial = Number(pricePro) * qtdProduto;
                console.log(
                  `Produto ${nomeAdd} Preço ${pricePro} Quantidade ${qtdProduto} soma parcial ${totParcial}`
                );

                if (qtdProduto < 1) {
                  alert(`Quantidade Invalida ${nomeAdd}`);
                }
              });
          });
      }

*/

/*
  
// acessar seçao de produtos adicionados

let adicionados = ([] = document.getElementsByClassName("produtoAdd"));
for (var i = 0; i < adicionados.length; i++) {
  //diminuindo quantidade de produtos
  adicionados[i].querySelector(".qty .minus").addEventListener("click", () => {
    if (qtdDoces > 1) {
      qtdDoces--;
      calSubTotal = qtdDoces * item.price;

      // sub total formatado
      let subtotal = calSubTotal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });

      doceAdicionado.querySelector(".doce-item--qtd").innerHTML = qtdDoces;

      // acessando total parcial
      doceAdicionado.querySelector(".totParcial").innerHTML = subtotal;
      console.log("diminuiu");
    }
  });

  //aumentando quantidade de produtos
  adicionados[i].querySelector(".qty .plus").addEventListener("click", () => {
    qtdDoces++;
    calSubTotal = qtdDoces * item.price;

    // sub total formatado
    let subtotal = calSubTotal.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    // ataulizando a quantidade do doces
    doceAdicionado.querySelector(".doce-item--qtd").innerHTML = qtdDoces;

    // acessando e alterando total parcial conforme a quantidade muda
    doceAdicionado.querySelector(".totParcial").innerHTML = subtotal;
    console.log("aumentou");
  });
}



*/
