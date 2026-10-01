import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos generados por Vite en la carpeta dist
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// Ruta explícita para la descarga de la presentación de diapositivas PPTX
app.get('/BioEndo_Lab_Presentacion.pptx', (req, res) => {
  const pptxDist = path.join(distPath, 'BioEndo_Lab_Presentacion.pptx');
  const pptxPublic = path.join(__dirname, 'public', 'BioEndo_Lab_Presentacion.pptx');
  const pptxRoot = path.join(__dirname, 'BioEndo_Lab_Presentacion.pptx');

  const fileToServe = [pptxDist, pptxPublic, pptxRoot].find(p => {
    try { return fs.existsSync(p); } catch { return false; }
  });

  if (fileToServe) {
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.presentationml.presentation');
    res.download(fileToServe, 'BioEndo_Lab_Presentacion.pptx');
  } else {
    res.status(404).send('Archivo de presentación no encontrado. Ejecuta npm run build:pptx primero.');
  }
});

// Soporte de navegación y rutas de SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`BioEndo Lab ejecutándose en el puerto ${PORT}`);
});
