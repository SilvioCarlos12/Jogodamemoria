var guardnomval = []
for (let index = 0; index < localStorage.length; index++) {
    guardnomval.push({
        nome: localStorage.key(index),
        valor: localStorage.getItem(localStorage.key(index))
    });

}

guardnomval = guardnomval.sort(function(a, b) {
    let c = parseInt(a.valor)
    let d = parseInt(b.valor)
    if (c < d) {
        return -1


    }
})
for (let index = 0; index < 4; index++) {

    $(".rank").append(`<div class="" id=${index}>${guardnomval[index]["nome"]+":"+guardnomval[index]["valor"]}</div>`)


}