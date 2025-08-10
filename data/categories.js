// Categorías de preguntas para el examen DIAN
const categories = [
    {
        id: "etica",
        name: "Comportamiento Ético",
        description: "Preguntas relacionadas con la ética en el servicio público, integridad y valores institucionales."
    },
    {
        id: "comunicacion",
        name: "Comunicación Efectiva",
        description: "Preguntas sobre habilidades de comunicación, redacción y expresión en el contexto laboral."
    },
    {
        id: "trabajo_equipo",
        name: "Trabajo en Equipo",
        description: "Preguntas sobre colaboración, coordinación y resolución de conflictos en equipos de trabajo."
    },
    {
        id: "adaptabilidad",
        name: "Adaptabilidad",
        description: "Preguntas relacionadas con la capacidad de adaptación al cambio y flexibilidad laboral."
    },
    {
        id: "orientacion_logro",
        name: "Orientación al Logro",
        description: "Preguntas sobre cumplimiento de objetivos, metas y resultados en el ámbito laboral."
    },
    {
        id: "orientacion_usuario",
        name: "Orientación al Usuario y Ciudadano",
        description: "Preguntas sobre servicio al ciudadano, atención al contribuyente y satisfacción del usuario."
    },
    {
        id: "evasion_elusion",
        name: "Evasión, Elusión y Contrabando",
        description: "Preguntas sobre conceptos, detección y control de evasión, elusión fiscal y contrabando."
    },
    {
        id: "transparencia",
        name: "Ley de Transparencia",
        description: "Preguntas sobre Ley 1712 de 2014, acceso a la información pública y gestión de la transparencia."
    },
    {
        id: "herramientas_informaticas",
        name: "Herramientas Informáticas",
        description: "Preguntas sobre uso de tecnologías, sistemas de información y herramientas digitales."
    },
    {
        id: "gestion_documental",
        name: "Gestión Documental",
        description: "Preguntas sobre manejo, archivo y control de documentos en la administración pública."
    },
    {
        id: "planeacion_gestion",
        name: "Modelo Integrado de Planeación y Gestión",
        description: "Preguntas sobre MIPG, planeación estratégica y gestión institucional."
    },
    {
        id: "codigos_gobierno",
        name: "Código de Buen Gobierno y Código de Integridad",
        description: "Preguntas sobre normativas internas de conducta, valores y principios institucionales."
    },
    {
        id: "funcion_publica",
        name: "Principios de la Función Pública",
        description: "Preguntas sobre principios constitucionales y legales de la función pública."
    },
    {
        id: "pqrsf",
        name: "Sistema PQRSF",
        description: "Preguntas sobre peticiones, quejas, reclamos, sugerencias y felicitaciones."
    },
    {
        id: "servicio_ciudadano",
        name: "Políticas de Servicio al Ciudadano",
        description: "Preguntas sobre políticas, protocolos y estándares de servicio al ciudadano."
    },
    {
        id: "constitucion",
        name: "Constitución Política",
        description: "Preguntas sobre derechos fundamentales, principios y estructura del Estado."
    },
    {
        id: "sistema_tributario",
        name: "Sistema Tributario",
        description: "Preguntas sobre generalidades del sistema tributario colombiano."
    },
    {
        id: "sistema_aduanero",
        name: "Sistema Aduanero",
        description: "Preguntas sobre generalidades del sistema aduanero colombiano."
    },
    {
        id: "sistema_cambiario",
        name: "Sistema Cambiario",
        description: "Preguntas sobre generalidades del sistema cambiario colombiano."
    },
    {
        id: "fiscalizacion",
        name: "Fiscalización y Liquidación",
        description: "Preguntas sobre procesos de fiscalización y liquidación tributaria, aduanera y cambiaria."
    },
    {
        id: "determinacion_control",
        name: "Determinación y Control Tributario",
        description: "Preguntas específicas sobre determinación y control de obligaciones tributarias."
    },
    {
        id: "regimen_cambiario",
        name: "Régimen Cambiario",
        description: "Preguntas específicas sobre operaciones de cambio de competencia de la DIAN."
    },
    {
        id: "fiscalizacion_internacional",
        name: "Fiscalización Internacional",
        description: "Preguntas sobre fiscalización de operaciones internacionales y precios de transferencia."
    },
    {
        id: "fiscalizacion_aduanera",
        name: "Fiscalización Aduanera",
        description: "Preguntas específicas sobre fiscalización de operaciones aduaneras."
    }
    ,
    {
        id: "procedimiento_administrativo",
        name: "Procedimiento Administrativo (Ley 1437)",
        description: "Preguntas sobre CPACA: actuaciones, notificaciones, recursos y debido proceso administrativo."
    }
];