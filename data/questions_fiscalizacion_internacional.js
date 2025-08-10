// Preguntas sobre Fiscalización Internacional
const questions_fiscalizacion_internacional = [
    {
        id: "fiscalizacion_int_001",
        category: "fiscalizacion_internacional",
        difficulty: "baja",
        text: "Una empresa colombiana realiza operaciones con su casa matriz ubicada en España.",
        question: "Según la normativa colombiana, ¿estas empresas se consideran vinculadas económicamente para efectos del régimen de precios de transferencia?",
        options: [
            "No, porque España tiene un convenio para evitar la doble imposición con Colombia",
            "Sí, porque existe subordinación cuando la matriz posee más del 50% del capital de la filial",
            "No, porque las operaciones entre matriz y filial están exentas del régimen de precios de transferencia",
            "Sí, pero solo si las operaciones superan los 10,000 UVT anuales"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el artículo 260-1 del Estatuto Tributario colombiano, se considera que existe vinculación económica cuando una entidad es subordinada o controlada por otra. Específicamente, el numeral 1 del literal b) de dicho artículo establece que existe subordinación cuando más del 50% del capital de una sociedad pertenece a otra, directamente o por intermedio de sus subordinadas. En el caso de una casa matriz y su filial, por definición existe esta relación de subordinación, ya que la matriz posee control sobre la filial. Por lo tanto, estas empresas se consideran vinculadas económicamente para efectos del régimen de precios de transferencia, independientemente de la existencia de un convenio para evitar la doble imposición entre Colombia y España. Esta vinculación implica que las operaciones entre ambas entidades deben cumplir con el principio de plena competencia y están sujetas a las obligaciones documentales y de información establecidas en el régimen de precios de transferencia."
    },
    {
        id: "fiscalizacion_int_002",
        category: "fiscalizacion_internacional",
        difficulty: "media",
        text: "Una empresa colombiana realiza operaciones con vinculados económicos del exterior por un valor total de 100,000 UVT durante el año gravable.",
        question: "¿Qué obligaciones tiene esta empresa en materia de precios de transferencia según la normativa colombiana?",
        options: [
            "Solo debe presentar la declaración informativa de precios de transferencia",
            "Debe presentar la declaración informativa y preparar documentación comprobatoria (Local File y Master File)",
            "No tiene obligaciones en materia de precios de transferencia porque el monto es inferior a 500,000 UVT",
            "Solo debe preparar documentación comprobatoria (Local File), pero no está obligada a presentar la declaración informativa"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con los artículos 260-5 y 260-9 del Estatuto Tributario colombiano, los contribuyentes que realicen operaciones con vinculados económicos del exterior están obligados a presentar la declaración informativa de precios de transferencia cuando el monto total de dichas operaciones sea igual o superior a 45,000 UVT (para el año gravable 2023). Adicionalmente, según el artículo 260-5, están obligados a preparar y presentar documentación comprobatoria (Local File y Master File) cuando el monto total de operaciones con vinculados económicos durante el año gravable sea igual o superior a 45,000 UVT. En este caso, la empresa realiza operaciones por 100,000 UVT, superando ambos umbrales, por lo que debe cumplir con ambas obligaciones: presentar la declaración informativa y preparar la documentación comprobatoria. El Local File contiene información específica sobre las operaciones realizadas por el contribuyente con sus vinculados económicos, mientras que el Master File contiene información global relevante del grupo multinacional."
    },
    {
        id: "fiscalizacion_int_003",
        category: "fiscalizacion_internacional",
        difficulty: "alta",
        text: "Una empresa multinacional con casa matriz en Francia tiene operaciones en Colombia y realiza transacciones con vinculados económicos en varios países. El grupo multinacional tiene ingresos consolidados superiores a 750 millones de euros.",
        question: "Además de las obligaciones regulares de precios de transferencia, ¿qué informe adicional debe presentar esta empresa según los estándares BEPS (Erosión de la Base Imponible y Traslado de Beneficios) adoptados por Colombia?",
        options: [
            "Informe de Transparencia Fiscal",
            "Informe País por País (Country-by-Country Report)",
            "Informe de Operaciones Transfronterizas",
            "Informe de Estructuras Híbridas"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el artículo 260-5 del Estatuto Tributario colombiano, modificado por la Ley 1819 de 2016, que adoptó los estándares BEPS (Erosión de la Base Imponible y Traslado de Beneficios) de la OCDE, los grupos multinacionales con ingresos consolidados iguales o superiores a 750 millones de euros deben presentar el Informe País por País (Country-by-Country Report). Este informe contiene información agregada relacionada con la asignación global de ingresos e impuestos pagados por el grupo multinacional, junto con ciertos indicadores de localización de actividades económicas en las jurisdicciones fiscales en las que opera. El informe incluye información sobre todas las entidades que conforman el grupo multinacional, identificando el país de residencia fiscal de cada una, el país de constitución (cuando sea diferente), la naturaleza de la actividad principal, los ingresos, utilidades, impuestos pagados, activos, empleados, entre otros datos. Este informe es una herramienta fundamental para que las administraciones tributarias evalúen riesgos relacionados con precios de transferencia y otras prácticas de erosión de la base imponible."
    },
    {
        id: "fiscalizacion_int_004",
        category: "fiscalizacion_internacional",
        difficulty: "media",
        text: "Una empresa colombiana ha realizado operaciones de venta de productos terminados a un vinculado económico en Panamá. La DIAN está evaluando si estas operaciones cumplen con el principio de plena competencia.",
        question: "¿Cuál es el método más adecuado para analizar estas operaciones según el régimen de precios de transferencia colombiano?",
        options: [
            "Método de Partición de Utilidades",
            "Método del Precio Comparable No Controlado",
            "Método del Costo Adicionado",
            "Método del Precio de Reventa"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el artículo 260-3 del Estatuto Tributario colombiano, el Método del Precio Comparable No Controlado (PC) es el más adecuado para analizar operaciones de venta de productos terminados cuando existen comparables externos o internos disponibles. Este método compara el precio de bienes o servicios transferidos en una operación entre vinculados económicos con el precio cobrado por bienes o servicios transferidos en una operación comparable entre partes independientes, en circunstancias comparables. Es particularmente útil cuando se trata de productos con precios de mercado conocidos o cotizaciones públicas, como commodities o productos con características estandarizadas. El Método del Precio de Reventa sería más adecuado si la empresa colombiana fuera la compradora (distribuidora) y no la vendedora. El Método del Costo Adicionado es más apropiado para fabricantes que venden productos semiterminados o prestan servicios a vinculados. El Método de Partición de Utilidades se utiliza en operaciones muy interrelacionadas que no pueden evaluarse separadamente."
    },
    {
        id: "fiscalizacion_int_005",
        category: "fiscalizacion_internacional",
        difficulty: "baja",
        text: "Una empresa colombiana ha realizado pagos por servicios administrativos a su casa matriz ubicada en Estados Unidos.",
        question: "¿Qué requisitos deben cumplir estos pagos para ser deducibles en Colombia según la normativa de fiscalización internacional?",
        options: [
            "Solo se requiere la factura emitida por la casa matriz",
            "Deben cumplir con el principio de plena competencia, demostrar la prestación efectiva del servicio y su necesidad",
            "Son automáticamente deducibles por tratarse de pagos a la casa matriz",
            "No son deducibles bajo ninguna circunstancia por considerarse pagos a vinculados económicos"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el artículo 260-3 del Estatuto Tributario colombiano, en concordancia con el artículo 107 (requisitos de las deducciones) y el artículo 124-1 (requisitos para la deducción de pagos al exterior), los pagos por servicios administrativos a la casa matriz para ser deducibles deben cumplir con tres requisitos fundamentales: 1) Cumplir con el principio de plena competencia, es decir, el precio debe ser similar al que se hubiera pactado entre partes independientes en operaciones comparables; 2) Demostrar la prestación efectiva del servicio, mediante evidencia que confirme que el servicio fue realmente prestado; y 3) Demostrar la necesidad del servicio, es decir, que el servicio tiene relación de causalidad con la actividad productora de renta del contribuyente y es necesario y proporcionado de acuerdo con las circunstancias. Adicionalmente, estos pagos están sujetos a retención en la fuente y deben cumplir con las obligaciones documentales y de información establecidas en el régimen de precios de transferencia."
    },
    {
        id: "fiscalizacion_int_006",
        category: "fiscalizacion_internacional",
        difficulty: "alta",
        text: "Una empresa multinacional ha establecido un esquema de planificación fiscal que involucra el uso de entidades en jurisdicciones de baja imposición para canalizar pagos por intangibles.",
        question: "¿Qué medida anti-abuso específica ha implementado Colombia para contrarrestar este tipo de esquemas según los estándares BEPS?",
        options: [
            "Régimen de Entidades Controladas del Exterior (ECE)",
            "Limitación a la deducibilidad de intereses",
            "Cláusula general anti-abuso",
            "Todas las anteriores"
        ],
        correctAnswer: 0,
        explanation: "De acuerdo con los artículos 882 a 893 del Estatuto Tributario colombiano, adicionados por la Ley 1819 de 2016 que adoptó los estándares BEPS (Erosión de la Base Imponible y Traslado de Beneficios) de la OCDE, Colombia implementó el Régimen de Entidades Controladas del Exterior (ECE), también conocido como normas CFC (Controlled Foreign Corporations). Este régimen busca contrarrestar el diferimiento del impuesto sobre la renta mediante el uso de entidades controladas en el exterior ubicadas en jurisdicciones de baja o nula imposición. Bajo este régimen, los residentes fiscales colombianos que tengan control sobre una ECE deben incluir en su declaración de renta los ingresos pasivos (como regalías por intangibles, intereses, dividendos, etc.) obtenidos por la ECE, en proporción a su participación en ella, independientemente de si hay distribución de utilidades. Esto evita que se utilicen entidades en paraísos fiscales para acumular rentas pasivas sin tributación en Colombia."
    },
    {
        id: "fiscalizacion_int_007",
        category: "fiscalizacion_internacional",
        difficulty: "media",
        text: "Una empresa colombiana ha recibido un préstamo de su casa matriz en el exterior con una tasa de interés del 12% anual, cuando la tasa de mercado para préstamos similares es del 8%.",
        question: "¿Qué consecuencia fiscal puede enfrentar esta empresa según el régimen de precios de transferencia colombiano?",
        options: [
            "Ninguna, porque los préstamos entre vinculados están exentos del régimen de precios de transferencia",
            "La DIAN puede rechazar la deducibilidad de los intereses que excedan la tasa de mercado",
            "Debe pagar un impuesto adicional del 10% sobre el total de los intereses",
            "Solo enfrentará consecuencias si el préstamo supera el 50% del patrimonio de la empresa colombiana"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el artículo 260-4 del Estatuto Tributario colombiano, las operaciones entre vinculados económicos, incluidos los préstamos, deben cumplir con el principio de plena competencia, es decir, deben pactarse en condiciones similares a las que se hubieran pactado entre partes independientes en operaciones comparables. En este caso, la tasa de interés del 12% es superior a la tasa de mercado del 8% para préstamos similares, lo que indica que no cumple con el principio de plena competencia. Según el artículo 260-11, la DIAN puede rechazar la deducibilidad de los intereses que excedan la tasa de mercado (en este caso, el 4% adicional) y determinar un mayor impuesto a cargo del contribuyente. Adicionalmente, podría imponer una sanción por inexactitud si el contribuyente dedujo la totalidad de los intereses en su declaración de renta. Es importante destacar que esta consecuencia es independiente de la regla de subcapitalización establecida en el artículo 118-1, que limita la deducibilidad de intereses cuando el préstamo excede cierto porcentaje del patrimonio."
    },
    {
        id: "fiscalizacion_int_008",
        category: "fiscalizacion_internacional",
        difficulty: "baja",
        text: "Una empresa multinacional está evaluando establecer una subsidiaria en Colombia para prestar servicios a otras entidades del grupo en Latinoamérica.",
        question: "¿Qué concepto tributario internacional debe considerar principalmente para evitar una fiscalización por parte de la DIAN?",
        options: [
            "Establecimiento permanente",
            "Residencia fiscal dual",
            "Beneficiario efectivo",
            "Subcapitalización"
        ],
        correctAnswer: 0,
        explanation: "El concepto de establecimiento permanente, definido en el artículo 20-1 del Estatuto Tributario colombiano y en los convenios para evitar la doble imposición suscritos por Colombia, es fundamental en la fiscalización internacional. Un establecimiento permanente (EP) es un lugar fijo de negocios mediante el cual una empresa extranjera realiza toda o parte de su actividad en Colombia, lo que genera obligaciones tributarias en el país. Al establecer una subsidiaria en Colombia para prestar servicios a otras entidades del grupo en Latinoamérica, la empresa multinacional debe considerar si esta subsidiaria podría ser considerada un EP de las otras entidades del grupo. Si la subsidiaria actúa habitualmente en nombre de las otras entidades, concluye contratos o desempeña un rol principal que conduce a su conclusión, podría configurarse un EP de dichas entidades en Colombia, generando obligaciones tributarias adicionales. La planificación adecuada de las funciones, activos y riesgos de la subsidiaria es esencial para evitar contingencias fiscales."
    },
    {
        id: "fiscalizacion_int_009",
        category: "fiscalizacion_internacional",
        difficulty: "alta",
        text: "Una empresa colombiana ha realizado pagos por regalías a una entidad ubicada en un país con el cual Colombia tiene suscrito un convenio para evitar la doble imposición (CDI).",
        question: "¿Cómo afecta el concepto de 'beneficiario efectivo' a la aplicación de las tasas reducidas de retención previstas en el CDI según la normativa colombiana?",
        options: [
            "No tiene ningún efecto, las tasas reducidas se aplican automáticamente",
            "Solo afecta a los pagos por dividendos, no a las regalías",
            "Las tasas reducidas solo se aplican si el receptor de los pagos es el beneficiario efectivo de los mismos",
            "El concepto de beneficiario efectivo no está contemplado en la normativa colombiana"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 631-5 del Estatuto Tributario colombiano, adicionado por la Ley 1819 de 2016, para la aplicación de las tasas de retención reducidas previstas en los convenios para evitar la doble imposición (CDI) suscritos por Colombia, es necesario que el receptor del pago sea el beneficiario efectivo de dicho ingreso. El concepto de beneficiario efectivo busca evitar el uso abusivo de los CDI mediante estructuras de canalización o conducto (treaty shopping), donde una entidad residente en un país con CDI actúa como mero intermediario para obtener los beneficios del convenio. Según la normativa colombiana y los comentarios al Modelo de Convenio de la OCDE, el beneficiario efectivo es quien tiene el derecho a usar y disfrutar del ingreso sin restricciones contractuales o legales que lo obliguen a transferirlo a un tercero. En el caso de las regalías, si el receptor no es el beneficiario efectivo (por ejemplo, si actúa como agente o intermediario), no podrá aplicarse la tasa reducida prevista en el CDI y deberá aplicarse la tasa general de retención establecida en la legislación interna colombiana."
    },
    {
        id: "fiscalizacion_int_010",
        category: "fiscalizacion_internacional",
        difficulty: "media",
        text: "Una empresa multinacional ha estructurado sus operaciones de manera que las funciones de alto valor (I+D, marketing estratégico) se realizan en países de alta tributación, mientras que la propiedad legal de los intangibles se ubica en países de baja tributación.",
        question: "¿Qué enfoque utiliza la DIAN, siguiendo los lineamientos BEPS, para analizar este tipo de estructuras en materia de precios de transferencia?",
        options: [
            "Acepta la estructura siempre que exista documentación legal que respalde la propiedad de los intangibles",
            "Analiza únicamente la propiedad legal de los intangibles para determinar quién debe recibir los rendimientos",
            "Analiza las funciones DEMPE (Desarrollo, Mejora, Mantenimiento, Protección y Explotación) para determinar la asignación adecuada de beneficios",
            "Rechaza automáticamente cualquier estructura que ubique intangibles en países de baja tributación"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 260-3 del Estatuto Tributario colombiano y la Resolución 2 de 2020 de la DIAN, que incorporan los lineamientos BEPS (Acciones 8-10) de la OCDE en materia de precios de transferencia, para el análisis de operaciones que involucran intangibles se debe aplicar el enfoque DEMPE. Este enfoque analiza las funciones relacionadas con el Desarrollo, Mejora, Mantenimiento, Protección y Explotación de los intangibles, así como los activos utilizados y los riesgos asumidos por cada entidad del grupo multinacional. Según este enfoque, la mera propiedad legal de los intangibles no es suficiente para atribuir la totalidad de los beneficios derivados de su explotación. En cambio, los rendimientos deben asignarse a las entidades que efectivamente realizan las funciones DEMPE, aportan los activos y asumen los riesgos relacionados con los intangibles. Por lo tanto, si las funciones de alto valor se realizan en países de alta tributación, estas entidades deberían recibir una remuneración acorde con su contribución al valor del intangible, independientemente de dónde se ubique la propiedad legal."
    },
    {
        id: "fiscalizacion_int_011",
        category: "fiscalizacion_internacional",
        difficulty: "baja",
        text: "Una empresa colombiana ha realizado operaciones con vinculados económicos ubicados en jurisdicciones consideradas como paraísos fiscales según la normativa colombiana.",
        question: "¿Qué implicaciones tiene esto en materia de precios de transferencia?",
        options: [
            "Las operaciones están prohibidas y deben ser revertidas",
            "Las operaciones están sujetas al régimen de precios de transferencia independientemente de su monto",
            "Las operaciones están exentas del régimen de precios de transferencia",
            "Las operaciones solo están sujetas al régimen si superan las 10,000 UVT"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el artículo 260-7 del Estatuto Tributario colombiano, las operaciones realizadas por contribuyentes del impuesto sobre la renta con personas, sociedades, entidades o empresas ubicadas, residentes o domiciliadas en jurisdicciones no cooperantes, de baja o nula imposición o regímenes tributarios preferenciales (comúnmente conocidos como paraísos fiscales), están sometidas al régimen de precios de transferencia, independientemente del monto de las operaciones. Esto significa que estas operaciones deben cumplir con el principio de plena competencia y están sujetas a las obligaciones documentales y de información establecidas en el régimen de precios de transferencia, incluso si no se superan los umbrales generales establecidos en los artículos 260-5 y 260-9 para otras operaciones con vinculados económicos. Adicionalmente, según el parágrafo 2 del mismo artículo, los pagos realizados a personas, sociedades, entidades o empresas ubicadas en estas jurisdicciones se someten a una retención en la fuente a título de impuesto sobre la renta a la tarifa del 33%."
    },
    {
        id: "fiscalizacion_int_012",
        category: "fiscalizacion_internacional",
        difficulty: "alta",
        text: "Una empresa multinacional ha implementado una reestructuración de negocios que implica la transferencia de funciones, activos y riesgos de su subsidiaria colombiana a otra entidad del grupo ubicada en el exterior.",
        question: "¿Qué aspecto crítico analizará la DIAN en una fiscalización de esta reestructuración según los lineamientos de precios de transferencia?",
        options: [
            "Solo verificará que exista un contrato escrito que documente la reestructuración",
            "Analizará si la subsidiaria colombiana ha recibido una compensación adecuada por la transferencia de funciones, activos y riesgos",
            "Únicamente revisará si se han presentado las declaraciones tributarias correspondientes",
            "Solo verificará que la reestructuración haya sido aprobada por la junta directiva de la empresa"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el artículo 260-3 del Estatuto Tributario colombiano y la Resolución 2 de 2020 de la DIAN, que incorporan los lineamientos BEPS de la OCDE en materia de precios de transferencia, en una fiscalización de reestructuraciones empresariales la DIAN analizará si la subsidiaria colombiana ha recibido una compensación adecuada por la transferencia de funciones, activos y riesgos. Según estos lineamientos, cuando una entidad transfiere funciones, activos y riesgos valiosos a otra entidad del grupo, debe recibir una compensación equivalente a la que hubiera acordado con un tercero independiente en circunstancias comparables (principio de plena competencia). La DIAN evaluará: 1) La identificación precisa de las funciones, activos y riesgos antes y después de la reestructuración; 2) Las razones empresariales y los beneficios esperados de la reestructuración; 3) Las opciones realistamente disponibles para la entidad colombiana; 4) La valoración de los activos tangibles e intangibles transferidos; y 5) La compensación recibida por la entidad colombiana, incluyendo posibles indemnizaciones por terminación o renegociación de acuerdos existentes."
    },
    {
        id: "fiscalizacion_int_013",
        category: "fiscalizacion_internacional",
        difficulty: "media",
        text: "Una empresa colombiana ha recibido un préstamo de su casa matriz en el exterior por un monto que excede el resultado de multiplicar por dos el patrimonio líquido del contribuyente a 31 de diciembre del año anterior.",
        question: "¿Qué limitación aplica a la deducibilidad de los intereses pagados por este préstamo según la normativa colombiana?",
        options: [
            "Los intereses son totalmente deducibles si cumplen con el principio de plena competencia",
            "Los intereses no son deducibles en absoluto por tratarse de un préstamo con un vinculado económico",
            "Los intereses son deducibles solo hasta el 30% del EBITDA fiscal del contribuyente",
            "Los intereses son deducibles solo si el préstamo se destina a proyectos de infraestructura"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 118-1 del Estatuto Tributario colombiano, modificado por la Ley 2010 de 2019, sin perjuicio de los demás requisitos y condiciones para la procedencia de la deducción de los gastos por concepto de intereses, los contribuyentes del impuesto sobre la renta solo podrán deducir los intereses generados con ocasión de deudas cuyo monto total promedio durante el correspondiente año gravable no exceda el resultado de multiplicar por dos (2) el patrimonio líquido del contribuyente determinado a 31 de diciembre del año gravable inmediatamente anterior. En virtud de lo dispuesto en el parágrafo 1 del mismo artículo, a partir del año gravable 2021, los intereses son deducibles solo hasta el 30% del EBITDA fiscal (Utilidad antes de intereses, impuestos, depreciaciones y amortizaciones) del contribuyente del año gravable. Esta limitación aplica independientemente de que los intereses cumplan con el principio de plena competencia y de que el préstamo se destine a proyectos específicos."
    },
    {
        id: "fiscalizacion_int_014",
        category: "fiscalizacion_internacional",
        difficulty: "baja",
        text: "Una empresa colombiana ha realizado pagos por servicios técnicos a una empresa ubicada en un país con el cual Colombia tiene suscrito un convenio para evitar la doble imposición.",
        question: "¿Qué documento debe solicitar la empresa colombiana para aplicar la tasa de retención reducida prevista en el convenio?",
        options: [
            "Únicamente la factura comercial emitida por el proveedor extranjero",
            "Certificado de residencia fiscal expedido por la autoridad tributaria del país del beneficiario",
            "Autorización previa de la DIAN para aplicar el convenio",
            "Dictamen de un auditor independiente que certifique la procedencia del pago"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el artículo 631-5 del Estatuto Tributario colombiano y la Resolución 4240 de 2000 de la DIAN, para aplicar las disposiciones de un convenio para evitar la doble imposición (CDI), incluyendo las tasas de retención reducidas para pagos por servicios técnicos, el beneficiario de los pagos debe acreditar su residencia fiscal en el país con el cual Colombia tiene suscrito el CDI. Esta acreditación se realiza mediante un certificado de residencia fiscal expedido por la autoridad tributaria competente del país de residencia del beneficiario. Este certificado debe estar vigente al momento de efectuar el pago y debe indicar el año fiscal al cual corresponde. Adicionalmente, si el convenio exige que el beneficiario del pago sea el beneficiario efectivo del mismo, se requerirá también un certificado de situación tributaria o documento equivalente. La empresa colombiana debe conservar estos documentos como soporte de la aplicación de la tasa de retención reducida prevista en el convenio, ya que podrán ser requeridos por la DIAN en un eventual proceso de fiscalización."
    },
    {
        id: "fiscalizacion_int_015",
        category: "fiscalizacion_internacional",
        difficulty: "alta",
        text: "Una empresa multinacional ha implementado un esquema de planificación fiscal que involucra una entidad híbrida que es considerada transparente en un país y opaca en otro, generando una deducción en Colombia sin inclusión del ingreso correspondiente en la otra jurisdicción.",
        question: "¿Qué medida anti-abuso específica ha implementado Colombia para contrarrestar este tipo de esquemas según los estándares BEPS?",
        options: [
            "Régimen de Entidades Controladas del Exterior (ECE)",
            "Norma anti-híbridos",
            "Limitación a la deducibilidad de intereses",
            "Cláusula general anti-abuso"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el artículo 259-2 del Estatuto Tributario colombiano, adicionado por la Ley 2010 de 2019 que adoptó los estándares BEPS (Acción 2) de la OCDE, Colombia implementó una norma anti-híbridos para contrarrestar los efectos de los mecanismos híbridos. Según esta norma, no serán deducibles los pagos por concepto de intereses, regalías, compensaciones, servicios o cualquier otro que realice un residente fiscal colombiano a una entidad que sea considerada como instrumento o entidad híbrida, cuando: 1) El pago no sea considerado como un ingreso gravable para el beneficiario efectivo en la otra jurisdicción; o 2) El beneficiario efectivo del pago esté domiciliado en una jurisdicción no cooperante o de baja o nula imposición. Esta norma busca evitar la doble no imposición que se genera cuando un pago es deducible en Colombia pero no es gravado en la jurisdicción del beneficiario debido a diferencias en la calificación de entidades o instrumentos entre los sistemas tributarios (asimetrías híbridas)."
    },
    {
        id: "fiscalizacion_int_016",
        category: "fiscalizacion_internacional",
        difficulty: "media",
        text: "Una empresa colombiana ha realizado una operación de importación de materias primas con un vinculado económico en el exterior. La DIAN ha cuestionado el precio pactado por considerar que no cumple con el principio de plena competencia.",
        question: "¿Qué método de precios de transferencia sería más adecuado para analizar esta operación?",
        options: [
            "Método de Partición de Utilidades",
            "Método del Precio Comparable No Controlado",
            "Método del Precio de Reventa",
            "Método del Costo Adicionado"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el artículo 260-3 del Estatuto Tributario colombiano, para las operaciones de importación de materias primas, el Método del Precio Comparable No Controlado (PC) es generalmente el más adecuado cuando existen comparables externos o internos disponibles. Este método compara el precio de bienes transferidos en una operación entre vinculados económicos con el precio cobrado por bienes transferidos en una operación comparable entre partes independientes, en circunstancias comparables. Es particularmente útil para materias primas que tienen precios de mercado conocidos o cotizaciones públicas (commodities). Según el parágrafo 1 del mismo artículo, para operaciones de importación y exportación de commodities, el método PC será el más apropiado y deberá utilizarse el precio de cotización de la fecha de la operación como referencia, salvo prueba en contrario. El Método del Costo Adicionado sería más apropiado si la empresa colombiana fuera la vendedora (fabricante) y no la compradora. El Método del Precio de Reventa es más adecuado para distribuidores que no agregan valor significativo a los productos. El Método de Partición de Utilidades se utiliza en operaciones muy interrelacionadas que no pueden evaluarse separadamente."
    },
    {
        id: "fiscalizacion_int_017",
        category: "fiscalizacion_internacional",
        difficulty: "baja",
        text: "Una empresa multinacional está considerando establecer un centro de servicios compartidos en Colombia para prestar servicios administrativos, contables y de recursos humanos a todas sus filiales en Latinoamérica.",
        question: "¿Qué aspecto debe considerar principalmente en materia de precios de transferencia para estos servicios intragrupo?",
        options: [
            "Debe cobrar un precio igual a cero por tratarse de servicios intragrupo",
            "Debe demostrar que los servicios efectivamente se prestan, generan beneficio económico o comercial para el receptor y el precio cumple con el principio de plena competencia",
            "Puede cobrar cualquier precio siempre que esté documentado en un contrato escrito",
            "Estos servicios están exentos del régimen de precios de transferencia"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el artículo 260-3 del Estatuto Tributario colombiano y la Resolución 2 de 2020 de la DIAN, que incorporan los lineamientos BEPS de la OCDE en materia de precios de transferencia, para que los pagos por servicios intragrupo sean deducibles para el receptor y considerados ingreso gravable para el prestador, se deben cumplir tres requisitos fundamentales: 1) Demostrar que los servicios efectivamente se prestan, mediante evidencia que confirme la realización del servicio; 2) Demostrar que los servicios generan un beneficio económico o comercial para el receptor, que mejora su posición comercial; y 3) Demostrar que el precio cobrado cumple con el principio de plena competencia, es decir, es similar al que hubieran pactado partes independientes en circunstancias comparables. La DIAN rechazará la deducibilidad de pagos por servicios que no cumplan estos requisitos, especialmente aquellos que duplican funciones, benefician solo al prestador o accionistas, o corresponden a actividades de accionista que no deben ser cobradas a las subsidiarias."
    },
    {
        id: "fiscalizacion_int_018",
        category: "fiscalizacion_internacional",
        difficulty: "alta",
        text: "Una empresa colombiana forma parte de un grupo multinacional que ha implementado un acuerdo de contribución de costos (Cost Contribution Arrangement - CCA) para el desarrollo conjunto de un intangible valioso.",
        question: "¿Cómo debe analizarse la participación de la empresa colombiana en este acuerdo según los lineamientos de precios de transferencia?",
        options: [
            "La contribución de la empresa colombiana debe ser proporcional a los beneficios esperados del intangible",
            "La contribución debe ser igual para todas las empresas participantes, independientemente de los beneficios esperados",
            "La empresa colombiana no puede participar en acuerdos de contribución de costos según la normativa colombiana",
            "La contribución debe ser determinada exclusivamente por la casa matriz sin considerar los beneficios esperados"
        ],
        correctAnswer: 0,
        explanation: "De acuerdo con el artículo 260-3 del Estatuto Tributario colombiano y la Resolución 2 de 2020 de la DIAN, que incorporan los lineamientos BEPS (Acción 8) de la OCDE en materia de precios de transferencia, en un acuerdo de contribución de costos (CCA) para el desarrollo conjunto de intangibles, la contribución de cada participante debe ser proporcional a los beneficios esperados del intangible. Esto significa que si una empresa espera obtener el 30% de los beneficios totales del intangible, debería contribuir con aproximadamente el 30% de los costos totales de desarrollo. Adicionalmente, cada participante debe tener la capacidad de explotar efectivamente el intangible y debe ejercer control sobre los riesgos asumidos en el desarrollo del mismo. La DIAN analizará si la valoración de las contribuciones (tanto en efectivo como en especie, como servicios o intangibles preexistentes) y la determinación de los beneficios esperados cumplen con el principio de plena competencia. Si la contribución no es proporcional a los beneficios esperados, podría considerarse que existe una transferencia adicional entre los participantes que debería ser compensada separadamente."
    },
    {
        id: "fiscalizacion_int_019",
        category: "fiscalizacion_internacional",
        difficulty: "media",
        text: "Una empresa colombiana ha recibido dividendos de una subsidiaria ubicada en un país con el cual Colombia tiene suscrito un convenio para evitar la doble imposición.",
        question: "¿Qué tratamiento fiscal tienen estos dividendos en Colombia según la normativa de fiscalización internacional?",
        options: [
            "Están exentos del impuesto sobre la renta en Colombia en todos los casos",
            "Están gravados con el impuesto sobre la renta en Colombia, pero se puede acreditar el impuesto pagado en el exterior",
            "Están gravados con una tarifa fija del 10% sin posibilidad de acreditar impuestos pagados en el exterior",
            "El tratamiento depende de si los dividendos provienen de utilidades que ya pagaron impuesto en el país de origen"
        ],
        correctAnswer: 3,
        explanation: "De acuerdo con el artículo 254 del Estatuto Tributario colombiano, en concordancia con los artículos 245 y 246, el tratamiento fiscal de los dividendos recibidos por una empresa colombiana de una subsidiaria en el exterior depende de si provienen de utilidades que ya pagaron impuesto en el país de origen. Si los dividendos provienen de utilidades que ya pagaron impuesto en el país de origen, se consideran ingresos no constitutivos de renta ni ganancia ocasional hasta el monto que resulte de aplicar la fórmula del artículo 246. Si exceden este monto, estarán gravados a la tarifa general del impuesto sobre la renta. Adicionalmente, según el artículo 254, la empresa colombiana puede acreditar como descuento tributario el impuesto pagado en el exterior sobre estos dividendos (tax credit), hasta el monto del impuesto que debería pagar en Colombia por estas rentas. El convenio para evitar la doble imposición puede modificar este tratamiento, estableciendo tasas reducidas de retención en el país de origen o métodos específicos para eliminar la doble imposición."
    },
    {
        id: "fiscalizacion_int_020",
        category: "fiscalizacion_internacional",
        difficulty: "baja",
        text: "Una empresa colombiana ha contratado servicios de consultoría con una empresa ubicada en un país con el cual Colombia no tiene suscrito un convenio para evitar la doble imposición.",
        question: "¿Qué obligación tiene la empresa colombiana respecto al pago por estos servicios según la normativa de fiscalización internacional?",
        options: [
            "No tiene ninguna obligación especial por tratarse de pagos al exterior",
            "Debe practicar retención en la fuente a título de impuesto sobre la renta a la tarifa general del 20%",
            "Debe solicitar autorización previa a la DIAN para realizar el pago",
            "Debe registrar el contrato ante el Banco de la República"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el artículo 408 del Estatuto Tributario colombiano, los pagos o abonos en cuenta por concepto de consultorías, servicios técnicos y de asistencia técnica, prestados por personas no residentes o no domiciliadas en Colombia, están sujetos a retención en la fuente a título de impuesto sobre la renta a la tarifa del 20% sobre el valor total del pago o abono en cuenta. Esta retención debe ser practicada por la empresa colombiana que realiza el pago, actuando como agente retenedor. La retención constituye el impuesto final para el beneficiario extranjero y debe ser declarada y pagada por la empresa colombiana en su declaración mensual de retenciones en la fuente. No se requiere autorización previa de la DIAN para realizar el pago ni es necesario registrar el contrato ante el Banco de la República, aunque sí deben cumplirse las obligaciones cambiarias correspondientes (canalización del pago a través del mercado cambiario)."
    }
];