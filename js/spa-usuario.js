document.addEventListener('DOMContentLoaded', () => {

    console.log('js cargado');

    // Redireccionamiento de Botones
        // Botones que redirigiran:
        let ir_crearincidencia = document.getElementById('usuario-boton-crearincidencia');
        let ir_buscarincidencia = document.getElementById('usuario-boton-buscarincidencia');


        // Sections a redirigir:
        let section_inicio = document.getElementById('usuario-inicio');
        let section_crearincidencia = document.getElementById('usuario-crearincidencia');
        let section_buscarincidencia = document.getElementById('usuario-buscarinciencia');
        
        // "Redireccionamiento"    
        ir_crearincidencia.addEventListener('click', function() {
            console.log('Boton ir crear incidencia');
            section_inicio.style.display = 'none';
            section_crearincidencia.style.display = 'flex';
        });

        ir_buscarincidencia.addEventListener('click', function() {
            console.log('Boton ir buscar incidencia');
            section_inicio.style.display = 'none';
            section_crearincidencia.style.removeProperty('display');
        });
        
    
    //


});
    
    
