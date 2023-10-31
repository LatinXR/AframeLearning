// declarar variable para rotación
let rotationY = 0;
let rotationX = 10;
let rotationZ = 0;

// obtener objeto cubo rojo del html principal
const cuboRojo = document.getElementById("cuboRojo");

/*hacer que rote usando setInterval, un método que ejecuta una función o fragmento de código de forma reiterada, con un retardo de tiempo fijo entre cada ejecución (Por ejemplo 10 en este caso).*/
const intervalo = setInterval(() => {
    
    
    //incrementar la rotación
    rotationY++;
    rotationX++;
    rotationZ++;
    //cambiar rotación del cubo rojo usando rotationY ya incrementada
    cuboRojo.setAttribute("rotation", `${rotationX} ${rotationY*2} ${rotationZ}`);

    /* Nota: tecnicamente, en este caso las variables de rotacionY, rotacionX y rotacionZ siempre tendrían el mismo valos. 
    En otras palabras, podriamos usar (, 'rotationY, rotationY, rotationY) en la funcion setAttribute.
    Sin embargo, lo pongo asi para demonstración y para tener las variables por si quiero hacer cambios despues*/

}, 10);