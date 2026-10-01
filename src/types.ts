export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    a: string;
    b: string;
    c: string;
  };
  correctAnswer: 'a' | 'b' | 'c';
  rationale: string;
  topic: string;
}

export interface HormoneDetail {
  name: string;
  acronym?: string;
  targetOrgan: string;
  function: string;
  regulation: string;
}

export interface Gland {
  id: string;
  name: string;
  subtitle: string;
  location: string;
  iconName: string;
  primaryRole: string;
  lobesOrRegions: {
    regionName: string;
    description: string;
    hormones: HormoneDetail[];
  }[];
  clinicalCorrelation: {
    condition: string;
    mechanism: string;
    symptoms: string[];
  };
  biochemicalInsight: string;
}

export interface CoagulationStep {
  stepNumber: number;
  title: string;
  subTitle: string;
  biochemicalEvent: string;
  keyEnzymes: string;
  roleOfVitaminK?: string;
  clinicalNote: string;
}
