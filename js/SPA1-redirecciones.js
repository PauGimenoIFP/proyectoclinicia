document.addEventListener('DOMContentLoaded', () => {

    console.log('js cargado');

    // Redireccionamiento de Botones
        // Botones que redirigiran: De Usuario
        let logo = document.getElementById('logo');
        let ir_crearincidencia = document.getElementById('usuario-boton-crearincidencia');
        let ir_buscarincidencia = document.getElementById('usuario-boton-buscarincidencia');
        let inicio_a_adminlogin = document.getElementById('inicio-a-adminlogin');

        // Botones que redirigiran: De Admin
        let ir_inicioincidencias = document.getElementById("inicioAdmin");
        let ir_Hechasincidencias = document.getElementById("hechasAdmin");
        let ir_Mensajes = document.getElementById("mensajesAdmin");
        let ir_Perfil = document.getElementById("perfilAdmin");
        let ir_login = document.getElementById("loginAdmin");
        let ir_entrarcuenta = document.getElementById("entrarCuenta");
        let loginForm = document.getElementById("loginForm");
        let ir_incidencias = document.querySelectorAll("#incidenciaestado");

        // Sections a redirigir: De Usuario
        let section_inicio = document.getElementById('usuario-inicio');
        let section_crearincidencia = document.getElementById('usuario-crearincidencia');
        let section_buscarincidencia = document.getElementById('usuario-buscarincidencia');
            
        // Sections a redirigir: De Usuario
        let section_login = document.getElementById("admin-login");
        let section_inicioIncidencia = document.getElementById("admin-inicio");
        let section_hechasIncidencia = document.getElementById("admin-hechas");
        let section_sidebar = document.getElementById("admin-sidebar");
        let section_perfil = document.getElementById("admin-perfil");
        let section_mensajes = document.getElementById("admin-mensajes");
        let section_incidenciaabierta = document.getElementById("admin-IncidenciaAbierta");

            //De usuario
            //Pequeña funcion para cerrar todas las secciones y luego mostrar la correcta
            function displaynoneuser(){
                section_inicio.style.display = 'none';
                section_crearincidencia.style.display = 'none';
                section_buscarincidencia.style.display = 'none';
            }
            // De Admin
            //Pequeña funcion para cerrar todas las secciones y luego mostrar la correcta
            function displaynone() {
                section_login.style.display = "none";
                section_inicioIncidencia.style.display = "none";
                section_hechasIncidencia.style.display = "none";
                section_perfil.style.display = "none";
                section_mensajes.style.display = "none";
                section_incidenciaabierta.style.display = "none";
            }

        // "Redireccionamiento" 
        // De usuario 
        logo.addEventListener('click', function(){
            console.log('Logo Inicio');
            displaynoneuser();
            section_inicio.style.display = 'flex';
        })  

        inicio_a_adminlogin.addEventListener('click', function () {
            displaynoneuser();
            section_inicio.style.display = "flex";
          });

        ir_crearincidencia.addEventListener('click', function() {
            console.log('Boton ir crear incidencia');
            displaynoneuser();
            section_crearincidencia.style.display = 'flex';
        });

        ir_buscarincidencia.addEventListener('click', function() {
            console.log('Boton ir buscar incidencia');
            displaynoneuser();
            section_buscarincidencia.style.display = "flex";
        });

        // De Admin
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
    // Fin Redireccionamiento



});
    
    
