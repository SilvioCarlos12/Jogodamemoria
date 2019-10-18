var guarda = []
for (let index = 0; index < localStorage.length; index++) {
    guarda.push({
        nome: localStorage.key(index),
        valor: localStorage.getItem(localStorage.key(index))
    });

}

var ordenado = guarda.sort(function(a, b) {
    let c = parseInt(a.valor)
    let d = parseInt(b.valor)
    console.log(c, d)
    if (c < d) {
        return -1


    }
})
console.log(ordenado)
for (let index = 0; index < 4; index++) {
    $(".rank").append(`<div class="" id=${index}>${ordenado[index]["nome"]+":"+ordenado[index]["valor"]}</div>`)
}