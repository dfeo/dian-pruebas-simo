// Preguntas sobre Procedimiento Administrativo (Ley 1437 de 2011 - CPACA)
const questions_procedimiento_administrativo = [
  {
    id: "procedimiento_administrativo_001",
    category: "procedimiento_administrativo",
    difficulty: "baja",
    text: "Una dependencia de la DIAN recibe una petición en la que un ciudadano solicita copia simple de un acto administrativo de carácter particular que le fue notificado hace dos años y extravió.",
    question: "Según el CPACA (Ley 1437 de 2011) vigente en 2025, ¿cuál es el término general para resolver peticiones de documentos y copias y la consecuencia de no responder en el término?",
    options: [
      "15 días hábiles; el silencio genera archivo definitivo",
      "10 días hábiles; el silencio genera aceptación tácita",
      "30 días calendario; el silencio genera sanción disciplinaria automática",
      "10 días hábiles; el silencio faculta acción de tutela o queja disciplinaria"
    ],
    correctAnswer: 3,
    explanation: "El artículo 14 del CPACA establece términos: 15 días para peticiones generales, 10 días hábiles para peticiones de documentos y copias. La falta de respuesta no produce aceptación tácita (excepto reglas especiales de información pública), pero habilita al solicitante a interponer queja disciplinaria, acción de cumplimiento o tutela por vulneración del derecho de petición."
  },
  {
    id: "procedimiento_administrativo_002",
    category: "procedimiento_administrativo",
    difficulty: "media",
    text: "La DIAN pretende notificar un acto que impone sanción tributaria. El contribuyente cambió de domicilio sin actualizar el RUT.",
    question: "¿Qué forma de notificación procede y qué efecto tiene la falta de actualización del domicilio?",
    options: [
      "Debe intentarse únicamente notificación personal; si no comparece, se archiva",
      "Procede notificación por correo al domicilio registrado; la omisión de actualización hace eficaz la notificación enviada al último registrado",
      "Debe hacerse emplazamiento y luego edicto sin envío postal",
      "Deben publicarse avisos en prensa nacional obligatoriamente"
    ],
    correctAnswer: 1,
    explanation: "Conforme artículos 56 y 67 CPACA y normas especiales tributarias, la notificación por correo al domicilio registrado es válida. La falta de actualización en el RUT no invalida la notificación remitida al último domicilio informado; el riesgo recae en el administrado."
  },
  {
    id: "procedimiento_administrativo_003",
    category: "procedimiento_administrativo",
    difficulty: "media",
    text: "Un contribuyente interpone recurso de reconsideración contra una liquidación oficial y aporta nuevas pruebas no solicitadas previamente.",
    question: "Según el CPACA y Estatuto Tributario, ¿qué sucede con las nuevas pruebas allegadas en la vía gubernativa?",
    options: [
      "No pueden valorarse porque solo se admiten pruebas del expediente inicial",
      "Pueden decretarse y valorarse si son conducentes y se garantiza contradicción",
      "Solo se aceptan si se presentan dentro de los 10 días siguientes a la notificación",
      "Se requiere autorización judicial previa para agregarlas"
    ],
    correctAnswer: 1,
    explanation: "El CPACA (arts. 40 y 41) y régimen tributario permiten decretar y valorar pruebas en sede de recurso mientras no se vulnere contradicción. La autoridad puede inadmitir las manifiestamente inconducentes."
  },
  {
    id: "procedimiento_administrativo_004",
    category: "procedimiento_administrativo",
    difficulty: "baja",
    text: "Un funcionario debe decidir sobre la procedencia de una recusación formulada por un contribuyente contra quien adelanta la actuación por alegado interés particular.",
    question: "¿Cuál es el efecto inmediato de la recusación debidamente presentada?",
    options: [
      "Suspende la actuación hasta decidirse la recusación",
      "Invalida automáticamente todas las actuaciones anteriores",
      "Impone cambio inmediato de funcionario sin decisión",
      "No tiene efecto procesal alguno"
    ],
    correctAnswer: 0,
    explanation: "El artículo 12 CPACA contempla impedimentos y recusaciones; presentada la recusación, se decide y mientras tanto se suspenden términos respecto del asunto afectado para salvaguardar imparcialidad."
  },
  {
    id: "procedimiento_administrativo_005",
    category: "procedimiento_administrativo",
    difficulty: "media",
    text: "La DIAN advierte error aritmético claro en un acto particular ejecutoriado hace 4 meses.",
    question: "¿Qué figura procede para enmendarlo?",
    options: [
      "Revocatoria directa por razones de legalidad",
      "Corrección de errores formales o aritméticos sin revocatoria (acto aclaratorio)",
      "Nulidad absoluta de pleno derecho",
      "Recurso extraordinario de revisión"
    ],
    correctAnswer: 1,
    explanation: "El CPACA permite corrección de errores puramente aritméticos o de digitación vía acto aclaratorio sin acudir a revocatoria directa (art. 45 interpretación analógica). La revocatoria se reserva para causas sustanciales."
  },
  {
    id: "procedimiento_administrativo_006",
    category: "procedimiento_administrativo",
    difficulty: "alta",
    text: "Se detecta que un acto sancionatorio firme vulneró abiertamente jurisprudencia unificada posterior del Consejo de Estado que precisó el alcance de la norma aplicada.",
    question: "¿Cuál mecanismo excepcional procede para revisar el acto firme?",
    options: [
      "Recurso extraordinario de revisión por causal sobrevenir prueba",
      "Revocatoria directa por motivos de legalidad con consentimiento del particular cuando crea derechos subjetivos",
      "Nulidad simple automática del acto",
      "Acción de cumplimiento"
    ],
    correctAnswer: 1,
    explanation: "La revocatoria directa (arts. 93-94 CPACA) procede por ilegalidad; si el acto creó situación jurídica particular favorable, se requiere consentimiento del titular salvo causales taxativas (silencio administrativo positivo ilegal, dolo, etc.). Cambio jurisprudencial por sí solo exige consentimiento."
  },
  {
    id: "procedimiento_administrativo_007",
    category: "procedimiento_administrativo",
    difficulty: "media",
    text: "Un contribuyente alega silencio administrativo positivo frente a petición de devolución presentada hace 6 meses sin respuesta ni requerimientos.",
    question: "¿Qué debe verificar la autoridad antes de reconocer el silencio positivo?",
    options: [
      "Solo que hayan pasado más de 30 días",
      "Que se cumplan requisitos y no exista causal legal de excepción al silencio positivo",
      "Únicamente que el peticionario haya reiterado la solicitud",
      "Que el monto solicitado sea inferior a 1000 UVT"
    ],
    correctAnswer: 1,
    explanation: "El CPACA prevé silencio positivo en supuestos específicos; se debe verificar cumplimiento de requisitos, inexistencia de causales exceptivas (información incompleta, interés público, etc.). En devoluciones tributarias aplican reglas especiales: se causa silencio solo si la norma expresa lo prevé."
  },
  {
    id: "procedimiento_administrativo_008",
    category: "procedimiento_administrativo",
    difficulty: "baja",
    text: "Se va a practicar notificación por aviso electrónico de un acto que no logró notificarse personalmente.",
    question: "¿Qué exige el CPACA para que la notificación por aviso sea válida?",
    options: [
      "Publicación indefinida en la web institucional",
      "Publicación mínima de 5 días hábiles y constancia del envío al correo registrado",
      "Publicación física en cartelera por 30 días",
      "Firma digital del interesado en el aviso"
    ],
    correctAnswer: 1,
    explanation: "El artículo 69 CPACA regula notificación por aviso: se fija/publica por término no inferior a 5 días y se envía copia al correo o dirección suministrada; se entiende surtida al retirar el aviso o al finalizar el término."
  },
  {
    id: "procedimiento_administrativo_009",
    category: "procedimiento_administrativo",
    difficulty: "alta",
    text: "Un acto particular favorable fue obtenido mediando documentación falsificada detectada posteriormente por la entidad.",
    question: "¿Qué mecanismo procede y requiere o no consentimiento?",
    options: [
      "Revocatoria directa sin consentimiento por causal de fraude",
      "Revocatoria directa con consentimiento obligatorio",
      "Solo acción de nulidad simple ante la jurisdicción",
      "Caducidad del acto sin trámite"
    ],
    correctAnswer: 0,
    explanation: "El artículo 94 CPACA permite revocar directamente actos favorables sin consentimiento cuando se obtuvieron por medios ilegales (dolo, falsedad, soborno). Detectado fraude, la administración puede revocar unilateralmente."
  },
  {
    id: "procedimiento_administrativo_010",
    category: "procedimiento_administrativo",
    difficulty: "media",
    text: "Un contribuyente interpone recurso de reposición y en subsidio apelación contra resolución sancionatoria dentro del término legal.",
    question: "¿Cómo se tramitan los recursos concurrentes según CPACA?",
    options: [
      "Se decide primero la apelación y luego la reposición",
      "La reposición se debe desistir para que proceda la apelación",
      "Se decide reposición; si se confirma total o parcialmente, se remite la apelación al superior",
      "La administración puede escoger libremente cuál resolver"
    ],
    correctAnswer: 2,
    explanation: "El artículo 76 CPACA: interpuestos reposición y en subsidio apelación, se resuelve primero la reposición por el mismo funcionario; si la decisión es confirmatoria total o parcial, se concede y remite la apelación al superior jerárquico."
  }
];
