var aleatorio;
var imagem = ["Papel", "Pedra", "Tesoura"];

for (cont = 0; cont < imagem.length; cont++) {
    aleatorio = Math.floor(Math.random() * imagem.length);
    $("#imagem").append(`<img class="imagem" src="/img/${imagem[aleatorio]}.png">`);

    $("#imagem").append(`<img class="imagem" src="/img/${imagem[aleatorio]}.png">`);

}