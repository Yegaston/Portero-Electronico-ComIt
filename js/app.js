// Variables que contienen cada elemento.
const borrarBtn = document.getElementById("borrar")
const pisoInput = document.getElementById("piso")
const deptoInput = document.getElementById("depto")
// Variables que guardan datos. (Estas las resetea el boton borrar)
var clicks = 0
var piso = []
var depto = []
// Borrar los datos cargados en memoria, que afecta al piso y depto
borrarBtn.addEventListener('click', () => {
    console.log("Deleted")
    pisoInput.value = ''
    deptoInput.value = ''
    clicks = 0
    llamadoCas.innerHTML = ''
})
// Lo mismo pero en funcion que arriba pero en funcion
function borrarDatos() {
    borrarBtn.addEventListener('click', () => {
        console.log("Deleted")
        pisoInput.value = ''
        deptoInput.value = ''
        piso = []
        depto = []
        click = 0
    })
}
// Esta funcion, cuando se acciona imprime o mensaje de error o el resultado deseado.
const llamarBtn = document.getElementById('llamar')
llamarBtn.addEventListener("click", () => {
    const llamadoCas = document.getElementById('llamadoCas')
    if(parseInt(pisoInput.value) < 43 && parseInt(deptoInput.value) < 9){
        llamadoCas.innerHTML = `Llamando al piso n° ${pisoInput.value}, depto n° ${deptoInput.value}`
        borrarDatos();
    } else {
        llamadoCas.innerHTML = `Piso o depto incorrecto, vuelva a ingresar`
        borrarDatos();
    }
})

// Esta es la logica principal de portero, primero seleccion TODOS los elementos con la clse .btn-numero
const numBtn = document.querySelectorAll(".btn-numero")
// Recorro los elemento y los asigno a res.
for(var i = 0; i < numBtn.length; i++){
    const res = numBtn[i]
    // Aca segun el boton que se presione, empuja el numero al array piso (si se hicieron menos de dos clicks en botones numeros, y en depto cuando se presiona el 3 click)
    res.addEventListener('click', () => {
        console.log(res.value)
        clicks++
       if(piso.length < 2){
           piso.push(res.value)
       }
       console.log("clicks " + clicks)
       console.log("pisolenght " + piso.length)
       if(clicks == 3) {
           depto.push(res.value)
       }
       // parsetInt convierte el numero a entero, y piso.join('') concatadena los datos. En depto input no seria suficiente, pero bueno, si en el dia de mañana se necesitara usar para mas de 1 digito por piso, solamente abria que cambiar el rango a evaluar dentro de la cantidad de clicks.
       pisoInput.value = parseInt(piso.join(''))
       deptoInput.value = parseInt(depto.join(''))
        console.log(piso)
        console.log(depto)
    })
}

// Las funciones o cosas no vistas en clase, las consulte en MDN web docs