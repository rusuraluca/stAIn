export interface Material {
  id: string;
  name: string;
  percentage: string;
}

export interface ImageData {
  file: File;
  base64: string;
}

export interface AnalysisStep {
  title: string;
  description: string;
}

export interface AnalysisResult {
  summary: string;
  materialsNeeded: string[];
  steps: AnalysisStep[];
  additionalTip: string;
}
