


function promedios() {

    let num1 = parseInt(prompt("ingrese su primer nota"))
    let num2 = parseInt(prompt("ingrese su segunda nota"))
    let num3 = parseInt(prompt("ingrese su tercer nota"))
    let operacion =  ("/")
  
    let resultado;

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert ("ingresa un numero valido, por favor")
    }

    switch (operacion) {
        case "/":
              resultado = (num1 + num2 + num3) / 3
              

    }

    if (resultado === undefined || resultado === NaN){
        console.log ("no se pudo realizar la operacion")
    } else {
        alert(`Su promedio es: ${resultado}`)
    }

}


promedios()