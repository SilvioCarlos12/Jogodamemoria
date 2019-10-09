var aleatorio;
var imagem = ["agua", "fogo", "vento", "terra", "trovao", "luz", "sombra", "vazio", "azul", "verde"];
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
        $(`#${index}`).append(`<div class='item'><p class='conteudo'>${manipula[cont]} </div>`);
        cont++;
    }
}




var receb = [];
var cont = 0;
$(".item").click(function() {
    $(this).children().css("visibility", "visible");
    receb.push($(this).children());
    console.log(receb);
    if (receb.length === 2) {
        console.log(receb);
        if (receb[0].text() === receb[1].text()) {
            console.log("acertou")
            cont = 0
            receb = [];
        } else {
            console.log("errou")
            for (const iterator of receb) {
                setTimeout(function() {
                    iterator.css("visibility", "hidden")
                }, 2000)

            }

            if (cont === 4) {


                for (const iterator of receb) {
                    setTimeout(function() {
                        iterator.css("visibility", "hidden")
                    }, 2000)

                }
                console.log("silvio")

                cont = 0
                receb = []
            }
            cont++;

            receb = []
        }


    }
})