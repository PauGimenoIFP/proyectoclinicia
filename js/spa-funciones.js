// js Simulacion de backend

// Cada incidencia estara compuesta por:

// Codigo
// Función para generar un código único
let generarCodigo = () => {
    return Math.floor(Math.random() * 90000) + 10000; // Genera un número aleatorio de 5 dígitos
};
// Estado Nuevo, Abierto, En Proceso, Cerrado
// Asunto
// Detalle
// Prioridad
// Departamento
// Nombre (opcional)
// Email (opcional)

//Declaracion array
let incidencias = [];
console.log(incidencias);

// Dejo unas incidencias estaticas para usar de ejemplo
incidencias.push({
    code: 11111,
    estado: "Nuevo",
    asunto: "Problema de acceso",
    detalle: "El usuario no puede acceder a su cuenta.",
    prioridad: "Alta",
    departamento: "Soporte Técnico",
    nombre: "Juan Pérez",
    email: "juan@example.com",
});
incidencias.push({
    code: 22222,
    estado: "Abierto",
    asunto: "Error en la facturación",
    detalle: "El cliente ha recibido una factura duplicada.",
    prioridad: "Media",
    departamento: "Contabilidad",
    nombre: "Ana López",
    email: "ana.lopez@example.com",
});

incidencias.push({
    code: 33333,
    estado: "Nuevo",
    asunto: "Fallo en el sistema de reservas",
    detalle: "No se pueden crear nuevas reservas desde la aplicación móvil.",
    prioridad: "Alta",
    departamento: "Desarrollo",
    nombre: "Carlos García",
    email: "carlos.garcia@example.com",
});
incidencias.push({
    code: 44444,
    estado: "Nuevo",
    asunto: "Pantalla en negro",
    detalle: "El monitor no muestra imagen al encender el equipo.",
    prioridad: "Alta",
    departamento: "Soporte Técnico",
    nombre: "Laura Martínez",
    email: "laura.martinez@example.com",
});

incidencias.push({
    code: 55555,
    estado: "Abierto",
    asunto: "Solicitud de cambio de contraseña",
    detalle: "El usuario olvidó su contraseña y no puede resetearla.",
    prioridad: "Media",
    departamento: "Atención al Cliente",
    nombre: "Miguel Ángel",
    email: "miguel.angel@example.com",
});

incidencias.push({
    code: 66666,
    estado: "Cerrado",
    asunto: "Problema con el correo corporativo",
    detalle:"El cliente reportó que no podía enviar correos, pero el problema ya fue resuelto.",
    prioridad: "Baja",
    departamento: "IT",
    nombre: "Sofía Hernández",
    email: "sofia.hernandez@example.com",
});


document.addEventListener("DOMContentLoaded", () => {
// ----------------------------------------------------------------- //
    
    function crearincidencia() {
    
        // Me guardo los inputs en una variable para luego crear el objeto y meterlo en el array
        let asunto = document.getElementById("asunto").value;
        let detalle = document.getElementById("detalle").value;
        let prioridad = document.getElementById("prioridad").value;
        let departamento = document.getElementById("departamento").value;
        let nombre = document.getElementById("nombre").value;
        let email = document.getElementById("email").value;

        let nuevaIncidencia = {
            code: generarCodigo(), // El codigo lo generamos
            estado: "Nuevo",
            asunto: asunto,
            detalle: detalle,
            prioridad: prioridad,
            departamento: departamento,
            nombre: nombre,
            email: email,
        };

        // Agregar la nueva incidencia al array
        incidencias.push(nuevaIncidencia);

        // Mostrar
        let mostrarCodigoDiv = document.getElementById("mostrar-codigo");
        mostrarCodigoDiv.textContent = nuevaIncidencia.code;

        // Limpiar los campos del formulario
        document.getElementById("asunto").value = "";
        document.getElementById("detalle").value = "";
        document.getElementById("departamento").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("email").value = "";

        console.log(incidencias);
    }
        
    // Captura del Boton de crear incidencia y su funcionalidad
    let crear = document.getElementById("crear-incidencia");
    crear.addEventListener("click", () => {
        console.log("boton crear pulsado");
        crearincidencia();
    });
    


    // ----------------------------------------------------------------- //
    function buscarincidencia() {
        // capturo el codigo introducido
        let codigo = document.getElementById("buscador");
        let codigoBuscado = Number(codigo.value.trim());
        console.log("dentro funcion");
        console.log("Valor dentro", codigo.value);
        console.log(codigo);

        // Campos a insertar la informacion de la incidencia
        let asunto = document.getElementById("buscarincidencia-asunto");
        let estado = document.getElementById("buscarincidencia-estado");
        let departamento = document.getElementById("buscarincidencia-departamento");
        let prioridad = document.getElementById("buscarincidencia-prioridad");
        let nombre =  document.getElementById("buscarincidencia-nombre");
        let email =  document.getElementById("buscarincidencia-email");
        let detalle =  document.getElementById("buscarincidencia-detalle");

        //
        let resultado = incidencias.find(
            (incidencia) => incidencia.code === codigoBuscado
        );

        if (resultado) {
            // Si se encuentra la incidencia, mostrarla en el HTML
            console.log("Incidencia encontrada:", resultado);

            asunto.textContent = resultado.asunto;
            estado.textContent = resultado.estado;
            departamento.textContent = resultado.departamento;
            prioridad.textContent = resultado.prioridad;
            nombre.textContent = resultado.nombre;
            email.textContent = resultado.email;
            detalle.textContent = resultado.detalle;

        } else {
            // Si no se encuentra la incidencia, mostrar un mensaje en el HTML
            console.log("No se encontró la incidencia.");
            asunto.textContent = "No se encontró la incidencia";
            estado.textContent = "";
            departamento.textContent = "";
            prioridad.textContent = "";
            nombre.textContent = "";
            email.textContent = "";
            detalle.textContent = "";
        }   
    }

    let buscar = document.getElementById("accionar-buscar");
    buscar.addEventListener("click", () => {
        console.log("boton buscar");
        buscarincidencia();
    });

});
  
  