export interface EssayChapter {
  id: string;
  title: string;
  subtitle: string;
  content: string[];
}

export const essayChapters: EssayChapter[] = [
  {
    id: 'intro',
    title: '1. Introducción y el Principio de la Homeostasis Orgánica',
    subtitle: 'La orquestación sinfónica de los fluidos y señales químicas',
    content: [
      'La fisiología humana se fundamenta en la preservación de un "milieu intérieur" constante y altamente organizado, postulado originalmente por Claude Bernard y conceptualizado por Walter B. Cannon como homeostasis. Este delicado equilibrio celular no es un estado estático, sino un dinamismo adaptativo ininterrumpido en el que convergen dos pilares moleculares indispensables: el sistema endocrino, como vector de comunicación química intercelular a distancia, y la hemostasia bioquímica, como guardiana de la integridad circulatoria vascular.',
      'Lejos de constituir compartimentos biológicos estancos, el control hemostático y las rutas endocrinas se entrelazan íntimamente. El endotelio vascular, la perfusión tisular y la concentración iónica de calcio plasmático actúan como denominadores comunes. La vitamina K, una molécula liposoluble de estirpe naftoquinónica, personifica el puente donde la química de micronutrientes se transforma en competencia funcional enzimática, habilitando la supervivencia ante traumatismos y hemorragias.'
    ]
  },
  {
    id: 'vitamina-k-mecanismo',
    title: '2. Bioquímica de la Vitamina K: Carboxilación y Ciclo Redox',
    subtitle: 'El residuo Gla y la capacidad de quelación de calcio divalente',
    content: [
      'La síntesis hepática de los factores de coagulación II (protrombina), VII, IX y X —así como de las proteínas reguladoras C, S y Z y la osteocalcina ósea— culmina con una modificación post-traduccional catalizada por la gamma-glutamil carboxilasa en la membrana del retículo endoplásmico rugoso.',
      'En esta reacción esteocimétrica, la forma reducida hidroquinona de la vitamina K (KH₂) suministra electrones para sustentar la abstracción de un protón en el carbono gamma del residuo de glutamato. La posterior adición de dióxido de carbono (CO₂) incorpora un segundo grupo carboxilo, forjando el aminoácido dicarboxílico modificado: ácido gamma-carboxiglutámico (Gla).',
      'Durante esta transferencia, la vitamina K se oxida a su forma 2,3-epóxido (KO). Para que la carboxilación no se detenga por agotamiento de cofactor, la enzima microsomal Vitamina K Epóxido Reductasa (VKORC1) cataliza la regeneración de vitamina K quinona y subsecuentemente de nuevo a hidroquinona.',
      'El impacto biofísico de este dominio Gla es mayúsculo: la presencia de dos carboxilos adyacentes crea un bolsillo molecular de alta densidad de carga negativa que coordina con extrema afinidad al ion calcio (Ca²⁺). A su vez, estos iones de calcio sirven como puentes electrostáticos que anclan la proteína hemostática a las cabezas aniónicas de fosfatidilserina expuestas en la membrana de las plaquetas activadas en el sitio del daño endotelial.'
    ]
  },
  {
    id: 'cascada-hemostatica',
    title: '3. Hemostasia y Cascada Enzimática: De Zimógenos a Malla de Fibrina',
    subtitle: 'El modelo celular y la concentración interfacial de factores',
    content: [
      'El paradigma contemporáneo de la hemostasia describe una cascada enzimática secuencial de amplificación en superficie celular dividida en fases de iniciación, amplificación y propagación. Una vez activado el Factor X en la superficie fosfolipídica, se ensambla el complejo protrombinasa junto al cofactor Va y calcio.',
      'La hidrólisis precisa de la protrombina por el complejo protrombinasa engendra trombina (Factor IIa), serina proteasa que actúa como el verdadero regulador maestro del sistema. La trombina cataliza la escisión de los fibrinopéptidos A y B del fibrinógeno globular soluble circulante en plasma, eliminando repulsiones electrostáticas e induciendo la polimerización espontánea en monómeros y luego protofibrillas de fibrina.',
      'Para evitar la desintegración del coágulo frente al flujo pulsátil arterial, la trombina activa concomitantemente al Factor XIII (transglutaminasa plasmática), el cual sintetiza enlaces isopeptídicos covalentes entre residuos de lisina y glutamina de cadenas adyacentes. El resultado es un gel tridimensional elastomérico insoluble capaz de sellar la brecha vascular mientras se inicia la reendotelización reparadora.'
    ]
  },
  {
    id: 'eje-endocrino',
    title: '4. El Eje Endocrino: Red Neurohumoral y Servomecanismos',
    subtitle: 'Sincronización trófica desde el hipotálamo hasta las glándulas efectoras',
    content: [
      'El sistema endocrino complementa las respuestas rápidas del sistema nervioso operando a través de señales químicas hidrosolubles (péptidos y catecolaminas) y liposolubles (esteroides y hormonas tiroideas). En el vértice del sistema, la hipófisis ejecuta una dualidad arquitectónica fascinante:',
      'Por un lado, la adenohipófisis responde al sistema porta hipofisario liberando hormonas de control metabólico y del desarrollo: la hormona del crecimiento (STH/GH) induce la síntesis de IGF-1 y balance nitrogenado positivo; la corticotropina (ACTH) rige la zona fascicular suprarrenal modulando la glucemia y tolerancia inmunológica vía cortisol; la tirotropina (TSH) estimula a las células foliculares tiroideas para captar yoduro y secretar T3 y T4; y las gonadotropinas (FSH y LH) orquestan el ciclo folicular ovárico y la espermatogénesis testicular.',
      'Por otro lado, la neurohipófisis descarga neurosecreciones hipotalámicas directas: la vasopresina (ADH) preserva la volemia y osmolaridad plasmática insertando acuaporinas en túbulos renales, y la oxitocina modula la contractilidad uterina y la eyección de leche.',
      'Asimismo, las glándulas periféricas mantienen equilibrios críticos: el páncreas endocrino calibra minuto a minuto la glucemia a través del antagonismo cooperativo entre la insulina (anabólica e hipoglucemiante) y el glucagón (catabólico e hiperglucemiante). En el cuello, la parathormona (PTH) paratiroidea monitorea el ion Ca²⁺ plasmático, coordinando la activación osteoclástica vía RANKL y la hidroxilación de vitamina D en el riñón para salvaguardar la excitabilidad neuromuscular.'
    ]
  },
  {
    id: 'conclusiones',
    title: '5. Discusión Fisiológica y Conclusiones',
    subtitle: 'Integración interdisciplinaria en la práctica biomédica',
    content: [
      'El estudio conjunto de la Vitamina K y el sistema endocrino demuestra que la medicina celular se rige por leyes químicas precisas de reconocimiento molecular, afinidad estereoquímica y retroalimentación cibernética.',
      'La comprensión del antagonismo entre el dicumarol y la vitamina K epóxido reductasa sentó las bases de la farmacología antitrombótica contemporánea, demostrando cómo una interferencia en un ciclo enzimático micronutricional puede modular la fluidez sanguínea global.',
      'Del mismo modo, afecciones como la tetania por hipoparatiroidismo o el cretinismo por deficiencia de hormonas tiroideas ilustran cómo sutiles descompensaciones moleculares comprometen el desarrollo ontogénico y la viabilidad del individuo. La integración pedagógica de la bioquímica con la fisiología sistémica resulta imprescindible para el razonamiento clínico racional y la terapéutica médica moderna.'
    ]
  },
  {
    id: 'referencias-apa',
    title: '6. Referencias Bibliográficas (Normas APA 7.ª Edición)',
    subtitle: 'Fuentes académicas y literatura biomédica estándar',
    content: [
      '• Hall, J. E., & Hall, M. E. (2021). Guyton and Hall Textbook of Medical Physiology (14th ed.). Elsevier.',
      '• Nelson, D. L., & Cox, M. M. (2021). Lehninger Principles of Biochemistry (8th ed.). W. H. Freeman and Company.',
      '• Boron, W. F., & Boulpaep, E. L. (2017). Medical Physiology (3rd ed.). Elsevier Health Sciences.',
      '• Berkner, K. L. (2005). The vitamin K-dependent carboxylation system. Annual Review of Nutrition, 25(1), 127–149. https://doi.org/10.1146/annurev.nutr.25.050304.092705',
      '• Melmed, S., Auchus, R. J., Goldfine, A. B., Koenig, R. J., & Rosen, C. J. (2020). Williams Textbook of Endocrinology (14th ed.). Elsevier.',
      '• Dahlbäck, B. (2000). Blood coagulation. The Lancet, 355(9215), 1627–1632. https://doi.org/10.1016/S0140-6736(00)02225-X',
      '• Stafford, D. W. (2005). The vitamin K cycle. Journal of Thrombosis and Haemostasis, 3(8), 1873–1878. https://doi.org/10.1111/j.1538-7836.2005.01419.x'
    ]
  }
];
