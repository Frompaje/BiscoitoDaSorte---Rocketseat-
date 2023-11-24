const biscoitoClick = document.querySelector("#biscoitoClick")
const buttonOutro = document.querySelector("#buttonOutro")

biscoitoClick.addEventListener("click",biscoitoSorte)
buttonOutro.addEventListener("click",buttonBiscoito)



function biscoitoSorte(){
    toggleButton()
}

function buttonBiscoito(){
 toggleButton()

}
function toggleButton(){
    document.querySelector(".box-screen1").classList.toggle("hiden")
    document.querySelector(".box-screen2").classList.toggle("hiden")
}