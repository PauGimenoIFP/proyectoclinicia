
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

    let codigo = document.getElementById('buscador');
    let buscar = document.getElementById('accionar-buscar');

    buscar.addEventListener('click', () => {
        console.log('boton buscar');

    let codigoBuscado = codigo.value.trim();

    let resultado = incidencias.find(inc => inc.code === codigoBuscado);

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
    


    
    });
    console.log('Incidencias guardadas:', incidencias);
});
  