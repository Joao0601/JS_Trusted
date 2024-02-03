const dataAtual =  new Date()

console.log(dataAtual)

let day = dataAtual.getDate()
let month = dataAtual.getMonth() + 1
let year = dataAtual.getFullYear()
let hora = dataAtual.getHours()
let minutes = dataAtual.getMinutes()

let dataAtualformatada = day + "/" + month + "/" + year + " " + hora + ":"+minutes


document.getElementById("CurrDateTime").innerHTML = dataAtualformatada;