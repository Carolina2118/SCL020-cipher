const cipher = {
<<<<<<< HEAD
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
                // ...

        }
        export default cipher;
=======
    // ...
};

export default cipher;
>>>>>>> 60f2b8463ec91f1c09a378bd02b74d04b67b916d
