document.addEventListener("DOMContentLoaded", () => {
  console.log("js cargado");

  // Redireccionamiento de Botones
  // Botones que redirigiran:
  let ir_inicioincidencias = document.getElementById("inicioAdmin");
  let ir_Hechasincidencias = document.getElementById("hechasAdmin");
  let ir_Mensajes = document.getElementById("mensajesAdmin");
  let ir_Perfil = document.getElementById("perfilAdmin");
  let ir_login = document.getElementById("loginAdmin");
  let ir_entrarcuenta = document.getElementById("entrarCuenta");
  let loginForm = document.getElementById("loginForm");

  // Sections a redirigir:
  let section_login = document.getElementById("admin-login");
  let section_inicioIncidencia = document.getElementById("admin-inicio");
  let section_hechaIncidencia = document.getElementById("admin-hechas");
  let section_sidebar = document.getElementById("admin-sidebar");

  //Pequeña funcion para cerrar todas las secciones y luego mostrar la correcta
  function displaynone() {
    section_login.style.display = "none";
    section_inicioIncidencia.style.display = "none";
    section_hechaIncidencia.style.display = "none";
  }

  // Verificar si el sidebar debe mostrarse
  if (section_login.style.display == "none") {
    section_sidebar.style.display = "flex";
  } else {
    section_sidebar.style.display = "none";
  }

  // Manejar el envío del formulario
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevenir el envío del formulario
    console.log("ta to bien");
    const correo = document.getElementById("floatingInput").value;
    const contrasena = document.getElementById("floatingPassword").value;

    // Verifica que ambos campos no estén vacíos
    if (correo && contrasena) {
      // Mostrar la sección de inicio y ocultar el login
      displaynone();
      section_inicioIncidencia.style.display = "flex";
      section_sidebar.style.display = "flex";
    } else {
      alert("Por favor, completa ambos campos.");
    }
  });

});
