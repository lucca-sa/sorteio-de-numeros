function generateNumber() {
const min = Math.ceil(document.querySelector(".input-min").value)
const max = Math.floor(document.querySelector(".input-max").value)


const result = Math.floor(Math.random() * (max - min + 1) + min);

document.querySelector(".input-result").value = result

// document.querySelector(".input-min").value = "" -> ISSO AQUI É SE EU QUISESSE ZERAR OS INPUTS DE ENTRADA QUANDO FOSSE CLICADO



    // alert(`Seu numero sorteado foi ${result}`)
}