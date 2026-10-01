import React from 'react';
import { Dna, Heart, ExternalLink, ShieldCheck, BookOpen } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-teal-600 flex items-center justify-center text-white">
                <Dna className="w-5 h-5 text-teal-200" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                BioEndo<span className="text-teal-400">Lab</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Plataforma pedagógica interactiva para la divulgación y enseñanza de la bioquímica médica, 
              la hemostasia, el ciclo de la vitamina K y los servomecanismos homeostáticos del sistema endocrino humano.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Contenido revisado según estándares Guyton & Hall y Lehninger</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Navegación Temática
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#vitamina-k" className="hover:text-teal-300 transition-colors">
                  Vitamina K & Factores Gla
                </a>
              </li>
              <li>
                <a href="#vitamina-k" className="hover:text-teal-300 transition-colors">
                  Diagrama de Coagulación
                </a>
              </li>
              <li>
                <a href="#vitamina-k" className="hover:text-teal-300 transition-colors">
                  Caso Clínico del Dicumarol
                </a>
              </li>
              <li>
                <a href="#glandulas" className="hover:text-teal-300 transition-colors">
                  Hipófisis y Ejes Tróficos
                </a>
              </li>
              <li>
                <a href="#glandulas" className="hover:text-teal-300 transition-colors">
                  Tiroides, Páncreas y Suprarrenales
                </a>
              </li>
              <li>
                <a href="#cuestionario" className="hover:text-teal-300 transition-colors">
                  Quiz de 10 Preguntas
                </a>
              </li>
              <li>
                <a href="#ensayo" className="hover:text-teal-300 transition-colors">
                  Ensayo y Bibliografía APA
                </a>
              </li>
            </ul>
          </div>

          {/* Educational Disclaimer */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Aviso Divulgativo
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Este recurso tiene propósitos exclusivamente académicos, formativos y de divulgación científica. 
              No sustituye el criterio médico asistencial ni constituye una guía de prescripción clínica directa.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500">
              Desarrollado para estudiantes y profesionales de ciencias de la salud, medicina y bioquímica.
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} BioEndo Lab • Fisiología y Bioquímica Médica. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Diseñado con rigor académico y tipografía de precisión</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
