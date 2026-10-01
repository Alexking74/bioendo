import { CoagulationStep } from '../types';

export const coagulationSteps: CoagulationStep[] = [
  {
    stepNumber: 1,
    title: 'Activación Hepática Dependiente de Vitamina K',
    subTitle: 'Modificación post-traduccional esencial',
    biochemicalEvent: 'La Vitamina K reducida (hidroquinona / KH₂) actúa como cofactor indispensable para la gamma-glutamil carboxilasa en el retículo endoplásmico del hepatocito. Introduce un segundo grupo carboxilo (-COOH) en 10-12 residuos de ácido glutámico (Glu) del extremo N-terminal de los precursores de los factores II, VII, IX y X.',
    keyEnzymes: 'Gamma-glutamil carboxilasa & Vitamina K Epóxido Reductasa (VKORC1)',
    roleOfVitaminK: 'Genera residuos gamma-carboxiglutamato (Gla) cargados negativamente con alta afinidad quelante por iones Ca²⁺.',
    clinicalNote: 'Sin vitamina K, se sintetizan factores PIVKA (Proteins Induced by Vitamin K Absence), afuncionales e incapaces de fijarse a membranas.'
  },
  {
    stepNumber: 2,
    title: 'Anclaje Membranal y Activación de Protrombina (Factor II)',
    subTitle: 'Ensamblaje del Complejo Protrombinasa',
    biochemicalEvent: 'Los residuos Gla de la protrombina interactúan a través de puentes de calcio (Ca²⁺) con los fosfolípidos de carga negativa (fosfatidilserina) exteriorizados en la membrana de las plaquetas activadas. El Factor Xa, junto al cofactor Va y Ca²⁺, forma el complejo protrombinasa altamente eficiente.',
    keyEnzymes: 'Complejo Protrombinasa (Factor Xa + Factor Va + Fosfolípidos + Ca²⁺)',
    roleOfVitaminK: 'Permite la localización espacial y la concentración del zimógeno protrombina en el foco de la lesión vascular.',
    clinicalNote: 'La velocidad de escisión de protrombina por el complejo ensamblado en membrana se multiplica por más de 300,000 veces comparada con el factor Xa libre en solución.'
  },
  {
    stepNumber: 3,
    title: 'Generación de Trombina Activa (Factor IIa)',
    subTitle: 'El Interruptor Catalítico Maestro de la Hemostasia',
    biochemicalEvent: 'El complejo protrombinasa escinde selectivamente dos enlaces peptídicos en la molécula de protrombina (Arg271-Thr272 y Arg320-Ile321). Esta proteólisis controlada libera la trombina activa (Factor IIa), una serina proteasa con potente actividad enzimática.',
    keyEnzymes: 'Trombina (Factor IIa)',
    roleOfVitaminK: 'La síntesis previa de protrombina dependiente de vitamina K provee el sustrato intacto para esta amplificación explosiva.',
    clinicalNote: 'La trombina retroalimenta positivamente activando factores cofactores V, VIII y el factor XIII estabilizador.'
  },
  {
    stepNumber: 4,
    title: 'Fibrinógeno a Fibrina y Reticulación Definitiva',
    subTitle: 'Consolidación del Coágulo Hemostático Insoluble',
    biochemicalEvent: 'La trombina hidroliza cuatro enlaces específicos en el dominio central del fibrinógeno soluble (340 kDa), liberando dos pares de fragmentos cargados negativamente (fibrinopéptidos A y B). Los monómeros de fibrina resultantes se autoensamblan de extremo a extremo y de lado a lado en protofibrillas.',
    keyEnzymes: 'Trombina & Factor XIIIa (Transglutaminasa plasmática dependiente de Ca²⁺)',
    roleOfVitaminK: 'Cierra la cascada enzimática: el factor XIIIa crea enlaces isopeptídicos covalentes entre residuos de lisina y glutamina de cadenas gamma y alfa de fibrina.',
    clinicalNote: 'El trombo de fibrina insoluble atrapa eritrocitos y plaquetas, resistiendo las fuerzas de cizallamiento del flujo arterial hasta la cicatrización vascular.'
  }
];

export const vitaminKProperties = [
  {
    property: 'Liposolubilidad Estricta',
    tag: 'Absorción Entérica',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-200',
    description: 'Posee una estructura central de 2-metil-1,4-naftoquinona unida a una cadena lateral isoprenoide alifática hidrofóbica.',
    physiologicalImpact: 'Requiere sales biliares, lipasa pancreática y formación de micelas mixtas para ser absorbida en el íleon proximal e incorporada a quilomicrones linfáticos.'
  },
  {
    property: 'Foto-sensibilidad Lumínica',
    tag: 'Estabilidad Molecular',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    description: 'La radiación ultravioleta y la luz solar directa inducen fotólisis rápida y degradación fotoquímica irreversible de los enlaces en el anillo de naftoquinona.',
    physiologicalImpact: 'Las ampollas clínicas de fitomenadiona (Vitamina K1) deben envasarse en vidrio ámbar opaco y protegerse de la luz en farmacia hospitalaria.'
  },
  {
    property: 'Termoestabilidad Relativa',
    tag: 'Resistencia Térmica',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-200',
    description: 'Resiste temperaturas culinarias convencionales de ebullición y horneado sin desnaturalización masiva en comparación con vitaminas hidrosolubles como la C o B1.',
    physiologicalImpact: 'Sin embargo, es vulnerable a la presencia de peróxidos, álcalis fuertes y agentes oxidantes que rompen la cadena lateral fítico/menaquinona.'
  }
];

export const dicumarolCaseStudy = {
  title: 'Caso Clínico-Farmacológico: Antagonismo del Dicumarol y la Enfermedad del Trébol Dulce',
  context: 'En la década de 1920 en Dakota del Norte y Canadá, el ganado alimentado con heno de trébol dulce fermentado (Melilotus alba) comenzó a morir por hemorragias internas espontáneas tras procedimientos rutinarios como el descornado.',
  molecularBasis: 'El hongo Penicillium nigricans oxidaba la cumarina natural del trébol en dicumarol (bis-hidroxicumarina). El Dr. Karl Paul Link aisló e identificó este compuesto como un potente inhibidor competitivo de la Vitamina K Epóxido Reductasa (VKORC1).',
  pharmacologicalAction: 'Al bloquear la reducción del 2,3-epóxido de vitamina K hacia la forma hidroquinona reducida, las reservas hepáticas de cofactor se agotan en 24 a 48 horas. La producción de factores II, VII, IX y X biológicamente activos cae en picada, prolongando drásticamente el Tiempo de Protrombina (TP / INR).',
  clinicalApplication: 'Este descubrimiento dio origen a la Warfarina y al Acenocumarol como anticoagulantes orales de primera línea para prevención de tromboembolismos venosos, fibrilación auricular y válvulas cardíacas mecánicas.',
  antidoteProtocol: 'El tratamiento ante sobredosis de dicumarol o warfarina con hemorragia activa consiste en la administración intravenosa lenta de Vitamina K1 (Fitomenadiona a altas dosis, que rescata una vía reductasa accesoria NAD(P)H-dependiente) acompañada de Concentrado de Complejo Protrombínico (PCC) para reemplazo inmediato de factores.'
};
