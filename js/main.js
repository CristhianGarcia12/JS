function saludarAlCliente(nombreUsuario){
    console.log("Hola "+ nombreUsuario);
}
let nombre=prompt("Ingresa tu nombre de usuario: ")
saludarAlCliente(nombre)



alert("BIENVENIDO AL BANCO " + nombre)

let pinGuardado= "1234";
let ingresar=false
for(let i=3; i>=1;i--){
    let ingreso=prompt("Ingresa tu PIN");
    if(pinGuardado === ingreso){
        alert("Bienvenido, ya podes ingresar");
        ingresar=true;
        console.log("Ingreso su PIN correctamente");
        break;
    }else{
        alert("Error ingresa nuevamente");
    }
}
console.log(ingresar);
if(ingresar){
    let saldo=20000
    let opcion=prompt("Menu del Banco \n Elegi una opcion: \n1 - Saldo. \n2 - Retiro de dinero. \n3 - Deposito. \n Presina X para finalizar.");
    while(opcion!= "x" || "X"){
        if(opcion=="1"){
            alert("Tu saldo es: " + saldo);
        }else if(opcion=="2"){
            let retiro=prompt("Ingresa el monto a retirar")
            if(retiro>saldo){
                alert("Saldo insuficiente");
            }else{
                saldo=saldo- +retiro;
                alert("Tu saldo es de: " + saldo);
            }
        }else if(opcion=="3"){
            let deposito=prompt("Ingresa el monto a depositar");
            saldo=saldo + +deposito;
            alert("Tu saldo es de: " + saldo);
        }else if(opcion=="x"){
            console.log("El usuario decidio finalizar");
            alert("Que tenga un Buen dia");
            break;
        }else if(opcion=="X"){
            console.log("El usuario decidio finalizar");
            alert("Que tenga un Buen dia");
            break;
        }else{
            alert("Opcion no valida");
        }
        opcion=prompt("Menu del Banco \n Elegi una opcion: \n1 - Saldo. \n2 - Retiro de dinero. \n3 - Deposito. \n Presina X para finalizar.");
    }
    } else {
    alert("Se te acabaron los intentos, te retuvimos la tarjeta");
    }
