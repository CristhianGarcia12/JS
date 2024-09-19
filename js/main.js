document.getElementById("formularioContainer").addEventListener("submit", function(event) {
    event.preventDefault();


const usuario=document.getElementById("usuario").value;
const contraseña=document.getElementById("contraseña").value;
const checkbox=document.getElementById("check");
const responseMessage=document.getElementById("mensajeSi");


function guardarUsuario(storage){
    if(storage=="local"){
        localStorage.setItem("usuario",JSON.stringify(usuario))
        localStorage.setItem("contraseña",JSON.stringify(contraseña))
    };
    if(storage=="session"){
        sessionStorage.setItem("usuario",JSON.stringify(usuario))
        sessionStorage.setItem("contraseña",JSON.stringify(contraseña))
    }
}

if(checkbox.checked){
    guardarUsuario("local")
}else{
    guardarUsuario("session")
}

if (usuario && contraseña) {
    
    responseMessage.style.color = "red";
    Swal.fire({
        title: "Bienvenido " + usuario + ", ya podes realizar tus Calculos",
        //text: "That thing is still around?",
        icon: "success"
    });
    // Toastify({
    //     text: "Bienvenido " + usuario + ", ya podes ingresar a tu Calculadora de Ahorros",
    //     duration: 4000,
    //     destination: "https://github.com/apvarun/toastify-js",
    //     newWindow: true,
    //     close: true,
    //     gravity: "top", // `top` or `bottom`
    //     position: "right", // `left`, `center` or `right`
    //     stopOnFocus: true, // Prevents dismissing of toast on hover
    //     style: {
    //     background: "linear-gradient(to right, purple, pink)",
    //     },
    //     onClick: function(){} // Callback after click
    // }).showToast();
} else {
    
    responseMessage.style.color = "red";
    Swal.fire({
        title: "No completaste todas las casillas",
        text: "Verifique de completar todas las casillas correspondientes",
        icon: "warning"
    });
}
});

const inputNombreObjetivo=document.querySelector("#nombreObjetivo"),
inputPrecioObjetivo=document.querySelector("#precioObjetivo"),
inputDescripcionObjetivo=document.querySelector("#descripcionObjetivo"),
btnGuardar=document.querySelector("#btnSearch")

const objetivos=[]

function Objetivo(nombre, precio, descripcion){
    this.id=objetivos.length +1;
    this.nombre= nombre;
    this.precio= parseFloat(precio);
    this.descripcion=descripcion;
    Toastify({
        text: "INGRESASTE TU NUEVO OBJETIVO, " + nombre + ", " + descripcion + "\n !SUERTE¡",
        duration: 4000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: "linear-gradient(to right, purple, pink)",
        },
        onClick: function(){} // Callback after click
    }).showToast();
}
function crearHtml(arr){
    let html;
    for (const objetivo of arr) {
        const {nombre,precio,descripcion}=objetivo;
        html=`<div class="cardObjetivos">
                    <h3>${nombre}</h3>
                    <p>Precio: $${precio} </p>
                        <p>Descripcion: ${descripcion}</p>
                        </div>
                    </div>`
    }
    contenedor.innerHTML+=html;
}

btnGuardar.addEventListener("click", () => {

    const newObjetivo = new Objetivo(
    inputNombreObjetivo.value,
    inputPrecioObjetivo.value,
    inputDescripcionObjetivo.value,
    );
    console.log(newObjetivo);
    objetivos.push(newObjetivo);
    console.log(objetivos);
    crearHtml(objetivos);
    if(objetivos&&Objetivo){
        const object=objetivos
        const userJson=JSON.stringify(object)
        sessionStorage.setItem("Objetivo", userJson)
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('mostrarCarritoBtn');
    const carrito = document.getElementById('contenedor');

    boton.addEventListener('click', () => {
        if (carrito.style.display === 'block') {
            carrito.style.display = 'none';
            boton.textContent = 'Mostrar Objetivos';
        } else {
            carrito.style.display = 'block';
            boton.textContent = 'Ocultar Objetivos';
        }
    });
});


function calculator() {
    const montoInicial = parseFloat(document.getElementById('montoInicial').value);
    const montoAhorrado = parseFloat(document.getElementById('montoAhorrado').value);
    const gastoMensual = parseFloat(document.getElementById('gastoMensual').value);

    const mensajeDeRespuesta=document.querySelector("#mensajeDeRespuesta");
    mensajeDeRespuesta.textContent="";

    const mensajeDeMontoNegativo=document.querySelector("#mensajeDeMontoNegativo")
    mensajeDeMontoNegativo.textContent="";

    // Valido que los valores no sean NaN
    if (isNaN(montoInicial) || isNaN(montoAhorrado) || isNaN(gastoMensual)) {
        mensajeDeRespuesta.textContent="Por favor, ingrese los valores correctamente"
        return;
    }

    // Calculo el saldo actual
    const calcular = montoInicial + montoAhorrado - gastoMensual;

    // Muestro el saldo actual en el DOM
    document.getElementById('calcular').textContent = `$${calcular.toFixed(2)}`;
    if(calcular<0){
    mensajeDeMontoNegativo.textContent="Cuidado, esta lejos de sus objetivos!"
}else{
    mensajeDeMontoNegativo.textContent="Excelente mes, siga asi!";
}
}



//localStorage.clear()