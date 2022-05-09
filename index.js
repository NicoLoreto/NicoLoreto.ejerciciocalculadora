const displayValorAnterior = document.getElementById ("valor-anterior");
const displayValorActual = document.getElementById ("valor-actual");
const botonesNumeros = document.querySelectorAll (".numero");
const botonesOperadores = document.querySelectorAll (".operador");

/*aca esta cada uno de los elementos html que voy a usar.*/



const display = new Display(displayValorAnterior, displayValorActual);
//cada vez que se preiosne un boton el display agrega
//un botonesNumeros, el botonesNumerosque le correcponde al boton

botonesNumeros.forEach(boton => {
    boton.addEventListener ("click",() => display.agregarNumero(boton.innerHTML));
    })

botonesOperadores.forEach(boton =>{
    boton.addEventListener("click", () => display.computar(boton.value))
});


   