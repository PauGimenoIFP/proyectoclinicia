document.addEventListener("DOMContentLoaded", () => {
  console.log("js cargado");

  // Redireccionamiento de Botones
  // Botones que redirigiran:
  let inicio_a_adminlogin = document.getElementById('inicio-a-adminlogin');

  let ir_inicioincidencias = document.getElementById("inicioAdmin");
  let ir_Hechasincidencias = document.getElementById("hechasAdmin");
  let ir_Mensajes = document.getElementById("mensajesAdmin");
  let ir_Perfil = document.getElementById("perfilAdmin");
  let ir_login = document.getElementById("loginAdmin");
  let ir_entrarcuenta = document.getElementById("entrarCuenta");
  let loginForm = document.getElementById("loginForm");
  let ir_incidencias = document.querySelectorAll("#incidenciaestado");

  // Sections a redirigir:
  let section_login = document.getElementById("admin-login");
  let section_inicioIncidencia = document.getElementById("admin-inicio");
  let section_hechasIncidencia = document.getElementById("admin-hechas");
  let section_sidebar = document.getElementById("admin-sidebar");
  let section_perfil = document.getElementById("admin-perfil");
  let section_mensajes = document.getElementById("admin-mensajes");
  let section_incidenciaabierta = document.getElementById(
    "admin-IncidenciaAbierta"
  );

  //Pequeña funcion para cerrar todas las secciones y luego mostrar la correcta
  function displaynone() {
    section_login.style.display = "none";
    section_inicioIncidencia.style.display = "none";
    section_hechasIncidencia.style.display = "none";
    section_perfil.style.display = "none";
    section_mensajes.style.display = "none";
    section_incidenciaabierta.style.display = "none";
  }

  // Verificar si el sidebar debe mostrarse
  if (section_login.style.display == "none") {
    section_sidebar.style.display = "flex";
  } else {
    section_sidebar.style.display = "none";
  }

 
  
  inicio_a_adminlogin.addEventListener('click', function () {
    displaynone();
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
  ir_incidencias.forEach(function (ir_incidencia) {
    ir_incidencia.addEventListener("click", function () {
      const incidenciaId = ir_incidencia.getAttribute("data-id");
      const asunto = ir_incidencia.textContent;

      // Obtener los detalles de la incidencia desde el array de incidencias
      const incidencia = incidencias.find((inc) => inc.code == incidenciaId);

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
    });
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
});
