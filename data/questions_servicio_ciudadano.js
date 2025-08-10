// Preguntas sobre Políticas de Servicio al Ciudadano
const questions_servicio_ciudadano = [
    {
        id: "servicio_001",
        category: "servicio_ciudadano",
        difficulty: "baja",
        text: "Un contribuyente con discapacidad auditiva se presenta en una oficina de la DIAN para realizar un trámite.",
        question: "Según las políticas de servicio al ciudadano, ¿cuál es la acción correcta que debe tomar el funcionario que lo atiende?",
        options: [
            "Solicitar al contribuyente que regrese acompañado de un intérprete",
            "Atenderlo por escrito o utilizar los medios disponibles para garantizar una comunicación efectiva",
            "Remitirlo a los canales virtuales donde puede realizar el trámite sin necesidad de comunicación verbal",
            "Asignarle una cita especial con un funcionario capacitado en lenguaje de señas"
        ],
        correctAnswer: 1,
        explanation: "Según las políticas de servicio al ciudadano, la acción correcta es atender al contribuyente por escrito o utilizar los medios disponibles para garantizar una comunicación efectiva. Esta actuación está fundamentada en la Ley 1618 de 2013, que establece las disposiciones para garantizar el pleno ejercicio de los derechos de las personas con discapacidad, y en el Decreto 103 de 2015, que reglamenta la Ley 1712 de 2014 en lo relativo a la gestión de la información pública. La Resolución 000167 de 2021 de la DIAN, que adopta la Política de Servicio al Ciudadano, establece que los funcionarios deben garantizar la accesibilidad a los servicios para todas las personas, incluyendo aquellas con discapacidad, utilizando los medios disponibles para asegurar una comunicación efectiva. Esto puede incluir la comunicación escrita, el uso de aplicaciones de traducción, la asistencia de otros funcionarios o cualquier otro medio que permita atender adecuadamente al ciudadano, respetando su dignidad y garantizando el ejercicio efectivo de sus derechos."
    },
    {
        id: "servicio_002",
        category: "servicio_ciudadano",
        difficulty: "media",
        text: "La DIAN está implementando mejoras en sus canales de atención al ciudadano.",
        question: "De acuerdo con las políticas de servicio al ciudadano, ¿cuál de los siguientes NO es un canal de atención oficial de la DIAN?",
        options: [
            "Canal presencial en los puntos de contacto",
            "Canal telefónico a través de la línea de atención",
            "Canal virtual a través del sitio web y redes sociales oficiales",
            "Canal informal a través de grupos de WhatsApp creados por funcionarios"
        ],
        correctAnswer: 3,
        explanation: "El canal informal a través de grupos de WhatsApp creados por funcionarios NO es un canal de atención oficial de la DIAN. Según la Resolución 000167 de 2021 de la DIAN, que adopta la Política de Servicio al Ciudadano, los canales oficiales de atención son: 1) Canal presencial, a través de los puntos de contacto ubicados en las diferentes ciudades del país; 2) Canal telefónico, a través de la línea de atención nacional y las líneas locales; 3) Canal virtual, que incluye el sitio web oficial, el correo electrónico institucional, las redes sociales oficiales y las aplicaciones móviles desarrolladas por la entidad; y 4) Canal de correspondencia, para la recepción y envío de documentos físicos. Los grupos de WhatsApp creados por funcionarios no constituyen un canal oficial de atención, y su uso para este fin podría generar riesgos de seguridad de la información, incumplimiento de protocolos institucionales y posibles vulneraciones a la reserva tributaria establecida en el artículo 583 del Estatuto Tributario."
    },
    {
        id: "servicio_003",
        category: "servicio_ciudadano",
        difficulty: "alta",
        text: "La DIAN está evaluando la calidad del servicio prestado a los ciudadanos en sus diferentes canales de atención.",
        question: "Según las políticas de servicio al ciudadano y la normativa vigente, ¿cuál de los siguientes indicadores es más relevante para medir la efectividad en la prestación del servicio?",
        options: [
            "Número de funcionarios asignados a la atención al ciudadano",
            "Cantidad de trámites disponibles en línea",
            "Tiempo promedio de espera y de respuesta a las solicitudes de los ciudadanos",
            "Número de capacitaciones realizadas a los funcionarios"
        ],
        correctAnswer: 2,
        explanation: "El tiempo promedio de espera y de respuesta a las solicitudes de los ciudadanos es el indicador más relevante para medir la efectividad en la prestación del servicio. Este indicador está alineado con los principios de eficacia, economía y celeridad establecidos en el artículo 209 de la Constitución Política y desarrollados en el artículo 3 del Código de Procedimiento Administrativo y de lo Contencioso Administrativo (Ley 1437 de 2011). La Política Nacional de Eficiencia Administrativa al Servicio del Ciudadano (CONPES 3785 de 2013) establece que la oportunidad en la atención es uno de los atributos de calidad más valorados por los ciudadanos. La Resolución 000167 de 2021 de la DIAN, que adopta la Política de Servicio al Ciudadano, incluye el tiempo de respuesta como un indicador clave para evaluar la calidad del servicio, estableciendo metas específicas para la reducción de los tiempos de espera y de respuesta en todos los canales de atención. Este indicador permite medir directamente la experiencia del ciudadano y el cumplimiento de los términos legales establecidos para la atención de peticiones, quejas, reclamos y trámites."
    },
    {
        id: "servicio_004",
        category: "servicio_ciudadano",
        difficulty: "media",
        text: "Un funcionario de la DIAN debe atender a un contribuyente que se muestra visiblemente molesto por una inconsistencia en su declaración de renta.",
        question: "De acuerdo con los protocolos de servicio al ciudadano, ¿cuál es la actitud correcta que debe adoptar el funcionario?",
        options: [
            "Mantener una actitud defensiva para proteger la imagen de la entidad",
            "Solicitar al contribuyente que se calme antes de atenderlo",
            "Escuchar activamente, mostrar empatía y buscar una solución efectiva al problema",
            "Remitir inmediatamente el caso a un superior para evitar el conflicto"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con los protocolos de servicio al ciudadano, la actitud correcta que debe adoptar el funcionario es escuchar activamente, mostrar empatía y buscar una solución efectiva al problema. Esta actuación está fundamentada en la Resolución 000167 de 2021 de la DIAN, que adopta la Política de Servicio al Ciudadano, y en el Protocolo de Atención y Servicio al Ciudadano de la entidad. Estos documentos establecen que ante situaciones de inconformidad o molestia por parte de los ciudadanos, los funcionarios deben: 1) Mantener una actitud amable y respetuosa; 2) Escuchar atentamente la situación sin interrumpir; 3) Mostrar empatía frente a la situación; 4) Ofrecer disculpas si es el caso; 5) Brindar alternativas de solución; y 6) Hacer seguimiento hasta la resolución del caso. La Política Nacional de Eficiencia Administrativa al Servicio del Ciudadano (CONPES 3785 de 2013) también enfatiza la importancia de la actitud de servicio, la amabilidad y la empatía como atributos fundamentales para garantizar una experiencia de servicio satisfactoria para el ciudadano."
    },
    {
        id: "servicio_005",
        category: "servicio_ciudadano",
        difficulty: "baja",
        text: "La DIAN está implementando estrategias para mejorar la experiencia de los ciudadanos en sus puntos de contacto presenciales.",
        question: "Según las políticas de servicio al ciudadano, ¿cuál de las siguientes acciones contribuye más directamente a mejorar la accesibilidad en los puntos de atención presencial?",
        options: [
            "Implementar un sistema de turnos digitales",
            "Adecuar las instalaciones para personas con movilidad reducida",
            "Ampliar el horario de atención",
            "Aumentar el número de funcionarios de atención"
        ],
        correctAnswer: 1,
        explanation: "Adecuar las instalaciones para personas con movilidad reducida contribuye más directamente a mejorar la accesibilidad en los puntos de atención presencial. Esta acción está alineada con la Ley 1618 de 2013, que establece las disposiciones para garantizar el pleno ejercicio de los derechos de las personas con discapacidad, y con la Norma Técnica Colombiana NTC 6047 de 2013, que establece los criterios y requisitos generales de accesibilidad y señalización al medio físico requeridos en los espacios de servicio al ciudadano. La Resolución 000167 de 2021 de la DIAN, que adopta la Política de Servicio al Ciudadano, establece que la entidad debe garantizar la accesibilidad física a sus instalaciones para todas las personas, incluyendo aquellas con discapacidad, adultos mayores, mujeres gestantes y personas de talla baja. Esto implica la implementación de rampas, barandas, señalización en braille, baños accesibles, puertas de ancho adecuado, entre otras adecuaciones que permitan el acceso autónomo y seguro de todas las personas a los servicios de la entidad."
    },
    {
        id: "servicio_006",
        category: "servicio_ciudadano",
        difficulty: "alta",
        text: "La DIAN está diseñando su estrategia de racionalización de trámites como parte de su política de servicio al ciudadano.",
        question: "De acuerdo con la normativa vigente, ¿cuál de las siguientes acciones NO forma parte de una estrategia de racionalización de trámites?",
        options: [
            "Simplificación de formularios y requisitos",
            "Automatización de procesos y trámites en línea",
            "Eliminación de trámites que no tienen sustento normativo",
            "Creación de nuevos puntos de atención presencial en zonas rurales"
        ],
        correctAnswer: 3,
        explanation: "La creación de nuevos puntos de atención presencial en zonas rurales NO forma parte de una estrategia de racionalización de trámites. Según el Decreto Ley 019 de 2012 (Ley Anti-trámites) y el Decreto 2106 de 2019, la racionalización de trámites busca simplificar, estandarizar, eliminar, optimizar y automatizar los trámites y procedimientos administrativos, para facilitar el acceso de los ciudadanos a sus derechos y el cumplimiento de sus obligaciones. La Política de Racionalización de Trámites, establecida en el Decreto 1499 de 2017 como parte del Modelo Integrado de Planeación y Gestión (MIPG), define tres tipos de racionalización: normativa (eliminación o modificación de normas que imponen trámites), administrativa (mejora de procesos y procedimientos) y tecnológica (uso de tecnologías de la información). La creación de nuevos puntos de atención presencial, aunque puede mejorar la cobertura del servicio, no constituye una acción de racionalización, pues no simplifica, elimina ni optimiza los trámites existentes. Por el contrario, podría implicar mayores costos operativos para la entidad y no necesariamente facilita el acceso a los trámites, especialmente considerando la tendencia hacia la digitalización y virtualización de servicios promovida por la Política de Gobierno Digital."
    },
    {
        id: "servicio_007",
        category: "servicio_ciudadano",
        difficulty: "media",
        text: "Un funcionario de la DIAN debe atender a un ciudadano extranjero que no habla español y necesita realizar un trámite tributario urgente.",
        question: "Según las políticas de servicio al ciudadano, ¿cuál es la acción más adecuada que debe tomar el funcionario?",
        options: [
            "Indicarle que debe regresar con un traductor certificado",
            "Utilizar herramientas de traducción disponibles y, si es necesario, buscar apoyo de un funcionario que conozca el idioma",
            "Entregarle los formularios en español para que los complete como pueda",
            "Remitirlo a la embajada de su país para que le brinden asistencia"
        ],
        correctAnswer: 1,
        explanation: "Según las políticas de servicio al ciudadano, la acción más adecuada es utilizar herramientas de traducción disponibles y, si es necesario, buscar apoyo de un funcionario que conozca el idioma. Esta actuación está fundamentada en la Resolución 000167 de 2021 de la DIAN, que adopta la Política de Servicio al Ciudadano, y en el Protocolo de Atención y Servicio al Ciudadano de la entidad. Estos documentos establecen que la DIAN debe garantizar la atención a todos los ciudadanos, incluyendo extranjeros que no hablen español, utilizando los recursos disponibles para facilitar la comunicación efectiva. La Política Nacional de Eficiencia Administrativa al Servicio del Ciudadano (CONPES 3785 de 2013) también enfatiza la importancia de la accesibilidad a los servicios públicos para todos los ciudadanos, sin discriminación por razones de idioma, nacionalidad u otras condiciones. En la práctica, esto implica utilizar herramientas tecnológicas de traducción, buscar apoyo de funcionarios que conozcan el idioma, o implementar otras estrategias que permitan atender adecuadamente al ciudadano extranjero, garantizando su derecho a acceder a los servicios de la entidad en igualdad de condiciones."
    },
    {
        id: "servicio_008",
        category: "servicio_ciudadano",
        difficulty: "baja",
        text: "La DIAN está implementando un sistema de evaluación de la satisfacción ciudadana en sus puntos de atención.",
        question: "De acuerdo con las políticas de servicio al ciudadano, ¿cuál es el principal objetivo de implementar este sistema?",
        options: [
            "Cumplir con un requisito legal obligatorio",
            "Evaluar el desempeño individual de los funcionarios",
            "Identificar oportunidades de mejora en la prestación del servicio",
            "Comparar el desempeño entre diferentes puntos de atención"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con las políticas de servicio al ciudadano, el principal objetivo de implementar un sistema de evaluación de la satisfacción ciudadana es identificar oportunidades de mejora en la prestación del servicio. Esta finalidad está alineada con el principio de mejora continua establecido en el Modelo Integrado de Planeación y Gestión (MIPG) adoptado mediante el Decreto 1499 de 2017. La Resolución 000167 de 2021 de la DIAN, que adopta la Política de Servicio al Ciudadano, establece que la entidad debe implementar mecanismos para medir la percepción y satisfacción de los ciudadanos frente a los servicios prestados, con el fin de identificar aspectos a mejorar y tomar decisiones basadas en evidencia. La Política Nacional de Eficiencia Administrativa al Servicio del Ciudadano (CONPES 3785 de 2013) también enfatiza la importancia de la evaluación de la satisfacción ciudadana como insumo fundamental para el mejoramiento continuo de la calidad del servicio. Aunque estos sistemas también pueden servir para evaluar el desempeño de funcionarios o comparar puntos de atención, su propósito principal es generar información útil para implementar acciones de mejora que incrementen la satisfacción de los ciudadanos."
    },
    {
        id: "servicio_009",
        category: "servicio_ciudadano",
        difficulty: "alta",
        text: "La DIAN está implementando su Política de Tratamiento de Datos Personales en el marco de su estrategia de servicio al ciudadano.",
        question: "De acuerdo con la normativa vigente sobre protección de datos personales, ¿qué acción debe realizar la DIAN antes de recolectar datos personales de los ciudadanos para la prestación de sus servicios?",
        options: [
            "Solicitar autorización previa, expresa e informada del titular, indicando la finalidad del tratamiento",
            "Notificar a la Superintendencia de Industria y Comercio sobre cada recolección de datos",
            "Publicar un aviso general en su página web sobre la recolección de datos",
            "No requiere autorización por tratarse de una entidad pública que cumple funciones legales"
        ],
        correctAnswer: 0,
        explanation: "De acuerdo con la normativa vigente sobre protección de datos personales, la DIAN debe solicitar autorización previa, expresa e informada del titular, indicando la finalidad del tratamiento, antes de recolectar sus datos personales. Esta obligación está establecida en la Ley 1581 de 2012 (Ley de Protección de Datos Personales) y su Decreto Reglamentario 1377 de 2013 (compilado en el Decreto 1074 de 2015). El artículo 9 de la Ley 1581 establece que 'sin perjuicio de las excepciones previstas en la ley, en el Tratamiento se requiere la autorización previa e informada del Titular, la cual deberá ser obtenida por cualquier medio que pueda ser objeto de consulta posterior'. Aunque el artículo 10 de la misma ley establece algunas excepciones a este requisito, incluyendo cuando la información es requerida por una entidad pública en ejercicio de sus funciones legales, la Corte Constitucional, en la Sentencia C-748 de 2011, aclaró que estas excepciones deben interpretarse de manera restrictiva y que, en general, las entidades públicas también están obligadas a obtener autorización para el tratamiento de datos personales. La Resolución 000167 de 2021 de la DIAN, que adopta la Política de Servicio al Ciudadano, establece que la entidad debe garantizar la protección de los datos personales de los ciudadanos, cumpliendo con los principios y obligaciones establecidos en la normativa vigente."
    },
    {
        id: "servicio_010",
        category: "servicio_ciudadano",
        difficulty: "media",
        text: "La DIAN está implementando un programa de capacitación para sus funcionarios de atención al ciudadano.",
        question: "Según las políticas de servicio al ciudadano, ¿cuál de los siguientes temas es más relevante incluir en este programa de capacitación?",
        options: [
            "Historia y estructura organizacional de la DIAN",
            "Normativa tributaria, aduanera y cambiaria aplicable a los trámites más frecuentes",
            "Técnicas de venta y negociación",
            "Manejo de software especializado de diseño gráfico"
        ],
        correctAnswer: 1,
        explanation: "Según las políticas de servicio al ciudadano, el tema más relevante para incluir en un programa de capacitación para funcionarios de atención al ciudadano es la normativa tributaria, aduanera y cambiaria aplicable a los trámites más frecuentes. Esta priorización está fundamentada en la Resolución 000167 de 2021 de la DIAN, que adopta la Política de Servicio al Ciudadano, y en el Plan Institucional de Capacitación de la entidad. Estos documentos establecen que los funcionarios de atención al ciudadano deben tener conocimientos técnicos sólidos sobre los trámites y servicios que ofrece la entidad, para poder brindar información precisa y orientación adecuada a los ciudadanos. La Política Nacional de Eficiencia Administrativa al Servicio del Ciudadano (CONPES 3785 de 2013) también enfatiza la importancia de la cualificación de los servidores públicos que atienden directamente a los ciudadanos, tanto en competencias técnicas como en habilidades blandas. Aunque otros temas como la historia institucional o las habilidades comunicativas también son importantes, el conocimiento técnico sobre la normativa aplicable a los trámites es fundamental para garantizar la calidad y precisión de la información proporcionada a los ciudadanos, evitando errores que puedan generar reprocesos o afectar el cumplimiento de sus obligaciones."
    },
    {
        id: "servicio_011",
        category: "servicio_ciudadano",
        difficulty: "baja",
        text: "Un ciudadano se presenta en una oficina de la DIAN para realizar un trámite, pero no tiene claro qué documentos debe presentar.",
        question: "Según los protocolos de servicio al ciudadano, ¿cuál es la primera acción que debe realizar el funcionario que lo atiende?",
        options: [
            "Entregarle un folleto informativo con los requisitos de todos los trámites",
            "Remitirlo al sitio web de la DIAN para que consulte los requisitos",
            "Escuchar atentamente su necesidad para identificar el trámite específico que requiere",
            "Solicitarle que regrese cuando tenga clara su solicitud"
        ],
        correctAnswer: 2,
        explanation: "Según los protocolos de servicio al ciudadano, la primera acción que debe realizar el funcionario es escuchar atentamente la necesidad del ciudadano para identificar el trámite específico que requiere. Esta actuación está fundamentada en la Resolución 000167 de 2021 de la DIAN, que adopta la Política de Servicio al Ciudadano, y en el Protocolo de Atención y Servicio al Ciudadano de la entidad. Estos documentos establecen que la atención debe iniciar con una escucha activa que permita comprender la necesidad real del ciudadano, para luego brindar información precisa y personalizada. La Política Nacional de Eficiencia Administrativa al Servicio del Ciudadano (CONPES 3785 de 2013) también enfatiza la importancia de la actitud de servicio y la orientación efectiva como atributos fundamentales para garantizar una experiencia de servicio satisfactoria. Esta aproximación centrada en el ciudadano permite identificar correctamente el trámite requerido y brindar información específica sobre los requisitos y procedimientos aplicables, evitando confusiones y reprocesos que podrían generarse si se proporciona información genérica o se remite al ciudadano a otros canales sin antes comprender su necesidad particular."
    },
    {
        id: "servicio_012",
        category: "servicio_ciudadano",
        difficulty: "alta",
        text: "La DIAN está implementando una estrategia de lenguaje claro como parte de su política de servicio al ciudadano.",
        question: "De acuerdo con los lineamientos sobre lenguaje claro en el servicio público, ¿cuál de las siguientes comunicaciones dirigidas a un contribuyente cumple mejor con estos criterios?",
        options: [
            "Se le informa que en virtud del artículo 817 del Estatuto Tributario, la acción de cobro de las obligaciones fiscales prescribe en el término de cinco (5) años, contados a partir de la fecha en que se hicieron legalmente exigibles.",
            "Le informamos que según la ley, usted tiene 5 años para pagar sus impuestos antes de que la DIAN pierda la facultad de cobrarlos. Este plazo se cuenta desde la fecha en que debió pagar.",
            "Se notifica que conforme a la normatividad tributaria vigente, el término de prescripción de la acción de cobro es quinquenal, contabilizado a partir de la exigibilidad de la obligación.",
            "Le comunicamos que la administración tributaria tiene la potestad legal para exigir el pago de las obligaciones fiscales dentro del término establecido en la ley, so pena de configurarse el fenómeno jurídico de la prescripción."
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con los lineamientos sobre lenguaje claro en el servicio público, la comunicación que mejor cumple con estos criterios es: 'Le informamos que según la ley, usted tiene 5 años para pagar sus impuestos antes de que la DIAN pierda la facultad de cobrarlos. Este plazo se cuenta desde la fecha en que debió pagar'. Esta comunicación utiliza un lenguaje sencillo, directo y comprensible para el ciudadano promedio, evitando tecnicismos innecesarios y explicando el concepto de prescripción en términos prácticos. La Guía de Lenguaje Claro para Servidores Públicos de Colombia, desarrollada por el Departamento Nacional de Planeación, establece que las comunicaciones deben ser claras, concisas, organizadas lógicamente y enfocadas en lo que el ciudadano necesita saber. La Resolución 000167 de 2021 de la DIAN, que adopta la Política de Servicio al Ciudadano, incluye el uso de lenguaje claro como uno de los atributos de calidad del servicio, reconociendo su importancia para garantizar que los ciudadanos comprendan sus derechos y obligaciones. El uso de lenguaje claro no implica simplificar excesivamente la información o eliminar conceptos técnicos necesarios, sino presentarlos de manera que sean comprensibles para personas sin formación especializada en el tema."
    },
    {
        id: "servicio_013",
        category: "servicio_ciudadano",
        difficulty: "media",
        text: "La DIAN está implementando un sistema de agendamiento de citas para la atención presencial en sus oficinas.",
        question: "Según las políticas de servicio al ciudadano, ¿cuál es el principal beneficio de implementar este sistema?",
        options: [
            "Reducir el número de funcionarios necesarios para la atención presencial",
            "Disminuir los tiempos de espera y mejorar la experiencia del ciudadano",
            "Limitar el número de ciudadanos que pueden ser atendidos diariamente",
            "Recopilar datos personales de los ciudadanos para campañas informativas"
        ],
        correctAnswer: 1,
        explanation: "Según las políticas de servicio al ciudadano, el principal beneficio de implementar un sistema de agendamiento de citas es disminuir los tiempos de espera y mejorar la experiencia del ciudadano. Esta finalidad está alineada con los principios de eficacia, economía y celeridad establecidos en el artículo 209 de la Constitución Política y desarrollados en el artículo 3 del Código de Procedimiento Administrativo y de lo Contencioso Administrativo (Ley 1437 de 2011). La Resolución 000167 de 2021 de la DIAN, que adopta la Política de Servicio al Ciudadano, establece que la entidad debe implementar mecanismos que faciliten el acceso a sus servicios y reduzcan los tiempos de espera. La Política Nacional de Eficiencia Administrativa al Servicio del Ciudadano (CONPES 3785 de 2013) también enfatiza la importancia de la oportunidad en la atención como uno de los atributos de calidad más valorados por los ciudadanos. El sistema de agendamiento permite distribuir la demanda de servicios a lo largo del día y asignar los recursos humanos de manera más eficiente, reduciendo la congestión en las oficinas y los tiempos de espera para los ciudadanos, lo que se traduce en una mejor experiencia de servicio."
    },
    {
        id: "servicio_014",
        category: "servicio_ciudadano",
        difficulty: "baja",
        text: "Un funcionario de la DIAN debe atender a un ciudadano que solicita información sobre cómo presentar una declaración de renta por primera vez.",
        question: "Según los protocolos de servicio al ciudadano, ¿cuál de las siguientes respuestas es más adecuada?",
        options: [
            "Esa información está disponible en la página web de la DIAN, puede consultarla allí.",
            "Le explico el procedimiento paso a paso y le entrego material informativo que puede consultar posteriormente.",
            "Debe contratar un contador para que le ayude con ese trámite.",
            "Es un procedimiento complejo, le recomiendo que asista a una capacitación especializada."
        ],
        correctAnswer: 1,
        explanation: "Según los protocolos de servicio al ciudadano, la respuesta más adecuada es explicar el procedimiento paso a paso y entregar material informativo que el ciudadano pueda consultar posteriormente. Esta actuación está fundamentada en la Resolución 000167 de 2021 de la DIAN, que adopta la Política de Servicio al Ciudadano, y en el Protocolo de Atención y Servicio al Ciudadano de la entidad. Estos documentos establecen que los funcionarios deben brindar información completa, clara y precisa sobre los trámites y servicios, utilizando un lenguaje sencillo y comprensible para el ciudadano. La Política Nacional de Eficiencia Administrativa al Servicio del Ciudadano (CONPES 3785 de 2013) también enfatiza la importancia de la claridad en la información y la orientación efectiva como atributos fundamentales para garantizar una experiencia de servicio satisfactoria. Esta aproximación centrada en el ciudadano reconoce que muchas personas pueden no estar familiarizadas con los procedimientos tributarios y necesitan una orientación detallada y personalizada, complementada con material informativo que les permita consultar posteriormente los detalles del trámite."
    },
    {
        id: "servicio_015",
        category: "servicio_ciudadano",
        difficulty: "alta",
        text: "La DIAN está implementando una estrategia de caracterización de usuarios como parte de su política de servicio al ciudadano.",
        question: "De acuerdo con la normativa vigente, ¿cuál es el principal objetivo de realizar una caracterización de usuarios en una entidad pública?",
        options: [
            "Clasificar a los ciudadanos según su nivel de cumplimiento tributario",
            "Identificar las necesidades, expectativas y preferencias de los diferentes grupos de usuarios para adaptar la oferta institucional",
            "Determinar qué usuarios deben recibir atención prioritaria en los canales presenciales",
            "Establecer perfiles de riesgo para los procesos de fiscalización y control"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con la normativa vigente, el principal objetivo de realizar una caracterización de usuarios en una entidad pública es identificar las necesidades, expectativas y preferencias de los diferentes grupos de usuarios para adaptar la oferta institucional. Esta finalidad está alineada con la Guía de Caracterización de Ciudadanos, Usuarios e Interesados desarrollada por el Departamento Nacional de Planeación y el Departamento Administrativo de la Función Pública. La Resolución 000167 de 2021 de la DIAN, que adopta la Política de Servicio al Ciudadano, establece que la entidad debe realizar ejercicios de caracterización de usuarios para comprender sus particularidades y adaptar sus servicios, canales y estrategias de atención a sus necesidades específicas. La Política Nacional de Eficiencia Administrativa al Servicio del Ciudadano (CONPES 3785 de 2013) también enfatiza la importancia de conocer a los usuarios como base fundamental para el diseño y mejoramiento de los servicios. La caracterización permite identificar variables demográficas, geográficas, intrínsecas y de comportamiento de los usuarios, lo que facilita la segmentación de la población objetivo y el diseño de estrategias diferenciadas que respondan a sus necesidades particulares, mejorando así la efectividad y pertinencia de los servicios ofrecidos."
    },
    {
        id: "servicio_016",
        category: "servicio_ciudadano",
        difficulty: "media",
        text: "La DIAN está evaluando la implementación de un chatbot en su página web para mejorar la atención al ciudadano.",
        question: "Según las políticas de servicio al ciudadano y la normativa sobre gobierno digital, ¿qué aspecto es más importante considerar al implementar esta herramienta?",
        options: [
            "Que el chatbot pueda atender consultas las 24 horas del día, los 7 días de la semana",
            "Que el diseño visual del chatbot sea atractivo y moderno",
            "Que el chatbot pueda identificar correctamente las necesidades del usuario y brindar respuestas precisas o derivar a un humano cuando sea necesario",
            "Que el chatbot utilice inteligencia artificial avanzada, independientemente de su efectividad"
        ],
        correctAnswer: 2,
        explanation: "Según las políticas de servicio al ciudadano y la normativa sobre gobierno digital, el aspecto más importante a considerar al implementar un chatbot es que pueda identificar correctamente las necesidades del usuario y brindar respuestas precisas o derivar a un humano cuando sea necesario. Esta priorización está fundamentada en la Política de Gobierno Digital establecida en el Decreto 1008 de 2018 (compilado en el Decreto 1078 de 2015) y en la Guía de Implementación de Servicios Ciudadanos Digitales desarrollada por el Ministerio de Tecnologías de la Información y las Comunicaciones. La Resolución 000167 de 2021 de la DIAN, que adopta la Política de Servicio al Ciudadano, establece que las herramientas tecnológicas implementadas para la atención al ciudadano deben ser efectivas y centradas en las necesidades del usuario. La Política Nacional de Eficiencia Administrativa al Servicio del Ciudadano (CONPES 3785 de 2013) también enfatiza la importancia de la calidad y precisión de la información proporcionada a los ciudadanos, independientemente del canal utilizado. Aunque la disponibilidad 24/7 es una ventaja importante de los chatbots, su principal valor radica en su capacidad para entender correctamente las consultas de los usuarios y proporcionar respuestas útiles y precisas, o reconocer sus limitaciones y derivar al usuario a un agente humano cuando la consulta excede sus capacidades."
    },
    {
        id: "servicio_017",
        category: "servicio_ciudadano",
        difficulty: "baja",
        text: "Un ciudadano con discapacidad visual necesita presentar su declaración de renta y solicita asistencia en una oficina de la DIAN.",
        question: "Según las políticas de servicio al ciudadano y la normativa sobre inclusión, ¿qué debe hacer la DIAN para garantizar la atención adecuada a este ciudadano?",
        options: [
            "Indicarle que debe venir acompañado de una persona que pueda ayudarle",
            "Brindarle atención preferencial y asistencia personalizada para completar su trámite",
            "Sugerirle que utilice los canales virtuales que tienen herramientas para personas con discapacidad visual",
            "Programarle una cita especial con un funcionario capacitado en lenguaje braille"
        ],
        correctAnswer: 1,
        explanation: "Según las políticas de servicio al ciudadano y la normativa sobre inclusión, la DIAN debe brindar atención preferencial y asistencia personalizada al ciudadano con discapacidad visual para completar su trámite. Esta actuación está fundamentada en la Ley 1618 de 2013, que establece las disposiciones para garantizar el pleno ejercicio de los derechos de las personas con discapacidad, y en la Ley 1437 de 2011 (Código de Procedimiento Administrativo y de lo Contencioso Administrativo), que en su artículo 5 establece que las autoridades deben dar atención especial y preferente a las personas con discapacidad. La Resolución 000167 de 2021 de la DIAN, que adopta la Política de Servicio al Ciudadano, establece que la entidad debe garantizar la accesibilidad a sus servicios para todas las personas, incluyendo aquellas con discapacidad, y brindar la asistencia necesaria para que puedan realizar sus trámites en igualdad de condiciones. Esto implica que un funcionario debe asistir personalmente al ciudadano con discapacidad visual, leyéndole los formularios, ayudándole a completarlos y guiándole durante todo el proceso, sin exigirle que venga acompañado o que utilice canales alternativos si su preferencia es la atención presencial."
    },
    {
        id: "servicio_018",
        category: "servicio_ciudadano",
        difficulty: "alta",
        text: "La DIAN está implementando un sistema de gestión de la calidad en sus procesos de atención al ciudadano.",
        question: "De acuerdo con la normativa vigente sobre sistemas de gestión de la calidad en el sector público, ¿cuál de los siguientes enfoques debe primar en este sistema?",
        options: [
            "Enfoque basado en procesos, que busca estandarizar los procedimientos independientemente de las necesidades específicas de los ciudadanos",
            "Enfoque basado en riesgos, que prioriza la identificación y mitigación de posibles fallas en la atención",
            "Enfoque basado en el ciudadano, que busca comprender y satisfacer sus necesidades y expectativas",
            "Enfoque basado en resultados, que prioriza el cumplimiento de metas cuantitativas de atención"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con la normativa vigente sobre sistemas de gestión de la calidad en el sector público, el enfoque que debe primar es el basado en el ciudadano, que busca comprender y satisfacer sus necesidades y expectativas. Este enfoque está alineado con la Norma Técnica de Calidad en la Gestión Pública (NTCGP 1000:2009), que aunque fue derogada como norma obligatoria por el Decreto 1499 de 2017, sus principios fueron incorporados en el Modelo Integrado de Planeación y Gestión (MIPG). La Política Nacional de Eficiencia Administrativa al Servicio del Ciudadano (CONPES 3785 de 2013) establece que la gestión pública debe orientarse al servicio al ciudadano y a la obtención de resultados, poniendo al ciudadano como eje central de la administración. La Resolución 000167 de 2021 de la DIAN, que adopta la Política de Servicio al Ciudadano, establece que la entidad debe implementar un sistema de gestión de la calidad centrado en el ciudadano, que permita mejorar continuamente los procesos de atención para satisfacer sus necesidades y expectativas. Aunque los enfoques basados en procesos, riesgos y resultados son importantes y complementarios, el enfoque primordial debe ser el ciudadano como razón de ser del servicio público."
    },
    {
        id: "servicio_019",
        category: "servicio_ciudadano",
        difficulty: "media",
        text: "La DIAN está diseñando su estrategia de presencia territorial para mejorar el acceso a sus servicios en zonas alejadas.",
        question: "Según las políticas de servicio al ciudadano, ¿cuál de las siguientes estrategias es más efectiva para ampliar la cobertura en zonas de difícil acceso?",
        options: [
            "Construir nuevas sedes permanentes en todas las cabeceras municipales",
            "Implementar puntos de atención móviles que visiten periódicamente las zonas alejadas",
            "Capacitar a los ciudadanos para que utilicen exclusivamente los canales virtuales",
            "Delegar la atención de trámites básicos a entidades privadas mediante tercerización"
        ],
        correctAnswer: 1,
        explanation: "Según las políticas de servicio al ciudadano, la estrategia más efectiva para ampliar la cobertura en zonas de difícil acceso es implementar puntos de atención móviles que visiten periódicamente las zonas alejadas. Esta estrategia está alineada con la Política Nacional de Eficiencia Administrativa al Servicio del Ciudadano (CONPES 3785 de 2013), que promueve la implementación de modelos de servicio que acerquen la administración al ciudadano. La Resolución 000167 de 2021 de la DIAN, que adopta la Política de Servicio al Ciudadano, establece que la entidad debe desarrollar estrategias para garantizar el acceso a sus servicios en todo el territorio nacional, considerando las particularidades geográficas y socioeconómicas de cada región. Los puntos de atención móviles representan una solución costo-efectiva que permite llevar los servicios de la DIAN a zonas alejadas sin la necesidad de mantener infraestructura permanente en lugares con baja demanda de servicios. Esta estrategia también reconoce las limitaciones de conectividad y alfabetización digital que pueden existir en zonas rurales o apartadas, ofreciendo atención presencial a ciudadanos que podrían tener dificultades para acceder a canales virtuales."
    },
    {
        id: "servicio_020",
        category: "servicio_ciudadano",
        difficulty: "baja",
        text: "Un funcionario de la DIAN debe finalizar su jornada laboral, pero aún hay ciudadanos esperando ser atendidos.",
        question: "Según los protocolos de servicio al ciudadano, ¿cómo debe proceder el funcionario?",
        options: [
            "Informar a los ciudadanos que debe retirarse y que regresen al día siguiente",
            "Continuar atendiendo hasta que no queden ciudadanos en espera, independientemente de la hora",
            "Atender a los ciudadanos que ya tienen turno asignado y coordinar con su supervisor la atención de los demás",
            "Atender solo a los casos urgentes y pedir al resto que regrese otro día"
        ],
        correctAnswer: 2,
        explanation: "Según los protocolos de servicio al ciudadano, el funcionario debe atender a los ciudadanos que ya tienen turno asignado y coordinar con su supervisor la atención de los demás. Esta actuación está fundamentada en la Resolución 000167 de 2021 de la DIAN, que adopta la Política de Servicio al Ciudadano, y en el Protocolo de Atención y Servicio al Ciudadano de la entidad. Estos documentos establecen que se debe garantizar la atención de todos los ciudadanos que han ingresado a las instalaciones dentro del horario de atención, pero también reconocen la importancia de respetar los derechos laborales de los funcionarios. La Política Nacional de Eficiencia Administrativa al Servicio del Ciudadano (CONPES 3785 de 2013) enfatiza la importancia de la gestión del servicio, que implica una adecuada coordinación entre los funcionarios y sus supervisores para garantizar la continuidad de la atención. Esta solución equilibrada permite cumplir con el compromiso de servicio hacia los ciudadanos que ya han invertido tiempo en esperar su turno, mientras se gestiona adecuadamente la atención de los demás ciudadanos, ya sea reasignándolos a otros funcionarios disponibles o informándoles claramente sobre las alternativas para ser atendidos posteriormente."
    }
];