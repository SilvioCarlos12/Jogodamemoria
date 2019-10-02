var aleatorio;
var imagem = ["Papel", "Pedra", "Tesoura"];
var manipula = [];
for (cont = 0; cont < imagem.length; cont++) {




    aleatorio = Math.floor(Math.random() * imagem.length);
    $(".board").append(`<img src="/img/${imagem[cont]}.png">`);
    $(".board").append(`<img src="/img/${imagem[cont]}.png">`);

}