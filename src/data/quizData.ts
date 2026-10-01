import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "¿Cuál es el papel bioquímico fundamental de la Vitamina K en los factores de la coagulación (II, VII, IX y X)?",
    options: {
      a: "Actúa como cofactor para la enzima gamma-glutamil carboxilasa que carboxila residuos de ácido glutámico.",
      b: "Rompe directamente el fibrinógeno para transformarlo en monómeros de fibrina en plasma.",
      c: "Inhibe la síntesis hepática de antitrombina III para acelerar la formación del tapón plaquetario."
    },
    correctAnswer: "a",
    rationale: "La vitamina K hidroquinona es el cofactor esencial para la gamma-glutamil carboxilasa hepática. Esta enzima añade un grupo carboxilo (-COOH) a los residuos de glutamato de los factores II, VII, IX y X, generando residuos de gamma-carboxiglutamato (Gla) capaces de unirse a iones Ca²⁺ y fosfolípidos plaquetarios.",
    topic: "Vitamina K & Bioquímica"
  },
  {
    id: 2,
    question: "¿A través de qué mecanismo farmacológico ejerce el Dicumarol (o warfarina) su efecto anticoagulante?",
    options: {
      a: "Bloquea los receptores de trombina en la superficie de las plaquetas activadas.",
      b: "Inhibe de forma competitiva a la enzima Vitamina K Epóxido Reductasa (VKORC1), impidiendo el reciclaje de vitamina K activa.",
      c: "Destruye proteolíticamente el fibrinógeno circulante en el torrente sanguíneo."
    },
    correctAnswer: "b",
    rationale: "El dicumarol y sus derivados análogos son antagonistas competitivos de la enzima VKORC1 (Vitamina K Epóxido Reductasa). Al bloquear esta reducción, la vitamina K queda atrapada en su forma inactiva de 2,3-epóxido, deteniendo la carboxilación de nuevos factores de coagulación.",
    topic: "Farmacología & Coagulación"
  },
  {
    id: 3,
    question: "En la cascada de coagulación, ¿qué enzima proteolítica activa cataliza la conversión directa de Protrombina en Trombina?",
    options: {
      a: "El plasminógeno activado por uroquinasa.",
      b: "El complejo protrombinasa formado por el Factor Xa, Factor Va, Ca²⁺ y fosfolípidos aniónicos.",
      c: "La ciclooxigenasa-1 (COX-1) endotelial."
    },
    correctAnswer: "b",
    rationale: "El factor Xa, junto a su cofactor el factor Va, iones de calcio (Ca²⁺) y fosfolípidos plaquetarios de membrana, ensambla el complejo protrombinasa en la superficie de las plaquetas, realizando la escisión proteolítica de protrombina (Factor II) para liberar trombina activa (Factor IIa).",
    topic: "Hemostasia Fisiológica"
  },
  {
    id: 4,
    question: "¿Cómo se produce el cambio estructural final que consolida un coágulo de sangre estable?",
    options: {
      a: "La trombina escinde fibrinopéptidos A y B del fibrinógeno, permitiendo la polimerización en fibrina, la cual es estabilizada covalentemente por el factor XIIIa.",
      b: "Las albúminas plasmáticas precipitan por efecto del pH ácido formando una malla insoluble.",
      c: "Los glóbulos rojos se deshidratan y se aglutinan sin intervención de proteínas fibrosas."
    },
    correctAnswer: "a",
    rationale: "La trombina corta los fibrinopéptidos A y B del fibrinógeno soluble, exponiendo sitios de unión que se polimerizan espontáneamente en hebras de fibrina. Luego, el factor XIIIa (transglutaminasa activada por trombina) forma enlaces cruzados covalentes entre residuos de lisina y glutamina, volviendo el coágulo elástico e insoluble.",
    topic: "Mecanismo de Fibrinoformación"
  },
  {
    id: 5,
    question: "¿Qué hormonas son sintetizadas específicamente por la Adenohipófisis (lóbulo anterior de la hipófisis)?",
    options: {
      a: "Vasopresina (ADH) y Oxitocina.",
      b: "Hormona del crecimiento (STH/GH), Prolactina, ACTH, TSH, FSH y LH.",
      c: "Calcitonina, Parathormona y Melatonina."
    },
    correctAnswer: "b",
    rationale: "La adenohipófisis sintetiza y secreta hormonas tróficas cruciales: STH (crecimiento), prolactina (lactogénesis), ACTH (corteza suprarrenal), TSH (tiroides) y gonadotropinas (FSH y LH). La vasopresina y oxitocina se sintetizan en el hipotálamo y sólo se almacenan en la neurohipófisis.",
    topic: "Eje Hipofisario"
  },
  {
    id: 6,
    question: "¿Cuál es el sitio real de síntesis de la vasopresina (ADH) y la oxitocina antes de su liberación neurohipofisaria?",
    options: {
      a: "Los somatotropos del lóbulo anterior de la hipófisis.",
      b: "Los núcleos supraóptico y paraventricular del hipotálamo.",
      c: "La corteza de las glándulas suprarrenales."
    },
    correctAnswer: "b",
    rationale: "La neurohipófisis no sintetiza hormonas; actúa como reservorio neurohemal. La ADH y la oxitocina se sintetizan como preprohormonas en los somas de las neuronas magnocelulares de los núcleos supraóptico y paraventricular del hipotálamo y viajan por transporte axoplásmico hacia la neurohipófisis.",
    topic: "Neuroendocrinología"
  },
  {
    id: 7,
    question: "La deficiencia congénita severa de hormonas tiroideas (T3/T4) durante el desarrollo intrauterino e infantil temprano produce:",
    options: {
      a: "Cretinismo, caracterizado por retraso psicomotor severo, baja estatura y defectos del desarrollo neurológico.",
      b: "Acromegalia con engrosamiento de los huesos de manos, pies y rostro.",
      c: "Tetania muscular con espasmos carpopedales por hipercalcemia."
    },
    correctAnswer: "a",
    rationale: "Las hormonas tiroideas dependientes de yodo (T3 y T4) son indispensables para la mielinización cerebral y el crecimiento óseo normal. Su déficit congénito produce cretinismo (hipotiroidismo congénito). Por su parte, la tetania es causada por hipocalcemia ligada al déficit de parathormona (PTH).",
    topic: "Tiroides y Fisiopatología"
  },
  {
    id: 8,
    question: "¿Cuál es el efecto coordinado de la Parathormona (PTH) sobre los osteoclastos y el balance del calcio plasmático?",
    options: {
      a: "Inhibe la resorción ósea para almacenar calcio y fosfato en la matriz colágena.",
      b: "Estimula la resorción ósea osteoclástica (vía RANKL) y la reabsorción renal de Ca²⁺, elevando la calcemia.",
      c: "Promueve la excreción urinaria acelerada de calcio para prevenir cálculos renales."
    },
    correctAnswer: "b",
    rationale: "La PTH secretada por las glándulas paratiroides actúa en respuesta a la hipocalcemia: induce en osteoblastos la expresión de RANKL, estimulando a los osteoclastos a disolver hidroxiapatita para liberar Ca²⁺ a la sangre, al tiempo que activa la síntesis renal de calcitriol (1,25-(OH)₂-vitamina D).",
    topic: "Homeostasis del Calcio"
  },
  {
    id: 9,
    question: "¿Cómo interactúan la Insulina y el Glucagón para mantener la normoglucemia (70-100 mg/dL)?",
    options: {
      a: "Ambas son hormonas hiperglucemiantes secretadas por los acinos exocrinos del páncreas.",
      b: "La insulina (células beta) facilita la captación de glucosa celular y glucogenogénesis; el glucagón (células alfa) activa la glucogenólisis hepática y gluconeogénesis.",
      c: "El glucagón estimula los transportadores GLUT4 musculares mientras la insulina los bloquea."
    },
    correctAnswer: "b",
    rationale: "El páncreas endocrino opera en balance contra-regulador: en estado postprandial, la insulina estimula la translocación de GLUT4 y el almacenamiento energético; en ayunas, el glucagón activa la vía AMPc/PKA para liberar glucosa desde el hígado mediante glucogenólisis y gluconeogénesis.",
    topic: "Páncreas Endocrino"
  },
  {
    id: 10,
    question: "Respecto a la glándula suprarrenal, ¿qué secreta la médula frente al estrés agudo versus la corteza frente al estrés crónico?",
    options: {
      a: "La médula secreta catecolaminas (adrenalina/noradrenalina); la corteza secreta esteroides (cortisol y aldosterona).",
      b: "La médula secreta melatonina y prolactina; la corteza secreta exclusivamente renina y angiotensina.",
      c: "La médula secreta glucagón de choque; la corteza secreta calcitonina reguladora."
    },
    correctAnswer: "a",
    rationale: "La médula suprarrenal (derivada de la cresta neural) libera catecolaminas (adrenalina y noradrenalina) desencadenando la respuesta simpática rápida 'lucha o huida'. La corteza (mesodérmica) produce mineralocorticoides (aldosterona) en la zona glomerular, glucocorticoides (cortisol) en la zona fascicular y andrógenos en la zona reticular.",
    topic: "Eje Suprarrenal"
  }
];
