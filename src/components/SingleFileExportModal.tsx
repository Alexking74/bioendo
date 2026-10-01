import React, { useState } from 'react';
import { Download, Copy, Check, X, FileCode, ExternalLink } from 'lucide-react';

interface SingleFileExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SingleFileExportModal: React.FC<SingleFileExportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleDownload = async () => {
    try {
      const response = await fetch('/index-standalone.html');
      const text = await response.text();
      const blob = new Blob([text], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'index.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Error downloading file:', err);
    }
  };

  const handleCopyCode = async () => {
    try {
      const response = await fetch('/index-standalone.html');
      const text = await response.text();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Error copying code:', err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-slate-200 p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
            <FileCode className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Aplicación en Un Solo Archivo (Single-File)</h3>
            <p className="text-xs text-slate-500">Listo para guardar como <code className="text-teal-700 font-mono">index.html</code> y abrir sin dependencias rotas</p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
          Cumpliendo con tu requerimiento técnico, hemos generado el código completo con HTML5 semántico, 
          Tailwind CSS vía CDN, Google Fonts (Inter y Poppins), y JavaScript modular con el cuestionario en un 
          arreglo de objetos JSON.
        </p>

        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 mb-6 space-y-2 text-xs text-slate-600">
          <div className="flex items-center gap-2 text-slate-800 font-semibold">
            <span>Características del archivo descargable:</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div>• Cero dependencias locales rotas</div>
            <div>• 10 preguntas con feedback inmediato</div>
            <div>• Ficha de Vitamina K & Hemostasia</div>
            <div>• Eje endocrino con modales</div>
            <div>• Caso clínico del Dicumarol</div>
            <div>• Ensayo y referencias en APA</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleDownload}
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-xl shadow-sm transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Descargar index.html Autónomo</span>
          </button>

          <button
            onClick={handleCopyCode}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-xl transition-all"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? '¡Copiado al Portapapeles!' : 'Copiar Código'}</span>
          </button>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-[11px] text-slate-500">¿Tu docente te solicitó formato de exposición?</span>
          <a
            href="/BioEndo_Lab_Presentacion.pptx"
            download="BioEndo_Lab_Presentacion.pptx"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-300 rounded-lg transition-all"
          >
            <Download className="w-3.5 h-3.5 text-teal-700" />
            <span>Descargar PPTX (13 Diapositivas)</span>
          </a>
        </div>

        <div className="mt-3 text-center">
          <a
            href="/index-standalone.html"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-[11px] text-teal-600 hover:text-teal-800 font-medium"
          >
            <span>Abrir versión directa en una nueva pestaña</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
