const drawer = document.querySelector("button")

drawer.addEventListener("click", buttonClick)

function buttonClick() {

    const min = Math.ceil(document.querySelector(".number-min").value)

    const max = Math.floor(document.querySelector(".number-max").value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    const numberResult = document.querySelector(".result")

    numberResult.placeholder = result

}