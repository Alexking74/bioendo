import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Activity, Award, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pt-16 pb-24 lg:pt-24 lg:pb-32">
      {/* Subtle background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Decorative grid lines */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Academic Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-400/30 text-teal-300 text-xs sm:text-sm font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span>Módulo Educativo de Bioquímica y Fisiología Humana</span>
          </div>
        </div>

        {/* Hero Main Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-tight">
            Regulación Fisiológica y el{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-200 to-teal-400">
              Equilibrio Homeostático
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            Explora la interacción molecular entre el ciclo de la <strong className="text-teal-300 font-semibold">Vitamina K</strong> y la cascada de coagulación sanguínea, junto a los servomecanismos del <strong className="text-cyan-300 font-semibold">Sistema Endocrino</strong> que sustentan la vida celular.
          </p>

          {/* Call to Actions (As explicitly requested by prompt) */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#glandulas"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold rounded-xl text-slate-900 bg-teal-400 hover:bg-teal-300 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 transition-all transform hover:-translate-y-0.5"
            >
              <span>Explorar Glándulas</span>
              <ArrowRight className="w-5 h-5 text-slate-900" />
            </a>

            <a
              href="#cuestionario"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-xl text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 shadow-sm transition-all"
            >
              <span>Ponerse a Prueba</span>
              <Award className="w-5 h-5 text-teal-400" />
            </a>
          </div>
        </div>

        {/* Highlight Metrics Cards */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/70 text-center">
            <div className="text-teal-400 font-bold text-2xl lg:text-3xl">Factores K</div>
            <div className="text-xs text-slate-400 font-medium mt-1">II, VII, IX y X Hepáticos</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/70 text-center">
            <div className="text-cyan-400 font-bold text-2xl lg:text-3xl">5 Glándulas</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Ejes Mayores y Lóbulos</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/70 text-center">
            <div className="text-teal-400 font-bold text-2xl lg:text-3xl">Dicumarol</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Antagonismo VKORC1</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/70 text-center">
            <div className="text-cyan-400 font-bold text-2xl lg:text-3xl">10 Casos</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Cuestionario con Feedback</div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#vitamina-k"
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-teal-300 transition-colors"
          >
            <span>Deslizar hacia la sección de Vitamina K</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
