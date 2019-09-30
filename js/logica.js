var aleatorio;
var imagem = ["Papel", "Pedra", "Tesoura"];

for (cont = 0; cont < 3; cont++) {
    aleatorio = Math.floor(Math.random() * imagem.length);
    $("#imagem").append(`<img class="imagem" src="/img/${imagem[aleatorio]}.png">`);

    $("#imagem").append(`<img class="imagem" src="/img/${imagem[aleatorio]}.png">`);

}