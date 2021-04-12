const nombre = document.getElementById("nombre")
const fecha = document.getElementById("fecha")
const acepto = document.getElementById("acepto")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

function validar(){
    //evt.preventDefault()

    let warnings = ""
    let entrar = false
    parrafo.innerHTML = ""

    if(nombre.value.length <1){
        warnings += `Debes introducir un nombre <br>`
        entrar = true
        }

    if(fecha.value != "2020-11-21"){
        warnings += `La fecha es incorrecta <br>`
        entrar = true
    }

    if(acepto.checked){
        
    } else{
        warnings += `No aceptaste amar a Mateo <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
        return false
    }
}