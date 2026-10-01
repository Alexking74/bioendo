import React, { useState } from 'react';
import { 
  Brain, 
  Flame, 
  Activity, 
  ShieldAlert, 
  HeartPulse, 
  ChevronRight, 
  X, 
  Info, 
  CheckCircle2, 
  AlertCircle,
  Stethoscope,
  Sparkles
} from 'lucide-react';
import { glandsData } from '../data/glandsData';
import { Gland } from '../types';

export const EndocrineSection: React.FC = () => {
  const [selectedGland, setSelectedGland] = useState<Gland | null>(null);

  const getGlandIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-6 h-6 text-teal-600" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-amber-500" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-emerald-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-indigo-600" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-rose-500" />;
      default:
        return <Activity className="w-6 h-6 text-teal-600" />;
    }
  };

  return (
    <section id="glandulas" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14" id="sistema-endocrino">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-100 text-cyan-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Sección 2 • Eje Neuroendocrino</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            El Eje Endocrino y las Glándulas Principales
          </h2>
          <p className="mt-3 text-lg text-slate-600 leading-relaxed">
            Las glándulas endocrinas vierten mensajeros químicos directamente a la microcirculación para modular el 
            metabolismo basal, el volumen de fluidos, la respuesta al estrés, el crecimiento y la reproducción.
          </p>
        </div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {glandsData.map((gland) => (
            <div
              key={gland.id}
              className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-teal-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon + ID */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                    {getGlandIcon(gland.iconName)}
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    {gland.id.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  {gland.name}
                </h3>
                <p className="text-xs font-semibold text-teal-600 mt-0.5 mb-2">
                  {gland.subtitle}
                </p>

                <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                  {gland.primaryRole}
                </p>

                {/* Regions / Lobes badges */}
                <div className="space-y-1.5 pt-3 border-t border-slate-200/60 mb-4">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Divisiones / Lóbulos:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {gland.lobesOrRegions.map((region, rIdx) => (
                      <span 
                        key={rIdx}
                        className="text-[11px] font-medium bg-white text-slate-700 px-2.5 py-1 rounded-md border border-slate-200"
                      >
                        {region.regionName.split('(')[0]}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button to Open Modal */}
              <button
                onClick={() => setSelectedGland(gland)}
                className="w-full mt-4 inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-teal-700 bg-teal-50 hover:bg-teal-600 hover:text-white rounded-xl border border-teal-200 hover:border-teal-600 transition-all duration-200"
              >
                <span>Explorar Fisiología & Hormonas</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}

          {/* Educational Quick Reference Card */}
          <div className="bg-gradient-to-br from-teal-900 to-slate-900 text-white rounded-2xl p-6 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-lg bg-teal-500/20 border border-teal-400/30 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-teal-300" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Servomecanismos de Retroalimentación
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Los ejes hipotálamo-hipófisis-glándula periférica operan primariamente por retroalimentación negativa 
                (feedback inhibitorio), garantizando que concentraciones suficientes de la hormona efectora frenen la secreción trófica upstream.
              </p>
            </div>
            <div className="p-3 bg-white/10 rounded-xl text-[11px] text-teal-200 border border-white/10">
              <strong>Nota clínica:</strong> El pico de estradiol preovulatorio y el reflejo de oxitocina durante el parto operan por <strong>retroalimentación positiva</strong>.
            </div>
          </div>
        </div>

        {/* Modal Dialog for Gland Details */}
        {selectedGland && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto">
            <div 
              className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-200 flex items-start justify-between bg-slate-50 rounded-t-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                    {getGlandIcon(selectedGland.iconName)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-slate-900">{selectedGland.name}</h3>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-teal-100 text-teal-800">
                        {selectedGland.location}
                      </span>
                    </div>
                    <p className="text-xs text-teal-700 font-medium mt-0.5">{selectedGland.subtitle}</p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedGland(null)}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="p-6 space-y-6 overflow-y-auto">
                
                {/* Primary Function Overview */}
                <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-200/80">
                  <h4 className="text-xs font-bold text-teal-900 uppercase tracking-wider mb-1">
                    Rol Homeostático Primario
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedGland.primaryRole}
                  </p>
                </div>

                {/* Lobes & Hormones Detailed Breakdown */}
                <div className="space-y-4">
                  <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-teal-600" />
                    <span>Secreciones Hormonales por Región Anatómica</span>
                  </h4>

                  <div className="grid grid-cols-1 gap-4">
                    {selectedGland.lobesOrRegions.map((region, idx) => (
                      <div key={idx} className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                        <div className="mb-3">
                          <h5 className="text-sm font-bold text-slate-900">{region.regionName}</h5>
                          <p className="text-xs text-slate-500 mt-0.5">{region.description}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                          {region.hormones.map((hormone, hIdx) => (
                            <div key={hIdx} className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-xs">
                              <div className="flex items-center justify-between mb-1.5">
                                <span className="text-xs font-bold text-slate-900">{hormone.name}</span>
                                {hormone.acronym && (
                                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                                    {hormone.acronym}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-slate-600 leading-relaxed mb-2">
                                <strong className="text-slate-800">Función:</strong> {hormone.function}
                              </p>
                              <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100 space-y-1">
                                <div><strong className="text-slate-700">Diana:</strong> {hormone.targetOrgan}</div>
                                <div><strong className="text-slate-700">Regulación:</strong> {hormone.regulation}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clinical Correlation */}
                <div className="border border-amber-200 rounded-xl p-4 bg-amber-50/60">
                  <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-2">
                    <AlertCircle className="w-4 h-4 text-amber-700" />
                    <span>Correlación Clínica: {selectedGland.clinicalCorrelation.condition}</span>
                  </div>
                  <p className="text-xs text-amber-900/90 leading-relaxed mb-3">
                    {selectedGland.clinicalCorrelation.mechanism}
                  </p>
                  <div>
                    <span className="text-[11px] font-bold text-amber-900 block mb-1">Manifestaciones y Signos Clínicos:</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {selectedGland.clinicalCorrelation.symptoms.map((symptom, sIdx) => (
                        <li key={sIdx} className="text-xs bg-white/80 border border-amber-200 p-2 rounded-md text-amber-900 flex items-start gap-1.5">
                          <span className="text-amber-600 font-bold">•</span>
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Biochemical Insight */}
                <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700">
                  <strong className="text-slate-900 block mb-1">Nota Bioquímica Avanzada:</strong>
                  {selectedGland.biochemicalInsight}
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-slate-200 bg-slate-50 rounded-b-2xl flex justify-end">
                <button
                  onClick={() => setSelectedGland(null)}
                  className="px-5 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors"
                >
                  Cerrar Ficha
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
