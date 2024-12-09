document.addEventListener('DOMContentLoaded', () => {

    console.log('js cargado');

    // Redireccionamiento de Botones
        // Botones que redirigiran:
        let logo = document.getElementById('logo');
        let ir_crearincidencia = document.getElementById('usuario-boton-crearincidencia');
        let ir_buscarincidencia = document.getElementById('usuario-boton-buscarincidencia');
        let inicio_a_adminlogin = document.getElementById('inicio-a-adminlogin');


        // Sections a redirigir:
        let section_inicio = document.getElementById('usuario-inicio');
        let section_crearincidencia = document.getElementById('usuario-crearincidencia');
        let section_buscarincidencia = document.getElementById('usuario-buscarincidencia');
            //Pequeña funcion para cerrar todas las secciones y luego mostrar la correcta
            function displaynone(){
                section_inicio.style.display = 'none';
                section_crearincidencia.style.display = 'none';
                section_buscarincidencia.style.display = 'none';
            }

        // "Redireccionamiento"  
        logo.addEventListener('click', function(){
            console.log('Logo Inicio');
            displaynone();
            section_inicio.style.display = 'flex';
        })  

        inicio_a_adminlogin.addEventListener('click', function () {
            displaynone();
            section_inicio.style.display = "flex";
          });

        ir_crearincidencia.addEventListener('click', function() {
            console.log('Boton ir crear incidencia');
            displaynone();
            section_crearincidencia.style.display = 'flex';
        });

        ir_buscarincidencia.addEventListener('click', function() {
            console.log('Boton ir buscar incidencia');
            displaynone();
            section_buscarincidencia.style.display = "flex";
        });


        
    //


});
    
    
