// Preguntas sobre Sistema Cambiario
const questions_sistema_cambiario = [
    {
        id: "cambiario_001",
        category: "sistema_cambiario",
        difficulty: "baja",
        text: "Una empresa colombiana exporta mercancías por valor de USD 15,000 a un cliente en Estados Unidos.",
        question: "¿Cuál es la obligación cambiaria principal del exportador respecto a las divisas recibidas por esta operación?",
        options: [
            "Debe canalizar obligatoriamente las divisas a través del mercado cambiario dentro de los 6 meses siguientes a la fecha de pago",
            "Puede mantener indefinidamente las divisas en el exterior sin obligación de reintegro",
            "Debe declarar las divisas ante la DIAN pero no está obligado a reintegrarlas al país",
            "Debe convertir las divisas a pesos colombianos en el mismo día de su recepción"
        ],
        correctAnswer: 0,
        explanation: "De acuerdo con la Resolución Externa 1 de 2018 de la Junta Directiva del Banco de la República y la Circular Reglamentaria Externa DCIN-83, los exportadores colombianos tienen la obligación de canalizar las divisas provenientes de sus exportaciones a través del mercado cambiario dentro de los seis (6) meses siguientes a la fecha de su recepción. Esta canalización se realiza mediante la presentación del Formulario No. 2 'Declaración de Cambio por Exportaciones de Bienes' ante un intermediario del mercado cambiario (bancos comerciales, corporaciones financieras, etc.). El exportador puede decidir si monetiza las divisas (las convierte a pesos) o las mantiene en una cuenta de compensación en el exterior, pero en ambos casos debe cumplir con la obligación de canalización formal a través del mercado cambiario, reportando la operación dentro del plazo establecido."
    },
    {
        id: "cambiario_002",
        category: "sistema_cambiario",
        difficulty: "media",
        text: "Una empresa colombiana necesita realizar un pago por USD 50,000 a un proveedor en el exterior por concepto de importación de materias primas.",
        question: "¿Cuál es el procedimiento cambiario correcto para realizar este pago según la normativa colombiana?",
        options: [
            "Puede realizar el pago en efectivo directamente al proveedor sin ningún trámite cambiario",
            "Debe canalizar el pago a través del mercado cambiario presentando la declaración de cambio por importaciones (Formulario No. 1) ante un intermediario del mercado cambiario",
            "Debe solicitar autorización previa a la DIAN para realizar cualquier pago al exterior",
            "Puede realizar el pago únicamente mediante compensación con otras operaciones de comercio exterior"
        ],
        correctAnswer: 1,
        explanation: "Según la Resolución Externa 1 de 2018 de la Junta Directiva del Banco de la República y la Circular Reglamentaria Externa DCIN-83, los residentes colombianos que realicen pagos por importaciones de bienes deben canalizar dichos pagos a través del mercado cambiario. Para ello, deben presentar la declaración de cambio por importaciones (Formulario No. 1) ante un intermediario del mercado cambiario (banco comercial, corporación financiera, etc.) o a través de una cuenta de compensación en el exterior registrada ante el Banco de la República. En esta declaración se debe indicar el valor de la importación, la fecha de pago, los datos del importador y del exportador, entre otros. No se requiere autorización previa de la DIAN para realizar estos pagos, pero sí es obligatorio cumplir con la canalización a través del mercado cambiario y conservar los documentos soporte de la operación por un período mínimo de tres años."
    },
    {
        id: "cambiario_003",
        category: "sistema_cambiario",
        difficulty: "alta",
        text: "Una empresa multinacional con operaciones en Colombia ha recibido un préstamo en dólares de su casa matriz en el exterior por USD 2,000,000 con un plazo de 5 años.",
        question: "¿Cuáles son las obligaciones cambiarias que debe cumplir la empresa colombiana respecto a este préstamo externo?",
        options: [
            "No tiene obligaciones cambiarias por tratarse de una operación entre empresas vinculadas",
            "Debe registrar el préstamo ante el Banco de la República y canalizar a través del mercado cambiario tanto el desembolso como los pagos de capital e intereses",
            "Debe solicitar autorización previa del Ministerio de Hacienda para recibir el préstamo",
            "Solo debe declarar el préstamo en su declaración de renta anual, sin obligaciones cambiarias específicas"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con la Resolución Externa 1 de 2018 de la Junta Directiva del Banco de la República y la Circular Reglamentaria Externa DCIN-83, cuando un residente colombiano recibe un préstamo en moneda extranjera de un no residente (incluyendo su casa matriz en el exterior), debe cumplir con las siguientes obligaciones cambiarias: 1) Informar el préstamo al Banco de la República mediante el Formulario No. 6 'Información de Endeudamiento Externo Otorgado a Residentes' dentro de los seis meses siguientes al desembolso; 2) Canalizar el desembolso del préstamo a través del mercado cambiario, presentando la declaración de cambio por endeudamiento externo (Formulario No. 3) ante un intermediario del mercado cambiario o a través de una cuenta de compensación; 3) Canalizar los pagos de capital e intereses a través del mercado cambiario, utilizando también el Formulario No. 3. Estas obligaciones aplican independientemente de que se trate de operaciones entre empresas vinculadas, y no se requiere autorización previa del Ministerio de Hacienda."
    },
    {
        id: "cambiario_004",
        category: "sistema_cambiario",
        difficulty: "baja",
        text: "Un ciudadano colombiano desea abrir una cuenta bancaria en dólares en Estados Unidos.",
        question: "Según la normativa cambiaria colombiana, ¿qué debe hacer este ciudadano respecto a esta cuenta en el exterior?",
        options: [
            "Está prohibido para los residentes colombianos tener cuentas bancarias en el exterior",
            "Debe solicitar autorización previa a la DIAN para abrir la cuenta",
            "Puede abrir la cuenta libremente, pero si la utiliza para operaciones obligatoriamente canalizables debe registrarla como cuenta de compensación ante el Banco de la República",
            "Debe transferir mensualmente a Colombia al menos el 80% del saldo de la cuenta"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el régimen cambiario colombiano, específicamente la Resolución Externa 1 de 2018 de la Junta Directiva del Banco de la República y la Circular Reglamentaria Externa DCIN-83, los residentes colombianos pueden abrir y mantener cuentas bancarias en el exterior libremente, sin necesidad de solicitar autorización previa a ninguna autoridad. Sin embargo, si la cuenta se utiliza para operaciones que son obligatoriamente canalizables a través del mercado cambiario (como exportaciones, importaciones, endeudamiento externo, inversiones internacionales, etc.), debe registrarse como cuenta de compensación ante el Banco de la República mediante el Formulario No. 10 'Registro, Informe de Movimientos y/o Cancelación Cuenta de Compensación'. Una vez registrada, el titular debe presentar mensualmente el Formulario No. 10 informando los movimientos de la cuenta y, adicionalmente, las declaraciones de cambio correspondientes a las operaciones realizadas a través de ella."
    },
    {
        id: "cambiario_005",
        category: "sistema_cambiario",
        difficulty: "media",
        text: "Una empresa extranjera desea realizar una inversión directa en una compañía colombiana por valor de USD 500,000.",
        question: "¿Cuál es el procedimiento cambiario correcto para registrar esta inversión extranjera en Colombia?",
        options: [
            "La inversión debe ser autorizada previamente por el Ministerio de Comercio, Industria y Turismo",
            "El inversionista debe canalizar las divisas a través del mercado cambiario y registrar la inversión ante el Banco de la República",
            "La inversión debe realizarse exclusivamente mediante el aporte de maquinaria y equipo",
            "El registro de la inversión es opcional y solo tiene efectos estadísticos"
        ],
        correctAnswer: 1,
        explanation: "Según el Decreto 1068 de 2015, la Resolución Externa 1 de 2018 de la Junta Directiva del Banco de la República y la Circular Reglamentaria Externa DCIN-83, para realizar una inversión extranjera directa en Colombia, el inversionista debe: 1) Canalizar las divisas a través del mercado cambiario, presentando la declaración de cambio por inversiones internacionales (Formulario No. 4) ante un intermediario del mercado cambiario o a través de una cuenta de compensación; 2) Registrar la inversión ante el Banco de la República mediante la presentación del Formulario No. 11 'Declaración de Registro de Inversiones Internacionales' dentro de los 12 meses siguientes a la fecha de la canalización. Este registro es obligatorio y tiene efectos cambiarios, permitiendo al inversionista extranjero remitir al exterior las utilidades generadas por la inversión y repatriar el capital invertido en caso de venta o liquidación. No se requiere autorización previa del Ministerio de Comercio, Industria y Turismo, ya que el régimen de inversión extranjera en Colombia es de carácter general y automático."
    },
    {
        id: "cambiario_006",
        category: "sistema_cambiario",
        difficulty: "alta",
        text: "Una empresa colombiana ha realizado operaciones de derivados financieros (forwards) con una entidad financiera del exterior para cubrir el riesgo cambiario de sus exportaciones futuras.",
        question: "Según la normativa cambiaria colombiana, ¿cómo debe manejar esta empresa las operaciones de derivados con la entidad financiera del exterior?",
        options: [
            "Estas operaciones están prohibidas para residentes colombianos con entidades financieras del exterior",
            "Puede realizar estas operaciones libremente, pero debe informarlas al Banco de la República",
            "Debe solicitar autorización previa a la Superintendencia Financiera para cada operación",
            "Solo puede realizar estas operaciones a través de intermediarios del mercado cambiario en Colombia"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con la Resolución Externa 1 de 2018 de la Junta Directiva del Banco de la República y la Circular Reglamentaria Externa DODM-144, los residentes colombianos pueden celebrar operaciones de derivados financieros sobre tasa de cambio con agentes del exterior que realicen este tipo de operaciones de manera profesional, como mecanismo de cobertura. Estas operaciones deben ser informadas al Banco de la República mediante el Formato de Reporte de Operaciones de Derivados realizadas con agentes del exterior, dentro de los 15 días hábiles siguientes a su celebración. Los pagos y cobros resultantes de la liquidación de estas operaciones deben canalizarse a través del mercado cambiario, utilizando el numeral cambiario correspondiente en la declaración de cambio. No se requiere autorización previa de la Superintendencia Financiera ni es obligatorio realizar estas operaciones exclusivamente a través de intermediarios del mercado cambiario en Colombia."
    },
    {
        id: "cambiario_007",
        category: "sistema_cambiario",
        difficulty: "baja",
        text: "Un turista extranjero ingresa a Colombia con USD 12,000 en efectivo.",
        question: "¿Qué obligación tiene este turista según la normativa cambiaria colombiana?",
        options: [
            "Debe declarar el ingreso de las divisas ante la autoridad aduanera utilizando el formulario de declaración de equipaje, títulos representativos de dinero y divisas",
            "Debe cambiar obligatoriamente el 50% de las divisas a pesos colombianos",
            "Debe depositar las divisas en una cuenta bancaria colombiana durante su estadía",
            "No tiene ninguna obligación ya que los turistas están exentos de control cambiario"
        ],
        correctAnswer: 0,
        explanation: "De acuerdo con la Resolución Externa 1 de 2018 de la Junta Directiva del Banco de la República y la regulación aduanera (Decreto 1165 de 2019), toda persona que ingrese al país con divisas o títulos representativos de divisas por un monto superior a USD 10,000 o su equivalente en otras monedas, debe declarar este hecho ante la autoridad aduanera utilizando el formulario de declaración de equipaje, títulos representativos de dinero y divisas. Esta obligación aplica tanto a residentes como a no residentes, incluidos los turistas. No existe obligación de cambiar un porcentaje de las divisas a pesos colombianos ni de depositarlas en una cuenta bancaria durante la estadía. El incumplimiento de esta obligación puede dar lugar a la retención de las divisas no declaradas y a sanciones administrativas por parte de la DIAN."
    },
    {
        id: "cambiario_008",
        category: "sistema_cambiario",
        difficulty: "media",
        text: "Una empresa colombiana necesita realizar un pago de USD 5,000 a un proveedor en el exterior por concepto de servicios técnicos.",
        question: "¿Cómo debe proceder la empresa para cumplir con la normativa cambiaria colombiana?",
        options: [
            "Debe solicitar autorización previa a la DIAN para realizar el pago",
            "Puede realizar el pago directamente desde su cuenta bancaria en Colombia sin ningún trámite cambiario",
            "Debe canalizar el pago a través del mercado cambiario presentando la declaración de cambio por servicios, transferencias y otros conceptos (Formulario No. 5)",
            "Solo puede realizar el pago mediante compensación con otras operaciones comerciales"
        ],
        correctAnswer: 2,
        explanation: "Según la Resolución Externa 1 de 2018 de la Junta Directiva del Banco de la República y la Circular Reglamentaria Externa DCIN-83, los pagos por servicios al exterior son operaciones de obligatoria canalización a través del mercado cambiario. Para realizar este pago, la empresa debe presentar la declaración de cambio por servicios, transferencias y otros conceptos (Formulario No. 5) ante un intermediario del mercado cambiario (banco comercial, corporación financiera, etc.) o a través de una cuenta de compensación en el exterior registrada ante el Banco de la República. En esta declaración se debe indicar el concepto específico del pago (en este caso, servicios técnicos), el valor, la fecha, los datos del ordenante y del beneficiario, entre otros. No se requiere autorización previa de la DIAN para realizar estos pagos, pero sí es obligatorio cumplir con la canalización a través del mercado cambiario y conservar los documentos soporte de la operación por un período mínimo de tres años."
    },
    {
        id: "cambiario_009",
        category: "sistema_cambiario",
        difficulty: "alta",
        text: "Una empresa colombiana ha recibido un anticipo por USD 100,000 por una exportación futura de mercancías que serán entregadas en 6 meses.",
        question: "¿Cuál es el tratamiento cambiario correcto para este anticipo según la normativa colombiana?",
        options: [
            "Debe constituir un depósito en dólares en el Banco de la República hasta que se realice la exportación",
            "Debe canalizar el anticipo a través del mercado cambiario como una exportación de bienes, utilizando el Formulario No. 2",
            "Debe solicitar autorización previa a la DIAN para recibir anticipos por exportaciones",
            "Debe registrar el anticipo como un endeudamiento externo utilizando el Formulario No. 6"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con la Resolución Externa 1 de 2018 de la Junta Directiva del Banco de la República y la Circular Reglamentaria Externa DCIN-83, los anticipos recibidos por exportaciones futuras deben canalizarse a través del mercado cambiario como una exportación de bienes, utilizando la declaración de cambio por exportaciones de bienes (Formulario No. 2) ante un intermediario del mercado cambiario o a través de una cuenta de compensación. En el formulario se debe indicar que se trata de un anticipo por exportaciones futuras, utilizando el numeral cambiario correspondiente (1510 - Anticipos por exportaciones de bienes). Posteriormente, cuando se realice la exportación física de las mercancías, el exportador debe presentar la declaración de exportación (DEX) ante la DIAN y relacionarla con el anticipo previamente recibido. No se requiere constituir depósitos en el Banco de la República ni solicitar autorizaciones previas, y estos anticipos no se consideran endeudamiento externo."
    },
    {
        id: "cambiario_010",
        category: "sistema_cambiario",
        difficulty: "media",
        text: "Una empresa colombiana realiza una importación de mercancías y acuerda con su proveedor en el exterior un plazo de pago de 180 días.",
        question: "Según la normativa cambiaria colombiana, ¿cómo se clasifica esta operación y qué obligaciones genera?",
        options: [
            "Se considera una financiación de importación y debe informarse como endeudamiento externo si el plazo es superior a 6 meses",
            "Se considera una importación normal sin obligaciones cambiarias adicionales, independientemente del plazo",
            "Está prohibido acordar plazos superiores a 90 días para el pago de importaciones",
            "Se requiere autorización previa del Banco de la República para plazos superiores a 30 días"
        ],
        correctAnswer: 0,
        explanation: "Según la Resolución Externa 1 de 2018 de la Junta Directiva del Banco de la República y la Circular Reglamentaria Externa DCIN-83, cuando una importación se financia con plazo superior a seis (6) meses, contados desde la fecha del documento de transporte, se considera una operación de endeudamiento externo pasivo. En este caso, además de canalizar el pago a través del mercado cambiario utilizando la declaración de cambio por importaciones (Formulario No. 1), el importador debe informar la financiación al Banco de la República mediante el Formulario No. 6 'Información de Endeudamiento Externo Otorgado a Residentes', indicando las condiciones financieras del crédito (monto, plazo, tasa de interés, etc.). No existe prohibición para acordar plazos superiores a 90 días ni se requiere autorización previa del Banco de la República, pero sí es obligatorio cumplir con el requisito de información del endeudamiento externo cuando el plazo supera los 6 meses."
    },
    {
        id: "cambiario_011",
        category: "sistema_cambiario",
        difficulty: "baja",
        text: "Un ciudadano colombiano desea enviar una remesa familiar por USD 2,000 a un familiar en el exterior.",
        question: "¿Cuál es el procedimiento cambiario correcto para realizar este envío según la normativa colombiana?",
        options: [
            "Debe solicitar autorización previa a la DIAN para enviar remesas al exterior",
            "Puede enviar la remesa a través de un intermediario del mercado cambiario presentando la declaración de cambio por servicios, transferencias y otros conceptos (Formulario No. 5)",
            "Solo puede enviar remesas familiares por un monto máximo de USD 1,000 mensuales",
            "Debe justificar ante el Banco de la República el parentesco con el beneficiario de la remesa"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con la Resolución Externa 1 de 2018 de la Junta Directiva del Banco de la República y la Circular Reglamentaria Externa DCIN-83, las remesas familiares son operaciones de obligatoria canalización a través del mercado cambiario. Para enviar una remesa familiar al exterior, el remitente debe acudir a un intermediario del mercado cambiario (banco, casa de cambio, etc.) y presentar la declaración de cambio por servicios, transferencias y otros conceptos (Formulario No. 5), indicando que se trata de una remesa familiar (numeral cambiario 1809 - Remesas de trabajadores). No existe un límite máximo establecido para el envío de remesas familiares, ni se requiere autorización previa de la DIAN o justificación de parentesco ante el Banco de la República. Sin embargo, el intermediario del mercado cambiario puede solicitar información adicional como parte de sus procedimientos de conocimiento del cliente y prevención del lavado de activos."
    },
    {
        id: "cambiario_012",
        category: "sistema_cambiario",
        difficulty: "alta",
        text: "Una empresa multinacional con operaciones en Colombia desea compensar obligaciones recíprocas con su casa matriz en el exterior, derivadas de operaciones de comercio exterior.",
        question: "Según la normativa cambiaria colombiana, ¿es posible realizar esta compensación y bajo qué condiciones?",
        options: [
            "La compensación está prohibida; cada operación debe canalizarse individualmente a través del mercado cambiario",
            "La compensación es posible únicamente para operaciones entre empresas del mismo grupo económico, previa autorización del Banco de la República",
            "La compensación es posible mediante el mecanismo de cuenta de compensación, informando las operaciones al Banco de la República",
            "La compensación solo es permitida para operaciones de valor inferior a USD 10,000"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con la Resolución Externa 1 de 2018 de la Junta Directiva del Banco de la República y la Circular Reglamentaria Externa DCIN-83, la compensación de obligaciones recíprocas derivadas de operaciones de comercio exterior entre residentes y no residentes es posible mediante el mecanismo de cuenta de compensación. Para ello, la empresa colombiana debe: 1) Registrar una cuenta bancaria en el exterior como cuenta de compensación ante el Banco de la República mediante el Formulario No. 10; 2) Realizar las operaciones de compensación a través de esta cuenta; 3) Presentar mensualmente el Formulario No. 10 informando los movimientos de la cuenta; y 4) Presentar las declaraciones de cambio correspondientes a cada operación compensada (exportaciones, importaciones, servicios, etc.), indicando que se utilizó el mecanismo de compensación. No se requiere autorización previa del Banco de la República para cada operación de compensación, pero sí es obligatorio cumplir con los requisitos de información y registro."
    },
    {
        id: "cambiario_013",
        category: "sistema_cambiario",
        difficulty: "media",
        text: "Una empresa colombiana ha identificado un error en una declaración de cambio por exportación de bienes (Formulario No. 2) que presentó hace 15 días.",
        question: "¿Cuál es el procedimiento correcto para corregir este error según la normativa cambiaria?",
        options: [
            "No es posible corregir declaraciones de cambio una vez presentadas",
            "Debe solicitar autorización previa a la DIAN para realizar la corrección",
            "Puede presentar una declaración de cambio con el mismo número de referencia, marcando la opción de modificación",
            "Debe anular la declaración original y presentar una nueva"
        ],
        correctAnswer: 2,
        explanation: "Según la Circular Reglamentaria Externa DCIN-83 del Banco de la República, las declaraciones de cambio pueden ser modificadas en cualquier tiempo por parte de los residentes y no residentes que las hayan presentado, para corregir errores o incluir información omitida. Para ello, se debe presentar una nueva declaración de cambio ante el mismo intermediario del mercado cambiario o utilizando la misma cuenta de compensación, con el mismo número de referencia de la declaración original, marcando la opción de 'modificación' y diligenciando todos los campos, tanto los que se mantienen iguales como los que se modifican. No se requiere autorización previa de la DIAN ni del Banco de la República para realizar estas correcciones, y no es necesario anular la declaración original. Sin embargo, es importante tener en cuenta que las modificaciones que impliquen cambios en la información estadística reportada al Banco de la República deben realizarse dentro de los seis meses siguientes a la fecha de la declaración original."
    },
    {
        id: "cambiario_014",
        category: "sistema_cambiario",
        difficulty: "baja",
        text: "Un ciudadano extranjero no residente en Colombia desea comprar dólares en una casa de cambio colombiana.",
        question: "Según la normativa cambiaria colombiana, ¿qué requisitos debe cumplir este ciudadano para realizar la operación?",
        options: [
            "Debe presentar su pasaporte y diligenciar la declaración de cambio simplificada si la operación es superior a USD 200",
            "Solo puede comprar dólares si demuestra que los necesita para salir del país",
            "Está prohibido para los extranjeros comprar divisas en Colombia",
            "Debe solicitar autorización previa al Banco de la República"
        ],
        correctAnswer: 0,
        explanation: "De acuerdo con la Resolución Externa 1 de 2018 de la Junta Directiva del Banco de la República y la Circular Reglamentaria Externa DCIN-83, los no residentes pueden comprar divisas en el mercado cambiario colombiano (casas de cambio, bancos, etc.) presentando su documento de identificación (pasaporte) y diligenciando la declaración de cambio simplificada si la operación es superior a USD 200 o su equivalente en otras monedas. Para operaciones inferiores a este monto, no se requiere declaración de cambio, pero el intermediario del mercado cambiario debe registrar la operación en su sistema. No existe prohibición para que los extranjeros compren divisas en Colombia, ni se requiere demostrar la necesidad de las divisas o solicitar autorización previa al Banco de la República. Sin embargo, el intermediario del mercado cambiario puede solicitar información adicional como parte de sus procedimientos de conocimiento del cliente y prevención del lavado de activos."
    },
    {
        id: "cambiario_015",
        category: "sistema_cambiario",
        difficulty: "alta",
        text: "Una empresa colombiana ha recibido un pago por USD 50,000 correspondiente a una exportación de servicios a un cliente en el exterior.",
        question: "¿Cuál es el tratamiento cambiario correcto para este ingreso según la normativa colombiana?",
        options: [
            "Los servicios no son considerados operaciones de obligatoria canalización a través del mercado cambiario",
            "Debe canalizar el ingreso a través del mercado cambiario utilizando la declaración de cambio por servicios, transferencias y otros conceptos (Formulario No. 5)",
            "Debe registrar el ingreso como inversión extranjera directa",
            "Debe solicitar autorización previa a la DIAN para recibir pagos por servicios del exterior"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con la Resolución Externa 1 de 2018 de la Junta Directiva del Banco de la República y la Circular Reglamentaria Externa DCIN-83, las exportaciones de servicios son operaciones de obligatoria canalización a través del mercado cambiario. Para recibir el pago por una exportación de servicios, la empresa debe canalizar el ingreso a través del mercado cambiario, presentando la declaración de cambio por servicios, transferencias y otros conceptos (Formulario No. 5) ante un intermediario del mercado cambiario o a través de una cuenta de compensación en el exterior registrada ante el Banco de la República. En esta declaración se debe indicar el concepto específico del ingreso (el tipo de servicio exportado), el valor, la fecha, los datos del ordenante y del beneficiario, entre otros. No se requiere autorización previa de la DIAN para recibir estos pagos, ni se deben registrar como inversión extranjera directa, pero sí es obligatorio cumplir con la canalización a través del mercado cambiario y conservar los documentos soporte de la operación por un período mínimo de tres años."
    },
    {
        id: "cambiario_016",
        category: "sistema_cambiario",
        difficulty: "media",
        text: "Una empresa colombiana desea realizar una inversión directa en una compañía en el exterior por valor de USD 300,000.",
        question: "¿Cuál es el procedimiento cambiario correcto para registrar esta inversión colombiana en el exterior?",
        options: [
            "Debe solicitar autorización previa al Ministerio de Comercio, Industria y Turismo",
            "Debe canalizar las divisas a través del mercado cambiario y registrar la inversión ante el Banco de la República",
            "La inversión colombiana en el exterior está sujeta a un impuesto del 5% sobre el valor total",
            "Solo puede realizar la inversión mediante el aporte de mercancías exportadas"
        ],
        correctAnswer: 1,
        explanation: "Según el Decreto 1068 de 2015, la Resolución Externa 1 de 2018 de la Junta Directiva del Banco de la República y la Circular Reglamentaria Externa DCIN-83, para realizar una inversión colombiana en el exterior, el inversionista debe: 1) Canalizar las divisas a través del mercado cambiario, presentando la declaración de cambio por inversiones internacionales (Formulario No. 4) ante un intermediario del mercado cambiario o a través de una cuenta de compensación; 2) Registrar la inversión ante el Banco de la República mediante la presentación del Formulario No. 11 'Declaración de Registro de Inversiones Internacionales' dentro de los 12 meses siguientes a la fecha de la canalización. Este registro es obligatorio y tiene efectos cambiarios, permitiendo al inversionista colombiano remitir al país las utilidades generadas por la inversión y repatriar el capital invertido en caso de venta o liquidación. No se requiere autorización previa del Ministerio de Comercio, Industria y Turismo, no existe un impuesto específico del 5% sobre estas inversiones, y pueden realizarse mediante el giro de divisas, no solo mediante el aporte de mercancías."
    },
    {
        id: "cambiario_017",
        category: "sistema_cambiario",
        difficulty: "baja",
        text: "Un ciudadano colombiano desea viajar al exterior y necesita llevar consigo USD 15,000 en efectivo.",
        question: "Según la normativa cambiaria colombiana, ¿qué debe hacer este ciudadano respecto a la salida de estas divisas?",
        options: [
            "Está prohibido salir del país con más de USD 10,000 en efectivo",
            "Debe declarar la salida de las divisas ante la autoridad aduanera utilizando el formulario de declaración de equipaje, títulos representativos de dinero y divisas",
            "Debe solicitar autorización previa al Banco de la República",
            "Solo puede salir del país con divisas adquiridas en los últimos 30 días"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con la Resolución Externa 1 de 2018 de la Junta Directiva del Banco de la República y la regulación aduanera (Decreto 1165 de 2019), toda persona que salga del país con divisas o títulos representativos de divisas por un monto superior a USD 10,000 o su equivalente en otras monedas, debe declarar este hecho ante la autoridad aduanera utilizando el formulario de declaración de equipaje, títulos representativos de dinero y divisas. No existe prohibición para salir del país con montos superiores a USD 10,000, siempre que se declaren adecuadamente. Tampoco se requiere autorización previa del Banco de la República ni existe restricción respecto a la fecha de adquisición de las divisas. El incumplimiento de esta obligación de declaración puede dar lugar a la retención de las divisas no declaradas y a sanciones administrativas por parte de la DIAN."
    },
    {
        id: "cambiario_018",
        category: "sistema_cambiario",
        difficulty: "alta",
        text: "Una empresa colombiana ha recibido un pago por USD 100,000 correspondiente a una exportación de bienes realizada hace 8 meses.",
        question: "Según la normativa cambiaria colombiana, ¿qué consecuencias enfrenta la empresa por recibir este pago fuera del plazo reglamentario?",
        options: [
            "Debe pagar una multa equivalente al 100% del valor recibido fuera de plazo",
            "Debe solicitar autorización especial al Banco de la República para canalizar el pago",
            "Puede canalizar el pago normalmente, pero está sujeta a investigación y posible sanción por parte de la DIAN por infracción cambiaria",
            "El pago recibido fuera de plazo debe ser devuelto al remitente en el exterior"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con la Resolución Externa 1 de 2018 de la Junta Directiva del Banco de la República y la Circular Reglamentaria Externa DCIN-83, los exportadores colombianos tienen la obligación de canalizar las divisas provenientes de sus exportaciones a través del mercado cambiario dentro de los seis (6) meses siguientes a la fecha de su recepción. Cuando este plazo se incumple, el exportador puede y debe canalizar el pago normalmente a través del mercado cambiario, presentando la declaración de cambio por exportaciones de bienes (Formulario No. 2), pero está sujeto a investigación y posible sanción por parte de la DIAN por infracción al régimen cambiario. Según el Decreto 2245 de 2011, esta infracción puede ser sancionada con multa equivalente al 100% del monto dejado de canalizar en el plazo establecido. No se requiere autorización especial del Banco de la República para canalizar el pago fuera de plazo, ni existe obligación de devolver el pago al remitente."
    },
    {
        id: "cambiario_019",
        category: "sistema_cambiario",
        difficulty: "media",
        text: "Una empresa colombiana necesita realizar un pago anticipado por USD 50,000 a un proveedor en el exterior por una importación futura de mercancías que serán entregadas en 3 meses.",
        question: "¿Cuál es el tratamiento cambiario correcto para este anticipo según la normativa colombiana?",
        options: [
            "Los anticipos por importaciones están prohibidos en la normativa cambiaria colombiana",
            "Debe canalizar el anticipo a través del mercado cambiario como una importación de bienes, utilizando el Formulario No. 1",
            "Debe solicitar autorización previa a la DIAN para realizar anticipos por importaciones",
            "Debe registrar el anticipo como un préstamo al proveedor del exterior"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con la Resolución Externa 1 de 2018 de la Junta Directiva del Banco de la República y la Circular Reglamentaria Externa DCIN-83, los pagos anticipados por importaciones futuras deben canalizarse a través del mercado cambiario como una importación de bienes, utilizando la declaración de cambio por importaciones de bienes (Formulario No. 1) ante un intermediario del mercado cambiario o a través de una cuenta de compensación. En el formulario se debe indicar que se trata de un anticipo por importaciones futuras, utilizando el numeral cambiario correspondiente (2015 - Pagos anticipados por importaciones de bienes). Posteriormente, cuando se realice la importación física de las mercancías, el importador debe presentar la declaración de importación ante la DIAN y relacionarla con el anticipo previamente enviado. No se requiere autorización previa de la DIAN ni existe prohibición para realizar anticipos por importaciones. Estos anticipos no se consideran préstamos al proveedor del exterior."
    },
    {
        id: "cambiario_020",
        category: "sistema_cambiario",
        difficulty: "baja",
        text: "Un ciudadano colombiano ha recibido una herencia de un familiar en el exterior por valor de USD 100,000.",
        question: "¿Cuál es el procedimiento cambiario correcto para recibir estos recursos en Colombia?",
        options: [
            "Debe pagar un impuesto del 20% sobre el valor total de la herencia antes de recibirla en Colombia",
            "Debe canalizar los recursos a través del mercado cambiario utilizando la declaración de cambio por servicios, transferencias y otros conceptos (Formulario No. 5)",
            "Las herencias del exterior no pueden ser ingresadas a Colombia",
            "Debe solicitar autorización previa al Ministerio de Hacienda"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con la Resolución Externa 1 de 2018 de la Junta Directiva del Banco de la República y la Circular Reglamentaria Externa DCIN-83, las herencias recibidas del exterior son operaciones de obligatoria canalización a través del mercado cambiario. Para recibir estos recursos, el beneficiario debe canalizar el ingreso a través del mercado cambiario, presentando la declaración de cambio por servicios, transferencias y otros conceptos (Formulario No. 5) ante un intermediario del mercado cambiario o a través de una cuenta de compensación en el exterior registrada ante el Banco de la República. En esta declaración se debe indicar que se trata de una herencia recibida del exterior, utilizando el numeral cambiario correspondiente (1812 - Donaciones y transferencias que no generan contraprestación). No existe un impuesto específico del 20% sobre las herencias recibidas del exterior (aunque el beneficiario debe cumplir con sus obligaciones tributarias generales), no hay prohibición para ingresar herencias a Colombia, y no se requiere autorización previa del Ministerio de Hacienda."
    }
];