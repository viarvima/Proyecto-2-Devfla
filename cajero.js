// Crea una aplicación web con JavaScript donde simulemos la interacción con un cajero automático.
// Al ingresar al cajero, puedes seleccionar la cuenta con la que deseas interactuar. Deben existir al menos tres cuentas:
// Persona 1
// Persona 2
// Persona 3
// Para esto, puedes trabajar con un arreglo de objetos como el siguiente:
// 1
// 2
// 3
// 4
// 5
// var cuentas = [
//   { nombre: “Mali”, saldo: 200 }
//   { nombre: “Gera”, saldo: 290 }
//   { nombre: “Maui”, saldo: 67 }
// ];
// Al seleccionar una cuenta, debes ingresar el password asociado a la cuenta. Si el password es incorrecto, debes notificar al usuario y permitirle intentarlo nuevamente. Si el password es correcto, debes mostrar las siguientes opciones:
// Consultar saldo
// Ingresar monto
// Retirar Monto
// Al seleccionar consultar saldo, debe mostrar en pantalla el saldo actual de la cuenta
// Al seleccionar ingresar monto, el usuario debe escribir el monto a ingresar. Al ingresar el monto, debe mostrarle al usuario el monto ingresado y el nuevo saldo total.
// Al seleccionar retirar monto, el usuario debe escribir el monto a retirar. Al retirar el monto, debe mostrarle al usuario el monto retirado y el nuevo saldo total.
// Como regla de negocio, una cuenta no debe de tener más de $990 y menos de $10. Es necesario hacer las validaciones pertinentes para que no se rompa esta regla de negocio.

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {accordion: false});
 });

const cuentas = [
    {usuario: "milaneso", contrasena: 12345, saldo: 500},
    {usuario: "perchita", contrasena: 54321, saldo: 100},
    {usuario: "esquites", contrasena: 32415, saldo: 200},
];

let usuarioSeleccionado;

function logIn (){
    let usuario = document.getElementById('usuario').value.toString().toLowerCase();
    let password = document.getElementById('password').value.toString().toLowerCase();

    const usuarioEncontrado = cuentas.find((el) => {
        return el.usuario.toString().toLowerCase() === usuario && el.contrasena.toString().toLowerCase() === password
    })

    if(!usuarioEncontrado) {
        document.getElementById('mensajeError').style.display = 'block';
    } else {
        usuarioSeleccionado = usuarioEncontrado;
        document.getElementById('login').style.display = 'none';
        document.getElementById('funcionCajero').style.display = 'block';
        document.getElementById('saludo').innerHTML = 'Bienvenido, ' + el.usuario.toString().toLowerCase() + ". Aqui puedes realizar las siguientes operaciones de tu cuenta."
    }
}

function consultarSaldo() {
    document.getElementById('saldo').innerHTML = 'Tu saldo despues de operaciones es: $' + usuarioSeleccionado.saldo;
    M.toast({html: 'Operacion realizada exitosamente!'});
}

function depositarDinero() {
    let cantidadIngresada = document.getElementById('cantidadIngreso').value;

    if(parseInt(cantidadIngresada) + usuarioSeleccionado.saldo > 990) {
        document.getElementById('mensajeErrorDeposito').style.display = 'block';
    } else {
        document.getElementById('mensajeErrorDeposito').style.display = 'none';
        usuarioSeleccionado.saldo = parseInt(cantidadIngresada) + usuarioSeleccionado.saldo;
        M.toast({html: 'Operacion realizada exitosamente!'});
    }
}

function retirarDinero() {
    let cantidadIngresada = document.getElementById('cantidadRetiro').value;

    if(usuarioSeleccionado.saldo - parseInt(cantidadIngresada) < 10) {
        document.getElementById('mensajeErrorRetiro').style.display = 'block';
    } else {
        document.getElementById('mensajeErrorRetiro').style.display = 'none';
        usuarioSeleccionado.saldo = usuarioSeleccionado.saldo - parseInt(cantidadIngresada);
        M.toast({html: 'Operacion realizada exitosamente!'});
    }
}
