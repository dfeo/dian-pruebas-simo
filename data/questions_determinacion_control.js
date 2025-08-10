// Preguntas sobre Determinación y Control Tributario
const questions_determinacion_control = [
    {
        id: "determinacion_001",
        category: "determinacion_control",
        difficulty: "baja",
        text: "Un contribuyente persona natural residente en Colombia ha recibido ingresos por concepto de salarios, honorarios y arrendamientos durante el año gravable.",
        question: "¿Cómo debe clasificar estos ingresos para efectos de la determinación del impuesto sobre la renta según el sistema cedular?",
        options: [
            "Todos los ingresos se suman en una sola cédula general",
            "Salarios en la cédula de rentas de trabajo, honorarios y arrendamientos en la cédula de rentas no laborales",
            "Salarios en la cédula de rentas de trabajo, honorarios en la cédula de rentas no laborales y arrendamientos en la cédula de rentas de capital",
            "Salarios y honorarios en la cédula de rentas de trabajo, arrendamientos en la cédula de rentas de capital"
        ],
        correctAnswer: 3,
        explanation: "De acuerdo con el artículo 330 del Estatuto Tributario, modificado por la Ley 2010 de 2019, la determinación del impuesto sobre la renta de las personas naturales se realiza mediante el sistema cedular, clasificando las rentas en tres cédulas: 1) Rentas de trabajo, 2) Rentas de capital, y 3) Rentas no laborales. Según el artículo 335, las rentas de trabajo incluyen los ingresos obtenidos por personas naturales por concepto de salarios, comisiones, prestaciones sociales, viáticos, honorarios, emolumentos eclesiásticos, y en general, las compensaciones por servicios personales. Por lo tanto, tanto los salarios como los honorarios se clasifican en la cédula de rentas de trabajo. Por su parte, según el artículo 338, las rentas de capital incluyen los ingresos obtenidos por concepto de intereses, rendimientos financieros, arrendamientos, regalías y explotación de la propiedad intelectual. Por lo tanto, los ingresos por arrendamientos se clasifican en la cédula de rentas de capital."
    },
    {
        id: "determinacion_002",
        category: "determinacion_control",
        difficulty: "media",
        text: "Una empresa colombiana ha realizado una inversión en la adquisición de maquinaria para la producción de bienes destinados a la exportación.",
        question: "¿Qué beneficio tributario puede aplicar esta empresa en relación con el IVA pagado en la adquisición de la maquinaria?",
        options: [
            "Exención total del IVA en la adquisición de la maquinaria",
            "Devolución bimestral del IVA pagado en la adquisición de la maquinaria",
            "Descuento tributario en el impuesto sobre la renta por el IVA pagado en la adquisición de bienes de capital",
            "Reducción de la tarifa del IVA al 5% en la adquisición de la maquinaria"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 258-1 del Estatuto Tributario, adicionado por la Ley 1943 de 2018 y mantenido por la Ley 2010 de 2019, los responsables del impuesto sobre las ventas (IVA) pueden descontar del impuesto sobre la renta a cargo, correspondiente al año en que se efectúe su pago, o en cualquiera de los periodos gravables siguientes, el IVA pagado por la adquisición, construcción o formación e importación de bienes de capital, incluyendo el asociado a los servicios necesarios para ponerlos en condiciones de utilización. Este descuento tributario no puede ser tratado como costo, gasto o deducción en el impuesto sobre la renta. Para las empresas que adquieren maquinaria para la producción de bienes, este beneficio representa un importante alivio financiero, ya que permite recuperar el IVA pagado en la adquisición de bienes de capital directamente contra el impuesto sobre la renta, en lugar de tener que esperar a recuperarlo a través de la depreciación del activo."
    },
    {
        id: "determinacion_003",
        category: "determinacion_control",
        difficulty: "alta",
        text: "Una empresa colombiana ha realizado inversiones en proyectos de investigación, desarrollo tecnológico e innovación durante el año gravable.",
        question: "¿Qué beneficio tributario puede aplicar esta empresa en relación con estas inversiones según el Estatuto Tributario?",
        options: [
            "Deducción del 100% del valor invertido y descuento tributario del 25% adicional",
            "Deducción del 100% del valor invertido y descuento tributario del 50% adicional, sin que exceda el 25% del impuesto a cargo",
            "Exención total del impuesto sobre la renta por 5 años",
            "Reducción de la tarifa del impuesto sobre la renta al 15% por 10 años"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el artículo 158-1 del Estatuto Tributario, modificado por la Ley 2010 de 2019, las inversiones que realicen las empresas en proyectos calificados como de investigación, desarrollo tecnológico e innovación, serán deducibles del impuesto sobre la renta en un 100% del valor invertido. Adicionalmente, según el artículo 256 del mismo Estatuto, las personas que realicen estas inversiones tendrán derecho a descontar de su impuesto sobre la renta a cargo el 25% del valor invertido en dichos proyectos en el período gravable en que se realizó la inversión. Este porcentaje fue modificado al 50% por el artículo 171 de la Ley 1955 de 2019 (Plan Nacional de Desarrollo 2018-2022). Sin embargo, este descuento no puede exceder el 25% del impuesto sobre la renta a cargo del contribuyente en el respectivo año gravable. El exceso no descontado podrá tomarse dentro de los cuatro períodos gravables siguientes. Para acceder a estos beneficios, los proyectos deben ser calificados como de investigación, desarrollo tecnológico o innovación por el Consejo Nacional de Beneficios Tributarios en Ciencia, Tecnología e Innovación (CNBT)."
    },
    {
        id: "determinacion_004",
        category: "determinacion_control",
        difficulty: "media",
        text: "Una empresa colombiana ha contratado personal nuevo que cumple con las características de ser jóvenes entre 18 y 28 años de edad.",
        question: "¿Qué beneficio tributario puede aplicar esta empresa en relación con los aportes al sistema de seguridad social por estos empleados?",
        options: [
            "Exención total de los aportes al sistema de seguridad social",
            "Deducción del 120% de los salarios pagados a estos empleados",
            "Descuento tributario del 100% de los aportes al SENA, ICBF y cajas de compensación familiar",
            "Reducción de la tarifa de los aportes al sistema de seguridad social al 50%"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 108-4 del Estatuto Tributario, adicionado por la Ley 2010 de 2019, los contribuyentes que estén obligados a presentar declaración de renta y complementarios y que realicen pagos o abonos en cuenta por concepto de salarios a empleados menores de 28 años, y que sea su primer empleo, podrán deducir el 120% de los pagos realizados por concepto de salario. Para acceder a esta deducción, el empleador debe incrementar el número de empleados y el valor total de la nómina con relación al año gravable inmediatamente anterior. Adicionalmente, según el artículo 114-1 del mismo Estatuto, están exoneradas del pago de los aportes parafiscales a favor del SENA, ICBF y las cotizaciones al Régimen Contributivo de Salud, las personas jurídicas y asimiladas contribuyentes del impuesto sobre la renta y complementarios, por sus trabajadores que devenguen, individualmente considerados, menos de 10 salarios mínimos mensuales legales vigentes. Esta exoneración no aplica para contribuyentes que no sean clasificados como grandes contribuyentes y que tengan trabajadores que devenguen más de 10 salarios mínimos."
    },
    {
        id: "determinacion_005",
        category: "determinacion_control",
        difficulty: "baja",
        text: "Un contribuyente persona natural ha realizado donaciones a entidades sin ánimo de lucro pertenecientes al régimen tributario especial durante el año gravable.",
        question: "¿Qué tratamiento tributario tienen estas donaciones para el contribuyente según el Estatuto Tributario?",
        options: [
            "No tienen ningún beneficio tributario",
            "Son deducibles en un 100% del impuesto sobre la renta",
            "Son deducibles hasta el 30% de la renta líquida del contribuyente y generan un descuento tributario del 25% del valor donado",
            "Generan un descuento tributario del 50% del valor donado"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 125 del Estatuto Tributario, los contribuyentes del impuesto sobre la renta que realicen donaciones a entidades sin ánimo de lucro pertenecientes al régimen tributario especial, tienen derecho a deducir de su renta el valor de las donaciones efectuadas durante el año o período gravable. Esta deducción no puede exceder el 30% de la renta líquida del contribuyente, determinada antes de restar el valor de la donación. Adicionalmente, según el artículo 257 del mismo Estatuto, modificado por la Ley 2010 de 2019, las donaciones realizadas a entidades sin ánimo de lucro pertenecientes al régimen tributario especial dan derecho a un descuento tributario equivalente al 25% del valor donado en el año o período gravable. Este descuento no puede exceder el 25% del impuesto sobre la renta a cargo del contribuyente en el respectivo año gravable. El exceso no descontado podrá tomarse dentro de los cuatro períodos gravables siguientes. Para acceder a estos beneficios, la entidad beneficiaria de la donación debe estar calificada en el régimen tributario especial y cumplir con los requisitos establecidos en los artículos 19 y 356-1 a 356-3 del Estatuto Tributario."
    },
    {
        id: "determinacion_006",
        category: "determinacion_control",
        difficulty: "alta",
        text: "Una empresa colombiana ha realizado inversiones en el sector hotelero, específicamente en la construcción de nuevos hoteles en municipios con menos de 200,000 habitantes.",
        question: "¿Qué beneficio tributario puede aplicar esta empresa en relación con estas inversiones según el Estatuto Tributario?",
        options: [
            "Exención total del impuesto sobre la renta por 20 años",
            "Deducción del 200% del valor de la inversión",
            "Tarifa del impuesto sobre la renta del 9% por un término de 20 años",
            "Descuento tributario del 50% del valor de la inversión"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 240 del Estatuto Tributario, modificado por la Ley 2010 de 2019, las rentas provenientes de servicios hoteleros prestados en nuevos hoteles que se construyan en municipios de hasta 200,000 habitantes, dentro de los 10 años siguientes a la entrada en vigencia de la ley, estarán gravadas a la tarifa del 9% por un término de 20 años. Este beneficio también aplica para los servicios hoteleros prestados en hoteles que se remodelen y/o amplíen en municipios de hasta 200,000 habitantes, dentro de los 10 años siguientes a la entrada en vigencia de la ley, por un término de 20 años. Para acceder a este beneficio, el contribuyente debe cumplir con los requisitos establecidos en el reglamento, incluyendo la generación de empleo y la inversión mínima. Este incentivo busca promover el desarrollo turístico en municipios pequeños y medianos, generando empleo y dinamizando la economía local."
    },
    {
        id: "determinacion_007",
        category: "determinacion_control",
        difficulty: "media",
        text: "Una empresa colombiana ha realizado inversiones en activos fijos reales productivos durante el año gravable.",
        question: "¿Qué tratamiento tributario tienen estas inversiones para efectos de la determinación del impuesto sobre la renta?",
        options: [
            "Generan un descuento tributario del 30% del valor de la inversión",
            "Son deducibles en un 200% del valor de la inversión",
            "Pueden depreciarse aceleradamente en un período de 2 años",
            "Pueden depreciarse utilizando el método de línea recta o cualquier otro método de reconocido valor técnico"
        ],
        correctAnswer: 3,
        explanation: "De acuerdo con el artículo 128 del Estatuto Tributario, en concordancia con el artículo 134, las inversiones en activos fijos reales productivos son deducibles a través de la depreciación. La depreciación es la disminución del valor de los activos fijos por el desgaste o deterioro normal que sufren por su uso o por la acción del tiempo. Para efectos fiscales, los contribuyentes pueden utilizar el método de línea recta o cualquier otro método de reconocido valor técnico, como el método de reducción de saldos o el método de unidades de producción. La vida útil de los activos depreciables se establece de acuerdo con la realidad económica de cada bien, y los porcentajes de depreciación anual varían según el tipo de activo. Es importante destacar que, según el artículo 137 del mismo Estatuto, la vida útil de los activos fijos depreciables adquiridos a partir del 1 de enero de 2017 será la establecida para efectos contables, excepto para algunos activos específicos como edificaciones (45 años), maquinaria y equipo (10 años), muebles y enseres (10 años), vehículos (5 años) y equipos de cómputo (5 años)."
    },
    {
        id: "determinacion_008",
        category: "determinacion_control",
        difficulty: "baja",
        text: "Un contribuyente persona natural ha realizado aportes voluntarios a fondos de pensiones y a cuentas AFC (Ahorro para el Fomento de la Construcción) durante el año gravable.",
        question: "¿Qué tratamiento tributario tienen estos aportes para efectos de la determinación del impuesto sobre la renta?",
        options: [
            "No tienen ningún beneficio tributario",
            "Son ingresos no constitutivos de renta ni ganancia ocasional hasta el 30% del ingreso laboral o tributario del año y hasta un límite de 3,800 UVT anuales",
            "Son deducibles en un 100% sin límite alguno",
            "Generan un descuento tributario del 25% del valor aportado"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el artículo 126-1 del Estatuto Tributario, los aportes voluntarios que realice el trabajador, el empleador, o los aportes del partícipe independiente a los fondos de pensiones voluntarias y obligatorias, administrados por las entidades vigiladas por la Superintendencia Financiera de Colombia, no harán parte de la base para aplicar la retención en la fuente y serán considerados como un ingreso no constitutivo de renta ni ganancia ocasional, hasta una suma que adicionada al valor de los aportes a cuentas AFC (Ahorro para el Fomento de la Construcción) de que trata el artículo 126-4 del mismo Estatuto, no exceda del 30% del ingreso laboral o ingreso tributario del año, según el caso, y hasta un monto máximo de 3,800 UVT por año. Los retiros de estos aportes solo mantienen este tratamiento cuando se destinen a la adquisición de vivienda (financiada o no por entidades sujetas a la inspección y vigilancia de la Superintendencia Financiera), o cuando hayan permanecido en los fondos por un período mínimo de 10 años, o cuando se cumplan los requisitos para acceder a la pensión de vejez o jubilación."
    },
    {
        id: "determinacion_009",
        category: "determinacion_control",
        difficulty: "alta",
        text: "Una empresa colombiana ha realizado operaciones con vinculados económicos del exterior durante el año gravable, y está obligada a presentar la documentación comprobatoria de precios de transferencia.",
        question: "¿Cuál es el plazo para presentar la documentación comprobatoria de precios de transferencia según el Estatuto Tributario?",
        options: [
            "Dentro de los 3 meses siguientes al vencimiento del plazo para presentar la declaración informativa",
            "Simultáneamente con la declaración informativa",
            "Dentro de los 6 meses siguientes al vencimiento del plazo para presentar la declaración de renta",
            "Dentro de los 12 meses siguientes al cierre del año fiscal"
        ],
        correctAnswer: 0,
        explanation: "De acuerdo con el artículo 260-5 del Estatuto Tributario, la documentación comprobatoria de precios de transferencia (Master File y Local File) debe presentarse dentro de los plazos y condiciones que establezca el Gobierno Nacional. Según el Decreto 2345 de 2019, que modificó el Decreto 1625 de 2016 (Decreto Único Reglamentario en Materia Tributaria), el plazo para presentar la documentación comprobatoria es dentro de los tres (3) meses siguientes al vencimiento del plazo para presentar la declaración informativa de precios de transferencia. La documentación comprobatoria comprende: 1) Un informe maestro (Master File) que contenga información global relevante del grupo multinacional; y 2) Un informe local (Local File) que contenga información relativa a cada tipo de operación realizada por el contribuyente, en la que demuestren la correcta aplicación de las normas del régimen de precios de transferencia. Es importante destacar que la obligación de presentar la documentación comprobatoria aplica para los contribuyentes que realicen operaciones con vinculados económicos del exterior y cuyo patrimonio bruto en el último día del año o período gravable sea igual o superior a 100,000 UVT o cuyos ingresos brutos del respectivo año sean iguales o superiores a 61,000 UVT."
    },
    {
        id: "determinacion_010",
        category: "determinacion_control",
        difficulty: "media",
        text: "Una empresa colombiana ha realizado pagos a personas naturales por concepto de servicios profesionales durante el año gravable.",
        question: "¿Cuál es la tarifa de retención en la fuente aplicable a estos pagos según el Estatuto Tributario?",
        options: [
            "4% sobre el valor total del pago",
            "11% sobre el valor total del pago",
            "10% sobre el 80% del valor total del pago",
            "20% sobre el valor total del pago"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 392 del Estatuto Tributario, en concordancia con el artículo 1.2.4.3.1 del Decreto 1625 de 2016 (Decreto Único Reglamentario en Materia Tributaria), la tarifa de retención en la fuente aplicable a los pagos o abonos en cuenta por concepto de honorarios y comisiones, cuando el beneficiario del pago sea una persona natural, es del 10% sobre el 80% del valor total del pago. Esta retención se practica independientemente de que el beneficiario del pago sea declarante o no declarante del impuesto sobre la renta. Es importante destacar que, según el artículo 1.2.4.3.1 del Decreto 1625 de 2016, cuando el beneficiario del pago sea una persona jurídica o asimilada, la tarifa de retención es del 11% sobre el valor total del pago. Adicionalmente, cuando el pago o abono en cuenta corresponda a contratos de consultoría en ingeniería de proyectos de infraestructura y edificaciones, la tarifa de retención es del 6% sobre el valor total del pago, tanto para personas naturales como para personas jurídicas."
    },
    {
        id: "determinacion_011",
        category: "determinacion_control",
        difficulty: "baja",
        text: "Un contribuyente persona natural ha realizado pagos por concepto de intereses de vivienda y salud durante el año gravable.",
        question: "¿Qué tratamiento tributario tienen estos pagos para efectos de la determinación del impuesto sobre la renta?",
        options: [
            "No tienen ningún beneficio tributario",
            "Son deducibles en un 100% sin límite alguno",
            "Los intereses de vivienda generan un descuento tributario del 40% del valor pagado, y los pagos de salud son deducibles en un 100%",
            "Los intereses de vivienda generan un descuento tributario del 40% del valor pagado, y los pagos de salud son deducibles como renta exenta hasta un límite del 40% de la renta líquida"
        ],
        correctAnswer: 3,
        explanation: "De acuerdo con el artículo 119 del Estatuto Tributario, los intereses pagados por préstamos para adquisición de vivienda del contribuyente generan un descuento tributario equivalente al 40% del valor de los intereses pagados en el respectivo año gravable, sin que exceda anualmente de 1,200 UVT (Unidades de Valor Tributario). Para tener derecho a este descuento, el préstamo debe estar garantizado con hipoteca y el acreedor debe ser una entidad vigilada por la Superintendencia Financiera de Colombia. Por su parte, según el artículo 387 del mismo Estatuto, los pagos por salud realizados por el contribuyente para sí mismo, su cónyuge, sus hijos o dependientes, son deducibles como renta exenta hasta un límite del 40% de la renta líquida, sin que exceda anualmente de 5,040 UVT. Estos pagos incluyen los realizados por contratos de prestación de servicios a empresas de medicina prepagada o seguros de salud, y los pagos por seguros de salud."
    },
    {
        id: "determinacion_012",
        category: "determinacion_control",
        difficulty: "alta",
        text: "Una empresa colombiana ha realizado operaciones de reorganización empresarial (fusiones y escisiones) durante el año gravable.",
        question: "¿Cuál es el régimen tributario aplicable a estas operaciones según el Estatuto Tributario?",
        options: [
            "Todas las fusiones y escisiones están gravadas con el impuesto sobre la renta",
            "Todas las fusiones y escisiones están exentas del impuesto sobre la renta",
            "Las fusiones y escisiones pueden acogerse al régimen de neutralidad fiscal si cumplen con los requisitos establecidos en la ley",
            "Las fusiones y escisiones solo están exentas si se realizan entre empresas del mismo grupo empresarial"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con los artículos 319 a 319-9 del Estatuto Tributario, las fusiones y escisiones pueden acogerse al régimen de neutralidad fiscal si cumplen con los requisitos establecidos en la ley. Este régimen implica que estas operaciones no se consideran enajenaciones para efectos fiscales y, por lo tanto, no generan ingreso gravable ni pérdida deducible para las entidades participantes ni para sus accionistas. Para acogerse a este régimen, las fusiones y escisiones deben cumplir, entre otros, los siguientes requisitos: 1) Las entidades participantes deben ser residentes fiscales en Colombia; 2) Los activos y pasivos transferidos deben conservar el mismo costo fiscal que tenían antes de la operación; 3) Las acciones o participaciones recibidas por los accionistas de las entidades fusionadas o escindidas deben conservar el mismo costo fiscal que tenían las acciones o participaciones entregadas; 4) La operación debe tener propósitos empresariales y económicos reales, y no puede tener como propósito principal el ahorro tributario; y 5) La operación debe ser informada a la DIAN en los términos que establezca el reglamento. Si la operación no cumple con estos requisitos, se considera una enajenación para efectos fiscales y genera ingreso gravable o pérdida deducible según corresponda."
    },
    {
        id: "determinacion_013",
        category: "determinacion_control",
        difficulty: "media",
        text: "Una empresa colombiana ha realizado pagos a proveedores del exterior por concepto de servicios técnicos prestados en Colombia.",
        question: "¿Cuál es el tratamiento tributario de estos pagos para efectos del impuesto sobre la renta y complementarios?",
        options: [
            "Estos pagos no están sujetos a retención en la fuente en Colombia",
            "Estos pagos están sujetos a retención en la fuente a la tarifa del 15% sobre el valor total del pago",
            "Estos pagos están sujetos a retención en la fuente a la tarifa del 20% sobre el valor total del pago",
            "Estos pagos están sujetos a retención en la fuente a la tarifa del 33% sobre el valor total del pago"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 408 del Estatuto Tributario, los pagos o abonos en cuenta por concepto de consultorías, servicios técnicos y de asistencia técnica, prestados por personas no residentes o no domiciliadas en Colombia, están sujetos a retención en la fuente a la tarifa del 20% sobre el valor total del pago o abono en cuenta. Esta retención es aplicable independientemente de que los servicios se presten en Colombia o desde el exterior. Es importante destacar que, según el mismo artículo, los pagos o abonos en cuenta por concepto de rendimientos financieros, realizados a personas no residentes o no domiciliadas en el país, están sujetos a retención en la fuente a la tarifa del 15% sobre el valor total del pago o abono en cuenta. Por su parte, los pagos o abonos en cuenta por concepto de administración o dirección están sujetos a retención en la fuente a la tarifa del 33% sobre el valor total del pago o abono en cuenta. Estas retenciones son a título de impuesto sobre la renta y constituyen el impuesto final para el beneficiario del pago, salvo que exista un convenio para evitar la doble imposición que establezca una tarifa diferente."
    },
    {
        id: "determinacion_014",
        category: "determinacion_control",
        difficulty: "baja",
        text: "Un contribuyente persona natural ha realizado aportes obligatorios al sistema general de seguridad social en salud durante el año gravable.",
        question: "¿Qué tratamiento tributario tienen estos aportes para efectos de la determinación del impuesto sobre la renta?",
        options: [
            "No tienen ningún beneficio tributario",
            "Son deducibles en un 100% sin límite alguno",
            "Son ingresos no constitutivos de renta ni ganancia ocasional",
            "Generan un descuento tributario del 25% del valor aportado"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 56 del Estatuto Tributario, los aportes obligatorios que efectúen los trabajadores, empleadores y afiliados al Sistema General de Seguridad Social en Salud no harán parte de la base para aplicar la retención en la fuente por salarios, y serán considerados como un ingreso no constitutivo de renta ni de ganancia ocasional. Este tratamiento tributario busca incentivar la formalización laboral y la afiliación al sistema de seguridad social, al no gravar con impuesto sobre la renta los recursos destinados a la protección social de los trabajadores. Es importante destacar que este beneficio aplica únicamente para los aportes obligatorios, no para los aportes voluntarios que pueda realizar el contribuyente. Adicionalmente, según el artículo 387 del mismo Estatuto, los pagos por salud realizados por el contribuyente para sí mismo, su cónyuge, sus hijos o dependientes, que no tengan el carácter de aportes obligatorios, son deducibles como renta exenta hasta un límite del 40% de la renta líquida, sin que exceda anualmente de 5,040 UVT."
    },
    {
        id: "determinacion_015",
        category: "determinacion_control",
        difficulty: "alta",
        text: "Una empresa colombiana ha realizado pagos a una entidad ubicada en un paraíso fiscal por concepto de servicios administrativos.",
        question: "¿Cuál es el tratamiento tributario de estos pagos para efectos de la determinación del impuesto sobre la renta?",
        options: [
            "Estos pagos son deducibles en su totalidad sin requisitos adicionales",
            "Estos pagos no son deducibles bajo ninguna circunstancia",
            "Estos pagos son deducibles siempre que correspondan a operaciones reales, estén sujetos a retención en la fuente y se cumpla con el régimen de precios de transferencia",
            "Estos pagos son deducibles hasta un límite del 50% del valor de la operación"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 124-2 del Estatuto Tributario, los pagos o abonos en cuenta a personas, sociedades, entidades o empresas ubicadas en jurisdicciones no cooperantes, de baja o nula imposición o a regímenes tributarios preferenciales (paraísos fiscales) solo son deducibles en el impuesto sobre la renta si cumplen con los siguientes requisitos: 1) Que el gasto corresponda a una operación real, es decir, que efectivamente se haya realizado la transacción que da origen al pago; 2) Que el pago constituya ingreso gravable para su beneficiario; 3) Que el pago esté sujeto a retención en la fuente por concepto de impuesto sobre la renta, cuando el beneficiario del pago sea una persona natural; y 4) Que se cumpla con las obligaciones de documentación, información y comparabilidad establecidas en el régimen de precios de transferencia, independientemente de que el contribuyente esté o no sometido a dicho régimen. Adicionalmente, según el parágrafo 2 del artículo 260-7, estos pagos están sometidos a un régimen de retención en la fuente a título de impuesto sobre la renta a la tarifa del 33%."
    },
    {
        id: "determinacion_016",
        category: "determinacion_control",
        difficulty: "media",
        text: "Una empresa colombiana ha realizado pagos a trabajadores por concepto de salarios durante el año gravable.",
        question: "¿Cuál es el tratamiento tributario de los pagos por concepto de cesantías para efectos de la determinación del impuesto sobre la renta del empleador?",
        options: [
            "No son deducibles bajo ninguna circunstancia",
            "Son deducibles en el año en que se pagan al trabajador",
            "Son deducibles en el año en que se consolida la obligación, siempre que cumplan los requisitos establecidos en la ley",
            "Son deducibles en el año en que se consignan al fondo de cesantías"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 109 del Estatuto Tributario, son deducibles las cesantías pagadas durante el año o período gravable, siempre y cuando cumplan los siguientes requisitos: 1) Que el contribuyente no haya solicitado la deducción por el mismo concepto en años anteriores; 2) Que el contribuyente esté obligado a pagar la cesantía de conformidad con las normas vigentes sobre la materia; y 3) Que se haya causado la obligación de pagarla. Según el artículo 110 del mismo Estatuto, los contribuyentes que soliciten deducciones por concepto de salarios deben demostrar que están a paz y salvo por concepto de aportes al Sistema de Seguridad Social Integral, aportes parafiscales y cumplimiento de las obligaciones laborales. Es importante destacar que, según el artículo 1.2.1.18.60 del Decreto 1625 de 2016 (Decreto Único Reglamentario en Materia Tributaria), para efectos de la deducción por concepto de cesantías, se entiende que estas se causan a medida que el trabajador va prestando sus servicios, independientemente de que su pago se realice en un período posterior."
    },
    {
        id: "determinacion_017",
        category: "determinacion_control",
        difficulty: "baja",
        text: "Un contribuyente persona natural ha recibido dividendos de una sociedad nacional durante el año gravable.",
        question: "¿Qué tratamiento tributario tienen estos dividendos para efectos de la determinación del impuesto sobre la renta del contribuyente?",
        options: [
            "Están exentos del impuesto sobre la renta",
            "Están gravados con el impuesto sobre la renta a la tarifa general",
            "Están gravados con el impuesto sobre la renta a una tarifa especial, dependiendo del monto y del origen de los dividendos",
            "No están sujetos al impuesto sobre la renta, sino al impuesto al patrimonio"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 242 del Estatuto Tributario, modificado por la Ley 2010 de 2019, los dividendos y participaciones pagados o abonados en cuenta a personas naturales residentes en Colombia, provenientes de distribuciones de utilidades que hubieren sido consideradas como ingreso no constitutivo de renta ni ganancia ocasional (dividendos no gravados), están sujetos a una tarifa especial del impuesto sobre la renta, así: 1) 0% para dividendos inferiores a 300 UVT; y 2) 10% para dividendos iguales o superiores a 300 UVT. Por su parte, los dividendos y participaciones pagados o abonados en cuenta a personas naturales residentes en Colombia, provenientes de distribuciones de utilidades gravadas (dividendos gravados), están sujetos a la tarifa general del impuesto sobre la renta según el artículo 240 del mismo Estatuto, y posteriormente a la tarifa especial mencionada anteriormente. Es importante destacar que, según el artículo 245 del mismo Estatuto, los dividendos y participaciones pagados o abonados en cuenta a personas naturales no residentes en Colombia están sujetos a una tarifa del 10% para dividendos no gravados, y a la tarifa general del impuesto sobre la renta más la tarifa del 10% para dividendos gravados."
    },
    {
        id: "determinacion_018",
        category: "determinacion_control",
        difficulty: "alta",
        text: "Una empresa colombiana ha realizado operaciones de cobertura con instrumentos financieros derivados durante el año gravable.",
        question: "¿Cuál es el tratamiento tributario de estas operaciones para efectos de la determinación del impuesto sobre la renta?",
        options: [
            "Todas las operaciones con instrumentos financieros derivados están exentas del impuesto sobre la renta",
            "Los ingresos, costos y gastos provenientes de operaciones con instrumentos financieros derivados se tratan como ingresos, costos y gastos financieros, y se reconocen según el tratamiento contable",
            "Los ingresos, costos y gastos provenientes de operaciones con instrumentos financieros derivados se tratan como ingresos, costos y gastos de la actividad principal del contribuyente",
            "Los ingresos, costos y gastos provenientes de operaciones con instrumentos financieros derivados se reconocen fiscalmente solo cuando se liquide la operación y no cuando se realice la valoración a precios de mercado"
        ],
        correctAnswer: 3,
        explanation: "De acuerdo con el artículo 33 del Estatuto Tributario, para efectos del impuesto sobre la renta, los ingresos, costos y gastos generados por la valoración de instrumentos financieros derivados, no serán objeto del impuesto sino hasta el momento de la liquidación del instrumento. Es decir, los ingresos, costos y gastos provenientes de operaciones con instrumentos financieros derivados se reconocen fiscalmente solo cuando se liquide la operación y no cuando se realice la valoración a precios de mercado. Esto difiere del tratamiento contable, que generalmente requiere el reconocimiento de la valoración a precios de mercado en cada período. Es importante destacar que, según el mismo artículo, los instrumentos financieros derivados que se liquiden mediante la entrega del activo subyacente, serán tratados como una enajenación del activo subyacente, y su tratamiento fiscal será el que corresponda a la naturaleza de dicho activo. Por su parte, los instrumentos financieros derivados que se liquiden mediante la entrega de dinero, serán tratados como ingresos, costos o gastos financieros, según corresponda."
    },
    {
        id: "determinacion_019",
        category: "determinacion_control",
        difficulty: "media",
        text: "Una empresa colombiana ha realizado pagos por concepto de regalías a una empresa del exterior por el uso de una marca registrada.",
        question: "¿Cuál es el tratamiento tributario de estos pagos para efectos de la determinación del impuesto sobre la renta?",
        options: [
            "Estos pagos no son deducibles bajo ninguna circunstancia",
            "Estos pagos son deducibles en su totalidad sin requisitos adicionales",
            "Estos pagos son deducibles siempre que estén sujetos a retención en la fuente y cumplan con los requisitos generales de las deducciones",
            "Estos pagos son deducibles hasta un límite del 15% de la renta líquida"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 124 del Estatuto Tributario, los pagos por concepto de regalías a empresas del exterior por el uso de intangibles como marcas, patentes, know-how, etc., son deducibles para efectos del impuesto sobre la renta, siempre que cumplan con los siguientes requisitos: 1) Que estén sujetos a retención en la fuente, según lo establecido en el artículo 408 del mismo Estatuto, que establece una tarifa del 20% para pagos por concepto de regalías; y 2) Que cumplan con los requisitos generales de las deducciones establecidos en el artículo 107 del mismo Estatuto, es decir, que tengan relación de causalidad con la actividad productora de renta, que sean necesarios y proporcionados, y que se hayan causado o pagado efectivamente durante el año o período gravable. Adicionalmente, si el pago se realiza a un vinculado económico del exterior, debe cumplir con las normas de precios de transferencia establecidas en los artículos 260-1 a 260-11 del mismo Estatuto, lo que implica que el valor de la operación debe corresponder al precio o margen que habrían pactado partes independientes en operaciones comparables."
    },
    {
        id: "determinacion_020",
        category: "determinacion_control",
        difficulty: "baja",
        text: "Un contribuyente persona natural ha realizado aportes a cuentas de ahorro para el fomento de la construcción (AFC) durante el año gravable.",
        question: "¿Qué tratamiento tributario tienen estos aportes para efectos de la determinación del impuesto sobre la renta?",
        options: [
            "No tienen ningún beneficio tributario",
            "Son ingresos no constitutivos de renta ni ganancia ocasional hasta el 30% del ingreso laboral o tributario del año y hasta un límite de 3,800 UVT anuales",
            "Son deducibles en un 100% sin límite alguno",
            "Generan un descuento tributario del 25% del valor aportado"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el artículo 126-4 del Estatuto Tributario, las sumas que los contribuyentes personas naturales depositen en cuentas de ahorro denominadas 'Ahorro para el Fomento de la Construcción (AFC)', no harán parte de la base para aplicar la retención en la fuente y serán consideradas como un ingreso no constitutivo de renta ni ganancia ocasional, hasta una suma que adicionada al valor de los aportes voluntarios a fondos de pensiones de que trata el artículo 126-1 del mismo Estatuto, no exceda del 30% del ingreso laboral o ingreso tributario del año, según el caso, y hasta un monto máximo de 3,800 UVT por año. Los retiros de estos aportes solo mantienen este tratamiento cuando se destinen a la adquisición de vivienda (financiada o no por entidades sujetas a la inspección y vigilancia de la Superintendencia Financiera), o cuando hayan permanecido en las cuentas AFC por un período mínimo de 10 años. Si el retiro se realiza antes de que transcurran 10 años y no se destina a la adquisición de vivienda, el contribuyente deberá reconocer como renta gravable en el año en que se realice el retiro, el valor que fue objeto del beneficio tributario, junto con los rendimientos que se hayan generado."
    }
];