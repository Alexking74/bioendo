import pptxgen from 'pptxgenjs';
import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';

async function createPresentation() {
  const pptx = new pptxgen();
  // Widescreen 16:9 estándar internacional (13.333 x 7.5 pulgadas)
  pptx.defineLayout({ name: 'WIDE_16X9', width: 13.333, height: 7.5 });
  pptx.layout = 'WIDE_16X9';
  pptx.author = 'BioEndo Lab - Fisiologia y Bioquimica';
  pptx.company = 'BioEndo Lab';
  pptx.title = 'BioEndo Lab: Vitamina K, Coagulacion y Eje Neuroendocrino';
  pptx.subject = 'Bioquimica Medica y Fisiologia Humana';

  // Paleta de colores clínicos estricta sin hashes ni caracteres inválidos
  const C_DARK_BG = '080D1A';
  const C_CARD_BG = '101A2E';
  const C_CARD_BORDER = '1E293B';
  const C_CYAN = '00D2E0';
  const C_TEAL = '09F1B8';
  const C_TEXT = 'F8FAFC';
  const C_MUTED = '94A3B8';
  const C_AMBER = 'F59E0B';
  const C_ROSE = 'F43F5E';
  const C_PURPLE = 'C084FC';

  // Helper para añadir encabezado estándar de diapositiva
  function addSlideHeader(slide, title, category, slideNum) {
    // Fondo general
    slide.background = { color: C_DARK_BG };

    // Barra superior de acento (dimensiones numéricas exactas en pulgadas)
    slide.addShape(pptx.ShapeType.rect, {
      x: 0, y: 0, w: 13.333, h: 0.12,
      fill: { color: C_CYAN }, line: { color: C_CYAN, width: 0 }
    });

    // Badge categoría
    slide.addText(category.toUpperCase(), {
      x: 0.8, y: 0.35, w: 7.0, h: 0.3,
      fontSize: 10, fontFace: 'Arial', color: C_CYAN, bold: true
    });

    // Título de diapositiva
    slide.addText(title, {
      x: 0.8, y: 0.65, w: 11.5, h: 0.65,
      fontSize: 22, fontFace: 'Arial', color: C_TEXT, bold: true
    });

    // Número de diapositiva y pie
    slide.addText(`BioEndo Lab | Módulo ${slideNum} de 13`, {
      x: 0.8, y: 6.9, w: 6.0, h: 0.3,
      fontSize: 9, fontFace: 'Arial', color: C_MUTED
    });

    slide.addText('Fisiología & Bioquímica Humana - Formato de Exposición', {
      x: 6.5, y: 6.9, w: 6.0, h: 0.3,
      fontSize: 9, fontFace: 'Arial', color: C_MUTED, align: 'right'
    });
  }

  // ==========================================
  // SLIDE 1: PORTADA PRINCIPAL
  // ==========================================
  {
    const slide = pptx.addSlide();
    slide.background = { color: C_DARK_BG };

    // Barra de acento
    slide.addShape(pptx.ShapeType.rect, {
      x: 0, y: 0, w: 13.333, h: 0.18,
      fill: { color: C_CYAN }, line: { color: C_CYAN, width: 0 }
    });

    // Badge de presentación
    slide.addShape(pptx.ShapeType.rect, {
      x: 1.0, y: 1.1, w: 3.8, h: 0.45,
      fill: { color: '132238' }, line: { color: C_CYAN, width: 1 }
    });
    slide.addText('PLATAFORMA CIENTÍFICA & CLÍNICA', {
      x: 1.0, y: 1.1, w: 3.8, h: 0.45,
      fontSize: 10, fontFace: 'Arial', color: C_CYAN, bold: true, align: 'center'
    });

    // Título Principal
    slide.addText('BIOENDO LAB', {
      x: 1.0, y: 1.7, w: 11.3, h: 1.1,
      fontSize: 46, fontFace: 'Arial', color: C_TEXT, bold: true
    });

    // Subtítulo
    slide.addText('Vitamina K, Cascada de Coagulación y el Eje Neuroendocrino', {
      x: 1.0, y: 2.85, w: 11.3, h: 0.55,
      fontSize: 20, fontFace: 'Arial', color: C_TEAL, bold: true
    });

    // Descripción académica
    slide.addText('Integración interdisciplinaria de bioquímica celular, hemostasia vascular, farmacología de anticoagulantes y regulación hormonal para la docencia médica universitaria.', {
      x: 1.0, y: 3.5, w: 11.0, h: 0.8,
      fontSize: 13, fontFace: 'Arial', color: C_MUTED
    });

    // Contenedores informativos
    const cards = [
      { x: 1.0, title: 'HEMOSTASIA & VITAMINA K', desc: 'Carboxilación gamma-glutamil, ciclo VKORC1, antagonismo del dicumarol y factores dependientes de residuos Gla (II, VII, IX, X).' },
      { x: 5.1, title: 'FARMACOGENÓMICA & DOACs', desc: 'Polimorfismos CYP2C9/VKORC1, control de dosis de warfarina, rangos INR e inhibidores orales directos (Apixabán, Rivaroxabán, Dabigatrán).' },
      { x: 9.2, title: 'EJE NEUROENDOCRINO', desc: 'Servomecanismos hipotálamo-hipófisis, hormonas tróficas periféricas, retroalimentación negativa y homeostasis de calcemia y glucemia.' }
    ];

    cards.forEach(c => {
      slide.addShape(pptx.ShapeType.rect, {
        x: c.x, y: 4.5, w: 3.6, h: 2.0,
        fill: { color: C_CARD_BG }, line: { color: C_CARD_BORDER, width: 1 }
      });
      slide.addText(c.title, {
        x: c.x + 0.25, y: 4.7, w: 3.1, h: 0.35,
        fontSize: 11, fontFace: 'Arial', color: C_CYAN, bold: true
      });
      slide.addText(c.desc, {
        x: c.x + 0.25, y: 5.1, w: 3.1, h: 1.3,
        fontSize: 10, fontFace: 'Arial', color: C_MUTED
      });
    });

    slide.addText('Presentación Oficial para Sustentación Académica | Bioquímica y Fisiología', {
      x: 1.0, y: 6.8, w: 11.3, h: 0.35,
      fontSize: 10, fontFace: 'Arial', color: C_CYAN, italic: true
    });
  }

  // ==========================================
  // SLIDE 2: INTRODUCCIÓN Y HOMEOSTASIS
  // ==========================================
  {
    const slide = pptx.addSlide();
    addSlideHeader(slide, 'Introducción: El Principio de la Homeostasis Orgánica', 'Módulo 1 - Fundamentos Biomédicos', 2);

    slide.addShape(pptx.ShapeType.rect, {
      x: 0.8, y: 1.4, w: 5.6, h: 5.2,
      fill: { color: C_CARD_BG }, line: { color: C_CARD_BORDER, width: 1 }
    });
    slide.addText('El Concepto de Medio Interno y Homeostasis', {
      x: 1.1, y: 1.65, w: 5.0, h: 0.4,
      fontSize: 14, fontFace: 'Arial', color: C_CYAN, bold: true
    });
    slide.addText([
      { text: '1. Claude Bernard (1865): ', options: { bold: true, color: C_TEXT } },
      { text: 'Postuló que la constancia del "milieu intérieur" es la condición indispensable para la vida libre e independiente de los organismos superiores.\n\n', options: { color: C_MUTED } },
      { text: '2. Walter B. Cannon (1929): ', options: { bold: true, color: C_TEXT } },
      { text: 'Acuñó el término homeostasis para definir las respuestas coordinadas y automáticas que mantienen estables las variables fisiológicas (pH, calcemia, presión osmótica, volemia).\n\n', options: { color: C_MUTED } },
      { text: '3. Dos Pilares Indispensables: ', options: { bold: true, color: C_TEXT } },
      { text: 'El sistema endocrino (regulación humoral a larga distancia) y el endotelio hemostático (preservación del volumen circulante) garantizan que ninguna célula carezca de perfusión y nutrientes.', options: { color: C_MUTED } }
    ], {
      x: 1.1, y: 2.15, w: 5.0, h: 4.2,
      fontSize: 11, fontFace: 'Arial'
    });

    const itemsRight = [
      { y: 1.4, title: 'Preservación Vascular & Hemostasia', text: 'La rotura de un vaso dispara de inmediato la cascada proteolítica para evitar la exanguinación sin provocar trombosis sistémica oclusiva.' },
      { y: 3.15, title: 'Calcio Iónico: El Mediador Universal', text: 'El ion Ca²⁺ divalente actúa tanto como cofactor enzimático en la coagulación como mensajero intracelular en la secreción y respuesta endocrina.' },
      { y: 4.9, title: 'Micronutrientes con Impacto Clínico', text: 'La Vitamina K ejemplifica cómo una molécula dietética liposoluble condiciona la competencia catalítica de las enzimas hemostáticas en el hígado.' }
    ];

    itemsRight.forEach(item => {
      slide.addShape(pptx.ShapeType.rect, {
        x: 6.8, y: item.y, w: 5.7, h: 1.55,
        fill: { color: '131E35' }, line: { color: C_CARD_BORDER, width: 1 }
      });
      slide.addText(item.title, {
        x: 7.0, y: item.y + 0.15, w: 5.3, h: 0.35,
        fontSize: 12, fontFace: 'Arial', color: C_TEAL, bold: true
      });
      slide.addText(item.text, {
        x: 7.0, y: item.y + 0.55, w: 5.3, h: 0.9,
        fontSize: 10, fontFace: 'Arial', color: C_MUTED
      });
    });
  }

  // ==========================================
  // SLIDE 3: BIOQUÍMICA DE LA VITAMINA K
  // ==========================================
  {
    const slide = pptx.addSlide();
    addSlideHeader(slide, 'Bioquímica de la Vitamina K y el Ciclo Redox Hepático', 'Módulo 2 - Bioquímica Celular', 3);

    const cardsK = [
      {
        x: 0.8, w: 3.7, title: 'Estructura & Liposolubilidad',
        color: C_CYAN,
        body: '• Núcleo central: 2-metil-1,4-naftoquinona con cadena lateral alifática isoprenoide hidrofóbica.\n\n• Formas biológicas: K1 (Filoquinona, de origen vegetal) y K2 (Menaquinonas, sintetizadas por la microbiota intestinal).\n\n• Absorción entérica: Requiere bilis, sales biliares y micelas mixtas en el íleon para incorporarse a quilomicrones.'
      },
      {
        x: 4.8, w: 3.7, title: 'Carboxilación Gamma-Glutamil',
        color: C_TEAL,
        body: '• Enzima: Gamma-glutamil carboxilasa en el retículo endoplásmico rugoso del hepatocito.\n\n• Sustrato: Residuos de Ácido Glutámico (Glu) en el dominio N-terminal de precursores.\n\n• Producto: Residuos de Ácido Gamma-Carboxiglutámico (Gla) con doble carga negativa (-2).\n\n• Cofactor activo: Vitamina K Hidroquinona (KH₂).'
      },
      {
        x: 8.8, w: 3.7, title: 'Ciclo Redox VKORC1 & Dominio Gla',
        color: C_AMBER,
        body: '• Enzima microsomal: Vitamina K Epóxido Reductasa (VKORC1).\n\n• Regenera el 2,3-epóxido de vitamina K oxidado nuevamente a quinona e hidroquinona activa.\n\n• Quelación de Calcio: Los residuos Gla ligan iones Ca²⁺ formando puentes electrostáticos con la fosfatidilserina plaquetaria.\n\n• Factores activos: II, VII, IX, X, y Proteínas C, S y Z.'
      }
    ];

    cardsK.forEach(c => {
      slide.addShape(pptx.ShapeType.rect, {
        x: c.x, y: 1.4, w: c.w, h: 4.0,
        fill: { color: C_CARD_BG }, line: { color: C_CARD_BORDER, width: 1 }
      });
      slide.addText(c.title, {
        x: c.x + 0.25, y: 1.6, w: c.w - 0.5, h: 0.4,
        fontSize: 13, fontFace: 'Arial', color: c.color, bold: true
      });
      slide.addText(c.body, {
        x: c.x + 0.25, y: 2.1, w: c.w - 0.5, h: 3.1,
        fontSize: 10, fontFace: 'Arial', color: C_MUTED
      });
    });

    slide.addShape(pptx.ShapeType.rect, {
      x: 0.8, y: 5.6, w: 11.7, h: 1.1,
      fill: { color: '18243C' }, line: { color: C_TEAL, width: 1 }
    });
    slide.addText('PERLA CLÍNICA: PIVKA (Proteins Induced by Vitamin K Absence)', {
      x: 1.0, y: 5.7, w: 11.3, h: 0.3,
      fontSize: 11, fontFace: 'Arial', color: C_TEAL, bold: true
    });
    slide.addText('En déficit de vitamina K o bloqueo farmacológico con antagonistas, el hígado secreta zimógenos descarboxilados incompletos (PIVKA-II). Al carecer de residuos Gla, son afuncionales e incapaces de fijar Ca²⁺ o anclarse a fosfolípidos de membranas.', {
      x: 1.0, y: 6.05, w: 11.3, h: 0.55,
      fontSize: 10, fontFace: 'Arial', color: C_TEXT
    });
  }

  // ==========================================
  // SLIDE 4: CASCADA ENZIMÁTICA DE COAGULACIÓN
  // ==========================================
  {
    const slide = pptx.addSlide();
    addSlideHeader(slide, 'La Cascada Enzimática y el Complejo Protrombinasa', 'Módulo 3 - Hemostasia Celular', 4);

    const steps = [
      { num: 'FASE 1', title: 'Activación Hepática Gla', desc: 'La gamma-carboxilación N-terminal equipa a los factores II, VII, IX y X con afinidad quelante por iones calcio.' },
      { num: 'FASE 2', title: 'Vía Extrínseca & Intrínseca', desc: 'El Factor Tisular (FT) expuesto activa al Factor VIIa. La vía de contacto activa IXa. Ambos convergen activando al Factor X (Xa).' },
      { num: 'FASE 3', title: 'Complejo Protrombinasa', desc: 'En la membrana plaquetaria se ensambla: Factor Xa + Factor Va + Fosfatidilserina + Ca²⁺. Multiplica la velocidad x 300,000 veces.' },
      { num: 'FASE 4', title: 'Trombina y Malla de Fibrina', desc: 'La protrombina (II) se escinde a trombina (IIa). Esta transforma fibrinógeno soluble en fibrina, y el Factor XIIIa reticula el coágulo definitivo.' }
    ];

    steps.forEach((s, idx) => {
      const x = 0.8 + idx * 2.95;
      slide.addShape(pptx.ShapeType.rect, {
        x: x, y: 1.4, w: 2.8, h: 4.0,
        fill: { color: C_CARD_BG }, line: { color: C_CARD_BORDER, width: 1 }
      });
      slide.addShape(pptx.ShapeType.rect, {
        x: x + 0.2, y: 1.6, w: 1.2, h: 0.35,
        fill: { color: '1E293B' }, line: { color: C_CYAN, width: 1 }
      });
      slide.addText(s.num, {
        x: x + 0.2, y: 1.6, w: 1.2, h: 0.35,
        fontSize: 10, fontFace: 'Arial', color: C_CYAN, bold: true, align: 'center'
      });
      slide.addText(s.title, {
        x: x + 0.2, y: 2.1, w: 2.4, h: 0.6,
        fontSize: 13, fontFace: 'Arial', color: C_TEXT, bold: true
      });
      slide.addText(s.desc, {
        x: x + 0.2, y: 2.8, w: 2.4, h: 2.4,
        fontSize: 10, fontFace: 'Arial', color: C_MUTED
      });
    });

    slide.addShape(pptx.ShapeType.rect, {
      x: 0.8, y: 5.6, w: 11.7, h: 1.1,
      fill: { color: '0D2438' }, line: { color: C_CYAN, width: 1 }
    });
    slide.addText('EL PAPEL CRÍTICO DEL FACTOR XIIIa (TRANSGLUTAMINASA PLASMÁTICA)', {
      x: 1.0, y: 5.7, w: 11.3, h: 0.3,
      fontSize: 11, fontFace: 'Arial', color: C_CYAN, bold: true
    });
    slide.addText('Crea enlaces isopeptídicos covalentes entre residuos de lisina y glutamina de protofibrillas de fibrina, otorgando elasticidad y resistencia mecánica al trombo contra las fuerzas de cizallamiento del flujo sanguíneo pulsátil.', {
      x: 1.0, y: 6.05, w: 11.3, h: 0.55,
      fontSize: 10, fontFace: 'Arial', color: C_TEXT
    });
  }

  // ==========================================
  // SLIDE 5: DICUMAROL & WARFARINA
  // ==========================================
  {
    const slide = pptx.addSlide();
    addSlideHeader(slide, 'Mecanismo Farmacológico: Vitamina K vs. Dicumarol y Warfarina', 'Módulo 4 - Farmacología Clínica', 5);

    slide.addShape(pptx.ShapeType.rect, {
      x: 0.8, y: 1.4, w: 5.7, h: 5.2,
      fill: { color: C_CARD_BG }, line: { color: C_CARD_BORDER, width: 1 }
    });
    slide.addText('Historia: La Enfermedad del Trébol Dulce', {
      x: 1.1, y: 1.65, w: 5.0, h: 0.4,
      fontSize: 14, fontFace: 'Arial', color: C_AMBER, bold: true
    });
    slide.addText([
      { text: '• Origen (Dakota del Norte, 1920): ', options: { bold: true, color: C_TEXT } },
      { text: 'Ganado alimentado con heno de trébol dulce fermentado desarrolló hemorragias letales espontáneas tras procedimientos rutinarios.\n\n', options: { color: C_MUTED } },
      { text: '• Aislamiento por Karl Paul Link (1940): ', options: { bold: true, color: C_TEXT } },
      { text: 'Identificó el dicumarol formado por Penicillium nigricans al metabolizar cumarinas del pasto húmedo como inhibidor de VKORC1.\n\n', options: { color: C_MUTED } },
      { text: '• Nacimiento de la Warfarina: ', options: { bold: true, color: C_TEXT } },
      { text: 'Derivado sintético patentado por WARF (Wisconsin Alumni Research Foundation), revolucionando la prevención tromboembólica en fibrilación auricular y válvulas cardíacas mecánicas.', options: { color: C_MUTED } }
    ], {
      x: 1.1, y: 2.15, w: 5.1, h: 4.2,
      fontSize: 10.5, fontFace: 'Arial'
    });

    slide.addShape(pptx.ShapeType.rect, {
      x: 6.8, y: 1.4, w: 5.7, h: 5.2,
      fill: { color: '181E30' }, line: { color: C_CARD_BORDER, width: 1 }
    });
    slide.addText('Bloqueo Enzimático & Protocolo de Antídoto', {
      x: 7.1, y: 1.65, w: 5.1, h: 0.4,
      fontSize: 14, fontFace: 'Arial', color: C_ROSE, bold: true
    });
    slide.addText([
      { text: '• Inhibición Competitiva de VKORC1:\n', options: { bold: true, color: C_TEXT } },
      { text: 'El dicumarol compite con el 2,3-epóxido de Vitamina K por el centro catalítico de la reductasa, impidiendo la regeneración de vitamina K hidroquinona activa.\n\n', options: { color: C_MUTED } },
      { text: '• Agotamiento de Factores Plasmáticos:\n', options: { bold: true, color: C_TEXT } },
      { text: 'El Factor VII (vida media: 6 horas) cae primero, prolongando el TP / INR. Posteriormente caen los factores IX, X y protrombina (II) a las 48-72 horas.\n\n', options: { color: C_MUTED } },
      { text: '• Protocolo de Reversión Inmediata:\n', options: { bold: true, color: C_TEXT } },
      { text: 'En hemorragia grave: Vitamina K1 intravenosa lenta (rescata reductasas NAD(P)H-dependientes alternativas) + Concentrado de Complejo Protrombínico (PCC de 4 factores) para hemostasia inmediata.', options: { color: C_MUTED } }
    ], {
      x: 7.1, y: 2.15, w: 5.1, h: 4.2,
      fontSize: 10.5, fontFace: 'Arial'
    });
  }

  // ==========================================
  // SLIDE 6: FARMACOGENÓMICA, CONTROL DEL INR Y DOACs
  // ==========================================
  {
    const slide = pptx.addSlide();
    addSlideHeader(slide, 'Farmacogenómica, Control del INR y DOACs', 'Módulo 5 - Terapéutica Moderna', 6);

    const blocks = [
      {
        x: 0.8, w: 3.7, title: 'Polimorfismos Genéticos',
        color: C_PURPLE,
        text: '• CYP2C9 (*2 y *3): Alelos de función reducida metabolizan la S-warfarina con menor velocidad, requiriendo dosis reducidas para evitar sangrado tóxico.\n\n• VKORC1 (-1639G>A): Variantes promotoras con baja expresión enzimática que aumentan notablemente la sensibilidad clínica a los antagonistas de vitamina K.'
      },
      {
        x: 4.8, w: 3.7, title: 'Monitoreo del INR',
        color: C_CYAN,
        text: '• International Normalized Ratio (INR):\nEstandariza el Tiempo de Protrombina usando el ISI (International Sensitivity Index).\n\n• Rango meta terapéutico:\n- Fibrilación auricular / TVP: INR 2.0 - 3.0\n- Válvulas cardíacas mecánicas: INR 2.5 - 3.5\n\n• TTR: El tiempo en rango terapéutico debe mantenerse > 70%.'
      },
      {
        x: 8.8, w: 3.7, title: 'Nuevos Anticoagulantes (DOACs)',
        color: C_TEAL,
        text: '• Inhibidores directos del Factor Xa:\nApixabán, Rivaroxabán, Edoxabán.\nAntídoto específico: Andexanet alfa.\n\n• Inhibidor directo de Trombina (IIa):\nDabigatrán.\nAntídoto monoclonal: Idarucizumab.\n\n• Ventajas: Dosis fijas, sin monitoreo rutinario de coagulación ni interacción con vitamina K de la dieta.'
      }
    ];

    blocks.forEach(b => {
      slide.addShape(pptx.ShapeType.rect, {
        x: b.x, y: 1.4, w: b.w, h: 5.2,
        fill: { color: C_CARD_BG }, line: { color: C_CARD_BORDER, width: 1 }
      });
      slide.addText(b.title, {
        x: b.x + 0.25, y: 1.65, w: b.w - 0.5, h: 0.4,
        fontSize: 13, fontFace: 'Arial', color: b.color, bold: true
      });
      slide.addText(b.text, {
        x: b.x + 0.25, y: 2.15, w: b.w - 0.5, h: 4.2,
        fontSize: 10, fontFace: 'Arial', color: C_MUTED
      });
    });
  }

  // ==========================================
  // SLIDE 7: COAGULOPATÍAS, TROMBOSIS Y FIBRINÓLISIS
  // ==========================================
  {
    const slide = pptx.addSlide();
    addSlideHeader(slide, 'Trastornos de la Coagulación, Trombosis y Fibrinólisis', 'Módulo 6 - Patología Hemostática', 7);

    const trio = [
      {
        x: 0.8, w: 3.7, title: 'Coagulopatías Congénitas',
        color: C_ROSE,
        text: '• Hemofilia A: Deficiencia del Factor VIII ligado al cromosoma X. Provoca hemartrosis espontáneas.\n\n• Hemofilia B (Enfermedad de Christmas): Deficiencia de Factor IX (factor K-dependiente).\n\n• Enfermedad de Von Willebrand: Déficit de vWF, alterando adhesión plaquetaria y estabilidad del Factor VIII circulante.'
      },
      {
        x: 4.8, w: 3.7, title: 'Triada de Virchow & Trombosis',
        color: C_AMBER,
        text: '• Tres factores de trombogénesis:\n1. Lesión endotelial (hipertensión, ateroma)\n2. Estasis venosa o flujo turbulento\n3. Hipercoagulabilidad sanguínea\n\n• Trombofilias hereditarias: Mutación del Factor V Leiden (resistencia a proteína C activada) y mutación G20210A de protrombina.'
      },
      {
        x: 8.8, w: 3.7, title: 'Vía Fibrinolítica & Dímero D',
        color: C_CYAN,
        text: '• Activador Tisular del Plasminógeno (t-PA): Sintetizado por células endoteliales, activa el plasminógeno adsorbido a fibrina hacia Plasmina activa.\n\n• Degradación del trombo: La plasmina rompe la malla en productos solubles (FDP).\n\n• Dímero D: Marcador sérico de degradación de fibrina reticulada por Factor XIIIa; valor clave para descartar TVP y TEP.'
      }
    ];

    trio.forEach(item => {
      slide.addShape(pptx.ShapeType.rect, {
        x: item.x, y: 1.4, w: item.w, h: 5.2,
        fill: { color: C_CARD_BG }, line: { color: C_CARD_BORDER, width: 1 }
      });
      slide.addText(item.title, {
        x: item.x + 0.25, y: 1.65, w: item.w - 0.5, h: 0.4,
        fontSize: 13, fontFace: 'Arial', color: item.color, bold: true
      });
      slide.addText(item.text, {
        x: item.x + 0.25, y: 2.15, w: item.w - 0.5, h: 4.2,
        fontSize: 10, fontFace: 'Arial', color: C_MUTED
      });
    });
  }

  // ==========================================
  // SLIDE 8: SISTEMA ENDOCRINO INTRO
  // ==========================================
  {
    const slide = pptx.addSlide();
    addSlideHeader(slide, 'Sistema Endocrino: Coordinación Humoral a Larga Distancia', 'Módulo 7 - Fisiología Humoral', 8);

    slide.addShape(pptx.ShapeType.rect, {
      x: 0.8, y: 1.4, w: 5.7, h: 5.2,
      fill: { color: C_CARD_BG }, line: { color: C_CARD_BORDER, width: 1 }
    });
    slide.addText('Naturaleza Química de las Hormonas', {
      x: 1.1, y: 1.65, w: 5.0, h: 0.4,
      fontSize: 14, fontFace: 'Arial', color: C_CYAN, bold: true
    });
    slide.addText([
      { text: '1. Hormonas Peptídicas e Hidrosolubles:\n', options: { bold: true, color: C_TEXT } },
      { text: '• Insulina, Glucagón, TSH, ACTH, ADH, Oxitocina.\n• Circulan libres en plasma disueltas en agua.\n• Receptores de membrana acoplados a proteína G (GPCR) o tirosina quinasa (segundos mensajeros: AMPc, IP3, DAG, Ca²⁺).\n\n', options: { color: C_MUTED } },
      { text: '2. Hormonas Liposolubles & Esteroideas:\n', options: { bold: true, color: C_TEXT } },
      { text: '• Cortisol, Aldosterona, Estrógenos, Testosterona, T3/T4.\n• Circulan unidas a proteínas transportadoras (albúmina, CBG, TBG).\n• Difunden a través de la bicapa lipídica y se unen a receptores intracelulares citosólicos o nucleares, modulando transcripción génica.', options: { color: C_MUTED } }
    ], {
      x: 1.1, y: 2.15, w: 5.1, h: 4.2,
      fontSize: 10.5, fontFace: 'Arial'
    });

    slide.addShape(pptx.ShapeType.rect, {
      x: 6.8, y: 1.4, w: 5.7, h: 5.2,
      fill: { color: '152035' }, line: { color: C_CARD_BORDER, width: 1 }
    });
    slide.addText('Modalidades de Comunicación Intercelular', {
      x: 7.1, y: 1.65, w: 5.1, h: 0.4,
      fontSize: 14, fontFace: 'Arial', color: C_TEAL, bold: true
    });
    slide.addText([
      { text: '• Señalización Endocrina Clásica:\n', options: { bold: true, color: C_TEXT } },
      { text: 'La hormona se vierte al torrente circulatorio general alcanzando células diana distantes dotadas del receptor específico con afinidad nanomolar.\n\n', options: { color: C_MUTED } },
      { text: '• Señalización Paracrina:\n', options: { bold: true, color: C_TEXT } },
      { text: 'Acción en el microambiente tisular vecino inmediato sin entrar masivamente a la circulación (ej. somatostatina en islotes de Langerhans).\n\n', options: { color: C_MUTED } },
      { text: '• Neuroendocrina:\n', options: { bold: true, color: C_TEXT } },
      { text: 'Neuronas hipotalámicas vierten neurohormonas hacia capilares especializados (sistema porta hipofisario o neurohipófisis).', options: { color: C_MUTED } }
    ], {
      x: 7.1, y: 2.15, w: 5.1, h: 4.2,
      fontSize: 10.5, fontFace: 'Arial'
    });
  }

  // ==========================================
  // SLIDE 9: GLÁNDULAS PRINCIPALES
  // ==========================================
  {
    const slide = pptx.addSlide();
    addSlideHeader(slide, 'Topografía y Función de las Glándulas Principales', 'Módulo 8 - Anatomía y Endocrinología', 9);

    const glands = [
      {
        name: 'Hipófisis (Pituitaria)',
        region: 'Silla turca esfenoidal',
        hormones: 'Adeno: GH, TSH, ACTH, FSH, LH, PRL.\nNeuro: ADH (vasopresina) y Oxitocina.',
        role: 'Glándula maestra que coordina el crecimiento, tiroides, corteza adrenal y reproducción.'
      },
      {
        name: 'Tiroides y Paratiroides',
        region: 'Cuello anterior / tráquea',
        hormones: 'T3, T4, Calcitonina.\nParatiroides: Parathormona (PTH).',
        role: 'Regulación del metabolismo basal celular y control estricto de la calcemia iónica.'
      },
      {
        name: 'Glándulas Suprarrenales',
        region: 'Polos renales superiores',
        hormones: 'Corteza: Cortisol, Aldosterona, DHEA.\nMédula: Adrenalina y Noradrenalina.',
        role: 'Respuesta al estrés agudo y crónico, equilibrio hidroelectrolítico y tono cardiovascular.'
      },
      {
        name: 'Páncreas Endocrino',
        region: 'Retroperitoneo / C-duodenal',
        hormones: 'Células Beta: Insulina.\nCélulas Alfa: Glucagón.\nDelta: Somatostatina.',
        role: 'Monitoreo de glucosa minuto a minuto: lipogénesis vs. gluconeogénesis/glucogenólisis.'
      },
      {
        name: 'Gónadas (Ovarios / Testículos)',
        region: 'Pelvis / Bolsas escrotales',
        hormones: 'Estradiol, Progesterona, Inhibina.\nCélulas Leydig: Testosterona.',
        role: 'Gametogénesis, caracteres sexuales secundarios, trofismo óseo y fertilidad.'
      },
      {
        name: 'Epífisis (Glándula Pineal)',
        region: 'Techo del diencéfalo',
        hormones: 'Melatonina (N-acetil-5-metoxitriptamina).',
        role: 'Transducción fotoneuroendocrina y sincronización de ritmos circadianos día/noche.'
      }
    ];

    glands.forEach((g, idx) => {
      const col = idx % 3;
      const row = Math.floor(idx / 3);
      const x = 0.8 + col * 4.0;
      const y = 1.4 + row * 2.65;

      slide.addShape(pptx.ShapeType.rect, {
        x: x, y: y, w: 3.75, h: 2.45,
        fill: { color: C_CARD_BG }, line: { color: C_CARD_BORDER, width: 1 }
      });
      slide.addText(g.name, {
        x: x + 0.2, y: y + 0.15, w: 3.35, h: 0.35,
        fontSize: 12, fontFace: 'Arial', color: C_CYAN, bold: true
      });
      slide.addText(`${g.region}`, {
        x: x + 0.2, y: y + 0.5, w: 3.35, h: 0.25,
        fontSize: 9, fontFace: 'Arial', color: C_TEAL, italic: true
      });
      slide.addText(`Hormonas: ${g.hormones}\n\nFunción: ${g.role}`, {
        x: x + 0.2, y: y + 0.8, w: 3.35, h: 1.5,
        fontSize: 9.5, fontFace: 'Arial', color: C_MUTED
      });
    });
  }

  // ==========================================
  // SLIDE 10: EJES NEUROENDOCRINOS Y FEEDBACK
  // ==========================================
  {
    const slide = pptx.addSlide();
    addSlideHeader(slide, 'Ejes Neuroendocrinos y Circuitos de Retroalimentación', 'Módulo 9 - Fisiología Cibernética', 10);

    const axes = [
      {
        x: 0.8, title: 'Eje Tiroideo (H-H-T)',
        color: C_CYAN,
        hypothalamus: 'TRH (Hormona liberadora de tirotropina)',
        pituitary: 'TSH (Tirotropina adenohipofisaria)',
        effector: 'Tiroides -> Secreción de T3 y T4 libre',
        feedback: 'T4 y T3 inhiben por retroalimentación negativa la transcripción de TSH en adenohipófisis y TRH en hipotálamo.'
      },
      {
        x: 4.8, title: 'Eje Adrenal (H-H-A)',
        color: C_AMBER,
        hypothalamus: 'CRH (Hormona liberadora de corticotropina)',
        pituitary: 'ACTH (Corticotropina adenohipofisaria)',
        effector: 'Corteza Suprarrenal -> Secreción de Cortisol',
        feedback: 'El cortisol plasmático elevado bloquea receptores hipofisarios y de la corteza límbica, cerrando el bucle homeostático de estrés.'
      },
      {
        x: 8.8, title: 'Osmorregulación (Eje ADH)',
        color: C_TEAL,
        hypothalamus: 'Osmorreceptores del núcleo supraóptico',
        pituitary: 'Neurohipófisis -> Secreción de Vasopresina / ADH',
        effector: 'Túbulo colector renal -> Acuaporinas-2 (AQP2)',
        feedback: 'Retiene agua libre de solutos, normaliza la osmolaridad plasmática (285-295 mOsm/kg) e inhibe el estímulo de la sed.'
      }
    ];

    axes.forEach(ax => {
      slide.addShape(pptx.ShapeType.rect, {
        x: ax.x, y: 1.4, w: 3.75, h: 5.2,
        fill: { color: C_CARD_BG }, line: { color: C_CARD_BORDER, width: 1 }
      });
      slide.addText(ax.title, {
        x: ax.x + 0.2, y: 1.65, w: 3.35, h: 0.4,
        fontSize: 13, fontFace: 'Arial', color: ax.color, bold: true
      });

      slide.addText([
        { text: '1. Estación Hipotalámica:\n', options: { bold: true, color: C_TEXT } },
        { text: `${ax.hypothalamus}\n\n`, options: { color: C_MUTED } },
        { text: '2. Transducción Adenohipofisaria:\n', options: { bold: true, color: C_TEXT } },
        { text: `${ax.pituitary}\n\n`, options: { color: C_MUTED } },
        { text: '3. Órgano Efector Periférico:\n', options: { bold: true, color: C_TEXT } },
        { text: `${ax.effector}\n\n`, options: { color: C_MUTED } },
        { text: '4. Servomecanismo de Feedback:\n', options: { bold: true, color: ax.color } },
        { text: `${ax.feedback}`, options: { color: C_TEXT } }
      ], {
        x: ax.x + 0.2, y: 2.15, w: 3.35, h: 4.2,
        fontSize: 9.5, fontFace: 'Arial'
      });
    });
  }

  // ==========================================
  // SLIDE 11: INTEGRACIÓN METABÓLICA Y BALANCE
  // ==========================================
  {
    const slide = pptx.addSlide();
    addSlideHeader(slide, 'Integración Metabólica y Balance Homeostático', 'Módulo 10 - Fisiología Integrativa', 11);

    slide.addShape(pptx.ShapeType.rect, {
      x: 0.8, y: 1.4, w: 5.7, h: 5.2,
      fill: { color: C_CARD_BG }, line: { color: C_CARD_BORDER, width: 1 }
    });
    slide.addText('Regulación Estricta de la Calcemia Iónica (Ca²⁺)', {
      x: 1.1, y: 1.65, w: 5.0, h: 0.4,
      fontSize: 13, fontFace: 'Arial', color: C_CYAN, bold: true
    });
    slide.addText([
      { text: '• Concentración normal: ', options: { bold: true, color: C_TEXT } },
      { text: '8.5 a 10.5 mg/dL (1.1 a 1.3 mmol/L ionizado).\n\n', options: { color: C_MUTED } },
      { text: '• Parathormona (PTH): ', options: { bold: true, color: C_TEXT } },
      { text: 'Estimulada por hipocalcemia vía sensor CaSR. Activa osteoclastos vía RANKL, aumenta reabsorción renal distal de Ca²⁺ e induce 1-alfa-hidroxilasa para formar calcitriol activo (1,25-(OH)₂D₃).\n\n', options: { color: C_MUTED } },
      { text: '• Calcitonina: ', options: { bold: true, color: C_TEXT } },
      { text: 'Secretada por células C tiroideas frente a hipercalcemia; frena transitoriamente la resorción ósea.\n\n', options: { color: C_MUTED } },
      { text: '• Puente Fisiológico: ', options: { bold: true, color: C_CYAN } },
      { text: 'El calcio ionizado liberado por la PTH es el ligando divalente indispensable para que los factores carboxilados por Vitamina K anclen al endotelio.', options: { color: C_TEXT } }
    ], {
      x: 1.1, y: 2.15, w: 5.1, h: 4.2,
      fontSize: 10, fontFace: 'Arial'
    });

    slide.addShape(pptx.ShapeType.rect, {
      x: 6.8, y: 1.4, w: 5.7, h: 5.2,
      fill: { color: '162238' }, line: { color: C_CARD_BORDER, width: 1 }
    });
    slide.addText('Dinamismo Glucémico: Insulina vs. Glucagón', {
      x: 7.1, y: 1.65, w: 5.1, h: 0.4,
      fontSize: 13, fontFace: 'Arial', color: C_TEAL, bold: true
    });
    slide.addText([
      { text: '• Insulina (Hormona Anabólica):\n', options: { bold: true, color: C_TEXT } },
      { text: 'Secretada por células beta ante hiperglucemia. Provoca traslocación de GLUT4 en miocitos y adipocitos, glucogenogénesis hepática y lipogénesis.\n\n', options: { color: C_MUTED } },
      { text: '• Glucagón (Hormona de Alerta Energética):\n', options: { bold: true, color: C_TEXT } },
      { text: 'Secretado por células alfa ante hipoglucemia en ayuno. Vía proteína Gs y AMPc estimula la glucogenólisis y gluconeogénesis hepática.\n\n', options: { color: C_MUTED } },
      { text: '• Cooperación Inter-orgánica:\n', options: { bold: true, color: C_TEXT } },
      { text: 'El hígado actúa como el epicentro metabólico común: sintetiza factores de coagulación dependientes de Vitamina K y responde simultáneamente a insulina y glucagón para mantener la homeostasis energética.', options: { color: C_MUTED } }
    ], {
      x: 7.1, y: 2.15, w: 5.1, h: 4.2,
      fontSize: 10, fontFace: 'Arial'
    });
  }

  // ==========================================
  // SLIDE 12: CASOS CLÍNICOS & PREGUNTAS CLAVE
  // ==========================================
  {
    const slide = pptx.addSlide();
    addSlideHeader(slide, 'Casos Clínicos & Evaluación de Razonamiento Fisiológico', 'Módulo 11 - Razonamiento Clínico', 12);

    const cases = [
      {
        x: 0.8, w: 5.7, title: 'Caso Clínico 1: Toxicidad por Cumarínicos',
        patient: 'Paciente masculino de 68 años con fibrilación auricular anticoagulado con Warfarina acude a urgencias por hematuria franca y epistaxis. INR = 8.5.',
        solution: 'Conducta Médica Inmediata:\n1. Suspender de inmediato la dosis de Warfarina.\n2. Administrar Vitamina K1 (Fitomenadiona 5-10 mg) por infusión intravenosa lenta.\n3. Administrar Concentrado de Complejo Protrombínico (PCC) de 4 factores para reversión inmediata sin sobrecarga de volumen.'
      },
      {
        x: 6.8, w: 5.7, title: 'Caso Clínico 2: Hipocalcemia y Tetania Post-Tiroidectomía',
        patient: 'Mujer de 42 años sometida a tiroidectomía total por bocio multinodular presenta a las 36 horas parestesias periorales, signo de Chvostek y signo de Trousseau positivos.',
        solution: 'Mecanismo & Manejo:\n1. Lesión o desvascularización inadvertida de las 4 glándulas paratiroides que causa caída fulminante de PTH.\n2. La hipocalcemia resultante incrementa la permeabilidad neuronal a iones Na⁺, despolarizando el umbral neuromuscular espontáneo.\n3. Tratamiento: Gluconato de calcio IV urgente + Calcitriol oral.'
      }
    ];

    cases.forEach(cs => {
      slide.addShape(pptx.ShapeType.rect, {
        x: cs.x, y: 1.4, w: cs.w, h: 5.2,
        fill: { color: C_CARD_BG }, line: { color: C_CARD_BORDER, width: 1 }
      });
      slide.addText(cs.title, {
        x: cs.x + 0.25, y: 1.65, w: cs.w - 0.5, h: 0.4,
        fontSize: 13, fontFace: 'Arial', color: C_CYAN, bold: true
      });
      slide.addText(`PRESENTACIÓN DEL CASO:\n${cs.patient}`, {
        x: cs.x + 0.25, y: 2.15, w: cs.w - 0.5, h: 1.5,
        fontSize: 10, fontFace: 'Arial', color: C_TEXT
      });
      slide.addShape(pptx.ShapeType.rect, {
        x: cs.x + 0.25, y: 3.75, w: cs.w - 0.5, h: 0.05,
        fill: { color: C_CARD_BORDER }
      });
      slide.addText(cs.solution, {
        x: cs.x + 0.25, y: 3.9, w: cs.w - 0.5, h: 2.5,
        fontSize: 9.5, fontFace: 'Arial', color: C_MUTED
      });
    });
  }

  // ==========================================
  // SLIDE 13: CONCLUSIONES & REFERENCIAS APA
  // ==========================================
  {
    const slide = pptx.addSlide();
    addSlideHeader(slide, 'Conclusiones y Referencias Bibliográficas (Normas APA)', 'Módulo 12 - Marco Teórico y Bibliografía', 13);

    slide.addShape(pptx.ShapeType.rect, {
      x: 0.8, y: 1.4, w: 5.7, h: 5.2,
      fill: { color: C_CARD_BG }, line: { color: C_CARD_BORDER, width: 1 }
    });
    slide.addText('Conclusiones Académicas Principales', {
      x: 1.1, y: 1.65, w: 5.0, h: 0.4,
      fontSize: 13, fontFace: 'Arial', color: C_TEAL, bold: true
    });
    slide.addText([
      { text: '1. Interdependencia Molecular: ', options: { bold: true, color: C_TEXT } },
      { text: 'La Vitamina K demuestra que los micronutrientes son cofactores indispensables para reacciones esteocimétricas de carboxilación hepática.\n\n', options: { color: C_MUTED } },
      { text: '2. Farmacología Racional: ', options: { bold: true, color: C_TEXT } },
      { text: 'El bloqueo de la VKORC1 por warfarina versus la inhibición directa de DOACs ejemplifica la evolución de la terapéutica antitrombótica basada en blancos moleculares selectivos.\n\n', options: { color: C_MUTED } },
      { text: '3. Fisiología en Red: ', options: { bold: true, color: C_TEXT } },
      { text: 'El eje neuroendocrino y el control hemostático no son entes aislados; comparten el ion Ca²⁺, la perfusión vascular y servomecanismos de feedback que mantienen la viabilidad del organismo humano.', options: { color: C_MUTED } }
    ], {
      x: 1.1, y: 2.15, w: 5.1, h: 4.2,
      fontSize: 10, fontFace: 'Arial'
    });

    slide.addShape(pptx.ShapeType.rect, {
      x: 6.8, y: 1.4, w: 5.7, h: 5.2,
      fill: { color: '131B2E' }, line: { color: C_CARD_BORDER, width: 1 }
    });
    slide.addText('Bibliografía Médica Estándar (Normas APA 7.ª Edición)', {
      x: 7.1, y: 1.65, w: 5.1, h: 0.4,
      fontSize: 13, fontFace: 'Arial', color: C_CYAN, bold: true
    });
    slide.addText([
      { text: '• Hall, J. E., & Hall, M. E. (2021). ', options: { bold: true, color: C_TEXT } },
      { text: 'Guyton and Hall Textbook of Medical Physiology (14th ed.). Elsevier.\n\n', options: { color: C_MUTED } },
      { text: '• Nelson, D. L., & Cox, M. M. (2021). ', options: { bold: true, color: C_TEXT } },
      { text: 'Lehninger Principles of Biochemistry (8th ed.). W. H. Freeman and Company.\n\n', options: { color: C_MUTED } },
      { text: '• Boron, W. F., & Boulpaep, E. L. (2017). ', options: { bold: true, color: C_TEXT } },
      { text: 'Medical Physiology (3rd ed.). Elsevier Health Sciences.\n\n', options: { color: C_MUTED } },
      { text: '• Berkner, K. L. (2005). ', options: { bold: true, color: C_TEXT } },
      { text: 'The vitamin K-dependent carboxylation system. Annual Review of Nutrition, 25(1), 127–149.\n\n', options: { color: C_MUTED } },
      { text: '• Melmed, S., et al. (2020). ', options: { bold: true, color: C_TEXT } },
      { text: 'Williams Textbook of Endocrinology (14th ed.). Elsevier.', options: { color: C_MUTED } }
    ], {
      x: 7.1, y: 2.15, w: 5.1, h: 4.2,
      fontSize: 9.5, fontFace: 'Arial'
    });
  }

  // 1. Generar buffer binario en memoria desde pptxgenjs
  const rawBuffer = await pptx.write({ outputType: 'nodebuffer' });

  // 2. Sanitización OpenXML estricta con JSZip para compatibilidad total con PowerPoint
  const zip = await JSZip.loadAsync(rawBuffer);

  // A. Eliminar directorios de andamiaje vacíos que provocan repair warnings
  const emptyDirs = ['ppt/charts/_rels/', 'ppt/charts/', 'ppt/embeddings/', 'ppt/media/'];
  emptyDirs.forEach(d => { if (zip.files[d]) zip.remove(d); });

  // B. Eliminar archivos de notas (notesSlides y notesMasters) que poseen placeholders malformados
  Object.keys(zip.files).forEach(f => {
    if (f.startsWith('ppt/notesSlides/') || f.startsWith('ppt/notesMasters/')) {
      zip.remove(f);
    }
  });

  // C. Limpiar [Content_Types].xml (eliminar ghost slideMaster overrides y notas)
  let ctXml = await zip.file('[Content_Types].xml').async('string');
  ctXml = ctXml.replace(/<Override\s+PartName=\"\/ppt\/slideMasters\/slideMaster([2-9]|\d{2,})\.xml\"[^>]*\/>/g, '');
  ctXml = ctXml.replace(/<Override\s+PartName=\"\/ppt\/notes[^\"]+\"[^>]*\/>/g, '');
  zip.file('[Content_Types].xml', ctXml);

  // D. Limpiar ppt/presentation.xml (remover referencia a notesMasterIdLst)
  let presXml = await zip.file('ppt/presentation.xml').async('string');
  presXml = presXml.replace(/<p:notesMasterIdLst>[\s\S]*?<\/p:notesMasterIdLst>/g, '');
  zip.file('ppt/presentation.xml', presXml);

  // E. Limpiar ppt/_rels/presentation.xml.rels (remover relación notesMaster)
  let presRelsXml = await zip.file('ppt/_rels/presentation.xml.rels').async('string');
  presRelsXml = presRelsXml.replace(/<Relationship[^>]*Target=\"notesMasters[^\"]*\"[^>]*\/>/g, '');
  zip.file('ppt/_rels/presentation.xml.rels', presRelsXml);

  // F. Limpiar cada ppt/slides/_rels/slide*.xml.rels (remover relación a notesSlide)
  const relsFiles = Object.keys(zip.files).filter(f => f.startsWith('ppt/slides/_rels/slide'));
  for (const rf of relsFiles) {
    let relContent = await zip.file(rf).async('string');
    relContent = relContent.replace(/<Relationship[^>]*Target=\"\.\.\/notesSlides[^\"]*\"[^>]*\/>/g, '');
    zip.file(rf, relContent);
  }

  // G. Validar que cada Override en [Content_Types].xml exista físicamente
  const updatedCt = await zip.file('[Content_Types].xml').async('string');
  const overrides = [...updatedCt.matchAll(/PartName=\"([^\"]+)\"/g)].map(m => m[1]);
  for (const o of overrides) {
    const p = o.replace(/^\//, '');
    if (!zip.file(p)) {
      console.warn('Advertencia: Override residual removido:', p);
      ctXml = ctXml.replace(new RegExp(`<Override\\s+PartName=\\"${o}\\"[^>]*\\/>`, 'g'), '');
      zip.file('[Content_Types].xml', ctXml);
    }
  }

  // 3. Generar archivo PPTX 100% puro y conforme con OpenXML
  const sanitizedBuffer = await zip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: 6 }
  });

  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const outputPathPublic = path.join(publicDir, 'BioEndo_Lab_Presentacion.pptx');
  const outputPathRoot = path.resolve('BioEndo_Lab_Presentacion.pptx');

  fs.writeFileSync(outputPathPublic, sanitizedBuffer);
  fs.writeFileSync(outputPathRoot, sanitizedBuffer);

  const distDir = path.resolve('dist');
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'BioEndo_Lab_Presentacion.pptx'), sanitizedBuffer);
  }

  console.log('Presentación OpenXML 100% limpia y validada en:', outputPathPublic);
  console.log('Copia guardada en raíz:', outputPathRoot);
}

createPresentation().catch(err => {
  console.error('Error al generar la presentación PPTX:', err);
  process.exit(1);
});
