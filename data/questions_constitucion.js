// Preguntas sobre Constitución Política
const questions_constitucion = [
    {
        id: "constitucion_001",
        category: "constitucion",
        difficulty: "baja",
        text: "Un funcionario de la DIAN debe tomar una decisión administrativa que podría afectar los derechos fundamentales de un contribuyente.",
        question: "Según la Constitución Política de Colombia, ¿qué principio debe guiar la actuación del funcionario?",
        options: [
            "Principio de eficiencia administrativa",
            "Principio de buena fe",
            "Principio de economía procesal",
            "Principio de celeridad"
        ],
        correctAnswer: 1,
        explanation: "El principio de buena fe debe guiar la actuación del funcionario. Este principio está consagrado en el artículo 83 de la Constitución Política de Colombia, que establece: 'Las actuaciones de los particulares y de las autoridades públicas deberán ceñirse a los postulados de la buena fe, la cual se presumirá en todas las gestiones que aquellos adelanten ante éstas'. La Corte Constitucional, en sentencias como la C-1194 de 2008, ha señalado que este principio implica que tanto los particulares como las autoridades públicas deben actuar con honestidad, lealtad y sinceridad en sus relaciones mutuas. En el contexto de la DIAN, este principio exige que los funcionarios presuman la buena fe de los contribuyentes y actúen con transparencia y rectitud en sus decisiones administrativas, especialmente cuando estas pueden afectar derechos fundamentales."
    },
    {
        id: "constitucion_002",
        category: "constitucion",
        difficulty: "media",
        text: "La DIAN está implementando un nuevo sistema de fiscalización que implica el cruce de información entre diferentes bases de datos para identificar posibles inconsistencias en las declaraciones tributarias.",
        question: "De acuerdo con la Constitución Política, ¿qué derecho fundamental debe respetar especialmente la DIAN al implementar este sistema?",
        options: [
            "Derecho a la igualdad",
            "Derecho al habeas data",
            "Derecho de petición",
            "Derecho al debido proceso"
        ],
        correctAnswer: 1,
        explanation: "La DIAN debe respetar especialmente el derecho al habeas data al implementar un sistema de fiscalización que implica el cruce de información entre diferentes bases de datos. Este derecho está consagrado en el artículo 15 de la Constitución Política, que establece: 'Todas las personas tienen derecho a su intimidad personal y familiar y a su buen nombre, y el Estado debe respetarlos y hacerlos respetar. De igual modo, tienen derecho a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bancos de datos y en archivos de entidades públicas y privadas'. La Corte Constitucional, en sentencias como la C-748 de 2011, ha desarrollado el alcance de este derecho, señalando que incluye la facultad de las personas de conocer, actualizar y rectificar la información que sobre ellas se haya recolectado en bases de datos. En el contexto de la DIAN, esto implica que, aunque la entidad tiene facultades para recolectar y procesar información de los contribuyentes con fines de fiscalización, debe hacerlo respetando los principios de finalidad, necesidad, utilidad y circulación restringida de la información, y garantizando a los contribuyentes el derecho a conocer, actualizar y rectificar la información que sobre ellos se recolecte."
    },
    {
        id: "constitucion_003",
        category: "constitucion",
        difficulty: "alta",
        text: "La DIAN ha expedido una resolución que establece nuevos requisitos para la presentación de declaraciones tributarias. Un contribuyente considera que esta resolución viola sus derechos constitucionales.",
        question: "Según la Constitución Política, ¿qué mecanismo de protección puede utilizar el contribuyente para cuestionar la constitucionalidad de esta resolución?",
        options: [
            "Acción de tutela",
            "Acción de cumplimiento",
            "Acción popular",
            "Acción de nulidad por inconstitucionalidad"
        ],
        correctAnswer: 3,
        explanation: "El mecanismo de protección que puede utilizar el contribuyente para cuestionar la constitucionalidad de la resolución es la acción de nulidad por inconstitucionalidad. Este mecanismo está consagrado en el artículo 237 numeral 2 de la Constitución Política, que establece como función del Consejo de Estado 'conocer de las acciones de nulidad por inconstitucionalidad de los decretos dictados por el Gobierno Nacional, cuya competencia no corresponda a la Corte Constitucional'. Aunque este artículo menciona específicamente los decretos del Gobierno Nacional, la Ley 1437 de 2011 (Código de Procedimiento Administrativo y de lo Contencioso Administrativo) en su artículo 135 amplía el alcance de este mecanismo a los actos administrativos de carácter general expedidos por autoridades del orden nacional, como es el caso de las resoluciones de la DIAN. La acción de nulidad por inconstitucionalidad permite cuestionar directamente la conformidad de un acto administrativo con la Constitución, sin necesidad de agotar previamente la vía gubernativa. La Corte Constitucional, en sentencias como la C-415 de 2012, ha señalado que este mecanismo es una garantía del principio de supremacía constitucional y del derecho de los ciudadanos a cuestionar la validez de las normas que los afectan."
    },
    {
        id: "constitucion_004",
        category: "constitucion",
        difficulty: "media",
        text: "Un funcionario de la DIAN debe decidir sobre una solicitud de devolución de impuestos presentada por un contribuyente.",
        question: "De acuerdo con la Constitución Política, ¿qué principio de la función administrativa debe guiar principalmente esta decisión?",
        options: [
            "Principio de igualdad",
            "Principio de moralidad",
            "Principio de eficacia",
            "Principio de economía"
        ],
        correctAnswer: 2,
        explanation: "El principio de eficacia debe guiar principalmente la decisión del funcionario sobre la solicitud de devolución de impuestos. Este principio está consagrado en el artículo 209 de la Constitución Política, que establece: 'La función administrativa está al servicio de los intereses generales y se desarrolla con fundamento en los principios de igualdad, moralidad, eficacia, economía, celeridad, imparcialidad y publicidad, mediante la descentralización, la delegación y la desconcentración de funciones'. La Corte Constitucional, en sentencias como la C-826 de 2013, ha señalado que el principio de eficacia exige que las autoridades busquen que los procedimientos logren su finalidad, removiendo de oficio los obstáculos puramente formales y evitando decisiones inhibitorias. En el contexto de una solicitud de devolución de impuestos, este principio implica que el funcionario debe orientar su actuación a resolver de fondo la solicitud, garantizando que si el contribuyente tiene derecho a la devolución, esta se haga efectiva sin dilaciones injustificadas o requisitos innecesarios."
    },
    {
        id: "constitucion_005",
        category: "constitucion",
        difficulty: "baja",
        text: "La DIAN ha implementado un programa de fiscalización que se aplica de manera diferente a grandes contribuyentes y a pequeños contribuyentes.",
        question: "Según la Constitución Política, ¿bajo qué condición sería constitucional este trato diferenciado?",
        options: [
            "Si se basa en criterios objetivos y razonables que justifiquen el trato diferente",
            "Si fue aprobado por el Congreso de la República",
            "Si cuenta con el aval del Ministerio de Hacienda",
            "Si se aplica solo por un período limitado"
        ],
        correctAnswer: 0,
        explanation: "El trato diferenciado sería constitucional si se basa en criterios objetivos y razonables que justifiquen el trato diferente. Esta condición se deriva del artículo 13 de la Constitución Política, que establece: 'Todas las personas nacen libres e iguales ante la ley, recibirán la misma protección y trato de las autoridades y gozarán de los mismos derechos, libertades y oportunidades sin ninguna discriminación por razones de sexo, raza, origen nacional o familiar, lengua, religión, opinión política o filosófica'. La Corte Constitucional, en sentencias como la C-183 de 1998 y la C-748 de 2009, ha desarrollado el concepto de igualdad material o sustancial, distinguiéndolo de la igualdad formal, y ha establecido que el principio de igualdad no implica un igualitarismo a ultranza, sino que permite tratos diferenciados cuando existen situaciones distintas que objetivamente justifican un tratamiento diferente. En el caso de un programa de fiscalización, la diferenciación entre grandes y pequeños contribuyentes podría ser constitucional si se basa en criterios como el volumen de operaciones, el nivel de riesgo fiscal, la capacidad económica u otros factores objetivos que justifiquen un tratamiento diferenciado en términos de intensidad o metodología de fiscalización."
    },
    {
        id: "constitucion_006",
        category: "constitucion",
        difficulty: "alta",
        text: "La DIAN ha expedido una circular interpretativa sobre la aplicación de una norma tributaria. Un contribuyente considera que esta interpretación es contraria a la Constitución Política.",
        question: "De acuerdo con la jurisprudencia constitucional, ¿qué característica deben tener las circulares de la DIAN para ser susceptibles de control judicial por parte del Consejo de Estado?",
        options: [
            "Deben haber sido expedidas por el Director General de la DIAN",
            "Deben tener contenido normativo, es decir, crear, modificar o extinguir situaciones jurídicas generales",
            "Deben haber sido publicadas en el Diario Oficial",
            "Deben referirse a impuestos nacionales"
        ],
        correctAnswer: 1,
        explanation: "Las circulares de la DIAN deben tener contenido normativo, es decir, crear, modificar o extinguir situaciones jurídicas generales, para ser susceptibles de control judicial por parte del Consejo de Estado. Esta característica ha sido establecida por la jurisprudencia del Consejo de Estado y de la Corte Constitucional. En sentencias como la C-487 de 1996 y la C-1436 de 2000, la Corte Constitucional ha señalado que no todos los actos que expiden las autoridades administrativas son susceptibles de control judicial, sino solo aquellos que tienen contenido normativo o decisorio. En el caso específico de las circulares, el Consejo de Estado, en sentencias como la del 16 de agosto de 2007 (Radicado 11001-03-27-000-2003-00014-01) y la del 26 de noviembre de 2009 (Radicado 11001-03-27-000-2006-00032-00), ha establecido que estas son controlables judicialmente cuando contienen una decisión de la administración capaz de producir efectos jurídicos frente a los administrados, es decir, cuando crean, modifican o extinguen situaciones jurídicas generales. Por el contrario, las circulares meramente informativas o interpretativas, que se limitan a recordar el contenido de normas existentes o a fijar criterios para su aplicación sin añadir contenido normativo, no son susceptibles de control judicial directo, aunque su aplicación en casos concretos sí puede ser cuestionada."
    },
    {
        id: "constitucion_007",
        category: "constitucion",
        difficulty: "media",
        text: "Un contribuyente ha presentado una acción de tutela contra la DIAN alegando que la entidad ha vulnerado su derecho fundamental de petición al no responder una solicitud dentro del término legal.",
        question: "Según la Constitución Política y la jurisprudencia constitucional, ¿qué elemento es esencial para que se configure la vulneración del derecho de petición?",
        options: [
            "Que la petición haya sido presentada por escrito y con pruebas documentales",
            "Que la petición se refiera a un asunto de competencia de la entidad",
            "Que haya vencido el término legal para responder sin que se haya emitido una respuesta de fondo",
            "Que el peticionario haya agotado previamente la vía gubernativa"
        ],
        correctAnswer: 2,
        explanation: "El elemento esencial para que se configure la vulneración del derecho de petición es que haya vencido el término legal para responder sin que se haya emitido una respuesta de fondo. Este derecho está consagrado en el artículo 23 de la Constitución Política, que establece: 'Toda persona tiene derecho a presentar peticiones respetuosas a las autoridades por motivos de interés general o particular y a obtener pronta resolución'. La Corte Constitucional, en sentencias como la T-377 de 2000, la T-1160A de 2001 y la T-230 de 2020, ha desarrollado el alcance de este derecho, señalando que implica no solo el derecho a presentar peticiones, sino también a recibir una respuesta de fondo, clara, precisa, congruente con lo solicitado y oportuna, es decir, dentro de los términos establecidos por la ley. La Ley 1755 de 2015, que regula el derecho de petición, establece en su artículo 14 los términos para resolver las distintas modalidades de peticiones (15 días para peticiones generales, 10 días para peticiones de información y 30 días para consultas). El vencimiento de estos términos sin que se haya emitido una respuesta de fondo configura la vulneración del derecho fundamental de petición, independientemente de si la petición fue presentada por escrito o verbalmente, si se aportaron o no pruebas documentales, o si se agotó o no la vía gubernativa."
    },
    {
        id: "constitucion_008",
        category: "constitucion",
        difficulty: "baja",
        text: "La DIAN ha implementado un nuevo impuesto mediante una resolución administrativa.",
        question: "De acuerdo con la Constitución Política, ¿esta actuación de la DIAN es constitucional?",
        options: [
            "Sí, porque la DIAN tiene facultades para crear impuestos",
            "Sí, siempre que la resolución haya sido aprobada por el Ministerio de Hacienda",
            "No, porque los impuestos solo pueden ser establecidos por ley",
            "No, porque los impuestos solo pueden ser establecidos por decreto del Presidente"
        ],
        correctAnswer: 2,
        explanation: "La actuación de la DIAN no es constitucional porque los impuestos solo pueden ser establecidos por ley. Este principio de legalidad tributaria está consagrado en el artículo 338 de la Constitución Política, que establece: 'En tiempo de paz, solamente el Congreso, las asambleas departamentales y los concejos distritales y municipales podrán imponer contribuciones fiscales o parafiscales. La ley, las ordenanzas y los acuerdos deben fijar, directamente, los sujetos activos y pasivos, los hechos y las bases gravables, y las tarifas de los impuestos'. La Corte Constitucional, en sentencias como la C-891 de 2012 y la C-260 de 2015, ha reiterado que el principio de legalidad tributaria es una garantía fundamental en el Estado de Derecho, que busca proteger a los ciudadanos contra la arbitrariedad en materia fiscal y asegurar que las cargas tributarias sean establecidas por los órganos de representación popular. La DIAN, como entidad administrativa, no tiene facultades para crear impuestos, sino solo para administrar y recaudar los que hayan sido establecidos por ley. Sus resoluciones pueden reglamentar aspectos procedimentales o técnicos de los impuestos, pero no pueden crear nuevos tributos ni modificar los elementos esenciales de los existentes."
    },
    {
        id: "constitucion_009",
        category: "constitucion",
        difficulty: "alta",
        text: "Un contribuyente ha sido objeto de una sanción por parte de la DIAN por incumplimiento de obligaciones tributarias. El contribuyente alega que la sanción es desproporcionada y viola el principio de proporcionalidad.",
        question: "Según la jurisprudencia constitucional, ¿qué test debe aplicarse para determinar si una sanción tributaria respeta el principio de proporcionalidad?",
        options: [
            "Test de igualdad, que verifica si la sanción se aplica de manera uniforme a todos los contribuyentes",
            "Test de razonabilidad, que examina si la sanción persigue un fin legítimo y si el medio empleado es adecuado para alcanzarlo",
            "Test de legalidad, que verifica si la sanción está expresamente prevista en una ley",
            "Test de temporalidad, que examina si la sanción se aplica dentro del término de caducidad"
        ],
        correctAnswer: 1,
        explanation: "Según la jurisprudencia constitucional, el test que debe aplicarse para determinar si una sanción tributaria respeta el principio de proporcionalidad es el test de razonabilidad, que examina si la sanción persigue un fin legítimo y si el medio empleado es adecuado para alcanzarlo. La Corte Constitucional, en sentencias como la C-022 de 1996, la C-125 de 2003 y la C-799 de 2003, ha desarrollado este test como una herramienta para evaluar la constitucionalidad de las limitaciones a los derechos fundamentales, incluyendo las sanciones administrativas. El test de razonabilidad o proporcionalidad incluye tres subprincipios: (i) idoneidad o adecuación, que examina si la medida es adecuada para alcanzar un fin constitucionalmente legítimo; (ii) necesidad, que verifica si la medida es la menos restrictiva de derechos entre las igualmente eficaces para alcanzar el fin; y (iii) proporcionalidad en sentido estricto, que evalúa si los beneficios de la medida superan sus costos en términos de afectación de derechos. En el contexto tributario, la Corte ha aplicado este test para evaluar la constitucionalidad de sanciones en sentencias como la C-231 de 2003 y la C-571 de 2010, señalando que las sanciones tributarias deben ser proporcionales a la gravedad de la infracción y no pueden ser confiscatorias ni vulnerar el mínimo vital del contribuyente."
    },
    {
        id: "constitucion_010",
        category: "constitucion",
        difficulty: "media",
        text: "La DIAN ha negado una solicitud de devolución de impuestos presentada por un contribuyente extranjero, argumentando que solo los ciudadanos colombianos tienen derecho a este beneficio.",
        question: "De acuerdo con la Constitución Política, ¿esta decisión de la DIAN es constitucional?",
        options: [
            "Sí, porque los extranjeros no tienen los mismos derechos que los colombianos",
            "Sí, porque la devolución de impuestos es un beneficio discrecional del Estado",
            "No, porque viola el principio de igualdad ante la ley",
            "No, porque los tratados internacionales priman sobre la legislación interna"
        ],
        correctAnswer: 2,
        explanation: "La decisión de la DIAN no es constitucional porque viola el principio de igualdad ante la ley. Este principio está consagrado en el artículo 13 de la Constitución Política, que establece: 'Todas las personas nacen libres e iguales ante la ley, recibirán la misma protección y trato de las autoridades y gozarán de los mismos derechos, libertades y oportunidades sin ninguna discriminación por razones de sexo, raza, origen nacional o familiar, lengua, religión, opinión política o filosófica'. Además, el artículo 100 de la Constitución establece que 'los extranjeros disfrutarán en Colombia de los mismos derechos civiles que se conceden a los colombianos' y que 'los derechos políticos se reservan a los nacionales, pero la ley podrá conceder a los extranjeros residentes en Colombia el derecho al voto en las elecciones y consultas populares de carácter municipal o distrital'. La Corte Constitucional, en sentencias como la C-913 de 2003 y la C-385 de 2000, ha señalado que la nacionalidad no puede ser un criterio para establecer diferencias en el reconocimiento y protección de derechos civiles, como los relacionados con obligaciones tributarias. En el caso específico de la devolución de impuestos, si un contribuyente extranjero ha pagado impuestos en exceso o indebidamente, tiene el mismo derecho que un colombiano a solicitar su devolución, y negarla exclusivamente por su nacionalidad constituiría una discriminación injustificada."
    },
    {
        id: "constitucion_011",
        category: "constitucion",
        difficulty: "baja",
        text: "Un funcionario de la DIAN ha sido designado para participar en la elaboración de un proyecto de ley sobre reforma tributaria.",
        question: "Según la Constitución Política, ¿quién tiene la iniciativa legislativa en materia tributaria?",
        options: [
            "Exclusivamente el Presidente de la República",
            "El Congreso de la República y el Gobierno Nacional",
            "El Ministro de Hacienda y Crédito Público",
            "La DIAN como autoridad tributaria"
        ],
        correctAnswer: 1,
        explanation: "Según la Constitución Política, la iniciativa legislativa en materia tributaria corresponde al Congreso de la República y al Gobierno Nacional. El artículo 154 de la Constitución establece: 'Las leyes pueden tener origen en cualquiera de las Cámaras a propuesta de sus respectivos miembros, del Gobierno Nacional, de las entidades señaladas en el artículo 156, o por iniciativa popular en los casos previstos en la Constitución'. Sin embargo, el mismo artículo establece algunas restricciones: 'No obstante, sólo podrán ser dictadas o reformadas por iniciativa del Gobierno las leyes a que se refieren los numerales 3, 7, 9, 11 y 22 y los literales a, b y e, del numeral 19 del artículo 150; las que ordenen participaciones en las rentas nacionales o transferencias de las mismas; las que autoricen aportes o suscripciones del Estado a empresas industriales o comerciales y las que decreten exenciones de impuestos, contribuciones o tasas nacionales'. Esto significa que, en general, las leyes tributarias pueden ser propuestas tanto por el Congreso como por el Gobierno, pero las leyes que decreten exenciones de impuestos, contribuciones o tasas nacionales solo pueden ser dictadas o reformadas por iniciativa del Gobierno. La Corte Constitucional, en sentencias como la C-1707 de 2000 y la C-932 de 2006, ha aclarado el alcance de esta restricción, señalando que no toda regulación en materia tributaria está sujeta a la iniciativa exclusiva del Gobierno, sino solo aquellas que específicamente decreten exenciones."
    },
    {
        id: "constitucion_012",
        category: "constitucion",
        difficulty: "alta",
        text: "La DIAN ha expedido una resolución que establece un procedimiento especial para la fiscalización de grandes contribuyentes. Un contribuyente alega que esta resolución viola el principio de reserva de ley en materia tributaria.",
        question: "De acuerdo con la jurisprudencia constitucional, ¿qué aspectos del sistema tributario están cubiertos por el principio de reserva de ley y no pueden ser regulados por resoluciones administrativas?",
        options: [
            "Solo la creación de nuevos impuestos",
            "Solo la determinación de los elementos esenciales de los tributos",
            "Los elementos esenciales de los tributos y las sanciones tributarias",
            "Cualquier aspecto relacionado con obligaciones tributarias"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con la jurisprudencia constitucional, los aspectos del sistema tributario que están cubiertos por el principio de reserva de ley y no pueden ser regulados por resoluciones administrativas son los elementos esenciales de los tributos y las sanciones tributarias. Este principio se deriva de los artículos 150 numeral 12 y 338 de la Constitución Política. El artículo 150 numeral 12 establece que corresponde al Congreso 'establecer contribuciones fiscales y, excepcionalmente, contribuciones parafiscales en los casos y bajo las condiciones que establezca la ley'. El artículo 338 dispone que 'en tiempo de paz, solamente el Congreso, las asambleas departamentales y los concejos distritales y municipales podrán imponer contribuciones fiscales o parafiscales. La ley, las ordenanzas y los acuerdos deben fijar, directamente, los sujetos activos y pasivos, los hechos y las bases gravables, y las tarifas de los impuestos'. La Corte Constitucional, en sentencias como la C-583 de 1996, la C-690 de 2003 y la C-260 de 2015, ha señalado que el principio de reserva de ley en materia tributaria implica que los elementos esenciales de los tributos (sujetos activo y pasivo, hecho generador, base gravable y tarifa) y las sanciones tributarias deben ser establecidos directamente por la ley, y no pueden ser delegados al ejecutivo ni a las autoridades administrativas. Sin embargo, la Corte también ha reconocido que aspectos procedimentales o técnicos del sistema tributario pueden ser regulados por normas administrativas, siempre que exista una habilitación legal previa y que la regulación se mantenga dentro de los parámetros establecidos por la ley."
    },
    {
        id: "constitucion_013",
        category: "constitucion",
        difficulty: "media",
        text: "Un contribuyente ha presentado una demanda de inconstitucionalidad contra una ley tributaria, alegando que viola el principio de irretroactividad de la ley tributaria.",
        question: "Según la Constitución Política y la jurisprudencia constitucional, ¿en qué consiste el principio de irretroactividad de la ley tributaria?",
        options: [
            "En que las leyes tributarias no pueden aplicarse a hechos ocurridos antes de su vigencia",
            "En que las leyes tributarias solo pueden ser modificadas cada cuatro años",
            "En que las leyes tributarias no pueden establecer impuestos sobre hechos que ya fueron gravados",
            "En que las leyes tributarias no pueden ser más gravosas que las anteriores"
        ],
        correctAnswer: 0,
        explanation: "El principio de irretroactividad de la ley tributaria consiste en que las leyes tributarias no pueden aplicarse a hechos ocurridos antes de su vigencia. Este principio se deriva del artículo 363 de la Constitución Política, que establece: 'El sistema tributario se funda en los principios de equidad, eficiencia y progresividad. Las leyes tributarias no se aplicarán con retroactividad'. La Corte Constitucional, en sentencias como la C-549 de 1993, la C-527 de 1996 y la C-006 de 1998, ha señalado que este principio busca garantizar la seguridad jurídica y la confianza legítima de los contribuyentes, permitiéndoles conocer con anticipación las consecuencias tributarias de sus actos. La irretroactividad implica que las leyes tributarias solo pueden aplicarse a hechos generadores que ocurran después de su entrada en vigencia, y no a hechos pasados, aunque sus efectos se prolonguen en el tiempo. Sin embargo, la Corte también ha reconocido excepciones a este principio, como en el caso de las leyes tributarias más favorables al contribuyente (principio de favorabilidad) o en situaciones excepcionales como estados de emergencia económica."
    },
    {
        id: "constitucion_014",
        category: "constitucion",
        difficulty: "baja",
        text: "La DIAN ha expedido una resolución que establece un nuevo formulario para la declaración de renta. Un contribuyente considera que este formulario es demasiado complejo y viola sus derechos.",
        question: "De acuerdo con la Constitución Política, ¿qué mecanismo puede utilizar el contribuyente para solicitar la protección de sus derechos si considera que la complejidad del formulario le impide cumplir adecuadamente con sus obligaciones tributarias?",
        options: [
            "Acción de tutela",
            "Derecho de petición",
            "Acción popular",
            "Acción de grupo"
        ],
        correctAnswer: 1,
        explanation: "El mecanismo que puede utilizar el contribuyente para solicitar la protección de sus derechos es el derecho de petición. Este derecho está consagrado en el artículo 23 de la Constitución Política, que establece: 'Toda persona tiene derecho a presentar peticiones respetuosas a las autoridades por motivos de interés general o particular y a obtener pronta resolución'. La Ley 1755 de 2015, que regula el derecho de petición, establece en su artículo 13 que 'toda persona tiene derecho a presentar peticiones respetuosas a las autoridades, en los términos señalados en este código, por motivos de interés general o particular, y a obtener pronta resolución completa y de fondo sobre la misma'. El derecho de petición es el mecanismo idóneo para solicitar a la DIAN que reconsidere el diseño del formulario, explique su complejidad o brinde orientación sobre cómo completarlo correctamente. La acción de tutela no sería procedente en este caso, salvo que se demuestre la vulneración de un derecho fundamental y la inexistencia de otro mecanismo de defensa judicial, o la existencia de un perjuicio irremediable. La acción popular está diseñada para proteger derechos e intereses colectivos, y la acción de grupo para obtener el reconocimiento y pago de indemnizaciones por perjuicios sufridos por un grupo de personas, ninguno de los cuales aplica directamente a esta situación."
    },
    {
        id: "constitucion_015",
        category: "constitucion",
        difficulty: "alta",
        text: "El Congreso ha aprobado una ley que establece un impuesto con efecto confiscatorio sobre ciertos bienes.",
        question: "Según la Constitución Política y la jurisprudencia constitucional, ¿por qué sería inconstitucional un impuesto con efecto confiscatorio?",
        options: [
            "Porque viola el principio de progresividad tributaria",
            "Porque solo el Presidente puede establecer impuestos confiscatorios mediante decretos de emergencia",
            "Porque viola el derecho a la propiedad privada y la prohibición de confiscación",
            "Porque los impuestos solo pueden tener fines recaudatorios, no sancionatorios"
        ],
        correctAnswer: 2,
        explanation: "Un impuesto con efecto confiscatorio sería inconstitucional porque viola el derecho a la propiedad privada y la prohibición de confiscación. El artículo 58 de la Constitución Política establece: 'Se garantizan la propiedad privada y los demás derechos adquiridos con arreglo a las leyes civiles, los cuales no pueden ser desconocidos ni vulnerados por leyes posteriores'. Aunque este mismo artículo reconoce la función social de la propiedad y la posibilidad de expropiación por motivos de utilidad pública o interés social, establece que esto debe hacerse 'mediante sentencia judicial e indemnización previa'. Por su parte, el artículo 34 de la Constitución prohíbe expresamente la confiscación: 'Se prohíben las penas de destierro, prisión perpetua y confiscación'. La Corte Constitucional, en sentencias como la C-409 de 1996 y la C-776 de 2003, ha señalado que aunque el Estado tiene amplias facultades para establecer tributos, estos no pueden ser confiscatorios, es decir, no pueden absorber una parte sustancial de la propiedad o de la renta del contribuyente hasta el punto de anular el derecho de propiedad. Un impuesto es confiscatorio cuando la carga tributaria es tan alta que resulta irrazonable, desproporcionada o inequitativa, afectando la capacidad económica del contribuyente y su derecho a la propiedad privada."
    },
    {
        id: "constitucion_016",
        category: "constitucion",
        difficulty: "media",
        text: "La DIAN ha iniciado un proceso de fiscalización contra un contribuyente y ha solicitado información sobre sus movimientos financieros a varias entidades bancarias.",
        question: "De acuerdo con la Constitución Política, ¿bajo qué condición puede la DIAN acceder a la información financiera de los contribuyentes sin violar su derecho a la intimidad?",
        options: [
            "Solo con autorización judicial previa",
            "Solo con consentimiento expreso del contribuyente",
            "En cualquier caso, pues la información financiera no está protegida por el derecho a la intimidad",
            "Cuando exista una ley que lo autorice para fines tributarios, respetando el debido proceso"
        ],
        correctAnswer: 3,
        explanation: "La DIAN puede acceder a la información financiera de los contribuyentes sin violar su derecho a la intimidad cuando exista una ley que lo autorice para fines tributarios, respetando el debido proceso. Esta condición se deriva de una interpretación armónica de los artículos 15 y 95 numeral 9 de la Constitución Política. El artículo 15 establece: 'Todas las personas tienen derecho a su intimidad personal y familiar y a su buen nombre, y el Estado debe respetarlos y hacerlos respetar. De igual modo, tienen derecho a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bancos de datos y en archivos de entidades públicas y privadas'. Sin embargo, este mismo artículo establece que 'para efectos tributarios o judiciales y para los casos de inspección, vigilancia e intervención del Estado podrá exigirse la presentación de libros de contabilidad y demás documentos privados, en los términos que señale la ley'. Por su parte, el artículo 95 numeral 9 establece como deber de la persona y del ciudadano 'contribuir al financiamiento de los gastos e inversiones del Estado dentro de conceptos de justicia y equidad'. La Corte Constitucional, en sentencias como la C-489 de 1995, la T-729 de 2002 y la C-1147 de 2001, ha señalado que aunque la información financiera está protegida por el derecho a la intimidad, este derecho no es absoluto y puede ser limitado para garantizar otros valores constitucionales, como el deber de contribuir al financiamiento del Estado. Sin embargo, esta limitación debe estar establecida en una ley, perseguir un fin legítimo y respetar el principio de proporcionalidad."
    },
    {
        id: "constitucion_017",
        category: "constitucion",
        difficulty: "baja",
        text: "Un contribuyente ha recibido una liquidación oficial de la DIAN que modifica su declaración de renta y le impone una sanción.",
        question: "Según la Constitución Política, ¿qué derecho fundamental debe garantizarse al contribuyente en este proceso administrativo?",
        options: [
            "Derecho a la igualdad",
            "Derecho al debido proceso",
            "Derecho a la libertad",
            "Derecho a la intimidad"
        ],
        correctAnswer: 1,
        explanation: "El derecho fundamental que debe garantizarse al contribuyente en este proceso administrativo es el derecho al debido proceso. Este derecho está consagrado en el artículo 29 de la Constitución Política, que establece: 'El debido proceso se aplicará a toda clase de actuaciones judiciales y administrativas. Nadie podrá ser juzgado sino conforme a leyes preexistentes al acto que se le imputa, ante juez o tribunal competente y con observancia de la plenitud de las formas propias de cada juicio'. La Corte Constitucional, en sentencias como la C-980 de 2010 y la C-034 de 2014, ha señalado que el debido proceso administrativo es una manifestación del debido proceso constitucional, y comprende una serie de garantías como el derecho a conocer el inicio de la actuación, a ser oído durante el trámite, a ser notificado en debida forma, a que se adelante por la autoridad competente y con pleno respeto de las formas propias de cada juicio, a que no se presenten dilaciones injustificadas, a gozar de la presunción de inocencia, a ejercer los derechos de defensa y contradicción, a presentar pruebas y a controvertir las que se alleguen en su contra, y a que se evalúen las pruebas aportadas y se resuelva de fondo sobre los asuntos objeto de decisión. En el contexto tributario, la Corte ha enfatizado la importancia del debido proceso en sentencias como la C-506 de 2002 y la C-1201 de 2003, señalando que las actuaciones de la administración tributaria deben respetar estas garantías, especialmente cuando imponen sanciones o modifican las declaraciones de los contribuyentes."
    },
    {
        id: "constitucion_018",
        category: "constitucion",
        difficulty: "alta",
        text: "El Congreso ha aprobado una ley que establece un impuesto sobre la renta con tarifas diferenciales según el nivel de ingresos de los contribuyentes, siendo más altas para quienes tienen mayores ingresos.",
        question: "De acuerdo con la Constitución Política, ¿qué principio del sistema tributario justifica principalmente esta estructura tarifaria?",
        options: [
            "Principio de equidad",
            "Principio de eficiencia",
            "Principio de progresividad",
            "Principio de legalidad"
        ],
        correctAnswer: 2,
        explanation: "El principio del sistema tributario que justifica principalmente una estructura tarifaria con tasas más altas para quienes tienen mayores ingresos es el principio de progresividad. Este principio está consagrado en el artículo 363 de la Constitución Política, que establece: 'El sistema tributario se funda en los principios de equidad, eficiencia y progresividad. Las leyes tributarias no se aplicarán con retroactividad'. La Corte Constitucional, en sentencias como la C-419 de 1995, la C-643 de 2002 y la C-100 de 2014, ha señalado que el principio de progresividad tributaria refleja la idea de que quienes tienen mayor capacidad económica deben contribuir en mayor proporción al financiamiento de los gastos del Estado. Este principio busca que el sistema tributario sea justo, haciendo que el sacrificio fiscal sea relativamente igual para todos los contribuyentes, lo que implica que quienes tienen más deben pagar proporcionalmente más. La progresividad se materializa típicamente a través de tarifas escalonadas según niveles de ingreso o riqueza, como en el caso del impuesto sobre la renta con tarifas marginales crecientes. Aunque el principio de equidad también está relacionado con esta estructura tarifaria, la progresividad es el principio que específicamente justifica la diferenciación tarifaria según la capacidad económica."
    },
    {
        id: "constitucion_019",
        category: "constitucion",
        difficulty: "media",
        text: "La DIAN ha expedido una resolución que establece un plazo de 6 meses para que los contribuyentes actualicen su Registro Único Tributario (RUT). Un contribuyente considera que este plazo es demasiado corto y viola sus derechos.",
        question: "De acuerdo con la jurisprudencia constitucional, ¿qué principio debe respetar la DIAN al establecer plazos para el cumplimiento de obligaciones tributarias?",
        options: [
            "Principio de anualidad",
            "Principio de razonabilidad",
            "Principio de inmediatez",
            "Principio de especialidad"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con la jurisprudencia constitucional, la DIAN debe respetar el principio de razonabilidad al establecer plazos para el cumplimiento de obligaciones tributarias. Este principio, aunque no está expresamente mencionado en la Constitución, ha sido desarrollado por la Corte Constitucional como un componente esencial del Estado de Derecho y del debido proceso. En sentencias como la C-1114 de 2003, la C-1201 de 2003 y la C-690 de 2003, la Corte ha señalado que las actuaciones de la administración tributaria, incluyendo el establecimiento de plazos, deben ser razonables y proporcionadas, es decir, deben perseguir un fin legítimo y utilizar medios adecuados y necesarios para alcanzarlo, sin imponer cargas excesivas a los contribuyentes. Un plazo razonable es aquel que permite a los contribuyentes cumplir efectivamente con sus obligaciones, considerando factores como la complejidad del trámite, el número de personas afectadas, la capacidad operativa de la administración y las consecuencias del incumplimiento. Si un plazo es demasiado corto y hace prácticamente imposible el cumplimiento de la obligación, podría considerarse irrazonable y, por tanto, violatorio del debido proceso administrativo."
    },
    {
        id: "constitucion_020",
        category: "constitucion",
        difficulty: "baja",
        text: "Un contribuyente ha presentado una acción de tutela contra la DIAN alegando que la entidad ha vulnerado su derecho fundamental a la igualdad al aplicarle un tratamiento tributario diferente al de otros contribuyentes en situaciones similares.",
        question: "Según la Constitución Política, ¿en qué artículo se consagra el derecho a la igualdad?",
        options: [
            "Artículo 11",
            "Artículo 13",
            "Artículo 15",
            "Artículo 29"
        ],
        correctAnswer: 1,
        explanation: "El derecho a la igualdad se consagra en el artículo 13 de la Constitución Política de Colombia, que establece: 'Todas las personas nacen libres e iguales ante la ley, recibirán la misma protección y trato de las autoridades y gozarán de los mismos derechos, libertades y oportunidades sin ninguna discriminación por razones de sexo, raza, origen nacional o familiar, lengua, religión, opinión política o filosófica. El Estado promoverá las condiciones para que la igualdad sea real y efectiva y adoptará medidas en favor de grupos discriminados o marginados. El Estado protegerá especialmente a aquellas personas que por su condición económica, física o mental, se encuentren en circunstancia de debilidad manifiesta y sancionará los abusos o maltratos que contra ellas se cometan'. Este artículo consagra tanto la igualdad formal ante la ley como la igualdad material o sustancial, que implica el deber del Estado de promover condiciones para que la igualdad sea real y efectiva. En el contexto tributario, la Corte Constitucional, en sentencias como la C-183 de 1998 y la C-748 de 2009, ha señalado que el principio de igualdad exige que situaciones económicamente iguales sean tratadas de la misma manera, y que situaciones económicamente desiguales sean tratadas de manera diferente, siempre que la diferenciación se base en criterios objetivos y razonables."
    }
];