// Preguntas sobre Evasión, Elusión y Contrabando
const questions_evasion_elusion = [
    {
        id: "evasion_elusion_001",
        category: "evasion_elusion",
        difficulty: "media",
        text: "Durante una auditoría fiscal a una empresa comercial, un funcionario de la DIAN identifica que el contribuyente ha registrado facturas de compra por servicios de consultoría con descripciones genéricas, montos significativos y prestados por una empresa recientemente constituida que no cuenta con la infraestructura ni personal para prestar dichos servicios.",
        question: "Según la normativa vigente en 2025, ¿qué tipo de conducta podría estar configurándose en este caso?",
        options: [
            "Una práctica de planeación tributaria legítima, ya que las empresas tienen libertad para contratar los servicios que consideren necesarios.",
            "Una posible conducta de evasión fiscal mediante el uso de operaciones simuladas para generar gastos ficticios que reduzcan artificialmente la base gravable.",
            "Una estrategia de elusión fiscal que aprovecha vacíos normativos para reducir la carga tributaria sin violar directamente la ley.",
            "Una simple irregularidad formal en la documentación de los servicios, que puede ser subsanada con la presentación de contratos y entregables."
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el artículo 640 del Estatuto Tributario y la Ley 2010 de 2019 (Ley de Crecimiento Económico), vigentes en 2025, la situación descrita presenta indicios de una posible conducta de evasión fiscal mediante operaciones simuladas. El registro de facturas por servicios de consultoría con descripciones genéricas, montos significativos y prestados por una empresa sin capacidad operativa para realizarlos, sugiere la creación de gastos ficticios para reducir artificialmente la base gravable del impuesto sobre la renta. Esta conducta podría configurar una defraudación tributaria según el artículo 434A del Código Penal, que tipifica como delito la utilización de facturas falsas o el registro de operaciones inexistentes para obtener beneficios tributarios. La jurisprudencia de la Corte Suprema de Justicia en Sentencia SP-14496 de 2022 ha establecido que la simulación de operaciones comerciales con el propósito de generar deducciones improcedentes constituye una forma de evasión fiscal sancionable tanto administrativa como penalmente."
    },
    {
        id: "evasion_elusion_002",
        category: "evasion_elusion",
        difficulty: "alta",
        text: "Una empresa multinacional con sede en Colombia ha estructurado sus operaciones de la siguiente manera: 1) Creó una filial en un país con baja tributación donde registró la propiedad de sus marcas y patentes; 2) La filial cobra a la empresa colombiana regalías por el uso de estas marcas y patentes; 3) Estos pagos representan el 30% de los ingresos de la empresa colombiana, reduciendo significativamente su base gravable en Colombia.",
        question: "Según la normativa de fiscalidad internacional vigente en 2025, ¿cómo se clasificaría esta estructura y qué facultades tiene la DIAN para cuestionarla?",
        options: [
            "Es una estructura de planeación tributaria legítima, y la DIAN no tiene facultades para cuestionarla si los contratos de licencia están debidamente documentados.",
            "Es una estructura de evasión fiscal internacional que constituye un delito tributario, y la DIAN debe iniciar inmediatamente un proceso de fiscalización penal.",
            "Es una posible estructura de elusión fiscal internacional que podría ser cuestionada bajo las normas de precios de transferencia, subcapitalización y/o abuso en materia tributaria, facultando a la DIAN para verificar que las regalías correspondan a valores de mercado y tengan sustancia económica real.",
            "Es una estructura que solo puede ser cuestionada si existe un convenio de doble imposición entre Colombia y el país de baja tributación."
        ],
        correctAnswer: 2,
        explanation: "Según la normativa de fiscalidad internacional vigente en 2025, incluyendo el artículo 260-1 y siguientes del Estatuto Tributario (régimen de precios de transferencia), el artículo 118-1 (normas de subcapitalización), el artículo 869 (norma general anti-abuso) y las disposiciones implementadas a partir de la Acción 5 del proyecto BEPS (Erosión de la Base Imponible y Traslado de Beneficios) de la OCDE, la estructura descrita constituye una posible estrategia de elusión fiscal internacional. La DIAN tiene facultades para cuestionar esta estructura verificando: 1) Que las regalías pagadas correspondan a precios de mercado entre partes independientes (principio de plena competencia); 2) Que exista sustancia económica real en la filial extranjera y no sea una entidad meramente instrumental; 3) Que la estructura no tenga como propósito principal la obtención de un beneficio tributario. La Sentencia C-465 de 2019 de la Corte Constitucional confirmó la facultad de la administración tributaria para recalificar operaciones que, aunque formalmente legales, carezcan de propósito de negocio diferente al tributario o utilicen figuras artificiosas para reducir la carga fiscal."
    },
    {
        id: "evasion_elusion_003",
        category: "evasion_elusion",
        difficulty: "media",
        text: "Durante una verificación aduanera, un funcionario de la DIAN encuentra una importación de textiles donde se declara un valor FOB significativamente inferior al valor de referencia para productos similares. La documentación presentada incluye una factura comercial que respalda el valor declarado, pero existen inconsistencias en la información del proveedor extranjero.",
        question: "Según la normativa aduanera vigente en 2025, ¿qué tipo de conducta podría configurarse en este caso y cuál sería el procedimiento adecuado?",
        options: [
            "Una simple discrepancia valorativa que debe resolverse aplicando los métodos secundarios de valoración aduanera, sin implicaciones sancionatorias.",
            "Una posible subfacturación que podría constituir una forma de contrabando técnico, facultando a la DIAN para adelantar un proceso de fiscalización, determinar el valor en aduana correcto y evaluar la procedencia de sanciones o incluso la tipificación penal.",
            "Una estrategia comercial legítima que busca reducir costos de importación, sobre la cual la DIAN no tiene competencia si la factura comercial está formalmente correcta.",
            "Una infracción cambiaria por declaración incorrecta del valor de la mercancía, que debe ser trasladada al Banco de la República."
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el Decreto 1165 de 2019 (Estatuto Aduanero) y sus modificaciones vigentes en 2025, así como el artículo 319 del Código Penal modificado por la Ley 2010 de 2019, la situación descrita presenta indicios de una posible subfacturación que podría constituir contrabando técnico. Esta conducta consiste en declarar un valor inferior al real para reducir el pago de derechos e impuestos a la importación. Según el artículo 591 del Estatuto Aduanero, la DIAN está facultada para verificar el valor declarado y, en caso de duda razonable, aplicar los métodos de valoración establecidos en el Acuerdo de Valoración de la OMC. Si se comprueba la subfacturación intencional, esto podría configurar una infracción administrativa grave según el artículo 615 del Estatuto Aduanero, con sanciones que incluyen multas de hasta el 100% del valor de los tributos dejados de pagar. Adicionalmente, si el monto de los tributos eludidos supera los umbrales establecidos en el artículo 319 del Código Penal, podría configurarse el delito de contrabando, con penas de prisión de 4 a 8 años."
    },
    {
        id: "evasion_elusion_004",
        category: "evasion_elusion",
        difficulty: "baja",
        text: "Un comerciante minorista regularmente no expide facturas electrónicas por sus ventas a consumidores finales, a menos que estos la soliciten expresamente. Cuando se le pregunta por esta práctica, argumenta que la mayoría de sus clientes no requieren factura y que esto le permite ahorrar tiempo y recursos.",
        question: "Según la normativa tributaria vigente en 2025, ¿cómo se clasifica esta conducta y cuáles son sus implicaciones?",
        options: [
            "Es una práctica comercial aceptable, ya que la facturación electrónica solo es obligatoria cuando el cliente la solicita.",
            "Es una conducta de evasión fiscal que implica el incumplimiento de obligaciones formales y sustanciales, sujeta a sanciones por no facturar y por posible omisión de ingresos.",
            "Es una estrategia de simplificación administrativa permitida para pequeños comerciantes, siempre que declaren la totalidad de sus ingresos.",
            "Es una infracción exclusivamente formal que solo amerita una sanción leve si se comprueba que todos los ingresos fueron declarados correctamente."
        ],
        correctAnswer: 1,
        explanation: "Según el artículo 615 del Estatuto Tributario y la Resolución 000042 de 2020 de la DIAN, con sus actualizaciones vigentes en 2025, todos los contribuyentes obligados a facturar deben expedir factura electrónica por cada una de sus operaciones de venta, independientemente de si el adquirente la solicita o no. La conducta descrita constituye una evasión fiscal que implica el incumplimiento de obligaciones formales (no facturar) y potencialmente sustanciales (posible omisión de ingresos no facturados en las declaraciones tributarias). Esta conducta está sujeta a la sanción por no facturar establecida en el artículo 652 del Estatuto Tributario, que puede llegar al cierre del establecimiento de comercio. Adicionalmente, si se comprueba que los ingresos no facturados tampoco fueron declarados, se configuraría una inexactitud sancionable según el artículo 648 del Estatuto Tributario, con multas de hasta el 100% del impuesto omitido. La jurisprudencia del Consejo de Estado en Sentencia 25000-23-37-000-2013-00078-01(21212) de 2018 ha reiterado que la obligación de facturar es independiente de la solicitud del adquirente y constituye un mecanismo fundamental de control tributario."
    },
    {
        id: "evasion_elusion_005",
        category: "evasion_elusion",
        difficulty: "alta",
        text: "Una empresa colombiana dedicada a la comercialización de productos electrónicos importados ha implementado el siguiente esquema: 1) Constituye una sociedad en un país vecino; 2) Esta sociedad adquiere los productos directamente de los fabricantes internacionales; 3) Posteriormente, los productos ingresan a Colombia a través de múltiples viajeros que los traen como equipaje personal, cada uno por debajo de los límites de la franquicia de viajeros; 4) La empresa colombiana comercializa estos productos en el mercado nacional.",
        question: "Según la normativa aduanera y tributaria vigente en 2025, ¿cómo se calificaría este esquema?",
        options: [
            "Una estrategia comercial innovadora que aprovecha legítimamente los beneficios de la franquicia de viajeros.",
            "Una práctica de contrabando fraccionado o "hormiga", que busca eludir los controles aduaneros y el pago de tributos mediante el fraccionamiento artificial de las importaciones.",
            "Una operación de comercio internacional que podría tener irregularidades formales, pero no constituye una infracción sustancial si los productos son legales.",
            "Una estrategia de elusión fiscal internacional que debe analizarse bajo las normas de precios de transferencia."
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el Decreto 1165 de 2019 (Estatuto Aduanero), el artículo 319 del Código Penal y la jurisprudencia vigente en 2025, el esquema descrito constituye una práctica de contrabando fraccionado o "hormiga". Esta modalidad de contrabando consiste en ingresar mercancías al territorio aduanero nacional evadiendo los controles aduaneros mediante el fraccionamiento artificial de las importaciones, utilizando indebidamente la franquicia de viajeros establecida en el artículo 300 del Estatuto Aduanero. La Sentencia SP17632-2015 de la Corte Suprema de Justicia estableció que el ingreso de mercancías utilizando múltiples personas para fraccionar la operación y evadir controles configura el delito de contrabando. Este esquema busca eludir el pago de tributos aduaneros (arancel e IVA) y evitar el cumplimiento de requisitos formales de importación como registros, licencias y demás trámites aduaneros. Según el artículo 319 del Código Penal, esta conducta puede ser sancionada con penas de prisión de 4 a 8 años y multas de hasta el 300% del valor de la mercancía, además de las sanciones administrativas correspondientes."
    },
    {
        id: "evasion_elusion_006",
        category: "evasion_elusion",
        difficulty: "media",
        text: "Una empresa colombiana ha implementado la siguiente estructura para la venta de sus productos: 1) Constituye una sociedad comercializadora en una zona franca; 2) Vende sus productos a esta sociedad a precio de costo; 3) La sociedad en zona franca vende los productos a los clientes finales en el territorio aduanero nacional con un margen de utilidad significativo; 4) La utilidad queda registrada en la sociedad ubicada en zona franca, que tiene beneficios tributarios especiales.",
        question: "Según la normativa tributaria y aduanera vigente en 2025, ¿cómo podría la DIAN cuestionar esta estructura?",
        options: [
            "No puede cuestionarla, ya que las zonas francas son regímenes especiales legalmente establecidos y las empresas tienen libertad para estructurar sus operaciones.",
            "Puede cuestionarla únicamente si la sociedad en zona franca no cumple con los requisitos formales para operar bajo ese régimen.",
            "Puede cuestionarla aplicando las normas de precios de transferencia y/o la norma general anti-abuso, argumentando que los precios no corresponden a valores de mercado y que la estructura carece de sustancia económica o propósito de negocio diferente al tributario.",
            "Puede cuestionarla solo si demuestra que existe un fraude documental en las facturas entre las dos sociedades."
        ],
        correctAnswer: 2,
        explanation: "Según los artículos 260-1 y siguientes del Estatuto Tributario (régimen de precios de transferencia) y el artículo 869 (norma general anti-abuso), vigentes en 2025, la DIAN puede cuestionar esta estructura aplicando: 1) Las normas de precios de transferencia, verificando que las operaciones entre la empresa colombiana y su vinculada en zona franca se realicen a precios de mercado (principio de plena competencia). La venta a precio de costo no refleja una operación entre partes independientes y podría ser objetada, recalculando la base gravable con precios de mercado; 2) La norma general anti-abuso, evaluando si la estructura tiene sustancia económica y propósito de negocio diferente al tributario. La Sentencia C-465 de 2019 de la Corte Constitucional confirmó que la administración tributaria puede recalificar operaciones que, aunque formalmente legales, tengan como propósito principal la obtención de un beneficio tributario. Adicionalmente, el Decreto 1165 de 2019 y sus modificaciones establecen que las operaciones entre usuarios de zonas francas y el territorio aduanero nacional deben cumplir con todas las formalidades de comercio exterior y no pueden utilizarse para simular operaciones."
    },
    {
        id: "evasion_elusion_007",
        category: "evasion_elusion",
        difficulty: "baja",
        text: "Durante una visita de fiscalización a un establecimiento comercial, un funcionario de la DIAN encuentra que el contribuyente mantiene dos sistemas de registro de ventas: uno oficial que se reporta en las declaraciones tributarias y otro no oficial donde se registran ventas adicionales que no son declaradas.",
        question: "Según la normativa tributaria vigente en 2025, ¿cómo se clasifica esta conducta y cuáles son sus implicaciones?",
        options: [
            "Es una práctica de control interno empresarial que no tiene implicaciones tributarias si el contribuyente declara correctamente sus impuestos.",
            "Es una irregularidad contable que solo amerita una sanción formal por llevar doble contabilidad.",
            "Es una conducta de evasión fiscal que constituye una infracción grave y puede configurar el delito de defraudación tributaria, con sanciones administrativas y penales.",
            "Es una estrategia de manejo de información comercial sensible que solo tendría implicaciones si se comprueba que afectó el pago de impuestos."
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con los artículos 654 y 655 del Estatuto Tributario y el artículo 434A del Código Penal, vigentes en 2025, mantener dos sistemas de registro de ventas con el propósito de omitir ingresos en las declaraciones tributarias constituye una conducta de evasión fiscal. Esta práctica implica: 1) Una infracción tributaria grave por llevar doble contabilidad, sancionable según el artículo 655 del Estatuto Tributario con una multa equivalente al 1% de los ingresos brutos del año anterior; 2) Una inexactitud en las declaraciones tributarias por omisión de ingresos, sancionable según el artículo 648 del Estatuto Tributario con una multa del 100% del impuesto omitido; 3) Si el monto de los impuestos defraudados supera los umbrales establecidos en el artículo 434A del Código Penal, puede configurarse el delito de defraudación tributaria, con penas de prisión de 36 a 60 meses. La jurisprudencia de la Corte Suprema de Justicia en Sentencia SP-14496 de 2022 ha establecido que la utilización de sistemas paralelos de registro con el propósito de ocultar ingresos constituye una conducta dolosa orientada a evadir impuestos, sancionable tanto administrativa como penalmente."
    },
    {
        id: "evasion_elusion_008",
        category: "evasion_elusion",
        difficulty: "alta",
        text: "Una empresa multinacional del sector tecnológico opera en Colombia a través de una filial que formalmente solo presta servicios de marketing y soporte técnico. Sin embargo, en la práctica, esta filial realiza negociaciones con clientes, firma contratos preliminares y coordina la entrega de productos y servicios, aunque los contratos finales son firmados digitalmente por la casa matriz ubicada en un país de baja tributación. Todos los ingresos por ventas en Colombia son declarados por la casa matriz en su país de residencia.",
        question: "Según la normativa de fiscalidad internacional vigente en 2025, ¿qué figura podría aplicar la DIAN para cuestionar esta estructura?",
        options: [
            "No puede cuestionarla, ya que la filial colombiana solo presta servicios auxiliares y los contratos son formalmente firmados por la casa matriz en el exterior.",
            "Puede aplicar el concepto de establecimiento permanente, argumentando que la filial colombiana constituye un agente dependiente que habitualmente ejerce poderes para concluir contratos en nombre de la empresa extranjera.",
            "Puede cuestionar la estructura únicamente si existe un convenio de doble imposición entre Colombia y el país de residencia de la casa matriz.",
            "Puede objetar la estructura solo si demuestra que los servicios de marketing y soporte técnico no son reales."
        ],
        correctAnswer: 1,
        explanation: "Según el artículo 20-1 del Estatuto Tributario, el Modelo de Convenio Tributario de la OCDE y las modificaciones implementadas a partir del Plan de Acción BEPS (Acción 7), vigentes en 2025, la DIAN puede aplicar el concepto de establecimiento permanente para cuestionar esta estructura. La situación descrita configura un establecimiento permanente por agente dependiente, ya que la filial colombiana, aunque formalmente solo presta servicios auxiliares, en la práctica ejerce habitualmente poderes para negociar y concluir contratos que son rutinariamente formalizados por la casa matriz sin modificaciones sustanciales. La Sentencia del Consejo de Estado 25000-23-37-000-2014-00146-01(22343) y la doctrina de la DIAN en el Concepto 100202208-0691 de 2022 han establecido que debe prevalecer la sustancia sobre la forma, y que las actividades que exceden el carácter preparatorio o auxiliar pueden configurar un establecimiento permanente. En consecuencia, la DIAN podría determinar que los ingresos atribuibles a las actividades realizadas en Colombia están sujetos a tributación en el país, independientemente de que los contratos sean formalmente firmados en el exterior."
    },
    {
        id: "evasion_elusion_009",
        category: "evasion_elusion",
        difficulty: "media",
        text: "Durante una inspección en un puerto marítimo, funcionarios de la DIAN encuentran un contenedor cuya declaración de importación indica que contiene "repuestos industriales" con un valor declarado de USD 50,000. Al realizar la verificación física, se encuentra que el contenedor contiene en realidad equipos electrónicos de alta gama cuyo valor aproximado es de USD 500,000.",
        question: "Según la normativa aduanera vigente en 2025, ¿qué tipo de infracción se configura en este caso y cuál es el procedimiento aplicable?",
        options: [
            "Una inconsistencia en la descripción de la mercancía que puede ser subsanada mediante una corrección a la declaración de importación, pagando los mayores tributos e intereses correspondientes.",
            "Una infracción administrativa por descripción errada de la mercancía, que conlleva una sanción pecuniaria pero permite la nacionalización de la mercancía previo pago de los tributos correctos.",
            "Una conducta de contrabando abierto por presentar una declaración de importación con información falsa sobre la naturaleza y valor de la mercancía, que implica la aprehensión de la mercancía y puede configurar un delito aduanero.",
            "Una discrepancia valorativa que debe resolverse mediante un proceso de valoración aduanera, sin consecuencias sancionatorias si el importador acepta el mayor valor determinado."
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el Decreto 1165 de 2019 (Estatuto Aduanero) y el artículo 319 del Código Penal, vigentes en 2025, la situación descrita configura una conducta de contrabando abierto. Según el artículo 295 del Estatuto Aduanero, presentar una declaración de importación con información falsa o incorrecta sobre la naturaleza, cantidad y valor de la mercancía constituye una causal de aprehensión. En este caso, la discrepancia no es un simple error o imprecisión, sino una declaración sustancialmente falsa tanto en la naturaleza del producto (repuestos industriales vs. equipos electrónicos) como en su valor (USD 50,000 vs. USD 500,000), lo que evidencia una intención de eludir el control aduanero y el pago correcto de tributos. El procedimiento aplicable incluye: 1) La aprehensión de la mercancía según el artículo 647 del Estatuto Aduanero; 2) El inicio del proceso de decomiso; 3) La evaluación de la procedencia de la acción penal por contrabando según el artículo 319 del Código Penal, que establece penas de prisión de 4 a 8 años y multas de hasta el 300% del valor de la mercancía cuando el valor supere los 50 salarios mínimos legales mensuales vigentes."
    },
    {
        id: "evasion_elusion_010",
        category: "evasion_elusion",
        difficulty: "baja",
        text: "Un contribuyente persona natural con ingresos anuales significativos ha registrado a su cónyuge, quien no desarrolla actividades económicas independientes, como propietario formal de varios de sus bienes de alto valor (inmuebles, vehículos de lujo, inversiones). El contribuyente argumenta que esta distribución patrimonial responde a decisiones familiares privadas.",
        question: "Según la normativa tributaria vigente en 2025, ¿cómo podría la DIAN cuestionar esta situación?",
        options: [
            "No puede cuestionarla, ya que las decisiones sobre la titularidad de los bienes dentro del matrimonio pertenecen al ámbito privado y están protegidas por la autonomía de la voluntad.",
            "Puede aplicar la figura de simulación tributaria, argumentando que existe una transferencia artificial de bienes sin sustancia económica real, con el propósito principal de reducir la base gravable del impuesto al patrimonio o evitar la aplicación de tarifas progresivas.",
            "Puede cuestionar la situación únicamente si se demuestra que los recursos para adquirir los bienes provienen de actividades ilícitas.",
            "Puede objetar la situación solo si el régimen matrimonial de los cónyuges es de separación de bienes."
        ],
        correctAnswer: 1,
        explanation: "Según los artículos 742 a 748 del Estatuto Tributario (sobre pruebas en materia tributaria), el artículo 869 (norma general anti-abuso) y la jurisprudencia vigente en 2025, la DIAN puede aplicar la figura de simulación tributaria para cuestionar esta situación. La distribución artificial de bienes entre cónyuges, cuando se demuestra que el verdadero propietario económico es quien genera los ingresos para su adquisición y disfrute, puede ser considerada una forma de simulación con propósitos tributarios. Esta práctica busca típicamente: 1) Reducir la base gravable del impuesto al patrimonio del contribuyente de mayores ingresos; 2) Evitar la aplicación de tarifas progresivas al fragmentar artificialmente el patrimonio; 3) Dificultar los procesos de fiscalización sobre la relación entre patrimonio e ingresos declarados. La Sentencia C-015 de 2018 de la Corte Constitucional y la doctrina de la DIAN en el Concepto 100202208-0691 de 2022 han establecido que la administración tributaria puede desconocer los efectos fiscales de actos o negocios que, aunque formalmente válidos en otras ramas del derecho, tengan como propósito principal la obtención de beneficios tributarios y carezcan de propósito de negocio o sustancia económica real."
    },
    {
        id: "evasion_elusion_011",
        category: "evasion_elusion",
        difficulty: "alta",
        text: "Una empresa colombiana del sector minero ha implementado la siguiente estructura: 1) Constituye una sociedad en un país con el que Colombia tiene convenio para evitar la doble imposición; 2) Transfiere a esta sociedad los derechos de explotación de una mina ubicada en Colombia; 3) La sociedad extranjera no tiene presencia física ni personal en el país del convenio, solo existe formalmente; 4) Esta sociedad otorga los derechos de explotación a la empresa colombiana a cambio de regalías significativas; 5) Las regalías se pagan con una retención reducida según el convenio de doble imposición.",
        question: "Según la normativa de fiscalidad internacional vigente en 2025, ¿qué figura podría aplicar la DIAN para cuestionar esta estructura?",
        options: [
            "No puede cuestionarla, ya que los convenios de doble imposición son tratados internacionales que prevalecen sobre la legislación interna.",
            "Puede aplicar la cláusula anti-abuso de tratados (PPT - Principal Purpose Test), argumentando que la estructura tiene como uno de sus principales propósitos obtener los beneficios del convenio en circunstancias contrarias al objeto y propósito de sus disposiciones.",
            "Puede cuestionar la estructura únicamente si demuestra que los documentos de constitución de la sociedad extranjera son falsos.",
            "Puede objetar la estructura solo si el país del convenio no tiene un sistema tributario reconocido internacionalmente."
        ],
        correctAnswer: 1,
        explanation: "Según el artículo 869 del Estatuto Tributario (norma general anti-abuso), las cláusulas anti-abuso incorporadas en los convenios para evitar la doble imposición suscritos por Colombia, y las disposiciones del Convenio Multilateral para Implementar Medidas Relacionadas con los Tratados Fiscales (MLI) de la OCDE, vigentes en 2025, la DIAN puede aplicar la cláusula anti-abuso de tratados (PPT - Principal Purpose Test) para cuestionar esta estructura. Esta cláusula permite denegar los beneficios de un convenio cuando sea razonable concluir que obtener tales beneficios fue uno de los principales propósitos de un acuerdo o transacción, a menos que se establezca que otorgar esos beneficios está de acuerdo con el objeto y propósito del convenio. La estructura descrita presenta características de treaty shopping (compra de tratados), donde se utiliza una entidad sin sustancia económica real (shell company) en un país con convenio favorable, con el propósito principal de acceder a tasas reducidas de retención. La jurisprudencia internacional y la posición de la OCDE en las Acciones 6 y 15 del Plan BEPS, adoptadas por Colombia, establecen que estas estructuras pueden ser desconocidas para efectos fiscales, aplicando el principio de sustancia sobre forma."
    },
    {
        id: "evasion_elusion_012",
        category: "evasion_elusion",
        difficulty: "media",
        text: "Durante una verificación aduanera en un aeropuerto internacional, funcionarios de la DIAN encuentran a un viajero que porta joyas y relojes de lujo por un valor aproximado de USD 30,000. El viajero no los declaró en el formulario de viajeros y, al ser cuestionado, afirma que son para uso personal y que desconocía la obligación de declararlos.",
        question: "Según la normativa aduanera vigente en 2025, ¿qué tipo de infracción se configura en este caso y cuál es el procedimiento aplicable?",
        options: [
            "No existe infracción si el viajero puede demostrar que las joyas y relojes son para uso personal, independientemente de su valor.",
            "Una infracción administrativa leve que puede ser subsanada mediante el pago voluntario de los tributos correspondientes más una sanción reducida.",
            "Una conducta de contrabando que implica la aprehensión de las mercancías no declaradas y puede configurar una infracción administrativa grave o un delito, dependiendo del valor de las mercancías.",
            "Una simple omisión formal en el diligenciamiento del formulario de viajeros, que puede ser corregida en el momento sin consecuencias sancionatorias."
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el Decreto 1165 de 2019 (Estatuto Aduanero), el artículo 319 del Código Penal y la Resolución 000046 de 2019 de la DIAN, vigentes en 2025, la situación descrita configura una conducta de contrabando. Según el artículo 300 del Estatuto Aduanero y la reglamentación sobre el régimen de viajeros, existe la obligación de declarar ante la autoridad aduanera las mercancías diferentes a efectos personales que se introduzcan al territorio aduanero nacional, especialmente aquellas que superan los montos establecidos para la franquicia de viajeros (USD 2,000 en 2025). Las joyas y relojes de lujo por un valor de USD 30,000 exceden claramente este monto y, por su naturaleza y cantidad, no pueden considerarse razonablemente como efectos personales. El procedimiento aplicable incluye: 1) La aprehensión de las mercancías según el artículo 647 del Estatuto Aduanero; 2) El inicio del proceso de decomiso; 3) La evaluación de la procedencia de la acción penal por contrabando según el artículo 319 del Código Penal, que establece penas de prisión de 4 a 8 años y multas de hasta el 300% del valor de la mercancía cuando el valor supere los 50 salarios mínimos legales mensuales vigentes. El desconocimiento de la norma no exime de su cumplimiento, según principio general del derecho recogido en el artículo 9 del Código Civil."
    },
    {
        id: "evasion_elusion_013",
        category: "evasion_elusion",
        difficulty: "baja",
        text: "Un comerciante ha registrado su negocio en el régimen simple de tributación, declarando ingresos anuales por debajo del umbral establecido para pertenecer a este régimen. Sin embargo, durante una visita de fiscalización, funcionarios de la DIAN encuentran evidencia de que el volumen real de operaciones es significativamente mayor al declarado.",
        question: "Según la normativa tributaria vigente en 2025, ¿qué consecuencias enfrenta este contribuyente?",
        options: [
            "Únicamente deberá corregir sus declaraciones y pagar la diferencia de impuestos con los intereses correspondientes, sin sanciones adicionales.",
            "Será excluido automáticamente del régimen simple y deberá tributar en el régimen ordinario, pero no enfrentará sanciones si corrige voluntariamente sus declaraciones.",
            "Enfrentará múltiples consecuencias: exclusión del régimen simple, liquidación de impuestos bajo el régimen ordinario, sanciones por inexactitud, posibles sanciones por no facturar o facturar con valores inferiores, y evaluación de la procedencia de denuncia penal por defraudación tributaria.",
            "Recibirá una amonestación y continuará en el régimen simple, pero bajo vigilancia especial durante los siguientes tres años."
        ],
        correctAnswer: 2,
        explanation: "Según los artículos 903 a 916 del Estatuto Tributario (régimen simple de tributación), el artículo 648 (sanción por inexactitud), el artículo 434A del Código Penal (defraudación tributaria) y la doctrina de la DIAN vigentes en 2025, el contribuyente enfrentará múltiples consecuencias: 1) Exclusión del régimen simple de tributación por incumplimiento de los requisitos de ingreso, según el artículo 914 del Estatuto Tributario; 2) Liquidación de impuestos bajo el régimen ordinario (renta, IVA, etc.) por los períodos correspondientes; 3) Sanción por inexactitud del 100% del mayor valor del impuesto a cargo determinado, según el artículo 648 del Estatuto Tributario; 4) Posibles sanciones adicionales por no facturar o facturar con valores inferiores, según los artículos 652 y 657 del Estatuto Tributario; 5) Evaluación de la procedencia de denuncia penal por defraudación tributaria si el valor de los impuestos omitidos supera los umbrales establecidos en el artículo 434A del Código Penal. La jurisprudencia del Consejo de Estado en Sentencia 25000-23-37-000-2013-00078-01(21212) de 2018 ha establecido que la omisión de ingresos constituye una conducta grave que afecta la determinación de los tributos y está sujeta a las máximas sanciones previstas en la legislación tributaria."
    },
    {
        id: "evasion_elusion_014",
        category: "evasion_elusion",
        difficulty: "alta",
        text: "Una empresa multinacional del sector farmacéutico ha estructurado sus operaciones en Colombia de la siguiente manera: 1) La casa matriz, ubicada en un país con convenio para evitar la doble imposición con Colombia, es propietaria de las patentes de los medicamentos; 2) Una filial manufacturera en Colombia produce los medicamentos bajo licencia; 3) La filial colombiana paga a la matriz regalías por el uso de las patentes (5% de las ventas) y servicios administrativos (3% de las ventas); 4) Adicionalmente, compra los principios activos a una empresa vinculada ubicada en un tercer país, a precios superiores a los del mercado; 5) Como resultado, la filial colombiana reporta márgenes de utilidad significativamente inferiores al promedio del sector.",
        question: "Según la normativa de fiscalidad internacional vigente en 2025, ¿qué herramientas puede utilizar la DIAN para fiscalizar esta estructura?",
        options: [
            "Solo puede verificar que existan contratos formales que respalden las operaciones, sin cuestionar los valores pactados entre las partes vinculadas.",
            "Puede aplicar exclusivamente las normas de subcapitalización para limitar la deducibilidad de los pagos a la casa matriz.",
            "Puede aplicar un enfoque integral utilizando el régimen de precios de transferencia para verificar que todas las operaciones entre vinculados se realicen a valores de mercado, las normas de subcapitalización, y las disposiciones sobre deducibilidad de pagos al exterior.",
            "Puede cuestionar la estructura únicamente si demuestra que las patentes no están realmente registradas a nombre de la casa matriz."
        ],
        correctAnswer: 2,
        explanation: "Según los artículos 260-1 a 260-11 del Estatuto Tributario (régimen de precios de transferencia), el artículo 118-1 (normas de subcapitalización), los artículos 121 a 124 (limitaciones a pagos al exterior) y las Acciones 8-10 del Plan BEPS de la OCDE adoptadas por Colombia, vigentes en 2025, la DIAN puede aplicar un enfoque integral para fiscalizar esta estructura: 1) Aplicar el régimen de precios de transferencia para verificar que las regalías por uso de patentes, los servicios administrativos y la compra de principios activos correspondan a precios de mercado entre partes independientes (principio de plena competencia); 2) Verificar que los servicios administrativos sean reales, estén debidamente documentados y generen beneficio económico o comercial para la filial colombiana; 3) Aplicar las limitaciones a la deducibilidad de pagos al exterior establecidas en los artículos 121 a 124 del Estatuto Tributario; 4) Analizar la estructura en su conjunto para determinar si existe una erosión artificial de la base gravable en Colombia. La jurisprudencia del Consejo de Estado en Sentencia 25000-23-37-000-2016-01656-01(24435) y la doctrina de la DIAN han establecido que las operaciones entre vinculados económicos están sujetas a un escrutinio especial para verificar que no se utilicen para transferir artificialmente utilidades a jurisdicciones con menor tributación."
    },
    {
        id: "evasion_elusion_015",
        category: "evasion_elusion",
        difficulty: "media",
        text: "Durante una verificación de operaciones de comercio exterior, funcionarios de la DIAN identifican que una empresa importadora ha clasificado sistemáticamente un producto químico bajo una subpartida arancelaria con arancel del 0%, cuando según sus características físico-químicas y uso debería clasificarse en una subpartida con arancel del 10%.",
        question: "Según la normativa aduanera vigente en 2025, ¿cómo se califica esta conducta y cuáles son sus implicaciones?",
        options: [
            "Una diferencia de criterio técnico sobre clasificación arancelaria, que debe resolverse mediante un proceso de consulta de clasificación sin implicaciones sancionatorias.",
            "Un error formal que puede ser corregido voluntariamente por el importador pagando los mayores tributos e intereses, sin sanciones adicionales.",
            "Una posible conducta de contrabando técnico por incorrecta clasificación arancelaria, que puede generar liquidación oficial de corrección, sanciones por inexactitud y evaluación de la procedencia de acciones penales según la cuantía y la intencionalidad.",
            "Una infracción administrativa leve que solo implica la reclasificación del producto para futuras importaciones."
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el Decreto 1165 de 2019 (Estatuto Aduanero), el artículo 319 del Código Penal y la jurisprudencia vigente en 2025, la clasificación sistemática de un producto en una subpartida arancelaria incorrecta que resulta en un menor pago de tributos aduaneros puede constituir una conducta de contrabando técnico. Esta conducta tiene las siguientes implicaciones: 1) La DIAN puede expedir liquidación oficial de corrección, determinando los mayores tributos dejados de pagar en los últimos tres años, según el artículo 298 del Estatuto Aduanero; 2) Procede la sanción por inexactitud equivalente al 100% de los tributos dejados de pagar, según el artículo 647 del Estatuto Aduanero; 3) Si se demuestra que la incorrecta clasificación fue intencional y sistemática, y el monto de los tributos eludidos supera los umbrales establecidos en el artículo 319 del Código Penal, podría configurarse el delito de contrabando, con penas de prisión de 4 a 8 años. La jurisprudencia del Consejo de Estado en Sentencia 25000-23-37-000-2014-00721-01(22133) ha establecido que la clasificación arancelaria incorrecta que resulta en un menor pago de tributos no puede considerarse un simple error cuando es sistemática y el importador es un profesional del comercio exterior que conoce o debe conocer las características de los productos que importa."
    },
    {
        id: "evasion_elusion_016",
        category: "evasion_elusion",
        difficulty: "baja",
        text: "Un contribuyente persona natural ha reportado en su declaración de renta ingresos por actividades profesionales significativamente inferiores a sus gastos personales y familiares evidenciados en el período. Al ser requerido por la DIAN, no puede justificar la diferencia entre sus ingresos declarados y su nivel de vida.",
        question: "Según la normativa tributaria vigente en 2025, ¿qué facultad puede ejercer la DIAN en este caso?",
        options: [
            "No puede cuestionar la declaración si está formalmente correcta, ya que los gastos personales pertenecen al ámbito privado del contribuyente.",
            "Puede solicitar explicaciones, pero debe aceptar cualquier justificación que proporcione el contribuyente sobre el origen de los recursos para sus gastos personales.",
            "Puede aplicar el método de comparación patrimonial o el de estimación de ingresos por índices de gastos para determinar la renta gravable por diferencia patrimonial injustificada o por gastos no justificados con ingresos declarados.",
            "Puede únicamente sugerir al contribuyente que corrija voluntariamente su declaración, sin facultades para determinar oficialmente un mayor impuesto."
        ],
        correctAnswer: 2,
        explanation: "Según los artículos 755 a 760 del Estatuto Tributario (métodos para determinar la renta líquida), vigentes en 2025, la DIAN puede aplicar el método de comparación patrimonial o el de estimación de ingresos por índices de gastos para determinar la renta gravable en casos donde exista una diferencia significativa entre los ingresos declarados y el nivel de vida evidenciado. El artículo 755 establece que "el impuesto sobre la renta y complementarios se podrá determinar a partir de una estimación de la renta que puede derivarse de los gastos efectuados por el contribuyente durante el respectivo año gravable". Asimismo, el artículo 236 establece que "cuando el contribuyente presente un incremento patrimonial y no pueda justificar el origen de los recursos que lo generaron, la DIAN podrá adicionar dicho valor como renta líquida gravable". La jurisprudencia del Consejo de Estado en Sentencia 25000-23-37-000-2015-00795-01(23546) ha confirmado la facultad de la administración tributaria para determinar la renta por el sistema de comparación patrimonial o por índices de gastos cuando existan indicios de inexactitud en la declaración presentada por el contribuyente."
    },
    {
        id: "evasion_elusion_017",
        category: "evasion_elusion",
        difficulty: "alta",
        text: "Una empresa colombiana ha implementado la siguiente estructura para la adquisición de un activo fijo de alto valor: 1) Constituye una sociedad en un país con el que Colombia tiene convenio para evitar la doble imposición; 2) Esta sociedad adquiere el activo y lo arrienda a la empresa colombiana bajo la figura de leasing operativo; 3) Los pagos por arrendamiento son deducibles en Colombia y están sujetos a una retención reducida según el convenio; 4) Al finalizar el contrato, la sociedad extranjera vende el activo a la empresa colombiana a un valor residual bajo.",
        question: "Según la normativa tributaria internacional vigente en 2025, ¿cómo podría la DIAN cuestionar esta estructura?",
        options: [
            "No puede cuestionarla, ya que el leasing operativo es una figura contractual legítima y los convenios de doble imposición deben respetarse en todos los casos.",
            "Puede cuestionar la estructura únicamente si demuestra que la sociedad extranjera no existe realmente.",
            "Puede aplicar la norma general anti-abuso y/o la cláusula anti-abuso de tratados, recalificando la operación como una compra financiada si determina que la estructura carece de sustancia económica y tiene como propósito principal obtener ventajas tributarias.",
            "Puede objetar la estructura solo si el país donde se constituyó la sociedad extranjera está en la lista de paraísos fiscales."
        ],
        correctAnswer: 2,
        explanation: "Según el artículo 869 del Estatuto Tributario (norma general anti-abuso), las cláusulas anti-abuso incorporadas en los convenios para evitar la doble imposición suscritos por Colombia, y las disposiciones del Convenio Multilateral para Implementar Medidas Relacionadas con los Tratados Fiscales (MLI) de la OCDE, vigentes en 2025, la DIAN puede aplicar la norma general anti-abuso y/o la cláusula anti-abuso de tratados para cuestionar esta estructura. La DIAN podría recalificar la operación como una compra financiada directa si determina que: 1) La estructura carece de sustancia económica real (la sociedad extranjera es una entidad instrumental sin presencia real en el país del convenio); 2) El propósito principal de la estructura es obtener ventajas tributarias (deducibilidad de los pagos de arrendamiento vs. depreciación, retención reducida vs. no deducibilidad de la depreciación de activos adquiridos en el exterior); 3) La operación, vista en su conjunto, es económicamente equivalente a una compra financiada. La Sentencia C-465 de 2019 de la Corte Constitucional y la doctrina de la DIAN en el Concepto 100202208-0691 de 2022 han establecido que la administración tributaria puede recalificar operaciones que, aunque formalmente válidas, tengan como propósito principal la obtención de beneficios tributarios y carezcan de propósito de negocio o sustancia económica real."
    },
    {
        id: "evasion_elusion_018",
        category: "evasion_elusion",
        difficulty: "media",
        text: "Durante una verificación aduanera en una zona primaria, funcionarios de la DIAN encuentran mercancías que, según la declaración de importación, provienen del país A (con el cual Colombia tiene un tratado de libre comercio que establece arancel 0%). Sin embargo, al revisar el certificado de origen y otras pruebas documentales, se determina que las mercancías realmente fueron producidas en el país B (sin acuerdo comercial con Colombia, con arancel aplicable del 15%).",
        question: "Según la normativa aduanera vigente en 2025, ¿qué tipo de infracción se configura en este caso y cuáles son sus implicaciones?",
        options: [
            "Una simple discrepancia documental que puede ser subsanada presentando un nuevo certificado de origen correcto.",
            "Una infracción administrativa por incorrecta declaración del origen, que implica el pago de los mayores tributos y una sanción pecuniaria, pero permite la nacionalización de la mercancía.",
            "Una conducta de fraude aduanero por falsa declaración de origen, que implica la aprehensión de la mercancía, la liquidación de los mayores tributos, sanciones administrativas y la posible configuración de un delito aduanero.",
            "Una controversia de origen que debe resolverse mediante un procedimiento de verificación con las autoridades del país exportador, sin consecuencias inmediatas."
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el Decreto 1165 de 2019 (Estatuto Aduanero), el artículo 319 del Código Penal y las disposiciones sobre origen de las mercancías vigentes en 2025, la situación descrita configura una conducta de fraude aduanero por falsa declaración de origen. Esta conducta tiene las siguientes implicaciones: 1) Procede la aprehensión de la mercancía según el artículo 647 del Estatuto Aduanero, por presentar documentos falsos o adulterados para soportar una operación de comercio exterior; 2) Se deben liquidar los mayores tributos dejados de pagar (15% de arancel en lugar de 0%); 3) Aplica la sanción por inexactitud equivalente al 100% de los tributos dejados de pagar, según el artículo 647 del Estatuto Aduanero; 4) Si el monto de los tributos eludidos supera los umbrales establecidos en el artículo 319 del Código Penal, podría configurarse el delito de contrabando por fraude aduanero. La jurisprudencia del Consejo de Estado en Sentencia 25000-23-37-000-2014-00721-01(22133) ha establecido que la falsa declaración de origen para beneficiarse indebidamente de preferencias arancelarias constituye una conducta grave que afecta la confianza en los sistemas de preferencias comerciales y está sujeta a las máximas sanciones previstas en la legislación aduanera."
    },
    {
        id: "evasion_elusion_019",
        category: "evasion_elusion",
        difficulty: "baja",
        text: "Un contribuyente persona jurídica ha registrado como gastos deducibles en su declaración de renta pagos por servicios de consultoría prestados por una persona natural. Al ser requeridos los soportes durante una auditoría, presenta contratos y facturas, pero no puede demostrar la prestación efectiva de los servicios ni su relación con la actividad productora de renta.",
        question: "Según la normativa tributaria vigente en 2025, ¿cuál es la consecuencia de esta situación?",
        options: [
            "Los gastos son plenamente deducibles si cuentan con contratos y facturas formalmente correctos, independientemente de la demostración de la prestación efectiva del servicio.",
            "Los gastos son parcialmente deducibles, aplicando una limitación porcentual establecida para servicios de consultoría.",
            "Los gastos no son deducibles por incumplir el requisito de causalidad y la obligación de conservar pruebas que demuestren la prestación efectiva del servicio y su relación con la actividad productora de renta.",
            "Los gastos son deducibles pero deben reclasificarse como otro tipo de erogación en la declaración de renta."
        ],
        correctAnswer: 2,
        explanation: "Según los artículos 107, 771-2 y 771-5 del Estatuto Tributario, vigentes en 2025, para que un gasto sea deducible debe cumplir con los requisitos de causalidad, necesidad y proporcionalidad con la actividad productora de renta, y estar debidamente soportado. El artículo 107 establece que "son deducibles las expensas realizadas durante el año gravable en el desarrollo de cualquier actividad productora de renta, siempre que tengan relación de causalidad con las actividades productoras de renta y que sean necesarias y proporcionadas de acuerdo con cada actividad". El artículo 771-2 exige que los costos y deducciones estén respaldados por facturas o documentos equivalentes, y el artículo 771-5 establece requisitos adicionales para la deducibilidad de pagos. La jurisprudencia del Consejo de Estado en Sentencia 25000-23-37-000-2015-00795-01(23546) ha establecido que no basta con presentar facturas y contratos formalmente correctos, sino que el contribuyente debe conservar y aportar, cuando la administración tributaria lo exija, las pruebas que demuestren la prestación efectiva del servicio y su relación con la actividad productora de renta. En consecuencia, si el contribuyente no puede demostrar la prestación efectiva de los servicios de consultoría ni su relación con la actividad productora de renta, estos gastos no son deducibles y la DIAN puede rechazarlos mediante una liquidación oficial de revisión, con la correspondiente sanción por inexactitud."
    },
    {
        id: "evasion_elusion_020",
        category: "evasion_elusion",
        difficulty: "alta",
        text: "Una empresa multinacional del sector de comercio electrónico opera en Colombia de la siguiente manera: 1) No tiene presencia física ni sociedad constituida en Colombia; 2) Su plataforma digital permite que vendedores colombianos ofrezcan productos a compradores colombianos; 3) Cobra una comisión por cada venta realizada; 4) Los pagos son procesados por una entidad financiera internacional y transferidos a una cuenta en el exterior; 5) No declara ni paga impuestos en Colombia por estas comisiones.",
        question: "Según la normativa tributaria sobre economía digital vigente en 2025, ¿qué posición podría adoptar la DIAN frente a esta situación?",
        options: [
            "No puede exigir el pago de impuestos ya que la empresa no tiene presencia física en Colombia y los servicios se prestan desde el exterior.",
            "Puede exigir únicamente el cumplimiento de obligaciones formales de registro, sin imposición de tributos sustanciales.",
            "Puede determinar que la empresa tiene un establecimiento permanente virtual en Colombia y/o que sus ingresos constituyen renta de fuente nacional sujeta a tributación en el país, exigiendo el cumplimiento de obligaciones formales y sustanciales.",
            "Puede imponer sanciones a los usuarios colombianos de la plataforma, pero no a la empresa extranjera."
        ],
        correctAnswer: 2,
        explanation: "Según los artículos 20-1 (establecimiento permanente), 24 (ingresos de fuente nacional) y 408 (tarifas para rentas de capital y de trabajo) del Estatuto Tributario, la Ley 2010 de 2019, y las disposiciones sobre economía digital implementadas a partir de las recomendaciones de la OCDE (Acción 1 del Plan BEPS), vigentes en 2025, la DIAN puede determinar que la empresa tiene un establecimiento permanente virtual en Colombia y/o que sus ingresos constituyen renta de fuente nacional sujeta a tributación en el país. La normativa vigente en 2025 ha ampliado el concepto de establecimiento permanente para incluir la presencia económica significativa a través de plataformas digitales que interactúan sistemáticamente con usuarios en el territorio nacional. Adicionalmente, el artículo 24 del Estatuto Tributario considera como ingresos de fuente nacional los provenientes de la prestación de servicios dentro del territorio colombiano, incluyendo los servicios digitales o electrónicos cuando estos se utilizan económicamente en el país. La jurisprudencia y la doctrina de la DIAN han establecido que las comisiones cobradas por facilitar transacciones entre residentes colombianos, a través de una plataforma digital, constituyen ingresos de fuente nacional sujetos a tributación en Colombia, independientemente de que el pago se procese en el exterior. En consecuencia, la empresa debe cumplir con obligaciones formales (registro, declaración) y sustanciales (pago de impuestos) en Colombia."
    }
];