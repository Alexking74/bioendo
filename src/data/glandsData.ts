import { Gland } from '../types';

export const glandsData: Gland[] = [
  {
    id: 'hipofisis',
    name: 'Hipófisis (Glándula Pituitaria)',
    subtitle: 'La Glándula Maestra del Eje Neuroendocrino',
    location: 'Silla turca del hueso esfenoides, en la base del encéfalo, conectada al hipotálamo por el tallo hipofisario.',
    iconName: 'Brain',
    primaryRole: 'Orquesta y regula la actividad de la mayoría de las demás glándulas endocrinas periféricas mediante hormonas tróficas.',
    lobesOrRegions: [
      {
        regionName: 'Adenohipófisis (Lóbulo Anterior)',
        description: 'Tejido epitelial glandular originado de la bolsa de Rathke. Sintetiza y secreta hormonas bajo control de factores liberadores hipotalámicos.',
        hormones: [
          {
            name: 'Somatotropina (Hormona del Crecimiento)',
            acronym: 'STH / GH',
            targetOrgan: 'Hígado (síntesis de IGF-1), huesos, cartílagos y músculo.',
            function: 'Estimula el crecimiento longitudinal óseo, síntesis proteica, lipólisis y gluconeogénesis.',
            regulation: 'Estimulada por GHRH hipotalámica e inhibida por Somatostatina (GHIH) e IGF-1.'
          },
          {
            name: 'Gonadotropinas',
            acronym: 'FSH y LH',
            targetOrgan: 'Gónadas (Ovarios y Testículos).',
            function: 'FSH estimula la foliculogénesis ovárica y espermatogénesis. LH desencadena la ovulación y síntesis de testosterona.',
            regulation: 'Controladas pulsátilmente por GnRH hipotalámica y retroalimentación de esteroides gonadales.'
          },
          {
            name: 'Corticotropina (Hormona Adrenocorticotropa)',
            acronym: 'ACTH',
            targetOrgan: 'Corteza suprarrenal (zonas fascicular y reticular).',
            function: 'Estimula la esteroidogénesis y liberación de glucocorticoides (cortisol) y andrógenos débiles.',
            regulation: 'Estimulada por CRH hipotalámica y estrés; inhibida por niveles plasmáticos de cortisol.'
          },
          {
            name: 'Prolactina',
            acronym: 'PRL',
            targetOrgan: 'Glándula mamaria.',
            function: 'Induce y mantiene la producción láctea (lactogénesis) tras el parto.',
            regulation: 'Inhibida tónicamente por la Dopamina (PIH); estimulada por succión del pezón y TRH.'
          }
        ]
      },
      {
        regionName: 'Neurohipófisis (Lóbulo Posterior)',
        description: 'Extensión neurogénica del hipotálamo formada por axones amielínicos y pituicitos. No sintetiza hormonas; almacena y vierte a capilares fenestrados neurosecreciones hipotalámicas.',
        hormones: [
          {
            name: 'Vasopresina (Hormona Antidiurética)',
            acronym: 'ADH / AVP',
            targetOrgan: 'Túbulos colectores renales y músculo liso vascular.',
            function: 'Promueve la inserción de acuaporinas-2 para retener agua libre de solutos y causa vasoconstricción periférica.',
            regulation: 'Sensible a cambios osmolares plasmáticos (osmorreceptores hipotalámicos) y volumen sanguíneo (barorreceptores).'
          },
          {
            name: 'Oxitocina',
            acronym: 'OXT',
            targetOrgan: 'Miometrio uterino y células mioepiteliales mamarias.',
            function: 'Provoca contracciones coordinadas del útero durante el parto y eyección de la leche en la lactancia.',
            regulation: 'Mecanismo de retroalimentación positiva (reflejo de Ferguson y estímulo mecánico mamario).'
          }
        ]
      }
    ],
    clinicalCorrelation: {
      condition: 'Adenomas Hipofisarios y Panhipopituitarismo',
      mechanism: 'Un adenoma somatotropo productor de GH en la infancia provoca gigantismo y en la adultez acromegalia. La destrucción de la glándula produce deficiencia múltiple con astenia, hipotensión y amenorrea.',
      symptoms: ['Agrandamiento acral de manos y mandíbula', 'Cefaleas y hemianopsia bitemporal por compresión quiasmática', 'Diabetes insípida en lesiones del tallo']
    },
    biochemicalInsight: 'Las hormonas glicoproteicas hipofisarias (TSH, LH, FSH) comparten una subunidad alfa idéntica, mientras que la subunidad beta confiere la especificidad biológica e inmunológica al receptor acoplado a proteína G.'
  },
  {
    id: 'tiroides-paratiroides',
    name: 'Tiroides y Paratiroides',
    subtitle: 'Metabolismo Basal y Homeostasis del Calcio Fisiológico',
    location: 'Región anterior del cuello, abrazando la tráquea por debajo del cartílago cricoides (paratiroides en cara posterior tiroidea).',
    iconName: 'Flame',
    primaryRole: 'La tiroides controla la tasa metabólica del organismo mediante yodotironinas; las paratiroides regulan minuciosamente la calcemia iónica extracelular.',
    lobesOrRegions: [
      {
        regionName: 'Glándula Tiroides (Folículos y Células C)',
        description: 'Estructura bilobulada con folículos ricos en coloide tiroglobulínico y células parafoliculares (C).',
        hormones: [
          {
            name: 'Triyodotironina y Tiroxina',
            acronym: 'T3 y T4',
            targetOrgan: 'Prácticamente todas las células nucleadas del organismo.',
            function: 'Incrementan el consumo de O₂, expresión de bombas Na⁺/K⁺-ATPasa, termogénesis y maduración neurológica fetal.',
            regulation: 'Dependientes del aporte dietético de Yodo. Controladas por el eje TRH-TSH por retroalimentación negativa.'
          },
          {
            name: 'Calcitonina',
            acronym: 'CT',
            targetOrgan: 'Tejido óseo y riñón.',
            function: 'Inhibe transitoriamente la resorción osteoclástica y promueve calciuria cuando la calcemia se eleva excesivamente.',
            regulation: 'Estimulada por incrementos agudos del ion calcio ionizado en plasma.'
          }
        ]
      },
      {
        regionName: 'Glándulas Paratiroides (4 corpúsculos posteriores)',
        description: 'Pequeñas masas glandulares de células principales y oxífilas situadas detrás de los polos tiroideos superiores e inferiores.',
        hormones: [
          {
            name: 'Parathormona (Hormona Paratiroidea)',
            acronym: 'PTH',
            targetOrgan: 'Hueso (osteoblastos que activan osteoclastos), túbulos renales e intestino indirectamente.',
            function: 'Aumenta la resorción ósea liberando Ca²⁺ y PO₄³⁻, incrementa reabsorción renal de calcio, induce la 1α-hidroxilasa renal para sintetizar calcitriol y reduce reabsorción tubular de fosfato.',
            regulation: 'Regulada directamente por el receptor sensor de calcio (CaSR) de membrana; la hipocalcemia estimula su secreción masiva.'
          }
        ]
      }
    ],
    clinicalCorrelation: {
      condition: 'Cretinismo, Hipoparatiroidismo y Tetania',
      mechanism: 'El déficit precoz de yodo o T4 intrauterino genera cretinismo endémico (grave retraso mental y displasia epifisaria). La extirpación accidental de paratiroides en tiroidectomías colapsa la PTH produciendo hipocalcemia aguda severa y tetania neuromuscular.',
      symptoms: ['Espasmo carpopedal (signo de Trousseau)', 'Contracción facial por percusión del nervio facial (signo de Chvostek)', 'Laringoespasmo potencialmente mortal']
    },
    biochemicalInsight: 'La síntesis de T3 y T4 requiere la enzima tiroperoxidasa (TPO) que oxida el ion yoduro (I⁻) a yodo molecular neutro (I₂), yodando residuos tirosilo de la tiroglobulina (MIT y DIT).'
  },
  {
    id: 'pancreas',
    name: 'Páncreas Endocrino',
    subtitle: 'Microarquitectura de los Islotes de Langerhans y Homeostasis de Glucosa',
    location: 'Órgano retroperitoneal dispuesto transversalmente en el epigastrio y mesogastrio posterior.',
    iconName: 'Activity',
    primaryRole: 'Asegura que las concentraciones plasmáticas de glucosa permanezcan en un estrecho rango fisiológico (70-100 mg/dL en ayuno).',
    lobesOrRegions: [
      {
        regionName: 'Islotes Pancreáticos (1 a 2 millones de agregados celulares)',
        description: 'Constituyen el 1-2% del parénquima pancreático, densamente vascularizados con capilares fenestrados para infusión hormonal directa a la vena porta hepática.',
        hormones: [
          {
            name: 'Insulina',
            acronym: 'INS (Células Beta, ~70%)',
            targetOrgan: 'Músculo estriado esquelético, tejido adiposo e hígado.',
            function: 'Hormona anabólica por excelencia: promueve translocación de GLUT4 a la membrana, glucogenogénesis, síntesis de triglicéridos e inhibe glucogenólisis y lipólisis.',
            regulation: 'Estimulada por hiperglucemia (cierre de canales K_ATP despolarizante e influjo de Ca²⁺), GLP-1 y aminoácidos.'
          },
          {
            name: 'Glucagón',
            acronym: 'GLU (Células Alfa, ~20%)',
            targetOrgan: 'Hígado predominantemente.',
            function: 'Hormona hiperglucemiante de ayuno: activa la cascada adenilil ciclasa/AMPc/PKA fosforilando la glucógeno fosforilasa para glucogenólisis y gluconeogénesis hepática.',
            regulation: 'Estimulado por hipoglucemia plasmática y aminoácidos (arginina); inhibido por insulina y somatostatina.'
          },
          {
            name: 'Somatostatina Pancreática',
            acronym: 'SST (Células Delta, ~5%)',
            targetOrgan: 'Células alfa y beta vecinas (efecto paracrino).',
            function: 'Frena localmente la secreción tanto de insulina como de glucagón para evitar oscilaciones desmedidas.',
            regulation: 'Activada por ingesta mixta de nutrientes en el lumen duodenal.'
          }
        ]
      }
    ],
    clinicalCorrelation: {
      condition: 'Diabetes Mellitus y Cetoacidosis Metabólica',
      mechanism: 'En diabetes tipo 1 hay destrucción autoinmune de células beta con ausencia absoluta de insulina. Sin freno insulínico, la lipólisis desaforada libera ácidos grasos que el hígado cetogénico convierte en acetoacetato y beta-hidroxibutirato, generando acidosis grave.',
      symptoms: ['Tríada clásica de polidipsia, poliuria y polifagia', 'Respiración acidótica de Kussmaul con aliento frutal a cetona', 'Glucosuria osmótica con deshidratación']
    },
    biochemicalInsight: 'La proinsulina se pliega en el retículo endoplásmico con tres puentes disulfuro. En las vesículas de Golgi maduras, la proconvertasa recorta el Péptido C, liberando la molécula de insulina biológicamente activa en proporción equimolar 1:1 con el péptido C.'
  },
  {
    id: 'suprarrenales',
    name: 'Glándulas Suprarrenales',
    subtitle: 'Dualidad Fisiológica: Respuestas al Estrés Agudo y Crónico',
    location: 'Ubicadas en los polos superiores de ambos riñones, envueltas en la fascia de Gerota.',
    iconName: 'ShieldAlert',
    primaryRole: 'Coordinan la respuesta neuroendocrina de alarma (médula) y la homeostasis hidroelectrolítica y metabólica a largo plazo (corteza).',
    lobesOrRegions: [
      {
        regionName: 'Corteza Suprarrenal (80-90% del volumen)',
        description: 'Origen mesodérmico, dividida en tres capas concéntricas con esteroidogénesis especializada regulada enzimáticamente.',
        hormones: [
          {
            name: 'Mineralocorticoides (Aldosterona)',
            acronym: 'Zona Glomerular',
            targetOrgan: 'Túbulo contorneado distal y túbulo colector renal.',
            function: 'Activa la bomba Na⁺/K⁺-ATPasa y canales ENaC, reabsorbiendo Na⁺ y agua a cambio de excretar K⁺ e H⁺.',
            regulation: 'Regulada primordialmente por el sistema Renina-Angiotensina II y la hiperpotasemia sérica.'
          },
          {
            name: 'Glucocorticoides (Cortisol)',
            acronym: 'Zona Fascicular',
            targetOrgan: 'Hígado, tejido linfoide, conectivo, músculo y SNC.',
            function: 'Hormona del estrés crónico: promueve gluconeogénesis, proteólisis, efecto antiinflamatorio/inmunosupresor (inhibe NF-κB y fosfolipasa A2).',
            regulation: 'Controlada estrictamente por el eje hipotálamo-hipófisis (CRH - ACTH) con ritmo circadiano matutino.'
          },
          {
            name: 'Andrógenos Suprarrenales (DHEA y Androstenediona)',
            acronym: 'Zona Reticular',
            targetOrgan: 'Folículos pilosos, piel y órganos sexuales periféricos.',
            function: 'Desarrollo de vello púbico y axilar durante la pubarquia; precursores de testosterona y estrógenos en tejidos periféricos.',
            regulation: 'Regulados conjuntamente por ACTH.'
          }
        ]
      },
      {
        regionName: 'Médula Suprarrenal (Centro cromafín)',
        description: 'Ganglio simpático modificado derivado de la cresta neural. Sus células cromafines están inervadas por fibras preganglionares colinérgicas simpáticas.',
        hormones: [
          {
            name: 'Adrenalina y Noradrenalina (Catecolaminas)',
            acronym: 'Epinefrina (~80%) / Norepinefrina (~20%)',
            targetOrgan: 'Receptores adrenérgicos (α1, α2, β1, β2, β3) en corazón, vasos sanguíneos y vías aéreas.',
            function: 'Respuesta de "lucha o huida": taquicardia, aumento de gasto cardíaco, broncodilatación, midriasis, glucogenólisis y redistribución de flujo hacia músculo esquelético.',
            regulation: 'Descarga autonómica refleja casi instantánea disparada por el sistema nervioso simpático central.'
          }
        ]
      }
    ],
    clinicalCorrelation: {
      condition: 'Síndrome de Cushing y Crisis de Addison',
      mechanism: 'El hipercortisolismo (Cushing) induce degradación de proteínas dérmicas y acumulación centrípeta de grasa. La destrucción autoinmune suprarrenal (enfermedad de Addison) suprime cortisol y aldosterona, desencadenando colapso hemodinámico letal.',
      symptoms: ['Facies de luna llena y estrías violáceas en Cushing', 'Hiperpigmentación cutánea (por ACTH elevada) en Addison', 'Hipotensión postural e hiperpotasemia potencialmente mortal']
    },
    biochemicalInsight: 'Todas las hormonas corticosuprarrenales derivan del colesterol. El paso limitante de la velocidad es el transporte de colesterol a la matriz mitocondrial interna mediante la proteína StAR (Steroidogenic Acute Regulatory) y el clivaje de la cadena lateral por la enzima CYP11A1.'
  },
  {
    id: 'gonadas',
    name: 'Gónadas (Testículos y Ovarios)',
    subtitle: 'Dimorfismo Sexual, Gametogénesis y Caracteres Secundarios',
    location: 'Testículos alojados en las bolsas escrotales; Ovarios en la pelvis menor en las fosas ováricas laterales.',
    iconName: 'HeartPulse',
    primaryRole: 'Producción de gametos haploides viables y secreción de esteroides sexuales que moldean la anatomía, fisiología y conducta reproductiva.',
    lobesOrRegions: [
      {
        regionName: 'Testículos (Túbulos Seminíferos e Intersticio de Leydig)',
        description: 'Compartimento germinal con células de Sertoli y compartimento endocrino intersticial con células de Leydig.',
        hormones: [
          {
            name: 'Testosterona y Dihidrotestosterona',
            acronym: 'T y DHT',
            targetOrgan: 'Órganos genitales, músculo, laringe, vello corporal y folículo piloso.',
            function: 'Diferenciación sexual masculina embrionaria, descenso testicular, crecimiento muscular, engrosamiento de cuerdas vocales y espermatogénesis.',
            regulation: 'Estimulada por LH sobre células de Leydig; retroalimentación negativa sobre hipotálamo (GnRH) e hipófisis.'
          },
          {
            name: 'Inhibina B',
            acronym: 'Células de Sertoli',
            targetOrgan: 'Adenohipófisis.',
            function: 'Frena selectivamente la secreción de FSH cuando la producción espermática es óptima.',
            regulation: 'Regulada por el grado de estimulación de FSH y la integridad del epitelio germinal.'
          }
        ]
      },
      {
        regionName: 'Ovarios (Folículos en Desarrollo y Cuerpo Lúteo)',
        description: 'La teca interna y las células de la granulosa colaboran en la síntesis de estrógenos; el cuerpo lúteo posterior a la ovulación sostiene la progesterona.',
        hormones: [
          {
            name: 'Estradiol (Estrógeno principal)',
            acronym: 'E2',
            targetOrgan: 'Endometrio, glándulas mamarias, tejido óseo y distribución ginecoide de grasa.',
            function: 'Fase proliferativa del endometrio, desarrollo de caracteres sexuales femeninos secundarios, cierre epifisario y protección cardiovascular y ósea.',
            regulation: 'Modelo bicelular: la LH estimula a la teca para producir andrógenos que cruzan a la granulosa donde la aromatasa (inducida por FSH) los convierte en estradiol.'
          },
          {
            name: 'Progesterona',
            acronym: 'P4 (Cuerpo Lúteo y Placenta)',
            targetOrgan: 'Endometrio secretor y cérvix uterino.',
            function: 'Prepara y mantiene el endometrio secretor apto para la implantación embrionaria, relaja el miometrio y espesa el moco cervical.',
            regulation: 'Secreción pulsátil dependiente del pico ovulatorio de LH.'
          }
        ]
      }
    ],
    clinicalCorrelation: {
      condition: 'Hipogonadismo y Síndrome de Ovario Poliquístico (SOP)',
      mechanism: 'El hipogonadismo hipergonadotrópico (como en el síndrome de Klinefelter 47,XXY o Turner 45,X0) cursa con disgenesia gonadal y elevación compensatoria de FSH y LH por ausencia de retroalimentación negativa.',
      symptoms: ['Hirsutismo y anovulación crónica en SOP', 'Ginecomastia y azoospermia en varones hipogonádicos', 'Osteoporosis prematura por deficiencia estrogénica']
    },
    biochemicalInsight: 'La conversión de andrógenos a estrógenos está catalizada por la enzima citocromo P450 aromatasa (CYP19A1), que realiza la desmetilación y aromatización del anillo A esteroideo.'
  }
];
