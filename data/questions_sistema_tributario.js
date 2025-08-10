// Preguntas sobre Sistema Tributario
const questions_sistema_tributario = [
    {
        id: "tributario_001",
        category: "sistema_tributario",
        difficulty: "baja",
        text: "Un contribuyente persona natural residente en Colombia recibe ingresos por su trabajo como empleado y también por el arrendamiento de un inmueble.",
        question: "Según el sistema tributario colombiano, ¿cómo se clasifican estos ingresos para efectos del impuesto sobre la renta?",
        options: [
            "Rentas de trabajo y rentas de capital",
            "Rentas laborales y rentas no laborales",
            "Rentas de trabajo y rentas no laborales",
            "Rentas de capital y rentas no laborales"
        ],
        correctAnswer: 0,
        explanation: "Según el sistema tributario colombiano, específicamente el artículo 335 del Estatuto Tributario, modificado por la Ley 1819 de 2016, los ingresos se clasifican en cinco cédulas: rentas de trabajo, rentas de pensiones, rentas de capital, rentas no laborales y dividendos y participaciones. Los ingresos por el trabajo como empleado se clasifican como rentas de trabajo, que según el artículo 103 del Estatuto Tributario son las obtenidas por personas naturales por concepto de salarios, comisiones, prestaciones sociales, viáticos, gastos de representación, honorarios, emolumentos eclesiásticos, compensaciones recibidas por el trabajo asociado cooperativo y, en general, las compensaciones por servicios personales. Por su parte, los ingresos por arrendamiento de inmuebles se clasifican como rentas de capital, que según el artículo 338 del Estatuto Tributario son las obtenidas por concepto de intereses, rendimientos financieros, arrendamientos, regalías y explotación de la propiedad intelectual."
    },
    {
        id: "tributario_002",
        category: "sistema_tributario",
        difficulty: "media",
        text: "Una empresa colombiana ha realizado una venta de mercancías a un cliente en el exterior. La operación se realizó en dólares estadounidenses y la empresa recibió el pago en su cuenta bancaria en Colombia.",
        question: "De acuerdo con el sistema tributario colombiano, ¿cómo debe manejar la empresa la diferencia en cambio generada entre la fecha de la venta y la fecha del pago para efectos del impuesto sobre la renta?",
        options: [
            "La diferencia en cambio no está sujeta al impuesto sobre la renta",
            "La diferencia en cambio debe declararse como ingreso o gasto financiero, según corresponda",
            "La diferencia en cambio debe declararse como un ingreso extraordinario no gravado",
            "La diferencia en cambio debe compensarse con otras operaciones en moneda extranjera antes de determinar su efecto fiscal"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el sistema tributario colombiano, específicamente el artículo 288 del Estatuto Tributario, modificado por la Ley 1819 de 2016, la diferencia en cambio debe declararse como ingreso o gasto financiero, según corresponda. Este artículo establece que las fluctuaciones de las partidas del activo y del pasivo, expresadas en moneda extranjera, no tendrán efectos fiscales sino hasta el momento de la enajenación o abono en el caso de los activos, o liquidación o pago parcial en el caso de los pasivos. En el momento de la enajenación o abono, la diferencia en cambio se reconocerá como ingreso gravable o gasto deducible, según corresponda. Si la diferencia en cambio es positiva (cuando el peso colombiano se deprecia frente a la moneda extranjera entre la fecha de la venta y la fecha del pago), se reconoce como un ingreso financiero gravable. Si la diferencia en cambio es negativa (cuando el peso colombiano se aprecia), se reconoce como un gasto financiero deducible, siempre que tenga relación de causalidad con la actividad productora de renta."
    },
    {
        id: "tributario_003",
        category: "sistema_tributario",
        difficulty: "alta",
        text: "Una empresa colombiana ha realizado una operación comercial con su casa matriz ubicada en el exterior. La DIAN considera que el precio pactado no corresponde al que se habría acordado entre partes independientes en operaciones comparables.",
        question: "Según el régimen de precios de transferencia del sistema tributario colombiano, ¿qué facultad tiene la DIAN en este caso?",
        options: [
            "Puede rechazar la operación y considerarla como una distribución de utilidades sujeta a retención en la fuente",
            "Puede determinar el precio o margen de utilidad con base en el promedio de precios del mercado nacional",
            "Puede determinar los ingresos, costos y deducciones aplicando los métodos de precios de transferencia establecidos en el Estatuto Tributario",
            "Puede imponer automáticamente una sanción por inexactitud sin necesidad de un proceso de fiscalización"
        ],
        correctAnswer: 2,
        explanation: "Según el régimen de precios de transferencia del sistema tributario colombiano, establecido en los artículos 260-1 a 260-11 del Estatuto Tributario, la DIAN tiene la facultad de determinar los ingresos, costos y deducciones aplicando los métodos de precios de transferencia establecidos en el Estatuto Tributario. El artículo 260-4 establece los métodos para determinar el precio o margen de utilidad en las operaciones con vinculados: método de precio comparable no controlado, método del precio de reventa, método del costo adicionado, método de márgenes transaccionales de utilidad de operación y método de partición de utilidades. Cuando la DIAN establece que una operación entre vinculados no se realizó a precios de mercado, puede ajustar la base gravable del contribuyente, determinando el precio o margen de utilidad que habría resultado si la operación se hubiera realizado entre partes independientes en operaciones comparables. Este ajuste puede resultar en un mayor impuesto a cargo del contribuyente, pero no implica automáticamente el rechazo de la operación ni la imposición de sanciones sin un debido proceso de fiscalización."
    },
    {
        id: "tributario_004",
        category: "sistema_tributario",
        difficulty: "media",
        text: "Una empresa colombiana ha registrado una pérdida fiscal en el año gravable 2024.",
        question: "De acuerdo con el sistema tributario colombiano vigente, ¿cómo puede la empresa compensar esta pérdida fiscal?",
        options: [
            "Puede compensarla con las rentas líquidas ordinarias que obtenga en los 12 períodos gravables siguientes, sin límite en el monto a compensar anualmente",
            "Puede compensarla únicamente con las rentas de la misma naturaleza que obtenga en los 5 períodos gravables siguientes",
            "Puede compensarla con las rentas líquidas ordinarias que obtenga en los 12 períodos gravables siguientes, con un límite anual del 50% de la renta líquida",
            "No puede compensarla en períodos futuros, solo puede solicitar su devolución como un crédito fiscal"
        ],
        correctAnswer: 0,
        explanation: "De acuerdo con el sistema tributario colombiano vigente, específicamente el artículo 147 del Estatuto Tributario, modificado por la Ley 1819 de 2016, la empresa puede compensar la pérdida fiscal con las rentas líquidas ordinarias que obtenga en los 12 períodos gravables siguientes, sin límite en el monto a compensar anualmente. Este artículo establece que las sociedades podrán compensar las pérdidas fiscales, con las rentas líquidas ordinarias que obtuvieren en los doce (12) períodos gravables siguientes, sin perjuicio de la renta presuntiva del ejercicio. La norma no establece un límite porcentual para la compensación anual, lo que significa que la empresa puede compensar hasta el 100% de su renta líquida ordinaria con pérdidas fiscales de períodos anteriores, siempre que estas no hayan prescrito (es decir, que no hayan transcurrido más de 12 años desde que se generaron). Es importante destacar que la compensación de pérdidas fiscales no afecta el cálculo de la renta presuntiva, que sigue siendo una base mínima para la determinación del impuesto sobre la renta."
    },
    {
        id: "tributario_005",
        category: "sistema_tributario",
        difficulty: "baja",
        text: "Un contribuyente persona natural ha recibido un dividendo de una sociedad colombiana por valor de $10,000,000. La sociedad pagó el impuesto sobre la renta correspondiente a las utilidades que generaron este dividendo.",
        question: "Según el sistema tributario colombiano vigente, ¿cómo se grava este dividendo en cabeza del contribuyente persona natural residente?",
        options: [
            "El dividendo está totalmente exento del impuesto sobre la renta",
            "El dividendo está gravado con una tarifa fija del 10% sin importar su monto",
            "El dividendo está gravado según la tabla progresiva del impuesto sobre la renta",
            "El dividendo está gravado con tarifas especiales que dependen de su monto"
        ],
        correctAnswer: 3,
        explanation: "Según el sistema tributario colombiano vigente, específicamente el artículo 242 del Estatuto Tributario, modificado por la Ley 2010 de 2019 (Ley de Crecimiento Económico), los dividendos recibidos por personas naturales residentes están gravados con tarifas especiales que dependen de su monto. Para los dividendos provenientes de utilidades que ya pagaron impuesto en cabeza de la sociedad (como es el caso planteado), la norma establece que: 1) Los dividendos inferiores a 300 UVT (aproximadamente $11,400,000 para el año 2024) están gravados a una tarifa del 0%. 2) Los dividendos iguales o superiores a 300 UVT están gravados a una tarifa del 10%. En este caso, como el dividendo es de $10,000,000, que es inferior a 300 UVT, estaría gravado a una tarifa del 0%, es decir, no pagaría impuesto adicional. Es importante destacar que este régimen aplica para dividendos recibidos de sociedades nacionales. Para dividendos provenientes de sociedades extranjeras o de Entidades Controladas del Exterior (ECE), el tratamiento fiscal puede ser diferente."
    },
    {
        id: "tributario_006",
        category: "sistema_tributario",
        difficulty: "alta",
        text: "Una empresa multinacional con sede en Colombia está evaluando la aplicación del régimen de Entidades Controladas del Exterior (ECE) a una de sus filiales ubicada en un país con el que Colombia no tiene convenio para evitar la doble imposición.",
        question: "De acuerdo con el sistema tributario colombiano, ¿cuál de las siguientes afirmaciones sobre el régimen ECE es correcta?",
        options: [
            "Solo aplica a entidades ubicadas en paraísos fiscales oficialmente reconocidos por Colombia",
            "Implica que las rentas pasivas obtenidas por la ECE se consideran devengadas directamente por los residentes colombianos que la controlan",
            "Requiere que la entidad del exterior sea controlada en al menos un 50% por un único residente fiscal colombiano",
            "Aplica únicamente cuando la entidad del exterior no distribuye dividendos a sus accionistas colombianos"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el sistema tributario colombiano, específicamente los artículos 882 a 893 del Estatuto Tributario, adicionados por la Ley 1819 de 2016, el régimen de Entidades Controladas del Exterior (ECE) implica que las rentas pasivas obtenidas por la ECE se consideran devengadas directamente por los residentes colombianos que la controlan. El artículo 883 establece que los residentes fiscales colombianos que tengan una participación directa o indirecta en una ECE, y que cumplan con los requisitos de control establecidos en el artículo 882, deberán incluir en su declaración de renta la renta pasiva obtenida por la ECE en proporción a su participación, aun cuando la ECE no haya distribuido dividendos o retiros. Las rentas pasivas incluyen dividendos, intereses, regalías, ingresos de activos que generen rentas pasivas, ingresos por la enajenación de activos que generen rentas pasivas, ingresos por la enajenación o arrendamiento de bienes inmuebles, ingresos por la venta o cesión de derechos sobre activos que generen rentas pasivas, ingresos por la prestación de servicios técnicos, de asistencia técnica, administrativos, ingeniería, arquitectura, científicos, calificados, industriales o comerciales, entre otros. El régimen ECE aplica cuando la entidad del exterior es controlada por uno o más residentes fiscales colombianos que posean directa o indirectamente una participación igual o superior al 10% del capital o de los resultados de la ECE, no solo en paraísos fiscales sino en cualquier jurisdicción."
    },
    {
        id: "tributario_007",
        category: "sistema_tributario",
        difficulty: "media",
        text: "Una empresa colombiana ha realizado una donación a una entidad sin ánimo de lucro que desarrolla actividades de interés general y tiene acceso al régimen tributario especial.",
        question: "Según el sistema tributario colombiano vigente, ¿cómo puede la empresa tratar esta donación para efectos del impuesto sobre la renta?",
        options: [
            "Como un gasto no deducible que no tiene ningún beneficio tributario",
            "Como un descuento tributario del 25% del valor donado",
            "Como una deducción del 100% del valor donado, limitada al 30% de la renta líquida del contribuyente",
            "Como un ingreso no constitutivo de renta ni ganancia ocasional"
        ],
        correctAnswer: 2,
        explanation: "Según el sistema tributario colombiano vigente, específicamente el artículo 125 del Estatuto Tributario, la empresa puede tratar la donación como una deducción del 100% del valor donado, limitada al 30% de la renta líquida del contribuyente. Este artículo establece que los contribuyentes del impuesto sobre la renta que estén obligados a presentar declaración de renta y complementarios tienen derecho a deducir de la renta el valor de las donaciones efectuadas durante el año o período gravable a entidades sin ánimo de lucro que hayan sido calificadas en el régimen especial del impuesto sobre la renta y complementarios y a las entidades señaladas en los artículos 22 y 23 del Estatuto Tributario. El límite de esta deducción es el 30% de la renta líquida del contribuyente, determinada antes de restar el valor de la donación. Este tratamiento aplica siempre que la entidad beneficiaria de la donación cumpla con los requisitos establecidos en la ley, incluyendo estar calificada en el régimen tributario especial o ser una de las entidades no contribuyentes del impuesto sobre la renta mencionadas en los artículos 22 y 23 del Estatuto Tributario."
    },
    {
        id: "tributario_008",
        category: "sistema_tributario",
        difficulty: "baja",
        text: "Un comerciante persona natural que vende productos gravados con IVA ha tenido ingresos brutos en el año anterior por valor de $120,000,000.",
        question: "De acuerdo con el sistema tributario colombiano, ¿a qué régimen del impuesto sobre las ventas (IVA) pertenece este comerciante?",
        options: [
            "Régimen común",
            "Régimen simplificado",
            "Régimen ordinario",
            "Responsable del impuesto sobre las ventas"
        ],
        correctAnswer: 3,
        explanation: "De acuerdo con el sistema tributario colombiano, específicamente con las modificaciones introducidas por la Ley 1943 de 2018 (Ley de Financiamiento) y ratificadas por la Ley 2010 de 2019 (Ley de Crecimiento Económico), a partir del año 2019 se eliminó la clasificación de régimen común y régimen simplificado del IVA. En su lugar, se estableció una distinción entre 'responsables del impuesto sobre las ventas' y 'no responsables del impuesto sobre las ventas'. Según el artículo 437 del Estatuto Tributario, son responsables del IVA quienes realicen actividades gravadas con el impuesto, a menos que se encuentren expresamente excluidos. El artículo 437-2, parágrafo 3, establece que no son responsables del IVA las personas naturales que vendan bienes o presten servicios gravados, siempre y cuando cumplan la totalidad de las siguientes condiciones: 1) Que en el año anterior o en el año en curso hubieren obtenido ingresos brutos totales provenientes de la actividad, inferiores a 3.500 UVT (aproximadamente $133,000,000 para el año 2024). 2) Que no tengan más de un establecimiento de comercio, oficina, sede, local o negocio donde ejerzan su actividad. 3) Que en el establecimiento de comercio, oficina, sede, local o negocio no se desarrollen actividades bajo franquicia, concesión, regalía, autorización o cualquier otro sistema que implique la explotación de intangibles. 4) Que no sean usuarios aduaneros. 5) Que no hayan celebrado en el año inmediatamente anterior ni en el año en curso contratos de venta de bienes y/o prestación de servicios gravados por valor individual, igual o superior a 3.500 UVT. 6) Que el monto de sus consignaciones bancarias, depósitos o inversiones financieras durante el año anterior o durante el respectivo año no supere la suma de 3.500 UVT. En este caso, como el comerciante tuvo ingresos brutos de $120,000,000, que son inferiores a 3.500 UVT, podría calificar como no responsable del IVA si cumple con las demás condiciones. Sin embargo, al vender productos gravados con IVA, y asumiendo que no cumple con todas las condiciones para ser no responsable, sería clasificado como 'responsable del impuesto sobre las ventas'."
    },
    {
        id: "tributario_009",
        category: "sistema_tributario",
        difficulty: "alta",
        text: "Una empresa colombiana está evaluando la aplicación del régimen de Obras por Impuestos como mecanismo para pagar parte de su impuesto sobre la renta.",
        question: "Según el sistema tributario colombiano vigente, ¿cuál de las siguientes afirmaciones sobre el régimen de Obras por Impuestos es correcta?",
        options: [
            "Permite a cualquier contribuyente pagar hasta el 50% de su impuesto sobre la renta mediante la ejecución de obras en cualquier municipio del país",
            "Permite a los contribuyentes pagar su impuesto sobre la renta mediante la ejecución de obras en zonas afectadas por el conflicto armado (ZOMAC) o en Zonas Más Afectadas por el Conflicto Armado (ZOMAC)",
            "Es un beneficio exclusivo para empresas del sector de hidrocarburos y minería que operan en zonas de conflicto",
            "Permite a los contribuyentes destinar hasta el 100% de su impuesto sobre la renta a obras de infraestructura en cualquier sector económico"
        ],
        correctAnswer: 1,
        explanation: "Según el sistema tributario colombiano vigente, específicamente el artículo 238 de la Ley 1819 de 2016, modificado por el artículo 78 de la Ley 2010 de 2019, el régimen de Obras por Impuestos permite a los contribuyentes pagar su impuesto sobre la renta mediante la ejecución de obras en zonas afectadas por el conflicto armado (ZOMAC) o en Zonas Más Afectadas por el Conflicto Armado (ZOMAC). Este mecanismo permite a las personas jurídicas contribuyentes del impuesto sobre la renta y complementarios que en el año gravable tengan ingresos brutos iguales o superiores a 33.610 UVT (aproximadamente $1,277 millones para el año 2024), optar por pagar hasta el 50% del impuesto a cargo mediante la ejecución directa de proyectos de inversión en la construcción, mejoramiento, optimización o ampliación de infraestructura y/o dotación requerida para el suministro de servicios públicos, educación, salud, agua potable y alcantarillado, entre otros, en los municipios ubicados en las ZOMAC. Los proyectos deben estar relacionados con el suministro de agua potable, alcantarillado, energía, salud pública, educación pública, construcción y/o reparación de infraestructura vial, entre otros, y deben ser aprobados por la Agencia de Renovación del Territorio (ART) y el Departamento Nacional de Planeación (DNP)."
    },
    {
        id: "tributario_010",
        category: "sistema_tributario",
        difficulty: "media",
        text: "Una empresa colombiana ha adquirido una máquina para su proceso productivo por valor de $100,000,000. La vida útil estimada de la máquina es de 10 años.",
        question: "De acuerdo con el sistema tributario colombiano, ¿cuál es el método de depreciación fiscal que la empresa puede utilizar para esta máquina?",
        options: [
            "Únicamente el método de línea recta",
            "Únicamente el método de reducción de saldos",
            "Cualquier método de reconocido valor técnico, como línea recta, reducción de saldos o unidades de producción",
            "El método establecido por la DIAN para cada tipo específico de activo"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el sistema tributario colombiano, específicamente el artículo 134 del Estatuto Tributario, la empresa puede utilizar cualquier método de reconocido valor técnico para la depreciación fiscal de la máquina, como línea recta, reducción de saldos o unidades de producción. Este artículo establece que para efectos fiscales, los contribuyentes pueden depreciar sus activos fijos por cualquier método de reconocido valor técnico. El artículo 135 complementa esta disposición al señalar que cuando se utilice el sistema de depreciación de reducción de saldos, el valor de la depreciación no podrá ser superior al que resultaría de aplicar al costo del bien una tasa equivalente al doble de la establecida para el sistema de línea recta, sin que exceda del 20% del costo fiscal. La empresa debe tener en cuenta que, según el artículo 137 del Estatuto Tributario, modificado por la Ley 1819 de 2016, la tasa de depreciación fiscal anual máxima para maquinaria y equipo es del 10%, lo que equivale a una vida útil mínima de 10 años. Por lo tanto, en este caso, la empresa podría depreciar la máquina en 10 años utilizando el método de línea recta (10% anual), o podría utilizar el método de reducción de saldos con una tasa máxima del 20% anual, o cualquier otro método de reconocido valor técnico que respete estos límites."
    },
    {
        id: "tributario_011",
        category: "sistema_tributario",
        difficulty: "baja",
        text: "Un contribuyente persona natural ha recibido una notificación de la DIAN informándole que debe presentar su declaración de renta correspondiente al año gravable 2023.",
        question: "Según el sistema tributario colombiano, ¿cuál es el plazo máximo que tiene el contribuyente para presentar esta declaración una vez vencido el plazo inicial establecido en el calendario tributario?",
        options: [
            "No hay plazo adicional, debe presentarla inmediatamente",
            "Tiene un plazo adicional de 1 mes con sanción por extemporaneidad",
            "Puede presentarla en cualquier momento hasta antes de que la DIAN le notifique un emplazamiento para declarar",
            "Tiene un plazo adicional de 3 años, que es el término de firmeza de las declaraciones"
        ],
        correctAnswer: 2,
        explanation: "Según el sistema tributario colombiano, específicamente el artículo 641 del Estatuto Tributario, el contribuyente puede presentar su declaración de renta en cualquier momento hasta antes de que la DIAN le notifique un emplazamiento para declarar. Este artículo establece la sanción por extemporaneidad en la presentación de declaraciones, diferenciando dos situaciones: 1) Presentación extemporánea antes de emplazamiento: Cuando la declaración se presenta después del vencimiento del plazo para declarar y antes de que se notifique emplazamiento para declarar, la sanción es un porcentaje del impuesto a cargo o del saldo a favor (si lo hubiere) por cada mes o fracción de mes de retardo. 2) Presentación extemporánea después de emplazamiento: Cuando la declaración se presenta después de notificado el emplazamiento para declarar, la sanción es mayor. Por lo tanto, el contribuyente puede presentar su declaración en cualquier momento hasta antes de que la DIAN le notifique un emplazamiento para declarar, aunque estará sujeto a la sanción por extemporaneidad correspondiente. Es importante destacar que, según el artículo 714 del Estatuto Tributario, modificado por la Ley 1819 de 2016, el término general de firmeza de las declaraciones tributarias es de 3 años contados a partir de la fecha del vencimiento del plazo para declarar o de la presentación extemporánea, o de la solicitud del saldo a favor. Sin embargo, este término de firmeza no constituye un plazo adicional para presentar la declaración."
    },
    {
        id: "tributario_012",
        category: "sistema_tributario",
        difficulty: "alta",
        text: "Una empresa colombiana está evaluando la posibilidad de acogerse al Régimen Simple de Tributación (RST).",
        question: "De acuerdo con el sistema tributario colombiano vigente, ¿cuál de las siguientes afirmaciones sobre el Régimen Simple de Tributación es correcta?",
        options: [
            "Es un régimen opcional que sustituye el impuesto sobre la renta y complementarios, el impuesto al consumo y el impuesto de industria y comercio consolidado",
            "Es obligatorio para todas las pequeñas y medianas empresas con ingresos brutos inferiores a 80,000 UVT",
            "Permite a las empresas acogidas pagar una tarifa reducida del impuesto sobre la renta del 10% sobre la renta líquida",
            "Exime a las empresas acogidas de presentar la declaración anual del impuesto sobre la renta"
        ],
        correctAnswer: 0,
        explanation: "De acuerdo con el sistema tributario colombiano vigente, específicamente los artículos 903 a 916 del Estatuto Tributario, adicionados por la Ley 1943 de 2018 y modificados por la Ley 2010 de 2019, el Régimen Simple de Tributación (RST) es un régimen opcional que sustituye el impuesto sobre la renta y complementarios, el impuesto al consumo y el impuesto de industria y comercio consolidado. El artículo 903 establece que el RST es un modelo de tributación opcional de determinación integral, de declaración anual y anticipo bimestral, que sustituye el impuesto sobre la renta, e integra el impuesto nacional al consumo y el impuesto de industria y comercio consolidado. Los contribuyentes que opten por este régimen deben cumplir con ciertos requisitos, entre ellos: 1) Ser personas naturales o jurídicas que en el año anterior hubieren obtenido ingresos brutos, ordinarios o extraordinarios, inferiores a 80,000 UVT (aproximadamente $3,040 millones para el año 2024). 2) No estar expresamente excluidos del régimen, como es el caso de las personas jurídicas extranjeras, las personas naturales sin residencia en el país, las entidades del régimen tributario especial, entre otras. El RST no es obligatorio sino opcional, y las empresas acogidas deben presentar una declaración anual y pagar anticipos bimestrales calculados según los ingresos brutos y la actividad económica desarrollada, con tarifas que varían entre el 1.8% y el 14.5% según el grupo de actividades."
    },
    {
        id: "tributario_013",
        category: "sistema_tributario",
        difficulty: "media",
        text: "Una empresa colombiana ha realizado una venta de mercancías a un cliente local por valor de $10,000,000 más IVA. El cliente ha pagado $5,000,000 y ha solicitado un plazo de 30 días para pagar el saldo restante.",
        question: "Según el sistema tributario colombiano, ¿en qué momento debe la empresa declarar y pagar el IVA correspondiente a esta venta?",
        options: [
            "En el bimestre en que se realizó la venta, por el valor total del IVA, independientemente del pago recibido",
            "En el bimestre en que se realizó la venta, pero solo por el IVA correspondiente al pago recibido",
            "En el bimestre en que reciba el pago total de la venta",
            "Puede elegir entre declararlo en el bimestre de la venta o en el bimestre del pago total"
        ],
        correctAnswer: 0,
        explanation: "Según el sistema tributario colombiano, específicamente el artículo 429 del Estatuto Tributario, la empresa debe declarar y pagar el IVA correspondiente a esta venta en el bimestre en que se realizó la venta, por el valor total del IVA, independientemente del pago recibido. Este artículo establece que el impuesto se causa en las ventas, en la fecha de emisión de la factura o documento equivalente y a falta de éstos, en el momento de la entrega, aunque se haya pactado reserva de dominio, pacto de retroventa o condición resolutoria. En el caso de las ventas a plazos, el IVA se causa en su totalidad en el momento de la venta, independientemente de que el pago se realice en cuotas o de forma diferida. Esto significa que la empresa debe declarar y pagar el IVA total de la venta ($1,900,000, asumiendo una tarifa del 19%) en el período gravable (bimestre) en que se realizó la venta, aunque solo haya recibido un pago parcial de $5,000,000. Es importante destacar que este tratamiento es diferente al del impuesto sobre la renta, donde los contribuyentes que llevan contabilidad por el sistema de causación pueden diferir el reconocimiento de los ingresos en ventas a plazos, según lo establecido en el artículo 28 del Estatuto Tributario."
    },
    {
        id: "tributario_014",
        category: "sistema_tributario",
        difficulty: "baja",
        text: "Un contribuyente persona natural ha recibido una devolución de saldo a favor en su declaración de renta del año anterior. La DIAN le ha notificado que realizará una verificación de la devolución.",
        question: "De acuerdo con el sistema tributario colombiano, ¿cuál es el término que tiene la DIAN para efectuar esta verificación?",
        options: [
            "1 año contado a partir de la fecha de la devolución",
            "2 años contados a partir de la fecha de la devolución",
            "3 años contados a partir de la fecha de la devolución",
            "5 años contados a partir de la fecha de la devolución"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el sistema tributario colombiano, específicamente el artículo 670 del Estatuto Tributario, la DIAN tiene un término de 2 años contados a partir de la fecha de la devolución para efectuar la verificación. Este artículo establece que las devoluciones o compensaciones efectuadas de acuerdo con las declaraciones del impuesto sobre la renta y complementarios y del impuesto sobre las ventas, presentadas por los contribuyentes o responsables, no constituyen un reconocimiento definitivo a su favor. La DIAN, dentro del término de investigación y liquidación, puede verificar la procedencia de la devolución o compensación efectuada. Si se determina que la devolución o compensación fue improcedente, la DIAN puede ordenar su reintegro junto con los intereses moratorios correspondientes. El término de investigación y liquidación al que se refiere el artículo es de 2 años contados a partir de la fecha de la devolución o compensación, según lo establecido en el artículo 705 del Estatuto Tributario para el impuesto sobre la renta y en el artículo 705-1 para el impuesto sobre las ventas."
    },
    {
        id: "tributario_015",
        category: "sistema_tributario",
        difficulty: "alta",
        text: "Una empresa colombiana está evaluando la posibilidad de solicitar la aplicación de un Acuerdo Anticipado de Precios (APA) para sus operaciones con vinculados económicos del exterior.",
        question: "Según el régimen de precios de transferencia del sistema tributario colombiano, ¿cuál de las siguientes afirmaciones sobre los APA es correcta?",
        options: [
            "Son obligatorios para todas las empresas que realicen operaciones con vinculados económicos del exterior",
            "Tienen una vigencia máxima de 1 año y deben renovarse anualmente",
            "Son acuerdos entre el contribuyente y la DIAN que determinan la metodología para la determinación de los precios de transferencia",
            "Solo pueden solicitarse para operaciones de exportación de bienes, no para importaciones ni servicios"
        ],
        correctAnswer: 2,
        explanation: "Según el régimen de precios de transferencia del sistema tributario colombiano, específicamente el artículo 260-10 del Estatuto Tributario, los Acuerdos Anticipados de Precios (APA) son acuerdos entre el contribuyente y la DIAN que determinan la metodología para la determinación de los precios de transferencia. Este artículo establece que los contribuyentes del impuesto sobre la renta y complementarios que realicen operaciones con vinculados económicos podrán solicitar a la DIAN la celebración de un APA, con el fin de determinar la metodología para la determinación de los precios o márgenes de utilidad en las operaciones que realicen con vinculados. Los APA son acuerdos que determinan, previamente a la realización de las operaciones, un conjunto de criterios y una metodología para la determinación de los precios de transferencia para operaciones futuras entre vinculados económicos. Estos acuerdos pueden ser unilaterales (entre el contribuyente y la DIAN) o bilaterales/multilaterales (involucrando también a administraciones tributarias de otros países). Los APA no son obligatorios sino opcionales, tienen una vigencia máxima de 5 años (no de 1 año) y pueden solicitarse para cualquier tipo de operación con vinculados económicos, no solo para exportaciones de bienes."
    },
    {
        id: "tributario_016",
        category: "sistema_tributario",
        difficulty: "media",
        text: "Una empresa colombiana ha recibido una factura electrónica por la compra de insumos para su proceso productivo. La empresa quiere utilizar el IVA pagado como descontable en su declaración.",
        question: "De acuerdo con el sistema tributario colombiano, ¿cuál es el requisito fundamental para que el IVA pagado pueda ser tratado como descontable?",
        options: [
            "Que la factura haya sido pagada en su totalidad antes de la presentación de la declaración de IVA",
            "Que la factura cumpla con todos los requisitos legales y que el bien o servicio adquirido tenga relación de causalidad con la actividad productora de renta",
            "Que el proveedor haya declarado y pagado el IVA correspondiente a la DIAN",
            "Que la compra haya sido autorizada previamente por el representante legal de la empresa"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el sistema tributario colombiano, específicamente los artículos 485 a 490 del Estatuto Tributario, el requisito fundamental para que el IVA pagado pueda ser tratado como descontable es que la factura cumpla con todos los requisitos legales y que el bien o servicio adquirido tenga relación de causalidad con la actividad productora de renta. El artículo 485 establece que los responsables del impuesto sobre las ventas pueden descontar del impuesto generado por las operaciones gravadas, el impuesto pagado en la adquisición de bienes y servicios gravados, siempre y cuando estos constituyan costo o gasto en el impuesto sobre la renta y se destinen a operaciones gravadas con el impuesto sobre las ventas. El artículo 771-2 complementa esta disposición al señalar que para la procedencia de costos y deducciones en el impuesto sobre la renta, así como de los impuestos descontables en el IVA, se requiere que las facturas o documentos equivalentes cumplan con los requisitos establecidos en los artículos 617 y 618 del Estatuto Tributario. No es necesario que la factura haya sido pagada en su totalidad antes de la presentación de la declaración de IVA, ni que el proveedor haya declarado y pagado el IVA correspondiente a la DIAN (aunque la DIAN puede verificar esto posteriormente en un proceso de fiscalización)."
    },
    {
        id: "tributario_017",
        category: "sistema_tributario",
        difficulty: "baja",
        text: "Un contribuyente persona natural ha presentado su declaración de renta con un saldo a favor y ha solicitado su devolución a la DIAN.",
        question: "Según el sistema tributario colombiano, ¿cuál es el plazo que tiene la DIAN para efectuar la devolución del saldo a favor?",
        options: [
            "10 días hábiles siguientes a la fecha de la solicitud",
            "30 días hábiles siguientes a la fecha de la solicitud",
            "50 días hábiles siguientes a la fecha de la solicitud",
            "90 días hábiles siguientes a la fecha de la solicitud"
        ],
        correctAnswer: 2,
        explanation: "Según el sistema tributario colombiano, específicamente el artículo 855 del Estatuto Tributario, modificado por la Ley 1430 de 2010, la DIAN tiene un plazo de 50 días hábiles siguientes a la fecha de la solicitud para efectuar la devolución del saldo a favor. Este artículo establece que la DIAN deberá devolver, previa las compensaciones a que haya lugar, los saldos a favor originados en los impuestos sobre la renta y complementarios y sobre las ventas, dentro de los cincuenta (50) días siguientes a la fecha de la solicitud de devolución presentada oportunamente y en debida forma. Sin embargo, el mismo artículo establece algunas excepciones: 1) Cuando la solicitud de devolución se formule dentro de los dos (2) meses siguientes a la presentación de la declaración o de su corrección, la DIAN dispondrá de un término adicional de un (1) mes para devolver. 2) Cuando la solicitud se presente con garantía, el término para devolver es de veinte (20) días hábiles. 3) Para los productores de bienes exentos del IVA con derecho a devolución bimestral, el término es de treinta (30) días hábiles. Es importante destacar que estos plazos se suspenden cuando se inicie una investigación sobre la procedencia de la devolución, y se reanuda una vez finalizada la investigación."
    },
    {
        id: "tributario_018",
        category: "sistema_tributario",
        difficulty: "alta",
        text: "Una empresa colombiana ha sido notificada de un requerimiento especial por parte de la DIAN, en el que se propone modificar su declaración de renta del año gravable 2022.",
        question: "De acuerdo con el procedimiento tributario colombiano, ¿cuál es el plazo que tiene la empresa para responder este requerimiento especial?",
        options: [
            "1 mes, prorrogable por 1 mes adicional",
            "2 meses, prorrogables por 1 mes adicional",
            "3 meses, prorrogables por 3 meses adicionales",
            "6 meses, improrrogables"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el procedimiento tributario colombiano, específicamente el artículo 707 del Estatuto Tributario, la empresa tiene un plazo de 3 meses, prorrogables por 3 meses adicionales, para responder el requerimiento especial. Este artículo establece que el contribuyente, responsable, agente retenedor o declarante, deberá responder el requerimiento especial dentro de los tres (3) meses siguientes a su notificación. El artículo 708 complementa esta disposición al señalar que el término para responder el requerimiento especial podrá prorrogarse por tres (3) meses adicionales, previa solicitud del contribuyente. La respuesta al requerimiento especial es una etapa crucial en el proceso de determinación oficial del impuesto, ya que en ella el contribuyente puede formular sus objeciones a los ajustes propuestos por la DIAN, aportar pruebas y solicitar la práctica de las que considere pertinentes. Si el contribuyente no responde el requerimiento dentro del término establecido, o lo hace de forma parcial o incorrecta, la DIAN procederá a expedir la liquidación oficial de revisión, según lo establecido en el artículo 710 del Estatuto Tributario."
    },
    {
        id: "tributario_019",
        category: "sistema_tributario",
        difficulty: "media",
        text: "Una empresa colombiana está evaluando la posibilidad de acogerse a un beneficio tributario por inversiones en proyectos de investigación, desarrollo tecnológico e innovación.",
        question: "Según el sistema tributario colombiano vigente, ¿cuál es el beneficio tributario que pueden obtener las empresas por inversiones en proyectos de investigación, desarrollo tecnológico e innovación?",
        options: [
            "Una deducción del 100% del valor invertido más un 25% adicional como descuento tributario",
            "Un descuento tributario del 25% del valor invertido, sin que exceda el 25% del impuesto a cargo",
            "Una deducción del 100% del valor invertido y un descuento tributario del 25% del valor invertido",
            "Un descuento tributario del 30% del valor invertido, sin límite respecto al impuesto a cargo"
        ],
        correctAnswer: 1,
        explanation: "Según el sistema tributario colombiano vigente, específicamente el artículo 256 del Estatuto Tributario, modificado por el artículo 171 de la Ley 1955 de 2019 (Plan Nacional de Desarrollo 2018-2022), las empresas pueden obtener un descuento tributario del 25% del valor invertido en proyectos de investigación, desarrollo tecnológico e innovación, sin que exceda el 25% del impuesto a cargo. Este artículo establece que las personas que realicen inversiones en proyectos calificados por el Consejo Nacional de Beneficios Tributarios en Ciencia, Tecnología e Innovación (CNBT) como de investigación, desarrollo tecnológico o innovación, tendrán derecho a descontar de su impuesto sobre la renta a cargo el 25% del valor invertido en dichos proyectos en el período gravable en que se realizó la inversión. Las inversiones deben realizarse a través de Investigadores, Grupos o Centros de Investigación, Desarrollo Tecnológico o Innovación o Unidades de Investigación, Desarrollo Tecnológico o Innovación de Empresas, registrados y reconocidos por Colciencias (ahora Ministerio de Ciencia, Tecnología e Innovación). El descuento no puede exceder el 25% del impuesto a cargo, pero el exceso no descontado puede tomarse en los períodos gravables siguientes."
    },
    {
        id: "tributario_020",
        category: "sistema_tributario",
        difficulty: "baja",
        text: "Un contribuyente persona natural ha recibido una notificación de la DIAN informándole que debe corregir su declaración de renta porque ha detectado errores en la misma.",
        question: "De acuerdo con el sistema tributario colombiano, ¿qué sanción debe pagar el contribuyente si corrige voluntariamente su declaración antes de que la DIAN le notifique un requerimiento especial?",
        options: [
            "No debe pagar ninguna sanción si la corrección es voluntaria",
            "Debe pagar una sanción del 10% del mayor valor a pagar o del menor saldo a favor",
            "Debe pagar una sanción del 20% del mayor valor a pagar o del menor saldo a favor",
            "Debe pagar una sanción equivalente al 100% de la diferencia entre el saldo a pagar o saldo a favor determinado en la liquidación oficial y el declarado por el contribuyente"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el sistema tributario colombiano, específicamente el artículo 644 del Estatuto Tributario, el contribuyente debe pagar una sanción del 10% del mayor valor a pagar o del menor saldo a favor si corrige voluntariamente su declaración antes de que la DIAN le notifique un requerimiento especial. Este artículo establece que cuando los contribuyentes, responsables o agentes retenedores corrijan sus declaraciones tributarias, deberán liquidar y pagar una sanción equivalente al 10% del mayor valor a pagar o del menor saldo a favor, según el caso, que se genere entre la corrección y la declaración inmediatamente anterior a aquella, cuando la corrección se realice después del vencimiento del plazo para declarar y antes de que se produzca emplazamiento para corregir o auto que ordene visita de inspección tributaria. Es importante destacar que, según el mismo artículo, la sanción por corrección a las declaraciones no aplica para las declaraciones de corrección que disminuyan el valor a pagar o aumenten el saldo a favor, siempre que se presente dentro del año siguiente al vencimiento del plazo para declarar y se cumpla con los requisitos establecidos en el artículo 589 del Estatuto Tributario."
    }
];