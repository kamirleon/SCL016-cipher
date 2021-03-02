import cipher from './cipher.js';

console.log(cipher);

var botonMostrar = document.querySelector('#siguientePagina')

//al hacer click en escribir pasa a la siguiente página
botonMostrar.addEventListener('click', mostrar)

function mostrar(){
    document.querySelector('#segundaPagina').style.display = 'block'
    document.querySelector('#primeraPagina').style.display = 'none'
}

//capturar los elementos del DOM con querySelector por #id

var textoEntrada = document.querySelector('#frase');
var seleccionCorrimento = document.querySelector('#corrimento');
var resultado = document.querySelector('#respuesta');
var opcionCifrar = document.querySelector('#cifrar');
var opcionDescifrar = document.querySelector('#descifrar');
var botonResultado = document.querySelector('#resultado');

// al hacer click en mostrar ... hace esto.. muestra el resultado
botonResultado.addEventListener('click', mostrarResultado);

//se debe pasar el valor que entro como string a valor numérico
var corrimento = parseInt(seleccionCorrimento.value);

//cuando se ingrese texto se convierta a mayúsculas
textoEntrada.addEventListener('keyup', mayusculas);
    
function mayusculas(){

    textoEntrada.value = textoEntrada.value.toUpperCase();

}

// cuando se haga click en boton cifrar pasara esto ...
//botonCifrar.addEventListener('click', cifrar)

function cifrar(frase){ 
    var fraseCodificada = "";
    var enUnicode = 0;

    // recorrer la frase que entro
    for (var i = 0; i < frase.length; i++){
        enUnicode = frase.charCodeAt(i);

        fraseCodificada = fraseCodificada + String.fromCharCode(enUnicode + corrimento);
    }

    return fraseCodificada;

}
   function descifrar(fraseCodificada){
       var enUnicode = 0;
       var fraseDecodificada = "";

       for(var i = 0; i < fraseCodificada.length; i++){
           enUnicode = fraseCodificada.charCodeAt(i);

           fraseDecodificada = fraseDecodificada + String.fromCharCode(enUnicode - corrimento);

       }
        return fraseDecodificada;
        
   }

   function mostrarResultado() {

   // alert("este boton si funciona!!!");
    //pregunto si la primera oopcion esta chequeada
    var quiereCifrar = opcionCifrar.checked;
    if(quiereCifrar){ // si se cumple esta condicion muestrame esto....
        resultado.innerHTML = cifrar(textoEntrada.value)
        }else{ // sino muestrame esto ....
            resultado.innerHTML = descifrar(textoEntrada.value)
        }
    }



