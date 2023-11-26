let doceJson = [
  {
    id: 0,
    name: "Taças",
    img: "imagens/doces/taca.jpg",
    price: 150.0,
    acao: '<a href="#" class="comprou">Comprar</a>',
    qtd: 1,
  },

  {
    id: 1,
    name: "Ovo de Colher",
    img: "imagens/doces/ovo-pascoa.jpg",
    price: 70.0,
    acao: '<a href="#" class="comprou">Comprar</a>',
    qtd: 1,
  },

  {
    id: 2,
    name: "Doces Finos",
    img: "imagens/doces/doces-finos.jpg",
    price: 270.0,
    acao: '<a href="#" class="comprou">Comprar</a>',
    qtd: 1,
  },

  {
    id: 3,
    name: "Brigadeiro",
    img: "imagens/doces/brigadeiros.jpg",
    price: 120.0,
    acao: '<a href="#" class="comprou">Comprar</a>',
    qtd: 1,
  },

  {
    id: 4,
    name: "Bolo",
    img: "imagens/doces/bolo.jpg",
    price: 130.0,
    acao: '<a href="#" class="comprou">Comprar</a>',
    qtd: 1,
  },

  {
    id: 5,
    name: "Barra Recheada",
    img: "imagens/doces/barra-chocolate.jpg",
    price: 45.0,
    acao: '<a href="#" class="comprou">Comprar</a>',
    qtd: 1,
  },
];

doceJson.map((item) => {
  let doceItem = document.querySelector(".doces .doce").cloneNode(true);

  // layout da seçao doces
  document.querySelector(".lista-doce").append(doceItem);

  //Valor monetario formatado
  let valorFormatado = item.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  //preencher dados da seçao doces

  doceItem.querySelector(".doce-item--img img").src = item.img;
  doceItem.querySelector(".doce-item--name").innerHTML = item.name;
  doceItem.querySelector(".doce-item--price").innerHTML = valorFormatado;
  doceItem.querySelector(".comprou").innerHTML = item.acao;
  doceItem.querySelector(".doce-item--qtd").innerHTML = item.qtd;

  //variavel modalKey global
  let modalKey = 0;

  //variavel para controlar quantidade inicial dos doces
  let qtdDoces = 1;

  // variavael para controlar total parcial
  let calSubTotal = 0;

  //carrinho
  let carrinho = [];

  // doce escolhido
  const btnComprar = doceItem
    .querySelector(".comprou")
    .addEventListener("click", (e) => {
      e.preventDefault();

      adicionarProdutos();

      // }
    });

  function adicionarProdutos() {
    //clonando linha dos produtos
    let doceAdicionado = document.querySelector(".produtoAdd").cloneNode(true);

    /*
      console.log("comprou");
      console.log(item.id);
      console.log(item.name);
      console.log(item.price);
      console.log(item.img);
      */

    // adicionando linha clonada ao carrinho
    document.querySelector(".baseProdutosAdd").append(doceAdicionado);

    doceAdicionado.querySelector(".imgAdd img").src = item.img;
    doceAdicionado.querySelector(".name").innerHTML = item.name;
    doceAdicionado.querySelector(".priceAdd").innerHTML = valorFormatado;
    doceAdicionado.querySelector(".doce-item--qtd").innerHTML = item.qtd;
    doceAdicionado.querySelector(".totParcial").innerHTML = valorFormatado;

    // removendo class para mostrar os produtos no carrinho
    doceAdicionado.classList.remove("esconder");
    //console.log(doceAdicionado);

    // acessar seçao de produtos adicionados

    let adicionados = ([] = document.getElementsByClassName("produtoAdd"));
    for (var i = 0; i < adicionados.length; i++) {
      //diminuindo quantidade de produtos
      adicionados[i]
        .querySelector(".qty .minus")
        .addEventListener("click", () => {
          if (qtdDoces > 1) {
            qtdDoces--;
            calSubTotal = qtdDoces * item.price;

            // sub total formatado
            let subtotal = calSubTotal.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            });

            // ataualizando a quantidade do doces
            doceAdicionado.querySelector(".doce-item--qtd").innerHTML =
              qtdDoces;

            // acessando e alterando total parcial conforme a quantidade muda
            doceAdicionado.querySelector(".totParcial").innerHTML = subtotal;
            console.log("diminuiu");
          }
        });

      //aumentando quantidade de produtos
      adicionados[i]
        .querySelector(".qty .plus")
        .addEventListener("click", () => {
          qtdDoces++;
          calSubTotal = qtdDoces * item.price;

          // sub total formatado
          let subtotal = calSubTotal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          });

          // ataualizando a quantidade do doces
          doceAdicionado.querySelector(".doce-item--qtd").innerHTML = qtdDoces;

          // acessando e alterando total parcial conforme a quantidade muda
          doceAdicionado.querySelector(".totParcial").innerHTML = subtotal;
          console.log("aumentou");
        });
    }
  }
});
