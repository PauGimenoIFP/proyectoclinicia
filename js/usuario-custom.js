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
  estado: "En Proceso",
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
  detalle:
    "El cliente reportó que no podía enviar correos, pero el problema ya fue resuelto.",
  prioridad: "Baja",
  departamento: "IT",
  nombre: "Sofía Hernández",
  email: "sofia.hernandez@example.com",
});

document.addEventListener("DOMContentLoaded", () => {
  // Condicional para que no choque con otras vistas
  // Basicamente le doy una clase al body para seleccionarlo
  if (document.body.classList.contains("usuario-crearincidencia")) {
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
  }

  // Condicional para Buscar incidencias
  if (document.body.classList.contains("usuario-buscarincidencia")) {
    function imprimirIncidencias() {
      let i = 0;
      let contenedor = document.getElementById("codigos-forzados");

      // Función para imprimir todas las incidencias de una vez
      function mostrarIncidencias() {
        contenedor.innerHTML = "";

        // Imprimir todas las incidencias
        incidencias.forEach((incidencia) => {
          let nuevoParrafo = document.createElement("p");
          nuevoParrafo.textContent = `Código: ${incidencia.code}`;
          contenedor.appendChild(nuevoParrafo);
        });
      }

      mostrarIncidencias();

      // Reiniciar el proceso cada segundo
      setInterval(function () {
        mostrarIncidencias();
      }, 2000);
    }

    imprimirIncidencias();

    function buscarincidencia() {
      let codigo = document.getElementById("buscador");
      let codigoBuscado = Number(codigo.value.trim());
      console.log("dentro funcion");
      console.log("Valor dentro", codigo.value);
      console.log(codigo);

      let resultadoBusqueda = document.getElementById("resultado-busqueda");

      let resultado = incidencias.find(
        (incidencia) => incidencia.code === codigoBuscado
      );

      if (resultado) {
        // Si se encuentra la incidencia, mostrarla en el HTML
        console.log("Incidencia encontrada:", resultado);

        // Crear un HTML dinámico para mostrar los detalles de la incidencia
        resultadoBusqueda.innerHTML = `
                    <h3>Incidencia Encontrada</h3>
                    <p><strong>Código:</strong> ${resultado.code}</p>
                    <p><strong>Asunto:</strong> ${resultado.asunto}</p>
                    <p><strong>Detalle:</strong> ${resultado.detalle}</p>
                    <p><strong>Prioridad:</strong> ${resultado.prioridad}</p>
                    <p><strong>Departamento:</strong> ${resultado.departamento}</p>
                    <p><strong>Nombre:</strong> ${resultado.nombre}</p>
                    <p><strong>Email:</strong> ${resultado.email}</p>
                `;
      } else {
        // Si no se encuentra la incidencia, mostrar un mensaje en el HTML
        console.log("No se encontró la incidencia.");
        resultadoBusqueda.innerHTML = `
                    <p>No se encontró ninguna incidencia con ese código.</p>
                `;
      }
    }

    let buscar = document.getElementById("accionar-buscar");
    buscar.addEventListener("click", () => {
      console.log("boton buscar");

      buscarincidencia();
    });
  }

  // Espacio para las vistas de Admin

  if (document.body.classList.contains("usuario-crearincidencia")) {
  }
  document.getElementById("asunto-incidencia-0").textContent =
    incidencias[0].asunto;
  document.getElementById("asunto-incidencia-1").textContent =
    incidencias[1].asunto;
  document.getElementById("asunto-incidencia-2").textContent =
    incidencias[2].asunto;
  const textarea = document.getElementById("descripcion");
  if (textarea) {
    // Asegúrate de que incidencias tenga datos
    if (incidencias.length > 0) {
      console.log(incidencias[0].detalle); // Revisión de datos
      textarea.textContent = incidencias[0].detalle;
    } else {
      console.error("No hay incidencias disponibles");
    }
  } else {
    console.error("El elemento con ID 'descripcion' no se encontró en el DOM");
  }
});
