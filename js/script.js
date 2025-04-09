// Datos del test
const preguntas = [
    {
        pregunta: "¿Cómo reaccionas cuando el camión no hace parada aunque va medio vacío?",
        opciones: [
            { texto: "¡NI QUE FUERA DE PRIMERA PLUS, DON! 😤", tipo: "estratega" },
            { texto: "Lo anoto en mi lista mental de 'Choferes que voy a evitar' 📋", tipo: "antisocial" },
            { texto: "Me consuelo con un tamalito de la señora de la esquina 🌽", tipo: "mapache" }
        ]
    },
    {
        pregunta: "El asiento está ligeramente húmedo. ¿Qué haces?",
        opciones: [
            { texto: "¡ES MÍO! (total, el pantalón ya ha visto cosas peores) 👖", tipo: "toxico" },
            { texto: "Le echo una miradita pero prefiero ir parado 😐", tipo: "termometro" },
            { texto: "Lo limpio con la mano y listo 😆", tipo: "vip" }
        ]
    },
    {
        pregunta: "¿Qué haces cuando el camión va tan lleno que hasta tienes que ir con un pie afuera?",
        opciones: [
            { texto: "Aprovecho para hacer ejercicio isométrico agarrándome del tubo 💪", tipo: "pulpo" },
            { texto: "Me disperso entre la gente y me voy a un viaje astral hasta mi parada 🕶️", tipo: "antisocial" },
            { texto: "Le digo al de adelante: 'Ay, perdón, es que traigo mucha prisa' (mentira) 🙊", tipo: "estratega" }
        ]
    },
    {
        pregunta: "El chofer pone cumbias a todo volumen. ¿Cuál es tu reacción?",
        opciones: [
            { texto: "¡Bailo mientras me agarro del tubo! 🎵", tipo: "vip" },
            { texto: "Me pongo audífonos al máximo para no oír Los Ángeles Azules por décima vez 🎧", tipo: "antisocial" },
            { texto: "Le pido amablemente que baje el volumen (y me ignora) 🗣️", tipo: "termometro" }
        ]
    },
    {
        pregunta: "¿Qué frase has dicho MIL veces en el camión?",
        opciones: [
            { texto: "¿Este sí va para el Centro? (aunque ya lo sabes) 🏫", tipo: "toxico" },
            { texto: "¡Bajan! 🗣️", tipo: "estratega" },
            { texto: "No puedo ceder asiento, yo también me siento mal (pero en realidad estás bien) 👌", tipo: "mapache" }
        ]
    },
    {
        pregunta: "¿Qué es lo peor que te puede pasar en el camión?",
        opciones: [
            { texto: "Que se suba el vendedor de chicles y ocupen toda la puerta 🍬", tipo: "termometro" },
            { texto: "Que el camión se descomponga EN MEDIO de la calle 🔧", tipo: "toxico" },
            { texto: "Que mi crush me vea mientras me echo un sueñito 😴", tipo: "antisocial" }
        ]
    },
    {
        pregunta: "¿Qué objeto mágico salvó tu vida en el camión?",
        opciones: [
            { texto: "Mi escudo de <<No me gusta hablar>> (mis audífonos) 🎧", tipo: "antisocial" },
            { texto: "La app donde veo a qué hora pasa mi camión (que nunca funciona) 📱", tipo: "toxico" },
            { texto: "Un snack que me encontré en mi mochila 🍬", tipo: "mapache" }
        ]
    },
    {
        pregunta: "¿Cómo es tu relación con los choferes?",
        opciones: [
            { texto: "Me conocen y hasta me guardan lugar 😎", tipo: "vip" },
            { texto: "Evito el contacto visual para que no me pidan cambio 👀", tipo: "antisocial" },
            { texto: "Les saco plática para hacer el viaje menos aburrido 🗣️", tipo: "mapache" }
        ]
    },
    {
        pregunta: "¿Qué harías si te quedas dormido y pasas tu parada?",
        opciones: [
            { texto: "Bajo corriendo como si fuera emergencia 🏃", tipo: "pulpo" },
            { texto: "Acepto mi destino y me pido un Uber 🚖", tipo: "vip" },
            { texto: "Me hago el dormido hasta la siguiente 😴", tipo: "leon" }
        ]
    },
    {
        pregunta: "El clima en León está loco. ¿Cómo te afecta en el camión?",
        opciones: [
            { texto: "Me da golpe de calor o me enfermo, no hay punto medio 🌡️", tipo: "termometro" },
            { texto: "Llevo sombrilla, suéter y bloqueador... Por si acaso ☂️", tipo: "vip" },
            { texto: "Me subo aunque el camión esté inundado 🐸", tipo: "toxico" }
        ]
    },
    {
        pregunta: "¿Qué actividad haces normalmente en el camión?",
        opciones: [
            { texto: "Busco al que vende churros de azúcar en cada parada 🦝", tipo: "mapache" },
            { texto: "Siempre me toca parado y me agarro de 3 tubos a la vez 🐙", tipo: "pulpo" },
            { texto: "Me quedo dormido todo el camino 🦁", tipo: "leon" }
        ]
    },
    {
        pregunta: "¿Qué llevarías al camión en un apocalipsis zombie?",
        opciones: [
            { texto: "Un escudo (mi mochila) 🎒", tipo: "pulpo" },
            { texto: "Un megáfono para gritar: ¡BAJAN! 📢", tipo: "estratega" },
            { texto: "Nada, total, los zombies viajan en coche 🚗", tipo: "leon" }
        ]
    },
    {
        pregunta: "¿Cuál es tu superpoder en hora pico?",
        opciones: [
            { texto: "Aguantar la respiración cuando no hay espacio 👃", tipo: "pulpo" },
            { texto: "Encontrar el único asiento libre con mi radar integrado 🎯", tipo: "vip" },
            { texto: "Hacer que mi mochila ocupe 2 lugares (evil laugh) 😈", tipo: "antisocial" }
        ]
    },
    {
        pregunta: "¿Con qué frase te identificas más?",
        opciones: [
            { texto: "El camión es tóxico, pero es mi único medio para moverme 💔", tipo: "toxico" },
            { texto: "Me duermo más a gusto en el camión que en mi casa 😴", tipo: "leon" },
            { texto: "Prefiero irme en camión porque sale más barato 💸", tipo: "mapache" }
        ]
    },
    {
        pregunta: "Si el camión fuera un grupo de WhatsApp, sería...",
        opciones: [
            { texto: "El grupo de FAMILIA BENDICIONES (puro spam) 👪", tipo: "estratega" },
            { texto: "El grupo de amigos donde pasan stickers y una que otra tarea 😆", tipo: "vip" },
            { texto: "El grupo fantasma (todos ven, pero nadie habla) 👻", tipo: "antisocial" }
        ]
    }
];

// Resultados posibles
const resultados = {
    mapache: {
        titulo: "🦝 El Mapache Comelón",
        emoji: "🦝",
        descripcion: "Vas olfateando antojos en cada parada. Tu instinto te lleva directo a los puestos de comida cerca de las rutas, porque viajar con el estómago rugiendo no es opción.",
        civi: "CIVI te avisará dónde hay puestos de comida cerca de tu ruta (para que no viajes con el estómago vacío).",
        clase: "mapache",
        imagen: "contenido/imagenes/mapache.jpeg"
    },
    pulpo: {
        titulo: "🐙 El Pulpo Frenético",
        descripcion: "Te agarras del único tubo disponible, y si no hay, te quedas en la puerta con un pie afuera, aunque a veces terminas enredado como verdadero molusco. Dominas el arte del equilibrio y te bajas del camión en movimiento.",
        civi: "Con CIVI, sabrás qué camiones tienen mejor suspensión (para viajar como humano, no como pulpo).",
        clase: "pulpo",
        imagen: "contenido/imagenes/pulpo.jpeg"
    },
    leon: {
        titulo: "🦁 El León Dormilón",
        descripcion: "Duermes a cualquier hora, en cualquier lugar, incluso parado. Tu habilidad para descansar en medio del caos es legendaria, aunque a veces termines en Silao porque se te pasó tu parada.",
        civi: "CIVI te despertará con una alerta antes de tu parada (para que no termines en Silao).",
        clase: "leon",
        imagen: "contenido/imagenes/leon.jpeg"
    },
    antisocial: {
        titulo: "🎧 El Gato Antisocial",
        descripcion: "Tus audífonos son tu escudo. Nadie se atreve a interrumpir tu playlist de música mientras vas mirando por la ventana, evitas a toda costa a la señora que habla sobre la misa del domingo.",
        civi: "CIVI te dirá qué horarios son más tranquilos (para evitar pasajeros que interrumpan tu viaje con conversaciones).",
        clase: "antisocial",
        imagen: "contenido/imagenes/gato.jpeg"
    },
    vip: {
        titulo: "😎 El Perro VIP",
        descripcion: "Hasta el chofer te saluda por tu nombre. Tienes asiento reservado (mentalmente) y conoces todos los chismes de la ruta. Eres una leyenda viva del camión.",
        civi: "CIVI te dará acceso a datos exclusivos de rutas (para mantener tu estatus de leyenda).",
        clase: "vip",
        imagen: "contenido/imagenes/perro.jpeg"
    },
    termometro: {
        titulo: "🌡️ El Camaleón Térmico",
        descripcion: "Sufres con cada cambio de clima: si está el sol, te asoleas; y si están las nubes, te agripas. Desde el infierno del asfalto hasta el ártico con ventanas abiertas, tu cuerpo registra cada grado de incomodidad.",
        civi: "CIVI te recomendará camiones con aire o ventanas (para no derretirte en verano).",
        clase: "termometro",
        imagen: "contenido/imagenes/camaleon.jpeg"
    },
    estratega: {
        titulo: "📢 El Chango Gritón",
        descripcion: "Tu ¡BAJAN! se escucha hasta Silao. Dominas el arte de abrirte paso entre la multitud con un simple <<ahí comper eh>>.",
        civi: "CIVI te avisará cuándo está por llegar tu parada (para que no te pongas ronco de tanto gritar).",
        clase: "estratega",
        imagen: "contenido/imagenes/chango.jpeg"
    },
    toxico: {
        titulo: "💔 La Serpiente Tóxica",
        descripcion: "Odias el transporte... pero lo extrañas cuando es fin de semana. Te quieres comprar un carro o una moto, pero el precio del pasaje no te deja. Es una relación de amor-odio donde prometes dejarlo cada lunes, pero siempre regresas el martes.",
        civi: "CIVI te ayudará a reconciliarte con rutas eficientes (y menos frenazos).",
        clase: "toxico",
        imagen: "contenido/imagenes/serpiente.jpeg"
    }
};














// Variables globales
let preguntaActual = 0;
let respuestas = [];
let contadorTipos = {
    mapache: 0,
    pulpo: 0,
    leon: 0,
    antisocial: 0,
    vip: 0,
    termometro: 0,
    estratega: 0,
    toxico: 0
};

// Función para cargar la pregunta actual
function cargarPregunta() {
    // Verificar si estamos en la página del test
    if (!document.getElementById('preguntasContainer')) return;
    
    const container = document.getElementById('preguntasContainer');
    container.innerHTML = '';
    
    // Ocultar alerta de no selección
    const alerta = document.getElementById('alertaNoSeleccion');
    if (alerta) {
        alerta.classList.add('d-none');
    }
    
    // Actualizar barra de progreso
    const progreso = ((preguntaActual + 1) / preguntas.length) * 100;
    document.querySelector('.progress-bar').style.width = `${progreso}%`;
    document.querySelector('.progress-text').textContent = `Pregunta ${preguntaActual + 1} de ${preguntas.length}`;
    
    // Crear elemento de pregunta
    const preguntaDiv = document.createElement('div');
    preguntaDiv.className = 'pregunta-card';
    
    const preguntaTexto = document.createElement('h3');
    preguntaTexto.className = 'pregunta-texto';
    preguntaTexto.textContent = preguntas[preguntaActual].pregunta;
    preguntaDiv.appendChild(preguntaTexto);
    
    // Crear opciones de respuesta
    preguntas[preguntaActual].opciones.forEach((opcion, index) => {
        const opcionId = `p${preguntaActual}o${index}`;
        
        const opcionDiv = document.createElement('div');
        opcionDiv.className = 'opcion-container';
        
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'pregunta';
        input.value = index;
        input.id = opcionId;
        input.className = 'opcion-input';
        input.required = true;
        
        // Marcar la opción si ya fue respondida
        if (respuestas[preguntaActual] !== undefined && respuestas[preguntaActual] === index) {
            input.checked = true;
        }
        
        const label = document.createElement('label');
        label.htmlFor = opcionId;
        label.className = 'opcion-label';
        label.textContent = opcion.texto;
        
        opcionDiv.appendChild(input);
        opcionDiv.appendChild(label);
        preguntaDiv.appendChild(opcionDiv);
    });
    
    container.appendChild(preguntaDiv);
    
    // Actualizar estado de los botones de navegación
    document.getElementById('btnAnterior').disabled = preguntaActual === 0;
    
    // Mostrar el botón de enviar si es la última pregunta
    if (preguntaActual === preguntas.length - 1) {
        document.getElementById('btnSiguiente').style.display = 'none';
        document.getElementById('btnEnviar').style.display = 'block';
    } else {
        document.getElementById('btnSiguiente').style.display = 'block';
        document.getElementById('btnEnviar').style.display = 'none';
    }
}

// Función para validar y guardar la respuesta actual
function guardarRespuesta() {
    const opcionSeleccionada = document.querySelector('input[name="pregunta"]:checked');
    
    if (opcionSeleccionada) {
        respuestas[preguntaActual] = parseInt(opcionSeleccionada.value);
        return true;
    }
    return false;
}

// Función para navegar a la siguiente pregunta con validación
function siguientePregunta() {
    if (guardarRespuesta()) {
        if (preguntaActual < preguntas.length - 1) {
            preguntaActual++;
            cargarPregunta();
            // Desplazar hacia arriba para ver la pregunta
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    } else {
        // Mostrar alerta si no se ha seleccionado una opción
        const alerta = document.getElementById('alertaNoSeleccion');
        if (alerta) {
            alerta.classList.remove('d-none');
            // Desplazar hacia la alerta
            alerta.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// Función para navegar a la pregunta anterior
function anteriorPregunta() {
    guardarRespuesta();
    
    if (preguntaActual > 0) {
        preguntaActual--;
        cargarPregunta();
        // Desplazar hacia arriba para ver la pregunta
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Función para calcular el resultado
function calcularResultado() {
    // Reiniciar contador
    contadorTipos = {
        mapache: 0,
        pulpo: 0,
        leon: 0,
        antisocial: 0,
        vip: 0,
        termometro: 0,
        estratega: 0,
        toxico: 0
    };
    
    // Contar las respuestas por tipo
    respuestas.forEach((respuesta, indexPregunta) => {
        if (respuesta !== undefined) {
            const tipo = preguntas[indexPregunta].opciones[respuesta].tipo;
            contadorTipos[tipo]++;
        }
    });
    
    // Determinar el tipo con más respuestas
    let tipoGanador = 'mapache';
    let maxPuntos = 0;
    
    for (const tipo in contadorTipos) {
        if (contadorTipos[tipo] > maxPuntos) {
            maxPuntos = contadorTipos[tipo];
            tipoGanador = tipo;
        }
    }
    
    return tipoGanador;
}

// Función para mostrar el resultado
function mostrarResultado() {
    // Verificar si estamos en la página de resultados
    if (!document.getElementById('resultadoCard')) return;
    
    // Obtener el tipo de resultado de la URL
    const params = new URLSearchParams(window.location.search);
    const tipoResultado = params.get('resultado');
    
    if (tipoResultado && resultados[tipoResultado]) {
        const resultado = resultados[tipoResultado];
        
        // Aplicar clase CSS según el tipo de resultado
        const resultadoCard = document.getElementById('resultadoCard');
        resultadoCard.classList.add(resultado.clase);
        
        // Mostrar los datos del resultado
        document.getElementById('resultadoTitulo').textContent = resultado.titulo;
        document.getElementById('resultadoEmoji').textContent = resultado.emoji;
        document.getElementById('resultadoDescripcion').textContent = resultado.descripcion;
        document.getElementById('resultadoCIVI').textContent = resultado.civi;
        
        // Crear y agregar la imagen
        const img = document.createElement('img');
        img.src = resultado.imagen;
        img.alt = resultado.titulo;
        img.className = 'img-fluid';
        document.getElementById('resultadoImagen').appendChild(img);
    } else {
        // Redirigir al inicio si no hay resultado válido
        window.location.href = 'index.html';
    }
}

// Función para compartir resultado
function compartirResultado() {
    const params = new URLSearchParams(window.location.search);
    const tipoResultado = params.get('resultado');
    
    if (!tipoResultado || !resultados[tipoResultado]) return;
    
    if (navigator.share) {
        navigator.share({
            title: 'Mi resultado del test de viajero',
            text: `Soy ${resultados[tipoResultado].titulo}. ¡Descubre qué tipo de viajero del transporte público eres!`,
            url: window.location.href
        }).catch(err => {
            console.log('Error al compartir:', err);
        });
    } else {
        // Fallback para navegadores que no soportan Web Share API
        const shareUrl = `https://twitter.com/intent/tweet?text=Soy ${encodeURIComponent(resultados[tipoResultado].titulo)}. ¡Descubre qué tipo de viajero del transporte público eres!&url=${encodeURIComponent(window.location.href)}`;
        window.open(shareUrl, '_blank');
    }
}

// Eventos cuando el DOM está cargado
document.addEventListener('DOMContentLoaded', function() {
    // Página del test
    if (document.getElementById('testForm')) {
        cargarPregunta();
        
        // Eventos de los botones
        document.getElementById('btnSiguiente').addEventListener('click', siguientePregunta);
        document.getElementById('btnAnterior').addEventListener('click', anteriorPregunta);
        
        // Evento del formulario
        document.getElementById('testForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (guardarRespuesta()) {
                const resultado = calcularResultado();
                window.location.href = `resultado.html?resultado=${resultado}`;
            } else {
                const alerta = document.getElementById('alertaNoSeleccion');
                if (alerta) {
                    alerta.classList.remove('d-none');
                    alerta.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }
    
    // Página de resultados
    if (document.getElementById('resultadoCard')) {
        mostrarResultado();
        
        // Evento del botón compartir
        document.getElementById('btnCompartir').addEventListener('click', compartirResultado);
    }
});