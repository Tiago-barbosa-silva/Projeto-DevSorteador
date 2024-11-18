const drawer = document.querySelector("button")

drawer.addEventListener("click", buttonClick)

function buttonClick() {

    const min = Math.ceil(document.querySelector(".number-min").value)

    const max = Math.floor(document.querySelector(".number-max").value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    const numberResult = document.querySelector(".result")

    // const numbermin = document.querySelector(".number-min")

    // const numbermax = document.querySelector(".number-max")

    numberResult.placeholder = result

    if(min >= max){
      numberResult.placeholder = "Não encontrado"

      alert("O valor 'E' não pode ser MENOR q o valor 'Entre' ")
    }

}