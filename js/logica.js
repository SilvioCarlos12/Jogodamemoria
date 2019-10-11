var aleatorio;
var imagem = ["agua", "fogo", "vento", "terra", "trovao", "luz"];
imagem = imagem.concat(imagem);
var manipula = [];
var linha = [];
var tent = document.getElementById("tentativas")


$("#reniciar").on("click", function() {

    window.location.reload();
})


function modal(modalid, texto) {
    const modelo = document.getElementById(modalid);
    const textos = document.getElementById("trocatexto")
    textos.textContent = texto;
    modelo.classList.add('mostrar');


}

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
    $(".matriz").append(`<div class='linha' id='${index}' > </div>`);
    console.log($(".linha"));
    for (var index2 = 0; index2 < coluna; index2++) {
        $(`#${index}`).append(`<div class='item'><p class='conteudo'>${manipula[cont]}</p></div>`);
        cont++;
    }
}

var intervalo = window.setInterval(tempo, 1000)
var time = 0

function tempo() {
    console.log(time++)

}

var texto;
var erros = 4;
var acerto = 0;
var receb = [];
$(".item").click(function() {
    $(this).children().css("visibility", "visible");
    receb.push($(this).children());
    if (receb.length === 2) {
        if (receb[0].text() === receb[1].text()) {
            acerto++
            erros = 4
            if (acerto == manipula.length / 2) {
                clearInterval(intervalo);
                texto = "VOCÊ GANHOU NO TEMPO DE:" + time + " SEGUNDOS";
                modal("modal-exibição", texto)
            }

        } else {
            erros--;
            for (const iterator of receb) {
                setTimeout(function() {
                    iterator.css("visibility", "hidden")
                }, 500)

                if (erros == 0) {
                    texto = "VOCÊ PERDEU NO TEMPO DE: " + time + " SEGUNDOS";
                    modal("modal-exibição", texto);
                    clearInterval(intervalo);

                }

            }




        }

        receb = []


    }

    tent.textContent = "NUMERO DE TENTATIVAS: " + erros

})