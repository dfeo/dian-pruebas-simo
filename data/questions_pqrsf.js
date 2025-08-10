// Preguntas sobre Sistema PQRSF (Peticiones, Quejas, Reclamos, Sugerencias y Felicitaciones)
const questions_pqrsf = [
    {
        id: "pqrsf_001",
        category: "pqrsf",
        difficulty: "baja",
        text: "Un contribuyente presenta una solicitud de información sobre el estado de un trámite de devolución de impuestos ante la DIAN.",
        question: "Según la normativa que regula el derecho de petición, ¿qué tipo de petición constituye esta solicitud?",
        options: [
            "Petición de interés general",
            "Petición de interés particular",
            "Petición de información",
            "Petición de consulta"
        ],
        correctAnswer: 2,
        explanation: "La solicitud constituye una petición de información. Según el artículo 14 de la Ley 1755 de 2015, que sustituyó el Título II del Código de Procedimiento Administrativo y de lo Contencioso Administrativo (Ley 1437 de 2011), las peticiones se clasifican en diferentes tipos, entre ellos las peticiones de información, mediante las cuales el ciudadano solicita a las autoridades que den a conocer cómo han actuado en un caso concreto o permitan el acceso a documentos públicos que tienen en su poder. En este caso, el contribuyente está solicitando información sobre el estado de un trámite específico, lo que corresponde a una petición de información. Este tipo de peticiones debe ser resuelto dentro de los diez (10) días siguientes a su recepción, según lo establecido en el numeral 1 del artículo 14 de la Ley 1755 de 2015."
    },
    {
        id: "pqrsf_002",
        category: "pqrsf",
        difficulty: "media",
        text: "Un ciudadano presenta una petición ante la DIAN solicitando la expedición de copias de su declaración de renta del año anterior.",
        question: "De acuerdo con la normativa que regula el sistema PQRSF, ¿puede la DIAN cobrar por la expedición de estas copias?",
        options: [
            "No, todas las copias deben ser gratuitas en virtud del derecho de petición",
            "Sí, puede cobrar el valor de la reproducción de las copias, pero no más allá de su costo real",
            "Sí, puede establecer una tarifa fija para la expedición de cualquier tipo de copia",
            "No, solo puede cobrar si el número de copias excede de 100 páginas"
        ],
        correctAnswer: 1,
        explanation: "Sí, la DIAN puede cobrar el valor de la reproducción de las copias, pero no más allá de su costo real. Esta disposición está contemplada en el artículo 29 de la Ley 1755 de 2015, que establece: 'En ningún caso el precio de las copias podrá exceder el valor de la reproducción. Los costos de la expedición de las copias correrán por cuenta del interesado en obtenerlas'. El parágrafo del mismo artículo señala que 'el valor de la reproducción no podrá ser superior al valor comercial de referencia en el mercado'. Esta norma busca un equilibrio entre el derecho de acceso a la información pública y la necesidad de las entidades de recuperar los costos asociados a la reproducción física de documentos. La Corte Constitucional, en sentencias como la C-951 de 2014, ha confirmado que este cobro es constitucional siempre que se limite al costo real de reproducción y no se convierta en una barrera para el ejercicio del derecho de petición."
    },
    {
        id: "pqrsf_003",
        category: "pqrsf",
        difficulty: "alta",
        text: "La DIAN recibe una petición de información sobre las declaraciones tributarias presentadas por una empresa. La solicitud es presentada por un periodista que investiga posibles casos de evasión fiscal.",
        question: "De acuerdo con la normativa tributaria y el sistema PQRSF, ¿cómo debe proceder la DIAN ante esta solicitud?",
        options: [
            "Debe entregar la información solicitada en virtud del derecho de acceso a la información pública",
            "Debe negar la solicitud, pues las declaraciones tributarias están amparadas por la reserva legal",
            "Debe entregar la información solo si cuenta con autorización previa del contribuyente",
            "Debe entregar la información parcialmente, omitiendo los datos financieros específicos"
        ],
        correctAnswer: 1,
        explanation: "La DIAN debe negar la solicitud, pues las declaraciones tributarias están amparadas por la reserva legal. Esta reserva está establecida en el artículo 583 del Estatuto Tributario, que dispone: 'La información tributaria respecto de las bases gravables y la determinación privada de los impuestos que figuren en las declaraciones tributarias, tendrá el carácter de información reservada'. El artículo 24 de la Ley 1755 de 2015 reconoce como información con carácter reservado aquella protegida por el secreto comercial o industrial, así como la relacionada con la defensa y seguridad nacionales, entre otras. La Corte Constitucional, en sentencias como la C-602 de 2015, ha confirmado la constitucionalidad de la reserva tributaria, señalando que esta protege el derecho a la intimidad de los contribuyentes y la confidencialidad de su información financiera. Sin embargo, es importante mencionar que según el artículo 583 del Estatuto Tributario, esta reserva no es oponible a las autoridades judiciales, ni a las autoridades competentes para conocer procesos de fiscalización, cobro, devoluciones o compensaciones."
    },
    {
        id: "pqrsf_004",
        category: "pqrsf",
        difficulty: "media",
        text: "Un contribuyente presenta una queja ante la DIAN porque considera que un funcionario lo atendió de manera descortés y no le brindó la información completa sobre un trámite.",
        question: "Según la normativa que regula el sistema PQRSF, ¿cuál es el plazo máximo que tiene la DIAN para responder esta queja?",
        options: [
            "5 días hábiles",
            "10 días hábiles",
            "15 días hábiles",
            "30 días hábiles"
        ],
        correctAnswer: 2,
        explanation: "El plazo máximo que tiene la DIAN para responder esta queja es de 15 días hábiles. Este término está establecido en el artículo 14 de la Ley 1755 de 2015, que dispone: 'Salvo norma legal especial y so pena de sanción disciplinaria, toda petición deberá resolverse dentro de los quince (15) días siguientes a su recepción'. Las quejas se enmarcan dentro del concepto general de petición y, al no tener un término especial asignado como sí lo tienen las peticiones de información (10 días) o las consultas (30 días), se rigen por el término general de 15 días hábiles. La Circular 000017 de 2023 de la DIAN, que actualiza los lineamientos para la gestión de PQRSF, confirma este plazo para la atención de quejas, estableciendo que estas deben ser resueltas dentro de los 15 días hábiles siguientes a su recepción, garantizando una respuesta de fondo, clara, precisa y congruente con lo solicitado."
    },
    {
        id: "pqrsf_005",
        category: "pqrsf",
        difficulty: "baja",
        text: "Un ciudadano presenta una petición ante la DIAN, pero no especifica claramente su solicitud ni aporta la información necesaria para resolverla.",
        question: "De acuerdo con la normativa que regula el sistema PQRSF, ¿cómo debe proceder la DIAN en este caso?",
        options: [
            "Debe rechazar la petición por ser incompleta",
            "Debe responder con la información que tenga disponible",
            "Debe requerir al peticionario para que complete la información en un plazo de 10 días",
            "Debe trasladar la petición a otra entidad que pueda tener más información"
        ],
        correctAnswer: 2,
        explanation: "La DIAN debe requerir al peticionario para que complete la información en un plazo de 10 días. Esta actuación está fundamentada en el artículo 17 de la Ley 1755 de 2015, que establece: 'En virtud del principio de eficacia, cuando la autoridad constate que una petición ya radicada está incompleta o que el peticionario deba realizar una gestión de trámite a su cargo, necesaria para adoptar una decisión de fondo, y que la actuación pueda continuar sin oponerse a la ley, requerirá al peticionario dentro de los diez (10) días siguientes a la fecha de radicación para que la complete en el término máximo de un mes'. La norma también señala que a partir del día siguiente en que el interesado aporte los documentos o informes requeridos, se reactivará el término para resolver la petición. Si el peticionario no completa la información en el plazo establecido, se entenderá que ha desistido de su solicitud, aunque puede volver a presentarla con el lleno de los requisitos."
    },
    {
        id: "pqrsf_006",
        category: "pqrsf",
        difficulty: "alta",
        text: "Un contribuyente presenta una petición ante la DIAN solicitando que se le informe sobre los criterios jurídicos que utiliza la entidad para determinar si una operación constituye abuso en materia tributaria.",
        question: "Según la normativa que regula el sistema PQRSF, ¿qué tipo de petición constituye esta solicitud y cuál es el plazo para responderla?",
        options: [
            "Petición de información, 10 días hábiles",
            "Petición de consulta, 30 días hábiles",
            "Petición de interés particular, 15 días hábiles",
            "Petición de documentos, 10 días hábiles"
        ],
        correctAnswer: 1,
        explanation: "Esta solicitud constituye una petición de consulta y el plazo para responderla es de 30 días hábiles. El artículo 14 de la Ley 1755 de 2015, en su numeral 2, establece: 'Las peticiones mediante las cuales se eleva una consulta a las autoridades en relación con las materias a su cargo deberán resolverse dentro de los treinta (30) días siguientes a su recepción'. En este caso, el contribuyente está solicitando que la DIAN le informe sobre los criterios jurídicos que utiliza para determinar si una operación constituye abuso en materia tributaria, lo que implica una interpretación y aplicación de normas tributarias, no simplemente la entrega de información o documentos. La Circular 000017 de 2023 de la DIAN, que actualiza los lineamientos para la gestión de PQRSF, confirma que las consultas sobre interpretación y aplicación de normas tributarias, aduaneras y cambiarias deben ser atendidas por la Subdirección de Normativa y Doctrina en un plazo máximo de 30 días hábiles."
    },
    {
        id: "pqrsf_007",
        category: "pqrsf",
        difficulty: "media",
        text: "Un contribuyente presenta una petición ante la DIAN un viernes a las 5:30 p.m., después del horario de atención al público que finaliza a las 4:00 p.m.",
        question: "De acuerdo con la normativa que regula el sistema PQRSF, ¿cuándo se entiende presentada esta petición para efectos del cómputo de términos?",
        options: [
            "El mismo viernes, pues fue recibida físicamente ese día",
            "El lunes siguiente, primer día hábil después de su presentación",
            "El sábado siguiente, pues los términos se cuentan en días calendario",
            "No se considera presentada hasta que el contribuyente la radique en horario de atención"
        ],
        correctAnswer: 1,
        explanation: "La petición se entiende presentada el lunes siguiente, primer día hábil después de su presentación. Esta regla está establecida en el artículo 10 del Decreto 491 de 2020, que dispone: 'Para las peticiones que se radiquen por medios electrónicos por fuera del horario establecido por la entidad, se entenderán radicadas el día hábil siguiente'. Aunque esta norma se refiere específicamente a peticiones electrónicas, el principio se aplica igualmente a peticiones físicas recibidas fuera del horario de atención. La Circular 000017 de 2023 de la DIAN, que actualiza los lineamientos para la gestión de PQRSF, confirma este criterio, estableciendo que las peticiones recibidas después del horario de atención al público se entenderán radicadas el día hábil siguiente para efectos del cómputo de términos. Esta interpretación es coherente con el artículo 62 de la Ley 4 de 1913 (Código de Régimen Político y Municipal), que establece que los plazos de días que se señalen en las leyes y actos oficiales se entenderán suprimidos los feriados y de vacantes, a menos de expresarse lo contrario."
    },
    {
        id: "pqrsf_008",
        category: "pqrsf",
        difficulty: "baja",
        text: "Un contribuyente presenta una felicitación ante la DIAN por la excelente atención recibida en una de sus oficinas.",
        question: "Según la normativa que regula el sistema PQRSF, ¿está obligada la DIAN a dar respuesta a esta felicitación?",
        options: [
            "No, las felicitaciones no requieren respuesta formal",
            "Sí, debe responder agradeciendo la felicitación en un plazo de 15 días hábiles",
            "Sí, debe responder solo si el contribuyente solicita expresamente una respuesta",
            "No, solo debe incluirla en los informes estadísticos de PQRSF"
        ],
        correctAnswer: 0,
        explanation: "No, las felicitaciones no requieren respuesta formal. Aunque la normativa general sobre derecho de petición (Ley 1755 de 2015) establece la obligación de responder toda petición, las felicitaciones constituyen un caso especial dentro del sistema PQRSF, pues no contienen una solicitud específica que deba ser resuelta. La Circular 000017 de 2023 de la DIAN, que actualiza los lineamientos para la gestión de PQRSF, establece que las felicitaciones deben ser registradas, clasificadas y tenidas en cuenta para los informes de gestión y los programas de reconocimiento a funcionarios, pero no requieren una respuesta formal al ciudadano. Esta interpretación es coherente con la naturaleza de las felicitaciones, que constituyen manifestaciones de satisfacción del ciudadano y no peticiones en sentido estricto. No obstante, como buena práctica de servicio al ciudadano, algunas entidades optan por enviar un mensaje de agradecimiento, aunque esto no constituye una obligación legal."
    },
    {
        id: "pqrsf_009",
        category: "pqrsf",
        difficulty: "alta",
        text: "Un contribuyente presenta una petición ante la DIAN solicitando información sobre un procedimiento tributario. La entidad considera que la respuesta puede afectar a terceros y decide publicar un aviso para que estos puedan hacer valer sus derechos.",
        question: "De acuerdo con la normativa que regula el sistema PQRSF, ¿por cuánto tiempo debe publicarse este aviso?",
        options: [
            "3 días hábiles",
            "5 días hábiles",
            "10 días hábiles",
            "15 días hábiles"
        ],
        correctAnswer: 1,
        explanation: "El aviso debe publicarse por 5 días hábiles. Esta disposición está contemplada en el artículo 37 de la Ley 1437 de 2011 (Código de Procedimiento Administrativo y de lo Contencioso Administrativo), que establece: 'Cuando en una actuación administrativa de contenido particular y concreto la autoridad advierta que terceras personas puedan resultar directamente afectadas por la decisión, les comunicará la existencia de la actuación, el objeto de la misma y el nombre del peticionario, si lo hubiere, para que puedan constituirse como parte y hacer valer sus derechos. La comunicación se remitirá a la dirección o correo electrónico que se conozca si no hay otro medio más eficaz. De no ser posible dicha comunicación, o tratándose de terceros indeterminados, la información se divulgará a través de un medio masivo de comunicación nacional o local, según el caso, o a través de cualquier otro mecanismo eficaz, habida cuenta de las condiciones de los posibles interesados. De tales actuaciones se dejará constancia escrita en el expediente'. Aunque este artículo no especifica el tiempo de publicación, el artículo 69 de la misma ley, que regula la notificación por aviso, establece que cuando se desconozca la información sobre el destinatario, el aviso se publicará en la página electrónica y en un lugar de acceso al público de la entidad por el término de cinco (5) días. La Circular 000017 de 2023 de la DIAN, que actualiza los lineamientos para la gestión de PQRSF, adopta este mismo término para la publicación de avisos en casos donde la respuesta pueda afectar a terceros."
    },
    {
        id: "pqrsf_010",
        category: "pqrsf",
        difficulty: "media",
        text: "Un contribuyente presenta un reclamo ante la DIAN por inconsistencias en la información registrada en su RUT (Registro Único Tributario).",
        question: "Según la normativa que regula el sistema PQRSF, ¿qué dependencia de la DIAN debe resolver este reclamo?",
        options: [
            "La Dirección de Gestión de Ingresos",
            "La Dirección de Gestión Jurídica",
            "La Dirección de Gestión Organizacional",
            "La dependencia que sea funcionalmente competente según la organización interna de la DIAN"
        ],
        correctAnswer: 3,
        explanation: "La dependencia que debe resolver el reclamo es la que sea funcionalmente competente según la organización interna de la DIAN. El artículo 21 de la Ley 1437 de 2011, modificado por el artículo 1 de la Ley 1755 de 2015, establece que 'si la autoridad a quien se dirige la petición no es la competente, se informará de inmediato al interesado si este actúa verbalmente, o dentro de los cinco (5) días siguientes al de la recepción, si obró por escrito. Dentro del término señalado remitirá la petición al competente y enviará copia del oficio remisorio al peticionario'. La Circular 000017 de 2023 de la DIAN, que actualiza los lineamientos para la gestión de PQRSF, establece que las peticiones deben ser asignadas a la dependencia competente según la materia, y que en el caso específico de reclamos relacionados con el RUT, estos deben ser atendidos por la Subdirección de Gestión de Asistencia al Cliente o la dependencia que haga sus veces en las Direcciones Seccionales, según la estructura organizacional vigente de la DIAN. Esta asignación responde al principio de eficacia administrativa, buscando que las peticiones sean resueltas por las áreas que tienen el conocimiento técnico y la competencia funcional para hacerlo."
    },
    {
        id: "pqrsf_011",
        category: "pqrsf",
        difficulty: "baja",
        text: "Un contribuyente desea presentar una petición ante la DIAN pero no sabe leer ni escribir.",
        question: "De acuerdo con la normativa que regula el sistema PQRSF, ¿cómo puede este contribuyente ejercer su derecho de petición?",
        options: [
            "No puede ejercerlo hasta que aprenda a leer y escribir",
            "Debe contratar un abogado que presente la petición en su nombre",
            "Puede presentarla verbalmente y la autoridad debe transcribirla",
            "Solo puede presentar peticiones a través de un familiar que sepa leer y escribir"
        ],
        correctAnswer: 2,
        explanation: "El contribuyente puede presentar su petición verbalmente y la autoridad debe transcribirla. Esta posibilidad está contemplada en el artículo 15 de la Ley 1755 de 2015, que establece: 'Cuando por razones de salud o de seguridad personal esté en peligro inminente la vida o la integridad del destinatario de la medida solicitada, la autoridad adoptará de inmediato las medidas de urgencia necesarias para conjurar dicho peligro, sin perjuicio del trámite que deba darse a la petición. Si la petición la realiza un periodista, para el ejercicio de su actividad, se tramitará preferencialmente'. Aunque este artículo no menciona específicamente el caso de personas que no saben leer ni escribir, el parágrafo del artículo 5 de la misma ley establece que 'en caso de que la petición sea verbal, la decisión podrá tomarse y comunicarse en la misma forma al interesado'. La Circular 000017 de 2023 de la DIAN, que actualiza los lineamientos para la gestión de PQRSF, desarrolla este aspecto estableciendo que las personas que no sepan leer ni escribir pueden presentar peticiones verbales, las cuales deben ser recibidas y transcritas por los funcionarios de la entidad, garantizando así el ejercicio efectivo del derecho de petición."
    },
    {
        id: "pqrsf_012",
        category: "pqrsf",
        difficulty: "alta",
        text: "Un contribuyente presenta una petición ante la DIAN solicitando la revocatoria directa de un acto administrativo que le impuso una sanción tributaria. La entidad no responde dentro del término legal.",
        question: "De acuerdo con la normativa que regula el sistema PQRSF y el procedimiento administrativo, ¿qué consecuencia jurídica se produce ante este silencio administrativo?",
        options: [
            "Se configura silencio administrativo positivo y se entiende concedida la revocatoria",
            "Se configura silencio administrativo negativo y el contribuyente puede acudir a la jurisdicción contencioso-administrativa",
            "Se entiende que la DIAN ha perdido competencia para resolver la solicitud",
            "Se produce la nulidad del acto administrativo objeto de la solicitud de revocatoria"
        ],
        correctAnswer: 1,
        explanation: "Ante el silencio de la DIAN, se configura silencio administrativo negativo y el contribuyente puede acudir a la jurisdicción contencioso-administrativa. Esta consecuencia está establecida en el artículo 83 de la Ley 1437 de 2011 (Código de Procedimiento Administrativo y de lo Contencioso Administrativo), que dispone: 'Transcurridos tres (3) meses contados a partir de la presentación de una petición sin que se haya notificado decisión que la resuelva, se entenderá que esta es negativa. En los casos en que la ley señale un plazo superior a los tres (3) meses para resolver la petición sin que esta se hubiere decidido, el silencio administrativo se producirá al cabo de un (1) mes contado a partir de la fecha en que debió adoptarse la decisión'. En el caso específico de las solicitudes de revocatoria directa, el artículo 95 de la misma ley establece que la solicitud de revocación directa debe resolverse en un término máximo de dos (2) meses contados a partir de su presentación. Si en ese plazo no se ha resuelto, se entiende que la solicitud ha sido rechazada. Es importante destacar que, según el artículo 84 de la Ley 1437 de 2011, el silencio administrativo negativo no exime a la administración de su deber de resolver la petición, pero el acto tardío solo puede ser recurrido mediante los recursos señalados en el artículo 74 del mismo código."
    },
    {
        id: "pqrsf_013",
        category: "pqrsf",
        difficulty: "media",
        text: "Un contribuyente presenta una petición ante la DIAN utilizando un lenguaje irrespetuoso y con expresiones injuriosas contra los funcionarios de la entidad.",
        question: "Según la normativa que regula el sistema PQRSF, ¿cómo debe proceder la DIAN ante esta petición?",
        options: [
            "Debe rechazarla de plano por su contenido irrespetuoso",
            "Debe responderla normalmente, ignorando el lenguaje utilizado",
            "Debe solicitar al peticionario que la formule en términos respetuosos",
            "Debe trasladarla a la Fiscalía por el posible delito de injuria"
        ],
        correctAnswer: 2,
        explanation: "La DIAN debe solicitar al peticionario que formule su petición en términos respetuosos. Esta actuación está fundamentada en el artículo 19 de la Ley 1755 de 2015, que establece: 'Toda petición debe ser respetuosa so pena de rechazo. Solo cuando no se comprenda la finalidad u objeto de la petición esta se devolverá al interesado para que la corrija o aclare dentro de los diez (10) días siguientes. En caso de no corregirse o aclararse, se archivará la petición. En ningún caso se devolverán peticiones que se consideren inadecuadas o incompletas'. La Corte Constitucional, en sentencias como la T-353 de 2000 y la T-929 de 2013, ha establecido que las autoridades pueden solicitar a los peticionarios que reformulen sus peticiones cuando estas contengan expresiones irrespetuosas o injuriosas, pero no pueden rechazarlas de plano sin dar la oportunidad de corregirlas. La Circular 000017 de 2023 de la DIAN, que actualiza los lineamientos para la gestión de PQRSF, adopta este criterio, estableciendo que cuando una petición contenga expresiones irrespetuosas, se debe solicitar al peticionario que la reformule en términos adecuados, otorgándole un plazo de 10 días para hacerlo."
    },
    {
        id: "pqrsf_014",
        category: "pqrsf",
        difficulty: "baja",
        text: "Un contribuyente presenta una petición ante la DIAN un día viernes. La entidad tiene 15 días hábiles para responder.",
        question: "De acuerdo con las reglas de cómputo de términos en el sistema PQRSF, ¿qué días se cuentan para calcular el plazo de respuesta?",
        options: [
            "Todos los días calendario, incluyendo sábados, domingos y festivos",
            "Solo los días hábiles, excluyendo sábados, domingos y festivos",
            "Todos los días calendario, pero excluyendo los festivos",
            "Solo los días hábiles, pero incluyendo los sábados"
        ],
        correctAnswer: 1,
        explanation: "Para calcular el plazo de respuesta se cuentan solo los días hábiles, excluyendo sábados, domingos y festivos. Esta regla está establecida en el artículo 62 de la Ley 4 de 1913 (Código de Régimen Político y Municipal), que dispone: 'En los plazos de días que se señalen en las leyes y actos oficiales, se entienden suprimidos los feriados y de vacantes, a menos de expresarse lo contrario. Los de meses y años se computan según el calendario; pero si el último día fuere feriado o de vacante, se extenderá el plazo hasta el primer día hábil'. Esta disposición ha sido reiterada por la jurisprudencia del Consejo de Estado y la Corte Constitucional. La Circular 000017 de 2023 de la DIAN, que actualiza los lineamientos para la gestión de PQRSF, confirma esta regla, estableciendo que los términos para responder peticiones se cuentan en días hábiles, excluyendo sábados, domingos y festivos. Por lo tanto, si una petición se presenta un viernes y el término para responder es de 15 días hábiles, el plazo comenzará a contarse desde el lunes siguiente (si no es festivo) y no incluirá los sábados, domingos ni festivos que haya dentro de ese período."
    },
    {
        id: "pqrsf_015",
        category: "pqrsf",
        difficulty: "alta",
        text: "La DIAN recibe una petición que, por su complejidad, no puede ser resuelta dentro del término legal establecido.",
        question: "De acuerdo con la normativa que regula el sistema PQRSF, ¿qué debe hacer la DIAN en este caso?",
        options: [
            "Responder parcialmente dentro del término legal y solicitar una prórroga al peticionario",
            "Informar al peticionario antes del vencimiento del término sobre los motivos de la demora y señalar el plazo razonable en que se resolverá, el cual no podrá exceder del doble del inicialmente previsto",
            "Solicitar autorización al Ministerio de Hacienda para ampliar el plazo de respuesta",
            "Responder indicando que debido a la complejidad, el peticionario debe presentar su solicitud por partes"
        ],
        correctAnswer: 1,
        explanation: "La DIAN debe informar al peticionario antes del vencimiento del término sobre los motivos de la demora y señalar el plazo razonable en que se resolverá, el cual no podrá exceder del doble del inicialmente previsto. Esta actuación está fundamentada en el artículo 14 de la Ley 1755 de 2015, que en su parágrafo establece: 'Cuando excepcionalmente no fuere posible resolver la petición en los plazos aquí señalados, la autoridad debe informar esta circunstancia al interesado, antes del vencimiento del término señalado en la ley expresando los motivos de la demora y señalando a la vez el plazo razonable en que se resolverá o dará respuesta, que no podrá exceder del doble del inicialmente previsto'. La Circular 000017 de 2023 de la DIAN, que actualiza los lineamientos para la gestión de PQRSF, adopta esta disposición, estableciendo que cuando no sea posible resolver una petición dentro del término legal, se debe informar al peticionario antes del vencimiento, explicando las razones de la demora y señalando el nuevo plazo para resolver, que no puede ser superior al doble del inicial. Esta comunicación debe enviarse por el mismo medio por el que se recibió la petición o por el que haya indicado el peticionario para recibir notificaciones."
    },
    {
        id: "pqrsf_016",
        category: "pqrsf",
        difficulty: "media",
        text: "Un contribuyente presenta una petición ante la DIAN, pero la dirige a una dependencia que no es competente para resolverla.",
        question: "De acuerdo con la normativa que regula el sistema PQRSF, ¿en qué plazo debe la dependencia que recibió la petición remitirla a la competente?",
        options: [
            "Inmediatamente si el peticionario actúa verbalmente, o dentro de los 5 días siguientes a su recepción si actúa por escrito",
            "Dentro de los 10 días siguientes a su recepción",
            "Dentro de los 15 días siguientes a su recepción",
            "Dentro de los 30 días siguientes a su recepción"
        ],
        correctAnswer: 0,
        explanation: "La dependencia que recibió la petición debe remitirla a la competente inmediatamente si el peticionario actúa verbalmente, o dentro de los 5 días siguientes a su recepción si actúa por escrito. Esta disposición está contemplada en el artículo 21 de la Ley 1755 de 2015, que establece: 'Si la autoridad a quien se dirige la petición no es la competente, se informará de inmediato al interesado si este actúa verbalmente, o dentro de los cinco (5) días siguientes al de la recepción, si obró por escrito. Dentro del término señalado remitirá la petición al competente y enviará copia del oficio remisorio al peticionario o en caso de no existir funcionario competente así se lo comunicará'. La norma también señala que los términos para decidir se contarán a partir del día siguiente a la recepción de la petición por la autoridad competente. La Circular 000017 de 2023 de la DIAN, que actualiza los lineamientos para la gestión de PQRSF, adopta esta disposición, estableciendo que cuando una petición se reciba en una dependencia que no es competente para resolverla, esta debe remitirla a la dependencia competente dentro de los 5 días siguientes a su recepción, informando de esta remisión al peticionario."
    },
    {
        id: "pqrsf_017",
        category: "pqrsf",
        difficulty: "baja",
        text: "Un contribuyente desea conocer el estado de su solicitud de devolución de impuestos y se comunica telefónicamente con la DIAN.",
        question: "Según la normativa que regula el sistema PQRSF, ¿puede el contribuyente presentar una petición verbal por este medio?",
        options: [
            "No, las peticiones verbales solo pueden presentarse presencialmente",
            "Sí, las peticiones verbales pueden presentarse telefónicamente y la entidad debe dar el mismo trámite que a las escritas",
            "Sí, pero solo para solicitar información general, no para trámites específicos",
            "No, por teléfono solo se pueden presentar quejas y reclamos, no peticiones"
        ],
        correctAnswer: 1,
        explanation: "Sí, las peticiones verbales pueden presentarse telefónicamente y la entidad debe dar el mismo trámite que a las escritas. Esta posibilidad está contemplada en el artículo 2.2.3.12.3 del Decreto 1166 de 2016, que reglamenta la presentación, tratamiento y radicación de las peticiones presentadas verbalmente, estableciendo que 'las peticiones presentadas telefónicamente deberán ser recibidas por el servidor que atienda la llamada, quien deberá dejar constancia de la misma y radicarla de inmediato en el sistema de correspondencia de la entidad'. La norma también señala que las peticiones verbales, incluidas las telefónicas, deben ser resueltas en los mismos términos establecidos para las peticiones escritas. La Circular 000017 de 2023 de la DIAN, que actualiza los lineamientos para la gestión de PQRSF, adopta esta disposición, estableciendo que las peticiones verbales pueden presentarse presencialmente en las oficinas de la entidad, por vía telefónica o por cualquier otro medio tecnológico o electrónico disponible, y que en todos los casos deben ser registradas y tramitadas de acuerdo con el procedimiento establecido para las peticiones escritas."
    },
    {
        id: "pqrsf_018",
        category: "pqrsf",
        difficulty: "alta",
        text: "Un contribuyente presenta una petición ante la DIAN solicitando información sobre los criterios utilizados para seleccionarlo para una fiscalización. La entidad considera que esta información es reservada.",
        question: "De acuerdo con la normativa que regula el sistema PQRSF, ¿cómo debe proceder la DIAN al negar el acceso a esta información?",
        options: [
            "Debe responder indicando simplemente que la información es reservada",
            "Debe negar la petición mediante acto administrativo motivado, indicando expresamente la norma legal que establece la reserva y notificando al peticionario",
            "Debe trasladar la petición al superior jerárquico para que este decida sobre la reserva",
            "Debe entregar la información parcialmente, omitiendo solo los datos más sensibles"
        ],
        correctAnswer: 1,
        explanation: "La DIAN debe negar la petición mediante acto administrativo motivado, indicando expresamente la norma legal que establece la reserva y notificando al peticionario. Esta actuación está fundamentada en el artículo 25 de la Ley 1755 de 2015, que establece: 'Toda decisión que rechace la petición de informaciones o documentos será motivada, indicará en forma precisa las disposiciones legales que impiden la entrega de información o documentos pertinentes y deberá notificarse al peticionario. Contra la decisión que rechace la petición de informaciones o documentos por motivos de reserva legal, no procede recurso alguno, salvo lo previsto en el artículo siguiente'. El artículo 26 de la misma ley establece que el carácter reservado de una información o documento no será oponible a las autoridades judiciales, legislativas, ni a las autoridades administrativas que, siendo constitucional o legalmente competentes para ello, los soliciten para el debido ejercicio de sus funciones. La Circular 000017 de 2023 de la DIAN, que actualiza los lineamientos para la gestión de PQRSF, adopta estas disposiciones, estableciendo que cuando se niegue una petición de información por motivos de reserva, la decisión debe ser motivada, indicando expresamente la norma legal que establece la reserva y notificando al peticionario en los términos del Código de Procedimiento Administrativo y de lo Contencioso Administrativo."
    },
    {
        id: "pqrsf_019",
        category: "pqrsf",
        difficulty: "media",
        text: "Un contribuyente presenta una queja ante la DIAN por presuntas irregularidades en la actuación de un funcionario durante un proceso de fiscalización.",
        question: "Según la normativa que regula el sistema PQRSF, ¿qué trámite adicional debe dar la DIAN a esta queja, además de responderla al peticionario?",
        options: [
            "Debe trasladarla a la Procuraduría General de la Nación en todos los casos",
            "Debe trasladarla a la Oficina de Control Interno Disciplinario o quien haga sus veces, si considera que puede existir una falta disciplinaria",
            "Debe trasladarla al superior jerárquico del funcionario mencionado",
            "Debe trasladarla al Comité de Convivencia Laboral de la entidad"
        ],
        correctAnswer: 1,
        explanation: "La DIAN debe trasladar la queja a la Oficina de Control Interno Disciplinario o quien haga sus veces, si considera que puede existir una falta disciplinaria. Esta actuación está fundamentada en el artículo 2.2.3.8.1.4 del Decreto 1166 de 2016, que establece: 'Si como resultado de la queja presentada contra un servidor o un particular que cumple funciones públicas se evidencia una posible falta disciplinaria, la autoridad disciplinaria competente será informada para lo de su cargo'. La Ley 734 de 2002 (Código Disciplinario Único), reemplazada por la Ley 1952 de 2019 (Código General Disciplinario), establece que las oficinas de control interno disciplinario o quien haga sus veces en las entidades públicas son las encargadas de conocer y fallar en primera instancia los procesos disciplinarios que se adelanten contra sus servidores. La Circular 000017 de 2023 de la DIAN, que actualiza los lineamientos para la gestión de PQRSF, adopta esta disposición, estableciendo que cuando una queja contenga señalamientos que puedan constituir faltas disciplinarias, además de darle el trámite como PQRSF, se debe remitir copia a la Oficina de Control Interno Disciplinario para lo de su competencia."
    },
    {
        id: "pqrsf_020",
        category: "pqrsf",
        difficulty: "baja",
        text: "Un contribuyente presenta una petición ante la DIAN solicitando información sobre los requisitos para inscribirse en el RUT (Registro Único Tributario).",
        question: "De acuerdo con la normativa que regula el sistema PQRSF, ¿la DIAN puede exigir al peticionario que acredite su calidad de abogado o de profesional en áreas afines para responder esta petición?",
        options: [
            "Sí, porque se trata de información técnica que requiere conocimientos especializados",
            "Sí, pero solo si la información solicitada es para un tercero",
            "No, la información sobre trámites y requisitos debe ser accesible a cualquier ciudadano sin exigir calidades especiales",
            "Sí, pero solo si la petición se presenta por medios electrónicos"
        ],
        correctAnswer: 2,
        explanation: "No, la DIAN no puede exigir al peticionario que acredite su calidad de abogado o de profesional en áreas afines para responder esta petición. Esta prohibición está establecida en el artículo 13 de la Ley 1755 de 2015, que dispone: 'Toda persona tiene derecho a presentar peticiones respetuosas a las autoridades, en los términos señalados en este código, por motivos de interés general o particular, y a obtener pronta resolución completa y de fondo sobre la misma. Toda actuación que inicie cualquier persona ante las autoridades implica el ejercicio del derecho de petición consagrado en el artículo 23 de la Constitución Política, sin que sea necesario invocarlo. Mediante él, entre otras actuaciones, se podrá solicitar: el reconocimiento de un derecho, la intervención de una entidad o funcionario, la resolución de una situación jurídica, la prestación de un servicio, requerir información, consultar, examinar y requerir copias de documentos, formular consultas, quejas, denuncias y reclamos e interponer recursos. El ejercicio del derecho de petición es gratuito y puede realizarse sin necesidad de representación a través de abogado, o de persona mayor cuando se trate de menores en relación a las entidades dedicadas a su protección o formación'. La Circular 000017 de 2023 de la DIAN, que actualiza los lineamientos para la gestión de PQRSF, refuerza este principio, estableciendo que no se puede exigir ninguna calidad especial a los peticionarios para el ejercicio del derecho de petición, salvo en los casos expresamente señalados en la ley."
    }
];