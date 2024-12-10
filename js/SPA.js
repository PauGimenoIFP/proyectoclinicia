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
  detalle:
    "El cliente reportó que no podía enviar correos, pero el problema ya fue resuelto.",
  prioridad: "Baja",
  departamento: "IT",
  nombre: "Sofía Hernández",
  email: "sofia.hernandez@example.com",
});

document.addEventListener("DOMContentLoaded", () => {
  // ----------------------------------------------------------------- //

  // funciones para incidencias admin
  if (document.querySelector(".incidenciaabierta")) {
    function imprimirnuevo() {
      //imprimir incidencias nuevas
      let boxnuevas = document.getElementById("caja-incidencias-nuevas");
      boxnuevas.innerHTML = "";
      incidencias.forEach((incidencia) => {
        if (incidencia.estado === "Nuevo") {
          let nuevaIncidencia = document.createElement("div");
          nuevaIncidencia.textContent = incidencia.asunto;
          nuevaIncidencia.className = "incidencia";
          nuevaIncidencia.id = "incidenciaestado";
          nuevaIncidencia.setAttribute("data-id", incidencia.code);
          boxnuevas.appendChild(nuevaIncidencia);
        }
      });
    }

    console.log("estoy en incidencia abierta");

    function imprimirabierto() {
      //imprimir incidencias abiertas
      let boxnuevas = document.getElementById("caja-incidencias-abiertas");
      boxnuevas.innerHTML = "";
      incidencias.forEach((incidencia) => {
        if (incidencia.estado === "Abierto") {
          let nuevaIncidencia = document.createElement("div");
          nuevaIncidencia.textContent = incidencia.asunto;
          nuevaIncidencia.className = "incidencia";
          nuevaIncidencia.id = "incidenciaestado";
          nuevaIncidencia.setAttribute("data-id", incidencia.code);
          boxnuevas.appendChild(nuevaIncidencia);
        }
      });
    }
  }
  if (document.querySelector(".incidenciahecha")) {
    function imprimirhecho() {
      //imprimir incidencias hechas
      let boxnuevas = document.getElementById("caja-incidencias-hechas");
      boxnuevas.innerHTML = "";
      incidencias.forEach((incidencia) => {
        if (incidencia.estado === "Cerrado") {
          let nuevaIncidencia = document.createElement("div");
          nuevaIncidencia.textContent = incidencia.asunto;
          nuevaIncidencia.className = "incidencia";
          nuevaIncidencia.id = "incidenciaestado";
          nuevaIncidencia.setAttribute("data-id", incidencia.code);
          boxnuevas.appendChild(nuevaIncidencia);
        }
      });
    }

    setInterval(() => {
      imprimirnuevo(); // Imprime incidencias nuevas
      imprimirabierto(); // Imprime incidencias abiertas
      imprimirhecho(); // Imprime incidencias cerradas
      let ir_incidencias = document.querySelectorAll("#incidenciaestado");
      let section_incidenciaabierta = document.getElementById(
        "admin-IncidenciaAbierta"
      );
      ir_incidencias.forEach(function (ir_incidencia) {
        ir_incidencia.addEventListener("click", function () {
          const incidenciaId = ir_incidencia.getAttribute("data-id");
          const asunto = ir_incidencia.textContent;

          // Obtener los detalles de la incidencia desde el array de incidencias
          const incidencia = incidencias.find(
            (inc) => inc.code == incidenciaId
          );

          if (incidencia) {
            localStorage.setItem("incidenciaSeleccionada", incidenciaId);
            localStorage.setItem("asuntoSeleccionado", asunto);
            localStorage.setItem("detalleSeleccionado", incidencia.detalle);
            localStorage.setItem("prioridadSeleccionada", incidencia.prioridad);
            localStorage.setItem(
              "departamentoSeleccionado",
              incidencia.departamento
            );
            localStorage.setItem("estadoSeleccionado", incidencia.estado);
            localStorage.setItem("nombreSeleccionado", incidencia.nombre);
          }

          displaynone();
          section_incidenciaabierta.style.display = "flex";

          // Guardar la última incidencia visitada
          window.ultimaIncidencia = incidencia; // Almacena la última incidencia visitada
        });
      });
      // Agregar el evento para el botón "En proceso"
      let botonProceso = document.getElementById("boton-proceso");

      // Verificar el estado de la incidencia y mostrar/ocultar el botón
      let incidenciaId = localStorage.getItem("incidenciaSeleccionada");
      let incidencia = incidencias.find((inc) => inc.code == incidenciaId);

      if (incidencia) {
        if (incidencia.estado === "Nuevo") {
          botonProceso.style.display = "block"; // Mostrar el botón si el estado es "Nuevo"
        } else {
          botonProceso.style.display = "none"; // Ocultar el botón si el estado no es "Nuevo"
        }
      }

      // Agregar el evento para el botón "En proceso"
      botonProceso.onclick = () => { // Cambiar a onclick para evitar múltiples registros
        // Cambiar el estado a "Abierto" si la última incidencia existe
        if (window.ultimaIncidencia) {
          window.ultimaIncidencia.estado = "Abierto";
          console.log(
            `Estado de la incidencia ${window.ultimaIncidencia.code} cambiado a "Abierto"`
          );
        }
      };

      // Agregar el evento para el botón "Completar"
      let botonCompletar = document.getElementById("boton-completar");

      // Agregar el evento para el botón "Completar"
      botonCompletar.onclick = () => { // Cambiar a onclick para evitar múltiples registros
        // Cambiar el estado a "Cerrado" si la última incidencia existe
        if (window.ultimaIncidencia) {
          window.ultimaIncidencia.estado = "Cerrado";
          console.log(
            `Estado de la incidencia ${window.ultimaIncidencia.code} cambiado a "Cerrado"`
          );
        }
      };
    }, 1000);
  }
  // Redireccionamiento
  console.log("dentro redireccion");

  // Redireccionamiento de Botones
  // Botones que redirigiran: De Usuario
  let logo = document.getElementById("logo");
  let ir_crearincidencia = document.getElementById(
    "usuario-boton-crearincidencia"
  );
  let ir_buscarincidencia = document.getElementById(
    "usuario-boton-buscarincidencia"
  );
  let ir_adminlogin = document.getElementById("ir-adminlogin");

  // Botones que redirigiran: De Admin
  let ir_inicioincidencias = document.getElementById("inicioAdmin");
  let ir_Hechasincidencias = document.getElementById("hechasAdmin");
  let ir_Mensajes = document.getElementById("mensajesAdmin");
  let ir_Perfil = document.getElementById("perfilAdmin");
  let ir_login = document.getElementById("loginAdmin");
  let ir_entrarcuenta = document.getElementById("entrarCuenta");
  let loginForm = document.getElementById("loginForm");

  console.log("dentro sections");
  // Sections a redirigir: De Usuario
  let section_inicio = document.getElementById("usuario-inicio");
  let section_crearincidencia = document.getElementById(
    "usuario-crearincidencia"
  );
  let section_buscarincidencia = document.getElementById(
    "usuario-buscarincidencia"
  );

  // Sections a redirigir: De Usuario
  let section_login = document.getElementById("admin-login");
  let section_inicioIncidencia = document.getElementById("admin-inicio");
  let section_hechasIncidencia = document.getElementById("admin-hechas");
  let section_sidebar = document.getElementById("admin-sidebar");
  let section_perfil = document.getElementById("admin-perfil");
  let section_mensajes = document.getElementById("admin-mensajes");
  let section_incidenciaabierta = document.getElementById(
    "admin-IncidenciaAbierta"
  );

  // De Admin
  //Pequeña funcion para cerrar todas las secciones y luego mostrar la correcta
  function displaynone() {
    section_login.style.display = "none";
    section_inicioIncidencia.style.display = "none";
    section_hechasIncidencia.style.display = "none";
    section_perfil.style.display = "none";
    section_mensajes.style.display = "none";
    section_incidenciaabierta.style.display = "none";
    section_inicio.style.display = "none";
    section_crearincidencia.style.display = "none";
    section_buscarincidencia.style.display = "none";
  }

  // "Redireccionamiento"
  // De usuario
  console.log("Dentro eventos de redireccion");

  logo.addEventListener("click", function () {
    console.log("Logo Inicio");
    displaynone();
    section_sidebar.style.display = "none";
    section_inicio.style.display = "flex";
  });

  ir_crearincidencia.addEventListener("click", function () {
    console.log("Boton ir crear incidencia");
    displaynone();
    section_crearincidencia.style.display = "flex";
  });

  ir_buscarincidencia.addEventListener("click", function () {
    console.log("Boton ir buscar incidencia");
    displaynone();
    section_buscarincidencia.style.display = "flex";
  });

  // De Admin
  // Verificar si el sidebar debe mostrarse
  if (section_login.style.display == "none") {
    section_sidebar.style.display = "flex";
  } else {
    section_sidebar.style.display = "none";
  }

  ir_adminlogin.addEventListener("click", function () {
    console.log("Ir a login");
    displaynone();
    section_inicio.style.display = "none";
    section_login.style.display = "flex";
  });

  ir_inicioincidencias.addEventListener("click", function () {
    displaynone();
    section_inicioIncidencia.style.display = "flex";
  });

  ir_Hechasincidencias.addEventListener("click", function () {
    displaynone();
    section_hechasIncidencia.style.display = "flex";
  });

  ir_Mensajes.addEventListener("click", function () {
    displaynone();
    section_mensajes.style.display = "flex";
  });

  ir_Perfil.addEventListener("click", function () {
    displaynone();
    section_perfil.style.display = "flex";
  });

  ir_login.addEventListener("click", function () {
    displaynone();
    section_login.style.display = "flex";
    section_sidebar.style.display = "none";
  });

  ir_Mensajes.addEventListener("click", function () {
    displaynone();
    section_mensajes.style.display = "flex";
  });
  // Fin Redireccionamiento

  // Funciones User
  console.log("dentro user");
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
    let h4 = document.createElement("h4");
    h4.textContent = nuevaIncidencia.code;
    mostrarCodigoDiv.appendChild(h4);

    // Limpiar los campos del formulario
    document.getElementById("asunto").value = "";
    document.getElementById("detalle").value = "";
    document.getElementById("departamento").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";

    console.log(incidencias);
  }

  // Captura del Boton de crear incidencia y su funcionalidad
  let myCarousel = new bootstrap.Carousel(
    document.getElementById("myCarousel")
  );
  let crear = document.getElementById("crear-incidencia");
  crear.addEventListener("click", () => {
    console.log("boton crear pulsado");
    console.log(incidencias);
    myCarousel.next();
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
    let nombre = document.getElementById("buscarincidencia-nombre");
    let email = document.getElementById("buscarincidencia-email");
    let detalle = document.getElementById("buscarincidencia-detalle");

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

  // Fin User

  // Funciones Admin
  console.log("dentro admin");
  // Manejar el envío del formulario
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevenir el envío del formulario
    const correo = document.getElementById("floatingInput").value;
    const contrasena = document.getElementById("floatingPassword").value;

    // Verifica que ambos campos no estén vacíos
    if (correo && contrasena) {
      // Mostrar la sección de inicio y ocultar el login
      displaynone();
      section_inicioIncidencia.style.display = "flex";
      section_sidebar.style.display = "flex";

      // Limpiar los campos del formulario
      document.getElementById("floatingInput").value = "";
      document.getElementById("floatingPassword").value = "";
    } else {
      alert("Por favor, completa ambos campos.");
    }
  });

  function actualizarDatosIncidencia() {
    const asuntoElemento = document.getElementById("asunto-incidencia");
    const detalleElemento = document.getElementById("descripcion");
    const prioridadElemento = document.getElementById("prioridad-incidencia");
    const departamentoElemento = document.getElementById(
      "departamento-incidencia"
    );
    const estadoElemento = document.getElementById("estado-incidencia");
    const nombreElemento = document.getElementById("nombre-incidencia");

    const asuntoGuardado = localStorage.getItem("asuntoSeleccionado");
    const detalleGuardado = localStorage.getItem("detalleSeleccionado");
    const prioridadGuardada = localStorage.getItem("prioridadSeleccionada");
    const departamentoGuardado = localStorage.getItem(
      "departamentoSeleccionado"
    );
    const estadoGuardado = localStorage.getItem("estadoSeleccionado");
    const nombreGuardado = localStorage.getItem("nombreSeleccionado");

    if (asuntoGuardado) {
      asuntoElemento.textContent = asuntoGuardado; // Establecer solo el asunto
    }
    if (detalleGuardado) {
      detalleElemento.textContent = detalleGuardado; // Establecer el detalle
    }
    if (prioridadGuardada) {
      prioridadElemento.textContent = prioridadGuardada; // Establecer la prioridad
    }
    if (departamentoGuardado) {
      departamentoElemento.textContent = departamentoGuardado; // Establecer el departamento
    }
    if (estadoGuardado) {
      estadoElemento.textContent = estadoGuardado; // Establecer el estado
    }
    if (nombreGuardado) {
      nombreElemento.textContent = nombreGuardado; // Establecer el nombre
    }
  }

  let intervaloActualizar;

  if (document.querySelector("#admin-IncidenciaAbierta")) {
    actualizarDatosIncidencia(); // Llamar a la función para actualizar los datos
    clearInterval(intervaloActualizar); // Limpiar el intervalo anterior
    intervaloActualizar = setInterval(actualizarDatosIncidencia, 1); // Actualizar cada 2 segundos
  }

  // Fin Admin
});

function cambiarDatos() {
  const nombre = document.getElementById("username").value;
  const correo = document.getElementById("email_perfil").value;
  const contrasenaActual = document.getElementById("currentPassword").value;

  // Validar que los campos no estén vacíos y que se haya ingresado la contraseña
  if (contrasenaActual === "" || (nombre === "" && correo === "")) {
    alert(
      "Por favor, complete todos los campos requeridos y asegúrese de ingresar la contraseña actual."
    );
    return;
  }

  // Validar que el correo contenga una '@'
  if (correo !== "" && !correo.includes("@")) {
    alert('Por favor, ingrese un correo electrónico válido que contenga "@"');
    return;
  }

  // Actualizar el texto de nombre y correo
  if (nombre !== "") {
    document.getElementById("nombreUsuario").innerText = nombre;
  }
  if (correo !== "") {
    document.getElementById("correoUsuario").innerText = correo;
  }

  alert("Datos actualizados correctamente.");

  // Limpiar los campos del formulario
  document.getElementById("username").value = "";
  document.getElementById("email_perfil").value = "";
  document.getElementById("currentPassword").value = "";
  document.getElementById("newPassword").value = "";
}
