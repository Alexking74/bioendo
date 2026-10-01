import React, { useState } from 'react';
import { Dna, Menu, X, CheckCircle2, BookOpen, Sparkles, Download } from 'lucide-react';

interface NavbarProps {
  onOpenExportModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenExportModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#vitamina-k', label: 'Vitamina K & Hemostasia' },
    { href: '#sistema-endocrino', label: 'Eje Endocrino' },
    { href: '#glandulas', label: 'Glándulas' },
    { href: '#cuestionario', label: 'Cuestionario' },
    { href: '#ensayo', label: 'Ensayo Académico' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-600 to-slate-800 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Dna className="w-6 h-6 text-teal-200" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl text-slate-900 tracking-tight">BioEndo<span className="text-teal-600">Lab</span></span>
                <span className="px-2 py-0.5 text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-200 rounded-full">Fisiología</span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Bioquímica Médica & Endocrinología</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-teal-700 hover:bg-teal-50/70 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/BioEndo_Lab_Presentacion.pptx"
              download="BioEndo_Lab_Presentacion.pptx"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-300 rounded-lg transition-all"
              title="Descargar presentación oficial en formato PowerPoint (.pptx) de 13 diapositivas"
            >
              <Download className="w-4 h-4 text-teal-700" />
              <span>Descargar PPTX</span>
            </a>
            {onOpenExportModal && (
              <button
                onClick={onOpenExportModal}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-all"
                title="Descargar código HTML autónomo en un solo archivo"
              >
                <Download className="w-4 h-4 text-slate-600" />
                <span>Exportar HTML</span>
              </button>
            )}
            <a
              href="#cuestionario"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-sm hover:shadow transition-all"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Ponerse a Prueba</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {onOpenExportModal && (
              <button
                onClick={onOpenExportModal}
                className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
                aria-label="Exportar"
              >
                <Download className="w-5 h-5 text-teal-600" />
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="#cuestionario"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-sm"
            >
              Ponerse a Prueba (Quiz 10 Preguntas)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
