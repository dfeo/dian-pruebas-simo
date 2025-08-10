// Preguntas sobre Comportamiento Ético
const questions_etica = [
    {
        id: "etica_001",
        category: "etica",
        difficulty: "media",
        text: "Un funcionario de la DIAN recibe información confidencial sobre una posible evasión fiscal por parte de una empresa importante. El gerente de la empresa, que es amigo personal del funcionario, le solicita información sobre la investigación.",
        question: "Según el Código de Integridad de la DIAN vigente en 2025, ¿cuál debe ser la actuación correcta del funcionario?",
        options: [
            "Puede compartir información general sobre el caso, siempre que no revele detalles específicos de la investigación.",
            "Debe negarse a proporcionar cualquier información y reportar el intento de obtener información confidencial.",
            "Puede advertir a su amigo sobre la investigación para que corrija las posibles irregularidades antes de que avance el proceso.",
            "Debe consultar con su superior inmediato si puede compartir cierta información con el gerente de la empresa."
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el Código de Integridad de la DIAN y la Ley 2013 de 2019 (actualizada en 2025), los servidores públicos deben mantener absoluta reserva sobre la información confidencial a la que tienen acceso en el ejercicio de sus funciones. El funcionario debe negarse a proporcionar cualquier información sobre la investigación y debe reportar el intento de obtener información confidencial, independientemente de su relación personal con el solicitante. El artículo 34 del Código Disciplinario Único (Ley 1952 de 2019, modificada por la Ley 2094 de 2021) establece como deber de los servidores públicos 'guardar la reserva de la información clasificada obtenida en el ejercicio de sus funciones'."
    },
    {
        id: "etica_002",
        category: "etica",
        difficulty: "alta",
        text: "Durante una auditoría fiscal a una empresa, un funcionario de la DIAN descubre que el contador de la empresa ha cometido errores significativos en las declaraciones tributarias que podrían resultar en sanciones importantes. El contador ofrece al funcionario un pago en efectivo para que pase por alto estos errores en su informe.",
        question: "Según la normativa anticorrupción y el Código de Integridad vigentes en 2025, ¿cuál es la conducta correcta que debe seguir el funcionario?",
        options: [
            "Aceptar el pago pero reducir el alcance de los hallazgos en el informe para minimizar las sanciones.",
            "Rechazar el pago y continuar con la auditoría normalmente, sin reportar el intento de soborno.",
            "Rechazar el pago, documentar completamente los hallazgos y reportar inmediatamente el intento de soborno a las autoridades competentes.",
            "Negociar con el contador para que corrija los errores a cambio de no reportar el intento de soborno."
        ],
        correctAnswer: 2,
        explanation: "Según la Ley 2195 de 2022 (Ley Anticorrupción) y el Código de Integridad de la DIAN vigentes en 2025, el funcionario debe rechazar cualquier ofrecimiento de beneficios indebidos, documentar completamente los hallazgos de la auditoría y reportar inmediatamente el intento de soborno a las autoridades competentes. El artículo 67 del Código de Procedimiento Penal establece la obligación de denunciar los delitos de los que se tenga conocimiento en ejercicio de funciones públicas. Además, el Estatuto Anticorrupción (Ley 1474 de 2011) y sus actualizaciones establecen sanciones severas tanto para quien ofrece como para quien recibe sobornos en el ejercicio de funciones públicas."
    },
    {
        id: "etica_003",
        category: "etica",
        difficulty: "media",
        text: "Un funcionario de la DIAN está revisando una solicitud de devolución de impuestos presentada por una empresa donde trabaja su hermano como gerente financiero. La solicitud cumple con todos los requisitos legales.",
        question: "De acuerdo con el régimen de conflicto de intereses vigente en 2025, ¿cuál es la actuación correcta del funcionario?",
        options: [
            "Puede tramitar la solicitud normalmente, ya que cumple con todos los requisitos legales.",
            "Debe declararse impedido y solicitar que otro funcionario tramite la solicitud.",
            "Puede tramitar la solicitud, pero debe informar a su superior sobre la relación familiar.",
            "Debe rechazar la solicitud y pedir a la empresa que la presente nuevamente para que sea asignada a otro funcionario."
        ],
        correctAnswer: 1,
        explanation: "Según la Ley 2013 de 2019 y el Código de Integridad de la DIAN vigentes en 2025, el funcionario debe declararse impedido cuando exista un conflicto de intereses, como en este caso donde existe un vínculo familiar directo con un alto directivo de la empresa solicitante. El artículo 11 de la Ley 1437 de 2011 (CPACA) establece como causal de impedimento tener parentesco hasta el cuarto grado de consanguinidad con los interesados en un asunto. El funcionario debe informar por escrito a su superior jerárquico sobre la situación y solicitar que otro funcionario tramite la solicitud para garantizar la imparcialidad y transparencia del proceso."
    },
    {
        id: "etica_004",
        category: "etica",
        difficulty: "baja",
        text: "Un funcionario de la DIAN recibe como regalo de Navidad una canasta con productos gourmet valorada aproximadamente en $500.000 por parte de un contribuyente que recientemente fue objeto de una auditoría fiscal.",
        question: "Según el Código de Integridad y las normas anticorrupción vigentes en 2025, ¿qué debe hacer el funcionario con este regalo?",
        options: [
            "Puede aceptarlo si la auditoría ya concluyó y no hay procesos pendientes con ese contribuyente.",
            "Debe rechazarlo cortésmente y explicar las restricciones éticas que le impiden aceptar regalos de contribuyentes.",
            "Puede aceptarlo si lo reporta a su superior jerárquico y lo registra en la declaración de bienes y rentas.",
            "Puede aceptarlo si lo comparte con todos los compañeros de su dependencia."
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el Código de Integridad de la DIAN y la Ley 2195 de 2022 (Ley Anticorrupción) vigentes en 2025, los funcionarios públicos no deben aceptar regalos, invitaciones, dádivas o beneficios de cualquier tipo por parte de contribuyentes o personas que tengan interés en las actuaciones de la entidad. El artículo 35 de la Ley 1952 de 2019 (Código Disciplinario Único) prohíbe a los servidores públicos 'recibir, solicitar o aceptar, directamente o por interpuesta persona, gratificaciones, dádivas o recompensas en razón del ejercicio de sus funciones'. El funcionario debe rechazar cortésmente el regalo y explicar las restricciones éticas que le impiden aceptarlo."
    },
    {
        id: "etica_005",
        category: "etica",
        difficulty: "alta",
        text: "Un funcionario de la DIAN tiene acceso a información confidencial sobre una próxima modificación en la normativa aduanera que podría afectar significativamente a ciertas empresas importadoras. Su cónyuge trabaja como consultor independiente para varias de estas empresas.",
        question: "Según las normas sobre conflicto de intereses y el Código de Integridad vigentes en 2025, ¿cuál es la conducta correcta que debe seguir el funcionario?",
        options: [
            "Puede compartir la información con su cónyuge siempre que le advierta sobre su carácter confidencial.",
            "Debe mantener absoluta reserva sobre la información y notificar a su superior sobre el potencial conflicto de intereses.",
            "Puede compartir información general sin detalles específicos para que su cónyuge pueda preparar a sus clientes.",
            "No existe conflicto de intereses si el funcionario no recibe beneficio económico directo por compartir la información."
        ],
        correctAnswer: 1,
        explanation: "Según la Ley 2013 de 2019 y el Código de Integridad de la DIAN vigentes en 2025, el funcionario debe mantener absoluta reserva sobre la información confidencial a la que tiene acceso y debe notificar a su superior sobre el potencial conflicto de intereses derivado de la actividad profesional de su cónyuge. El artículo 40 de la Ley 1952 de 2019 (Código Disciplinario Único) establece como falta gravísima 'utilizar indebidamente información privilegiada'. Además, el artículo 11 de la Ley 1437 de 2011 (CPACA) establece como causal de impedimento tener interés particular y directo en la regulación, gestión, control o decisión del asunto, o tenerlo su cónyuge o alguno de sus parientes."
    },
    {
        id: "etica_006",
        category: "etica",
        difficulty: "media",
        text: "Un funcionario de la DIAN descubre que un compañero de trabajo está filtrando información confidencial sobre investigaciones en curso a un estudio contable externo.",
        question: "De acuerdo con el Código de Integridad y los procedimientos internos vigentes en 2025, ¿cuál es la acción correcta que debe tomar el funcionario?",
        options: [
            "Hablar directamente con el compañero para advertirle sobre las consecuencias de sus acciones.",
            "Ignorar la situación, ya que no es su responsabilidad directa supervisar a sus compañeros.",
            "Reportar inmediatamente la situación a través de los canales oficiales de denuncia interna.",
            "Recopilar más evidencia antes de decidir si reporta la situación."
        ],
        correctAnswer: 2,
        explanation: "Según el Código de Integridad de la DIAN y los procedimientos de denuncia interna vigentes en 2025, el funcionario debe reportar inmediatamente la situación a través de los canales oficiales de denuncia interna. El artículo 67 del Código de Procedimiento Penal establece la obligación de denunciar los delitos de los que se tenga conocimiento en ejercicio de funciones públicas. Además, la Ley 1952 de 2019 (Código Disciplinario Único) establece como deber de los servidores públicos 'poner en conocimiento del superior los hechos que puedan perjudicar el funcionamiento de la administración'. La DIAN cuenta con canales específicos para denuncias internas que garantizan la confidencialidad y protección del denunciante."
    },
    {
        id: "etica_007",
        category: "etica",
        difficulty: "alta",
        text: "Un funcionario de la DIAN es invitado como ponente a un seminario organizado por una firma de consultoría tributaria que representa a varios contribuyentes que están siendo auditados por la DIAN. La firma ofrece pagarle honorarios, gastos de viaje y alojamiento en un hotel de lujo.",
        question: "Según el régimen de conflicto de intereses y el Código de Integridad vigentes en 2025, ¿cuál es la decisión correcta que debe tomar el funcionario?",
        options: [
            "Puede aceptar la invitación y los honorarios, siempre que no hable específicamente sobre los casos que está auditando.",
            "Debe rechazar la invitación para evitar cualquier percepción de conflicto de intereses.",
            "Puede participar como ponente sin recibir honorarios, pero puede aceptar el pago de gastos de viaje y alojamiento.",
            "Puede aceptar la invitación y los honorarios si obtiene autorización previa de su superior jerárquico."
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con la Ley 2013 de 2019, el Código de Integridad de la DIAN y la Ley 2195 de 2022 (Ley Anticorrupción) vigentes en 2025, el funcionario debe rechazar la invitación para evitar cualquier percepción de conflicto de intereses. El artículo 35 de la Ley 1952 de 2019 (Código Disciplinario Único) prohíbe a los servidores públicos 'recibir, solicitar o aceptar, directamente o por interpuesta persona, gratificaciones, dádivas o recompensas en razón del ejercicio de sus funciones'. Además, el artículo 11 de la Ley 1437 de 2011 (CPACA) establece como causal de impedimento tener interés particular y directo en la regulación, gestión, control o decisión del asunto. La participación en este tipo de eventos podría comprometer la objetividad e imparcialidad del funcionario en los procesos de auditoría en curso."
    },
    {
        id: "etica_008",
        category: "etica",
        difficulty: "media",
        text: "Un funcionario de la DIAN está considerando postularse para un cargo de elección popular en las próximas elecciones locales. Actualmente trabaja en el área de fiscalización tributaria.",
        question: "Según el régimen de incompatibilidades de los servidores públicos vigente en 2025, ¿qué debe hacer el funcionario si decide postularse?",
        options: [
            "Puede mantener su cargo en la DIAN mientras realiza su campaña política fuera del horario laboral.",
            "Debe renunciar a su cargo en la DIAN antes de inscribirse como candidato.",
            "Debe solicitar una licencia no remunerada durante el período de campaña electoral.",
            "Puede postularse sin renunciar, pero debe declararse impedido en asuntos que puedan generar conflicto de intereses."
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con la Ley 996 de 2005 (Ley de Garantías Electorales) y sus actualizaciones vigentes en 2025, los servidores públicos que deseen postularse para cargos de elección popular deben solicitar una licencia no remunerada desde el momento de la inscripción de su candidatura y hasta el día siguiente de la elección. El artículo 38 de la Ley 1952 de 2019 (Código Disciplinario Único) establece como falta gravísima 'utilizar el cargo para participar en actividades políticas'. La licencia garantiza que no se utilicen recursos públicos ni la posición oficial para beneficio de la campaña política."
    },
    {
        id: "etica_009",
        category: "etica",
        difficulty: "baja",
        text: "Un funcionario de la DIAN recibe una solicitud de un amigo para agilizar el trámite de devolución de impuestos de su empresa, argumentando que el proceso normal tarda demasiado tiempo.",
        question: "Según el Código de Integridad y los principios de la función pública vigentes en 2025, ¿cuál debe ser la respuesta del funcionario?",
        options: [
            "Puede agilizar el trámite si la solicitud cumple con todos los requisitos legales.",
            "Debe explicar que todos los trámites siguen un orden establecido y no puede dar trato preferencial.",
            "Puede revisar el caso para identificar si hay algún error que esté retrasando el proceso.",
            "Debe derivar la solicitud a otro funcionario para evitar un conflicto de intereses."
        ],
        correctAnswer: 1,
        explanation: "Según el Código de Integridad de la DIAN y los principios de la función pública establecidos en el artículo 209 de la Constitución Política y el artículo 3 de la Ley 1437 de 2011 (CPACA), vigentes en 2025, el funcionario debe explicar que todos los trámites siguen un orden establecido y no puede dar trato preferencial. El principio de igualdad establece que las autoridades deben dar el mismo trato a todas las personas, sin discriminación alguna. El artículo 34 de la Ley 1952 de 2019 (Código Disciplinario Único) establece como deber de los servidores públicos 'tratar con respeto, imparcialidad y rectitud a las personas con que tenga relación por razón del servicio'."
    },
    {
        id: "etica_010",
        category: "etica",
        difficulty: "alta",
        text: "Un funcionario de la DIAN descubre durante una auditoría que una empresa ha estado utilizando facturas falsas para incrementar sus deducciones fiscales. El representante legal de la empresa le ofrece información sobre un esquema de evasión fiscal mucho más grande que involucra a varias empresas importantes, a cambio de reducir los hallazgos en su informe.",
        question: "Según el Código de Integridad y las normas anticorrupción vigentes en 2025, ¿cuál es la actuación correcta del funcionario?",
        options: [
            "Aceptar el trato para obtener información sobre un esquema de evasión más grande, lo que beneficiaría a la DIAN.",
            "Rechazar el ofrecimiento y continuar con la auditoría normalmente, documentando todos los hallazgos encontrados.",
            "Consultar con su superior sobre la posibilidad de negociar con el contribuyente para obtener la información.",
            "Sugerir al representante legal que presente formalmente la información a través de los canales oficiales de denuncia."
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el Código de Integridad de la DIAN y la Ley 2195 de 2022 (Ley Anticorrupción) vigentes en 2025, el funcionario debe rechazar cualquier tipo de ofrecimiento que busque influir en sus decisiones o informes oficiales. El artículo 35 de la Ley 1952 de 2019 (Código Disciplinario Único) prohíbe a los servidores públicos 'solicitar o recibir dádivas, agasajos, regalos, favores o cualquier otra clase de beneficios'. El funcionario debe documentar todos los hallazgos encontrados en la auditoría y, si lo considera pertinente, puede informar al contribuyente sobre los canales oficiales para denunciar esquemas de evasión fiscal, pero sin condicionar su actuación oficial a cambio de información."
    },
    {
        id: "etica_011",
        category: "etica",
        difficulty: "media",
        text: "Un funcionario de la DIAN es contactado por un periodista que está investigando presuntas irregularidades en procesos de fiscalización a grandes contribuyentes. El periodista solicita información sobre procedimientos internos y estadísticas de resultados de auditorías.",
        question: "Según el Código de Integridad y las normas sobre transparencia y acceso a la información vigentes en 2025, ¿cuál debe ser la actuación del funcionario?",
        options: [
            "Puede proporcionar la información solicitada si considera que es de interés público.",
            "Debe remitir al periodista a la oficina de comunicaciones o al área encargada de atender solicitudes de información.",
            "Puede proporcionar información general sobre procedimientos, pero no datos específicos de contribuyentes.",
            "Debe negarse a proporcionar cualquier tipo de información, ya que todos los procedimientos de la DIAN son confidenciales."
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con la Ley 1712 de 2014 (Ley de Transparencia y Acceso a la Información Pública) y el Código de Integridad de la DIAN vigentes en 2025, el funcionario debe remitir al periodista a la oficina de comunicaciones o al área encargada de atender solicitudes de información. El artículo 34 de la Ley 1952 de 2019 (Código Disciplinario Único) establece como deber de los servidores públicos 'actuar con imparcialidad, asegurando y garantizando los derechos de todas las personas, sin ningún tipo de discriminación'. Las entidades públicas tienen procedimientos establecidos para atender solicitudes de información, garantizando el equilibrio entre el derecho de acceso a la información pública y la protección de información reservada o clasificada."
    },
    {
        id: "etica_012",
        category: "etica",
        difficulty: "alta",
        text: "Un funcionario de la DIAN está considerando aceptar un trabajo en una firma de consultoría tributaria después de su retiro de la entidad. La firma representa a varios contribuyentes que fueron auditados por el funcionario durante los últimos dos años.",
        question: "Según el régimen de inhabilidades e incompatibilidades vigente en 2025, ¿qué restricciones aplican al funcionario después de su retiro de la DIAN?",
        options: [
            "No existen restricciones una vez que el funcionario se retire de la entidad.",
            "No puede trabajar para contribuyentes que haya auditado durante un período de dos años después de su retiro.",
            "No puede trabajar en asuntos específicos en los que haya participado directamente como funcionario durante un período determinado.",
            "Tiene prohibido permanentemente trabajar en el sector privado en temas relacionados con sus funciones en la DIAN."
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con la Ley 2013 de 2019 y la Ley 2195 de 2022 (Ley Anticorrupción) vigentes en 2025, los exfuncionarios públicos no pueden intervenir, por ningún medio y en ningún tiempo, en asuntos específicos en los que hayan participado directamente durante el ejercicio de sus funciones. El artículo 3 de la Ley 1437 de 2011 (CPACA) establece el principio de moralidad, según el cual los servidores públicos deben actuar con rectitud, lealtad y honestidad. Esta restricción busca prevenir el uso indebido de información privilegiada y evitar conflictos de intereses posteriores al retiro del servicio público."
    },
    {
        id: "etica_013",
        category: "etica",
        difficulty: "media",
        text: "Un funcionario de la DIAN debe tomar una decisión sobre una solicitud de facilidad de pago presentada por una empresa. El funcionario descubre que tiene acciones en un fondo de inversión que a su vez tiene una pequeña participación en dicha empresa.",
        question: "Según el régimen de conflicto de intereses vigente en 2025, ¿cuál es la actuación correcta del funcionario?",
        options: [
            "Puede continuar con el trámite, ya que su participación indirecta es mínima y no influye en su decisión.",
            "Debe declararse impedido y solicitar que otro funcionario tramite la solicitud.",
            "Puede continuar con el trámite, pero debe informar a su superior sobre la situación.",
            "Debe vender sus acciones en el fondo de inversión antes de continuar con el trámite."
        ],
        correctAnswer: 1,
        explanation: "Según la Ley 2013 de 2019 y el Código de Integridad de la DIAN vigentes en 2025, el funcionario debe declararse impedido cuando exista un conflicto de intereses, incluso si es indirecto o aparente. El artículo 11 de la Ley 1437 de 2011 (CPACA) establece como causal de impedimento tener interés particular y directo en la regulación, gestión, control o decisión del asunto. Aunque la participación sea mínima, existe un potencial conflicto de intereses que podría afectar la objetividad e imparcialidad del funcionario, por lo que debe declararse impedido y solicitar que otro funcionario tramite la solicitud."
    },
    {
        id: "etica_014",
        category: "etica",
        difficulty: "baja",
        text: "Un funcionario de la DIAN encuentra por accidente un documento confidencial olvidado por un compañero en una sala de reuniones. El documento contiene información sobre una investigación en curso a una empresa importante.",
        question: "Según el Código de Integridad y los protocolos de manejo de información confidencial vigentes en 2025, ¿cuál es la acción correcta que debe tomar el funcionario?",
        options: [
            "Puede leer el documento para estar informado sobre la investigación.",
            "Debe entregar inmediatamente el documento a su propietario o al superior jerárquico.",
            "Puede hacer una copia del documento antes de devolverlo, por si la información le resulta útil en el futuro.",
            "Debe destruir el documento para evitar que la información confidencial se filtre."
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el Código de Integridad de la DIAN y los protocolos de manejo de información confidencial vigentes en 2025, el funcionario debe entregar inmediatamente el documento a su propietario o al superior jerárquico. El artículo 34 de la Ley 1952 de 2019 (Código Disciplinario Único) establece como deber de los servidores públicos 'guardar la reserva de la información clasificada obtenida en el ejercicio de sus funciones'. Los protocolos internos de la DIAN establecen procedimientos específicos para el manejo de documentos confidenciales, que incluyen su devolución inmediata en caso de extravío."
    },
    {
        id: "etica_015",
        category: "etica",
        difficulty: "alta",
        text: "Un funcionario de la DIAN es designado para participar en un comité que evaluará propuestas para la adquisición de un nuevo sistema informático para la entidad. Una de las empresas participantes es dirigida por un antiguo colega con quien mantiene una amistad cercana.",
        question: "Según el régimen de conflicto de intereses y el Código de Integridad vigentes en 2025, ¿cuál es la actuación correcta del funcionario?",
        options: [
            "Puede participar en el comité, pero debe abstenerse de votar cuando se evalúe la propuesta de la empresa de su amigo.",
            "Debe declararse impedido y solicitar ser reemplazado en el comité.",
            "Puede participar en el comité si informa previamente sobre su relación de amistad con el directivo de la empresa.",
            "Puede participar normalmente, ya que la amistad personal no constituye un conflicto de intereses en procesos de contratación."
        ],
        correctAnswer: 1,
        explanation: "Según la Ley 2013 de 2019, la Ley 2195 de 2022 (Ley Anticorrupción) y el Código de Integridad de la DIAN vigentes en 2025, el funcionario debe declararse impedido y solicitar ser reemplazado en el comité. El artículo 11 de la Ley 1437 de 2011 (CPACA) establece como causal de impedimento tener amistad íntima o enemistad grave con alguna de las personas interesadas en la actuación administrativa. El artículo 44 de la Ley 1952 de 2019 (Código Disciplinario Único) establece como falta gravísima 'no declararse impedido oportunamente, cuando exista la obligación de hacerlo'. La participación del funcionario podría afectar la objetividad e imparcialidad del proceso de contratación."
    },
    {
        id: "etica_016",
        category: "etica",
        difficulty: "media",
        text: "Un funcionario de la DIAN recibe una solicitud de un contribuyente para realizar una reunión privada fuera del horario laboral y en un lugar distinto a las instalaciones de la entidad, con el fin de discutir su caso tributario.",
        question: "Según el Código de Integridad y los protocolos de atención al contribuyente vigentes en 2025, ¿cuál debe ser la respuesta del funcionario?",
        options: [
            "Puede aceptar la reunión si considera que es necesaria para resolver el caso.",
            "Debe rechazar la solicitud y proponer una reunión formal en las instalaciones de la DIAN durante el horario laboral.",
            "Puede aceptar la reunión si otro funcionario lo acompaña como testigo.",
            "Debe consultar con su superior si puede aceptar la reunión en esas condiciones."
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el Código de Integridad de la DIAN y los protocolos de atención al contribuyente vigentes en 2025, el funcionario debe rechazar la solicitud y proponer una reunión formal en las instalaciones de la DIAN durante el horario laboral. El artículo 34 de la Ley 1952 de 2019 (Código Disciplinario Único) establece como deber de los servidores públicos 'dedicar la totalidad del tiempo reglamentario de trabajo al desempeño de las funciones encomendadas'. Los protocolos internos de la DIAN establecen que las reuniones con contribuyentes deben realizarse en las instalaciones oficiales, durante el horario laboral y siguiendo los procedimientos establecidos para garantizar la transparencia y trazabilidad de las actuaciones."
    },
    {
        id: "etica_017",
        category: "etica",
        difficulty: "alta",
        text: "Un funcionario de la DIAN descubre que un contribuyente importante ha estado utilizando un esquema de evasión fiscal sofisticado. El contribuyente es una empresa que patrocina actividades benéficas en la comunidad donde vive el funcionario, incluyendo la escuela donde estudian sus hijos.",
        question: "Según el Código de Integridad y los principios de la función pública vigentes en 2025, ¿cuál es la actuación correcta del funcionario?",
        options: [
            "Debe ser más flexible en la aplicación de sanciones, considerando el impacto positivo de la empresa en la comunidad.",
            "Debe aplicar rigurosamente la normativa tributaria, independientemente de las actividades benéficas de la empresa.",
            "Puede sugerir al contribuyente que incremente sus actividades benéficas a cambio de una sanción menor.",
            "Debe declararse impedido por tener un interés indirecto en las actividades de la empresa."
        ],
        correctAnswer: 1,
        explanation: "Según el Código de Integridad de la DIAN y los principios de la función pública establecidos en el artículo 209 de la Constitución Política y el artículo 3 de la Ley 1437 de 2011 (CPACA), vigentes en 2025, el funcionario debe aplicar rigurosamente la normativa tributaria, independientemente de las actividades benéficas de la empresa. El principio de imparcialidad establece que las autoridades deben actuar teniendo en cuenta que la finalidad de los procedimientos consiste en asegurar y garantizar los derechos de todas las personas sin discriminación alguna. El artículo 34 de la Ley 1952 de 2019 (Código Disciplinario Único) establece como deber de los servidores públicos 'formular, decidir oportunamente o ejecutar los planes de desarrollo y los presupuestos, y cumplir las leyes y normas que regulan el manejo de los recursos económicos públicos'."
    },
    {
        id: "etica_018",
        category: "etica",
        difficulty: "media",
        text: "Un funcionario de la DIAN es invitado a participar como docente en un curso de actualización tributaria organizado por una universidad. El curso está dirigido a profesionales del área contable y financiera, y el funcionario recibiría una remuneración por su participación.",
        question: "Según el régimen de incompatibilidades y el Código de Integridad vigentes en 2025, ¿puede el funcionario aceptar esta invitación?",
        options: [
            "No puede aceptar la invitación bajo ninguna circunstancia, ya que existe incompatibilidad con su cargo en la DIAN.",
            "Puede aceptar la invitación y la remuneración si obtiene autorización previa de su superior jerárquico y cumple con los requisitos legales.",
            "Puede aceptar la invitación pero no la remuneración, ya que los funcionarios públicos no pueden recibir pagos adicionales a su salario.",
            "Puede aceptar la invitación y la remuneración sin necesidad de autorización, siempre que las clases se impartan fuera del horario laboral."
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con la Ley 734 de 2002 (Código Disciplinario Único) y sus actualizaciones vigentes en 2025, los servidores públicos pueden ejercer la docencia universitaria hasta por un número determinado de horas semanales, siempre que no afecte el cumplimiento de sus funciones y cuenten con la autorización previa correspondiente. El artículo 19 de la Ley 4 de 1992 establece que los servidores públicos pueden percibir remuneración por el ejercicio de la docencia universitaria. El funcionario debe solicitar autorización previa a su superior jerárquico, especificando el horario en que ejercerá la docencia, y asegurarse de que no exista conflicto de intereses con sus funciones en la DIAN."
    },
    {
        id: "etica_019",
        category: "etica",
        difficulty: "baja",
        text: "Un funcionario de la DIAN observa que un compañero de trabajo utiliza regularmente los recursos de la entidad (computadora, impresora, papel) para asuntos personales, como imprimir documentos relacionados con un negocio particular que tiene.",
        question: "Según el Código de Integridad y las normas sobre uso de bienes públicos vigentes en 2025, ¿cuál es la acción correcta que debe tomar el funcionario?",
        options: [
            "No debe intervenir, ya que es responsabilidad de los supervisores controlar el uso de los recursos.",
            "Debe hablar directamente con su compañero para recordarle las normas sobre uso de bienes públicos.",
            "Debe reportar la situación a través de los canales internos establecidos para denuncias.",
            "Puede ignorar la situación si el uso de recursos es mínimo y no afecta significativamente a la entidad."
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el Código de Integridad de la DIAN y las normas sobre uso de bienes públicos vigentes en 2025, el funcionario debe reportar la situación a través de los canales internos establecidos para denuncias. El artículo 34 de la Ley 1952 de 2019 (Código Disciplinario Único) establece como deber de los servidores públicos 'vigilar y salvaguardar los bienes y valores que le han sido encomendados'. El artículo 35 de la misma ley prohíbe a los servidores públicos 'utilizar los bienes y recursos asignados para el desempeño de su empleo, cargo o función, para actividades distintas a las relacionadas con sus funciones'. La DIAN cuenta con canales específicos para denuncias internas que garantizan la confidencialidad y protección del denunciante."
    },
    {
        id: "etica_020",
        category: "etica",
        difficulty: "alta",
        text: "Un funcionario de la DIAN es designado para participar en la elaboración de un proyecto de resolución que establecerá nuevos requisitos para ciertos trámites tributarios. El funcionario tiene conocimiento de que estos cambios podrían afectar negativamente a una empresa donde trabaja su cónyuge.",
        question: "Según el régimen de conflicto de intereses y el Código de Integridad vigentes en 2025, ¿cuál es la actuación correcta del funcionario?",
        options: [
            "Puede participar en la elaboración del proyecto, pero debe asegurarse de que los requisitos sean razonables para todos los contribuyentes.",
            "Debe declararse impedido y solicitar ser relevado de esta tarea específica.",
            "Puede participar en la elaboración del proyecto, pero debe informar a su superior sobre la situación.",
            "Debe participar en la elaboración del proyecto y luego abstenerse de firmar la versión final."
        ],
        correctAnswer: 1,
        explanation: "Según la Ley 2013 de 2019 y el Código de Integridad de la DIAN vigentes en 2025, el funcionario debe declararse impedido y solicitar ser relevado de esta tarea específica. El artículo 11 de la Ley 1437 de 2011 (CPACA) establece como causal de impedimento tener interés particular y directo en la regulación, gestión, control o decisión del asunto, o tenerlo su cónyuge o alguno de sus parientes. El artículo 44 de la Ley 1952 de 2019 (Código Disciplinario Único) establece como falta gravísima 'no declararse impedido oportunamente, cuando exista la obligación de hacerlo'. La participación del funcionario podría afectar la objetividad e imparcialidad en la elaboración del proyecto de resolución."
    }
];