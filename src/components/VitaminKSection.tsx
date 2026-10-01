import React, { useState } from 'react';
import { 
  Shield, 
  Sun, 
  Thermometer, 
  Droplet, 
  ArrowRight, 
  AlertTriangle, 
  Layers, 
  Check, 
  Microscope,
  RotateCcw,
  Sparkles,
  Info
} from 'lucide-react';
import { coagulationSteps, vitaminKProperties, dicumarolCaseStudy } from '../data/coagulationData';

export const VitaminKSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [simulationMode, setSimulationMode] = useState<'normal' | 'dicumarol'>('normal');

  const activeStep = coagulationSteps[activeStepIndex];

  return (
    <section id="vitamina-k" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-100 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Sección 1 • Bioquímica de la Hemostasia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Vitamina K y la Cascada de Coagulación
          </h2>
          <p className="mt-3 text-lg text-slate-600 leading-relaxed">
            La vitamina K es el cofactor indispensable para la carboxilación post-traduccional de los factores hemostáticos 
            clave. Sin este micronutriente, la sangre pierde su capacidad de formar una red de fibrina insoluble y hemostática.
          </p>
        </div>

        {/* 1. Ficha Técnica de Propiedades Físico-Químicas */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Microscope className="w-5 h-5 text-teal-600" />
              <span>Ficha Técnica: Propiedades Físico-Químicas de la Vitamina K</span>
            </h3>
            <span className="text-xs font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
              2-Metil-1,4-naftoquinona
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vitaminKProperties.map((prop, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all hover:border-teal-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${prop.badgeColor}`}>
                    {prop.tag}
                  </span>
                  {idx === 0 && <Droplet className="w-5 h-5 text-teal-600 group-hover:scale-110 transition-transform" />}
                  {idx === 1 && <Sun className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform" />}
                  {idx === 2 && <Thermometer className="w-5 h-5 text-slate-600 group-hover:scale-110 transition-transform" />}
                </div>

                <h4 className="text-lg font-bold text-slate-900 mb-2">{prop.property}</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{prop.description}</p>
                
                <div className="pt-3 border-t border-slate-100 bg-slate-50/50 -mx-6 -mb-6 p-4 rounded-b-xl">
                  <span className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                    Impacto Fisiológico / Clínico:
                  </span>
                  <p className="text-xs text-slate-600 leading-normal">{prop.physiologicalImpact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Diagrama de Flujo Paso a Paso de la Coagulación */}
        <div className="mb-16 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Layers className="w-5 h-5 text-teal-600" />
                <span>Diagrama de Flujo Fisiológico: Paso a Paso de la Coagulación</span>
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Haz clic en cada etapa para inspeccionar la bioquímica interfacial y molecular.
              </p>
            </div>

            {/* Mode Switcher: Normal vs Dicumarol */}
            <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl self-start">
              <button
                onClick={() => setSimulationMode('normal')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  simulationMode === 'normal'
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Estado Fisiológico Normal
              </button>
              <button
                onClick={() => setSimulationMode('dicumarol')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                  simulationMode === 'dicumarol'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-rose-700'
                }`}
              >
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Bloqueo por Dicumarol</span>
              </button>
            </div>
          </div>

          {/* Stepper Timeline Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
            {coagulationSteps.map((step, idx) => {
              const isSelected = activeStepIndex === idx;
              const isBlocked = simulationMode === 'dicumarol' && idx >= 1;

              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`relative p-4 rounded-xl text-left border transition-all ${
                    isSelected
                      ? 'border-teal-500 bg-teal-50/70 shadow-sm ring-2 ring-teal-500/20'
                      : isBlocked
                      ? 'border-rose-200 bg-rose-50/40 opacity-75 hover:opacity-100'
                      : 'border-slate-200 hover:border-slate-300 bg-slate-50/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      isSelected
                        ? 'bg-teal-600 text-white'
                        : isBlocked
                        ? 'bg-rose-200 text-rose-800'
                        : 'bg-slate-200 text-slate-700'
                    }`}>
                      {step.stepNumber}
                    </span>
                    {idx < coagulationSteps.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-slate-300 hidden md:block" />
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight line-clamp-2">
                    {step.title.split(':')[0]}
                  </h4>
                  <span className="text-[11px] text-slate-500 block mt-1">
                    {step.subTitle}
                  </span>

                  {isBlocked && (
                    <span className="mt-2 inline-block px-1.5 py-0.5 rounded bg-rose-100 text-rose-700 text-[10px] font-bold">
                      Bloqueado por Dicumarol
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Detailed Active Step Presentation */}
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200/80">
            {simulationMode === 'dicumarol' && activeStepIndex > 0 ? (
              <div className="p-4 mb-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5 text-rose-600" />
                <div>
                  <h5 className="text-sm font-bold text-rose-900">Interrupción de la Cascada por Dicumarol</h5>
                  <p className="text-xs text-rose-700 mt-1 leading-relaxed">
                    Al no haber Vitamina K hidroquinona activa disponible debido a la inhibición de VKORC1, 
                    el zimógeno <strong>{activeStep.title}</strong> se produce sin residuos Gla (PIVKA), impidiendo la 
                    adhesión al calcio y fosfolípidos plaquetarios. La reacción se detiene o enlentece severamente.
                  </p>
                </div>
              </div>
            ) : null}

            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="lg:w-2/3 space-y-4">
                <div>
                  <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                    Fase {activeStep.stepNumber} de 4 • Evento Molecular
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 mt-1">{activeStep.title}</h4>
                  <p className="text-xs text-slate-500 font-medium">{activeStep.subTitle}</p>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed bg-white p-4 rounded-lg border border-slate-200">
                  {activeStep.biochemicalEvent}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <span className="text-xs font-bold text-slate-800 block mb-1">Enzimas y Factores Clave:</span>
                    <span className="text-xs text-teal-700 font-medium">{activeStep.keyEnzymes}</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <span className="text-xs font-bold text-slate-800 block mb-1">Papel de la Vitamina K:</span>
                    <span className="text-xs text-slate-600">{activeStep.roleOfVitaminK}</span>
                  </div>
                </div>
              </div>

              {/* Clinical Note Side Box */}
              <div className="lg:w-1/3 bg-white p-5 rounded-xl border border-teal-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-teal-800 text-xs font-bold uppercase tracking-wider mb-2">
                    <Info className="w-4 h-4 text-teal-600" />
                    <span>Relevancia Médica</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {activeStep.clinicalNote}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Tiempo de Protrombina (TP)</span>
                  <span className="font-semibold text-teal-700">11-13.5 s normal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Caso Clínico: Antagonismo Frente al Dicumarol */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold uppercase tracking-wider mb-4">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Correlación Clínico-Farmacológica</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
              {dicumarolCaseStudy.title}
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
              
              <div className="space-y-4">
                <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700">
                  <h4 className="text-sm font-bold text-teal-300 mb-2">1. Descubrimiento Histórico</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {dicumarolCaseStudy.context}
                  </p>
                </div>

                <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700">
                  <h4 className="text-sm font-bold text-teal-300 mb-2">2. Base Molecular y Enzima VKORC1</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {dicumarolCaseStudy.molecularBasis}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700">
                  <h4 className="text-sm font-bold text-cyan-300 mb-2">3. Impacto Farmacodinámico y Warfarina</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {dicumarolCaseStudy.pharmacologicalAction}
                  </p>
                </div>

                <div className="bg-teal-950/70 p-5 rounded-xl border border-teal-500/40">
                  <h4 className="text-sm font-bold text-teal-200 mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-teal-400" />
                    <span>4. Protocolo de Reversión (Antídoto Clínico)</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed">
                    {dicumarolCaseStudy.antidoteProtocol}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
