var aleatorio;
var imagem = ["agua", "fogo", "vento", "terra", "trovao", "luz", "sombra", "vazio"];
imagem = imagem.concat(imagem);
var manipula = [];
var linha = [];

function colin(numero) {
    var multipulo = []
    for (index = 2; index <= numero / 2; index++) {
        if (numero % index === 0) {
            multipulo.push(index);
        }
    }
    return multipulo;
}

while (imagem.length > 0) {
    aleatorio = Math.floor(Math.random() * imagem.length);
    manipula.push(imagem.splice(aleatorio, 1)[0]);
}

var divisores = colin(manipula.length);

//
if (divisores.length % 2 === 0) {
    var tam = divisores.length / 2;
    var linha = divisores[tam - 1];
    var coluna = divisores[tam];
} else {
    tam = Math.floor(divisores.length / 2);
    linha = divisores[tam];
    coluna = linha;
}

var cont = 0
console.log(linha, coluna);
for (var index = 0; index < linha; index++) {
    $(".caixa").append(`<div class='linha' id='${index}' > </div>`);
    console.log($(".linha"));
    for (var index2 = 0; index2 < coluna; index2++) {
        //$(`#${index}`).append(`<div class='item'><p> ${manipula[cont]} </p></div>`);
        $(`#${index}`).append(`<div class='item'><div style='background-color:black' class='item'>  </div> </div>`);
        cont++;
    }
}




var receb = [];
$(".item").click(function(event) {
    console.log($(event.target.innerHTML))
        // receb.push(event.target.innerText);
        // console.log(receb);
        // if (receb.length === 2) {
        //     if (receb[0] === receb[1]) {
        //         console.log("acertou");
        //     } else {
        //         console.log("errou")
        //     }

    //     receb = []
    // }


})