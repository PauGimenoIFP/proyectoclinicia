// js compartido para acceder al array de Incidencias

// Cada incidencia estara compuesta por:

// Codigo
    // Función para generar un código único
    let generateCode = () => {
        let timestamp = Date.now();
        let random = Math.floor(Math.random() * 90000) + 10000;  // Genera un número aleatorio de 5 dígitos
        return `INC-${timestamp}-${random}`;
    };
// Asunto
// Detalle
// Prioridad
// Departamento
// Nombre (opcional)
// Email (opcional)

let incidencias = [];

document.addEventListener('DOMContentLoaded', () => {
    
    // Condicional para que no choque con otras vistas
    // Basicamente le doy una clase al body para seleccionarlo
    if (document.body.classList.contains("usuario-crearincidencia")) {
        
        function crearincidencia(){
        
            // Como hice la prioridad diferente , usando radiales, o no se que cosa
            // tengo que hacer esto para ver cual es el boton "pulsado"
            
            let prioridad = '';
    
            if (bajaRadio.checked) {
                prioridad = bajaRadio.value;
            } else if (mediaRadio.checked) {
                prioridad = mediaRadio.value;
            } else if (altaRadio.checked) {
                prioridad = altaRadio.value;
            } else if (urgenteRadio.checked) {
                prioridad = urgenteRadio.value;
            }
            // Me guardo los inputs en una variable para luego crear el objeto y meterlo en el array

            let asunto = document.getElementById('asunto').value;
            let detalle = document.getElementById('detalle').value;
            let departamento = document.getElementById('departamento').value;
            let nombre = document.getElementById('nombre').value;
            let email = document.getElementById('email').value;
            
            let nuevaIncidencia = {
                asunto: asunto,
                detalle: detalle,
                departamento: departamento,
                nombre: nombre,
                email: email,
                code: generateCode() // El codigo lo generamos
            };

            // Agregar la nueva incidencia al array
            incidencias.push(nuevaIncidencia);

            // Limpiar los campos del formulario
            document.getElementById('asunto').value = '';
            document.getElementById('detalle').value = '';
            document.getElementById('departamento').value = '';
            document.getElementById('nombre').value = '';
            document.getElementById('email').value = '';



            console.log(incidencias);


        }

        // Captura del Boton de crear incidencia y su funcionalidad
        let crear = document.getElementById('crear-incidencia');
        
        crear.addEventListener('click', () => {
        console.log('boton crear pulsado');


        )}


    }
)};
/*
    // Seleccionar elementos del DOM
    

    

    
    
  
    
  
    
        
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
  