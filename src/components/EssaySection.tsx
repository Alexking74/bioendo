import React, { useState } from 'react';
import { 
  BookOpen, 
  FileText, 
  ExternalLink, 
  Quote, 
  CheckCircle2, 
  ChevronRight,
  List,
  Bookmark
} from 'lucide-react';
import { essayChapters } from '../data/essayData';

export const EssaySection: React.FC = () => {
  const [activeChapterId, setActiveChapterId] = useState<string>(essayChapters[0].id);
  const [readingFontSize, setReadingFontSize] = useState<'normal' | 'large'>('normal');

  const activeChapter = essayChapters.find(c => c.id === activeChapterId) || essayChapters[0];

  return (
    <section id="ensayo" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Sección 4 • Marco Teórico & Evidencia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Ensayo Académico y Argumentación Fisiológica
          </h2>
          <p className="mt-3 text-lg text-slate-600 leading-relaxed">
            Un análisis científico riguroso sobre las interconexiones entre la carboxilación dependiente de vitamina K, 
            la polimerización de la fibrina y la modulación humoral del eje neuroendocrino.
          </p>
        </div>

        {/* Reader Container Layout: Sidebar Chapters + Content Body */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col lg:flex-row">
          
          {/* Chapter Navigation Sidebar */}
          <div className="lg:w-1/3 bg-slate-100/70 p-6 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <List className="w-4 h-4 text-teal-600" />
                  <span>Índice del Ensayo</span>
                </span>
                <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                  APA 7.ª Ed.
                </span>
              </div>

              <div className="space-y-1.5">
                {essayChapters.map((chapter) => {
                  const isActive = chapter.id === activeChapterId;
                  return (
                    <button
                      key={chapter.id}
                      onClick={() => setActiveChapterId(chapter.id)}
                      className={`w-full text-left p-3 rounded-xl transition-all flex items-start justify-between gap-2 ${
                        isActive
                          ? 'bg-white text-teal-900 font-bold shadow-xs border border-teal-300 ring-1 ring-teal-400/20'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                      }`}
                    >
                      <div className="flex-1">
                        <span className="text-xs block leading-tight">{chapter.title}</span>
                      </div>
                      <ChevronRight className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isActive ? 'text-teal-600' : 'text-slate-300'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Note in Sidebar */}
            <div className="mt-8 p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-500">
              <span className="font-bold text-slate-700 block mb-1">Criterio Pedagógico:</span>
              Estructura formal con fundamentos de química de naftoquinonas, bioquímica enzimática y endocrinología celular.
            </div>
          </div>

          {/* Main Reading View */}
          <div className="lg:w-2/3 bg-white p-6 sm:p-10 flex flex-col justify-between">
            <div>
              
              {/* Header with Title & Font Resizer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                    {activeChapter.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-teal-700 font-medium mt-1">
                    {activeChapter.subtitle}
                  </p>
                </div>

                {/* Font Size Selector */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg self-start">
                  <button
                    onClick={() => setReadingFontSize('normal')}
                    className={`px-2.5 py-1 text-xs font-semibold rounded ${
                      readingFontSize === 'normal' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    A
                  </button>
                  <button
                    onClick={() => setReadingFontSize('large')}
                    className={`px-2.5 py-1 text-xs font-bold rounded ${
                      readingFontSize === 'large' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    A+
                  </button>
                </div>
              </div>

              {/* Essay Content Paragraphs */}
              <div className={`space-y-4 text-slate-700 leading-relaxed ${
                readingFontSize === 'large' ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
              }`}>
                {activeChapter.id === 'referencias-apa' ? (
                  <div className="space-y-3 bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      <Bookmark className="w-4 h-4 text-teal-600" />
                      <span>Bibliografía Académica Citada</span>
                    </div>
                    {activeChapter.content.map((refLine, idx) => (
                      <p key={idx} className="pl-6 -indent-6 text-xs sm:text-sm text-slate-700 leading-relaxed font-mono">
                        {refLine}
                      </p>
                    ))}
                  </div>
                ) : (
                  activeChapter.content.map((paragraph, pIdx) => (
                    <p key={pIdx} className="text-justify">
                      {paragraph}
                    </p>
                  ))
                )}
              </div>

            </div>

            {/* Bottom Navigation for Chapters */}
            <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Capítulo de lectura {essayChapters.findIndex(c => c.id === activeChapterId) + 1} de {essayChapters.length}
              </span>

              <div className="flex items-center gap-2">
                {essayChapters.findIndex(c => c.id === activeChapterId) < essayChapters.length - 1 && (
                  <button
                    onClick={() => {
                      const nextIdx = essayChapters.findIndex(c => c.id === activeChapterId) + 1;
                      setActiveChapterId(essayChapters[nextIdx].id);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700 hover:text-teal-800 bg-teal-50 hover:bg-teal-100 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <span>Siguiente Capítulo</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
