function saludarAlCliente(nombreUsuario){
    console.log("Hola "+ nombreUsuario);
}
let nombre=prompt("Ingresa tu nombre de usuario: ")
saludarAlCliente(nombre)



alert("Calculadora de ahorros mensual de " + nombre)

let pinGuardado= "1234";
let ingresar=false
for(let i=3; i>=1;i--){
    let ingreso=prompt("Ingresa tu PIN");
    if(pinGuardado === ingreso){
        alert("Bienvenido " + nombre + ", ya podes calcular tus ahorros :)");
        ingresar=true;
        console.log("Ingreso su PIN correctamente");
        break;
    }else{
        alert("Error ingresa nuevamente");
    }
}



console.log(ingresar);
if(ingresar){
    function ahorroDelCliente(montoAAhorrar){
    console.log("Su monto ahorrado es: " + montoAAhorrar);
}
let monto=prompt("Tu monto a ahorrar es de: ")
ahorroDelCliente(monto);
    let opcion=prompt("Elegi una opcion: \n1 - Objetivo a lograr. \n2 - Dinero gastado. \n3 - Ingreso de dinero. \n Presiona X para finalizar.");
    while(opcion!= "x" || "X"){
        if(opcion=="1"){
            alert("Tu objetivo a lograr es de: " + monto);
        }else if(opcion=="2"){
            let retiro=prompt("Ingresa el dinero gastado este mes: ")
            if(retiro>monto){
                alert("Cuidado! Te estas alejando de tu objetivo");
            }else{
                monto=monto- +retiro;
                alert("Tu monto actual es de: " + monto);
            }
        }else if(opcion=="3"){
            let deposito=prompt("Ingresa el dinero ahorrado este mes: ");
            monto=monto + +deposito;
            alert("Tu monto actual es de: " + monto);
        }else if(opcion=="x"){
            console.log("El usuario decidio finalizar");
            alert("Hasta el proximo mes, " + nombre);
            break;
        }else if(opcion=="X"){
            console.log("El usuario decidio finalizar");
            alert("Hasta el proximo mes, " + nombre);
            break;
        }else{
            alert("Opcion no valida");
        }
        opcion=prompt("Elegi una opcion: \n1 - Objetivo a lograr. \n2 - Dinero gastado. \n3 - Ingreso de dinero. \n Presiona X para finalizar.");
    }
    } else {
    alert("Se te acabaron los intentos, no sos " + nombre);
    }
