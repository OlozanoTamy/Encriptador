let texto = document.getElementById("texto");
let divDerecho = document.querySelector(".derecho");
let outputText = document.getElementById("outputText");
let placeholderImage = document.getElementById("placeholderImage");

const encriptacion = () => {
    //Le indica al placehoder con la imagen que no se muestre mas
    placeholderImage.style.display = 'none';
    //Le indica que se muestre
    outputText.style.display = 'block';
    let mensaje = texto.value.toLowerCase();
    let arreglo = mensaje.split("");
    let codigo = arreglo.map(element => {
        if (element == "a") {
            return "ai";
        } else if (element == "e") {
            return "enter";
        } else if (element == "i") {
            return "imes";
        } else if (element == "o") {
            return "ober";
        } else if (element == "u") {
            return "ufat";
        } else {
            return element;
        }
    });
    outputText.value = codigo.join("");
}

const desencriptacion = () => {
    placeholderImage.style.display = 'none';
    outputText.style.display = 'block';
    let mensaje = texto.value.toLowerCase();
}

let encriptar = document.getElementById("encriptar");
encriptar.addEventListener("click", encriptacion);

let desencriptar = document.getElementById('desencriptar');
desencriptar.addEventListener("click", desencriptacion);
