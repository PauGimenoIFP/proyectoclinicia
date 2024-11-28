
let incidencias = [];

document.addEventListener('DOMContentLoaded', () => {
    // Array para almacenar las incidencias
    
  
    // Seleccionar elementos del DOM
    let asunto = document.getElementById('asunto');
    let detalle = document.getElementById('detalle');

    let prioridad = '';

    let bajaRadio = document.getElementById('baja');
    let mediaRadio = document.getElementById('media');
    let altaRadio = document.getElementById('alta');
    let urgenteRadio = document.getElementById('urgente');

    if (bajaRadio.checked) {
      prioridad = bajaRadio.value;
    } else if (mediaRadio.checked) {
      prioridad = mediaRadio.value;
    } else if (altaRadio.checked) {
      prioridad = altaRadio.value;
    } else if (urgenteRadio.checked) {
      prioridad = urgenteRadio.value;
    }

    let departamento = document.getElementById('departamento');
    let nombre = document.getElementById('nombre');
    let email = document.getElementById('email');
    
  
    // Función para generar un código único
    let generateCode = () => {
        let timestamp = Date.now();
        let random = Math.floor(Math.random() * 90000) + 10000;  // Genera un número aleatorio de 5 dígitos
        return `INC-${timestamp}-${random}`;
    };
  
    let crear = document.getElementById('crear-incidencia');
    // Manejar el clic en el botón

    crear.addEventListener('click', () => {
        console.log('boton crear pulsado');
        
        // Obtener valores de los inputs
        let a = asunto.value.trim();
        let d = detalle.value.trim();
        let p = prioridad.value;
        let dp = departamento.value.trim();
        let n = nombre.value.trim();
        let e = email.value.trim();

        // Validar los campos (opcional)
        if (!a || !d) {
            alert('Por favor, complete todos los campos requeridos.');
            return;
        }
  

        console.log('Validacion pasada');

        // Generar el código de la incidencia
        let code = generateCode();

        console.log('Codigo Generado');

        let nuevaIncidencia = {
            code,
            asunto: a,
            detalle: d,
            prioridad: p,
            departamento: dp,
            nombre: n,
            email: e
        };

        console.log('creando objeto');

        incidencias.push(nuevaIncidencia);

        console.log('agregada al array');

        let mostrarCodigoDiv = document.getElementById('mostrar-codigo');
        mostrarCodigoDiv.textContent = code;



        asunto.value = '';
        detalle.value = '';
        prioridadvalue = '';
        nombre.value = '';
        email.value = ''; 

        console.log('valores reseteados');

        // Mostrar en la consola (para depuración)
        console.log('Incidencias guardadas:', incidencias);
    });
    console.log('Incidencias guardadas:', incidencias);
});
  