// Preguntas sobre Ley de Transparencia
const questions_transparencia = [
    {
        id: "transparencia_001",
        category: "transparencia",
        difficulty: "media",
        text: "Un ciudadano solicita a la DIAN información sobre los criterios utilizados para seleccionar a los contribuyentes que serán objeto de fiscalización en un programa específico de control tributario.",
        question: "Según la Ley de Transparencia y Acceso a la Información Pública (Ley 1712 de 2014) y sus actualizaciones vigentes en 2025, ¿cómo debe proceder la entidad ante esta solicitud?",
        options: [
            "Debe negar la solicitud, ya que toda la información relacionada con procesos de fiscalización es reservada por su naturaleza.",
            "Debe entregar la información completa, incluyendo los nombres de los contribuyentes seleccionados, en cumplimiento del principio de máxima publicidad.",
            "Debe proporcionar información general sobre los criterios de selección, metodologías y objetivos del programa, omitiendo información que pueda comprometer la efectividad de los procesos de fiscalización o datos específicos protegidos por reserva tributaria.",
            "Debe remitir la solicitud al Ministerio de Hacienda por ser el organismo competente para decidir sobre la publicidad de esta información."
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con la Ley 1712 de 2014 (Ley de Transparencia y Acceso a la Información Pública), sus decretos reglamentarios y las actualizaciones vigentes en 2025, la DIAN debe proporcionar información general sobre los criterios de selección, metodologías y objetivos del programa, omitiendo información que pueda comprometer la efectividad de los procesos de fiscalización o datos específicos protegidos por reserva tributaria. El artículo 18 de la Ley 1712 establece como excepción al acceso a la información pública aquella que pueda 'dañar la estabilidad macroeconómica y financiera del país' o afectar 'el debido proceso e igualdad de las partes en los procesos judiciales'. La Sentencia C-951 de 2014 de la Corte Constitucional determinó que el acceso a la información pública puede limitarse cuando exista un riesgo presente, probable y específico de dañar el interés público protegido. En este caso, revelar detalles específicos de los mecanismos de selección podría comprometer la efectividad de los procesos de fiscalización, mientras que los datos individuales de contribuyentes están protegidos por la reserva tributaria establecida en el artículo 583 del Estatuto Tributario."
    },
    {
        id: "transparencia_002",
        category: "transparencia",
        difficulty: "alta",
        text: "La DIAN está desarrollando un nuevo sistema de inteligencia artificial para la detección de patrones de evasión fiscal. Un periodista solicita, mediante derecho de petición, acceso al código fuente, los algoritmos utilizados y las bases de datos que alimentan el sistema.",
        question: "Según la Ley de Transparencia y Acceso a la Información Pública (Ley 1712 de 2014), la Ley de Protección de Datos Personales (Ley 1581 de 2012) y sus actualizaciones vigentes en 2025, ¿cuál es la respuesta correcta a esta solicitud?",
        options: [
            "Debe entregarse toda la información solicitada, ya que los sistemas desarrollados con recursos públicos deben ser completamente transparentes.",
            "Debe negarse completamente la solicitud por tratarse de información sensible relacionada con procesos de fiscalización.",
            "Debe proporcionarse información general sobre el funcionamiento del sistema, sus objetivos y mecanismos de protección de derechos, pero puede clasificarse como reservada la información específica sobre algoritmos y código fuente cuya divulgación podría comprometer la efectividad del sistema, así como negarse el acceso a bases de datos que contengan información personal o tributaria protegida por reserva legal.",
            "Debe consultarse previamente al Ministerio de Tecnologías de la Información y las Comunicaciones, por ser la entidad competente para decidir sobre la publicidad de sistemas de inteligencia artificial gubernamentales."
        ],
        correctAnswer: 2,
        explanation: "Según la Ley 1712 de 2014 (Ley de Transparencia), la Ley 1581 de 2012 (Protección de Datos Personales), la Ley 2213 de 2022 (Ley de Inteligencia Artificial en el Sector Público) y sus actualizaciones vigentes en 2025, la respuesta correcta implica proporcionar información general sobre el funcionamiento del sistema, sus objetivos y mecanismos de protección de derechos, pero puede clasificarse como reservada la información específica sobre algoritmos y código fuente cuya divulgación podría comprometer la efectividad del sistema, así como negarse el acceso a bases de datos que contengan información personal o tributaria protegida por reserva legal. El artículo 18 de la Ley 1712 establece como excepción al acceso a la información pública aquella que pueda afectar la eficacia de los métodos de control. La Sentencia T-729 de 2022 de la Corte Constitucional estableció que los sistemas de inteligencia artificial utilizados por entidades públicas deben ser transparentes en cuanto a sus objetivos y funcionamiento general, pero reconoció que ciertos detalles técnicos pueden ser reservados cuando su divulgación comprometa la efectividad de los sistemas. Adicionalmente, las bases de datos que alimentan el sistema contienen información protegida por la reserva tributaria (artículo 583 del Estatuto Tributario) y la protección de datos personales (Ley 1581 de 2012), por lo que no pueden ser divulgadas."
    },
    {
        id: "transparencia_003",
        category: "transparencia",
        difficulty: "media",
        text: "Un funcionario de la DIAN recibe una solicitud de información sobre una investigación en curso por presunta evasión fiscal contra una empresa reconocida. La solicitud es presentada por un competidor directo de la empresa investigada.",
        question: "Según la Ley de Transparencia y Acceso a la Información Pública (Ley 1712 de 2014), el Estatuto Tributario y sus actualizaciones vigentes en 2025, ¿cómo debe proceder el funcionario?",
        options: [
            "Debe entregar la información solicitada, ya que la Ley de Transparencia prevalece sobre cualquier reserva tributaria.",
            "Debe negar la solicitud invocando la reserva de las declaraciones tributarias y los procesos de fiscalización en curso, informando al solicitante sobre los fundamentos jurídicos de la reserva.",
            "Debe consultar con la empresa investigada si autoriza la entrega de la información antes de tomar una decisión.",
            "Debe entregar la información pero advirtiendo al solicitante sobre la prohibición de utilizarla para fines comerciales."
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el artículo 583 del Estatuto Tributario y el artículo 19 de la Ley 1712 de 2014 (Ley de Transparencia), vigentes en 2025, el funcionario debe negar la solicitud invocando la reserva de las declaraciones tributarias y los procesos de fiscalización en curso, informando al solicitante sobre los fundamentos jurídicos de la reserva. El artículo 583 del Estatuto Tributario establece que 'la información tributaria respecto de las bases gravables y la determinación privada de los impuestos que figuren en las declaraciones tributarias tendrá el carácter de información reservada'. Asimismo, el artículo 19 de la Ley 1712 reconoce como información clasificada aquella que pertenece al ámbito privado o particular de una persona natural o jurídica y cuyo acceso puede ser negado o exceptuado cuando pueda causar un daño a los derechos de personas naturales o jurídicas. La Sentencia C-602 de 2015 de la Corte Constitucional confirmó la constitucionalidad de la reserva tributaria como una excepción legítima al derecho de acceso a la información pública. Adicionalmente, entregar información sobre una investigación en curso a un competidor directo podría vulnerar los derechos al debido proceso y a la presunción de inocencia de la empresa investigada, así como potencialmente afectar su reputación comercial."
    },
    {
        id: "transparencia_004",
        category: "transparencia",
        difficulty: "baja",
        text: "Un ciudadano solicita a la DIAN información estadística sobre el número de contribuyentes por sector económico, montos de recaudo y principales tributos durante los últimos cinco años.",
        question: "Según la Ley de Transparencia y Acceso a la Información Pública (Ley 1712 de 2014) y sus actualizaciones vigentes en 2025, ¿cómo debe proceder la entidad ante esta solicitud?",
        options: [
            "Debe negar la solicitud por tratarse de información agregada que podría revelar indirectamente datos de contribuyentes específicos.",
            "Debe entregar la información solicitada, ya que se trata de datos estadísticos agregados que no están sujetos a reserva y son de interés público.",
            "Debe entregar la información solo si el solicitante demuestra un interés legítimo relacionado con investigación académica o periodística.",
            "Debe remitir la solicitud al DANE por ser la entidad competente para proporcionar información estadística oficial."
        ],
        correctAnswer: 1,
        explanation: "Según la Ley 1712 de 2014 (Ley de Transparencia y Acceso a la Información Pública) y sus actualizaciones vigentes en 2025, la DIAN debe entregar la información estadística solicitada, ya que se trata de datos agregados que no están sujetos a reserva y son de interés público. El artículo 3 de la Ley 1712 establece el principio de máxima publicidad, según el cual 'toda información en posesión, bajo control o custodia de un sujeto obligado es pública y no podrá ser reservada o limitada sino por disposición constitucional o legal'. El artículo 9 de la misma ley obliga a las entidades públicas a publicar proactivamente información sobre su gestión, incluyendo datos estadísticos. La información estadística agregada sobre recaudo, número de contribuyentes por sector y principales tributos no revela datos individuales protegidos por la reserva tributaria del artículo 583 del Estatuto Tributario. La Sentencia T-161 de 2019 de la Corte Constitucional reafirmó que la información estadística agregada que produce el Estado es de carácter público y debe ser accesible a los ciudadanos sin necesidad de demostrar un interés particular."
    },
    {
        id: "transparencia_005",
        category: "transparencia",
        difficulty: "alta",
        text: "La DIAN ha celebrado un convenio con una entidad privada para el desarrollo de un software especializado en análisis de riesgo tributario. Un ciudadano solicita acceso al texto completo del convenio, incluyendo los anexos técnicos que detallan las metodologías de análisis de riesgo que se implementarán.",
        question: "Según la Ley de Transparencia y Acceso a la Información Pública (Ley 1712 de 2014), la normativa de contratación estatal y sus actualizaciones vigentes en 2025, ¿cuál es la respuesta correcta a esta solicitud?",
        options: [
            "Debe negarse completamente la solicitud por tratarse de un convenio que involucra metodologías de fiscalización que son reservadas por naturaleza.",
            "Debe entregarse únicamente la información general del convenio (partes, objeto, valor, plazo), omitiendo los anexos técnicos por contener información reservada relacionada con metodologías de fiscalización.",
            "Debe entregarse toda la información solicitada, incluyendo los anexos técnicos, ya que todos los contratos y convenios estatales son públicos sin excepción.",
            "Debe consultarse previamente a la entidad privada si autoriza la entrega de la información, ya que el convenio podría contener secretos comerciales protegidos."
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con la Ley 1712 de 2014 (Ley de Transparencia), la Ley 80 de 1993 (Estatuto General de Contratación) y sus actualizaciones vigentes en 2025, la respuesta correcta es entregar únicamente la información general del convenio (partes, objeto, valor, plazo), omitiendo los anexos técnicos por contener información reservada relacionada con metodologías de fiscalización. El artículo 10 de la Ley 1712 establece la obligación de publicar información sobre contratación pública, y el artículo 74 de la Ley 80 determina que los contratos estatales son públicos, salvo las excepciones constitucionales y legales. Sin embargo, el artículo 18 de la Ley 1712 establece como excepción al acceso a la información pública aquella que pueda 'dañar la estabilidad macroeconómica y financiera del país' o afectar 'la eficacia de los métodos de control'. La Sentencia C-274 de 2013 de la Corte Constitucional confirmó que la reserva de información puede aplicarse a partes específicas de un documento cuando su divulgación pueda causar daño a intereses públicos legítimos. En este caso, los anexos técnicos que detallan metodologías de análisis de riesgo tributario podrían comprometer la efectividad de los procesos de fiscalización si fueran divulgados, mientras que la información general del convenio (partes, objeto, valor, plazo) debe ser pública en cumplimiento de los principios de transparencia y publicidad en la contratación estatal."
    },
    {
        id: "transparencia_006",
        category: "transparencia",
        difficulty: "media",
        text: "Un periodista solicita a la DIAN información sobre los beneficios tributarios otorgados a empresas de un sector específico durante los últimos tres años, incluyendo los montos individuales por empresa y los fundamentos de cada decisión.",
        question: "Según la Ley de Transparencia y Acceso a la Información Pública (Ley 1712 de 2014), el Estatuto Tributario y sus actualizaciones vigentes en 2025, ¿cuál es la respuesta correcta a esta solicitud?",
        options: [
            "Debe negarse completamente la solicitud por tratarse de información protegida por la reserva tributaria.",
            "Debe entregarse toda la información solicitada, incluyendo los montos individuales por empresa, ya que los beneficios tributarios constituyen una excepción a la reserva tributaria por involucrar recursos públicos.",
            "Debe proporcionarse información agregada sobre los beneficios tributarios otorgados al sector (montos totales, número de empresas beneficiadas, criterios generales), sin revelar datos individuales de los contribuyentes que están protegidos por la reserva tributaria.",
            "Debe entregarse la información solo si el periodista demuestra que la investigación tiene un interés público superior."
        ],
        correctAnswer: 2,
        explanation: "Según el artículo 583 del Estatuto Tributario y la Ley 1712 de 2014 (Ley de Transparencia), vigentes en 2025, la respuesta correcta es proporcionar información agregada sobre los beneficios tributarios otorgados al sector (montos totales, número de empresas beneficiadas, criterios generales), sin revelar datos individuales de los contribuyentes que están protegidos por la reserva tributaria. El artículo 583 del Estatuto Tributario establece que 'la información tributaria respecto de las bases gravables y la determinación privada de los impuestos que figuren en las declaraciones tributarias tendrá el carácter de información reservada', lo que incluye los beneficios tributarios específicos aplicados por cada contribuyente. Sin embargo, el artículo 9 de la Ley 1712 obliga a las entidades públicas a publicar proactivamente información sobre su gestión, incluyendo datos estadísticos. La Sentencia C-602 de 2015 de la Corte Constitucional confirmó la constitucionalidad de la reserva tributaria, pero también estableció que esta no puede extenderse a información agregada que no permita identificar a contribuyentes específicos. La Ley 2010 de 2019 y sus actualizaciones reforzaron la transparencia en materia de beneficios tributarios, exigiendo la publicación de información agregada sobre su impacto fiscal, pero manteniendo la reserva sobre datos individuales."
    },
    {
        id: "transparencia_007",
        category: "transparencia",
        difficulty: "baja",
        text: "Un ciudadano presenta una solicitud de acceso a información pública ante la DIAN. Transcurridos 15 días hábiles desde la presentación de la solicitud, la entidad aún no ha emitido respuesta.",
        question: "Según la Ley de Transparencia y Acceso a la Información Pública (Ley 1712 de 2014), la Ley 1755 de 2015 y sus actualizaciones vigentes en 2025, ¿qué consecuencia jurídica se produce en este caso?",
        options: [
            "Se configura un silencio administrativo negativo, entendiendo que la solicitud ha sido rechazada.",
            "Se configura un silencio administrativo positivo, entendiendo que la solicitud ha sido aceptada y la información debe ser entregada.",
            "El ciudadano debe presentar nuevamente la solicitud, ya que la primera se considera desistida por vencimiento del plazo de respuesta.",
            "La entidad puede extender automáticamente el plazo por 15 días hábiles adicionales sin necesidad de notificación al solicitante."
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el artículo 14 de la Ley 1755 de 2015 (que regula el Derecho de Petición) y el artículo 26 de la Ley 1712 de 2014 (Ley de Transparencia), vigentes en 2025, cuando una solicitud de acceso a información pública no es respondida dentro del término legal de 10 días hábiles (prorrogables hasta por 10 días más cuando no sea posible responder en el plazo inicial, informando al solicitante antes del vencimiento del primer plazo), se configura un silencio administrativo positivo. Esto significa que se entiende que la solicitud ha sido aceptada y la información debe ser entregada. El artículo 26 de la Ley 1712 establece específicamente que 'si la persona interesada en ejercer el derecho a la información pública no recibe respuesta a su solicitud dentro del término legal, se entenderá, para todos los efectos legales, que la respectiva solicitud ha sido aceptada y, por consiguiente, la administración ya no podrá negar la entrega de dicha información'. La Sentencia T-114 de 2018 de la Corte Constitucional reafirmó que el silencio administrativo positivo en materia de acceso a la información pública es una garantía para el ciudadano frente a la inactividad de la administración."
    },
    {
        id: "transparencia_008",
        category: "transparencia",
        difficulty: "alta",
        text: "La DIAN ha desarrollado un nuevo índice de riesgo fiscal que asigna puntuaciones a los contribuyentes según diversos factores. Un contribuyente solicita conocer su puntuación personal en este índice y los factores específicos que la determinaron.",
        question: "Según la Ley de Transparencia y Acceso a la Información Pública (Ley 1712 de 2014), la Ley de Protección de Datos Personales (Ley 1581 de 2012) y sus actualizaciones vigentes en 2025, ¿cuál es la respuesta correcta a esta solicitud?",
        options: [
            "Debe negarse completamente la solicitud por tratarse de información reservada relacionada con procesos de fiscalización.",
            "Debe entregarse únicamente la puntuación personal, sin revelar los factores específicos que la determinaron por estar protegidos por reserva.",
            "Debe proporcionarse tanto la puntuación personal como una explicación general de los factores que la determinaron, en cumplimiento del derecho de acceso a los datos personales y el principio de transparencia algorítmica.",
            "Debe informarse que este tipo de índices no constituyen información pública ni datos personales accesibles a los interesados."
        ],
        correctAnswer: 2,
        explanation: "Según la Ley 1712 de 2014 (Ley de Transparencia), la Ley 1581 de 2012 (Protección de Datos Personales), la Ley 2213 de 2022 (Ley de Inteligencia Artificial en el Sector Público) y sus actualizaciones vigentes en 2025, la respuesta correcta es proporcionar tanto la puntuación personal como una explicación general de los factores que la determinaron. El artículo 8 de la Ley 1581 establece el derecho de toda persona a 'conocer, actualizar y rectificar sus datos personales', lo que incluye perfiles o puntuaciones generadas a partir de sus datos. La Ley 2213 de 2022 y sus actualizaciones introdujeron el principio de transparencia algorítmica, que obliga a las entidades públicas a proporcionar explicaciones comprensibles sobre las decisiones automatizadas que afecten a los ciudadanos. La Sentencia T-729 de 2022 de la Corte Constitucional estableció que los ciudadanos tienen derecho a conocer no solo los datos personales que las entidades públicas procesan sobre ellos, sino también las inferencias y perfiles que se generan a partir de esos datos, especialmente cuando pueden afectar sus derechos. Si bien la metodología general del índice de riesgo puede estar protegida por reserva para garantizar la efectividad de los procesos de fiscalización, el contribuyente tiene derecho a conocer su puntuación personal y los factores específicos que la determinaron, como manifestación de sus derechos de habeas data y debido proceso."
    },
    {
        id: "transparencia_009",
        category: "transparencia",
        difficulty: "media",
        text: "Un grupo de investigación académica solicita a la DIAN acceso a una base de datos anonimizada con información de declaraciones tributarias para realizar un estudio sobre el impacto de ciertas políticas fiscales.",
        question: "Según la Ley de Transparencia y Acceso a la Información Pública (Ley 1712 de 2014), el Estatuto Tributario y sus actualizaciones vigentes en 2025, ¿cuál es la respuesta correcta a esta solicitud?",
        options: [
            "Debe negarse la solicitud porque toda información relacionada con declaraciones tributarias está protegida por reserva legal, incluso si está anonimizada.",
            "Debe entregarse la información solicitada sin restricciones, ya que la investigación académica tiene prevalencia sobre cualquier tipo de reserva.",
            "Puede proporcionarse la base de datos solicitada, siempre que esté efectivamente anonimizada para impedir la identificación de contribuyentes específicos, mediante un acuerdo que establezca condiciones de uso exclusivamente académico y medidas de seguridad adecuadas.",
            "Debe remitirse la solicitud al Ministerio de Hacienda, única entidad facultada para autorizar el uso de información tributaria con fines académicos."
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 583 del Estatuto Tributario, el artículo 18 de la Ley 1712 de 2014 (Ley de Transparencia) y la Ley 2213 de 2022 (sobre uso de datos para investigación), vigentes en 2025, la respuesta correcta es proporcionar la base de datos solicitada, siempre que esté efectivamente anonimizada para impedir la identificación de contribuyentes específicos, mediante un acuerdo que establezca condiciones de uso exclusivamente académico y medidas de seguridad adecuadas. El artículo 583 del Estatuto Tributario establece la reserva de las declaraciones tributarias, pero esta reserva protege la información que permite identificar a contribuyentes específicos. La Sentencia C-602 de 2015 de la Corte Constitucional aclaró que la reserva tributaria no se extiende a información agregada o anonimizada que no permita la identificación individual. La Ley 2213 de 2022 y sus actualizaciones establecieron un marco para el acceso a datos públicos con fines de investigación científica, permitiendo el uso de datos incluso sujetos a reserva cuando se implementen técnicas de anonimización efectivas y se establezcan protocolos de seguridad adecuados. El Decreto 1743 de 2023 reglamentó específicamente el acceso a información tributaria anonimizada para investigación académica, estableciendo los requisitos y procedimientos para su autorización."
    },
    {
        id: "transparencia_010",
        category: "transparencia",
        difficulty: "baja",
        text: "Un ciudadano solicita a la DIAN información sobre los requisitos, procedimientos y formatos necesarios para solicitar una devolución de impuestos.",
        question: "Según la Ley de Transparencia y Acceso a la Información Pública (Ley 1712 de 2014) y sus actualizaciones vigentes en 2025, ¿cómo debe proceder la entidad ante esta solicitud?",
        options: [
            "Debe proporcionar la información solicitada de manera completa, clara y oportuna, ya que se trata de información pública que debe estar disponible proactivamente.",
            "Debe indicar al ciudadano que esta información solo puede ser proporcionada por funcionarios especializados en atención presencial.",
            "Debe entregar la información solo si el ciudadano demuestra que tiene un saldo a favor pendiente de devolución.",
            "Debe remitir al ciudadano a la página web de la entidad, siendo esta la única vía autorizada para consultar este tipo de información."
        ],
        correctAnswer: 0,
        explanation: "Según la Ley 1712 de 2014 (Ley de Transparencia y Acceso a la Información Pública) y sus actualizaciones vigentes en 2025, la DIAN debe proporcionar la información solicitada de manera completa, clara y oportuna, ya que se trata de información pública que debe estar disponible proactivamente. El artículo 9 de la Ley 1712 establece que los sujetos obligados deben publicar proactivamente información mínima obligatoria, incluyendo 'todo mecanismo o procedimiento por medio del cual el público pueda participar en la formulación de la política o el ejercicio de las facultades de ese sujeto obligado'. El artículo 11 específicamente menciona la obligación de publicar 'todo mecanismo interno y externo de supervisión, notificación y vigilancia pertinente del sujeto obligado' y 'sus procedimientos, lineamientos, políticas en materia de adquisiciones y compras, así como todos los datos de adjudicación y ejecución de contratos, incluidos concursos y licitaciones'. La información sobre requisitos, procedimientos y formatos para solicitar devoluciones de impuestos constituye información pública que debe ser accesible a todos los ciudadanos sin restricciones, en cumplimiento del principio de máxima publicidad establecido en el artículo 2 de la misma ley."
    },
    {
        id: "transparencia_011",
        category: "transparencia",
        difficulty: "alta",
        text: "La DIAN ha recibido una solicitud de información sobre los acuerdos anticipados de precios (APA) celebrados con empresas multinacionales durante los últimos cinco años, incluyendo los nombres de las empresas, los métodos de precios de transferencia acordados y los márgenes o precios establecidos.",
        question: "Según la Ley de Transparencia y Acceso a la Información Pública (Ley 1712 de 2014), el Estatuto Tributario y sus actualizaciones vigentes en 2025, ¿cuál es la respuesta correcta a esta solicitud?",
        options: [
            "Debe negarse completamente la solicitud por tratarse de información protegida por la reserva tributaria y por contener secretos comerciales de las empresas involucradas.",
            "Debe entregarse toda la información solicitada, ya que los APA constituyen acuerdos con una entidad pública que deben ser completamente transparentes.",
            "Debe proporcionarse información estadística sobre los APA (número de acuerdos, sectores económicos, métodos utilizados) sin revelar la identidad de las empresas ni los detalles específicos de cada acuerdo que están protegidos por reserva legal.",
            "Debe consultarse previamente a cada empresa involucrada para que autorice o no la divulgación de la información sobre su APA específico."
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 260-10 del Estatuto Tributario (sobre Acuerdos Anticipados de Precios), el artículo 583 del mismo estatuto (sobre reserva de las declaraciones tributarias) y la Ley 1712 de 2014 (Ley de Transparencia), vigentes en 2025, la respuesta correcta es proporcionar información estadística sobre los APA sin revelar la identidad de las empresas ni los detalles específicos de cada acuerdo. El artículo 260-10 del Estatuto Tributario establece que 'la información sobre los métodos, criterios, procedimientos y, en general, la documentación e información a que se refieren los acuerdos anticipados de precios tendrán carácter reservado'. Esta reserva protege tanto los intereses de la administración tributaria como los secretos comerciales e industriales de las empresas involucradas. Sin embargo, el artículo 9 de la Ley 1712 obliga a las entidades públicas a publicar proactivamente información sobre su gestión, incluyendo datos estadísticos. La Sentencia C-602 de 2015 de la Corte Constitucional confirmó que la reserva tributaria no se extiende a información agregada que no permita identificar a contribuyentes específicos. Por lo tanto, es posible proporcionar información estadística sobre los APA (número de acuerdos, sectores económicos, métodos utilizados) sin violar la reserva legal que protege los detalles específicos de cada acuerdo y la identidad de las empresas."
    },
    {
        id: "transparencia_012",
        category: "transparencia",
        difficulty: "media",
        text: "Un ciudadano solicita a la DIAN información sobre los criterios utilizados para determinar la procedencia de devoluciones de IVA a exportadores y las razones por las cuales algunas solicitudes son rechazadas frecuentemente.",
        question: "Según la Ley de Transparencia y Acceso a la Información Pública (Ley 1712 de 2014) y sus actualizaciones vigentes en 2025, ¿cómo debe proceder la entidad ante esta solicitud?",
        options: [
            "Debe negar la solicitud por tratarse de información relacionada con procesos de fiscalización que está sujeta a reserva.",
            "Debe proporcionar información general sobre los criterios normativos aplicables, requisitos procedimentales y causales comunes de rechazo, sin revelar detalles que puedan comprometer la efectividad de los controles.",
            "Debe entregar la información solo si el solicitante demuestra su condición de exportador con solicitudes de devolución pendientes.",
            "Debe remitir la solicitud a la Dirección de Impuestos por ser la única dependencia autorizada para divulgar este tipo de información."
        ],
        correctAnswer: 1,
        explanation: "Según la Ley 1712 de 2014 (Ley de Transparencia y Acceso a la Información Pública) y sus actualizaciones vigentes en 2025, la DIAN debe proporcionar información general sobre los criterios normativos aplicables, requisitos procedimentales y causales comunes de rechazo, sin revelar detalles que puedan comprometer la efectividad de los controles. El artículo 3 de la Ley 1712 establece el principio de máxima publicidad, según el cual 'toda información en posesión, bajo control o custodia de un sujeto obligado es pública y no podrá ser reservada o limitada sino por disposición constitucional o legal'. El artículo 11 específicamente menciona la obligación de publicar 'todo mecanismo interno y externo de supervisión, notificación y vigilancia pertinente del sujeto obligado' y 'sus procedimientos, lineamientos, políticas'. Sin embargo, el artículo 18 establece como excepción al acceso a la información pública aquella que pueda 'dañar la estabilidad macroeconómica y financiera del país' o afectar 'la eficacia de los métodos de control'. La Sentencia C-274 de 2013 de la Corte Constitucional estableció que las excepciones al acceso a la información deben interpretarse de manera restrictiva y requieren una motivación específica. Por lo tanto, la DIAN debe proporcionar información general sobre los criterios y requisitos para las devoluciones de IVA a exportadores, así como las causales comunes de rechazo, ya que esta información permite a los ciudadanos conocer y cumplir adecuadamente con los procedimientos establecidos, pero puede reservar detalles específicos de los mecanismos de control que podrían comprometer su efectividad."
    },
    {
        id: "transparencia_013",
        category: "transparencia",
        difficulty: "baja",
        text: "Un ciudadano solicita a la DIAN información sobre los salarios y asignaciones de los directivos de la entidad, incluyendo el Director General.",
        question: "Según la Ley de Transparencia y Acceso a la Información Pública (Ley 1712 de 2014) y sus actualizaciones vigentes en 2025, ¿cómo debe proceder la entidad ante esta solicitud?",
        options: [
            "Debe negar la solicitud por tratarse de información personal que está protegida por el derecho a la privacidad de los funcionarios.",
            "Debe proporcionar la información solicitada, ya que los salarios y asignaciones de los servidores públicos constituyen información pública que debe estar disponible para consulta ciudadana.",
            "Debe entregar la información solo si el solicitante demuestra un interés legítimo relacionado con control social o investigación.",
            "Debe proporcionar únicamente información sobre las escalas salariales generales, sin referencia a funcionarios específicos."
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con la Ley 1712 de 2014 (Ley de Transparencia y Acceso a la Información Pública) y sus actualizaciones vigentes en 2025, la DIAN debe proporcionar la información solicitada sobre salarios y asignaciones de los directivos, ya que constituye información pública. El artículo 9 de la Ley 1712 establece específicamente que los sujetos obligados deben publicar proactivamente 'la escala salarial o modelo de remuneración para todas las categorías de servidores públicos o empleados del sujeto obligado'. El artículo 5 de la misma ley define como información pública 'toda información que un sujeto obligado genere, obtenga, adquiera, o controle en su calidad de tal'. La Sentencia C-274 de 2013 de la Corte Constitucional confirmó que la información sobre la remuneración de servidores públicos no está protegida por el derecho a la privacidad, ya que se trata de recursos públicos y su divulgación constituye un mecanismo importante de transparencia y rendición de cuentas. La Ley 2013 de 2019 reforzó esta obligación al exigir la publicación y divulgación proactiva de la declaración de bienes y rentas, registro de conflictos de interés y declaración del impuesto sobre la renta y complementarios de altos funcionarios públicos."
    },
    {
        id: "transparencia_014",
        category: "transparencia",
        difficulty: "alta",
        text: "La DIAN ha recibido una solicitud de acceso a las actas completas de un comité interno que toma decisiones sobre la selección de grandes contribuyentes para programas especiales de fiscalización.",
        question: "Según la Ley de Transparencia y Acceso a la Información Pública (Ley 1712 de 2014) y sus actualizaciones vigentes en 2025, ¿cuál es la respuesta correcta a esta solicitud?",
        options: [
            "Debe negarse completamente la solicitud por tratarse de documentos preparatorios que contienen opiniones y recomendaciones para la toma de decisiones administrativas.",
            "Debe entregarse la versión completa de todas las actas solicitadas, ya que las deliberaciones de los comités internos de entidades públicas son siempre de acceso público.",
            "Debe proporcionarse una versión pública de las actas, en la que se protejan mediante tachas los apartes específicos que contengan información reservada sobre casos particulares o metodologías de fiscalización, entregando el resto de la información.",
            "Debe informarse que las actas de comités internos no constituyen información pública accesible a los ciudadanos bajo ninguna circunstancia."
        ],
        correctAnswer: 2,
        explanation: "Según la Ley 1712 de 2014 (Ley de Transparencia y Acceso a la Información Pública) y sus actualizaciones vigentes en 2025, la respuesta correcta es proporcionar una versión pública de las actas, protegiendo mediante tachas los apartes específicos que contengan información reservada. El artículo 19 de la Ley 1712 establece que la información exceptuada por daño a intereses públicos incluye 'los documentos que contengan las opiniones o puntos de vista que formen parte del proceso deliberativo de los servidores públicos', pero el parágrafo del mismo artículo aclara que estas excepciones 'no aplican en relación con información que permita el ejercicio de los derechos y el conocimiento de las garantías frente a actuaciones o decisiones de las autoridades públicas'. El artículo 21 establece el principio de divisibilidad, según el cual 'cuando un documento contenga información que pueda ser divulgada e información clasificada o reservada, el sujeto obligado debe revelar los datos no protegidos y presentar los fundamentos constitucionales y legales por los que retiene los datos que no puede divulgar'. La Sentencia T-828 de 2014 de la Corte Constitucional confirmó que cuando un documento contiene tanto información pública como información reservada, debe entregarse una versión del documento con la información reservada debidamente oculta o tachada. Por lo tanto, la DIAN debe proporcionar las actas solicitadas, protegiendo únicamente los apartes específicos que contengan información reservada sobre casos particulares o metodologías de fiscalización que puedan comprometer la efectividad de los controles."
    },
    {
        id: "transparencia_015",
        category: "transparencia",
        difficulty: "media",
        text: "Un ciudadano ha solicitado a la DIAN información sobre un procedimiento administrativo de fiscalización que se adelanta en su contra. La entidad niega la solicitud argumentando que se trata de un proceso en curso que está amparado por reserva.",
        question: "Según la Ley de Transparencia y Acceso a la Información Pública (Ley 1712 de 2014), el Estatuto Tributario y sus actualizaciones vigentes en 2025, ¿es correcta la decisión de la entidad?",
        options: [
            "Sí, porque todos los procedimientos administrativos de fiscalización están amparados por reserva legal hasta su conclusión definitiva.",
            "No, porque el solicitante es parte directa en el procedimiento y tiene derecho a acceder a toda la información relacionada con su caso, incluyendo el expediente completo.",
            "Sí, porque la información sobre procesos de fiscalización solo puede ser conocida por los funcionarios que intervienen directamente en ellos.",
            "No, porque la Ley de Transparencia eliminó todas las reservas sobre procedimientos administrativos para garantizar el debido proceso."
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con la Ley 1712 de 2014 (Ley de Transparencia), la Ley 1437 de 2011 (Código de Procedimiento Administrativo y de lo Contencioso Administrativo) y el Estatuto Tributario, vigentes en 2025, la decisión de la entidad no es correcta. Si bien el artículo 583 del Estatuto Tributario establece la reserva de las declaraciones tributarias y el artículo 18 de la Ley 1712 permite exceptuar del acceso público la información que pueda afectar la eficacia de los métodos de control, estas reservas no son oponibles al propio interesado. El artículo 24 de la Ley 1437 establece que 'solo tendrán carácter reservado las informaciones y documentos expresamente sometidos a reserva por la Constitución Política o la ley, y en especial: [...] 3. Los que involucren derechos a la privacidad e intimidad de las personas [...] 8. Los datos referentes a la información financiera y comercial, en los términos de la Ley Estatutaria 1266 de 2008'. Sin embargo, el parágrafo del mismo artículo aclara que 'para efecto de la solicitud de información de carácter reservado, enunciada en los numerales 3, 5, 6 y 7 solo podrá ser solicitada por el titular de la información'. La Sentencia T-828 de 2014 de la Corte Constitucional confirmó que las personas tienen derecho a acceder a la información que sobre ellas repose en los archivos públicos, como manifestación del derecho de habeas data y del debido proceso. Por lo tanto, el ciudadano, como parte directa en el procedimiento de fiscalización, tiene derecho a acceder a toda la información relacionada con su caso, incluyendo el expediente completo."
    },
    {
        id: "transparencia_016",
        category: "transparencia",
        difficulty: "baja",
        text: "Un ciudadano solicita a la DIAN información sobre los trámites más frecuentes realizados por los contribuyentes, los tiempos promedio de respuesta y las oficinas con mayor y menor eficiencia en la atención.",
        question: "Según la Ley de Transparencia y Acceso a la Información Pública (Ley 1712 de 2014) y sus actualizaciones vigentes en 2025, ¿cómo debe proceder la entidad ante esta solicitud?",
        options: [
            "Debe negar la solicitud por tratarse de información interna de gestión que no es de interés público.",
            "Debe proporcionar la información solicitada, ya que se trata de datos estadísticos sobre la gestión pública que deben ser accesibles a los ciudadanos.",
            "Debe entregar únicamente la información sobre trámites y tiempos promedio, omitiendo la comparación entre oficinas para evitar afectaciones al clima laboral.",
            "Debe remitir la solicitud al Departamento Nacional de Planeación, entidad encargada de evaluar la eficiencia de las entidades públicas."
        ],
        correctAnswer: 1,
        explanation: "Según la Ley 1712 de 2014 (Ley de Transparencia y Acceso a la Información Pública) y sus actualizaciones vigentes en 2025, la DIAN debe proporcionar la información solicitada sobre trámites, tiempos de respuesta y eficiencia de las oficinas. El artículo 9 de la Ley 1712 establece que los sujetos obligados deben publicar proactivamente información mínima obligatoria, incluyendo 'su estructura orgánica, funciones y deberes, la ubicación de sus sedes y áreas, divisiones o departamentos, y sus horas de atención al público' y 'su respectivo plan de compras anual, así como las contrataciones adjudicadas para la correspondiente vigencia'. El artículo 11 específicamente menciona la obligación de publicar 'todo mecanismo interno y externo de supervisión, notificación y vigilancia pertinente del sujeto obligado' y 'sus procedimientos, lineamientos, políticas'. La información sobre trámites frecuentes, tiempos de respuesta y eficiencia comparativa de las oficinas constituye información estadística sobre la gestión pública que debe ser accesible a los ciudadanos como parte de los mecanismos de rendición de cuentas y control social. La Sentencia T-161 de 2019 de la Corte Constitucional reafirmó que la información estadística sobre el desempeño de entidades públicas es de carácter público y debe ser accesible a los ciudadanos sin necesidad de demostrar un interés particular."
    },
    {
        id: "transparencia_017",
        category: "transparencia",
        difficulty: "alta",
        text: "La DIAN ha implementado un sistema de inteligencia artificial para la detección de inconsistencias en declaraciones tributarias. Un ciudadano solicita información detallada sobre: 1) Los datos personales suyos que alimentan el sistema; 2) Los algoritmos específicos utilizados para analizar su caso particular; 3) Las decisiones automatizadas que el sistema ha tomado respecto a sus declaraciones.",
        question: "Según la Ley de Transparencia y Acceso a la Información Pública (Ley 1712 de 2014), la Ley de Protección de Datos Personales (Ley 1581 de 2012), la Ley de Inteligencia Artificial en el Sector Público (Ley 2213 de 2022) y sus actualizaciones vigentes en 2025, ¿cuál es la respuesta correcta a esta solicitud?",
        options: [
            "Debe negarse completamente la solicitud por tratarse de información relacionada con sistemas de fiscalización que está protegida por reserva legal.",
            "Debe proporcionarse únicamente la información sobre los datos personales que alimentan el sistema, negando el acceso a los algoritmos y decisiones automatizadas por estar protegidos por reserva.",
            "Debe entregarse toda la información solicitada, incluyendo el código fuente completo de los algoritmos, ya que los sistemas automatizados de toma de decisiones deben ser completamente transparentes.",
            "Debe proporcionarse: 1) La información sobre los datos personales del solicitante que alimentan el sistema; 2) Una explicación general sobre la lógica de los algoritmos aplicados a su caso; 3) Información sobre las decisiones automatizadas tomadas y su impacto en su situación particular, sin revelar detalles técnicos que puedan comprometer la efectividad del sistema."
        ],
        correctAnswer: 3,
        explanation: "Según la Ley 1712 de 2014 (Ley de Transparencia), la Ley 1581 de 2012 (Protección de Datos Personales), la Ley 2213 de 2022 (Ley de Inteligencia Artificial en el Sector Público) y sus actualizaciones vigentes en 2025, la respuesta correcta es proporcionar: 1) La información sobre los datos personales del solicitante que alimentan el sistema; 2) Una explicación general sobre la lógica de los algoritmos aplicados a su caso; 3) Información sobre las decisiones automatizadas tomadas y su impacto en su situación particular. El artículo 8 de la Ley 1581 establece el derecho de toda persona a 'conocer, actualizar y rectificar sus datos personales', lo que incluye saber qué datos suyos están siendo procesados. La Ley 2213 de 2022 y sus actualizaciones introdujeron el principio de transparencia algorítmica, que obliga a las entidades públicas a proporcionar explicaciones comprensibles sobre las decisiones automatizadas que afecten a los ciudadanos, incluyendo la lógica general de los algoritmos y el impacto de sus decisiones. La Sentencia T-729 de 2022 de la Corte Constitucional estableció que los ciudadanos tienen derecho a conocer no solo los datos personales que las entidades públicas procesan sobre ellos, sino también las inferencias y decisiones automatizadas que se generan a partir de esos datos, especialmente cuando pueden afectar sus derechos. Sin embargo, el artículo 18 de la Ley 1712 permite exceptuar del acceso público la información que pueda afectar la eficacia de los métodos de control, lo que justifica la protección de detalles técnicos específicos de los algoritmos que podrían comprometer la efectividad del sistema de detección de inconsistencias."
    },
    {
        id: "transparencia_018",
        category: "transparencia",
        difficulty: "media",
        text: "Un periodista solicita a la DIAN información sobre los montos recaudados por concepto de sanciones tributarias durante los últimos tres años, desglosados por tipo de sanción, sector económico y tamaño de los contribuyentes.",
        question: "Según la Ley de Transparencia y Acceso a la Información Pública (Ley 1712 de 2014), el Estatuto Tributario y sus actualizaciones vigentes en 2025, ¿cómo debe proceder la entidad ante esta solicitud?",
        options: [
            "Debe negar la solicitud por tratarse de información relacionada con procesos sancionatorios que está protegida por reserva legal.",
            "Debe proporcionar la información solicitada, ya que se trata de datos estadísticos agregados sobre recaudo que no revelan información individual de contribuyentes.",
            "Debe entregar únicamente los montos totales recaudados por concepto de sanciones, sin el desglose solicitado, para proteger la reserva tributaria.",
            "Debe remitir la solicitud al Ministerio de Hacienda, entidad competente para divulgar información sobre recaudo tributario."
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con la Ley 1712 de 2014 (Ley de Transparencia y Acceso a la Información Pública) y el Estatuto Tributario, vigentes en 2025, la DIAN debe proporcionar la información solicitada sobre montos recaudados por concepto de sanciones tributarias, desglosados por tipo de sanción, sector económico y tamaño de los contribuyentes. El artículo 583 del Estatuto Tributario establece la reserva de las declaraciones tributarias, pero esta reserva protege la información que permite identificar a contribuyentes específicos y no se extiende a datos estadísticos agregados. El artículo 9 de la Ley 1712 obliga a las entidades públicas a publicar proactivamente información sobre su gestión, incluyendo datos estadísticos. La Sentencia C-602 de 2015 de la Corte Constitucional confirmó que la reserva tributaria no se extiende a información agregada que no permita identificar a contribuyentes específicos. La información solicitada constituye datos estadísticos agregados sobre el recaudo por concepto de sanciones, que no revelan información individual de contribuyentes y son relevantes para el análisis del desempeño de la administración tributaria y el cumplimiento de la normativa fiscal, temas de evidente interés público."
    },
    {
        id: "transparencia_019",
        category: "transparencia",
        difficulty: "baja",
        text: "Un ciudadano solicita a la DIAN información sobre los nombres, cargos, dependencias y datos de contacto institucional de los funcionarios que ocupan cargos directivos en la entidad.",
        question: "Según la Ley de Transparencia y Acceso a la Información Pública (Ley 1712 de 2014) y sus actualizaciones vigentes en 2025, ¿cómo debe proceder la entidad ante esta solicitud?",
        options: [
            "Debe negar la solicitud por tratarse de información personal que está protegida por el derecho a la privacidad de los funcionarios.",
            "Debe proporcionar la información solicitada, ya que los nombres, cargos y datos de contacto institucional de los servidores públicos constituyen información pública que debe estar disponible para consulta ciudadana.",
            "Debe entregar únicamente los nombres y cargos, omitiendo los datos de contacto para proteger a los funcionarios de posibles hostigamientos.",
            "Debe consultar previamente a cada funcionario directivo si autoriza la divulgación de sus datos de contacto institucional."
        ],
        correctAnswer: 1,
        explanation: "Según la Ley 1712 de 2014 (Ley de Transparencia y Acceso a la Información Pública) y sus actualizaciones vigentes en 2025, la DIAN debe proporcionar la información solicitada sobre nombres, cargos, dependencias y datos de contacto institucional de los funcionarios directivos. El artículo 9 de la Ley 1712 establece específicamente que los sujetos obligados deben publicar proactivamente 'su estructura orgánica, funciones y deberes, la ubicación de sus sedes y áreas, divisiones o departamentos, y sus horas de atención al público', así como 'el directorio que incluya el cargo, direcciones de correo electrónico y teléfono del despacho de los empleados y funcionarios y las escalas salariales correspondientes a las categorías de todos los servidores que trabajan en el sujeto obligado, de conformidad con el formato de información de servidores públicos y contratistas'. La Sentencia C-274 de 2013 de la Corte Constitucional confirmó que la información sobre servidores públicos, incluyendo sus nombres, cargos y datos de contacto institucional, no está protegida por el derecho a la privacidad, ya que se trata de información relacionada con el ejercicio de funciones públicas y su divulgación constituye un mecanismo importante de transparencia y rendición de cuentas."
    },
    {
        id: "transparencia_020",
        category: "transparencia",
        difficulty: "alta",
        text: "La DIAN ha recibido una solicitud de información sobre los conceptos jurídicos emitidos por la Dirección de Gestión Jurídica durante los últimos cinco años en materia de aplicación de convenios para evitar la doble imposición. El solicitante pide acceso a todos los conceptos, incluyendo aquellos que no han sido publicados oficialmente.",
        question: "Según la Ley de Transparencia y Acceso a la Información Pública (Ley 1712 de 2014), el Estatuto Tributario y sus actualizaciones vigentes en 2025, ¿cuál es la respuesta correcta a esta solicitud?",
        options: [
            "Debe negarse la solicitud porque solo los conceptos oficialmente publicados son de acceso público.",
            "Debe proporcionarse acceso a todos los conceptos solicitados, ya que constituyen interpretaciones oficiales de normas tributarias que deben ser públicas para garantizar la seguridad jurídica y la igualdad de trato a los contribuyentes.",
            "Debe entregarse únicamente un listado de los conceptos emitidos, sin su contenido, para que el solicitante pueda luego pedir específicamente los que le interesen.",
            "Debe remitirse la solicitud al Ministerio de Hacienda, entidad competente para autorizar la divulgación de conceptos jurídicos en materia tributaria."
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con la Ley 1712 de 2014 (Ley de Transparencia y Acceso a la Información Pública), el Estatuto Tributario y sus actualizaciones vigentes en 2025, la DIAN debe proporcionar acceso a todos los conceptos jurídicos solicitados. El artículo 28 del Código de Procedimiento Administrativo y de lo Contencioso Administrativo (CPACA) establece que 'los conceptos emitidos por las autoridades como respuestas a peticiones realizadas en ejercicio del derecho a formular consultas no serán de obligatorio cumplimiento o ejecución'. Sin embargo, estos conceptos constituyen interpretaciones oficiales de normas tributarias que deben ser públicas para garantizar la seguridad jurídica y la igualdad de trato a los contribuyentes. El artículo 9 de la Ley 1712 obliga a las entidades públicas a publicar proactivamente 'todo mecanismo o procedimiento por medio del cual el público pueda participar en la formulación de la política o el ejercicio de las facultades de ese sujeto obligado', lo que incluye las interpretaciones oficiales de las normas. La Sentencia C-487 de 2015 de la Corte Constitucional estableció que las interpretaciones oficiales de las normas tributarias realizadas por la autoridad competente deben ser públicas y accesibles para todos los contribuyentes, como garantía de los principios de igualdad, seguridad jurídica y confianza legítima. Los conceptos jurídicos, incluso aquellos no publicados oficialmente, no están cobijados por ninguna reserva legal específica y su divulgación contribuye a la transparencia y previsibilidad del sistema tributario."
    }
];