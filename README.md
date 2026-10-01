# BioEndo Lab - Plataforma Interactiva de Bioquímica y Endocrinología

Plataforma educativa interactiva sobre bioquímica y fisiología médica: **Vitamina K, Cascada de Coagulación, Antagonismo del Dicumarol y el Eje Neuroendocrino**, con formato de exposición académica completo en **PowerPoint (.pptx)** de 13 diapositivas y despliegue directo en **Render**.

---

## 📊 Presentación Oficial en PowerPoint (.pptx) para el Docente

El proyecto genera de forma automática la presentación completa en formato widescreen 16:9 con diseño clínico, paleta de alto contraste, tipografía optimizada, casos clínicos comentados y bibliografía según las normas APA 7.ª edición:

* **Archivo generado:** `BioEndo_Lab_Presentacion.pptx` (ubicado tanto en la raíz como en `public/` y `dist/`).
* **Descarga directa desde la web:** Botón **"Descargar PPTX"** en la barra superior de navegación, en el dock de presentación inferior y en la pantalla de inicio.
* **Comando para regenerar las diapositivas:**
  ```bash
  npm run build:pptx
  ```

### Contenido de las 13 Diapositivas:
1. **Portada Académica**: Título oficial, fundamentación interdisciplinaria y módulos de trabajo.
2. **Fundamentos y Medio Interno**: Postulados de Claude Bernard y Walter Cannon sobre homeostasis.
3. **Bioquímica de la Vitamina K**: Estructura de naftoquinona, ciclo redox VKORC1 y carboxilación gamma de residuos Gla.
4. **Cascada de Coagulación**: Fases de iniciación, amplificación, complejo protrombinasa y reticulación por Factor XIIIa.
5. **Vitamina K vs. Dicumarol y Warfarina**: Enfermedad del trébol dulce, inhibición competitiva y protocolo de reversión (Vitamina K1 + PCC).
6. **Farmacogenómica, Control del INR & DOACs**: Polimorfismos CYP2C9/VKORC1, rangos meta de INR y anticoagulantes de acción directa (Apixabán, Rivaroxabán, Dabigatrán).
7. **Trastornos de Coagulación, Trombosis & Fibrinólisis**: Hemofilias A/B, Triada de Virchow, t-PA, plasmina y dímero D.
8. **Eje Endocrino y Coordinación Humoral**: Señalización endocrina clásica vs. paracrina, hormonas peptídicas (GPCR) y esteroideas (receptores intracelulares).
9. **Cartografía de Glándulas Principales**: Hipófisis, tiroides, paratiroides, glándulas suprarrenales, páncreas endocrino y gónadas.
10. **Ejes Neuroendocrinos y Circuitos de Feedback**: Servomecanismos del Eje Tiroideo (H-H-T), Eje Adrenal (H-H-A) y Osmorregulación por Vasopresina (ADH).
11. **Integración Metabólica**: Homeostasis de la calcemia iónica (PTH/Calcitonina) y dinamismo glucémico (Insulina/Glucagón).
12. **Casos Clínicos & Razonamiento**: Resolución comentada de sobredosis por cumarínicos e hipocalcemia post-tiroidectomía con signos de Chvostek y Trousseau.
13. **Conclusiones & Referencias APA**: Síntesis integradora y citas formales (Guyton & Hall, Lehninger, Boron, Williams Endocrinology, Berkner).

---

## 🚀 Guía de Despliegue en Render (Paso a Paso)

Este repositorio está 100% optimizado para desplegarse en **Render** ([render.com](https://render.com)). Incluye el archivo de configuración `render.yaml`, `Dockerfile`, servidor `server.js` y scripts de Node.js.

---

### Paso 1: Subir el proyecto a GitHub

1. Abre una terminal (consola o Git Bash) en la carpeta de este proyecto:
   ```bash
   git init
   git add .
   git commit -m "BioEndo Lab: Presentacion Oficial y Plataforma Medica"
   ```
2. En [GitHub](https://github.com), crea un nuevo repositorio público o privado (por ejemplo, `bioendo-lab`).
3. Conecta tu carpeta local con el repositorio remoto de GitHub y sube los archivos:
   ```bash
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/bioendo-lab.git
   git push -u origin main
   ```

---

### Paso 2: Crear el servicio en Render

#### Opción A: Como Static Site (Recomendado y 100% Gratuito)
*La mejor opción para presentaciones: sin costos mensuales, CDN global inmediata, HTTPS automático y sin periodos de inactividad.*

1. Inicia sesión en [dashboard.render.com](https://dashboard.render.com/) (puedes registrarte con tu GitHub).
2. Haz clic en el botón superior **New +** y selecciona **Static Site**.
3. Selecciona tu repositorio de GitHub `bioendo-lab` y presiona **Connect**.
4. Render configurará automáticamente los campos según el `render.yaml`:
   - **Name**: `bioendo-lab` (o el nombre que prefieras)
   - **Branch**: `main`
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
5. Haz clic en **Create Static Site**.
6. En menos de un minuto tendrás tu enlace oficial (por ejemplo: `https://bioendo-lab.onrender.com`).

---

#### Opción B: Como Web Service (Node.js con Express)
*Si tu docente solicita explícitamente un backend con servidor Node:*

1. En Render, haz clic en **New +** > **Web Service**.
2. Conecta tu repositorio de GitHub.
3. Configura:
   - **Runtime**: `Node`
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start` (o `node server.js`)
4. Haz clic en **Create Web Service**.

---

## 💻 Comandos Disponibles

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo en vivo (puerto 3000)
npm run dev

# Generar la presentación de PowerPoint (.pptx)
npm run build:pptx

# Compilar para producción (genera PPTX + empaqueta Vite a dist/)
npm run build

# Iniciar servidor de producción con Express
npm start
```
