// Preguntas sobre Fiscalización y Liquidación
const questions_fiscalizacion = [
    {
        id: "fiscalizacion_001",
        category: "fiscalizacion",
        difficulty: "baja",
        text: "La DIAN ha iniciado un proceso de fiscalización a un contribuyente y necesita solicitar información adicional.",
        question: "¿Cuál es el plazo general que tiene el contribuyente para responder un requerimiento ordinario de información según el Estatuto Tributario?",
        options: [
            "5 días hábiles improrrogables",
            "15 días hábiles, prorrogables por un término igual",
            "1 mes calendario, sin posibilidad de prórroga",
            "3 meses contados a partir de la notificación"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el artículo 686 del Estatuto Tributario, el plazo general para responder un requerimiento ordinario de información es de quince (15) días hábiles, contados a partir de la fecha de notificación del requerimiento. Este plazo puede ser prorrogado por un término igual, es decir, por quince (15) días hábiles adicionales, cuando el contribuyente lo solicite antes del vencimiento del plazo inicial y la administración tributaria considere que existen razones que justifican la prórroga. Es importante tener en cuenta que el incumplimiento en la entrega de la información solicitada dentro del plazo establecido puede dar lugar a la imposición de sanciones, como la contemplada en el artículo 651 del Estatuto Tributario por no enviar información o enviarla con errores."
    },
    {
        id: "fiscalizacion_002",
        category: "fiscalizacion",
        difficulty: "media",
        text: "Durante un proceso de fiscalización, la DIAN ha encontrado inconsistencias en la declaración de renta de un contribuyente y decide modificar la liquidación privada.",
        question: "¿Cuál es el acto administrativo que debe expedir la DIAN para modificar la liquidación privada del contribuyente?",
        options: [
            "Requerimiento especial",
            "Liquidación oficial de revisión",
            "Auto de inspección tributaria",
            "Resolución sanción"
        ],
        correctAnswer: 1,
        explanation: "Según el procedimiento establecido en el Estatuto Tributario, específicamente en los artículos 702 a 714, cuando la DIAN encuentra inconsistencias en la declaración de un contribuyente y decide modificar la liquidación privada, debe seguir un proceso que consta de dos etapas principales: primero, debe expedir un requerimiento especial (artículo 703) en el cual propone las modificaciones a la declaración y otorga al contribuyente un plazo de tres meses para responder. Posteriormente, si después de analizar la respuesta al requerimiento especial (o ante la falta de respuesta), la DIAN decide mantener total o parcialmente las modificaciones propuestas, debe expedir una Liquidación Oficial de Revisión (artículo 712). Este es el acto administrativo definitivo mediante el cual se modifica formalmente la liquidación privada del contribuyente, determinando un mayor impuesto o un menor saldo a favor. La Liquidación Oficial de Revisión debe expedirse dentro de los seis meses siguientes al vencimiento del plazo para responder el requerimiento especial o su ampliación."
    },
    {
        id: "fiscalizacion_003",
        category: "fiscalizacion",
        difficulty: "alta",
        text: "La DIAN ha iniciado un proceso de fiscalización a una empresa por presuntas irregularidades en sus declaraciones de IVA de los últimos años. Durante la investigación, la administración tributaria encuentra que la empresa ha estado utilizando facturas falsas para soportar impuestos descontables.",
        question: "¿Cuál es la consecuencia jurídica principal para el contribuyente por utilizar facturas falsas para soportar impuestos descontables en el IVA?",
        options: [
            "Solo debe pagar el impuesto omitido más los intereses moratorios",
            "Debe pagar el impuesto omitido, los intereses moratorios y una sanción por inexactitud del 100% del impuesto descontable improcedente",
            "Se configura el delito de defraudación tributaria, además de las sanciones administrativas correspondientes",
            "Únicamente se impone una sanción administrativa equivalente al 20% del valor de las facturas falsas"
        ],
        correctAnswer: 2,
        explanation: "La utilización de facturas falsas para soportar impuestos descontables en el IVA tiene graves consecuencias jurídicas. Según el artículo 670 del Estatuto Tributario, se impone una sanción por improcedencia de impuestos descontables, que corresponde al 100% del impuesto descontado improcedentemente. Adicionalmente, de acuerdo con el artículo 434A del Código Penal, modificado por la Ley 1943 de 2018 y la Ley 2010 de 2019, quien obtenga un provecho ilícito para sí o para un tercero, mediante la utilización de documentos falsos que soporten gastos o costos o impuestos descontables en declaraciones tributarias, incurrirá en el delito de defraudación tributaria, con penas de prisión de 36 a 60 meses y multa del 50% del valor del impuesto determinado fraudulentamente. Por lo tanto, además de las sanciones administrativas (pago del impuesto omitido, intereses moratorios y sanción por inexactitud), se configura un delito penal que puede acarrear penas privativas de la libertad."
    },
    {
        id: "fiscalizacion_004",
        category: "fiscalizacion",
        difficulty: "media",
        text: "La DIAN ha notificado a un contribuyente un requerimiento especial en el que propone modificar su declaración de renta, aumentando el impuesto a cargo en 50 millones de pesos.",
        question: "¿Cuál es el plazo que tiene el contribuyente para responder este requerimiento especial según el Estatuto Tributario?",
        options: [
            "15 días hábiles, prorrogables por un término igual",
            "1 mes calendario, sin posibilidad de prórroga",
            "3 meses, prorrogables por 3 meses adicionales",
            "6 meses improrrogables"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 707 del Estatuto Tributario, el contribuyente tiene un plazo de tres (3) meses contados a partir de la fecha de notificación del requerimiento especial para formular por escrito sus objeciones, solicitar pruebas, subsanar las omisiones que permita el Estatuto Tributario, o aceptar total o parcialmente los hechos planteados en el requerimiento. Adicionalmente, según el artículo 708 del mismo Estatuto, el funcionario que conozca de la respuesta al requerimiento especial podrá, dentro de los tres (3) meses siguientes a la fecha del vencimiento del plazo para responder, ordenar su ampliación por una sola vez, y decretar las pruebas que estime necesarias. La ampliación podrá incluir hechos y conceptos no contemplados en el requerimiento inicial, así como proponer una nueva determinación oficial de los impuestos, anticipos, retenciones y sanciones. El plazo para la respuesta a la ampliación será de tres (3) meses adicionales."
    },
    {
        id: "fiscalizacion_005",
        category: "fiscalizacion",
        difficulty: "baja",
        text: "Un contribuyente ha sido notificado de una liquidación oficial de revisión que modifica su declaración de renta, aumentando el impuesto a cargo.",
        question: "¿Qué recurso puede interponer el contribuyente contra esta liquidación oficial de revisión y en qué plazo?",
        options: [
            "Recurso de reposición, dentro de los 10 días hábiles siguientes a la notificación",
            "Recurso de reconsideración, dentro de los 2 meses siguientes a la notificación",
            "Recurso de apelación, dentro del mes siguiente a la notificación",
            "Recurso de queja, dentro de los 5 días hábiles siguientes a la notificación"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el artículo 720 del Estatuto Tributario, contra las liquidaciones oficiales procede el recurso de reconsideración. Este recurso, según el artículo 722 del mismo Estatuto, debe interponerse dentro de los dos (2) meses siguientes a la notificación del acto administrativo que se impugna, ante el funcionario que expidió la liquidación oficial. El recurso de reconsideración debe cumplir con los requisitos establecidos en el artículo 722, como presentarse por escrito, interponerse dentro del plazo legal, expresar los motivos de inconformidad con la liquidación, y solicitar y aportar las pruebas que se pretenda hacer valer. Es importante destacar que, según el artículo 720, el recurso de reconsideración es un requisito de procedibilidad para acudir a la jurisdicción contencioso administrativa, es decir, el contribuyente debe agotar esta vía administrativa antes de poder demandar el acto administrativo ante los tribunales."
    },
    {
        id: "fiscalizacion_006",
        category: "fiscalizacion",
        difficulty: "alta",
        text: "La DIAN ha iniciado un proceso de fiscalización a una empresa por presuntas irregularidades en la determinación de precios de transferencia en operaciones con vinculados económicos del exterior.",
        question: "¿Cuál es el método más adecuado para determinar el precio o margen de utilidad en operaciones con vinculados cuando se trata de la importación de materias primas que serán transformadas y vendidas a terceros independientes?",
        options: [
            "Método de precio comparable no controlado",
            "Método de precio de reventa",
            "Método de costo adicionado",
            "Método de márgenes transaccionales de utilidad de operación"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 260-3 del Estatuto Tributario, que establece los métodos para determinar el precio o margen de utilidad en las operaciones con vinculados, el método de costo adicionado es el más adecuado para analizar operaciones de importación de materias primas que serán transformadas y vendidas a terceros independientes. Este método consiste en determinar el precio de adquisición de bienes y servicios entre vinculados económicos, multiplicando el costo de los bienes o servicios por el resultado de sumar a la unidad el porcentaje de utilidad bruta obtenido entre partes independientes en operaciones comparables. Para comparar el margen de costo adicionado del vinculado económico con el obtenido entre partes independientes, se toma en cuenta principalmente la complejidad del proceso de fabricación, el volumen de activos utilizados, los riesgos asumidos, las funciones desempeñadas y los términos contractuales. Este método es especialmente útil cuando se trata de operaciones de compra de materias primas o productos semielaborados entre vinculados, que luego serán transformados antes de su reventa a terceros independientes."
    },
    {
        id: "fiscalizacion_007",
        category: "fiscalizacion",
        difficulty: "media",
        text: "La DIAN ha notificado a un contribuyente una liquidación oficial de aforo por no haber presentado su declaración de renta dentro del plazo establecido.",
        question: "¿Cuál es la sanción por no declarar que se impone en la liquidación oficial de aforo según el Estatuto Tributario?",
        options: [
            "20% del valor de los ingresos brutos del período",
            "10% del valor de los activos del último día del año anterior",
            "Una suma equivalente al 20% de los consignaciones bancarias del período",
            "La que resulte mayor entre el 20% de los ingresos brutos, el 20% de los activos o el 20% de las consignaciones bancarias"
        ],
        correctAnswer: 3,
        explanation: "De acuerdo con el artículo 643 del Estatuto Tributario, la sanción por no declarar que se impone en la liquidación oficial de aforo es la que resulte mayor entre: 1) El 20% de los ingresos brutos del período al cual corresponda la declaración no presentada; 2) El 20% del valor de los activos del último día del año o período al cual corresponda la declaración no presentada; 3) El 20% del valor de las consignaciones bancarias o ingresos brutos del período al cual corresponda la declaración no presentada; o 4) El 20% del valor patrimonio líquido del último día del año o período anterior al cual corresponda la declaración no presentada. Esta sanción se reducirá a la mitad si el contribuyente presenta la declaración con posterioridad al emplazamiento y antes de que se le haya notificado la liquidación de aforo, y al 10% si la presenta con ocasión de la respuesta al emplazamiento. Es importante destacar que, según el parágrafo 2 del mismo artículo, si dentro del término para interponer el recurso contra la liquidación de aforo, el contribuyente presenta la declaración, la sanción por no declarar se reducirá al 10% de la inicialmente impuesta, siempre y cuando pague el total del impuesto a cargo y la sanción reducida."
    },
    {
        id: "fiscalizacion_008",
        category: "fiscalizacion",
        difficulty: "baja",
        text: "La DIAN ha iniciado un proceso de fiscalización a un contribuyente y necesita verificar información en sus instalaciones.",
        question: "¿Cuál es la diligencia que debe ordenar la DIAN para realizar una verificación directa en las instalaciones del contribuyente?",
        options: [
            "Visita administrativa",
            "Inspección tributaria",
            "Requerimiento ordinario",
            "Emplazamiento para corregir"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el artículo 779 del Estatuto Tributario, la inspección tributaria es la diligencia que debe ordenar la DIAN para realizar una verificación directa en las instalaciones del contribuyente. Esta diligencia se decreta mediante auto que se notifica por correo o personalmente, y en ella se pueden verificar la exactitud de las declaraciones, la existencia de hechos gravables declarados o no, y el cumplimiento de las obligaciones formales. Durante la inspección tributaria, los funcionarios de la DIAN pueden examinar los libros de contabilidad, comprobantes, correspondencia comercial, registros informáticos y demás documentos del contribuyente. La inspección tributaria se inicia una vez notificado el auto que la ordene y se desarrolla en la fecha y lugar indicados en el mismo. De la diligencia se levanta un acta que contiene todos los hechos, pruebas y fundamentos en que se basa la administración tributaria para tomar sus decisiones. Es importante destacar que, según el artículo 780 del Estatuto Tributario, la inspección tributaria puede dar lugar a que se expida un requerimiento especial o una ampliación del mismo."
    },
    {
        id: "fiscalizacion_009",
        category: "fiscalizacion",
        difficulty: "alta",
        text: "La DIAN ha iniciado un proceso de fiscalización a una empresa por presuntas irregularidades en la determinación del impuesto sobre la renta. Durante la investigación, la administración tributaria encuentra que la empresa ha realizado pagos a proveedores ficticios para aumentar artificialmente sus costos y gastos deducibles.",
        question: "¿Cuál es la consecuencia jurídica principal para el contribuyente por incluir costos y gastos ficticios en su declaración de renta?",
        options: [
            "Solo debe corregir su declaración excluyendo los costos y gastos ficticios",
            "Debe pagar el impuesto omitido, los intereses moratorios y una sanción por inexactitud del 100% del impuesto omitido",
            "Se configura el delito de defraudación tributaria, además de las sanciones administrativas correspondientes",
            "Únicamente se impone una sanción administrativa equivalente al 20% del valor de los costos y gastos ficticios"
        ],
        correctAnswer: 2,
        explanation: "La inclusión de costos y gastos ficticios en la declaración de renta tiene graves consecuencias jurídicas. Según el artículo 647 del Estatuto Tributario, se impone una sanción por inexactitud equivalente al 100% de la diferencia entre el saldo a pagar o saldo a favor determinado en la liquidación oficial y el declarado por el contribuyente. Adicionalmente, de acuerdo con el artículo 434A del Código Penal, modificado por la Ley 1943 de 2018 y la Ley 2010 de 2019, quien obtenga un provecho ilícito para sí o para un tercero, mediante la utilización de documentos falsos que soporten gastos o costos en declaraciones tributarias, incurrirá en el delito de defraudación tributaria, con penas de prisión de 36 a 60 meses y multa del 50% del valor del impuesto determinado fraudulentamente. Por lo tanto, además de las sanciones administrativas (pago del impuesto omitido, intereses moratorios y sanción por inexactitud), se configura un delito penal que puede acarrear penas privativas de la libertad."
    },
    {
        id: "fiscalizacion_010",
        category: "fiscalizacion",
        difficulty: "media",
        text: "La DIAN ha notificado a un contribuyente un pliego de cargos por no enviar información exigida mediante requerimiento oficial.",
        question: "¿Cuál es el plazo que tiene el contribuyente para responder el pliego de cargos según el Estatuto Tributario?",
        options: [
            "5 días hábiles improrrogables",
            "10 días hábiles, prorrogables por un término igual",
            "1 mes calendario, sin posibilidad de prórroga",
            "3 meses contados a partir de la notificación"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el artículo 638 del Estatuto Tributario, cuando la administración tributaria proponga una sanción mediante pliego de cargos, el contribuyente tiene un plazo de diez (10) días hábiles para responder, contados a partir de la fecha de notificación del pliego. Este plazo puede ser prorrogado por un término igual, es decir, por diez (10) días hábiles adicionales, cuando el contribuyente lo solicite antes del vencimiento del plazo inicial y la administración tributaria considere que existen razones que justifican la prórroga. En la respuesta al pliego de cargos, el contribuyente puede solicitar la práctica de pruebas, controvertir las existentes y alegar lo que considere pertinente para su defensa. Es importante tener en cuenta que, si el contribuyente no responde el pliego de cargos dentro del plazo establecido, la administración tributaria procederá a imponer la sanción mediante resolución, contra la cual procederá el recurso de reconsideración."
    },
    {
        id: "fiscalizacion_011",
        category: "fiscalizacion",
        difficulty: "baja",
        text: "Un contribuyente ha sido notificado de una liquidación oficial de corrección aritmética que modifica su declaración de renta por errores de suma, resta, multiplicación o división.",
        question: "¿Qué recurso puede interponer el contribuyente contra esta liquidación oficial de corrección aritmética y en qué plazo?",
        options: [
            "Recurso de reposición, dentro de los 10 días hábiles siguientes a la notificación",
            "Recurso de reconsideración, dentro de los 2 meses siguientes a la notificación",
            "Recurso de apelación, dentro del mes siguiente a la notificación",
            "Recurso de queja, dentro de los 5 días hábiles siguientes a la notificación"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el artículo 720 del Estatuto Tributario, contra las liquidaciones oficiales, incluida la liquidación oficial de corrección aritmética, procede el recurso de reconsideración. Este recurso, según el artículo 722 del mismo Estatuto, debe interponerse dentro de los dos (2) meses siguientes a la notificación del acto administrativo que se impugna, ante el funcionario que expidió la liquidación oficial. El recurso de reconsideración debe cumplir con los requisitos establecidos en el artículo 722, como presentarse por escrito, interponerse dentro del plazo legal, expresar los motivos de inconformidad con la liquidación, y solicitar y aportar las pruebas que se pretenda hacer valer. Es importante destacar que, según el artículo 720, el recurso de reconsideración es un requisito de procedibilidad para acudir a la jurisdicción contencioso administrativa, es decir, el contribuyente debe agotar esta vía administrativa antes de poder demandar el acto administrativo ante los tribunales."
    },
    {
        id: "fiscalizacion_012",
        category: "fiscalizacion",
        difficulty: "alta",
        text: "La DIAN ha iniciado un proceso de fiscalización a una empresa multinacional por presuntas irregularidades en la determinación de precios de transferencia. La empresa ha presentado un estudio de precios de transferencia utilizando el método de márgenes transaccionales de utilidad de operación.",
        question: "¿Cuál es el indicador de rentabilidad más adecuado para aplicar el método de márgenes transaccionales de utilidad de operación cuando la empresa analizada es un distribuidor que no agrega valor significativo a los productos?",
        options: [
            "Margen bruto sobre costos",
            "Margen operativo sobre ventas",
            "Retorno sobre activos",
            "Berry ratio (margen bruto sobre gastos operativos)"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el artículo 260-3 del Estatuto Tributario y la Resolución 2 de 2020 de la DIAN, que establece los lineamientos para la aplicación de los métodos de precios de transferencia, el indicador de rentabilidad más adecuado para aplicar el método de márgenes transaccionales de utilidad de operación (MMTUO) cuando la empresa analizada es un distribuidor que no agrega valor significativo a los productos es el margen operativo sobre ventas. Este indicador, también conocido como ROS (Return on Sales), se calcula dividiendo la utilidad operativa entre las ventas netas, y mide la rentabilidad operativa de la empresa en relación con sus ventas. Es especialmente útil para analizar empresas distribuidoras porque refleja adecuadamente la función principal de distribución, que consiste en comprar productos y revenderlos sin transformación significativa. Además, este indicador es menos sensible a las diferencias en la clasificación contable de los costos y gastos entre la empresa analizada y las comparables, lo que lo hace más confiable en análisis de precios de transferencia para distribuidores."
    },
    {
        id: "fiscalizacion_013",
        category: "fiscalizacion",
        difficulty: "media",
        text: "La DIAN ha notificado a un contribuyente un emplazamiento para declarar por no haber presentado su declaración de IVA dentro del plazo establecido.",
        question: "¿Cuál es el efecto de presentar la declaración de IVA con posterioridad al emplazamiento para declarar?",
        options: [
            "No hay ningún efecto, la declaración se considera presentada en tiempo",
            "La sanción por extemporaneidad se incrementa en un 10% del total del impuesto a cargo",
            "La sanción por no declarar se reduce a la mitad",
            "Se pierde el derecho a solicitar devolución o compensación de saldos a favor"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 643 del Estatuto Tributario, cuando un contribuyente presenta su declaración con posterioridad al emplazamiento para declarar y antes de que se le haya notificado la liquidación de aforo, la sanción por no declarar se reduce a la mitad. El emplazamiento para declarar es el acto mediante el cual la administración tributaria conmina al contribuyente que no ha cumplido con la obligación de declarar para que lo haga en el término de un mes. Si el contribuyente presenta la declaración dentro de este término, evita que la administración tributaria le imponga la sanción completa por no declarar mediante liquidación de aforo, beneficiándose de la reducción a la mitad de dicha sanción. Es importante destacar que, según el mismo artículo, si el contribuyente presenta la declaración con ocasión de la respuesta al emplazamiento, es decir, dentro del mes siguiente a su notificación, la sanción por no declarar se reduce al 10% de la inicialmente prevista."
    },
    {
        id: "fiscalizacion_014",
        category: "fiscalizacion",
        difficulty: "baja",
        text: "La DIAN ha notificado a un contribuyente un requerimiento ordinario solicitando información sobre sus operaciones comerciales del año anterior.",
        question: "¿Qué consecuencia enfrenta el contribuyente si no responde el requerimiento ordinario dentro del plazo establecido?",
        options: [
            "Sanción por no enviar información, que puede llegar hasta 15.000 UVT",
            "Clausura del establecimiento de comercio por 3 días",
            "Imposición automática de una liquidación oficial de aforo",
            "Inclusión en el Boletín de Deudores Morosos del Estado"
        ],
        correctAnswer: 0,
        explanation: "De acuerdo con el artículo 651 del Estatuto Tributario, las personas y entidades que no suministren la información requerida por la administración tributaria dentro del plazo establecido, o la suministren en forma errónea, incompleta o extemporánea, se harán acreedoras a una sanción por no enviar información. Esta sanción consiste en una multa que puede llegar hasta 15.000 UVT (Unidades de Valor Tributario), dependiendo de los ingresos netos del contribuyente y del tipo de información omitida. La sanción se gradúa según la gravedad de la infracción, teniendo en cuenta factores como la reincidencia, la resistencia u obstrucción a la acción investigativa de la administración tributaria, y la utilización de medios fraudulentos en la comisión de la infracción. Es importante destacar que esta sanción se impone mediante resolución independiente, previo traslado de cargos al contribuyente, quien tiene un término de un mes para responder."
    },
    {
        id: "fiscalizacion_015",
        category: "fiscalizacion",
        difficulty: "alta",
        text: "La DIAN ha iniciado un proceso de fiscalización a una empresa por presuntas irregularidades en la determinación del impuesto sobre la renta. Durante la investigación, la administración tributaria encuentra que la empresa ha realizado operaciones con vinculados económicos del exterior sin cumplir con el régimen de precios de transferencia.",
        question: "¿Cuál es la sanción por omisión de información en la declaración informativa de precios de transferencia según el Estatuto Tributario?",
        options: [
            "2% del valor total de las operaciones con vinculados económicos, sin que exceda de 20.000 UVT",
            "4% del valor total de las operaciones con vinculados económicos, sin que exceda de 25.000 UVT",
            "1% del valor total de las operaciones con vinculados económicos, sin que exceda de 15.000 UVT",
            "3% del valor total de las operaciones con vinculados económicos, sin que exceda de 30.000 UVT"
        ],
        correctAnswer: 0,
        explanation: "De acuerdo con el artículo 260-11 del Estatuto Tributario, la sanción por omisión de información en la declaración informativa de precios de transferencia es del 2% del valor total de las operaciones con vinculados económicos respecto de las cuales se suministró información incompleta o se omitió información, sin que exceda de 20.000 UVT (Unidades de Valor Tributario). Cuando no sea posible establecer la base para determinar la sanción, esta será del 0,5% del valor total de las operaciones consignadas en la declaración informativa, sin que exceda de 10.000 UVT. Es importante destacar que, según el mismo artículo, cuando la omisión de información o la información inexacta corresponda a más del 10% del total de las operaciones con vinculados económicos, la sanción se incrementará en un 30% adicional. Además, cuando el contribuyente subsane la omisión antes de la notificación de la liquidación de revisión, la sanción se reducirá al 50% de la suma determinada."
    },
    {
        id: "fiscalizacion_016",
        category: "fiscalizacion",
        difficulty: "media",
        text: "La DIAN ha notificado a un contribuyente un requerimiento especial en el que propone modificar su declaración de renta, rechazando algunos costos y deducciones por falta de soporte documental.",
        question: "¿Qué consecuencia tiene para el contribuyente aceptar total o parcialmente los hechos planteados en el requerimiento especial?",
        options: [
            "Pierde el derecho a interponer recursos contra la liquidación oficial de revisión",
            "La sanción por inexactitud se reduce a la cuarta parte de la propuesta en el requerimiento especial",
            "Debe pagar inmediatamente el total del mayor impuesto propuesto",
            "Se le concede automáticamente un plazo adicional de 12 meses para presentar los soportes faltantes"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el artículo 709 del Estatuto Tributario, cuando el contribuyente acepta total o parcialmente los hechos planteados en el requerimiento especial, la sanción por inexactitud se reduce a la cuarta parte de la planteada por la administración tributaria en relación con los hechos aceptados. Para que proceda esta reducción, el contribuyente debe corregir su declaración incluyendo los mayores valores aceptados y adjuntar a la respuesta al requerimiento especial copia o fotocopia de la corrección y de la prueba del pago o acuerdo de pago de los impuestos, retenciones y sanciones, incluida la reducida. Esta disposición busca incentivar la terminación anticipada de las controversias tributarias, permitiendo al contribuyente beneficiarse de una reducción significativa en la sanción por inexactitud cuando reconoce los errores u omisiones en su declaración y procede a corregirla y pagar los mayores valores resultantes."
    },
    {
        id: "fiscalizacion_017",
        category: "fiscalizacion",
        difficulty: "baja",
        text: "La DIAN ha notificado a un contribuyente una liquidación oficial de revisión que modifica su declaración de renta. El contribuyente no está de acuerdo con la liquidación y decide interponer recurso de reconsideración.",
        question: "¿Cuál es el plazo que tiene la DIAN para resolver el recurso de reconsideración según el Estatuto Tributario?",
        options: [
            "1 mes contado a partir de su interposición en debida forma",
            "6 meses contados a partir de su interposición en debida forma",
            "1 año contado a partir de su interposición en debida forma",
            "2 años contados a partir de su interposición en debida forma"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 732 del Estatuto Tributario, la DIAN tiene un plazo de un (1) año contado a partir de la fecha de interposición en debida forma para resolver el recurso de reconsideración. Este plazo es perentorio, lo que significa que si la administración tributaria no resuelve el recurso dentro de este término, se entenderá fallado a favor del contribuyente, operando el silencio administrativo positivo. En este caso, la competencia para resolver el recurso se traslada automáticamente al superior inmediato administrativo o al funcionario que este designe, quien deberá resolverlo dentro del término improrrogable de dos (2) meses contados a partir de la fecha en que se venció el plazo para resolver por parte del funcionario inicial. Es importante destacar que, según el artículo 733 del mismo Estatuto, el término para resolver el recurso se suspende cuando se practique inspección tributaria, durante el término que dure la inspección si esta se practica a solicitud del contribuyente, y hasta por tres meses cuando se practica de oficio."
    },
    {
        id: "fiscalizacion_018",
        category: "fiscalizacion",
        difficulty: "alta",
        text: "La DIAN ha iniciado un proceso de fiscalización a una empresa por presuntas irregularidades en la determinación del impuesto sobre la renta. Durante la investigación, la administración tributaria encuentra que la empresa ha realizado operaciones con paraísos fiscales sin cumplir con los requisitos legales.",
        question: "¿Cuál es el tratamiento fiscal de los pagos realizados a personas, sociedades, entidades o empresas ubicadas en paraísos fiscales según el Estatuto Tributario?",
        options: [
            "Son deducibles en su totalidad sin requisitos adicionales",
            "No son deducibles bajo ninguna circunstancia",
            "Son deducibles siempre que correspondan a operaciones reales, estén sujetos a retención en la fuente y se cumpla con el régimen de precios de transferencia",
            "Son deducibles hasta un límite del 50% del valor de la operación"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 124-2 del Estatuto Tributario, los pagos o abonos en cuenta a personas, sociedades, entidades o empresas ubicadas en jurisdicciones no cooperantes, de baja o nula imposición o a regímenes tributarios preferenciales (paraísos fiscales) solo son deducibles en el impuesto sobre la renta si cumplen con los siguientes requisitos: 1) Que el gasto corresponda a una operación real, es decir, que efectivamente se haya realizado la transacción que da origen al pago; 2) Que el pago constituya ingreso gravable para su beneficiario; 3) Que el pago esté sujeto a retención en la fuente por concepto de impuesto sobre la renta, cuando el beneficiario del pago sea una persona natural; y 4) Que se cumpla con las obligaciones de documentación, información y comparabilidad establecidas en el régimen de precios de transferencia, independientemente de que el contribuyente esté o no sometido a dicho régimen. Adicionalmente, según el parágrafo 2 del artículo 260-7, estos pagos están sometidos a un régimen de retención en la fuente a título de impuesto sobre la renta a la tarifa del 33%."
    },
    {
        id: "fiscalizacion_019",
        category: "fiscalizacion",
        difficulty: "media",
        text: "La DIAN ha notificado a un contribuyente un pliego de cargos por no llevar libros de contabilidad o llevarlos de manera que no permitan verificar el monto de los ingresos, costos, deducciones o impuestos descontables.",
        question: "¿Cuál es la sanción que puede imponer la DIAN por irregularidades en la contabilidad según el Estatuto Tributario?",
        options: [
            "Clausura del establecimiento por 3 días",
            "Multa equivalente al 0,5% del mayor valor entre el patrimonio líquido y los ingresos netos del año anterior, sin exceder de 20.000 UVT",
            "Desconocimiento de costos, gastos, deducciones, descuentos, exenciones, pasivos o impuestos descontables",
            "Suspensión de la facultad para firmar declaraciones tributarias por un año"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 654 del Estatuto Tributario, en concordancia con el artículo 655, la sanción por irregularidades en la contabilidad consiste en el desconocimiento de costos, gastos, deducciones, descuentos, exenciones, pasivos o impuestos descontables. Esta sanción se impone mediante resolución independiente, previo traslado de cargos al contribuyente, quien tiene un término de un mes para responder. El artículo 654 establece que son hechos irregulares en la contabilidad: 1) No llevar libros de contabilidad si existe obligación; 2) No tener registrados los libros principales de contabilidad; 3) No exhibir los libros de contabilidad cuando las autoridades tributarias lo exijan; 4) Llevar doble contabilidad; 5) No llevar los libros de contabilidad en forma que permitan verificar o determinar los factores necesarios para establecer las bases de liquidación de los impuestos; y 6) Cuando entre la fecha de las últimas operaciones registradas en los libros y el último día del mes anterior a aquel en el cual se solicita su exhibición, existan más de cuatro meses de atraso."
    },
    {
        id: "fiscalizacion_020",
        category: "fiscalizacion",
        difficulty: "baja",
        text: "La DIAN ha notificado a un contribuyente una liquidación oficial de aforo por no haber presentado su declaración de renta dentro del plazo establecido ni después del emplazamiento para declarar.",
        question: "¿Qué recurso puede interponer el contribuyente contra esta liquidación oficial de aforo y en qué plazo?",
        options: [
            "Recurso de reposición, dentro de los 10 días hábiles siguientes a la notificación",
            "Recurso de reconsideración, dentro de los 2 meses siguientes a la notificación",
            "Recurso de apelación, dentro del mes siguiente a la notificación",
            "Recurso de queja, dentro de los 5 días hábiles siguientes a la notificación"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el artículo 720 del Estatuto Tributario, contra las liquidaciones oficiales, incluida la liquidación oficial de aforo, procede el recurso de reconsideración. Este recurso, según el artículo 722 del mismo Estatuto, debe interponerse dentro de los dos (2) meses siguientes a la notificación del acto administrativo que se impugna, ante el funcionario que expidió la liquidación oficial. El recurso de reconsideración debe cumplir con los requisitos establecidos en el artículo 722, como presentarse por escrito, interponerse dentro del plazo legal, expresar los motivos de inconformidad con la liquidación, y solicitar y aportar las pruebas que se pretenda hacer valer. Es importante destacar que, según el artículo 720, el recurso de reconsideración es un requisito de procedibilidad para acudir a la jurisdicción contencioso administrativa, es decir, el contribuyente debe agotar esta vía administrativa antes de poder demandar el acto administrativo ante los tribunales."
    }
];