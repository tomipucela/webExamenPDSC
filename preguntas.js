// ============================================================
//  BANCO DE PREGUNTAS  (edita solo este archivo para cambiar el test)
//
//  Cada pregunta tiene:
//    enunciado   -> texto de la pregunta
//    imagen      -> (opcional) nombre de un archivo de imagen que esté en la
//                   misma carpeta que index.html; se muestra bajo el enunciado
//    opciones    -> lista de respuestas posibles (a, b, c, d... en orden)
//    correcta    -> posición de la opción correcta, empezando en 0
//                   (0 = a, 1 = b, 2 = c, 3 = d)
//    explicacion -> (opcional) texto que se muestra tras responder; si no
//                   lo pones, no aparece nada
// ============================================================

const TEST = {
  titulo: "Planificación y Diseño de Sistemas Computacionales",
  subtitulo: "Exámenes 2016 y 2019-2020, Parcial DIS y preguntas por temas · Universidad de Valladolid",

  preguntas: [
    {
      enunciado: "Eres el responsable del proyecto HOLA en la empresa XXX y tu equipo está elaborando el plan de proyecto. ¿Cuál consideráis que es una restricción para el desarrollo del plan?",
      opciones: [
        "Los planes de proyectos similares que han fracasado.",
        "Los planes de proyectos análogos, hayan fracasado o no.",
        "El presupuesto asignado por la dirección de la empresa.",
        "Entrevistas con expertos en el tema del proyecto que tienen experiencia con el trabajo a considerar en el plan."
      ],
      correcta: 2
    },
    {
      enunciado: "En un hito se detecta que la duración del proyecto se está retrasando. Consultas con el responsable de tu empresa y decides acortar las actividades restantes del camino crítico. Esto implica añadir más:",
      opciones: ["Tiempo", "Coste", "Riesgo", "Documentación"],
      correcta: 1
    },
    {
      enunciado: "Existen particularidades que permiten caracterizar si una actividad es un proyecto o no. Indica la que NO te parece correcta:",
      opciones: [
        "El proyecto tiene una duración predeterminada.",
        "Están implicadas tareas rutinarias.",
        "El trabajo se realiza por varias personas que pueden tener distintas especializaciones.",
        "Normalmente, existen restricciones sobre los recursos a utilizar en su desarrollo."
      ],
      correcta: 1
    },
    {
      enunciado: "¿Cuál de los siguientes NO es un stakeholder fundamental en un proyecto que pretende crear un servicio interno para una organización?",
      opciones: [
        "El gestor del proyecto",
        "Responsables del departamento de organización",
        "Usuarios externos",
        "Miembros del equipo del proyecto"
      ],
      correcta: 2
    },
    {
      enunciado: "Para obtener estimaciones fiables de tiempo y coste para un proyecto NO se debe:",
      opciones: [
        "Basar las estimaciones en los datos de proyectos similares que hayan finalizado.",
        "Retrasar la estimación hasta que el proyecto haya avanzado.",
        "Emplear técnicas de descomposición de tareas (actividades).",
        "Utilizar uno o más modelos empíricos para la estimación de coste y esfuerzo."
      ],
      correcta: 1
    },
    {
      enunciado: "¿Cuál de los siguientes es un atributo correcto del camino crítico?",
      opciones: [
        "Tiene la cantidad total de holgura más aproximada.",
        "Determina la fecha de finalización más temprana, dadas las actividades del proyecto y las relaciones entre ellas.",
        "Contiene la mayoría de las actividades del diagrama en red.",
        "Es el recorrido con las actividades más caras del proyecto."
      ],
      correcta: 1
    },
    {
      enunciado: "Durante la ejecución de un proyecto, un miembro del equipo identifica un riesgo que no se había considerado en el documento de gestión de riesgos. ¿Qué debería hacer el responsable del proyecto?",
      opciones: [
        "Solicitar información adicional sobre cómo ha identificado el riesgo el miembro del equipo, ya que previamente se había realizado el estudio y no se había detectado.",
        "No considerar dicho riesgo, ya que los riesgos se identificaron durante la planificación del proyecto.",
        "Informar al usuario sobre el riesgo.",
        "Analizar el riesgo."
      ],
      correcta: 2
    },
    {
      enunciado: "Un gestor de proyecto realiza la primera reunión sobre riesgos con el equipo y el cliente. Se identifican varios riesgos y se asignan a los miembros del equipo para su evaluación y cuantificación. El resultado de la reunión ha proporcionado:",
      opciones: [
        "El valor esperado de los eventos de riesgo.",
        "Las estrategias para los eventos de riesgo.",
        "Una lista de los eventos de riesgo potenciales.",
        "El planteamiento general sobre los riesgos del proyecto."
      ],
      correcta: 2
    },
    {
      enunciado: "La gestión del riesgo es necesaria porque (indicar la opción incorrecta):",
      opciones: [
        "El objetivo de la gestión de riesgos es identificar posibles problemas potenciales después de que ocurran.",
        "Dicha gestión es necesaria porque el riesgo del software es inherente a este trabajo.",
        "Si no se considera el riesgo puede ser complicado conseguir los objetivos de un proyecto.",
        "El riesgo aumenta a medida que aumenta la complejidad del sistema."
      ],
      correcta: 0
    },
    {
      enunciado: "Para las empresas, pasar de facilitar el trabajo en casa a contratar personal que vive en otros países es una opción sencilla que tiene ventajas. Señala la que NO es una ventaja:",
      opciones: [
        "Se pueden usar especialistas para trabajos específicos.",
        "Se deben utilizar contratos de duración larga.",
        "Se consigue una reducción en los costes de personal, formación, vacaciones, pensiones, etc.",
        "Se puede utilizar personal de países en desarrollo con la correspondiente disminución de los costes."
      ],
      correcta: 1
    },

    // ---- Convocatoria 10/01/2020 · Primer bloque (preguntas 1 a 15) ----
    {
      enunciado: "Un trabajo de mantenimiento de una instalación...",
      opciones: [
        "nunca es un proyecto, pues es una actividad rutinaria.",
        "siempre aparece como una fase más de un proyecto.",
        "es otra forma de referirse a los proyectos repetitivos.",
        "en general no es un proyecto salvo quizás la primera vez que se realiza."
      ],
      correcta: 3
    },
    {
      enunciado: "Es evidente que las actividades del gestor del proyecto software van más allá de la construcción e implantación del producto software, e incluyen...",
      opciones: [
        "el estudio de viabilidad del plan, y la ejecución del proyecto.",
        "el análisis de viabilidad, la planificación y la ejecución del proyecto.",
        "el estudio de la viabilidad y la planificación, sin contar la ejecución, pues es tarea de los ingenieros de software.",
        "la planificación y la gestión del proyecto."
      ],
      correcta: 1
    },
    {
      enunciado: "Con el fin de coordinar los esfuerzos de los beneficiarios/usuarios es habitual, al comienzo del proyecto...",
      opciones: [
        "la identificación de los stakeholders.",
        "la externalización de las pruebas de aceptación.",
        "la creación de un plan de comunicación.",
        "la creación de métricas."
      ],
      correcta: 0
    },
    {
      enunciado: "El nemotécnico SMART se emplea en el dominio anglosajón para referirse a los objetivos bien definidos, entre los que se encuentran...",
      opciones: [
        "medible, reconocible y alcanzable.",
        "alcanzable, relevante y tecnológico.",
        "medible alcanzable y tecnológico.",
        "medible, relevante y acotado en el tiempo."
      ],
      correcta: 3
    },
    {
      enunciado: "Los aspectos clave de la gestión de portfolio de proyecto de una organización son...",
      opciones: [
        "la monitorización, la gestión y la comunicación del portfolio.",
        "la monitorización, la gestión y la evaluación del portfolio.",
        "la definición, la gestión y la optimización del portfolio.",
        "la evaluación, la gestión y la comunicación del portfolio."
      ],
      correcta: 2
    },
    {
      enunciado: "Entre las técnicas que manejamos para evaluar la relación coste-beneficio de un proyecto tenemos...",
      opciones: [
        "el beneficio neto y la tasa interna de pérdidas.",
        "el beneficio neto y el valor neto actual.",
        "el periodo de retorno de la inversión y el índice IBEX-25.",
        "el periodo de retorno de la inversión y el flujo de caja."
      ],
      correcta: 1
    },
    {
      enunciado: "Una de las desventajas de utilizar la tasa interna de retorno de la inversión para evaluar la relación coste-beneficio de un proyecto es...",
      opciones: [
        "que no es posible evaluarlo fácilmente mediante hojas de cálculo.",
        "que no tiene en cuenta el factor (tasa) de descuento anual.",
        "que no hace referencia al tamaño absoluto del retorno de la inversión, por lo que trata igual a proyectos grandes que a pequeños.",
        "que no se complementa bien con la medida de beneficio neto actual."
      ],
      correcta: 2
    },
    {
      enunciado: "Los esquemas que sirven para plasmar las relaciones de dependencia entre proyectos de un programa son muy útiles para conocer las interrelaciones entre ellos...",
      opciones: [
        "y plasman el plan de entrega entre productos.",
        "no permiten conocer la secuenciación de proyectos.",
        "no son útiles para estudiar los recursos comunes usados entre varios proyectos.",
        "sin embargo, resulta difícil plasmar en ellos la concurrencia y el intercambio de productos."
      ],
      correcta: 0
    },
    {
      enunciado: "Una de las principales cualidades de la metodología StepWise cuando se considera en el diagrama global de actividades del gestor de proyectos, el tener en cuenta la transición de la «planificación de nivel bajo» (paso 10) al paso anterior de «identificación de productos y actividades» (paso 4) es...",
      opciones: [
        "el bucle propio de todo proceso iterativo.",
        "la vuelta atrás para conseguir cumplir los objetivos de las pruebas de conformidad del software.",
        "la posibilidad de refinar con más detalle el plan de actividades según avanza el proyecto.",
        "la posible corrección de errores en la planificación de alto nivel."
      ],
      correcta: 2
    },
    {
      enunciado: "A la entidad encargada de supervisar y resolver los posibles conflictos de objetivos de un proyecto, y recibir información del gestor del proyecto se le denomina...",
      opciones: [
        "autoridad del proyecto.",
        "usuario/beneficiario (stakeholder).",
        "cliente (stakeholder).",
        "portfolio manager."
      ],
      correcta: 0
    },
    {
      enunciado: "Una de las tareas importantes antes de adoptar un modelo de planificación del proyecto es identificar si el proyecto es objective-driven o product-driven. Mientras que en la segunda se piensan crear productos finales, en la primera...",
      opciones: [
        "se espera definir objeto que serán realizados posiblemente en un proyecto posterior.",
        "se definen objetos según una metodología orientada al objeto.",
        "se definen situaciones deseables objetivo para las que posiblemente habrá que construir software.",
        "fijamos objetos que habrá que construir."
      ],
      correcta: 2
    },
    {
      enunciado: "En la gestión de un proyecto software debemos tener en cuenta riesgos propios de las tareas de planificación y gestión que se deben a alguno de los siguientes tipos de incertidumbre sobre el proyecto:",
      opciones: [
        "de la descripción de las tareas, del producto y de los recursos.",
        "del producto, de la financiación y de los recursos.",
        "tecnológicos, del producto y de los recursos.",
        "del producto, del proceso y de los recursos."
      ],
      correcta: 3
    },
    {
      enunciado: "Una de los principios del modelo en cascada (waterfall) es que el final de cada fase se convierte en un hito natural donde...",
      opciones: [
        "se entrega una nueva función del sistema, aunque el sistema al completo solo se entrega al final del proyecto.",
        "se entrega un producto acabado al cliente con parte de las funciones.",
        "se entrega un producto acabado al stakeholder con parte de las funciones.",
        "los gestores pueden revisar el progreso del proyecto y ver si el caso de negocio es aún válido."
      ],
      correcta: 3
    },
    {
      enunciado: "En el modelo en espiral de desarrollo, se consigue en cada etapa un mayor nivel de detalle...",
      opciones: [
        "y un producto entregado con mayores funcionalidades.",
        "y un mayor grado de confianza sobre la probabilidad de éxito del proyecto.",
        "un nuevo elemento planificable del sistema que permite monitorizar el desarrollo de bajo nivel.",
        "y un producto final que cumple con una nueva parte de las funciones del sistema, lo que aumenta la confianza en la realización del proyecto."
      ],
      correcta: 1
    },
    {
      enunciado: "En la aproximación por entrega incremental...",
      opciones: [
        "se entrega un sistema donde se integran incrementalmente los requisitos del sistema.",
        "se entrega al cliente un entregable que va siendo incrementado con funciones nuevas.",
        "se parte la aplicación en pequeños componentes que se implementan y entregan en secuencia."
      ],
      correcta: 2
    },

    // ---- Parcial DIS (incluye la pregunta con imagen) ----
    {
      enunciado: "Al observar el siguiente diagrama de diseño arquitectónico, que pretende aplicar el patrón arquitectónico capas, podemos decir que",
      imagen: "arquitectura-capas.png",
      opciones: [
        "no es una arquitectura de capas válida porque una capa inferior tiene una dependencia hacia una capa superior.",
        "es una arquitectura de capas válida pero viola el principio de la arquitectura de paquetes de dependencias estables.",
        "es una arquitectura de capas válida pero viola el principio de la arquitectura de paquetes de dependencias acíclicas.",
        "no es una arquitectura de capas válida porque una arquitectura abierta o relajada no es compatible con el patrón arquitectónico capas."
      ],
      correcta: 0
    },
    {
      enunciado: "Señala cuál de estas respuestas no es correcta",
      opciones: [
        "La métrica I (Instability) toma valores entre 0 y 1, 0 máxima inestabilidad, 1 máxima estabilidad.",
        "La métrica I (Instability) se define relacionando el acoplamiento aferente y el acoplamiento eferente.",
        "La métrica I (Instability) de un paquete debe ser mayor que las métricas I de los paquetes de los que depende.",
        "Los paquetes con máxima estabilidad deben ser abstractos."
      ],
      correcta: 2
    },
    {
      enunciado: "¿Cuál es el objetivo del Diseño de Software?",
      opciones: [
        "Descomponer en subsistema, definir interfaces de subsistemas y derivar una representación arquitectónica.",
        "Acercar el modelo de análisis al modelo de la implementación.",
        "Todas las respuestas son correctas.",
        "Abordar requisitos no funcionales y restricciones respecto a tecnologia."
      ],
      correcta: 2
    },
    {
      enunciado: "La arquitectura del software es:",
      opciones: [
        "La realización en diseño de los casos de uso del sistema.",
        "La gestión de las dependencias de forma que dentro de los subsistemas se mantenga baja la cohesión y entre los subsistemas se mantenga alto el acoplamiento.",
        "Una visión estática y dinámica de los subsistemas y componentes (computacionales) de un sistema software y las relaciones entre ellos.",
        "La descomposición del sistema en subsistemas y componentes."
      ],
      correcta: 2
    },
    {
      enunciado: "Los principios de cohesión de paquetes indican que",
      opciones: [
        "las clases que no se reutilizan juntas no deben ser agrupadas.",
        "Todas las respuestas son correctas.",
        "las clases que cambian juntas deben agruparse.",
        "la unidad de reutilización es la unidad de distribución y debe ser basada en paquetes."
      ],
      correcta: 1
    },
    {
      enunciado: "Del diseño basado en herencia y el diseño basado en composición/delegación podemos decir que",
      opciones: [
        "el diseño basado en composición/delegación genera dependencias a los detalles de implementación de las clases e incumple el principio abierto-cerrado.",
        "el diseño basado en herencia genera relaciones de acoplamiento débiles de las clases herederas a los ancestros.",
        "el modelado de roles temporales puede requerir una solución de diseño que combine la herencia y la composición/delegación.",
        "el diseño basado en herencia no puede ser usado junto al diseño basado en composición/delegación porque viola el principio \"Favorece la composición sobre la herencia\"."
      ],
      correcta: 2
    },
    {
      enunciado: "El principio de acceso uniforme sentencia que",
      opciones: [
        "Ninguna de las otras respuestas es correcta",
        "el código cliente no debe distinguir si una propiedad que usa es un dato almacenado o calculado.",
        "se debe otorgar acceso a todos los integrantes del equipo por igual al código desarrollado por el resto del equipo.",
        "todas las interfaces de los subsistemas debe ser uniformes."
      ],
      correcta: 1
    },
    {
      enunciado: "La frase \"Es una aproximación recurrente a la arquitectura\" describe mejor a",
      opciones: [
        "un patrón GRASP",
        "un patrón de diseño",
        "un estilo arquitectónico",
        "un patrón arquitectónico"
      ],
      correcta: 2
    },
    {
      enunciado: "El principio de dependencias acíclicas:",
      opciones: [
        "es equivalente al de larga cadena de dependencias.",
        "Todas las respuestas son correctas.",
        "tiene el objetivo de evitar extensas propagaciones de cambios y de facilitar la planificación del trabajo en diferentes paquetes de forma independiente.",
        "no guarda relación con el principio de inversión de dependencias."
      ],
      correcta: 2
    },
    {
      enunciado: "La métrica distancia a la secuencia principal",
      opciones: [
        "se define como la distancia a la zona más alejada de las zonas de exclusión.",
        "se define, en un diagrama de secuencia, como la cantidad de mensajes que hay que enviar desde una petición del usuario hasta que es finalmente resuelta.",
        "se define como una relación entre el fan-in, el fan-out y la longitud del mayor ciclo de dependencias entre paquetes encontrado.",
        "se define, en un diagrama que documenta el uses-style, como la distancia de un paquete a otro."
      ],
      correcta: 0
    },
    {
      enunciado: "Según el principio de sustitución de Liskov",
      opciones: [
        "Es equivalente al principio conocido como \"Nunca hables con extraños\".",
        "Ninguna de las otras respuestas es correcta",
        "Un método que redefine a otro heredado de la clase base puede añadir nuevas precondiciones, poscondiciones y excepciones.",
        "Un método que redefine a otro heredado de la clase base puede añadir nuevas precondiciones, poscondiciones pero no excepciones."
      ],
      correcta: 1
    },

    // ---- Preguntas por temas · Tema 1 ----
    {
      enunciado: "Como abordarías la siguiente propuesta: «Reducir el uso de coches en ciudad»",
      opciones: [
        "Planificación",
        "Proyecto",
        "Investigación"
      ],
      correcta: 2
    },
    {
      enunciado: "Como abordarías la siguiente propuesta: «Desmantelar una central nuclear»",
      opciones: [
        "Planificación",
        "Proyecto",
        "Investigación"
      ],
      correcta: 1
    },
    {
      enunciado: "Como abordarías la siguiente propuesta: «Disminuir la producción de CO2 en las ciudades»",
      opciones: [
        "Planificación",
        "Proyecto",
        "Investigación"
      ],
      correcta: 2
    },
    {
      enunciado: "Como abordarías la siguiente propuesta: «Realizar el mantenimiento en un avión por primera vez»",
      opciones: [
        "Planificación",
        "Proyecto",
        "Investigación"
      ],
      correcta: 1
    },
    {
      enunciado: "Entre las fases por las que pasa todo el proyecto, desde el inicio hasta el final, ¿en cuál se aborda el diseño de los productos resultados con el proyecto?",
      opciones: [
        "Planificación",
        "Viabilidad",
        "Ejecución"
      ],
      correcta: 0
    },
    {
      enunciado: "En un proyecto de desarrollo de un sistema operativo para móviles, ¿en qué categoría de stakeholder clasificaría usted a los desarrolladores de aplicaciones para la AppStore que acompañará de estos sistemas móviles?",
      opciones: [
        "Externo al proyecto, pero interno respecto a la organización.",
        "Interno a la organización y al proyecto",
        "Externo al proyecto y la organización"
      ],
      correcta: 1
    },
    {
      enunciado: "Cuando hablamos de un proyecto que se realiza fuera de mi organización ¿De qué se ocupa el gestor de proyecto de la organización cliente?",
      opciones: [
        "El gestor cliente se encargará de los aspectos técnicos y la asignación de recursos",
        "El gestor cliente se encargará de supervisar los tiempos y los costes principalmente",
        "El gestor cliente se encargará de implementar el software."
      ],
      correcta: 1
    },
    {
      enunciado: "¿Cuál de estos objetivos cumple PEOR con los objetivos SMART?",
      opciones: [
        "Reducir en un tercio el número de reclamación recibidas",
        "Eliminar el número de caídas del sistema",
        "Juzga objetivamente la satisfacción"
      ],
      correcta: 1
    },
    {
      enunciado: "¿Cuál es la mejor definición que define a un proyecto?",
      opciones: [
        "Es un proceso único que consiste en un conjunto de actividades coordinadas y controladas con fecha de inicio y fin",
        "Es un proceso único que consiste en un conjunto de actividades coordinadas y controladas del que disponemos solamente de la fecha de inicio, pero no de finalización.",
        "Es un proceso único que consiste en un conjunto de actividades coordinadas y controladas del que disponemos solamente de la fecha de finalización, pero no de inicio."
      ],
      correcta: 0
    },
    {
      enunciado: "¿Dónde podemos encontrar errores en el ciclo de vida del desarrollo de un software?",
      opciones: [
        "Diseño de arquitectura",
        "Prueba de calificación",
        "Instalación"
      ],
      correcta: 0
    },
    {
      enunciado: "Qué se realiza después de haber obtenido un caso de negocio factible para el proyecto",
      opciones: [
        "Estudio de la viabilidad",
        "Planificación del proyecto",
        "Ejecución del proyecto"
      ],
      correcta: 1
    },

    // ---- Preguntas por temas · Tema 2 ----
    {
      enunciado: "¿Cuál es la definición más precisa que define a un caso de negocio?",
      opciones: [
        "El caso de negocio indica los objetivos que tiene que cumplir un proyecto",
        "El caso de negocio explica como el resultado del proyecto puede generar los beneficios que se esperan del mismo",
        "El caso de negocio determina los riesgos y acciones que se debe de tomar si se quiere comenzar un proyecto."
      ],
      correcta: 1
    },
    {
      enunciado: "Elija de entre las siguientes opciones la afirmación correcta que relaciona el éxito del proyecto con el éxito del negocio.",
      opciones: [
        "Un caso de negocio se considera un éxito si el proyecto se desarrolló cumpliendo todos sus objetivos",
        "Un proyecto puede llegar a cumplir todos sus objetivos, pero no puede cumplir con el caso de negocio",
        "Un caso de negocio indica los riesgos del proyecto que se tiene que evitar para que un proyecto sea exitoso"
      ],
      correcta: 0
    },
    {
      enunciado: "Dentro de los costes DIRECTOS de un proyecto software, ¿en qué categoría se consideran los costes de hardware sobre el que se ejecuta ese Software?",
      opciones: [
        "Costes de operación",
        "Costes de desarrollo",
        "Costes de implantación"
      ],
      correcta: 2
    },
    {
      enunciado: "En el proceso de evaluación de viabilidad de un proyecto, ¿Qué aspectos se analizan en la evaluación técnica?",
      opciones: [
        "Se evalúa si existe alguna tecnología que pueda proporcionar la funcionabilidad requerida",
        "Se evalúa si la funcionabilidad requerida es alcanzable con las tecnologías disponibles",
        "Se evalúa si se puede crear una tecnología nueva para afrontar la funcionabilidad requerida"
      ],
      correcta: 1
    },
    {
      enunciado: "De entre las siguientes opciones elija la recomendada en caso de querer trasladar al cálculo del valor neto presente el riesgo de un proyecto que consideramos razonablemente seguro.",
      opciones: [
        "Decrementar en un 5 por ciento",
        "Incrementar en un 2 por ciento",
        "Incrementar en un 5 por ciento"
      ],
      correcta: 1
    },
    {
      enunciado: "¿Cuál de estos proyectos tiene un PEOR retorno de inversión (ROI)?\n\nFlujos por año (Proyecto 1 / Proyecto 2 / Proyecto 3):\nAño 0: -80.000 / -80.000 / -100.000\nAño 1: 10.000 / 50.000 / 30.000\nAño 2: 40.000 / 40.000 / 30.000\nAño 3: 10.000 / 30.000 / 40.000\nAño 4: 20.000 / 10.000 / 20.000\nAño 5: 30.000 / -30.000 / 30.000",
      opciones: [
        "Proyecto 1",
        "Proyecto 2",
        "Proyecto 3"
      ],
      correcta: 2
    },
    {
      enunciado: "¿En cuál de estos tipos de gestiones conlleva una relación más impersonal con los empleados?",
      opciones: [
        "Gestión de programa",
        "Gestión de proyecto",
        "Ninguna de las dos."
      ],
      correcta: 1
    },
    {
      enunciado: "A la hora de tener que elegir el modelo de proceso utilizado en el desarrollo de un proyecto de software ¿Cuál de los siguientes no sería una cualidad decisiva?",
      opciones: [
        "La naturaleza del proyecto a desarrollar",
        "La rapidez de desarrollo y llegada al mercado",
        "Los costes y beneficios que pueda generar"
      ],
      correcta: 1
    },
    {
      enunciado: "¿Qué valor permite comparar oportunidades de inversión?",
      opciones: [
        "Retorno de inversión (ROI)",
        "Rentabilidad de tasa interna",
        "Valor actual neto"
      ],
      correcta: 0
    },
    {
      enunciado: "De entre las siguientes opciones elija la recomendada en caso de querer trasladar al cálculo del valor neto presente el riesgo de un proyecto que consideramos completamente seguro.",
      opciones: [
        "Decrementar en un 5 por ciento",
        "Incrementar en un 2 por ciento",
        "Incrementar en un 5 por ciento"
      ],
      correcta: 2
    },
    {
      enunciado: "¿Cuál es la mejor definición que define a la gestión de programa?",
      opciones: [
        "Permite gestionar muchos proyectos a la vez para tener más organizado el portfolio de la empresa",
        "Gestiona de forma grupal todos los proyectos que tengan algo en común, para incrementar la productividad de estos mismos",
        "Un grupo de proyectos que se gestionan de forma coordinada para obtener beneficios que no sería posible si los proyectos se gestionaran de forma independiente"
      ],
      correcta: 2
    },

    // ---- Preguntas por temas · Tema 3 ----
    {
      enunciado: "¿En qué etapa se selecciona el tipo de ciclo de vida del proyecto?",
      opciones: [
        "Al identificar el alcance y objetivos del proyecto",
        "Al identificar la infraestructura del proyecto",
        "Al analizar las características del proyecto"
      ],
      correcta: 2
    },
    {
      enunciado: "¿En qué etapa se establecen los métodos de comunicación con todos los stakeholders involucrados con el proyecto?",
      opciones: [
        "Al identificar el alcance y objetivos del proyecto",
        "Al identificar la infraestructura del proyecto",
        "Al analizar las características del proyecto"
      ],
      correcta: 0
    },
    {
      enunciado: "¿Cómo se generaría un producto?",
      opciones: [
        "El producto es el resultado de una actividad",
        "El producto es lo necesario para producir una actividad",
        "Antes de realizar la actividad, es necesario disponer de un producto"
      ],
      correcta: 0
    },
    {
      enunciado: "Considerando el siguiente producto de un proyecto software (MANUAL DE USUARIO) ¿de qué tipo de producto se trata?",
      opciones: [
        "Intermedio",
        "Deliberable",
        "Actividad"
      ],
      correcta: 1
    },
    {
      enunciado: "¿Cuál de los siguientes NO es considerado un producto?",
      opciones: [
        "Actualización del software",
        "Usuario capacitado",
        "Formación"
      ],
      correcta: 1
    },

    // ---- Preguntas por temas · Tema 4 ----
    {
      enunciado: "¿Qué módulo de proceso se obtiene cuando al modelo en cascada se añaden hitos al final de cada fase?",
      opciones: [
        "Stage Gate",
        "Modelo en V",
        "Modelo evolutivo"
      ],
      correcta: 0
    },
    {
      enunciado: "Elija de entre las siguientes características cual justifica mejor la utilización de un modelo de desarrollo basado en prototipos.",
      opciones: [
        "Reducir la incertidumbre",
        "Aumentar el conocimiento",
        "Implicar al usuario"
      ],
      correcta: 0
    },
    {
      enunciado: "¿A que denominamos Mocks-ups dentro del modelo de proceso basado en prototipos?",
      opciones: [
        "Modelos parciales con algunas capacidades prototipadas",
        "Diseño en pantalla sin funcionabilidad aparente",
        "Simulación parcial del funcionamiento de cierta función del proyecto"
      ],
      correcta: 1
    },
    {
      enunciado: "Dado el siguiente diagrama de Gantt, ¿cuál es el modelo más razonable?",
      imagen: "gantt-tema4.png",
      opciones: [
        "Cascada",
        "Incremental",
        "SCRUM"
      ],
      correcta: 0
    },
    {
      enunciado: "Según el enfoque “Rules of Thumb”, determina que enfoque se utiliza si en el proyecto sobre el que se quiere trabajar tiene poca incertidumbre y una baja complejidad.",
      opciones: [
        "Cascada",
        "Incremental",
        "Evolutivo"
      ],
      correcta: 0
    },
    {
      enunciado: "¿En qué se diferencia mejor la metodología SCRUM de la programación extrema (XP)?",
      opciones: [
        "En los pequeños lanzamientos",
        "En que los requisitos se congelan en cada sprint",
        "En que satisface mejor las necesidades del cliente"
      ],
      correcta: 1
    },
    {
      enunciado: "¿En qué tipo de desarrollo es más característico el uso de talleres?",
      opciones: [
        "JAD",
        "RAD",
        "MDA"
      ],
      correcta: 0
    },
    {
      enunciado: "¿Cuándo es necesario realizar un back-up en un cambio del prototipado?",
      opciones: [
        "Cosmético",
        "Global",
        "Local"
      ],
      correcta: 1
    },
    {
      enunciado: "¿En cuál de estos modelos es necesario revisar y firmar cada etapa antes de comenzar la siguiente?",
      opciones: [
        "Cascada",
        "Incremental",
        "Evolutivo"
      ],
      correcta: 0
    },
    {
      enunciado: "¿Qué metodología ágil congela sus requisitos en cada sprint?",
      opciones: [
        "SCRUM",
        "Programación extrema (XP)",
        "Atern"
      ],
      correcta: 0
    },
    {
      enunciado: "¿Qué metodología ágil determina que en todos sus sprint acaban a la vez para todos los equipos?",
      opciones: [
        "SCRUM",
        "Programación extrema (XP)",
        "Atern"
      ],
      correcta: 2
    }
  ]
};
