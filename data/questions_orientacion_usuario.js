// Preguntas sobre Orientación al Usuario y Ciudadano
const questions_orientacion_usuario = [
    {
        id: "orientacion_usuario_001",
        category: "orientacion_usuario",
        difficulty: "media",
        text: "Un contribuyente se presenta en una oficina de la DIAN visiblemente molesto porque ha intentado realizar un trámite en línea varias veces sin éxito, y ahora debe hacerlo presencialmente cuando ya está próximo a vencerse el plazo.",
        question: "Según los protocolos de servicio al ciudadano y manejo de situaciones difíciles vigentes en 2025, ¿cuál es la respuesta más adecuada del funcionario que lo atiende?",
        options: [
            "Explicarle que debe calmarse primero para poder ser atendido, ya que las expresiones de molestia no son aceptables en las oficinas públicas.",
            "Indicarle que los problemas técnicos de la plataforma no son responsabilidad de los funcionarios de atención presencial y que debe presentar una queja formal por los canales establecidos.",
            "Escuchar activamente su situación, mostrar empatía reconociendo la frustración, resolver su trámite con prioridad, explicarle el proceso paso a paso, informarle sobre canales alternativos para futuros trámites, y registrar el caso para mejora del servicio.",
            "Atenderlo rápidamente para evitar que su molestia aumente, omitiendo explicaciones detalladas para agilizar el proceso."
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con los protocolos de servicio al ciudadano y manejo de situaciones difíciles establecidos en el Modelo Integrado de Planeación y Gestión (MIPG) y la Política de Servicio al Ciudadano vigentes en 2025, la respuesta más adecuada es escuchar activamente su situación, mostrar empatía reconociendo la frustración, resolver su trámite con prioridad, explicarle el proceso paso a paso, informarle sobre canales alternativos para futuros trámites, y registrar el caso para mejora del servicio. La Guía de Atención al Ciudadano en Situaciones Difíciles (DNP, 2024) establece que ante ciudadanos molestos, es fundamental reconocer sus emociones, abordar su necesidad práctica y convertir la experiencia negativa en una oportunidad de recuperación del servicio. Esta aproximación demuestra orientación al ciudadano al priorizar la solución de su problema inmediato mientras se mantiene un trato respetuoso y empático, y contribuye a la mejora del servicio al registrar la situación para prevenir casos similares en el futuro."
    },
    {
        id: "orientacion_usuario_002",
        category: "orientacion_usuario",
        difficulty: "alta",
        text: "La DIAN está diseñando un nuevo procedimiento para la devolución de saldos a favor que busca simplificar el proceso para los contribuyentes. El equipo responsable debe decidir cómo estructurar este procedimiento.",
        question: "Según los principios de diseño centrado en el usuario y simplificación de trámites vigentes en 2025, ¿cuál es el enfoque más adecuado para diseñar este nuevo procedimiento?",
        options: [
            "Diseñar el procedimiento priorizando la eficiencia interna y los controles necesarios para prevenir fraudes, ya que estos son los aspectos más críticos para la entidad.",
            "Basarse en los procedimientos existentes, realizando solo los ajustes mínimos necesarios para cumplir con los nuevos requisitos normativos.",
            "Implementar un proceso de diseño centrado en el usuario: investigar las necesidades y puntos de dolor de diferentes perfiles de contribuyentes, mapear su experiencia actual, co-crear soluciones con usuarios y funcionarios, prototipar y probar iterativamente las propuestas, y establecer indicadores que midan tanto la eficiencia como la experiencia del usuario.",
            "Adoptar las mejores prácticas internacionales en procedimientos de devolución, adaptándolas al contexto normativo colombiano."
        ],
        correctAnswer: 2,
        explanation: "Según los principios de diseño centrado en el usuario y simplificación de trámites establecidos en el Modelo Integrado de Planeación y Gestión (MIPG), la Política de Racionalización de Trámites y la Política de Servicio al Ciudadano vigentes en 2025, el enfoque más adecuado para diseñar un nuevo procedimiento es implementar un proceso de diseño centrado en el usuario: investigar las necesidades y puntos de dolor de diferentes perfiles de contribuyentes, mapear su experiencia actual, co-crear soluciones con usuarios y funcionarios, prototipar y probar iterativamente las propuestas, y establecer indicadores que midan tanto la eficiencia como la experiencia del usuario. La Guía de Diseño Centrado en el Usuario para Trámites Públicos (DNP, 2024) establece que los procedimientos más efectivos son aquellos que equilibran las necesidades de los usuarios con los requisitos institucionales. Esta aproximación permite desarrollar soluciones que realmente respondan a las necesidades de los contribuyentes mientras cumplen con los requisitos normativos y de control, mejorando tanto la experiencia del usuario como la eficiencia del proceso."
    },
    {
        id: "orientacion_usuario_003",
        category: "orientacion_usuario",
        difficulty: "media",
        text: "Un funcionario de la DIAN debe comunicar a un contribuyente que su solicitud ha sido rechazada por no cumplir con todos los requisitos establecidos en la normativa.",
        question: "Según los principios de comunicación efectiva y orientación al ciudadano vigentes en 2025, ¿cuál es la forma más adecuada de comunicar esta decisión?",
        options: [
            "Enviar una notificación formal citando los artículos específicos de la normativa que fundamentan el rechazo, para demostrar la solidez jurídica de la decisión.",
            "Comunicar verbalmente la decisión de manera general, sugiriendo al contribuyente que consulte la normativa aplicable para entender los motivos del rechazo.",
            "Explicar la decisión en lenguaje claro, especificando exactamente qué requisitos no se cumplieron, por qué son necesarios, qué puede hacer el contribuyente para subsanar las deficiencias, y cuáles son los plazos y canales para presentar una nueva solicitud o interponer recursos.",
            "Informar sobre el rechazo y ofrecer una cita con un asesor especializado para que explique los detalles, evitando entrar en explicaciones técnicas que puedan confundir al contribuyente."
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con los principios de comunicación efectiva y orientación al ciudadano establecidos en el Modelo Integrado de Planeación y Gestión (MIPG) y la Política de Servicio al Ciudadano vigentes en 2025, la forma más adecuada de comunicar una decisión desfavorable es explicarla en lenguaje claro, especificando exactamente qué requisitos no se cumplieron, por qué son necesarios, qué puede hacer el contribuyente para subsanar las deficiencias, y cuáles son los plazos y canales para presentar una nueva solicitud o interponer recursos. La Guía de Lenguaje Claro para Servidores Públicos (DNP, 2023) establece que las comunicaciones sobre decisiones administrativas deben ser comprensibles, precisas y orientadas a la acción. Esta aproximación demuestra respeto por el ciudadano al proporcionarle información completa y comprensible, facilita el cumplimiento de los requisitos en futuros trámites, y reduce la probabilidad de recursos o quejas derivadas de malentendidos sobre los motivos del rechazo."
    },
    {
        id: "orientacion_usuario_004",
        category: "orientacion_usuario",
        difficulty: "baja",
        text: "Un contribuyente con discapacidad visual se presenta en una oficina de la DIAN para realizar un trámite que normalmente requiere la revisión y firma de varios documentos impresos.",
        question: "Según los protocolos de atención inclusiva y accesibilidad vigentes en 2025, ¿cuál es la acción más adecuada que debe realizar el funcionario que lo atiende?",
        options: [
            "Sugerir al contribuyente que venga acompañado de una persona de confianza que pueda ayudarle con la revisión de los documentos.",
            "Ofrecer completar los documentos en nombre del contribuyente para agilizar el trámite, solicitando solo su firma al final del proceso.",
            "Activar el protocolo de atención inclusiva: presentarse, ofrecer acompañamiento, explicar verbalmente cada documento y su contenido, utilizar los formatos accesibles disponibles, verificar la comprensión en cada paso, y ofrecer asistencia para la firma manteniendo la autonomía del contribuyente.",
            "Derivar el caso a un funcionario especializado en atención a personas con discapacidad, para asegurar que reciba la atención adecuada."
        ],
        correctAnswer: 2,
        explanation: "Según los protocolos de atención inclusiva y accesibilidad establecidos en el Modelo Integrado de Planeación y Gestión (MIPG), la Política de Servicio al Ciudadano y la normativa sobre inclusión y accesibilidad vigentes en 2025, la acción más adecuada es activar el protocolo de atención inclusiva: presentarse, ofrecer acompañamiento, explicar verbalmente cada documento y su contenido, utilizar los formatos accesibles disponibles, verificar la comprensión en cada paso, y ofrecer asistencia para la firma manteniendo la autonomía del contribuyente. La Guía de Servicio Inclusivo para Entidades Públicas (DNP, 2024) establece que la atención a personas con discapacidad debe garantizar tanto el acceso a la información como el respeto a su autonomía y dignidad. Esta aproximación permite que el contribuyente reciba la atención necesaria para realizar su trámite de manera efectiva, respetando sus derechos y dignidad, y demostrando un compromiso real con la inclusión y la accesibilidad en el servicio público."
    },
    {
        id: "orientacion_usuario_005",
        category: "orientacion_usuario",
        difficulty: "alta",
        text: "La DIAN está implementando un nuevo canal digital para la atención de consultas tributarias que busca reducir los tiempos de respuesta y mejorar la experiencia de los contribuyentes. El director del proyecto debe establecer los indicadores para evaluar el éxito de esta iniciativa.",
        question: "Según las metodologías de medición de la experiencia ciudadana y calidad del servicio vigentes en 2025, ¿qué conjunto de indicadores sería más adecuado para evaluar integralmente este nuevo canal?",
        options: [
            "Indicadores de eficiencia operativa: volumen de consultas atendidas, tiempo promedio de respuesta, costo por consulta atendida y productividad de los funcionarios asignados al canal.",
            "Indicadores de uso: número de usuarios registrados, frecuencia de uso, tipos de consultas más comunes y distribución geográfica de los usuarios.",
            "Indicadores balanceados que incluyan: efectividad (precisión y completitud de las respuestas), eficiencia (tiempos de respuesta, disponibilidad del servicio), experiencia (satisfacción, esfuerzo percibido, tasa de resolución en primer contacto) y transformación (adopción digital, reducción de consultas presenciales, impacto en cumplimiento tributario).",
            "Indicadores de satisfacción: encuestas post-servicio, calificación de la atención recibida, número de quejas y sugerencias recibidas, y tasa de recomendación del servicio."
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con las metodologías de medición de la experiencia ciudadana y calidad del servicio establecidas en el Modelo Integrado de Planeación y Gestión (MIPG) y la Política de Servicio al Ciudadano vigentes en 2025, el conjunto de indicadores más adecuado para evaluar un nuevo canal de servicio es uno balanceado que incluya: efectividad (precisión y completitud de las respuestas), eficiencia (tiempos de respuesta, disponibilidad del servicio), experiencia (satisfacción, esfuerzo percibido, tasa de resolución en primer contacto) y transformación (adopción digital, reducción de consultas presenciales, impacto en cumplimiento tributario). La Guía de Medición de la Experiencia Ciudadana (DNP, 2024) establece que la evaluación integral de los servicios públicos debe considerar múltiples dimensiones que van más allá de la eficiencia operativa o la satisfacción. Esta aproximación permite comprender el desempeño del canal desde diferentes perspectivas complementarias, equilibrando la visión interna (eficiencia, efectividad) con la externa (experiencia, transformación), y proporciona una base sólida para la mejora continua del servicio."
    },
    {
        id: "orientacion_usuario_006",
        category: "orientacion_usuario",
        difficulty: "media",
        text: "Un funcionario de la DIAN identifica que un contribuyente ha cometido un error en su declaración tributaria que podría generarle sanciones significativas si no se corrige oportunamente.",
        question: "Según los principios de orientación al ciudadano y prevención del incumplimiento vigentes en 2025, ¿cuál es la acción más adecuada que debe realizar el funcionario?",
        options: [
            "Esperar a que se inicie el proceso formal de fiscalización para que el error sea detectado y notificado siguiendo los procedimientos establecidos.",
            "Informar internamente sobre el error para que se incluya al contribuyente en los programas de fiscalización prioritarios.",
            "Contactar proactivamente al contribuyente, informarle sobre el error detectado, explicarle las posibles consecuencias, orientarlo sobre el procedimiento de corrección voluntaria y los beneficios de realizarla oportunamente.",
            "Documentar el error identificado en el expediente del contribuyente para futuras referencias, sin tomar acciones inmediatas."
        ],
        correctAnswer: 2,
        explanation: "Según los principios de orientación al ciudadano y prevención del incumplimiento establecidos en el Modelo Integrado de Planeación y Gestión (MIPG) y la Política de Servicio al Ciudadano vigentes en 2025, la acción más adecuada es contactar proactivamente al contribuyente, informarle sobre el error detectado, explicarle las posibles consecuencias, orientarlo sobre el procedimiento de corrección voluntaria y los beneficios de realizarla oportunamente. La Estrategia de Cumplimiento Tributario Voluntario (DIAN, 2024) establece que la administración tributaria debe facilitar el cumplimiento voluntario mediante acciones preventivas y de orientación. Esta aproximación demuestra un enfoque de servicio que prioriza la prevención sobre la sanción, reconoce que muchos incumplimientos se deben a errores o desconocimiento más que a intención deliberada, y contribuye a construir una relación de confianza entre la administración tributaria y los contribuyentes, promoviendo una cultura de cumplimiento voluntario."
    },
    {
        id: "orientacion_usuario_007",
        category: "orientacion_usuario",
        difficulty: "baja",
        text: "Un contribuyente extranjero que no domina completamente el español solicita información sobre sus obligaciones tributarias en Colombia.",
        question: "Según los protocolos de atención a población extranjera y comunicación inclusiva vigentes en 2025, ¿cuál es la estrategia más adecuada para atender esta solicitud?",
        options: [
            "Sugerir al contribuyente que regrese acompañado de un traductor o intérprete para asegurar una comunicación efectiva.",
            "Proporcionar únicamente información escrita en español, recomendándole que la traduzca por su cuenta para asegurar la precisión técnica.",
            "Adaptar la comunicación utilizando lenguaje sencillo, apoyarse en recursos visuales, verificar constantemente la comprensión, ofrecer material informativo en otros idiomas si está disponible, y facilitar el contacto con servicios de asistencia especializada para extranjeros.",
            "Derivar inmediatamente el caso a un funcionario que domine el idioma del contribuyente, aunque no tenga conocimientos técnicos sobre el tema consultado."
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con los protocolos de atención a población extranjera y comunicación inclusiva establecidos en el Modelo Integrado de Planeación y Gestión (MIPG) y la Política de Servicio al Ciudadano vigentes en 2025, la estrategia más adecuada para atender a un contribuyente extranjero es adaptar la comunicación utilizando lenguaje sencillo, apoyarse en recursos visuales, verificar constantemente la comprensión, ofrecer material informativo en otros idiomas si está disponible, y facilitar el contacto con servicios de asistencia especializada para extranjeros. La Guía de Atención a Población Extranjera (DNP, 2023) establece que las entidades públicas deben implementar estrategias que faciliten la comunicación efectiva con personas que no dominan el idioma local. Esta aproximación reconoce la diversidad lingüística y cultural de los usuarios, adapta el servicio a sus necesidades específicas, y demuestra un compromiso con la inclusión y la accesibilidad en el servicio público."
    },
    {
        id: "orientacion_usuario_008",
        category: "orientacion_usuario",
        difficulty: "alta",
        text: "La DIAN está rediseñando su estrategia de servicio al contribuyente para mejorar la experiencia y facilitar el cumplimiento voluntario de las obligaciones tributarias, aduaneras y cambiarias.",
        question: "Según las tendencias en servicio público centrado en el ciudadano vigentes en 2025, ¿cuál debería ser el enfoque principal de esta nueva estrategia?",
        options: [
            "Maximizar la automatización de servicios para reducir la interacción humana y los costos operativos asociados a la atención presencial.",
            "Fortalecer los mecanismos de control y verificación para asegurar el cumplimiento estricto de todas las obligaciones por parte de los contribuyentes.",
            "Desarrollar un ecosistema de servicio omnicanal y personalizado: integrar canales físicos y digitales, diseñar jornadas del contribuyente según sus necesidades y contexto, implementar servicios proactivos basados en datos, y empoderar a los funcionarios de primera línea con herramientas y autonomía para resolver efectivamente las necesidades de los contribuyentes.",
            "Centralizar todos los servicios en plataformas digitales para unificar la experiencia y facilitar el seguimiento y control de las interacciones con los contribuyentes."
        ],
        correctAnswer: 2,
        explanation: "Según las tendencias en servicio público centrado en el ciudadano establecidas en el Modelo Integrado de Planeación y Gestión (MIPG), la Política de Servicio al Ciudadano y los estudios sobre experiencia del usuario en servicios públicos vigentes en 2025, el enfoque principal para una estrategia de servicio moderna debe ser desarrollar un ecosistema de servicio omnicanal y personalizado: integrar canales físicos y digitales, diseñar jornadas del contribuyente según sus necesidades y contexto, implementar servicios proactivos basados en datos, y empoderar a los funcionarios de primera línea con herramientas y autonomía para resolver efectivamente las necesidades de los contribuyentes. La Guía de Transformación del Servicio Público (DNP, 2024) establece que las estrategias de servicio más efectivas son aquellas que combinan la conveniencia de los canales digitales con la empatía y resolución que puede proporcionar la interacción humana, adaptándose a las diversas necesidades y preferencias de los ciudadanos. Esta aproximación reconoce la diversidad de los contribuyentes y sus contextos, aprovecha el potencial de la tecnología sin depender exclusivamente de ella, y coloca las necesidades reales de los usuarios en el centro del diseño de servicios, facilitando el cumplimiento voluntario al reducir las barreras y fricciones en la interacción con la administración tributaria."
    },
    {
        id: "orientacion_usuario_009",
        category: "orientacion_usuario",
        difficulty: "media",
        text: "Un funcionario de la DIAN recibe una queja de un contribuyente sobre la demora excesiva en la resolución de una solicitud de devolución de impuestos que ha superado los plazos establecidos en la normativa.",
        question: "Según los protocolos de gestión de quejas y orientación al ciudadano vigentes en 2025, ¿cuál es la respuesta más adecuada que debe dar el funcionario?",
        options: [
            "Explicar que los plazos establecidos son indicativos y pueden variar según la carga de trabajo de la entidad, solicitando paciencia al contribuyente.",
            "Recibir la queja formalmente y derivarla al área correspondiente, informando al contribuyente que recibirá respuesta en los plazos establecidos para la atención de quejas.",
            "Escuchar activamente al contribuyente, disculparse por la demora, verificar inmediatamente el estado de la solicitud, informar con transparencia sobre la situación actual y los pasos siguientes, establecer un compromiso concreto de resolución con fecha específica, proporcionar datos de contacto para seguimiento, y asegurar que se tomen medidas para evitar situaciones similares en el futuro.",
            "Sugerir al contribuyente que presente un derecho de petición formal para agilizar la resolución de su solicitud, ya que las quejas verbales tienen menor prioridad."
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con los protocolos de gestión de quejas y orientación al ciudadano establecidos en el Modelo Integrado de Planeación y Gestión (MIPG) y la Política de Servicio al Ciudadano vigentes en 2025, la respuesta más adecuada ante una queja por demora es escuchar activamente al contribuyente, disculparse por la demora, verificar inmediatamente el estado de la solicitud, informar con transparencia sobre la situación actual y los pasos siguientes, establecer un compromiso concreto de resolución con fecha específica, proporcionar datos de contacto para seguimiento, y asegurar que se tomen medidas para evitar situaciones similares en el futuro. La Guía de Gestión de Quejas y Reclamos (DNP, 2023) establece que las quejas deben verse como oportunidades de mejora y recuperación del servicio. Esta aproximación demuestra respeto por el tiempo y los derechos del ciudadano, proporciona una respuesta efectiva que va más allá de los procedimientos formales, y contribuye a restaurar la confianza en la entidad mediante acciones concretas y compromisos verificables."
    },
    {
        id: "orientacion_usuario_010",
        category: "orientacion_usuario",
        difficulty: "baja",
        text: "Un funcionario de la DIAN debe explicar a un pequeño empresario los requisitos para acogerse a un nuevo régimen tributario simplificado. El empresario tiene conocimientos básicos en temas tributarios.",
        question: "Según los principios de comunicación clara y orientación al ciudadano vigentes en 2025, ¿cuál es la mejor forma de proporcionar esta información?",
        options: [
            "Entregar el texto completo de la normativa que regula el nuevo régimen para que el empresario pueda consultarla en detalle.",
            "Explicar los conceptos técnicos con precisión utilizando la terminología tributaria adecuada para evitar imprecisiones.",
            "Adaptar la explicación al nivel de conocimiento del empresario, utilizando lenguaje sencillo y ejemplos prácticos relevantes para su actividad, verificar su comprensión mediante preguntas, proporcionar material de apoyo visual, y ofrecer canales de contacto para consultas adicionales.",
            "Recomendar al empresario que consulte con un contador especializado, ya que los temas tributarios son complejos y requieren asesoría profesional."
        ],
        correctAnswer: 2,
        explanation: "Según los principios de comunicación clara y orientación al ciudadano establecidos en el Modelo Integrado de Planeación y Gestión (MIPG) y la Política de Servicio al Ciudadano vigentes en 2025, la mejor forma de explicar información técnica es adaptar la explicación al nivel de conocimiento del empresario, utilizando lenguaje sencillo y ejemplos prácticos relevantes para su actividad, verificar su comprensión mediante preguntas, proporcionar material de apoyo visual, y ofrecer canales de contacto para consultas adicionales. La Guía de Lenguaje Claro para Servidores Públicos (DNP, 2023) establece que la comunicación efectiva debe adaptarse a las características y necesidades del receptor. Esta aproximación facilita la comprensión real de la información, empodera al ciudadano para tomar decisiones informadas, y demuestra un compromiso con la transparencia y la accesibilidad de la información pública, contribuyendo a facilitar el cumplimiento voluntario de las obligaciones tributarias."
    },
    {
        id: "orientacion_usuario_011",
        category: "orientacion_usuario",
        difficulty: "alta",
        text: "La DIAN está implementando un programa de educación tributaria dirigido a diferentes segmentos de contribuyentes. El equipo responsable debe definir la estrategia pedagógica más efectiva.",
        question: "Según las metodologías de educación ciudadana y formación de contribuyentes vigentes en 2025, ¿cuál es el enfoque más efectivo para este programa?",
        options: [
            "Desarrollar materiales informativos exhaustivos que cubran todos los aspectos normativos relevantes para cada segmento de contribuyentes.",
            "Realizar jornadas de capacitación masiva en las principales ciudades del país, maximizando la cobertura del programa.",
            "Implementar una estrategia de educación multimodal y segmentada: identificar necesidades específicas de cada segmento, desarrollar contenidos relevantes y contextualizados, utilizar metodologías experienciales y prácticas, combinar canales presenciales y digitales, y evaluar el impacto en términos de aprendizaje y cambio de comportamiento.",
            "Concentrarse en los segmentos de contribuyentes con mayor riesgo de incumplimiento, priorizando el enfoque correctivo sobre el preventivo."
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con las metodologías de educación ciudadana y formación de contribuyentes establecidas en el Modelo Integrado de Planeación y Gestión (MIPG) y los estudios sobre cultura tributaria vigentes en 2025, el enfoque más efectivo para un programa de educación tributaria es implementar una estrategia multimodal y segmentada: identificar necesidades específicas de cada segmento, desarrollar contenidos relevantes y contextualizados, utilizar metodologías experienciales y prácticas, combinar canales presenciales y digitales, y evaluar el impacto en términos de aprendizaje y cambio de comportamiento. La Guía de Educación Fiscal y Cultura Tributaria (DIAN, 2024) establece que los programas educativos más efectivos son aquellos que se adaptan a las características, contextos y necesidades específicas de los diferentes tipos de contribuyentes. Esta aproximación reconoce la diversidad de los contribuyentes y sus necesidades de aprendizaje, utiliza metodologías pedagógicas modernas que favorecen la aplicación práctica del conocimiento, aprovecha múltiples canales para maximizar el alcance y la accesibilidad, y mide el éxito no solo en términos de cobertura sino de impacto real en el comportamiento tributario."
    },
    {
        id: "orientacion_usuario_012",
        category: "orientacion_usuario",
        difficulty: "media",
        text: "Un funcionario de la DIAN debe notificar a un contribuyente sobre el inicio de un proceso de fiscalización que podría resultar en ajustes significativos a sus declaraciones tributarias.",
        question: "Según los principios de transparencia y orientación al ciudadano vigentes en 2025, ¿cuál es la forma más adecuada de realizar esta notificación?",
        options: [
            "Enviar la notificación formal con el mínimo detalle requerido legalmente, para no alertar al contribuyente sobre los aspectos específicos que serán fiscalizados.",
            "Contactar informalmente al contribuyente antes de la notificación formal para advertirle sobre el proceso y sugerirle que prepare su defensa.",
            "Realizar la notificación formal cumpliendo todos los requisitos legales, explicar claramente el alcance y motivos del proceso, informar sobre los derechos y garantías del contribuyente, detallar la documentación requerida con plazo razonable, y ofrecer canales para resolver dudas sobre el procedimiento.",
            "Notificar el inicio del proceso con la mayor discreción posible para minimizar la ansiedad del contribuyente, omitiendo detalles sobre posibles consecuencias hasta tener resultados preliminares."
        ],
        correctAnswer: 2,
        explanation: "Según los principios de transparencia y orientación al ciudadano establecidos en el Modelo Integrado de Planeación y Gestión (MIPG), la Política de Servicio al Ciudadano y el Estatuto Tributario vigentes en 2025, la forma más adecuada de notificar el inicio de un proceso de fiscalización es realizar la notificación formal cumpliendo todos los requisitos legales, explicar claramente el alcance y motivos del proceso, informar sobre los derechos y garantías del contribuyente, detallar la documentación requerida con plazo razonable, y ofrecer canales para resolver dudas sobre el procedimiento. La Guía de Procedimientos de Fiscalización con Enfoque de Servicio (DIAN, 2024) establece que los procesos de fiscalización deben equilibrar el rigor técnico con el respeto a los derechos de los contribuyentes. Esta aproximación cumple con los requisitos legales del proceso mientras demuestra respeto por el contribuyente al proporcionarle información completa y clara, facilita el cumplimiento de los requerimientos al establecer expectativas precisas, y contribuye a una relación más constructiva entre la administración tributaria y los contribuyentes, incluso en procesos potencialmente adversariales."
    },
    {
        id: "orientacion_usuario_013",
        category: "orientacion_usuario",
        difficulty: "baja",
        text: "Un contribuyente se comunica con la DIAN para solicitar información sobre cómo corregir un error en una declaración ya presentada.",
        question: "Según los protocolos de orientación al contribuyente y facilitación del cumplimiento voluntario vigentes en 2025, ¿cuál es la respuesta más adecuada que debe proporcionar el funcionario?",
        options: [
            "Indicar al contribuyente que consulte la normativa vigente sobre corrección de declaraciones en la página web de la DIAN.",
            "Informar que debe presentar una nueva declaración corregida y pagar las sanciones correspondientes por el error cometido.",
            "Escuchar atentamente para entender el tipo de error, explicar el procedimiento específico aplicable a su caso, detallar los pasos a seguir, plazos y requisitos, informar sobre posibles consecuencias y beneficios de la corrección voluntaria, y proporcionar los formatos o guías necesarios para facilitar el proceso.",
            "Transferir la llamada al área especializada en corrección de declaraciones para que le brinden asesoría técnica detallada."
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con los protocolos de orientación al contribuyente y facilitación del cumplimiento voluntario establecidos en el Modelo Integrado de Planeación y Gestión (MIPG) y la Política de Servicio al Ciudadano vigentes en 2025, la respuesta más adecuada es escuchar atentamente para entender el tipo de error, explicar el procedimiento específico aplicable a su caso, detallar los pasos a seguir, plazos y requisitos, informar sobre posibles consecuencias y beneficios de la corrección voluntaria, y proporcionar los formatos o guías necesarios para facilitar el proceso. La Estrategia de Cumplimiento Tributario Voluntario (DIAN, 2024) establece que la administración tributaria debe facilitar activamente la corrección de errores y el cumplimiento voluntario. Esta aproximación proporciona una orientación personalizada y completa que facilita la corrección del error, reconoce la disposición del contribuyente a cumplir correctamente con sus obligaciones, y demuestra un enfoque de servicio que prioriza la orientación y facilitación sobre la sanción."
    },
    {
        id: "orientacion_usuario_014",
        category: "orientacion_usuario",
        difficulty: "alta",
        text: "La DIAN está rediseñando sus oficinas de atención al contribuyente para mejorar la experiencia de servicio. El equipo responsable debe definir los principios de diseño para este proyecto.",
        question: "Según las metodologías de diseño de espacios de servicio público y experiencia ciudadana vigentes en 2025, ¿cuáles son los principios más importantes que deben guiar este rediseño?",
        options: [
            "Maximizar la capacidad de atención y la eficiencia operativa, optimizando el espacio para atender al mayor número posible de contribuyentes simultáneamente.",
            "Priorizar la seguridad y el control, con espacios claramente delimitados entre funcionarios y contribuyentes y sistemas de gestión de turnos que minimicen la discrecionalidad.",
            "Diseñar espacios centrados en la experiencia humana: accesibilidad universal, señalización intuitiva, zonificación según tipos de servicio, confort físico y emocional, privacidad cuando sea necesaria, integración de canales digitales como complemento, y flexibilidad para adaptarse a diferentes necesidades y flujos de demanda.",
            "Implementar un diseño minimalista y tecnológico que proyecte una imagen de modernidad y eficiencia de la entidad, minimizando la interacción presencial en favor de la autogestión digital."
        ],
        correctAnswer: 2,
        explanation: "Según las metodologías de diseño de espacios de servicio público y experiencia ciudadana establecidas en el Modelo Integrado de Planeación y Gestión (MIPG), la Política de Servicio al Ciudadano y los estudios sobre diseño centrado en el usuario vigentes en 2025, los principios más importantes para el rediseño de oficinas de atención son diseñar espacios centrados en la experiencia humana: accesibilidad universal, señalización intuitiva, zonificación según tipos de servicio, confort físico y emocional, privacidad cuando sea necesaria, integración de canales digitales como complemento, y flexibilidad para adaptarse a diferentes necesidades y flujos de demanda. La Guía de Diseño de Espacios de Servicio Público (DNP, 2024) establece que los espacios físicos de atención deben diseñarse considerando tanto aspectos funcionales como emocionales de la experiencia ciudadana. Esta aproximación reconoce que el entorno físico influye significativamente en la experiencia de servicio, considera la diversidad de necesidades y preferencias de los ciudadanos, integra apropiadamente los elementos tecnológicos sin depender exclusivamente de ellos, y demuestra un compromiso con la dignidad y el bienestar de todos los usuarios del servicio."
    },
    {
        id: "orientacion_usuario_015",
        category: "orientacion_usuario",
        difficulty: "media",
        text: "Un funcionario de la DIAN identifica que un grupo específico de pequeños contribuyentes está teniendo dificultades recurrentes para cumplir correctamente con una obligación tributaria particular, lo que está generando sanciones evitables.",
        question: "Según los principios de servicio proactivo y prevención del incumplimiento vigentes en 2025, ¿cuál es la acción más adecuada que debe proponer el funcionario?",
        options: [
            "Recomendar una modificación normativa para simplificar la obligación tributaria y facilitar su cumplimiento por parte de este grupo de contribuyentes.",
            "Sugerir un programa de fiscalización focalizado en este grupo para detectar y corregir los incumplimientos de manera sistemática.",
            "Diseñar e implementar una intervención preventiva específica: analizar las causas de las dificultades, desarrollar materiales educativos adaptados, realizar jornadas de capacitación focalizadas, crear herramientas de apoyo específicas, implementar alertas tempranas, y medir el impacto en términos de reducción de errores y sanciones.",
            "Proponer la creación de un canal de atención especializado para este grupo de contribuyentes, donde puedan recibir asesoría personalizada cuando la soliciten."
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con los principios de servicio proactivo y prevención del incumplimiento establecidos en el Modelo Integrado de Planeación y Gestión (MIPG) y la Estrategia de Cumplimiento Tributario Voluntario vigentes en 2025, la acción más adecuada ante dificultades recurrentes de un grupo específico es diseñar e implementar una intervención preventiva específica: analizar las causas de las dificultades, desarrollar materiales educativos adaptados, realizar jornadas de capacitación focalizadas, crear herramientas de apoyo específicas, implementar alertas tempranas, y medir el impacto en términos de reducción de errores y sanciones. La Guía de Intervenciones Conductuales para la Administración Tributaria (DIAN, 2024) establece que las estrategias preventivas focalizadas son más efectivas que las reactivas para abordar patrones de incumplimiento no intencional. Esta aproximación aborda el problema de manera integral y proactiva, reconoce que muchos incumplimientos se deben a barreras de comprensión o capacidad más que a intención deliberada, y demuestra un enfoque de servicio que busca facilitar el cumplimiento correcto antes que sancionar los errores, beneficiando tanto a los contribuyentes como a la administración tributaria."
    },
    {
        id: "orientacion_usuario_016",
        category: "orientacion_usuario",
        difficulty: "baja",
        text: "Un contribuyente se comunica con la DIAN manifestando confusión sobre cómo aplicar una reciente modificación normativa a su situación particular.",
        question: "Según los protocolos de orientación tributaria y servicio al ciudadano vigentes en 2025, ¿cuál es la respuesta más adecuada que debe proporcionar el funcionario?",
        options: [
            "Indicar al contribuyente que debe consultar con un contador o asesor tributario particular, ya que la DIAN no puede proporcionar asesoría personalizada.",
            "Proporcionar información general sobre la norma, evitando entrar en detalles específicos para no comprometer la posición institucional.",
            "Escuchar detalladamente la situación particular, explicar con claridad cómo aplica la norma a su caso específico, proporcionar ejemplos similares si es pertinente, verificar la comprensión, y ofrecer canales adicionales de consulta si surgen dudas posteriores.",
            "Transferir la consulta al área jurídica para que emita un concepto formal sobre la aplicación de la norma en ese caso particular."
        ],
        correctAnswer: 2,
        explanation: "Según los protocolos de orientación tributaria y servicio al ciudadano establecidos en el Modelo Integrado de Planeación y Gestión (MIPG) y la Política de Servicio al Ciudadano vigentes en 2025, la respuesta más adecuada ante una consulta sobre la aplicación de una norma es escuchar detalladamente la situación particular, explicar con claridad cómo aplica la norma a su caso específico, proporcionar ejemplos similares si es pertinente, verificar la comprensión, y ofrecer canales adicionales de consulta si surgen dudas posteriores. La Guía de Orientación Tributaria (DIAN, 2023) establece que los funcionarios deben proporcionar información clara, precisa y aplicada a la situación específica del contribuyente, dentro del ámbito de sus competencias. Esta aproximación facilita la comprensión y correcta aplicación de la normativa, reduce la incertidumbre del contribuyente, y demuestra un compromiso con la transparencia y la facilitación del cumplimiento voluntario, reconociendo que la complejidad normativa puede ser una barrera significativa para el cumplimiento correcto de las obligaciones tributarias."
    },
    {
        id: "orientacion_usuario_017",
        category: "orientacion_usuario",
        difficulty: "alta",
        text: "La DIAN está implementando un nuevo modelo de segmentación de contribuyentes para personalizar sus estrategias de servicio y control según las características y comportamientos de diferentes grupos.",
        question: "Según las metodologías de segmentación y servicio diferenciado vigentes en 2025, ¿cuál es el enfoque más efectivo para desarrollar este modelo?",
        options: [
            "Segmentar principalmente según el tamaño económico de los contribuyentes (grandes, medianos y pequeños), ya que este es el factor más determinante del riesgo fiscal.",
            "Utilizar únicamente variables objetivas y verificables como sector económico, volumen de operaciones y ubicación geográfica, evitando sesgos en la clasificación.",
            "Desarrollar un modelo multidimensional que combine variables estructurales (tamaño, sector, complejidad), comportamentales (historial de cumplimiento, respuesta a intervenciones previas), contextuales (madurez administrativa, acceso a asesoría) y actitudinales (disposición al cumplimiento), utilizando análisis avanzado de datos para identificar patrones y necesidades específicas de cada segmento.",
            "Segmentar según el riesgo de incumplimiento, concentrando los recursos de control en los segmentos de alto riesgo y simplificando las obligaciones para los de bajo riesgo."
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con las metodologías de segmentación y servicio diferenciado establecidas en el Modelo Integrado de Planeación y Gestión (MIPG) y los estudios sobre administración tributaria moderna vigentes en 2025, el enfoque más efectivo para la segmentación de contribuyentes es desarrollar un modelo multidimensional que combine variables estructurales (tamaño, sector, complejidad), comportamentales (historial de cumplimiento, respuesta a intervenciones previas), contextuales (madurez administrativa, acceso a asesoría) y actitudinales (disposición al cumplimiento), utilizando análisis avanzado de datos para identificar patrones y necesidades específicas de cada segmento. La Guía de Segmentación Estratégica de Contribuyentes (DIAN, 2024) establece que los modelos de segmentación más efectivos son aquellos que consideran múltiples dimensiones que influyen en el comportamiento tributario. Esta aproximación permite una comprensión más profunda y matizada de los diferentes grupos de contribuyentes, facilita el diseño de estrategias verdaderamente personalizadas que respondan a las necesidades y características específicas de cada segmento, y optimiza la asignación de recursos institucionales al diferenciar adecuadamente entre grupos que requieren diferentes tipos de intervención, demostrando una orientación al ciudadano que reconoce la diversidad de los contribuyentes y adapta el servicio a sus diferentes realidades."
    },
    {
        id: "orientacion_usuario_018",
        category: "orientacion_usuario",
        difficulty: "media",
        text: "Un funcionario de la DIAN debe comunicar a un grupo de contribuyentes sobre un nuevo requisito normativo que implica cambios significativos en la forma de presentar cierta información tributaria.",
        question: "Según los principios de comunicación efectiva y gestión del cambio vigentes en 2025, ¿cuál es la estrategia más adecuada para comunicar este cambio?",
        options: [
            "Enviar una circular informativa detallando los aspectos técnicos y jurídicos del nuevo requisito, con suficiente anticipación a su entrada en vigencia.",
            "Publicar la información en el sitio web de la entidad y en las redes sociales oficiales, maximizando el alcance de la comunicación.",
            "Implementar una estrategia de comunicación integral: identificar los diferentes segmentos afectados, desarrollar mensajes adaptados a cada audiencia, utilizar múltiples canales complementarios, explicar claramente el propósito y beneficios del cambio, proporcionar guías paso a paso y ejemplos prácticos, establecer canales de consulta específicos, y comunicar con suficiente anticipación para permitir la adaptación.",
            "Realizar una campaña informativa intensiva justo antes de la entrada en vigencia del requisito, para asegurar que esté fresco en la memoria de los contribuyentes cuando deban aplicarlo."
        ],
        correctAnswer: 2,
        explanation: "Según los principios de comunicación efectiva y gestión del cambio establecidos en el Modelo Integrado de Planeación y Gestión (MIPG) y la Política de Servicio al Ciudadano vigentes en 2025, la estrategia más adecuada para comunicar un cambio normativo es implementar una estrategia de comunicación integral: identificar los diferentes segmentos afectados, desarrollar mensajes adaptados a cada audiencia, utilizar múltiples canales complementarios, explicar claramente el propósito y beneficios del cambio, proporcionar guías paso a paso y ejemplos prácticos, establecer canales de consulta específicos, y comunicar con suficiente anticipación para permitir la adaptación. La Guía de Comunicación de Cambios Normativos (DIAN, 2023) establece que la efectividad de la comunicación de cambios regulatorios depende de su claridad, relevancia y oportunidad para los diferentes tipos de audiencias afectadas. Esta aproximación reconoce la diversidad de los contribuyentes y sus diferentes necesidades de información, facilita la comprensión no solo del qué sino del porqué y el cómo del cambio, proporciona el tiempo y los recursos necesarios para la adaptación, y demuestra un compromiso con la transparencia y la facilitación del cumplimiento voluntario."
    },
    {
        id: "orientacion_usuario_019",
        category: "orientacion_usuario",
        difficulty: "baja",
        text: "Un contribuyente adulto mayor con limitaciones para el uso de tecnologías digitales necesita realizar un trámite que la DIAN ha digitalizado completamente como parte de su estrategia de transformación digital.",
        question: "Según los protocolos de inclusión digital y atención a población vulnerable vigentes en 2025, ¿cuál es la acción más adecuada que debe realizar el funcionario que lo atiende?",
        options: [
            "Indicarle que debe adaptarse a los nuevos canales digitales, ofreciéndole material informativo sobre cómo usar la plataforma.",
            "Sugerirle que busque ayuda de un familiar o conocido que pueda realizar el trámite digital en su nombre.",
            "Brindarle asistencia personalizada: explicarle con paciencia el procedimiento, ofrecerle acompañamiento presencial para realizar el trámite en un punto digital asistido, proporcionarle material educativo adaptado, y verificar que el trámite se complete satisfactoriamente.",
            "Tramitar una excepción para que pueda realizar el procedimiento de manera presencial tradicional, evitándole el uso de herramientas digitales."
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con los protocolos de inclusión digital y atención a población vulnerable establecidos en el Modelo Integrado de Planeación y Gestión (MIPG), la Política de Servicio al Ciudadano y la Política de Gobierno Digital vigentes en 2025, la acción más adecuada es brindarle asistencia personalizada: explicarle con paciencia el procedimiento, ofrecerle acompañamiento presencial para realizar el trámite en un punto digital asistido, proporcionarle material educativo adaptado, y verificar que el trámite se complete satisfactoriamente. La Guía de Inclusión Digital en Servicios Públicos (MinTIC, 2024) establece que la transformación digital debe ir acompañada de estrategias de inclusión que eviten crear nuevas barreras de acceso. Esta aproximación equilibra la modernización de los servicios con la inclusión de todos los ciudadanos, proporciona el apoyo necesario para superar las brechas digitales sin excluir a nadie de los beneficios de la digitalización, y demuestra un compromiso con la equidad en el acceso a los servicios públicos, reconociendo que la orientación al ciudadano implica adaptarse a sus necesidades y capacidades específicas."
    },
    {
        id: "orientacion_usuario_020",
        category: "orientacion_usuario",
        difficulty: "alta",
        text: "La DIAN está diseñando su estrategia de experiencia del contribuyente para los próximos cinco años, buscando transformar fundamentalmente la relación entre la administración tributaria y los ciudadanos.",
        question: "Según las tendencias en experiencia ciudadana y administración tributaria moderna vigentes en 2025, ¿cuál debería ser el principio fundamental que guíe esta estrategia?",
        options: [
            "Digitalización total: migrar todos los servicios y puntos de contacto a canales digitales para maximizar la eficiencia y reducir costos operativos.",
            "Control efectivo: diseñar la experiencia para maximizar el cumplimiento y minimizar la evasión, utilizando la tecnología para aumentar la capacidad de detección y sanción.",
            "Confianza recíproca: construir una relación basada en la confianza mutua, donde la administración presume la buena fe del contribuyente y facilita activamente el cumplimiento, mientras el contribuyente percibe a la administración como un aliado justo y eficiente que genera valor público con los recursos recaudados.",
            "Simplicidad normativa: simplificar radicalmente el sistema tributario para reducir la complejidad que enfrentan los contribuyentes, aunque esto implique sacrificar precisión en la política fiscal."
        ],
        correctAnswer: 2,
        explanation: "Según las tendencias en experiencia ciudadana y administración tributaria moderna establecidas en el Modelo Integrado de Planeación y Gestión (MIPG), la Política de Servicio al Ciudadano y los estudios internacionales sobre administración tributaria vigentes en 2025, el principio fundamental que debe guiar una estrategia de experiencia del contribuyente es la confianza recíproca: construir una relación basada en la confianza mutua, donde la administración presume la buena fe del contribuyente y facilita activamente el cumplimiento, mientras el contribuyente percibe a la administración como un aliado justo y eficiente que genera valor público con los recursos recaudados. La Guía de Transformación de la Experiencia del Contribuyente (DIAN, 2024) establece que las administraciones tributarias más efectivas son aquellas que logran construir una relación de confianza con los ciudadanos. Esta aproximación reconoce que la mayoría de los contribuyentes desean cumplir correctamente si se les facilitan las condiciones para hacerlo, equilibra la facilitación con el control necesario, y establece las bases para una cultura tributaria sostenible basada en la corresponsabilidad y el valor compartido, demostrando una orientación al ciudadano que va más allá de la mera prestación de servicios para construir una verdadera relación de colaboración entre la administración tributaria y la sociedad."
    }
];