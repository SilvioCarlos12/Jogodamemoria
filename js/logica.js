var aleatorio;
var imagem = ["Papel", "Pedra", "Tesoura"];
imagem = imagem.concat(imagem);
var manipula = [];

while (imagem.length > 0) {
    aleatorio = Math.floor(Math.random() * imagem.length);
    manipula.push(imagem.splice(aleatorio, 1)[0]);
}
console.log(manipula);
// for (let index = 0; index < manipula.length; index++) {
//     console.log(manipula[index] + manipula[index]);

// }

$(".item").append("<p> testando </p>");