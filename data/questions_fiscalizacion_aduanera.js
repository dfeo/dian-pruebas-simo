// Preguntas sobre Fiscalización Aduanera
const questions_fiscalizacion_aduanera = [
    {
        id: "fiscalizacion_aduanera_001",
        category: "fiscalizacion_aduanera",
        difficulty: "baja",
        text: "La DIAN ha iniciado un proceso de fiscalización aduanera a una empresa importadora y necesita verificar la correcta clasificación arancelaria de las mercancías importadas.",
        question: "¿Cuál es el instrumento jurídico que establece la nomenclatura arancelaria vigente en Colombia?",
        options: [
            "El Estatuto Aduanero (Decreto 1165 de 2019)",
            "El Arancel de Aduanas adoptado mediante Decreto 2153 de 2016 y sus modificaciones",
            "El Código de Comercio Colombiano",
            "La Ley Marco de Comercio Exterior (Ley 7 de 1991)"
        ],
        correctAnswer: 1,
        explanation: "El instrumento jurídico que establece la nomenclatura arancelaria vigente en Colombia es el Arancel de Aduanas adoptado mediante Decreto 2153 de 2016 y sus modificaciones. Este decreto adoptó la Nomenclatura Arancelaria de la Comunidad Andina (NANDINA), basada en el Sistema Armonizado de Designación y Codificación de Mercancías (SA) de la Organización Mundial de Aduanas (OMA). El Decreto 2153 de 2016 ha sido modificado por diversos decretos posteriores para actualizar la nomenclatura conforme a las enmiendas del Sistema Armonizado y para ajustar los aranceles aplicables. La clasificación arancelaria es fundamental en los procesos de fiscalización aduanera, ya que determina los tributos aduaneros aplicables, las restricciones o prohibiciones, y los requisitos específicos para la importación de mercancías. Ni el Estatuto Aduanero, ni el Código de Comercio, ni la Ley Marco de Comercio Exterior establecen la nomenclatura arancelaria."
    },
    {
        id: "fiscalizacion_aduanera_002",
        category: "fiscalizacion_aduanera",
        difficulty: "media",
        text: "Durante un proceso de fiscalización aduanera, la DIAN encuentra inconsistencias en la declaración de importación respecto al valor declarado de las mercancías.",
        question: "¿Qué acto administrativo debe expedir la DIAN para modificar el valor en aduana declarado?",
        options: [
            "Requerimiento especial aduanero",
            "Liquidación oficial de corrección",
            "Auto de inspección aduanera",
            "Resolución de determinación de origen"
        ],
        correctAnswer: 0,
        explanation: "De acuerdo con el artículo 680 del Decreto 1165 de 2019 (Estatuto Aduanero), cuando la autoridad aduanera encuentre inconsistencias en la declaración de importación, incluyendo aquellas relacionadas con el valor en aduana declarado, debe formular un Requerimiento Especial Aduanero. Este documento contiene una propuesta de determinación de los tributos aduaneros y sanciones correspondientes. El requerimiento especial aduanero se notifica al declarante y/o al importador, quienes tienen un mes contado a partir de la notificación para responder, objetando o aceptando los hechos planteados. Si el requerido acepta los hechos, debe presentar una declaración de corrección, liquidando y pagando los mayores tributos y sanciones propuestos. Si objeta, debe presentar las pruebas que sustentan su posición. Posteriormente, si la autoridad aduanera no acepta los argumentos presentados, expedirá una Liquidación Oficial de Revisión. El Auto de Inspección Aduanera es un acto de trámite que ordena la práctica de una diligencia de inspección, mientras que la Resolución de Determinación de Origen se utiliza para cuestionar el origen de las mercancías, no su valor."
    },
    {
        id: "fiscalizacion_aduanera_003",
        category: "fiscalizacion_aduanera",
        difficulty: "alta",
        text: "La DIAN ha iniciado un proceso de fiscalización aduanera a una empresa importadora por presuntas irregularidades en la determinación del valor en aduana. Durante la investigación, la administración aduanera encuentra que la empresa ha declarado un valor inferior al realmente pagado al proveedor en el exterior.",
        question: "¿Cuál es la consecuencia jurídica principal para el importador por declarar un valor en aduana inferior al realmente pagado?",
        options: [
            "Solo debe pagar los tributos aduaneros omitidos más los intereses moratorios",
            "Debe pagar los tributos aduaneros omitidos, los intereses moratorios y una sanción del 200% del valor de los tributos dejados de pagar",
            "Se configura una causal de aprehensión y eventual decomiso de la mercancía, además de las sanciones administrativas correspondientes",
            "Únicamente se impone una sanción administrativa equivalente al 20% del valor de las mercancías"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 647, numeral 1, literal d) del Decreto 1165 de 2019 (Estatuto Aduanero), es causal de aprehensión y eventual decomiso de las mercancías 'cuando se haya declarado un valor inferior al precio oficial establecido por la autoridad aduanera, o cuando se declare un valor inferior al precio de referencia o al precio determinado por la Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales (DIAN) mediante estudios de valor o cuando se determine que el valor declarado no corresponde al valor real de la mercancía'. Adicionalmente, según el artículo 639 del mismo decreto, cuando con ocasión del control posterior se encuentre que el valor declarado no corresponde al valor en aduana que debió declararse, se aplicará una sanción de multa equivalente al 200% de los tributos aduaneros dejados de pagar, sin perjuicio del pago de los tributos aduaneros a que haya lugar. En casos graves, esta conducta también podría configurar el delito de fraude aduanero, tipificado en el artículo 321 del Código Penal, cuando el valor declarado de las mercancías sea inferior al cincuenta por ciento (50%) del valor real."
    },
    {
        id: "fiscalizacion_aduanera_004",
        category: "fiscalizacion_aduanera",
        difficulty: "media",
        text: "Durante un proceso de fiscalización aduanera, la DIAN encuentra que un importador ha declarado incorrectamente el origen de las mercancías para beneficiarse indebidamente de preferencias arancelarias establecidas en un acuerdo comercial.",
        question: "¿Qué consecuencias enfrenta el importador según la normativa aduanera colombiana?",
        options: [
            "Solo debe pagar los tributos aduaneros dejados de pagar más los intereses moratorios",
            "Debe pagar los tributos aduaneros dejados de pagar, los intereses moratorios y una sanción del 100% del valor de los tributos",
            "Se configura una causal de aprehensión y eventual decomiso de la mercancía",
            "Únicamente se impone una sanción administrativa equivalente al 10% del valor de las mercancías"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el artículo 639 del Decreto 1165 de 2019 (Estatuto Aduanero), cuando con ocasión del control posterior se encuentre que no se cumplieron los requisitos con los cuales se obtuvo un trato arancelario preferencial, se aplicará una sanción de multa equivalente al 100% de los tributos aduaneros dejados de pagar, sin perjuicio del pago de los tributos aduaneros a que haya lugar. Esta sanción se aplica cuando el importador declara incorrectamente el origen de las mercancías para beneficiarse indebidamente de preferencias arancelarias establecidas en un acuerdo comercial. Adicionalmente, según el artículo 633 del mismo decreto, cuando se detecte que el certificado de origen o la declaración de origen presentados como prueba de origen contienen información incorrecta, la autoridad aduanera negará el trato arancelario preferencial para las mercancías objeto de control. Es importante destacar que, a diferencia de otras infracciones aduaneras, la declaración incorrecta del origen para beneficiarse de preferencias arancelarias no constituye por sí misma una causal de aprehensión y decomiso, a menos que se configure alguna de las causales específicas establecidas en el artículo 647 del Estatuto Aduanero."
    },
    {
        id: "fiscalizacion_aduanera_005",
        category: "fiscalizacion_aduanera",
        difficulty: "baja",
        text: "La DIAN ha notificado a un importador un requerimiento especial aduanero en el que propone modificar la clasificación arancelaria declarada, lo que implica un mayor valor a pagar por concepto de tributos aduaneros.",
        question: "¿Cuál es el plazo que tiene el importador para responder este requerimiento especial aduanero según el Estatuto Aduanero?",
        options: [
            "10 días hábiles, prorrogables por un término igual",
            "15 días hábiles, sin posibilidad de prórroga",
            "1 mes, prorrogable por un mes adicional",
            "3 meses, sin posibilidad de prórroga"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 680 del Decreto 1165 de 2019 (Estatuto Aduanero), el plazo para responder un requerimiento especial aduanero es de un (1) mes contado a partir de la fecha de notificación del requerimiento. Durante este plazo, el requerido debe presentar por escrito sus objeciones y las pruebas que pretenda hacer valer. Según el artículo 681 del mismo decreto, este plazo puede ser prorrogado por un (1) mes adicional, a solicitud del interesado, antes del vencimiento del plazo inicial. La prórroga puede ser concedida cuando se considere procedente por la autoridad aduanera. Es importante destacar que, según el artículo 682, si el requerido acepta expresamente los hechos objeto del requerimiento, puede presentar una declaración de corrección dentro del mes siguiente a la notificación del requerimiento, liquidando y pagando los mayores tributos aduaneros y sanciones correspondientes, con la reducción de la sanción al 50% del valor propuesto en el requerimiento."
    },
    {
        id: "fiscalizacion_aduanera_006",
        category: "fiscalizacion_aduanera",
        difficulty: "alta",
        text: "La DIAN ha iniciado un proceso de fiscalización aduanera a una empresa que ha importado mercancías bajo el régimen de importación temporal para perfeccionamiento activo. Durante la investigación, la administración aduanera encuentra que la empresa ha dado un destino diferente a las mercancías importadas.",
        question: "¿Cuál es la consecuencia jurídica para el importador por dar un destino diferente a las mercancías importadas bajo este régimen?",
        options: [
            "Solo debe pagar los tributos aduaneros correspondientes a una importación ordinaria",
            "Debe pagar los tributos aduaneros correspondientes a una importación ordinaria más una sanción del 10% del valor en aduana de las mercancías",
            "Se configura una causal de aprehensión y eventual decomiso de las mercancías, sin perjuicio del pago de tributos y sanciones",
            "Únicamente se impone una sanción administrativa equivalente al 5% del valor de las mercancías"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 647, numeral 1, literal k) del Decreto 1165 de 2019 (Estatuto Aduanero), es causal de aprehensión y eventual decomiso de las mercancías 'Dar a las mercancías importadas una destinación diferente a la prevista en el régimen de importación bajo el cual fueron despachadas para consumo, sin la autorización previa de la autoridad aduanera, cuando haya lugar a ello'. Esta causal aplica específicamente para el caso de mercancías importadas bajo el régimen de importación temporal para perfeccionamiento activo, ya que estas mercancías deben destinarse exclusivamente a ser sometidas a transformación, elaboración, manufactura, procesamiento, o ser utilizadas como insumos, materias primas o bienes intermedios en la producción de bienes para su posterior exportación o reexportación. Adicionalmente, según el artículo 616 del mismo decreto, cuando se dé a las mercancías importadas una destinación diferente a la señalada en el régimen de importación temporal, se aplicará una sanción de multa equivalente al 10% del valor en aduana de las mercancías, sin perjuicio del pago de los tributos aduaneros correspondientes a la importación ordinaria."
    },
    {
        id: "fiscalizacion_aduanera_007",
        category: "fiscalizacion_aduanera",
        difficulty: "media",
        text: "Durante un proceso de fiscalización aduanera, la DIAN encuentra que un importador ha declarado incorrectamente la cantidad de mercancías importadas, declarando menos unidades de las realmente importadas.",
        question: "¿Qué consecuencias enfrenta el importador según la normativa aduanera colombiana?",
        options: [
            "Solo debe presentar una declaración de corrección pagando los mayores tributos aduaneros",
            "Debe pagar los tributos aduaneros dejados de pagar más una sanción del 10% del valor en aduana de las mercancías no declaradas",
            "Se configura una causal de aprehensión y eventual decomiso de las mercancías no declaradas, además de las sanciones administrativas correspondientes",
            "Únicamente se impone una sanción administrativa equivalente al 5% del valor de las mercancías"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 647, numeral 1, literal a) del Decreto 1165 de 2019 (Estatuto Aduanero), es causal de aprehensión y eventual decomiso de las mercancías 'Cuando se oculte o no se presente a la autoridad aduanera mercancías que han ingresado al país por lugar habilitado'. La declaración de una cantidad menor a la realmente importada implica que hay mercancías que han ingresado al país pero que no han sido presentadas a la autoridad aduanera, configurándose así esta causal de aprehensión. Adicionalmente, según el artículo 639 del mismo decreto, cuando con ocasión del control posterior se encuentre que la cantidad declarada es inferior a la cantidad encontrada, se aplicará una sanción de multa equivalente al 200% de los tributos aduaneros dejados de pagar, sin perjuicio del pago de los tributos aduaneros a que haya lugar. En casos graves, esta conducta también podría configurar el delito de contrabando, tipificado en el artículo 319 del Código Penal, cuando el valor de las mercancías supere los 50 salarios mínimos legales mensuales vigentes."
    },
    {
        id: "fiscalizacion_aduanera_008",
        category: "fiscalizacion_aduanera",
        difficulty: "baja",
        text: "La DIAN ha notificado a un importador una liquidación oficial de corrección por errores en la liquidación de los tributos aduaneros en la declaración de importación.",
        question: "¿Qué recurso puede interponer el importador contra esta liquidación oficial de corrección y en qué plazo?",
        options: [
            "Recurso de reposición, dentro de los 10 días hábiles siguientes a la notificación",
            "Recurso de reconsideración, dentro de los 15 días hábiles siguientes a la notificación",
            "Recurso de apelación, dentro del mes siguiente a la notificación",
            "Recurso de reposición y en subsidio de apelación, dentro de los 15 días hábiles siguientes a la notificación"
        ],
        correctAnswer: 3,
        explanation: "De acuerdo con el artículo 693 del Decreto 1165 de 2019 (Estatuto Aduanero), contra las liquidaciones oficiales de corrección procede el recurso de reposición y en subsidio de apelación. Según el artículo 694 del mismo decreto, estos recursos deben interponerse dentro de los quince (15) días hábiles siguientes a la notificación del acto administrativo que se impugna. El recurso de reposición se interpone ante el mismo funcionario que expidió la liquidación oficial, mientras que el recurso de apelación, que se interpone en subsidio del de reposición, se resuelve por el superior inmediato del funcionario que expidió la liquidación. Es importante destacar que, según el artículo 695, estos recursos deben presentarse por escrito, exponiendo los motivos de inconformidad con el acto administrativo, indicando el nombre y la dirección del recurrente, y adjuntando las pruebas que se pretenda hacer valer. La interposición de estos recursos suspende la ejecutoria del acto administrativo y, por ende, los efectos del mismo, hasta que se resuelvan definitivamente."
    },
    {
        id: "fiscalizacion_aduanera_009",
        category: "fiscalizacion_aduanera",
        difficulty: "alta",
        text: "La DIAN ha iniciado un proceso de fiscalización aduanera a una empresa que ha importado mercancías bajo el régimen de importación temporal para reexportación en el mismo estado. Durante la investigación, la administración aduanera encuentra que ha vencido el plazo autorizado sin que la empresa haya reexportado o nacionalizado las mercancías.",
        question: "¿Cuál es la consecuencia jurídica para el importador por el vencimiento del plazo sin reexportar o nacionalizar las mercancías?",
        options: [
            "Las mercancías quedan automáticamente nacionalizadas sin necesidad de trámite adicional",
            "Se configura el abandono legal de las mercancías a favor de la Nación",
            "Se debe pagar una multa equivalente al 200% del valor de los tributos aduaneros",
            "Se configura una causal de aprehensión y eventual decomiso de las mercancías"
        ],
        correctAnswer: 3,
        explanation: "De acuerdo con el artículo 647, numeral 1, literal j) del Decreto 1165 de 2019 (Estatuto Aduanero), es causal de aprehensión y decomiso de las mercancías 'no presentar la declaración de importación con el pago de los tributos aduaneros exigibles como consecuencia del incumplimiento de los requisitos y condiciones del régimen de importación temporal o de la prórroga de dicha modalidad'. Adicionalmente, el artículo 211 del mismo decreto establece que cuando no se cumpla con la obligación de reexportar o no se solicite la modificación del régimen de importación temporal a importación ordinaria dentro del plazo establecido, procederá la aprehensión y decomiso de la mercancía o la aplicación de la sanción prevista en el artículo 616 (multa equivalente al 10% del valor en aduana de la mercancía), sin perjuicio del pago de los tributos aduaneros correspondientes. Por lo tanto, el vencimiento del plazo sin reexportar o nacionalizar las mercancías configura una causal de aprehensión y eventual decomiso, no se produce ni la nacionalización automática ni el abandono legal, y la sanción aplicable no es del 200% de los tributos aduaneros."
    },
    {
        id: "fiscalizacion_aduanera_010",
        category: "fiscalizacion_aduanera",
        difficulty: "media",
        text: "Durante un proceso de fiscalización aduanera, la DIAN encuentra que un importador ha presentado documentos falsos para soportar el valor declarado de las mercancías importadas.",
        question: "¿Qué consecuencias enfrenta el importador según la normativa aduanera colombiana?",
        options: [
            "Solo debe pagar los tributos aduaneros dejados de pagar más los intereses moratorios",
            "Debe pagar los tributos aduaneros dejados de pagar, los intereses moratorios y una sanción del 200% del valor de los tributos",
            "Se configura una causal de aprehensión y eventual decomiso de las mercancías, además de las sanciones administrativas correspondientes",
            "Únicamente se impone una sanción administrativa equivalente al 20% del valor de las mercancías"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 647, numeral 1, literal e) del Decreto 1165 de 2019 (Estatuto Aduanero), es causal de aprehensión y eventual decomiso de las mercancías 'cuando se presente doble facturación como soporte del valor en aduana de la mercancía importada, mediante facturas con valores diferentes por la misma mercancía o mediante facturas que no coincidan en precio, fecha, proveedor, número, identificación, peso, cantidad, tipo de mercancía, país de origen o procedencia'. La presentación de documentos falsos para soportar el valor declarado se enmarca en esta causal. Adicionalmente, según el artículo 639 del mismo decreto, cuando con ocasión del control posterior se encuentre que el valor declarado no corresponde al valor en aduana que debió declararse, se aplicará una sanción de multa equivalente al 200% de los tributos aduaneros dejados de pagar, sin perjuicio del pago de los tributos aduaneros a que haya lugar. En casos graves, esta conducta también podría configurar el delito de fraude aduanero, tipificado en el artículo 321 del Código Penal, cuando se empleen maniobras fraudulentas tendientes a asegurar el éxito de la operación de importación con el fin de evadir, total o parcialmente, los tributos aduaneros."
    },
    {
        id: "fiscalizacion_aduanera_011",
        category: "fiscalizacion_aduanera",
        difficulty: "baja",
        text: "La DIAN ha notificado a un importador un requerimiento ordinario de información solicitando documentos relacionados con una importación realizada hace 2 años.",
        question: "¿Cuál es el plazo que tiene el importador para responder este requerimiento ordinario de información según el Estatuto Aduanero?",
        options: [
            "5 días hábiles, prorrogables por un término igual",
            "10 días hábiles, sin posibilidad de prórroga",
            "15 días hábiles, prorrogables por un término igual",
            "1 mes, sin posibilidad de prórroga"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 674 del Decreto 1165 de 2019 (Estatuto Aduanero), el plazo para responder un requerimiento ordinario de información es de quince (15) días hábiles contados a partir de la fecha de notificación del requerimiento. Este plazo puede ser prorrogado por un término igual, es decir, por quince (15) días hábiles adicionales, cuando el interesado lo solicite antes del vencimiento del plazo inicial, siempre que existan razones que justifiquen la prórroga. Es importante destacar que, según el artículo 675 del mismo decreto, el incumplimiento en la entrega de la información solicitada dentro del plazo establecido puede dar lugar a la imposición de sanciones, como la contemplada en el artículo 615 (multa equivalente a 200 UVT por no entregar la información oportunamente, o por entregarla en forma incompleta o inexacta). Adicionalmente, la no respuesta al requerimiento ordinario puede dar lugar a que la autoridad aduanera profiera un requerimiento especial aduanero con base en los hechos que conozca, la información que obre en su poder o la que obtenga de terceros."
    },
    {
        id: "fiscalizacion_aduanera_012",
        category: "fiscalizacion_aduanera",
        difficulty: "alta",
        text: "La DIAN ha iniciado un proceso de fiscalización aduanera a una empresa que ha importado mercancías bajo el régimen de Usuarios Altamente Exportadores (ALTEX). Durante la investigación, la administración aduanera encuentra que la empresa no ha cumplido con los compromisos de exportación establecidos en la normativa.",
        question: "¿Cuál es la consecuencia jurídica para el importador por el incumplimiento de los compromisos de exportación?",
        options: [
            "Solo debe pagar los tributos aduaneros correspondientes a las importaciones realizadas",
            "Debe pagar los tributos aduaneros correspondientes a las importaciones realizadas más una sanción del 10% del valor en aduana de las mercancías",
            "Se configura una causal de aprehensión y eventual decomiso de las mercancías importadas",
            "Debe pagar los tributos aduaneros correspondientes a las importaciones realizadas, más los intereses moratorios y una sanción del 100% del valor de los tributos"
        ],
        correctAnswer: 3,
        explanation: "De acuerdo con el artículo 640 del Decreto 1165 de 2019 (Estatuto Aduanero), cuando con ocasión del control posterior se establezca el incumplimiento de los compromisos de exportación en los regímenes de importación temporal para perfeccionamiento activo, se aplicará una sanción de multa equivalente al 100% de los tributos aduaneros correspondientes a la mercancía importada, que no fue objeto de exportación, sin perjuicio del pago de los tributos aduaneros a que haya lugar. Esta sanción aplica a los Usuarios Altamente Exportadores (ALTEX), quienes se benefician de la suspensión del pago de tributos aduaneros en sus importaciones, con el compromiso de destinar un porcentaje significativo de sus ventas a la exportación. El incumplimiento de este compromiso implica que deben pagar los tributos aduaneros que fueron suspendidos, más los intereses moratorios correspondientes y la sanción mencionada. Es importante destacar que este incumplimiento no configura por sí mismo una causal de aprehensión y decomiso, a menos que se configure alguna de las causales específicas establecidas en el artículo 647 del Estatuto Aduanero."
    },
    {
        id: "fiscalizacion_aduanera_013",
        category: "fiscalizacion_aduanera",
        difficulty: "media",
        text: "Durante un proceso de fiscalización aduanera, la DIAN encuentra que un importador ha declarado incorrectamente el país de origen de las mercancías, sin que esto afecte el tratamiento arancelario aplicado.",
        question: "¿Qué consecuencias enfrenta el importador según la normativa aduanera colombiana?",
        options: [
            "No enfrenta ninguna consecuencia porque no se afectó el tratamiento arancelario",
            "Debe presentar una declaración de corrección sin sanción",
            "Debe presentar una declaración de corrección y pagar una sanción del 10% del valor en aduana de las mercancías",
            "Se configura una causal de aprehensión y eventual decomiso de las mercancías"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 639 del Decreto 1165 de 2019 (Estatuto Aduanero), cuando con ocasión del control posterior se encuentre que se ha incurrido en errores u omisiones en la declaración de importación que no conlleven a que la mercancía ostente una condición distinta a la declarada, se aplicará una sanción de multa equivalente al 10% del valor en aduana de las mercancías, sin perjuicio de la presentación de una declaración de corrección. La declaración incorrecta del país de origen, cuando no afecta el tratamiento arancelario aplicado (por ejemplo, porque no se está solicitando una preferencia arancelaria basada en el origen), se considera un error u omisión que no conlleva a que la mercancía ostente una condición distinta a la declarada. Por lo tanto, el importador debe presentar una declaración de corrección y pagar la sanción mencionada. Es importante destacar que este error no configura por sí mismo una causal de aprehensión y decomiso, a menos que se configure alguna de las causales específicas establecidas en el artículo 647 del Estatuto Aduanero, como sería el caso si la declaración incorrecta del origen se hubiera utilizado para obtener indebidamente un tratamiento arancelario preferencial."
    },
    {
        id: "fiscalizacion_aduanera_014",
        category: "fiscalizacion_aduanera",
        difficulty: "baja",
        text: "La DIAN ha notificado a un importador una liquidación oficial de corrección por errores en la liquidación de los tributos aduaneros en la declaración de importación. El importador está de acuerdo con la liquidación oficial.",
        question: "¿Cuál es el plazo que tiene el importador para pagar los mayores tributos aduaneros liquidados oficialmente?",
        options: [
            "5 días hábiles siguientes a la notificación de la liquidación oficial",
            "10 días hábiles siguientes a la notificación de la liquidación oficial",
            "15 días hábiles siguientes a la notificación de la liquidación oficial",
            "1 mes siguiente a la notificación de la liquidación oficial"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con el artículo 692 del Decreto 1165 de 2019 (Estatuto Aduanero), el plazo para pagar los mayores tributos aduaneros liquidados oficialmente es de diez (10) días hábiles siguientes a la notificación de la liquidación oficial. Si el importador no está de acuerdo con la liquidación oficial, puede interponer los recursos de reposición y en subsidio de apelación dentro de los quince (15) días hábiles siguientes a la notificación, según lo establecido en el artículo 694 del mismo decreto. Sin embargo, si está de acuerdo con la liquidación oficial, debe proceder al pago de los mayores tributos aduaneros dentro del plazo mencionado. Es importante destacar que, según el artículo 696, el pago de los mayores tributos aduaneros determinados en la liquidación oficial, junto con los intereses que se causen hasta la fecha de pago, extingue la obligación aduanera. Si el importador no paga dentro del plazo establecido, la DIAN puede iniciar el proceso de cobro coactivo para hacer efectivo el pago de los tributos aduaneros, intereses y sanciones a que haya lugar."
    },
    {
        id: "fiscalizacion_aduanera_015",
        category: "fiscalizacion_aduanera",
        difficulty: "alta",
        text: "La DIAN ha iniciado un proceso de fiscalización aduanera a una empresa que ha importado mercancías bajo el régimen de importación para transformación o ensamble. Durante la investigación, la administración aduanera encuentra que la empresa ha vendido en el mercado nacional parte de las mercancías importadas sin someterlas al proceso de transformación o ensamble.",
        question: "¿Cuál es la consecuencia jurídica para el importador por vender en el mercado nacional las mercancías sin someterlas al proceso de transformación o ensamble?",
        options: [
            "Solo debe pagar los tributos aduaneros correspondientes a una importación ordinaria",
            "Debe pagar los tributos aduaneros correspondientes a una importación ordinaria más una sanción del 10% del valor en aduana de las mercancías",
            "Se configura una causal de aprehensión y eventual decomiso de las mercancías, además de las sanciones administrativas correspondientes",
            "Únicamente se impone una sanción administrativa equivalente al 5% del valor de las mercancías"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 647, numeral 1, literal k) del Decreto 1165 de 2019 (Estatuto Aduanero), es causal de aprehensión y eventual decomiso de las mercancías 'Dar a las mercancías importadas una destinación diferente a la prevista en el régimen de importación bajo el cual fueron despachadas para consumo, sin la autorización previa de la autoridad aduanera, cuando haya lugar a ello'. Esta causal aplica específicamente para el caso de mercancías importadas bajo el régimen de importación para transformación o ensamble, ya que estas mercancías deben destinarse exclusivamente a ser sometidas a los procesos de transformación o ensamble autorizados. La venta en el mercado nacional de estas mercancías sin someterlas a dichos procesos constituye una destinación diferente a la prevista en el régimen. Adicionalmente, según el artículo 616 del mismo decreto, cuando se dé a las mercancías importadas una destinación diferente a la señalada en el régimen de importación, se aplicará una sanción de multa equivalente al 10% del valor en aduana de las mercancías, sin perjuicio del pago de los tributos aduaneros correspondientes a la importación ordinaria."
    },
    {
        id: "fiscalizacion_aduanera_016",
        category: "fiscalizacion_aduanera",
        difficulty: "media",
        text: "Durante un proceso de fiscalización aduanera, la DIAN encuentra que un importador ha declarado incorrectamente la subpartida arancelaria de las mercancías importadas, lo que ha resultado en un menor pago de tributos aduaneros.",
        question: "¿Qué consecuencias enfrenta el importador según la normativa aduanera colombiana?",
        options: [
            "Solo debe presentar una declaración de corrección pagando los mayores tributos aduaneros",
            "Debe pagar los tributos aduaneros dejados de pagar más una sanción del 10% del valor en aduana de las mercancías",
            "Debe pagar los tributos aduaneros dejados de pagar, los intereses moratorios y una sanción del 200% del valor de los tributos dejados de pagar",
            "Se configura una causal de aprehensión y eventual decomiso de las mercancías"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 639 del Decreto 1165 de 2019 (Estatuto Aduanero), cuando con ocasión del control posterior se encuentre que la subpartida arancelaria declarada en la declaración de importación es diferente a la procedente y esto conlleva un menor pago de tributos aduaneros, se aplicará una sanción de multa equivalente al 200% de los tributos aduaneros dejados de pagar, sin perjuicio del pago de los tributos aduaneros a que haya lugar y los intereses moratorios correspondientes. Esta sanción se aplica porque la declaración incorrecta de la subpartida arancelaria que resulta en un menor pago de tributos aduaneros se considera una inexactitud sancionable. Es importante destacar que esta inexactitud no configura por sí misma una causal de aprehensión y decomiso, a menos que se configure alguna de las causales específicas establecidas en el artículo 647 del Estatuto Aduanero, como sería el caso si la declaración incorrecta de la subpartida arancelaria se hubiera utilizado para eludir restricciones o prohibiciones a la importación de las mercancías."
    },
    {
        id: "fiscalizacion_aduanera_017",
        category: "fiscalizacion_aduanera",
        difficulty: "baja",
        text: "La DIAN ha notificado a un importador un requerimiento especial aduanero en el que propone una sanción por una infracción administrativa aduanera.",
        question: "¿Qué ocurre si el importador acepta la infracción propuesta en el requerimiento especial aduanero?",
        options: [
            "Debe pagar la totalidad de la sanción propuesta sin ningún beneficio",
            "La sanción se reduce al 40% del valor propuesto en el requerimiento especial",
            "La sanción se reduce al 50% del valor propuesto en el requerimiento especial",
            "La sanción se reduce al 75% del valor propuesto en el requerimiento especial"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 682 del Decreto 1165 de 2019 (Estatuto Aduanero), cuando el requerido acepta la infracción propuesta en el requerimiento especial aduanero, la sanción se reduce al 50% del valor propuesto en el requerimiento. Para acceder a este beneficio, el requerido debe, dentro del mes siguiente a la notificación del requerimiento especial aduanero: 1) Aceptar expresamente la infracción propuesta; 2) Presentar, si es el caso, la declaración de corrección liquidando y pagando los mayores tributos aduaneros y sanciones correspondientes; y 3) Pagar la sanción reducida al 50%. Es importante destacar que, según el mismo artículo, este beneficio no aplica cuando la infracción conlleva la aprehensión y decomiso de las mercancías, ni cuando se trata de reincidencia en la misma infracción dentro de los tres (3) años anteriores. Adicionalmente, si el requerido acepta parcialmente los hechos y la infracción propuesta, la reducción de la sanción solo aplicará respecto de lo aceptado."
    },
    {
        id: "fiscalizacion_aduanera_018",
        category: "fiscalizacion_aduanera",
        difficulty: "alta",
        text: "La DIAN ha iniciado un proceso de fiscalización aduanera a una empresa que ha importado mercancías bajo el régimen de Sistemas Especiales de Importación-Exportación (Plan Vallejo). Durante la investigación, la administración aduanera encuentra que la empresa no ha cumplido con los compromisos de exportación establecidos en el programa.",
        question: "¿Cuál es la consecuencia jurídica para el importador por el incumplimiento de los compromisos de exportación en el Plan Vallejo?",
        options: [
            "Solo debe pagar los tributos aduaneros correspondientes a las importaciones realizadas",
            "Debe pagar los tributos aduaneros correspondientes a las importaciones realizadas más una sanción del 10% del valor en aduana de las mercancías",
            "Se configura una causal de aprehensión y eventual decomiso de las mercancías importadas",
            "Debe pagar los tributos aduaneros correspondientes a las importaciones realizadas, más los intereses moratorios y una sanción del 100% del valor de los tributos"
        ],
        correctAnswer: 3,
        explanation: "De acuerdo con el artículo 640 del Decreto 1165 de 2019 (Estatuto Aduanero), cuando con ocasión del control posterior se establezca el incumplimiento de los compromisos de exportación en los Sistemas Especiales de Importación-Exportación (Plan Vallejo), se aplicará una sanción de multa equivalente al 100% de los tributos aduaneros correspondientes a la mercancía importada, que no fue objeto de exportación, sin perjuicio del pago de los tributos aduaneros a que haya lugar. Esta sanción aplica a los usuarios del Plan Vallejo, quienes se benefician de la exención o suspensión del pago de tributos aduaneros en sus importaciones, con el compromiso de utilizar las mercancías importadas en la producción de bienes o servicios para la exportación. El incumplimiento de este compromiso implica que deben pagar los tributos aduaneros que fueron exentos o suspendidos, más los intereses moratorios correspondientes y la sanción mencionada. Es importante destacar que este incumplimiento no configura por sí mismo una causal de aprehensión y decomiso, a menos que se configure alguna de las causales específicas establecidas en el artículo 647 del Estatuto Aduanero."
    },
    {
        id: "fiscalizacion_aduanera_019",
        category: "fiscalizacion_aduanera",
        difficulty: "media",
        text: "Durante un proceso de fiscalización aduanera, la DIAN encuentra que un importador ha declarado incorrectamente la descripción de las mercancías importadas, sin que esto afecte la clasificación arancelaria ni el valor declarado.",
        question: "¿Qué consecuencias enfrenta el importador según la normativa aduanera colombiana?",
        options: [
            "No enfrenta ninguna consecuencia porque no se afectó la clasificación arancelaria ni el valor declarado",
            "Debe presentar una declaración de corrección sin sanción",
            "Debe presentar una declaración de corrección y pagar una sanción del 10% del valor en aduana de las mercancías",
            "Se configura una causal de aprehensión y eventual decomiso de las mercancías"
        ],
        correctAnswer: 2,
        explanation: "De acuerdo con el artículo 639 del Decreto 1165 de 2019 (Estatuto Aduanero), cuando con ocasión del control posterior se encuentre que se ha incurrido en errores u omisiones en la declaración de importación que no conlleven a que la mercancía ostente una condición distinta a la declarada, se aplicará una sanción de multa equivalente al 10% del valor en aduana de las mercancías, sin perjuicio de la presentación de una declaración de corrección. La declaración incorrecta de la descripción de las mercancías, cuando no afecta la clasificación arancelaria ni el valor declarado, se considera un error u omisión que no conlleva a que la mercancía ostente una condición distinta a la declarada. Por lo tanto, el importador debe presentar una declaración de corrección y pagar la sanción mencionada. Es importante destacar que este error no configura por sí mismo una causal de aprehensión y decomiso, a menos que se configure alguna de las causales específicas establecidas en el artículo 647 del Estatuto Aduanero, como sería el caso si la descripción incorrecta se hubiera utilizado para eludir restricciones o prohibiciones a la importación de las mercancías."
    },
    {
        id: "fiscalizacion_aduanera_020",
        category: "fiscalizacion_aduanera",
        difficulty: "baja",
        text: "La DIAN ha notificado a un importador una liquidación oficial de revisión en la que modifica el valor en aduana declarado, lo que resulta en un mayor valor a pagar por concepto de tributos aduaneros.",
        question: "¿Qué ocurre si el importador no paga los mayores tributos aduaneros liquidados oficialmente dentro del plazo establecido?",
        options: [
            "La DIAN inicia el proceso de cobro coactivo para hacer efectivo el pago",
            "Las mercancías quedan automáticamente en abandono legal",
            "Se configura una causal de aprehensión y eventual decomiso de las mercancías",
            "El importador queda inhabilitado para realizar operaciones de comercio exterior por un año"
        ],
        correctAnswer: 0,
        explanation: "De acuerdo con el artículo 696 del Decreto 1165 de 2019 (Estatuto Aduanero), si el importador no paga los mayores tributos aduaneros liquidados oficialmente dentro del plazo establecido (diez días hábiles siguientes a la notificación de la liquidación oficial, según el artículo 692), la DIAN inicia el proceso de cobro coactivo para hacer efectivo el pago. Este proceso se rige por las disposiciones del Estatuto Tributario, específicamente por los artículos 823 y siguientes, que establecen el procedimiento administrativo de cobro coactivo. La DIAN, como entidad pública, tiene la facultad de cobrar directamente las obligaciones a su favor, sin necesidad de acudir a la jurisdicción ordinaria. El proceso incluye la notificación de un mandamiento de pago, la posibilidad de proponer excepciones, el decreto de medidas cautelares como el embargo y secuestro de bienes, y finalmente, si es necesario, el remate de los bienes para satisfacer la obligación. Es importante destacar que el no pago de los mayores tributos aduaneros no configura por sí mismo una causal de abandono legal ni de aprehensión y decomiso de las mercancías, ni implica la inhabilitación automática del importador para realizar operaciones de comercio exterior."
    }
];