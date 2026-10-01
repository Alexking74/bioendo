import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  RotateCcw, 
  Award, 
  ChevronRight, 
  ChevronLeft,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { quizQuestions } from '../data/quizData';

export const QuizSection: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, 'a' | 'b' | 'c'>>({});
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const currentQ = quizQuestions[currentQuestionIndex];
  const selectedOption = userAnswers[currentQ.id];
  const isAnswered = selectedOption !== undefined;

  // Calculate score
  const correctCount = Object.entries(userAnswers).filter(([qId, ans]) => {
    const question = quizQuestions.find(q => q.id === Number(qId));
    return question && question.correctAnswer === ans;
  }).length;

  const handleSelectOption = (optionKey: 'a' | 'b' | 'c') => {
    if (isAnswered) return; // Prevent changing answer after submission
    
    const updated = { ...userAnswers, [currentQ.id]: optionKey };
    setUserAnswers(updated);

    // If this was the last question, check if all 10 are answered
    if (Object.keys(updated).length === quizQuestions.length) {
      // Completed!
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRestart = () => {
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setIsQuizCompleted(false);
  };

  const answeredCount = Object.keys(userAnswers).length;

  return (
    <section id="cuestionario" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-100 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Sección 3 • Evaluación Interactiva</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Cuestionario de Autoevaluación
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Pon a prueba tu dominio sobre la vitamina K, el dicumarol, la cascada hemostática y el eje endocrino humano. 
            Recibe retroalimentación inmediata en cada opción.
          </p>
        </div>

        {/* Quiz Container Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
          
          {/* Top Bar: Progress and Score */}
          <div className="bg-slate-900 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-teal-400" />
              <span className="text-xs sm:text-sm font-semibold text-slate-200">
                Puntaje actual: <span className="text-teal-400 font-bold">{correctCount}</span> de {answeredCount} respondidas
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-medium">
                Pregunta {currentQuestionIndex + 1} de {quizQuestions.length}
              </span>
              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-white px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors"
                title="Reiniciar cuestionario"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reiniciar</span>
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-100 h-1.5">
            <div 
              className="bg-teal-600 h-1.5 transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
            />
          </div>

          {/* Question Navigation Dots */}
          <div className="px-6 pt-4 pb-2 flex flex-wrap gap-1.5 justify-center border-b border-slate-100 bg-slate-50/50">
            {quizQuestions.map((q, idx) => {
              const ans = userAnswers[q.id];
              const isCurrent = idx === currentQuestionIndex;
              const isCorrect = ans && ans === q.correctAnswer;
              const isWrong = ans && ans !== q.correctAnswer;

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestionIndex(idx)}
                  className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                    isCurrent
                      ? 'ring-2 ring-teal-600 ring-offset-1 z-10'
                      : ''
                  } ${
                    isCorrect
                      ? 'bg-emerald-600 text-white'
                      : isWrong
                      ? 'bg-rose-600 text-white'
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                  title={`Ir a pregunta ${idx + 1}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          {/* Question Content */}
          {!isQuizCompleted ? (
            <div className="p-6 sm:p-8">
              
              {/* Question Category & Text */}
              <div className="mb-6">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wide bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
                  {currentQ.topic}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-3 leading-relaxed">
                  {currentQ.id}. {currentQ.question}
                </h3>
              </div>

              {/* Options (a, b, c) */}
              <div className="space-y-3 mb-6">
                {(['a', 'b', 'c'] as const).map((optKey) => {
                  const optionText = currentQ.options[optKey];
                  const isThisSelected = selectedOption === optKey;
                  const isThisCorrect = currentQ.correctAnswer === optKey;

                  let buttonStyles = 'border-slate-200 hover:border-slate-300 bg-white text-slate-800 hover:bg-slate-50';
                  let iconBadge = (
                    <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center text-xs font-bold uppercase group-hover:bg-slate-200">
                      {optKey}
                    </span>
                  );

                  if (isAnswered) {
                    if (isThisCorrect) {
                      buttonStyles = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-medium ring-1 ring-emerald-500';
                      iconBadge = (
                        <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
                          <CheckCircle2 className="w-4 h-4" />
                        </span>
                      );
                    } else if (isThisSelected) {
                      buttonStyles = 'border-rose-500 bg-rose-50 text-rose-950 font-medium ring-1 ring-rose-500';
                      iconBadge = (
                        <span className="w-7 h-7 rounded-lg bg-rose-600 text-white flex items-center justify-center text-xs font-bold">
                          <XCircle className="w-4 h-4" />
                        </span>
                      );
                    } else {
                      buttonStyles = 'border-slate-200 bg-slate-50/50 text-slate-400 opacity-60 cursor-not-allowed';
                    }
                  }

                  return (
                    <button
                      key={optKey}
                      onClick={() => handleSelectOption(optKey)}
                      disabled={isAnswered}
                      className={`w-full p-4 rounded-xl border text-left flex items-start gap-3 transition-all group ${buttonStyles}`}
                    >
                      <div className="flex-shrink-0 mt-0.5">{iconBadge}</div>
                      <span className="text-sm leading-relaxed">{optionText}</span>
                    </button>
                  );
                })}
              </div>

              {/* Immediate Feedback Box */}
              {isAnswered && (
                <div className={`p-4 rounded-xl border transition-all ${
                  selectedOption === currentQ.correctAnswer
                    ? 'bg-emerald-50/80 border-emerald-300 text-emerald-900'
                    : 'bg-rose-50/80 border-rose-300 text-rose-900'
                }`}>
                  <div className="flex items-center gap-2 font-bold text-sm mb-1.5">
                    {selectedOption === currentQ.correctAnswer ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        <span>¡Respuesta Correcta!</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-rose-600" />
                        <span>Respuesta Incorrecta (Opción Correcta: {currentQ.correctAnswer.toUpperCase()})</span>
                      </>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-700 mt-1">
                    <strong className="text-slate-900">Fundamento fisiológico:</strong> {currentQ.rationale}
                  </p>
                </div>
              )}

              {/* Action Buttons: Next / Previous */}
              <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-100">
                <button
                  onClick={handlePrev}
                  disabled={currentQuestionIndex === 0}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold border transition-all ${
                    currentQuestionIndex === 0
                      ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                      : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Anterior</span>
                </button>

                {currentQuestionIndex === quizQuestions.length - 1 && isAnswered ? (
                  <button
                    onClick={() => setIsQuizCompleted(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 shadow-sm transition-all"
                  >
                    <span>Ver Resultados Finales</span>
                    <Award className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    disabled={!isAnswered}
                    className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-lg text-xs font-semibold transition-all ${
                      !isAnswered
                        ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        : 'bg-teal-600 hover:bg-teal-700 text-white shadow-sm'
                    }`}
                  >
                    <span>Siguiente Pregunta</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>

            </div>
          ) : (
            /* Quiz Completed Summary View */
            <div className="p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mx-auto mb-4 shadow-inner">
                <Award className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">¡Cuestionario Completado!</h3>
              <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
                Has concluido las 10 preguntas evaluativas sobre bioquímica de la coagulación y fisiología endocrina.
              </p>

              {/* Big Score Display */}
              <div className="my-8 p-6 bg-slate-50 border border-slate-200 rounded-2xl max-w-sm mx-auto">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block">
                  Tu Calificación Final
                </span>
                <div className="text-5xl font-extrabold text-teal-600 mt-2">
                  {correctCount} <span className="text-2xl text-slate-400 font-semibold">/ 10</span>
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-2">
                  {correctCount >= 8 ? (
                    <span className="text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
                      Nivel Avanzado: Excelente comprensión conceptual y clínica
                    </span>
                  ) : correctCount >= 5 ? (
                    <span className="text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block">
                      Nivel Intermedio: Buen dominio; revisa el caso del dicumarol y ejes hormonales
                    </span>
                  ) : (
                    <span className="text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200 inline-block">
                      Nivel Formativo: Sugerimos repasar el Marco Teórico y volver a intentarlo
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleRestart}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-xl transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Intentar de Nuevo</span>
                </button>
                <a
                  href="#ensayo"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-xl shadow-sm transition-all"
                >
                  <span>Leer Ensayo & Referencias APA</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
