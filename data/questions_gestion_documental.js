// Preguntas sobre Gestión Documental
const questions_gestion_documental = [
    {
        id: "documental_001",
        category: "gestion_documental",
        difficulty: "baja",
        text: "Un funcionario de la DIAN recibe un documento físico relacionado con una investigación tributaria que debe ser incorporado al expediente digital correspondiente.",
        question: "Según los procedimientos de gestión documental de la DIAN, ¿cuál es el primer paso que debe seguir el funcionario?",
        options: [
            "Archivar el documento físico en una carpeta personal",
            "Registrar el documento en el sistema de gestión documental institucional",
            "Enviar el documento por correo electrónico a su superior inmediato",
            "Hacer una copia del documento y destruir el original"
        ],
        correctAnswer: 1,
        explanation: "Según el Manual de Gestión Documental de la DIAN (actualizado en 2024) y en cumplimiento de la Ley 594 de 2000 (Ley General de Archivos), el primer paso que debe seguir un funcionario al recibir un documento físico que debe incorporarse a un expediente digital es registrarlo en el sistema de gestión documental institucional. Este registro garantiza la trazabilidad del documento desde su recepción y permite asignarle un número único de radicado que servirá para su posterior seguimiento. La Circular 000018 de 2023 de la DIAN establece específicamente que todo documento físico recibido debe ser registrado en el sistema de gestión documental antes de cualquier otro trámite, incluyendo su digitalización e incorporación al expediente correspondiente."
    },
    {
        id: "documental_002",
        category: "gestion_documental",
        difficulty: "media",
        text: "En la Dirección Seccional de Impuestos de Medellín se está realizando una transferencia documental de archivos de gestión al archivo central.",
        question: "Según la normativa archivística aplicable a la DIAN, ¿qué instrumento es indispensable para realizar correctamente esta transferencia?",
        options: [
            "Formato Único de Inventario Documental (FUID)",
            "Tabla de Valoración Documental (TVD)",
            "Programa de Gestión Documental (PGD)",
            "Cuadro de Clasificación Documental (CCD)"
        ],
        correctAnswer: 0,
        explanation: "Según la normativa archivística aplicable a la DIAN, el Formato Único de Inventario Documental (FUID) es el instrumento indispensable para realizar correctamente una transferencia documental del archivo de gestión al archivo central. Este formato, establecido por el Archivo General de la Nación y adoptado por la DIAN mediante la Resolución 000045 de 2022, permite registrar de manera detallada cada uno de los documentos que se transfieren, incluyendo su identificación, fechas extremas, unidades de conservación y ubicación. El Acuerdo 042 de 2002 del Archivo General de la Nación establece la obligatoriedad del uso del FUID para las transferencias documentales en todas las entidades públicas. La Circular 000029 de 2023 de la DIAN refuerza esta disposición, estableciendo que ninguna transferencia documental puede realizarse sin el diligenciamiento completo y correcto del FUID."
    },
    {
        id: "documental_003",
        category: "gestion_documental",
        difficulty: "alta",
        text: "La Subdirección de Gestión de Recursos Físicos de la DIAN está actualizando las Tablas de Retención Documental (TRD) debido a cambios en la estructura organizacional de la entidad.",
        question: "De acuerdo con la normativa archivística vigente, ¿qué instancia debe aprobar las Tablas de Retención Documental actualizadas antes de su implementación?",
        options: [
            "El Director General de la DIAN",
            "El Comité Institucional de Gestión y Desempeño",
            "El Archivo General de la Nación",
            "El Ministerio de Hacienda y Crédito Público"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con la normativa archivística vigente, específicamente el Decreto 1080 de 2015 (modificado por el Decreto 1499 de 2017) y el Acuerdo 004 de 2019 del Archivo General de la Nación, el Comité Institucional de Gestión y Desempeño es la instancia que debe aprobar las Tablas de Retención Documental (TRD) actualizadas antes de su implementación. Este comité, que asumió las funciones del antiguo Comité Interno de Archivo según lo establecido en el Decreto 1499 de 2017, es el responsable de aprobar las herramientas archivísticas de la entidad. La Resolución 000132 de 2023 de la DIAN establece específicamente que el Comité Institucional de Gestión y Desempeño debe aprobar las TRD antes de su envío al Archivo General de la Nación para su convalidación. Una vez aprobadas internamente y convalidadas por el AGN, las TRD pueden ser implementadas mediante acto administrativo expedido por el Director General de la DIAN."
    },
    {
        id: "documental_004",
        category: "gestion_documental",
        difficulty: "media",
        text: "Un funcionario de la DIAN necesita consultar un expediente de fiscalización que fue cerrado hace tres años.",
        question: "Según el ciclo vital de los documentos y las Tablas de Retención Documental de la DIAN, ¿dónde debería estar ubicado este expediente?",
        options: [
            "En el archivo de gestión de la dependencia",
            "En el archivo central de la entidad",
            "En el archivo histórico",
            "En el archivo personal del funcionario que llevó el caso"
        ],
        correctAnswer: 1,
        explanation: "Según el ciclo vital de los documentos y las Tablas de Retención Documental (TRD) de la DIAN, actualizadas mediante la Resolución 000045 de 2022, un expediente de fiscalización cerrado hace tres años debería estar ubicado en el archivo central de la entidad. De acuerdo con las TRD vigentes, los expedientes de fiscalización tienen un tiempo de retención en el archivo de gestión de dos años contados a partir de su cierre, después de los cuales deben ser transferidos al archivo central donde permanecen según los tiempos establecidos en las TRD (generalmente entre 8 y 10 años adicionales). La Circular 000029 de 2023 de la DIAN sobre 'Lineamientos para la Organización de Archivos' confirma estos plazos y establece los procedimientos para la consulta de expedientes ubicados en el archivo central."
    },
    {
        id: "documental_005",
        category: "gestion_documental",
        difficulty: "baja",
        text: "Un funcionario de la DIAN ha finalizado un trámite y debe archivar la documentación física correspondiente.",
        question: "Según las normas de gestión documental, ¿cómo debe organizarse la documentación dentro de una carpeta?",
        options: [
            "Por orden alfabético según el asunto",
            "Por orden de importancia de los documentos",
            "Por orden cronológico, del documento más reciente al más antiguo",
            "Por orden cronológico, del documento más antiguo al más reciente"
        ],
        correctAnswer: 3,
        explanation: "Según las normas de gestión documental establecidas en el Acuerdo 042 de 2002 del Archivo General de la Nación y adoptadas por la DIAN en su Manual de Gestión Documental (actualizado en 2024), la documentación dentro de una carpeta debe organizarse por orden cronológico, del documento más antiguo al más reciente. Este método de ordenación permite seguir la secuencia natural del trámite y facilita la comprensión del expediente. La Circular 000018 de 2023 de la DIAN sobre 'Lineamientos para la Organización de Expedientes' refuerza esta disposición, estableciendo que la ordenación cronológica ascendente (del más antiguo al más reciente) es obligatoria para todos los expedientes físicos y electrónicos de la entidad, garantizando así la integridad de la secuencia documental y facilitando su consulta."
    },
    {
        id: "documental_006",
        category: "gestion_documental",
        difficulty: "alta",
        text: "La DIAN está implementando un Sistema de Gestión de Documentos Electrónicos de Archivo (SGDEA) para la gestión de sus expedientes digitales.",
        question: "Según la normativa archivística colombiana, ¿qué característica es esencial para que un SGDEA garantice el valor probatorio de los documentos electrónicos a lo largo del tiempo?",
        options: [
            "Capacidad de almacenamiento ilimitada",
            "Interfaz de usuario intuitiva y amigable",
            "Trazabilidad de todas las acciones realizadas sobre los documentos",
            "Velocidad de procesamiento y respuesta"
        ],
        correctAnswer: 2,
        explanation: "Según la normativa archivística colombiana, específicamente el Decreto 2609 de 2012 (compilado en el Decreto 1080 de 2015) y el Modelo de Requisitos para la Gestión de Documentos Electrónicos de Archivo (Moreq) adoptado por el Archivo General de la Nación, la trazabilidad de todas las acciones realizadas sobre los documentos es una característica esencial para que un SGDEA garantice el valor probatorio de los documentos electrónicos a lo largo del tiempo. Esta trazabilidad implica el registro detallado de quién, cuándo y qué acciones se realizaron sobre cada documento (creación, modificación, consulta, etc.), creando una cadena de custodia digital verificable. La Resolución 000132 de 2023 de la DIAN establece específicamente que el SGDEA implementado debe garantizar la trazabilidad completa de los documentos electrónicos para mantener su valor probatorio, en cumplimiento de lo establecido en la Ley 527 de 1999 (modificada por la Ley 2213 de 2022) sobre mensajes de datos y firmas electrónicas."
    },
    {
        id: "documental_007",
        category: "gestion_documental",
        difficulty: "media",
        text: "Un funcionario de la DIAN necesita digitalizar un conjunto de documentos físicos para incorporarlos a un expediente electrónico de fiscalización.",
        question: "Según los estándares de digitalización establecidos por la DIAN, ¿qué formato de archivo es el recomendado para la preservación a largo plazo de estos documentos digitalizados?",
        options: [
            "JPEG (.jpg)",
            "PDF/A (.pdf)",
            "Word (.docx)",
            "TIFF sin compresión (.tif)"
        ],
        correctAnswer: 1,
        explanation: "Según los estándares de digitalización establecidos por la DIAN en su Programa de Gestión Documental (actualizado en 2024) y en concordancia con las recomendaciones del Archivo General de la Nación, el formato PDF/A es el recomendado para la preservación a largo plazo de documentos digitalizados. Este formato, basado en la norma ISO 19005, está diseñado específicamente para el archivo y preservación a largo plazo de documentos electrónicos, ya que garantiza que los documentos puedan ser reproducidos exactamente igual en el futuro, independientemente del software utilizado. La Circular 000037 de 2023 de la DIAN sobre 'Estándares para la Digitalización de Documentos' establece específicamente que todos los documentos digitalizados con fines de archivo deben ser convertidos a formato PDF/A para garantizar su preservación y accesibilidad a largo plazo."
    },
    {
        id: "documental_008",
        category: "gestion_documental",
        difficulty: "baja",
        text: "Un funcionario de la DIAN está preparando una carpeta física para transferirla al archivo central.",
        question: "Según las normas de gestión documental, ¿qué elemento debe incluirse obligatoriamente en la identificación externa de la carpeta?",
        options: [
            "Nombre del funcionario responsable",
            "Código de barras institucional",
            "Código de la serie o subserie documental según la TRD",
            "Sello de confidencialidad"
        ],
        correctAnswer: 2,
        explanation: "Según las normas de gestión documental establecidas en el Acuerdo 042 de 2002 del Archivo General de la Nación y adoptadas por la DIAN en su Manual de Gestión Documental (actualizado en 2024), el código de la serie o subserie documental según la Tabla de Retención Documental (TRD) debe incluirse obligatoriamente en la identificación externa de la carpeta. Este código permite identificar el tipo documental y su ubicación dentro del cuadro de clasificación documental de la entidad, facilitando su organización, recuperación y aplicación de los tiempos de retención. La Circular 000029 de 2023 de la DIAN sobre 'Lineamientos para la Organización de Archivos' establece específicamente que todas las carpetas deben estar identificadas con el código de serie o subserie según la TRD vigente, además de otros elementos como el nombre de la dependencia, las fechas extremas y el número de folios."
    },
    {
        id: "documental_009",
        category: "gestion_documental",
        difficulty: "alta",
        text: "La DIAN está implementando un proceso de digitalización certificada para ciertos documentos tributarios con el fin de eliminar los originales físicos.",
        question: "Según la normativa archivística colombiana, ¿qué requisito es indispensable para que la digitalización certificada permita la eliminación legal de los documentos físicos originales?",
        options: [
            "Que los documentos tengan más de 10 años de antigüedad",
            "Que el proceso cuente con un protocolo de digitalización aprobado por el Comité Institucional de Gestión y Desempeño y cumpla con los requisitos técnicos y jurídicos establecidos",
            "Que los documentos hayan sido previamente microfilmados",
            "Que los documentos no contengan firmas manuscritas"
        ],
        correctAnswer: 1,
        explanation: "Según la normativa archivística colombiana, específicamente el Acuerdo 006 de 2014 y el Acuerdo 003 de 2015 del Archivo General de la Nación, para que la digitalización certificada permita la eliminación legal de los documentos físicos originales es indispensable que el proceso cuente con un protocolo de digitalización aprobado por el Comité Institucional de Gestión y Desempeño y cumpla con los requisitos técnicos y jurídicos establecidos. Estos requisitos incluyen el uso de firmas digitales o electrónicas, estampado cronológico, metadatos específicos y procedimientos documentados que garanticen la autenticidad, integridad, fiabilidad y disponibilidad de los documentos digitalizados. La Resolución 000132 de 2023 de la DIAN establece específicamente que cualquier proceso de digitalización con fines de sustitución del soporte físico debe ser previamente aprobado por el Comité Institucional de Gestión y Desempeño y debe cumplir con todos los requisitos establecidos en la normativa archivística vigente, incluyendo la implementación de controles técnicos y procedimentales que garanticen el valor probatorio de los documentos digitalizados."
    },
    {
        id: "documental_010",
        category: "gestion_documental",
        difficulty: "media",
        text: "Un funcionario de la DIAN encuentra documentos con hongos en un archivo de gestión.",
        question: "Según los protocolos de conservación documental, ¿cuál es la primera acción que debe realizar el funcionario?",
        options: [
            "Limpiar los documentos con un paño húmedo",
            "Digitalizar inmediatamente los documentos",
            "Aislar los documentos afectados y reportar al área de gestión documental",
            "Aplicar fungicida directamente sobre los documentos"
        ],
        correctAnswer: 2,
        explanation: "Según los protocolos de conservación documental establecidos en el Acuerdo 006 de 2014 del Archivo General de la Nación y adoptados por la DIAN en su Sistema Integrado de Conservación (actualizado en 2023), la primera acción que debe realizar un funcionario al encontrar documentos con hongos es aislar los documentos afectados y reportar inmediatamente al área de gestión documental. Esta medida busca evitar la contaminación de otros documentos y proteger la salud de los funcionarios, ya que los hongos pueden representar riesgos biológicos. La Circular 000037 de 2023 de la DIAN sobre 'Lineamientos para la Conservación Documental' establece específicamente que ante la presencia de biodeterioro (hongos, insectos, etc.) en documentos, estos deben ser aislados en bolsas plásticas herméticas y se debe notificar inmediatamente al Grupo Interno de Trabajo de Gestión Documental, quien activará el protocolo correspondiente que incluye la intervención de personal especializado en conservación documental."
    },
    {
        id: "documental_011",
        category: "gestion_documental",
        difficulty: "baja",
        text: "Un funcionario de la DIAN necesita foliar un expediente antes de transferirlo al archivo central.",
        question: "Según las normas de gestión documental, ¿cómo debe realizarse correctamente la foliación de un expediente?",
        options: [
            "Numerando todas las páginas en la esquina inferior izquierda con lápiz",
            "Numerando todas las páginas en la esquina superior derecha con bolígrafo rojo",
            "Numerando todas las páginas en la esquina superior derecha con lápiz de mina negra",
            "Numerando solo las páginas impares en la esquina superior derecha con bolígrafo negro"
        ],
        correctAnswer: 2,
        explanation: "Según las normas de gestión documental establecidas en el Acuerdo 042 de 2002 del Archivo General de la Nación y la Guía de Foliación de Archivos del AGN, adoptadas por la DIAN en su Manual de Gestión Documental (actualizado en 2024), la foliación correcta de un expediente debe realizarse numerando todas las páginas en la esquina superior derecha con lápiz de mina negra. Esta práctica permite la corrección en caso de errores sin dañar el documento y garantiza la visibilidad de la numeración. La Circular 000029 de 2023 de la DIAN sobre 'Lineamientos para la Organización de Archivos' establece específicamente que la foliación debe realizarse en la esquina superior derecha, en el mismo sentido del texto, utilizando lápiz de mina negra HB o B, con números arábigos claros y legibles, sin enmendaduras ni tachones."
    },
    {
        id: "documental_012",
        category: "gestion_documental",
        difficulty: "alta",
        text: "La DIAN está desarrollando su Plan de Preservación Digital a Largo Plazo como parte del Sistema Integrado de Conservación.",
        question: "Según la normativa archivística vigente, ¿qué estrategia de preservación digital es la más recomendada para garantizar el acceso a documentos electrónicos a lo largo del tiempo, independientemente de los cambios tecnológicos?",
        options: [
            "Backup periódico de los archivos en discos duros externos",
            "Migración y emulación planificadas",
            "Impresión de todos los documentos electrónicos",
            "Encriptación avanzada de los archivos"
        ],
        correctAnswer: 1,
        explanation: "Según la normativa archivística vigente, específicamente el Acuerdo 006 de 2014 del Archivo General de la Nación y la Guía para la Elaboración e Implementación del Sistema Integrado de Conservación del AGN, la estrategia de preservación digital más recomendada para garantizar el acceso a documentos electrónicos a lo largo del tiempo es la migración y emulación planificadas. La migración implica transferir periódicamente la información digital de una configuración de hardware/software a otra, o de una generación tecnológica a otra, mientras que la emulación permite reproducir el comportamiento de plataformas obsoletas en sistemas actuales. La Resolución 000132 de 2023 de la DIAN, que adopta el Plan de Preservación Digital a Largo Plazo, establece específicamente que la entidad debe implementar estrategias combinadas de migración y emulación según los tipos documentales, siguiendo las recomendaciones del modelo OAIS (ISO 14721) y las directrices del Archivo General de la Nación para garantizar la accesibilidad, legibilidad e integridad de los documentos electrónicos a lo largo del tiempo."
    },
    {
        id: "documental_013",
        category: "gestion_documental",
        difficulty: "media",
        text: "Un funcionario de la DIAN necesita consultar un concepto jurídico emitido hace cinco años, pero no recuerda el número exacto del documento ni la fecha precisa.",
        question: "¿Qué instrumento archivístico le permitiría localizar más eficientemente este documento?",
        options: [
            "Tabla de Retención Documental (TRD)",
            "Cuadro de Clasificación Documental (CCD)",
            "Inventario Documental",
            "Banco Terminológico"
        ],
        correctAnswer: 2,
        explanation: "El Inventario Documental es el instrumento archivístico que permitiría localizar más eficientemente un concepto jurídico cuando no se recuerda el número exacto ni la fecha precisa. Este instrumento, regulado por el Acuerdo 038 de 2002 del Archivo General de la Nación, registra de manera detallada cada uno de los documentos o expedientes que conforman un archivo, incluyendo su descripción, ubicación y características principales. La Circular 000029 de 2023 de la DIAN sobre 'Lineamientos para la Organización de Archivos' establece que los inventarios documentales deben mantenerse actualizados y deben incluir campos de descripción que faciliten la recuperación de la información, como asunto, palabras clave, dependencia productora y fechas extremas. A diferencia de otros instrumentos como las TRD o el CCD, que establecen la estructura y clasificación documental, el inventario permite buscar documentos específicos por diversos criterios, facilitando la localización de documentos cuando no se cuenta con datos precisos de identificación."
    },
    {
        id: "documental_014",
        category: "gestion_documental",
        difficulty: "baja",
        text: "Un funcionario de la DIAN necesita enviar un documento oficial a otra entidad pública.",
        question: "Según las normas de gestión documental, ¿qué elemento es indispensable para garantizar la trazabilidad de este envío?",
        options: [
            "Utilizar un sobre con el logo institucional",
            "Generar un número de radicado de salida en el sistema de gestión documental",
            "Enviar el documento por correo certificado",
            "Hacer una copia del documento para el archivo personal"
        ],
        correctAnswer: 1,
        explanation: "Según las normas de gestión documental establecidas en el Acuerdo 060 de 2001 del Archivo General de la Nación y adoptadas por la DIAN en su Manual de Gestión Documental (actualizado en 2024), el elemento indispensable para garantizar la trazabilidad de un envío documental es generar un número de radicado de salida en el sistema de gestión documental. Este número único permite identificar, seguir y controlar el documento durante todo su ciclo, desde su producción hasta su entrega al destinatario. La Circular 000018 de 2023 de la DIAN sobre 'Lineamientos para la Gestión de Comunicaciones Oficiales' establece específicamente que toda comunicación oficial que salga de la entidad debe ser radicada en el sistema de gestión documental, independientemente del medio de envío utilizado, para garantizar su registro, control y seguimiento."
    },
    {
        id: "documental_015",
        category: "gestion_documental",
        difficulty: "alta",
        text: "La DIAN está implementando la gestión de documentos electrónicos de archivo y debe garantizar su autenticidad e integridad.",
        question: "Según la normativa archivística colombiana, ¿qué mecanismo técnico es el más adecuado para garantizar la autenticidad e integridad de un documento electrónico de archivo con valor probatorio?",
        options: [
            "Copia de seguridad en la nube",
            "Firma electrónica o digital con estampado cronológico",
            "Conversión a formato PDF",
            "Impresión y firma manuscrita del documento"
        ],
        correctAnswer: 1,
        explanation: "Según la normativa archivística colombiana, específicamente el Decreto 2609 de 2012 (compilado en el Decreto 1080 de 2015) y la Ley 527 de 1999 (modificada por la Ley 2213 de 2022), el mecanismo técnico más adecuado para garantizar la autenticidad e integridad de un documento electrónico de archivo con valor probatorio es la firma electrónica o digital con estampado cronológico. La firma digital, basada en infraestructura de clave pública (PKI), permite verificar la identidad del firmante y garantiza que el documento no ha sido alterado después de su firma, mientras que el estampado cronológico certifica la fecha y hora exactas de la firma o creación del documento. La Resolución 000132 de 2023 de la DIAN establece específicamente que los documentos electrónicos con valor probatorio deben implementar firmas digitales o electrónicas avanzadas con estampado cronológico, en cumplimiento de lo establecido en la Guía de Gestión de Documentos y Expedientes Electrónicos del Archivo General de la Nación y el Ministerio de Tecnologías de la Información y las Comunicaciones."
    },
    {
        id: "documental_016",
        category: "gestion_documental",
        difficulty: "media",
        text: "Un funcionario de la DIAN está organizando un expediente híbrido (con documentos físicos y electrónicos) relacionado con un proceso de fiscalización.",
        question: "Según las directrices de gestión documental, ¿cómo debe proceder para mantener la integridad del expediente híbrido?",
        options: [
            "Imprimir todos los documentos electrónicos para tener un expediente completamente físico",
            "Digitalizar todos los documentos físicos y eliminar los originales",
            "Mantener separados los documentos físicos y electrónicos sin ninguna referencia cruzada",
            "Crear referencias cruzadas entre los documentos físicos y electrónicos, manteniendo un índice unificado del expediente"
        ],
        correctAnswer: 3,
        explanation: "Según las directrices de gestión documental establecidas en el Acuerdo 002 de 2014 del Archivo General de la Nación y la Guía para la Gestión de Documentos y Expedientes Electrónicos del AGN y MinTIC, para mantener la integridad de un expediente híbrido se debe crear referencias cruzadas entre los documentos físicos y electrónicos, manteniendo un índice unificado del expediente. Este índice debe relacionar todos los documentos que componen el expediente, independientemente de su soporte, indicando su ubicación (física o electrónica) y garantizando la integridad, completitud y orden del expediente. La Circular 000037 de 2023 de la DIAN sobre 'Lineamientos para la Gestión de Expedientes Híbridos' establece específicamente que todos los expedientes que contengan documentos en diferentes soportes deben contar con un índice electrónico que relacione todos los documentos y sus soportes, incluyendo referencias cruzadas que permitan mantener la unidad e integridad del expediente."
    },
    {
        id: "documental_017",
        category: "gestion_documental",
        difficulty: "baja",
        text: "Un funcionario de la DIAN necesita consultar la definición y alcance de una serie documental específica de la entidad.",
        question: "¿Qué instrumento archivístico debe consultar para obtener esta información?",
        options: [
            "Programa de Gestión Documental (PGD)",
            "Tabla de Retención Documental (TRD)",
            "Banco Terminológico",
            "Plan Institucional de Archivos (PINAR)"
        ],
        correctAnswer: 2,
        explanation: "El Banco Terminológico es el instrumento archivístico que debe consultar un funcionario para obtener la definición y alcance de una serie documental específica. Este instrumento, establecido en el Decreto 1080 de 2015 y desarrollado según las directrices del Archivo General de la Nación, contiene la denominación, definición y alcance de las series y subseries documentales de una entidad, así como los tipos documentales que las conforman. La Circular 000029 de 2023 de la DIAN sobre 'Instrumentos Archivísticos' establece específicamente que el Banco Terminológico es la herramienta que normaliza la denominación de series, subseries y tipos documentales, proporcionando definiciones claras sobre su alcance y contenido, por lo que es el instrumento idóneo para resolver dudas conceptuales sobre la documentación institucional."
    },
    {
        id: "documental_018",
        category: "gestion_documental",
        difficulty: "alta",
        text: "La DIAN está implementando un proceso de valoración documental para determinar los valores primarios y secundarios de sus series documentales.",
        question: "Según la normativa archivística, ¿qué criterio NO se considera para determinar el valor secundario de un documento?",
        options: [
            "Valor histórico para la investigación",
            "Valor científico o tecnológico",
            "Valor fiscal o contable",
            "Valor cultural o patrimonial"
        ],
        correctAnswer: 2,
        explanation: "Según la normativa archivística, específicamente el Acuerdo 003 de 2015 del Archivo General de la Nación y el Mini-manual de Tablas de Retención y Transferencias Documentales del AGN, el valor fiscal o contable NO se considera para determinar el valor secundario de un documento, sino que es un valor primario. Los valores primarios son aquellos que tienen los documentos mientras sirven a la institución productora y al iniciador, destinatario o beneficiario, y se relacionan con el trámite o asunto que motivó su creación (administrativo, legal, fiscal, contable). Por otro lado, los valores secundarios son aquellos que adquieren los documentos una vez pierden sus valores primarios y tienen utilidad cultural, histórica o científica. La Resolución 000132 de 2023 de la DIAN, que adopta la metodología de valoración documental de la entidad, establece claramente la distinción entre valores primarios (entre los que se incluye el fiscal o contable) y valores secundarios (histórico, científico, cultural o patrimonial)."
    },
    {
        id: "documental_019",
        category: "gestion_documental",
        difficulty: "media",
        text: "Un funcionario de la DIAN debe preparar un expediente para una transferencia secundaria al Archivo General de la Nación.",
        question: "Según la normativa archivística, ¿qué requisito es indispensable para realizar esta transferencia?",
        options: [
            "Que los documentos tengan al menos 5 años de antigüedad",
            "Que los documentos hayan sido previamente digitalizados",
            "Que los documentos hayan sido valorados y se haya determinado que poseen valores secundarios",
            "Que los documentos estén relacionados con la historia institucional de la DIAN"
        ],
        correctAnswer: 2,
        explanation: "Según la normativa archivística, específicamente el Acuerdo 002 de 2014 y el Acuerdo 004 de 2019 del Archivo General de la Nación, el requisito indispensable para realizar una transferencia secundaria es que los documentos hayan sido valorados y se haya determinado que poseen valores secundarios (históricos, científicos, culturales). Esta valoración debe estar reflejada en las Tablas de Retención Documental (TRD) o Tablas de Valoración Documental (TVD) debidamente aprobadas y convalidadas. La Circular 000037 de 2023 de la DIAN sobre 'Lineamientos para Transferencias Documentales' establece específicamente que para realizar transferencias secundarias al Archivo General de la Nación, los documentos deben haber cumplido su tiempo de retención en el archivo central y haber sido valorados como de conservación total por sus valores secundarios, siguiendo los procedimientos establecidos en la normativa archivística vigente."
    },
    {
        id: "documental_020",
        category: "gestion_documental",
        difficulty: "baja",
        text: "Un funcionario de la DIAN encuentra documentos con ganchos metálicos (clips, grapas) que están oxidados y dañando los papeles.",
        question: "Según las normas de conservación documental, ¿cuál es la acción correcta que debe realizar?",
        options: [
            "Dejar los ganchos metálicos pues son parte integral del documento",
            "Retirar cuidadosamente los ganchos metálicos y reemplazarlos por ganchos plásticos si es necesario",
            "Aplicar aceite a los ganchos metálicos para evitar más oxidación",
            "Perforar los documentos y archivarlos en una carpeta con ganchos de plástico"
        ],
        correctAnswer: 1,
        explanation: "Según las normas de conservación documental establecidas en el Acuerdo 006 de 2014 del Archivo General de la Nación y adoptadas por la DIAN en su Sistema Integrado de Conservación (actualizado en 2023), la acción correcta ante documentos con ganchos metálicos oxidados es retirarlos cuidadosamente y reemplazarlos por ganchos plásticos si es necesario mantener unidos los documentos. Los elementos metálicos como clips y grapas se oxidan con el tiempo y pueden causar daños irreversibles a los documentos, como manchas y rasgaduras. La Circular 000037 de 2023 de la DIAN sobre 'Lineamientos para la Conservación Documental' establece específicamente que durante los procesos de organización documental se deben retirar todos los elementos metálicos (grapas, clips, etc.) y reemplazarlos, en caso necesario, por elementos plásticos o de materiales inertes que no causen deterioro a los documentos."
    }
];