var guarda = []
for (let index = 0; index < localStorage.length; index++) {
    guarda.push({
        nome: localStorage.key(index),
        valor: localStorage.getItem(localStorage.key(index))
    });

}
var ordenado = guarda.sort(function(a, b) {
    if (a.valor > b.valor) {
        return 1
    }
})
for (let index = 0; index < guarda.length; index++) {
    $(".rank").append(`<div class="" id=${index}>${ordenado[index]["nome"]+":"+ordenado[index]["valor"]}</div>`)
}