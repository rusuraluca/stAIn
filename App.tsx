import React, { useState, useCallback } from 'react';
import { Material, ImageData, AnalysisResult } from './types';
import ImageUploader from './components/ImageUploader';
import MaterialInput from './components/MaterialInput';
import StainContextInput from './components/StainContextInput';
import ResultDisplay from './components/ResultDisplay';
import LanguageSelector from './components/LanguageSelector';
import { analyzeStain } from './services/geminiService';
import { SparklesIcon } from './components/icons';
import { translations, languageMap } from './utils/translations';

const App: React.FC = () => {
  const [language, setLanguage] = useState('en');
  const [imageData, setImageData] = useState<ImageData | null>(null);
  const [materials, setMaterials] = useState<Material[]>([
    { id: 'initial', name: '', percentage: '' }
  ]);
  const [context, setContext] = useState('');
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const t = translations[language];

  const handleImageChange = useCallback((data: ImageData | null) => {
    setImageData(data);
  }, []);

  const handleMaterialsChange = useCallback((newMaterials: Material[]) => {
    setMaterials(newMaterials);
  }, []);

  const handleSubmit = async () => {
    setError('');
    if (!imageData) {
      setError(t.error.noImage);
      return;
    }
    const validMaterials = materials.filter(m => m.name.trim() && m.percentage.trim());
    if (validMaterials.length === 0) {
      setError(t.error.noMaterial);
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const apiLanguage = languageMap[language];
      const response = await analyzeStain(imageData.base64, validMaterials, context, apiLanguage);
      setResult(response);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred.';
      setError(`Failed to get analysis: ${errorMessage}`);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      <main className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-3xl mx-auto">
          <header className="text-center mb-10 relative">
            <div className="absolute top-0 right-0">
              <LanguageSelector currentLanguage={language} onLanguageChange={setLanguage} />
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              {t.title}
            </h1>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
              {t.subtitle}
            </p>
          </header>

          <div className="bg-white dark:bg-gray-800/50 p-6 sm:p-8 rounded-2xl shadow-lg space-y-8 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
            <ImageUploader onImageChange={handleImageChange} t={t.imageUploader} />
            <MaterialInput materials={materials} onMaterialsChange={handleMaterialsChange} t={t.materialInput} />
            <StainContextInput context={context} onContextChange={setContext} t={t.stainContextInput} />

            <div>
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t.analyzing}
                  </>
                ) : (
                    <>
                        <SparklesIcon />
                        <span className="ml-2">{t.analyzeButton}</span>
                    </>
                )}
              </button>
            </div>

            {error && (
              <div className="rounded-md bg-red-50 dark:bg-red-900/20 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" xmlns="http://www.w.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800 dark:text-red-300">{t.error.title}</h3>
                    <div className="mt-2 text-sm text-red-700 dark:text-red-400">
                      <p>{error}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <ResultDisplay result={result} t={t.resultDisplay} />
        </div>
      </main>
    </div>
  );
};

export default App;