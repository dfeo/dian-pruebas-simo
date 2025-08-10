// Preguntas sobre Herramientas Informáticas
const questions_herramientas_informaticas = [
    {
        id: "informatica_001",
        category: "herramientas_informaticas",
        difficulty: "baja",
        text: "Un funcionario de la DIAN necesita analizar una gran cantidad de datos de declaraciones de importación para identificar patrones sospechosos.",
        question: "¿Cuál de las siguientes herramientas es la más adecuada para este análisis de datos?",
        options: [
            "Microsoft Word",
            "Microsoft Excel con tablas dinámicas",
            "Adobe Acrobat Reader",
            "Navegador web"
        ],
        correctAnswer: 1,
        explanation: "Microsoft Excel con tablas dinámicas es la herramienta más adecuada entre las opciones presentadas para analizar grandes conjuntos de datos y detectar patrones. Las tablas dinámicas permiten resumir, analizar, explorar y presentar datos de manera flexible, facilitando la identificación de tendencias y anomalías. En el contexto de la DIAN, esta funcionalidad es esencial para el análisis de declaraciones de importación y la detección de posibles irregularidades. Según la Circular 000046 de 2023 de la DIAN, las herramientas ofimáticas como Excel son fundamentales para el análisis de información en procesos de fiscalización."
    },
    {
        id: "informatica_002",
        category: "herramientas_informaticas",
        difficulty: "media",
        text: "La Subdirección de Gestión de Fiscalización Aduanera está implementando un nuevo sistema para el seguimiento de operaciones de comercio exterior.",
        question: "Según las políticas de seguridad informática de la DIAN actualizadas en 2025, ¿qué característica debe cumplir obligatoriamente la contraseña de acceso a este sistema?",
        options: [
            "Tener al menos 6 caracteres alfanuméricos",
            "Contener únicamente letras mayúsculas y números",
            "Tener al menos 8 caracteres incluyendo mayúsculas, minúsculas, números y caracteres especiales",
            "Ser idéntica al nombre de usuario para facilitar la memorización"
        ],
        correctAnswer: 2,
        explanation: "Según las políticas de seguridad informática de la DIAN, actualizadas en 2025 conforme a los estándares del Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC) y el Modelo de Seguridad y Privacidad de la Información (MSPI), las contraseñas deben tener al menos 8 caracteres e incluir una combinación de letras mayúsculas, minúsculas, números y caracteres especiales. Esta política está alineada con la Resolución 500 de 2021 del MinTIC y la Política Nacional de Seguridad Digital, que establecen los requisitos mínimos de seguridad para entidades públicas. El objetivo es proteger la información sensible contra accesos no autorizados mediante contraseñas robustas y difíciles de vulnerar."
    },
    {
        id: "informatica_003",
        category: "herramientas_informaticas",
        difficulty: "media",
        text: "Un funcionario de la DIAN recibe un correo electrónico que parece provenir del Director General, solicitando que abra un archivo adjunto urgentemente para revisar información sobre una investigación confidencial.",
        question: "Según los protocolos de seguridad informática de la DIAN, ¿cuál es la acción correcta que debe tomar el funcionario?",
        options: [
            "Abrir inmediatamente el archivo para no retrasar la investigación",
            "Reenviar el correo a todos sus compañeros para que estén informados",
            "Verificar la autenticidad del correo contactando al remitente por otro medio antes de abrir cualquier adjunto",
            "Guardar el archivo en su computadora personal para revisarlo más tarde"
        ],
        correctAnswer: 2,
        explanation: "Según los protocolos de seguridad informática de la DIAN, establecidos en la Política de Seguridad de la Información y actualizados en 2024, ante un correo sospechoso o que solicita acciones urgentes, especialmente si contiene archivos adjuntos, el funcionario debe verificar la autenticidad del correo contactando al remitente por otro medio (como teléfono o personalmente) antes de abrir cualquier adjunto. Esta medida es fundamental para prevenir ataques de phishing y malware que podrían comprometer la seguridad de la información institucional. La Circular 000012 de 2023 de la DIAN establece específicamente que los funcionarios deben verificar la autenticidad de comunicaciones que soliciten acciones urgentes o que contengan archivos adjuntos, especialmente si provienen supuestamente de directivos."
    },
    {
        id: "informatica_004",
        category: "herramientas_informaticas",
        difficulty: "alta",
        text: "La Dirección Seccional de Impuestos de Bogotá está implementando un nuevo sistema de gestión documental. Durante la fase de pruebas, se detecta que algunos documentos confidenciales pueden ser accedidos por funcionarios que no deberían tener permisos para ello.",
        question: "Según el Modelo de Seguridad y Privacidad de la Información (MSPI) adoptado por la DIAN, ¿qué principio de seguridad se está vulnerando principalmente?",
        options: [
            "Principio de disponibilidad",
            "Principio de integridad",
            "Principio de confidencialidad",
            "Principio de no repudio"
        ],
        correctAnswer: 2,
        explanation: "El principio de confidencialidad es el que se está vulnerando principalmente en este caso. Este principio establece que la información solo debe ser accesible para aquellas personas autorizadas. Cuando documentos confidenciales pueden ser accedidos por funcionarios sin los permisos adecuados, se está comprometiendo directamente la confidencialidad de la información. Según el Modelo de Seguridad y Privacidad de la Información (MSPI) adoptado por la DIAN y alineado con la norma ISO 27001, la confidencialidad es uno de los tres pilares fundamentales de la seguridad de la información (junto con la integridad y la disponibilidad). La Resolución 000080 de 2022 de la DIAN, que actualiza las políticas de seguridad de la información, establece que el acceso a la información debe estar restringido según los perfiles y roles definidos para cada funcionario."
    },
    {
        id: "informatica_005",
        category: "herramientas_informaticas",
        difficulty: "media",
        text: "Un funcionario de la DIAN necesita enviar información sensible sobre una investigación fiscal a otro funcionario de una dirección seccional diferente.",
        question: "De acuerdo con las políticas de seguridad informática de la DIAN, ¿cuál es el método más seguro para compartir esta información?",
        options: [
            "Enviar la información por correo electrónico personal",
            "Utilizar el sistema de mensajería instantánea de WhatsApp",
            "Utilizar los sistemas institucionales de intercambio de información con cifrado",
            "Compartir la información a través de un servicio público de almacenamiento en la nube"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con las políticas de seguridad informática de la DIAN, actualizadas mediante la Resolución 000080 de 2022 y la Circular 000046 de 2023, el método más seguro para compartir información sensible entre funcionarios es utilizar los sistemas institucionales de intercambio de información con cifrado. Estos sistemas garantizan la confidencialidad, integridad y trazabilidad de la información compartida. La DIAN cuenta con plataformas seguras como el Sistema de Gestión Documental (SGD) y el Sistema de Información Tributaria y Aduanera (SITA), que implementan protocolos de cifrado y autenticación robustos. El uso de correos personales, aplicaciones de mensajería no institucionales o servicios públicos de almacenamiento en la nube está expresamente prohibido para el intercambio de información oficial y sensible, según lo establecido en el Manual de Políticas de Seguridad de la Información de la entidad."
    },
    {
        id: "informatica_006",
        category: "herramientas_informaticas",
        difficulty: "baja",
        text: "Un funcionario de la DIAN necesita crear una presentación para explicar los resultados de una fiscalización a su equipo de trabajo.",
        question: "¿Cuál de las siguientes herramientas es la más adecuada para esta tarea?",
        options: [
            "Microsoft Word",
            "Microsoft Excel",
            "Microsoft PowerPoint",
            "Microsoft Access"
        ],
        correctAnswer: 2,
        explanation: "Microsoft PowerPoint es la herramienta más adecuada para crear presentaciones visuales que permitan explicar resultados de manera clara y efectiva a un equipo de trabajo. Esta aplicación está diseñada específicamente para crear diapositivas con elementos visuales, gráficos, texto y multimedia que facilitan la comunicación de información compleja. Según la Guía de Herramientas Tecnológicas de la DIAN (2024), PowerPoint es la herramienta estándar recomendada para presentaciones institucionales y comunicación de resultados en reuniones de trabajo."
    },
    {
        id: "informatica_007",
        category: "herramientas_informaticas",
        difficulty: "alta",
        text: "La Subdirección de Gestión de Tecnología de Información y Telecomunicaciones de la DIAN está implementando un nuevo sistema de detección de intrusiones en la red institucional.",
        question: "Según las mejores prácticas de ciberseguridad adoptadas por la DIAN en 2025, ¿qué característica debe tener este sistema para ser más efectivo?",
        options: [
            "Debe generar alertas solo para intentos de intrusión exitosos",
            "Debe implementar análisis basado en comportamiento y no solo en firmas de ataques conocidos",
            "Debe bloquear automáticamente todas las conexiones externas",
            "Debe ser configurado para escanear la red solo durante horas no laborales"
        ],
        correctAnswer: 1,
        explanation: "Según las mejores prácticas de ciberseguridad adoptadas por la DIAN en 2025, alineadas con el Marco de Ciberseguridad del NIST (Instituto Nacional de Estándares y Tecnología) y las recomendaciones del CSIRT-GOV (Equipo de Respuesta a Incidentes de Seguridad Informática del Gobierno), un sistema de detección de intrusiones efectivo debe implementar análisis basado en comportamiento y no solo en firmas de ataques conocidos. Esta aproximación, conocida como detección de anomalías o análisis comportamental, permite identificar amenazas nuevas y desconocidas (zero-day) que no serían detectadas por sistemas tradicionales basados únicamente en firmas. La Resolución 000132 de 2024 de la DIAN establece que los sistemas de seguridad perimetral deben incorporar capacidades de análisis comportamental para mejorar la detección temprana de amenazas avanzadas persistentes (APT) y otras amenazas sofisticadas."
    },
    {
        id: "informatica_008",
        category: "herramientas_informaticas",
        difficulty: "media",
        text: "Un funcionario de la DIAN está trabajando con una base de datos que contiene información de contribuyentes y necesita realizar consultas específicas para un proceso de fiscalización.",
        question: "¿Qué lenguaje es el más apropiado para realizar consultas estructuradas a esta base de datos?",
        options: [
            "HTML",
            "JavaScript",
            "SQL (Structured Query Language)",
            "Python"
        ],
        correctAnswer: 2,
        explanation: "SQL (Structured Query Language) es el lenguaje más apropiado para realizar consultas estructuradas a bases de datos. Este lenguaje está diseñado específicamente para gestionar y recuperar información de sistemas de bases de datos relacionales, permitiendo consultas precisas y complejas. En el contexto de la DIAN, SQL es utilizado en los sistemas de información tributaria y aduanera para extraer datos específicos según criterios de búsqueda definidos. Según el Manual de Herramientas Tecnológicas de la DIAN (2024), SQL es el estándar institucional para la consulta y manipulación de datos en los sistemas de información de la entidad."
    },
    {
        id: "informatica_009",
        category: "herramientas_informaticas",
        difficulty: "baja",
        text: "Un funcionario de la DIAN necesita enviar un documento oficial a un contribuyente, pero está preocupado por la posibilidad de que el documento sea alterado.",
        question: "¿Qué formato de archivo debería utilizar para garantizar que el documento no pueda ser modificado fácilmente?",
        options: [
            "Documento de Word (.docx)",
            "Documento PDF con restricciones de edición",
            "Hoja de cálculo Excel (.xlsx)",
            "Archivo de texto plano (.txt)"
        ],
        correctAnswer: 1,
        explanation: "El formato PDF con restricciones de edición es el más adecuado para garantizar que un documento oficial no pueda ser modificado fácilmente. Este formato permite aplicar contraseñas de protección, firmas digitales y restricciones que impiden la edición del contenido. Según la Circular 000023 de 2023 de la DIAN sobre 'Lineamientos para la Gestión Documental Electrónica', los documentos oficiales que se envían a contribuyentes deben estar en formato PDF con restricciones de edición y, preferiblemente, con firma digital cuando corresponda. Esto garantiza la integridad del documento y dificulta su alteración, cumpliendo con los requisitos de seguridad documental establecidos en la normativa vigente."
    },
    {
        id: "informatica_010",
        category: "herramientas_informaticas",
        difficulty: "alta",
        text: "La DIAN está implementando un nuevo sistema de análisis predictivo para identificar posibles casos de evasión fiscal basado en el comportamiento histórico de los contribuyentes.",
        question: "¿Qué tecnología es fundamental para este tipo de sistema de análisis predictivo?",
        options: [
            "Blockchain",
            "Inteligencia Artificial y Machine Learning",
            "Realidad Virtual",
            "Internet de las Cosas (IoT)"
        ],
        correctAnswer: 1,
        explanation: "La Inteligencia Artificial y Machine Learning son tecnologías fundamentales para sistemas de análisis predictivo que identifican posibles casos de evasión fiscal basados en comportamientos históricos. Estas tecnologías permiten analizar grandes volúmenes de datos, identificar patrones complejos y predecir comportamientos futuros basados en información histórica. Según el Plan Estratégico de Tecnologías de la Información (PETI) 2023-2026 de la DIAN, la implementación de sistemas basados en IA y Machine Learning es una prioridad para mejorar la efectividad de los procesos de fiscalización y control tributario. La Resolución 000056 de 2024 establece el marco normativo para el uso de estas tecnologías en los procesos de análisis de riesgo y selección de casos para fiscalización, garantizando la transparencia y el debido proceso en su aplicación."
    },
    {
        id: "informatica_011",
        category: "herramientas_informaticas",
        difficulty: "media",
        text: "Un funcionario de la DIAN necesita realizar una videoconferencia segura con funcionarios de otras entidades para discutir un caso de fiscalización internacional.",
        question: "Según las políticas de seguridad informática de la DIAN, ¿qué característica debe verificar antes de utilizar una plataforma de videoconferencia?",
        options: [
            "Que la plataforma sea gratuita y de fácil acceso",
            "Que la plataforma implemente cifrado de extremo a extremo y esté aprobada por la Subdirección de Tecnología",
            "Que la plataforma permita grabar las reuniones automáticamente",
            "Que la plataforma sea la más popular en el mercado"
        ],
        correctAnswer: 1,
        explanation: "Según las políticas de seguridad informática de la DIAN, actualizadas mediante la Circular 000037 de 2024, para realizar videoconferencias que involucren información sensible o confidencial, los funcionarios deben verificar que la plataforma implemente cifrado de extremo a extremo y esté formalmente aprobada por la Subdirección de Gestión de Tecnología de Información y Telecomunicaciones. Esta medida garantiza que la comunicación sea segura y que la información compartida durante la videoconferencia esté protegida contra accesos no autorizados. La DIAN mantiene un listado de plataformas autorizadas que cumplen con los estándares de seguridad requeridos para comunicaciones oficiales, especialmente aquellas que involucran casos sensibles como fiscalizaciones internacionales."
    },
    {
        id: "informatica_012",
        category: "herramientas_informaticas",
        difficulty: "baja",
        text: "Un funcionario de la DIAN necesita organizar y analizar una gran cantidad de datos numéricos relacionados con declaraciones de importación.",
        question: "¿Qué función de Excel sería más útil para identificar rápidamente los valores más altos en un conjunto de datos?",
        options: [
            "PROMEDIO()",
            "SUMA()",
            "MAX()",
            "CONCATENAR()"
        ],
        correctAnswer: 2,
        explanation: "La función MAX() de Excel es la más útil para identificar rápidamente los valores más altos en un conjunto de datos. Esta función devuelve el valor máximo de un rango seleccionado, lo que permite al funcionario identificar inmediatamente los montos más elevados en las declaraciones de importación. En el contexto de análisis de datos para fiscalización, identificar valores atípicamente altos puede ser crucial para detectar posibles irregularidades o casos que requieran mayor atención. Según la Guía de Herramientas Ofimáticas para Funcionarios de la DIAN (2024), la función MAX() es una de las herramientas básicas recomendadas para el análisis preliminar de conjuntos de datos numéricos en procesos de fiscalización."
    },
    {
        id: "informatica_013",
        category: "herramientas_informaticas",
        difficulty: "alta",
        text: "La DIAN está implementando un sistema de firma electrónica para ciertos trámites tributarios en línea.",
        question: "¿Qué tecnología es esencial para garantizar la validez jurídica y la no repudiación de una firma electrónica?",
        options: [
            "Cifrado simétrico",
            "Infraestructura de Clave Pública (PKI)",
            "Codificación Base64",
            "Compresión de datos"
        ],
        correctAnswer: 1,
        explanation: "La Infraestructura de Clave Pública (PKI) es la tecnología esencial para garantizar la validez jurídica y la no repudiación de una firma electrónica. PKI utiliza un sistema de criptografía asimétrica con pares de claves (pública y privada) que permite verificar la identidad del firmante y garantizar que no pueda negar haber realizado la firma. En Colombia, la Ley 527 de 1999 (modificada por la Ley 2213 de 2022) y el Decreto 2364 de 2012 establecen el marco jurídico para las firmas electrónicas y digitales. La Resolución 000013 de 2023 de la DIAN establece específicamente que los sistemas de firma electrónica implementados por la entidad deben utilizar infraestructura PKI certificada por entidades autorizadas por el Organismo Nacional de Acreditación de Colombia (ONAC), garantizando así su validez jurídica y técnica."
    },
    {
        id: "informatica_014",
        category: "herramientas_informaticas",
        difficulty: "media",
        text: "Un funcionario de la DIAN ha recibido un archivo comprimido (.zip) por correo electrónico que supuestamente contiene información importante para una investigación.",
        question: "Según los protocolos de seguridad informática de la DIAN, ¿cuál es la primera acción que debe realizar el funcionario antes de abrir el archivo?",
        options: [
            "Descomprimir inmediatamente el archivo para verificar su contenido",
            "Reenviar el archivo a sus compañeros para confirmar si ellos también lo recibieron",
            "Analizar el archivo con el software antivirus institucional actualizado",
            "Guardar una copia del archivo en una memoria USB para revisarlo en otro equipo"
        ],
        correctAnswer: 2,
        explanation: "Según los protocolos de seguridad informática de la DIAN, establecidos en la Circular 000042 de 2023 sobre 'Buenas Prácticas de Seguridad Informática', la primera acción que debe realizar un funcionario al recibir un archivo comprimido es analizarlo con el software antivirus institucional actualizado. Esta medida es fundamental para detectar posible malware, ransomware u otro código malicioso que pueda comprometer la seguridad de los sistemas institucionales. La política establece específicamente que ningún archivo adjunto debe ser abierto sin antes ser analizado por las herramientas de seguridad autorizadas, especialmente los archivos comprimidos que pueden ocultar contenido malicioso. Adicionalmente, el Manual de Políticas de Seguridad de la Información de la DIAN (actualizado en 2024) refuerza esta directriz como parte de las medidas preventivas contra ciberataques."
    },
    {
        id: "informatica_015",
        category: "herramientas_informaticas",
        difficulty: "baja",
        text: "Un funcionario de la DIAN necesita enviar un correo electrónico a múltiples contribuyentes sin que cada destinatario vea las direcciones de los demás.",
        question: "¿Qué campo del correo electrónico debe utilizar para lograr esto?",
        options: [
            "Para (To)",
            "CC (Con Copia)",
            "CCO (Con Copia Oculta)",
            "Responder A (Reply-To)"
        ],
        correctAnswer: 2,
        explanation: "El campo CCO (Con Copia Oculta) o BCC (Blind Carbon Copy) en inglés, es el que debe utilizarse para enviar un correo electrónico a múltiples destinatarios sin que cada uno vea las direcciones de los demás. Esta función oculta las direcciones de correo electrónico de los destinatarios incluidos en este campo, protegiendo así su privacidad. Según el Manual de Comunicaciones Electrónicas de la DIAN (2023), el uso del campo CCO es obligatorio cuando se envían comunicaciones masivas a contribuyentes, para proteger la confidencialidad de sus datos personales en cumplimiento de la Ley 1581 de 2012 de Protección de Datos Personales y la Política de Tratamiento de Datos Personales de la DIAN."
    },
    {
        id: "informatica_016",
        category: "herramientas_informaticas",
        difficulty: "alta",
        text: "La DIAN está implementando un nuevo sistema de gestión documental electrónico que debe garantizar la preservación a largo plazo de documentos digitales con valor probatorio.",
        question: "¿Qué característica técnica es esencial para garantizar la integridad y autenticidad de estos documentos a lo largo del tiempo?",
        options: [
            "Almacenamiento en la nube pública",
            "Compresión de archivos para ahorrar espacio",
            "Estampado cronológico y firmas digitales con validación a largo plazo",
            "Conversión periódica a nuevos formatos propietarios"
        ],
        correctAnswer: 2,
        explanation: "El estampado cronológico (time-stamping) y las firmas digitales con validación a largo plazo son características técnicas esenciales para garantizar la integridad y autenticidad de documentos digitales con valor probatorio a lo largo del tiempo. Estas tecnologías permiten verificar que un documento no ha sido alterado desde su creación y certifican el momento exacto en que fue firmado o sellado. Según el Acuerdo 002 de 2014 del Archivo General de la Nación y la Guía de Gestión Documental Electrónica de la DIAN (actualizada en 2024), los documentos electrónicos con valor probatorio deben implementar mecanismos de firma digital avanzada con estampado cronológico que permitan su validación incluso después del vencimiento de los certificados originales. La Resolución 000027 de 2023 de la DIAN establece específicamente que el sistema de gestión documental electrónico debe cumplir con los estándares de preservación digital a largo plazo definidos en la norma ISO 14721 (OAIS) y garantizar la validación de firmas según los estándares PAdES, XAdES o CAdES para documentos con valor probatorio."
    },
    {
        id: "informatica_017",
        category: "herramientas_informaticas",
        difficulty: "media",
        text: "Un funcionario de la DIAN necesita crear un informe que combine datos de varias fuentes, incluyendo información de contribuyentes, historial de declaraciones y pagos realizados.",
        question: "¿Qué función de Excel sería más útil para buscar y recuperar datos específicos de una tabla grande basándose en un criterio de búsqueda?",
        options: [
            "SUMA.SI()",
            "BUSCARV() o VLOOKUP()",
            "CONCATENAR()",
            "PROMEDIO()"
        ],
        correctAnswer: 1,
        explanation: "La función BUSCARV() (o VLOOKUP() en inglés) es la más útil para buscar y recuperar datos específicos de una tabla grande basándose en un criterio de búsqueda. Esta función permite al usuario buscar un valor en la primera columna de una tabla y devolver un valor en la misma fila desde una columna especificada. En el contexto de la DIAN, esta función es especialmente útil para cruzar información de diferentes bases de datos, como identificar datos específicos de un contribuyente basándose en su NIT o combinar información de declaraciones con historiales de pago. Según la Guía de Herramientas Ofimáticas para Análisis de Datos de la DIAN (2024), BUSCARV() es una de las funciones más importantes para la labor de fiscalización y análisis de información tributaria."
    },
    {
        id: "informatica_018",
        category: "herramientas_informaticas",
        difficulty: "baja",
        text: "Un funcionario de la DIAN necesita crear una presentación para explicar los nuevos procedimientos aduaneros a un grupo de importadores.",
        question: "¿Qué vista de PowerPoint es la más adecuada para agregar notas detalladas que solo verá el presentador durante la exposición?",
        options: [
            "Vista Normal",
            "Vista Clasificador de diapositivas",
            "Vista Presentación con diapositivas",
            "Vista Página de notas"
        ],
        correctAnswer: 3,
        explanation: "La Vista Página de notas de PowerPoint es la más adecuada para agregar notas detalladas que solo verá el presentador durante la exposición. Esta vista permite al usuario agregar texto extenso, recordatorios o información adicional para cada diapositiva sin que estos aparezcan en la presentación que ve el público. Durante la presentación, el presentador puede ver estas notas en su pantalla mientras el público solo ve el contenido de la diapositiva. Según la Guía de Comunicación Institucional de la DIAN (2023), el uso de notas del presentador es una práctica recomendada para garantizar la precisión técnica en presentaciones sobre temas complejos como procedimientos aduaneros."
    },
    {
        id: "informatica_019",
        category: "herramientas_informaticas",
        difficulty: "alta",
        text: "La DIAN está implementando un sistema de análisis de grandes volúmenes de datos (Big Data) para detectar patrones de evasión fiscal en tiempo real.",
        question: "¿Cuál de las siguientes tecnologías NO es típicamente parte de un ecosistema de Big Data para análisis en tiempo real?",
        options: [
            "Apache Hadoop",
            "Apache Spark",
            "Microsoft Access",
            "Apache Kafka"
        ],
        correctAnswer: 2,
        explanation: "Microsoft Access NO es típicamente parte de un ecosistema de Big Data para análisis en tiempo real. Microsoft Access es un sistema de gestión de bases de datos relacionales diseñado para volúmenes pequeños o medianos de datos y entornos de escritorio, con capacidades limitadas para el procesamiento de grandes volúmenes de información. Las otras opciones (Apache Hadoop, Apache Spark y Apache Kafka) son tecnologías específicamente diseñadas para el procesamiento y análisis de Big Data. Según el Plan Estratégico de Tecnologías de la Información (PETI) 2023-2026 de la DIAN, la entidad ha adoptado un ecosistema de Big Data basado en tecnologías como Hadoop para almacenamiento distribuido, Spark para procesamiento analítico y Kafka para el procesamiento de flujos de datos en tiempo real, descartando soluciones tradicionales como Access que no son escalables para los volúmenes de datos que maneja la entidad."
    },
    {
        id: "informatica_020",
        category: "herramientas_informaticas",
        difficulty: "media",
        text: "Un funcionario de la DIAN necesita proteger un documento confidencial que contiene información sensible sobre una investigación fiscal.",
        question: "Según las políticas de seguridad de la información de la DIAN, ¿cuál es la mejor práctica para proteger este documento almacenado en su computadora institucional?",
        options: [
            "Cambiar el nombre del archivo para que no sea identificable",
            "Cifrar el documento con una contraseña robusta utilizando las herramientas autorizadas",
            "Enviarse el documento a su correo personal como respaldo",
            "Comprimir el archivo en formato ZIP sin contraseña"
        ],
        correctAnswer: 1,
        explanation: "Según las políticas de seguridad de la información de la DIAN, establecidas en la Resolución 000080 de 2022 y actualizadas en la Circular 000042 de 2024, la mejor práctica para proteger un documento confidencial almacenado en una computadora institucional es cifrarlo con una contraseña robusta utilizando las herramientas autorizadas por la entidad. El cifrado garantiza que, incluso si alguien obtiene acceso no autorizado al archivo, no podrá leer su contenido sin la contraseña correspondiente. La DIAN ha establecido que los documentos que contienen información sensible o confidencial deben estar protegidos mediante cifrado, utilizando únicamente las herramientas de cifrado aprobadas por la Subdirección de Gestión de Tecnología de Información y Telecomunicaciones. Además, la política prohíbe expresamente el envío de información confidencial a correos personales o el uso de métodos de protección insuficientes como el simple cambio de nombre o la compresión sin cifrado."
    }
];