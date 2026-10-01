/**
 * BioEndo Lab - Plataforma Educativa de Bioquímica y Fisiología Humana
 * Vitamina K, Cascada de Coagulación y el Eje Endocrino
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VitaminKSection } from './components/VitaminKSection';
import { EndocrineSection } from './components/EndocrineSection';
import { QuizSection } from './components/QuizSection';
import { EssaySection } from './components/EssaySection';
import { Footer } from './components/Footer';
import { SingleFileExportModal } from './components/SingleFileExportModal';

export default function App() {
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col selection:bg-teal-600 selection:text-white">
      {/* 1. Navbar */}
      <Navbar onOpenExportModal={() => setIsExportModalOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Sección 1: Vitamina K & Hemostasia */}
        <VitaminKSection />

        {/* 4. Sección 2: El Eje Endocrino & Glándulas Principales */}
        <EndocrineSection />

        {/* 5. Sección 3: Cuestionario Interactivo (10 Preguntas con feedback) */}
        <QuizSection />

        {/* 6. Sección 4: Ensayo & Marco Teórico (Normas APA) */}
        <EssaySection />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* Modal para descargar o copiar el archivo único (Single-File Application index.html) */}
      <SingleFileExportModal 
        isOpen={isExportModalOpen} 
        onClose={() => setIsExportModalOpen(false)} 
      />
    </div>
  );
}
