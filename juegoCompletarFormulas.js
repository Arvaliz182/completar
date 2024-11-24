// juegoCompletarFormulas.js

// Arreglo completo de 30 preguntas con opciones múltiples
const todasLasPreguntas = [
    // Pregunta 1
    {
      id: 1,
      pregunta: 'Completa la definición de la derivada de una función \\( f \\) en un punto \\( a \\):<br><br>\\[ f\'(a) = \\lim_{h \\to 0} \\dfrac{\\square}{\\square} \\]',
      opciones: [
        // Opciones para el primer \\square
        [
          '\\( f(a + h) - f(a) \\)',
          '\\( f(a) - f(a + h) \\)',
          '\\( f(a + h) + f(a) \\)',
          '\\( h \\)',
          '\\( f(a) \\cdot h \\)'
        ],
        // Opciones para el segundo \\square
        [
          '\\( h \\)',
          '\\( f(a + h) - f(a) \\)',
          '\\( h^2 \\)',
          '\\( f(a) \\)',
          '\\( a \\)'
        ]
      ],
      respuestasCorrectas: [0, 0],
      explicacion: 'La definición de la derivada es: \\[ f\'(a) = \\lim_{h \\to 0} \\dfrac{f(a + h) - f(a)}{h} \\]'
    },
    // Pregunta 2
    {
      id: 2,
      pregunta: 'Si una función \\( f \\) es continua en un punto \\( x_1 \\), entonces se cumple que:<br><br>\\[ \\lim_{x \\to x_1} f(x) = \\square \\]',
      opciones: [
        [
          '\\( f(x_1) \\)',
          '\\( f(x) \\)',
          '\\( x_1 \\)',
          '\\( \\infty \\)',
          '\\( 0 \\)'
        ]
      ],
      respuestasCorrectas: [0],
      explicacion: 'Para que una función sea continua en \\( x_1 \\), el límite debe ser igual a \\( f(x_1) \\).'
    },
    // Pregunta 3
    {
      id: 3,
      pregunta: 'Según la regla de la cadena, si \\( h(x) = f(g(x)) \\), entonces:<br><br>\\[ h\'(x) = \\square \\times \\square \\]',
      opciones: [
        [
          '\\( f\'(g(x)) \\)',
          '\\( f(g(x)) \\)',
          '\\( g\'(x) \\)',
          '\\( f\'(x) \\)',
          '\\( g(x) \\)'
        ],
        [
          '\\( g\'(x) \\)',
          '\\( f(x) \\)',
          '\\( f\'(g(x)) \\)',
          '\\( g(x) \\)',
          '\\( f\'(x) \\)'
        ]
      ],
      respuestasCorrectas: [0, 0],
      explicacion: 'La regla de la cadena establece que \\( h\'(x) = f\'(g(x)) \\cdot g\'(x) \\).'
    },
    // Pregunta 4
    {
      id: 4,
      pregunta: 'Según el Teorema del Valor Medio, si \\( f \\) es continua en \\([a,b]\\) y derivable en \\((a,b)\\), entonces existe \\( c \\in (a,b) \\) tal que:<br><br>\\[ f\'(c) = \\square \\]',
      opciones: [
        [
          '\\( \\dfrac{f(b) - f(a)}{b - a} \\)',
          '\\( f(b) - f(a) \\)',
          '\\( f\'(b) - f\'(a) \\)',
          '\\( \\dfrac{b - a}{f(b) - f(a)} \\)',
          '\\( 0 \\)'
        ]
      ],
      respuestasCorrectas: [0],
      explicacion: 'El Teorema del Valor Medio establece que \\( f\'(c) = \\dfrac{f(b) - f(a)}{b - a} \\).'
    },
    // Pregunta 5
    {
      id: 5,
      pregunta: 'Completa la derivada de la función logarítmica natural:<br><br>\\[ \\dfrac{d}{dx} \\ln(x) = \\square \\]',
      opciones: [
        [
          '\\( \\dfrac{1}{x} \\)',
          '\\( x \\)',
          '\\( \\ln(x) \\)',
          '\\( e^{x} \\)',
          '\\( 0 \\)'
        ]
      ],
      respuestasCorrectas: [0],
      explicacion: 'La derivada de \\( \\ln(x) \\) es \\( \\dfrac{1}{x} \\).'
    },
    // Pregunta 6
    {
      id: 6,
      pregunta: 'Una función \\( f \\) es convexa en un intervalo \\( I \\) si y solo si su segunda derivada cumple:<br><br>\\[ f\'\'(x) \\square 0, \\forall x \\in I \\]',
      opciones: [
        [
          '\\( > \\)',
          '\\( < \\)',
          '\\( = \\)',
          '\\( \\geq \\)',
          '\\( \\leq \\)'
        ]
      ],
      respuestasCorrectas: [0],
      explicacion: 'Una función es convexa si \\( f\'\'(x) > 0 \\) en el intervalo \\( I \\).'
    },
    // Pregunta 7
    {
      id: 7,
      pregunta: 'Según la Regla de L’Hôpital, si \\( \\lim_{x \\to a} f(x) = 0 \\) y \\( \\lim_{x \\to a} g(x) = 0 \\), entonces:<br><br>\\[ \\lim_{x \\to a} \\dfrac{f(x)}{g(x)} = \\lim_{x \\to a} \\dfrac{\\square}{\\square} \\]',
      opciones: [
        [
          '\\( f\'(x) \\)',
          '\\( f(x) \\)',
          '\\( g\'(x) \\)',
          '\\( g(x) \\)',
          '\\( 0 \\)'
        ],
        [
          '\\( g\'(x) \\)',
          '\\( g(x) \\)',
          '\\( f\'(x) \\)',
          '\\( f(x) \\)',
          '\\( 1 \\)'
        ]
      ],
      respuestasCorrectas: [0, 0],
      explicacion: 'La Regla de L’Hôpital establece que \\( \\lim_{x \\to a} \\dfrac{f(x)}{g(x)} = \\lim_{x \\to a} \\dfrac{f\'(x)}{g\'(x)} \\).'
    },
    // Pregunta 8
    {
      id: 8,
      pregunta: 'Completa la derivada de \\( \\sen(x) \\):<br><br>\\[ \\dfrac{d}{dx} \\sen(x) = \\square \\]',
      opciones: [
        [
          '\\( \\cos(x) \\)',
          '\\( \\sen(x) \\)',
          '\\( -\\sen(x) \\)',
          '\\( -\\cos(x) \\)',
          '\\( \\tan(x) \\)'
        ]
      ],
      respuestasCorrectas: [0],
      explicacion: 'La derivada de \\( \\sen(x) \\) es \\( \\cos(x) \\).'
    },
    // Pregunta 9
    {
      id: 9,
      pregunta: 'Completa la derivada de \\( \\cos(x) \\):<br><br>\\[ \\dfrac{d}{dx} \\cos(x) = \\square \\]',
      opciones: [
        [
          '\\( -\\sen(x) \\)',
          '\\( \\cos(x) \\)',
          '\\( \\sen(x) \\)',
          '\\( -\\cos(x) \\)',
          '\\( \\tan(x) \\)'
        ]
      ],
      respuestasCorrectas: [0],
      explicacion: 'La derivada de \\( \\cos(x) \\) es \\( -\\sen(x) \\).'
    },
    // Pregunta 10
    {
      id: 10,
      pregunta: 'Según el criterio de la segunda derivada, si \\( f\'(a) = 0 \\) y \\( f\'\'(a) > 0 \\), entonces \\( f(a) \\) es un \\square \\ de \\( f \\).',
      opciones: [
        [
          'mínimo local',
          'máximo local',
          'punto de inflexión',
          'valor crítico',
          'asíntota'
        ]
      ],
      respuestasCorrectas: [0],
      explicacion: 'Si \\( f\'\'(a) > 0 \\), entonces \\( f(a) \\) es un mínimo local.'
    },
    // Pregunta 11
    {
      id: 11,
      pregunta: 'Según el Teorema de Rolle, si \\( f \\) es continua en \\( [a,b] \\), derivable en \\( (a,b) \\) y \\( f(a) = f(b) \\), entonces existe \\( c \\in (a,b) \\) tal que \\( f\'(c) = \\square \\).',
      opciones: [
        [
          '\\( 0 \\)',
          '\\( f\'(a) \\)',
          '\\( f\'(b) \\)',
          '\\( f(a) \\)',
          '\\( f(b) \\)'
        ]
      ],
      respuestasCorrectas: [0],
      explicacion: 'El Teorema de Rolle establece que \\( f\'(c) = 0 \\).'
    },
    // Pregunta 12
    {
      id: 12,
      pregunta: 'Completa la condición para que una función sea cóncava en un intervalo \\( I \\):<br><br>\\[ f\'\'(x) \\square 0, \\forall x \\in I \\]',
      opciones: [
        [
          '\\( < \\)',
          '\\( > \\)',
          '\\( = \\)',
          '\\( \\geq \\)',
          '\\( \\leq \\)'
        ]
      ],
      respuestasCorrectas: [0],
      explicacion: 'Una función es cóncava si \\( f\'\'(x) < 0 \\) en el intervalo \\( I \\).'
    },
    // Pregunta 13
    {
      id: 13,
      pregunta: 'Completa la derivada de la función exponencial natural:<br><br>\\[ \\dfrac{d}{dx} e^{x} = \\square \\]',
      opciones: [
        [
          '\\( e^{x} \\)',
          '\\( e^{2x} \\)',
          '\\( x e^{x} \\)',
          '\\( \\ln(x) \\)',
          '\\( 0 \\)'
        ]
      ],
      respuestasCorrectas: [0],
      explicacion: 'La derivada de \\( e^{x} \\) es \\( e^{x} \\).'
    },
    // Pregunta 14
    {
      id: 14,
      pregunta: 'Si \\( f(x) \\) tiene un máximo local en \\( x = a \\) y \\( f\'(a) = 0 \\), entonces según el criterio de la segunda derivada, \\( f\'\'(a) \\square 0 \\).',
      opciones: [
        [
          '\\( < \\)',
          '\\( > \\)',
          '\\( = \\)',
          '\\( \\geq \\)',
          '\\( \\leq \\)'
        ]
      ],
      respuestasCorrectas: [0],
      explicacion: 'Si \\( f\'\'(a) < 0 \\), entonces \\( f(a) \\) es un máximo local.'
    },
    // Pregunta 15
    {
      id: 15,
      pregunta: 'Completa la definición del Teorema del Sandwich (Teorema de Encaje):<br><br>Si \\( f(x) \\leq h(x) \\leq g(x) \\) y \\( \\lim_{x \\to a} f(x) = \\lim_{x \\to a} g(x) = \\square \\), entonces \\( \\lim_{x \\to a} h(x) = L \\).',
      opciones: [
        [
          '\\( L \\)',
          '\\( 0 \\)',
          '\\( \\infty \\)',
          '\\( f(a) \\)',
          '\\( g(a) \\)'
        ]
      ],
      respuestasCorrectas: [0],
      explicacion: 'El límite común es \\( L \\).'
    },
    // Pregunta 16
    {
      id: 16,
      pregunta: 'Completa la definición del supremo de un conjunto \\( A \\):<br><br>\\[ \\sup A = \\min \\{ s \\in \\mathbb{R} \\mid s \\text{ es } \\square \\text{ de } A \\} \\]',
      opciones: [
        [
          'cota superior',
          'cota inferior',
          'máximo',
          'mínimo',
          'elemento'
        ]
      ],
      respuestasCorrectas: [0],
      explicacion: 'El supremo es la mínima cota superior de \\( A \\).'
    },
    // Pregunta 17
    {
      id: 17,
      pregunta: 'Una función \\( f \\) es derivable en un punto \\( a \\) si existe el límite:<br><br>\\[ \\lim_{h \\to 0} \\dfrac{\\square}{h} = f\'(a) \\]',
      opciones: [
        [
          '\\( f(a + h) - f(a) \\)',
          '\\( f(a) - f(a + h) \\)',
          '\\( f(a + h) + f(a) \\)',
          '\\( h \\)',
          '\\( a \\)'
        ]
      ],
      respuestasCorrectas: [0],
      explicacion: 'La definición de derivabilidad es mediante este límite.'
    },
    // Pregunta 18
    {
      id: 18,
      pregunta: 'Completa la identidad trigonométrica fundamental:<br><br>\\[ \\sen^2(x) + \\square = 1 \\]',
      opciones: [
        [
          '\\( \\cos^2(x) \\)',
          '\\( \\sen^2(x) \\)',
          '\\( \\tan^2(x) \\)',
          '\\( 1 \\)',
          '\\( 0 \\)'
        ]
      ],
      respuestasCorrectas: [0],
      explicacion: 'La identidad fundamental es \\( \\sen^2(x) + \\cos^2(x) = 1 \\).'
    },
    // Pregunta 19
    {
      id: 19,
      pregunta: 'Completa la derivada de la función tangente inversa:<br><br>\\[ \\dfrac{d}{dx} \\arctan(x) = \\square \\]',
      opciones: [
        [
          '\\( \\dfrac{1}{1 + x^2} \\)',
          '\\( \\dfrac{1}{1 - x^2} \\)',
          '\\( \\dfrac{x}{1 + x^2} \\)',
          '\\( \\dfrac{x}{1 - x^2} \\)',
          '\\( \\arctan(x) \\)'
        ]
      ],
      respuestasCorrectas: [0],
      explicacion: 'La derivada es \\( \\dfrac{1}{1 + x^2} \\).'
    },
    // Pregunta 20
    {
      id: 20,
      pregunta: 'Según el Teorema de Lagrange (Valor Medio), si \\( f \\) es continua en \\( [a,b] \\) y derivable en \\( (a,b) \\), entonces existe \\( c \\in (a,b) \\) tal que:<br><br>\\[ f(b) - f(a) = f\'(c) \\times \\square \\]',
      opciones: [
        [
          '\\( b - a \\)',
          '\\( f(b) - f(a) \\)',
          '\\( c \\)',
          '\\( f(c) \\)',
          '\\( 0 \\)'
        ]
      ],
      respuestasCorrectas: [0],
      explicacion: 'Se cumple que \\( f(b) - f(a) = f\'(c)(b - a) \\).'
    },
    // Pregunta 21
    {
      id: 21,
      pregunta: 'En el Teorema de Cauchy, si \\( f \\) y \\( g \\) son continuas en \\( [a,b] \\) y derivables en \\( (a,b) \\), entonces existe \\( c \\in (a,b) \\) tal que:<br><br>\\[ (f(b) - f(a)) \\times g\'(c) = (g(b) - g(a)) \\times \\square \\]',
      opciones: [
        [
          '\\( f\'(c) \\)',
          '\\( f(c) \\)',
          '\\( g\'(c) \\)',
          '\\( f(b) - f(a) \\)',
          '\\( 0 \\)'
        ]
      ],
      respuestasCorrectas: [0],
      explicacion: 'El Teorema de Cauchy establece esta igualdad.'
    },
    // Pregunta 22
    {
      id: 22,
      pregunta: 'Completa la definición del ínfimo de un conjunto \\( A \\):<br><br>\\[ \\inf A = \\max \\{ s \\in \\mathbb{R} \\mid s \\text{ es } \\square \\text{ de } A \\} \\]',
      opciones: [
        [
          'cota inferior',
          'cota superior',
          'mínimo',
          'máximo',
          'elemento'
        ]
      ],
      respuestasCorrectas: [0],
      explicacion: 'El ínfimo es la máxima cota inferior de \\( A \\).'
    },
    // Pregunta 23
    {
      id: 23,
      pregunta: 'Según el criterio de la primera derivada, si \\( f\'(x) > 0 \\) en un intervalo, entonces \\( f \\) es \\square \\ en ese intervalo.',
      opciones: [
        [
          'creciente',
          'decreciente',
          'constante',
          'cóncava',
          'convexa'
        ]
      ],
      respuestasCorrectas: [0],
      explicacion: 'Si \\( f\'(x) > 0 \\), entonces \\( f \\) es creciente.'
    },
    // Pregunta 24
    {
      id: 24,
      pregunta: 'Completa la derivada de la función tangente:<br><br>\\[ \\dfrac{d}{dx} \\tan(x) = \\square \\]',
      opciones: [
        [
          '\\( \\sec^2(x) \\)',
          '\\( \\tan(x) \\)',
          '\\( \\cos^2(x) \\)',
          '\\( -\\sec^2(x) \\)',
          '\\( \\sen^2(x) \\)'
        ]
      ],
      respuestasCorrectas: [0],
      explicacion: 'La derivada de \\( \\tan(x) \\) es \\( \\sec^2(x) \\).'
    },
    // Pregunta 25
    {
      id: 25,
      pregunta: 'Completa la derivada de la función cotangente:<br><br>\\[ \\dfrac{d}{dx} \\cot(x) = \\square \\]',
      opciones: [
        [
          '\\( -\\csc^2(x) \\)',
          '\\( \\cot(x) \\)',
          '\\( \\csc^2(x) \\)',
          '\\( -\\sec^2(x) \\)',
          '\\( \\tan(x) \\)'
        ]
      ],
      respuestasCorrectas: [0],
      explicacion: 'La derivada de \\( \\cot(x) \\) es \\( -\\csc^2(x) \\).'
    },
    // Pregunta 26
    {
      id: 26,
      pregunta: 'Según el Teorema de los Valores Extremos, si \\( f \\) es continua en \\( [a,b] \\), entonces \\( f \\) alcanza un \\square \\ y un \\square \\ absolutos en ese intervalo.',
      opciones: [
        [
          'máximo',
          'mínimo',
          'promedio',
          'punto crítico',
          'valor cero'
        ],
        [
          'mínimo',
          'máximo',
          'promedio',
          'punto crítico',
          'valor cero'
        ]
      ],
      respuestasCorrectas: [0, 0],
      explicacion: 'La función alcanza un máximo y un mínimo absolutos.'
    },
    // Pregunta 27
    {
      id: 27,
      pregunta: 'Completa la derivada de la función logarítmica base \\( a \\):<br><br>\\[ \\dfrac{d}{dx} \\log_a(x) = \\square \\]',
      opciones: [
        [
          '\\( \\dfrac{1}{x \\ln(a)} \\)',
          '\\( \\dfrac{1}{x a} \\)',
          '\\( \\dfrac{\\ln(a)}{x} \\)',
          '\\( \\ln(a) \\)',
          '\\( \\dfrac{1}{\\ln(x)} \\)'
        ]
      ],
      respuestasCorrectas: [0],
      explicacion: 'La derivada es \\( \\dfrac{1}{x \\ln(a)} \\).'
    },
    // Pregunta 28
    {
      id: 28,
      pregunta: 'Completa la definición de una función continua en un punto \\( x = c \\):<br><br>\\[ \\lim_{x \\to c} f(x) = \\square \\]',
      opciones: [
        [
          '\\( f(c) \\)',
          '\\( f(x) \\)',
          '\\( c \\)',
          '\\( \\infty \\)',
          '\\( 0 \\)'
        ]
      ],
      respuestasCorrectas: [0],
      explicacion: 'La función es continua si el límite es igual a \\( f(c) \\).'
    },
    // Pregunta 29
    {
      id: 29,
      pregunta: 'Completa la derivada de \\( \\sen^{-1}(x) \\):<br><br>\\[ \\dfrac{d}{dx} \\sen^{-1}(x) = \\square \\]',
      opciones: [
        [
          '\\( \\dfrac{1}{\\sqrt{1 - x^2}} \\)',
          '\\( \\dfrac{1}{\\sqrt{1 + x^2}} \\)',
          '\\( \\dfrac{x}{\\sqrt{1 - x^2}} \\)',
          '\\( \\dfrac{x}{\\sqrt{1 + x^2}} \\)',
          '\\( \\arcsen(x) \\)'
        ]
      ],
      respuestasCorrectas: [0],
      explicacion: 'La derivada es \\( \\dfrac{1}{\\sqrt{1 - x^2}} \\).'
    },
    // Pregunta 30
    {
      id: 30,
      pregunta: 'Completa la derivada de \\( \\cos^{-1}(x) \\):<br><br>\\[ \\dfrac{d}{dx} \\cos^{-1}(x) = \\square \\]',
      opciones: [
        [
          '\\( -\\dfrac{1}{\\sqrt{1 - x^2}} \\)',
          '\\( \\dfrac{1}{\\sqrt{1 - x^2}} \\)',
          '\\( -\\dfrac{1}{\\sqrt{1 + x^2}} \\)',
          '\\( \\dfrac{1}{\\sqrt{1 + x^2}} \\)',
          '\\( \\arccos(x) \\)'
        ]
      ],
      respuestasCorrectas: [0],
      explicacion: 'La derivada es \\( -\\dfrac{1}{\\sqrt{1 - x^2}} \\).'
    }
  ];
  
  // Variables globales
  let preguntas;
  let indicePregunta = 0;
  let respuestasCorrectas = 0;
  
  // Función para iniciar el juego
  const iniciarJuego = () => {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('juego').style.display = 'block';
    indicePregunta = 0;
    respuestasCorrectas = 0;
    // Seleccionar 15 preguntas aleatorias
    preguntas = todasLasPreguntas.sort(() => 0.5 - Math.random()).slice(0, 15);
    mostrarPregunta();
  };
  
  // Función para mostrar la pregunta actual
  const mostrarPregunta = () => {
    let preguntaActual = preguntas[indicePregunta];
    document.getElementById('pregunta').innerHTML = preguntaActual.pregunta;
    
    // Generar las opciones para cada \\square
    let opcionesHTML = '';
    for (let i = 0; i < preguntaActual.opciones.length; i++) {
      opcionesHTML += `<p>Seleccione la opción para el espacio ${i + 1}:</p>`;
      opcionesHTML += `<div>`;
      for (let j = 0; j < preguntaActual.opciones[i].length; j++) {
        opcionesHTML += `
          <label>
            <input type="radio" name="opcion${i}" value="${j}">
            ${preguntaActual.opciones[i][j]}
          </label><br>
        `;
      }
      opcionesHTML += `</div>`;
    }
    
    document.getElementById('opcionesRespuesta').innerHTML = opcionesHTML;
    document.getElementById('retroalimentacion').innerHTML = '';
    document.getElementById('btnSiguiente').style.display = 'none';
    MathJax.typesetPromise();
  };
  
  // Función para verificar la respuesta del usuario
  const verificarRespuesta = () => {
    let preguntaActual = preguntas[indicePregunta];
    let correcto = true;
    
    for (let i = 0; i < preguntaActual.opciones.length; i++) {
      let opciones = document.getElementsByName(`opcion${i}`);
      let seleccionada = false;
      for (let opcion of opciones) {
        if (opcion.checked) {
          seleccionada = true;
          if (parseInt(opcion.value) !== preguntaActual.respuestasCorrectas[i]) {
            correcto = false;
          }
          break;
        }
      }
      if (!seleccionada) {
        alert(`Por favor, selecciona una opción para el espacio ${i + 1}.`);
        return;
      }
    }
    
    if (correcto) {
      document.getElementById('retroalimentacion').innerHTML = '<span style="color: green;">¡Correcto!</span>';
      respuestasCorrectas++;
    } else {
      document.getElementById('retroalimentacion').innerHTML = `<span style="color: red;">Incorrecto.</span><br>Explicación:<br>${preguntaActual.explicacion}`;
      MathJax.typesetPromise();
    }
    
    document.getElementById('btnSiguiente').style.display = 'inline-block';
  };
  
  // Función para pasar a la siguiente pregunta
  const siguientePregunta = () => {
    indicePregunta++;
    if (indicePregunta < preguntas.length) {
      mostrarPregunta();
    } else {
      finalizarJuego();
    }
  };
  
  // Función para finalizar el juego
  const finalizarJuego = () => {
    document.getElementById('juego').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('puntajeFinal').innerText = `Respuestas correctas: ${respuestasCorrectas} / ${preguntas.length}`;
  };
  
  // Función para reiniciar el juego
  const reiniciarJuego = () => {
    document.getElementById('resultado').style.display = 'none';
    iniciarJuego();
  };
  
  // Función para mostrar las instrucciones
  const mostrarInstrucciones = () => {
    document.getElementById('instruccionesModal').style.display = 'block';
  };
  
  // Función para cerrar las instrucciones
  const cerrarInstrucciones = () => {
    document.getElementById('instruccionesModal').style.display = 'none';
  };
  
  // Funciones para mostrar y cerrar el modal de recursos
  const mostrarRecursos = () => {
    document.getElementById('recursosModal').style.display = 'block';
  };
  
  const cerrarRecursos = () => {
    document.getElementById('recursosModal').style.display = 'none';
  };
  
  // Cerrar los modales al hacer clic fuera del contenido
  window.onclick = function(event) {
    let instruccionesModal = document.getElementById('instruccionesModal');
    let recursosModal = document.getElementById('recursosModal');
    if (event.target == instruccionesModal) {
      instruccionesModal.style.display = 'none';
    }
    if (event.target == recursosModal) {
      recursosModal.style.display = 'none';
    }
  };
  