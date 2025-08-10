// Preguntas sobre Sistema Aduanero
const questions_sistema_aduanero = [
    {
        id: "aduanero_001",
        category: "sistema_aduanero",
        difficulty: "baja",
        text: "Una empresa importadora ha recibido una mercancía en la zona primaria aduanera y debe presentar la declaración de importación.",
        question: "¿Cuál es el plazo general para presentar la declaración de importación una vez la mercancía ha llegado al territorio aduanero nacional?",
        options: [
            "1 mes contado a partir de la fecha de llegada",
            "2 meses contados a partir de la fecha de llegada",
            "15 días calendario siguientes a la fecha de llegada",
            "45 días calendario siguientes a la fecha de llegada"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el artículo 171 del Decreto 1165 de 2019 (Estatuto Aduanero), el término general para presentar la declaración de importación es de dos (2) meses contados a partir de la fecha de llegada de la mercancía al territorio aduanero nacional. Este plazo puede ser prorrogado hasta por dos (2) meses adicionales en casos debidamente justificados ante la autoridad aduanera. Es importante tener en cuenta que existen términos especiales para ciertos tipos de mercancías o regímenes aduaneros específicos, pero el plazo general establecido en la normativa aduanera vigente es de dos meses."
    },
    {
        id: "aduanero_002",
        category: "sistema_aduanero",
        difficulty: "media",
        text: "Un importador ha presentado una declaración de importación y ha pagado los tributos aduaneros correspondientes. Sin embargo, durante el proceso de inspección, la autoridad aduanera encuentra inconsistencias en la clasificación arancelaria declarada.",
        question: "¿Qué consecuencia inmediata puede enfrentar el importador según la normativa aduanera colombiana?",
        options: [
            "Aprehensión y decomiso inmediato de la mercancía",
            "Suspensión automática de su calidad de usuario aduanero",
            "Liquidación oficial de corrección con posible sanción por inexactitud",
            "Cancelación definitiva de la autorización para realizar operaciones de comercio exterior"
        ],
        correctAnswer: 2,
        explanation: "Según lo establecido en los artículos 296 y 597 del Decreto 1165 de 2019, cuando la autoridad aduanera encuentra inconsistencias en la clasificación arancelaria declarada, puede expedir una liquidación oficial de corrección para modificar la declaración de importación, determinando un mayor valor a pagar por concepto de tributos aduaneros. Adicionalmente, conforme al artículo 639 del mismo decreto, el importador podría enfrentar una sanción por inexactitud equivalente al 10% de la diferencia entre el mayor valor a pagar determinado por la autoridad aduanera y el declarado por el importador. Esta sanción procede cuando la inexactitud representa un menor valor a pagar por concepto de tributos aduaneros o un mayor saldo a favor del declarante. No obstante, la aprehensión y decomiso solo procederían en casos más graves como contrabando o cuando la mercancía no corresponde a la declarada."
    },
    {
        id: "aduanero_003",
        category: "sistema_aduanero",
        difficulty: "alta",
        text: "Una empresa multinacional con sede en Colombia ha establecido un acuerdo de valoración anticipada con la DIAN para sus importaciones recurrentes de materias primas provenientes de su casa matriz en el exterior.",
        question: "¿Cuál es el principal efecto jurídico de este acuerdo de valoración anticipada según la normativa aduanera colombiana?",
        options: [
            "Exime a la empresa de presentar declaración andina del valor para las mercancías cubiertas por el acuerdo",
            "Garantiza que no se realizarán controles posteriores sobre las importaciones cubiertas por el acuerdo",
            "Otorga a la empresa una reducción automática del 50% en los tributos aduaneros",
            "Establece un método de valoración específico que será aceptado por la aduana durante la vigencia del acuerdo"
        ],
        correctAnswer: 3,
        explanation: "De acuerdo con el artículo 177 del Decreto 1165 de 2019, en concordancia con el artículo 167 de la Resolución 46 de 2019, los acuerdos de valoración anticipada tienen como principal efecto jurídico establecer un método de valoración específico que será aceptado por la aduana durante la vigencia del acuerdo. Estos acuerdos, celebrados entre la DIAN y los importadores, determinan los criterios y metodología que se aplicarán para la valoración de las mercancías importadas en un periodo determinado, proporcionando seguridad jurídica al importador sobre el valor en aduana que será aceptado. No eximen de la presentación de la declaración andina del valor cuando esta sea exigible, ni garantizan la ausencia de controles posteriores, aunque estos se enfocarían en verificar el cumplimiento de los términos del acuerdo. Tampoco otorgan reducciones automáticas en los tributos aduaneros."
    },
    {
        id: "aduanero_004",
        category: "sistema_aduanero",
        difficulty: "media",
        text: "Un importador ha solicitado un tratamiento arancelario preferencial para una mercancía originaria de México, amparado en el Tratado de Libre Comercio entre Colombia y México.",
        question: "¿Qué documento debe presentar el importador para acreditar el origen de la mercancía y acceder al tratamiento arancelario preferencial?",
        options: [
            "Únicamente la factura comercial emitida en México",
            "Certificado de origen en formato establecido en el TLC o declaración de origen en factura",
            "Declaración juramentada ante notario mexicano sobre el origen de los productos",
            "Certificado de calidad emitido por una entidad acreditada en México"
        ],
        correctAnswer: 1,
        explanation: "Según lo establecido en el Tratado de Libre Comercio entre Colombia y México, específicamente en el Capítulo IV sobre Reglas de Origen y en el artículo 7-02, para acreditar el origen de una mercancía y acceder al tratamiento arancelario preferencial, el importador debe presentar un certificado de origen en el formato establecido en el propio tratado o, en algunos casos, una declaración de origen en factura. Este documento debe ser emitido por el exportador o productor de la mercancía y debe contener información específica que demuestre que la mercancía cumple con las reglas de origen establecidas en el tratado. La sola presentación de la factura comercial no es suficiente para acreditar el origen preferencial, y no se requiere una declaración juramentada ante notario ni un certificado de calidad para estos efectos."
    },
    {
        id: "aduanero_005",
        category: "sistema_aduanero",
        difficulty: "baja",
        text: "Una empresa desea importar temporalmente maquinaria para un proyecto de infraestructura en Colombia.",
        question: "¿Cuál de los siguientes regímenes aduaneros sería el más adecuado para esta operación?",
        options: [
            "Importación para transformación o ensamble",
            "Importación temporal para reexportación en el mismo estado",
            "Tráfico postal y envíos urgentes",
            "Importación con franquicia"
        ],
        correctAnswer: 1,
        explanation: "El régimen aduanero más adecuado para la importación temporal de maquinaria para un proyecto de infraestructura es la 'Importación temporal para reexportación en el mismo estado'. Este régimen está regulado en los artículos 199 a 212 del Decreto 1165 de 2019 (Estatuto Aduanero) y permite la importación de mercancías al territorio aduanero nacional con suspensión total o parcial de los tributos aduaneros, para un fin específico y por un tiempo determinado, con la obligación de reexportarlas en el mismo estado, sin haber experimentado modificación alguna. Para maquinaria y equipos destinados a proyectos de infraestructura, el artículo 205 del mismo decreto establece que el plazo de la importación temporal puede ser hasta por el tiempo que dure el proyecto, con un máximo de 5 años, prorrogables por una sola vez hasta por 5 años más."
    },
    {
        id: "aduanero_006",
        category: "sistema_aduanero",
        difficulty: "alta",
        text: "Una empresa colombiana ha importado mercancías bajo el régimen de importación temporal para perfeccionamiento activo de bienes de capital. Durante el proceso de transformación, se generaron desperdicios que tienen valor comercial.",
        question: "Según la normativa aduanera colombiana, ¿cuál es el tratamiento que debe darse a estos desperdicios con valor comercial?",
        options: [
            "Deben ser destruidos bajo supervisión de la autoridad aduanera sin importar su valor comercial",
            "Pueden ser reexportados sin el pago de tributos aduaneros",
            "Deben ser nacionalizados pagando los tributos aduaneros correspondientes o reexportados",
            "Quedan automáticamente en libre disposición sin necesidad de trámite aduanero adicional"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 226 del Decreto 1165 de 2019, en concordancia con el artículo 238 de la Resolución 46 de 2019, los desperdicios con valor comercial resultantes de un proceso de transformación bajo el régimen de importación temporal para perfeccionamiento activo deben ser nacionalizados pagando los tributos aduaneros correspondientes o reexportados. El artículo 226 establece que 'los subproductos, productos defectuosos, residuos y desperdicios con valor comercial resultantes de la transformación, deberán someterse a importación ordinaria, exportarse o destruirse'. La destrucción solo es obligatoria para los desperdicios sin valor comercial. Los desperdicios no quedan automáticamente en libre disposición, sino que requieren un trámite aduanero específico (nacionalización o reexportación) para definir su situación jurídica."
    },
    {
        id: "aduanero_007",
        category: "sistema_aduanero",
        difficulty: "media",
        text: "Un exportador colombiano ha enviado mercancías a un comprador en el exterior, pero estas han sido devueltas por no cumplir con las especificaciones técnicas acordadas.",
        question: "¿Bajo qué modalidad de importación puede el exportador recibir nuevamente estas mercancías en Colombia sin pagar tributos aduaneros?",
        options: [
            "Reimportación por perfeccionamiento pasivo",
            "Reimportación en el mismo estado",
            "Importación temporal para reexportación en el mismo estado",
            "Importación para transformación o ensamble"
        ],
        correctAnswer: 1,
        explanation: "La modalidad adecuada es la 'Reimportación en el mismo estado', regulada en los artículos 198 y 199 del Decreto 1165 de 2019. Esta modalidad permite la importación sin el pago de tributos aduaneros de mercancías que fueron exportadas definitivamente y que regresan al país dentro del año siguiente a su exportación, sin haber sufrido modificación en el exterior y sin que se haya configurado el hecho generador del impuesto sobre las ventas en la exportación. El artículo 198 establece específicamente que procede la reimportación cuando las mercancías han sido rechazadas por el importador en el exterior, por no corresponder a las ordenadas. Para acogerse a esta modalidad, el exportador debe demostrar que se trata de las mismas mercancías exportadas y que no sufrieron transformación, elaboración o reparación en el exterior."
    },
    {
        id: "aduanero_008",
        category: "sistema_aduanero",
        difficulty: "baja",
        text: "Una empresa desea exportar mercancías de manera definitiva desde Colombia.",
        question: "¿Cuál es el régimen aduanero aplicable y qué documento principal debe presentarse ante la aduana?",
        options: [
            "Régimen de exportación definitiva, presentando una Solicitud de Autorización de Embarque (SAE)",
            "Régimen de exportación temporal, presentando un Documento de Exportación (DEX)",
            "Régimen de tránsito aduanero, presentando una Declaración de Tránsito Aduanero (DTA)",
            "Régimen de depósito aduanero, presentando una Declaración de Depósito (DD)"
        ],
        correctAnswer: 0,
        explanation: "El régimen aduanero aplicable es el de exportación definitiva y el documento principal que debe presentarse ante la aduana es la Solicitud de Autorización de Embarque (SAE). Según el artículo 349 del Decreto 1165 de 2019, la exportación definitiva es la salida de mercancías nacionales o nacionalizadas del territorio aduanero nacional para su uso o consumo definitivo en otro país o en una zona franca. El artículo 353 del mismo decreto establece que el trámite de una exportación se inicia con la presentación y aceptación de una Solicitud de Autorización de Embarque (SAE), la cual se presenta a través de los servicios informáticos electrónicos de la DIAN. Una vez embarcada la mercancía y certificado el embarque por parte del transportador, la Solicitud de Autorización de Embarque se convierte en Declaración de Exportación (DEX)."
    },
    {
        id: "aduanero_009",
        category: "sistema_aduanero",
        difficulty: "alta",
        text: "Una empresa multinacional con operaciones en Colombia ha sido certificada como Operador Económico Autorizado (OEA) en la categoría de seguridad y facilitación.",
        question: "¿Cuál de los siguientes NO es un beneficio que recibe esta empresa como OEA según la normativa aduanera colombiana?",
        options: [
            "Disminución del número de reconocimientos, inspecciones físicas y documentales",
            "Utilización de procedimientos especiales y simplificados para el desarrollo de las diligencias de reconocimiento o de inspección",
            "Exención total del pago de tributos aduaneros para todas sus importaciones",
            "Reducción del monto de las garantías globales constituidas ante la DIAN"
        ],
        correctAnswer: 2,
        explanation: "La exención total del pago de tributos aduaneros para todas las importaciones NO es un beneficio que reciben los Operadores Económicos Autorizados (OEA). Según el artículo 34 del Decreto 1165 de 2019, en concordancia con el Decreto 3568 de 2011 (modificado por el Decreto 1894 de 2015), los beneficios para los OEA incluyen: disminución del número de reconocimientos e inspecciones, procedimientos especiales y simplificados para inspecciones, reducción de garantías, entre otros. Sin embargo, la normativa no contempla la exención total de tributos aduaneros como beneficio para los OEA. Los OEA deben cumplir con todas sus obligaciones tributarias y aduaneras, incluyendo el pago de los tributos aduaneros correspondientes a sus operaciones de comercio exterior. Los demás beneficios mencionados en las opciones sí están contemplados en la normativa para los OEA."
    },
    {
        id: "aduanero_010",
        category: "sistema_aduanero",
        difficulty: "media",
        text: "Un importador ha presentado una declaración de importación y ha obtenido el levante de la mercancía. Posteriormente, detecta que cometió un error en la declaración respecto al valor declarado.",
        question: "¿Cuál es el procedimiento correcto que debe seguir el importador para corregir este error según la normativa aduanera?",
        options: [
            "Presentar una nueva declaración de importación sustitutiva",
            "Solicitar la anulación de la declaración original y presentar una nueva",
            "Presentar una declaración de corrección dentro del término de firmeza de la declaración",
            "Esperar a que la DIAN inicie un proceso de fiscalización para corregir el error"
        ],
        correctAnswer: 2,
        explanation: "Según el artículo 188 del Decreto 1165 de 2019, el importador puede corregir voluntariamente una declaración de importación para subsanar errores que no conlleven a un menor pago de tributos o sanciones, dentro del término de firmeza de la declaración (3 años contados a partir de la fecha de su presentación). Si la corrección implica un mayor valor a pagar por concepto de tributos aduaneros, el declarante podrá corregir voluntariamente la declaración de importación, liquidando y pagando los mayores tributos y los intereses correspondientes. El artículo 189 del mismo decreto establece que no procede la corrección cuando se ha iniciado una investigación aduanera o cuando el declarante ha sido requerido para presentar documentos o información. La presentación de una declaración sustitutiva o la anulación de la declaración original no son procedimientos contemplados en la normativa aduanera colombiana para este caso."
    },
    {
        id: "aduanero_011",
        category: "sistema_aduanero",
        difficulty: "baja",
        text: "Una empresa desea importar mercancías a Colombia y necesita determinar el valor en aduana para el cálculo de los tributos aduaneros.",
        question: "¿Cuál es el método principal de valoración aduanera que debe aplicarse según la normativa colombiana?",
        options: [
            "Método del valor reconstruido",
            "Método del valor de transacción de mercancías idénticas",
            "Método del valor de transacción de la mercancía importada",
            "Método del último recurso"
        ],
        correctAnswer: 2,
        explanation: "El método principal de valoración aduanera que debe aplicarse según la normativa colombiana es el 'Método del valor de transacción de la mercancía importada'. Este método está establecido en el artículo 8 del Acuerdo sobre Valoración de la OMC, incorporado a la legislación colombiana mediante la Ley 170 de 1994, y desarrollado en los artículos 320 a 322 del Decreto 1165 de 2019. El artículo 320 define el valor en aduana como el valor de transacción, es decir, el precio realmente pagado o por pagar por las mercancías cuando estas se venden para su exportación al país de importación, ajustado de conformidad con lo dispuesto en el artículo 8 del Acuerdo sobre Valoración de la OMC. Solo cuando no pueda determinarse el valor en aduana mediante este método, se aplicarán en orden sucesivo y excluyente los demás métodos de valoración previstos en el Acuerdo."
    },
    {
        id: "aduanero_012",
        category: "sistema_aduanero",
        difficulty: "alta",
        text: "Una empresa ha importado mercancías bajo el régimen de importación temporal para reexportación en el mismo estado con suspensión total de tributos aduaneros. Al vencimiento del plazo autorizado, la empresa no ha reexportado ni nacionalizado las mercancías.",
        question: "¿Cuál es la consecuencia jurídica de esta situación según la normativa aduanera colombiana?",
        options: [
            "Las mercancías quedan automáticamente nacionalizadas sin necesidad de trámite adicional",
            "Se configura el abandono legal de las mercancías a favor de la Nación",
            "Se debe pagar una multa equivalente al 200% del valor de los tributos aduaneros",
            "Se configura una causal de aprehensión y eventual decomiso de las mercancías"
        ],
        correctAnswer: 3,
        explanation: "De acuerdo con el artículo 647, numeral 1, literal j) del Decreto 1165 de 2019, es causal de aprehensión y decomiso de las mercancías 'no presentar la declaración de importación con el pago de los tributos aduaneros exigibles como consecuencia del incumplimiento de los requisitos y condiciones del régimen de importación temporal o de la prórroga de dicha modalidad'. Adicionalmente, el artículo 211 del mismo decreto establece que cuando no se cumpla con la obligación de reexportar o no se solicite la modificación del régimen de importación temporal a importación ordinaria dentro del plazo establecido, procederá la aprehensión y decomiso de la mercancía o la aplicación de la sanción prevista en el artículo 616 (multa equivalente al 10% del valor en aduana de la mercancía), sin perjuicio del pago de los tributos aduaneros correspondientes. Por lo tanto, el no reexportar ni nacionalizar las mercancías al vencimiento del plazo autorizado configura una causal de aprehensión y eventual decomiso."
    },
    {
        id: "aduanero_013",
        category: "sistema_aduanero",
        difficulty: "media",
        text: "Una empresa desea importar mercancías a Colombia y ha contratado los servicios de una agencia de aduanas para realizar los trámites correspondientes.",
        question: "¿Cuál es la responsabilidad de la agencia de aduanas frente a la DIAN en relación con la veracidad y exactitud de la información contenida en las declaraciones aduaneras?",
        options: [
            "No tiene ninguna responsabilidad, pues actúa solo como mandatario del importador",
            "Es responsable únicamente por la correcta clasificación arancelaria de las mercancías",
            "Es responsable solidariamente con el importador por el pago de los tributos aduaneros y sanciones",
            "Es responsable únicamente por la correcta liquidación de los tributos aduaneros"
        ],
        correctAnswer: 2,
        explanation: "Según el artículo 53 del Decreto 1165 de 2019, las agencias de aduanas que actúen ante la DIAN serán responsables administrativamente por las infracciones derivadas del ejercicio de su actividad. El artículo 57 del mismo decreto establece que las agencias de aduanas responderán directamente por los gravámenes, tasas, sobretasas, multas o sanciones a que haya lugar por las infracciones que se deriven de su actuación. Adicionalmente, el artículo 58 establece que las agencias de aduanas responderán solidariamente con el declarante por el pago de los tributos aduaneros y sanciones a que haya lugar como consecuencia de los trámites aduaneros en los que participen. Esta responsabilidad solidaria se extiende a las obligaciones que se deriven por la no presentación de las declaraciones aduaneras o por las infracciones derivadas de su actuación como agencia de aduanas."
    },
    {
        id: "aduanero_014",
        category: "sistema_aduanero",
        difficulty: "baja",
        text: "Un viajero internacional llega a Colombia y trae consigo bienes adquiridos en el exterior.",
        question: "¿Cuál es el monto de la franquicia de tributos aduaneros que puede aplicar este viajero según la normativa aduanera colombiana?",
        options: [
            "USD 500 por viajero y USD 250 adicionales por cada menor de edad acompañante",
            "USD 2.000 por viajero sin importar el número de viajes al año",
            "USD 1.500 por viajero con un máximo de dos viajes al año",
            "USD 3.000 por grupo familiar sin importar el número de integrantes"
        ],
        correctAnswer: 0,
        explanation: "De acuerdo con el artículo 300 del Decreto 1165 de 2019, los viajeros que ingresen al país tendrán derecho a una franquicia de tributos aduaneros (exención del pago de tributos) por mercancías hasta por un valor de USD 1.500. Sin embargo, de este monto, solo se podrán incluir artículos nuevos hasta por un valor de USD 500 por viajero y USD 250 adicionales por cada menor de edad acompañante. Esta franquicia solo podrá utilizarse una vez cada año. Es importante aclarar que los artículos que excedan estos montos estarán sujetos al pago de tributos aduaneros, y existen restricciones específicas para ciertos tipos de mercancías como licores, cigarrillos y alimentos, que tienen límites cuantitativos específicos."
    },
    {
        id: "aduanero_015",
        category: "sistema_aduanero",
        difficulty: "alta",
        text: "Una empresa colombiana ha importado mercancías bajo el régimen de admisión temporal para perfeccionamiento activo de bienes de capital. Durante una verificación posterior, la DIAN determina que la empresa ha incumplido con las condiciones del régimen al dar un uso diferente a las mercancías importadas.",
        question: "¿Cuál es la consecuencia jurídica que enfrentaría la empresa según la normativa aduanera colombiana?",
        options: [
            "Únicamente deberá pagar los tributos aduaneros suspendidos más intereses moratorios",
            "Deberá pagar los tributos aduaneros suspendidos más una sanción del 100% del valor de los tributos",
            "Se configurará una causal de aprehensión y eventual decomiso de las mercancías, sin perjuicio del pago de tributos y sanciones",
            "Deberá reexportar inmediatamente las mercancías sin posibilidad de nacionalización"
        ],
        correctAnswer: 2,
        explanation: "Según el artículo 647, numeral 1, literal k) del Decreto 1165 de 2019, es causal de aprehensión y eventual decomiso de las mercancías 'Dar a las mercancías importadas una destinación diferente a la prevista en el régimen de importación bajo el cual fueron despachadas para consumo, sin la autorización previa de la autoridad aduanera, cuando haya lugar a ello'. Adicionalmente, el artículo 616 del mismo decreto establece una sanción del 10% del valor en aduana de la mercancía por este tipo de infracciones. El artículo 228 específicamente para el régimen de admisión temporal para perfeccionamiento activo establece que el incumplimiento de las obligaciones impuestas por la autoridad aduanera conlleva la aprehensión y decomiso de las mercancías, sin perjuicio del pago de los tributos aduaneros correspondientes y las sanciones a que haya lugar. Por lo tanto, dar un uso diferente a las mercancías importadas bajo este régimen configura una causal de aprehensión y eventual decomiso, sin perjuicio del pago de tributos y sanciones."
    },
    {
        id: "aduanero_016",
        category: "sistema_aduanero",
        difficulty: "media",
        text: "Una empresa desea importar mercancías a Colombia y necesita determinar la clasificación arancelaria correcta para su producto.",
        question: "¿Cuál es el instrumento jurídico que establece la nomenclatura arancelaria vigente en Colombia?",
        options: [
            "El Estatuto Tributario Nacional",
            "El Arancel de Aduanas adoptado mediante Decreto 2153 de 2016 y sus modificaciones",
            "El Código de Comercio Colombiano",
            "La Ley Marco de Comercio Exterior (Ley 7 de 1991)"
        ],
        correctAnswer: 1,
        explanation: "El instrumento jurídico que establece la nomenclatura arancelaria vigente en Colombia es el Arancel de Aduanas adoptado mediante Decreto 2153 de 2016 y sus modificaciones. Este decreto adoptó la Nomenclatura Arancelaria de la Comunidad Andina (NANDINA), basada en el Sistema Armonizado de Designación y Codificación de Mercancías (SA) de la Organización Mundial de Aduanas (OMA). El Decreto 2153 de 2016 ha sido modificado por diversos decretos posteriores para actualizar la nomenclatura conforme a las enmiendas del Sistema Armonizado y para ajustar los aranceles aplicables. La clasificación arancelaria es fundamental para determinar los tributos aduaneros aplicables, las restricciones o prohibiciones, y los requisitos específicos para la importación de mercancías. Ni el Estatuto Tributario, ni el Código de Comercio, ni la Ley Marco de Comercio Exterior establecen la nomenclatura arancelaria."
    },
    {
        id: "aduanero_017",
        category: "sistema_aduanero",
        difficulty: "baja",
        text: "Una empresa desea conocer el arancel aplicable a un producto específico que planea importar a Colombia.",
        question: "¿Dónde puede consultar oficialmente el arancel aplicable a un producto según su clasificación arancelaria?",
        options: [
            "Únicamente en la página web del Ministerio de Hacienda",
            "En la Ventanilla Única de Comercio Exterior (VUCE) o en la página web de la DIAN",
            "Exclusivamente a través de un agente de aduanas autorizado",
            "Solamente mediante consulta formal escrita ante la DIAN"
        ],
        correctAnswer: 1,
        explanation: "La consulta oficial del arancel aplicable a un producto según su clasificación arancelaria puede realizarse en la Ventanilla Única de Comercio Exterior (VUCE) o en la página web de la DIAN. La DIAN ofrece en su sitio web oficial (www.dian.gov.co) la consulta del arancel de aduanas, donde los usuarios pueden verificar la clasificación arancelaria de los productos, los aranceles aplicables, las restricciones o prohibiciones, y los requisitos específicos para la importación. Adicionalmente, la VUCE (www.vuce.gov.co), administrada por el Ministerio de Comercio, Industria y Turismo, también permite consultar esta información. Estas herramientas son de acceso público y gratuito, y no se requiere ser agente de aduanas ni presentar una consulta formal escrita para acceder a esta información básica sobre aranceles."
    },
    {
        id: "aduanero_018",
        category: "sistema_aduanero",
        difficulty: "alta",
        text: "Una empresa ha importado mercancías a Colombia declarando un valor en aduana que la DIAN considera inferior al que corresponde según los métodos de valoración establecidos en el Acuerdo sobre Valoración de la OMC.",
        question: "En el proceso de control posterior, ¿qué facultad tiene la DIAN respecto a la determinación del valor en aduana?",
        options: [
            "Puede rechazar el valor declarado únicamente si demuestra fraude intencional por parte del importador",
            "Puede determinar el valor en aduana aplicando los métodos de valoración en forma sucesiva y excluyente",
            "Debe aceptar el valor declarado si el importador presenta una certificación del proveedor extranjero",
            "Puede aplicar directamente el método del último recurso sin considerar los métodos anteriores"
        ],
        correctAnswer: 1,
        explanation: "En el proceso de control posterior, la DIAN tiene la facultad de determinar el valor en aduana aplicando los métodos de valoración en forma sucesiva y excluyente, tal como lo establece el artículo 338 del Decreto 1165 de 2019. Este artículo señala que cuando existan motivos para dudar de la veracidad o exactitud del valor declarado, la autoridad aduanera podrá determinar el valor en aduana de las mercancías importadas, aplicando los métodos de valoración establecidos en el Acuerdo sobre Valoración de la OMC, siguiendo el orden previsto en el mismo. Estos métodos son: 1) valor de transacción de la mercancía importada, 2) valor de transacción de mercancías idénticas, 3) valor de transacción de mercancías similares, 4) método deductivo, 5) método del valor reconstruido, y 6) método del último recurso. La DIAN debe aplicar estos métodos en forma sucesiva y excluyente, no pudiendo saltar directamente al método del último recurso ni estando obligada a demostrar fraude intencional para rechazar el valor declarado."
    },
    {
        id: "aduanero_019",
        category: "sistema_aduanero",
        difficulty: "media",
        text: "Una empresa desea importar mercancías a Colombia y necesita constituir una garantía para respaldar el cumplimiento de sus obligaciones aduaneras.",
        question: "¿Cuáles son los tipos de garantías que puede constituir ante la DIAN según la normativa aduanera colombiana?",
        options: [
            "Únicamente pólizas de seguros emitidas por compañías aseguradoras",
            "Solamente garantías bancarias emitidas por entidades financieras",
            "Exclusivamente depósitos en efectivo en la cuenta de la DIAN",
            "Garantías bancarias, pólizas de seguros, depósitos en efectivo o fiducia mercantil en garantía, entre otras"
        ],
        correctAnswer: 3,
        explanation: "De acuerdo con el artículo 28 del Decreto 1165 de 2019, los tipos de garantías que pueden constituirse ante la DIAN son: 1) Depósito en efectivo; 2) Garantía bancaria o de compañía de seguros; 3) Carta de crédito standby; 4) Fiducia mercantil en garantía; 5) Endoso en garantía de títulos valores; 6) Prenda sin tenencia; 7) Hipoteca; 8) Garantía ofrecida por terceros; y 9) Las demás que señale la DIAN. El artículo 29 del mismo decreto establece que la DIAN determinará la vigencia de las garantías, que deberá ser suficiente para asegurar el cumplimiento de las obligaciones de cada régimen aduanero o actividad. Por lo tanto, el importador tiene diversas opciones para constituir garantías, no limitándose únicamente a un solo tipo como pólizas de seguros, garantías bancarias o depósitos en efectivo."
    },
    {
        id: "aduanero_020",
        category: "sistema_aduanero",
        difficulty: "baja",
        text: "Una empresa desea exportar mercancías desde Colombia y necesita conocer los documentos básicos requeridos para este procedimiento.",
        question: "¿Cuáles son los documentos básicos exigidos para una exportación definitiva desde Colombia?",
        options: [
            "Únicamente la factura comercial y el documento de transporte",
            "Solicitud de Autorización de Embarque (SAE), factura comercial y documento de transporte",
            "Certificado de origen, lista de empaque y póliza de seguro",
            "Declaración andina del valor y certificado fitosanitario"
        ],
        correctAnswer: 1,
        explanation: "Los documentos básicos exigidos para una exportación definitiva desde Colombia son la Solicitud de Autorización de Embarque (SAE), la factura comercial y el documento de transporte. Según el artículo 353 del Decreto 1165 de 2019, el trámite de una exportación se inicia con la presentación y aceptación de una Solicitud de Autorización de Embarque (SAE), la cual debe estar acompañada de la factura comercial o documento que acredite la operación de comercio. Una vez embarcada la mercancía, el transportador debe expedir el documento de transporte (conocimiento de embarque, guía aérea o carta de porte, según el modo de transporte) y certificar el embarque. Con estos documentos, la SAE se convierte en Declaración de Exportación (DEX). Dependiendo del tipo de producto y del país de destino, pueden requerirse documentos adicionales como certificados de origen, certificados sanitarios o fitosanitarios, pero los documentos básicos son los mencionados."
    }
];