
    // Programa que al ingresar un numero genera 
    // la tabla de multiplicar del numero ingresado

        let numero = Number(prompt("Ingrese un numero"));

        for( let i = 1; i <=10; i++){
            let multiplicar= numero * i;
            document.write(numero + " x " + i + " = " + multiplicar + "<br>")
        }
