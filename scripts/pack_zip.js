import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';

async function packRepo() {
  const zip = new JSZip();
  const ignore = ['node_modules', '.git', 'dist', '.aistudio', '.cache'];

  function addDir(dirPath, zipFolder) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    for (const ent of entries) {
      if (ignore.includes(ent.name)) continue;
      const fullPath = path.join(dirPath, ent.name);
      if (ent.isDirectory()) {
        const sub = zipFolder.folder(ent.name);
        addDir(fullPath, sub);
      } else if (ent.isFile()) {
        if (ent.name.endsWith('.zip')) continue;
        zipFolder.file(ent.name, fs.readFileSync(fullPath));
      }
    }
  }

  addDir('.', zip);

  const buf = await zip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: 6 }
  });

  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const outPathPublic = path.join(publicDir, 'bioendo-lab-repo.zip');
  const outPathRoot = path.resolve('bioendo-lab-repo.zip');

  fs.writeFileSync(outPathPublic, buf);
  fs.writeFileSync(outPathRoot, buf);

  const distDir = path.resolve('dist');
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'bioendo-lab-repo.zip'), buf);
  }

  console.log('Repositorio ZIP generado exitosamente en:', outPathPublic);
}

packRepo().catch(err => {
  console.error('Error al empaquetar repositorio ZIP:', err);
});
