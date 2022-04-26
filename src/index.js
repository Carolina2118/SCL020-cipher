<<<<<<< HEAD
//import cipher from './cipher.js';

window.addEventListener("load", inicio, true);
//es para que carge el html 
// addEventLIstener controla el evento 
// window es para abrir una ventana
// llame a la funcion inicio que se agrega la funcion .
//al lebantar la tecla se produce el keyup
function inicio() {
    document.getElementById("mensaje").addEventListener("keyup", function() { // el elemento mensaje  
        this.value = this.value.toUpperCase();
    }, true);

    document.getElementById("cifrar").addEventListener("click", function() {
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("mensaje2").value = cifrar(texto, desplazamiento);
    }, true);

    document.getElementById("descifrar").addEventListener("click", function() {
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("mensaje2").value = descifrar(texto, desplazamiento);
    }, true);
}

function cifrar(texto, desplazamiento) {
    let resultado = "";
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    desplazamiento = (desplazamiento % 26 + 26) % 26;

    if (texto) {
        for (let i = 0; i < texto.length; i++) {
            if (letras.indexOf(texto[i]) != -1) {
                let posicion = ((letras.indexOf(texto[i]) + desplazamiento) % 26);
                resultado += letras[posicion];
            } else
                resultado += texto[i];
        }

    }
    console.log(resultado)
    return resultado;
}

function descifrar(texto, desplazamiento) {
    let resultado = "";
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    desplazamiento = (desplazamiento % 26 + 26) % 26;

    if (texto) {
        for (let i = 0; i < texto.length; i++) {
            if (letras.indexOf(texto[i]) != -1) {
                let posicion = ((letras.indexOf(texto[i]) - desplazamiento) % 26);
                resultado += letras[posicion];
            } else
                resultado += texto[i];
        }

    }
    console.log(resultado)
    return resultado

}
//console.log(cipher)
=======
/*port cipher from './cipher.js';
console.log(cipher);*/

var numero = document.getElementById("numeroCard");
var nombre = document.getElementById("nombreCard");
var expiracion1 = document.getElementById("expireCardMes");
var expiracion2 = document.getElementById("expireCardyear");

var from = document.getElementById("formularioCard")
>>>>>>> 60f2b8463ec91f1c09a378bd02b74d04b67b916d
