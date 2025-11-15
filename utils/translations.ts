export const languageMap: { [key: string]: string } = {
  en: 'English',
  ro: 'Romanian',
  de: 'German',
  fr: 'French',
  es: 'Spanish',
};

export const translations: { [key: string]: any } = {
  en: {
    title: 'stAIn',
    subtitle: 'Your expert guide to pristine clothes.',
    imageUploader: {
      label: '1. Upload Stain Image',
      uploadFile: 'Upload a file',
      dragAndDrop: 'or drag and drop',
      fileTypes: 'PNG, JPG, GIF up to 10MB',
      errorInvalid: 'Please select a valid image file.',
      errorFailed: 'Failed to read the file.',
    },
    materialInput: {
      label: '2. Fabric Composition',
      placeholderName: 'e.g., Cotton',
      placeholderPercentage: 'Percentage',
      addButton: 'Add Material',
    },
    stainContextInput: {
      label: '3. How did the stain happen? (Optional)',
      placeholder: 'e.g., Spilled red wine on it.',
      description: 'Providing more context helps the AI give you a more accurate solution.',
    },
    analyzeButton: 'Analyze Stain',
    analyzing: 'Analyzing...',
    error: {
      title: 'There was a problem',
      noImage: 'Please upload an image of the stain.',
      noMaterial: 'Please specify at least one fabric material and its percentage.',
    },
    resultDisplay: {
      summary: 'Summary',
      materialsNeeded: 'Materials Needed',
      stepsTitle: 'Step-by-Step Instructions',
      stepsSubtitle: 'Follow these steps carefully for the best results.',
      additionalTip: 'Additional Tip',
    }
  },
  ro: {
    title: 'stAIn',
    subtitle: 'Ghidul tău expert pentru haine impecabile.',
    imageUploader: {
      label: '1. Încarcă Imaginea Petei',
      uploadFile: 'Încarcă un fișier',
      dragAndDrop: 'sau trage și plasează',
      fileTypes: 'PNG, JPG, GIF până la 10MB',
      errorInvalid: 'Te rugăm să selectezi un fișier imagine valid.',
      errorFailed: 'Nu s-a putut citi fișierul.',
    },
    materialInput: {
      label: '2. Compoziția Materialului',
      placeholderName: 'ex. Bumbac',
      placeholderPercentage: 'Procentaj',
      addButton: 'Adaugă Material',
    },
    stainContextInput: {
      label: '3. Cum s-a produs pata? (Opțional)',
      placeholder: 'ex. Am vărsat vin roșu pe ea.',
      description: 'Oferirea de context ajută AI-ul să ofere o soluție mai precisă.',
    },
    analyzeButton: 'Analizează Pata',
    analyzing: 'Se analizează...',
    error: {
      title: 'A apărut o problemă',
      noImage: 'Te rugăm să încarci o imagine a petei.',
      noMaterial: 'Te rugăm să specifici cel puțin un material textil și procentajul acestuia.',
    },
    resultDisplay: {
        summary: 'Rezumat',
        materialsNeeded: 'Materiale Necesare',
        stepsTitle: 'Instrucțiuni Pas cu Pas',
        stepsSubtitle: 'Urmați acești pași cu atenție pentru cele mai bune rezultate.',
        additionalTip: 'Sfat Suplimentar',
    }
  },
  de: {
    title: 'stAIn',
    subtitle: 'Ihr Expertenratgeber für makellose Kleidung.',
    imageUploader: {
      label: '1. Fleckenbild hochladen',
      uploadFile: 'Datei hochladen',
      dragAndDrop: 'oder per Drag & Drop',
      fileTypes: 'PNG, JPG, GIF bis zu 10MB',
      errorInvalid: 'Bitte wählen Sie eine gültige Bilddatei aus.',
      errorFailed: 'Datei konnte nicht gelesen werden.',
    },
    materialInput: {
      label: '2. Stoffzusammensetzung',
      placeholderName: 'z.B. Baumwolle',
      placeholderPercentage: 'Prozentsatz',
      addButton: 'Stoff hinzufügen',
    },
    stainContextInput: {
      label: '3. Wie ist der Fleck entstanden? (Optional)',
      placeholder: 'z.B. Rotwein beim Abendessen verschüttet.',
      description: 'Mehr Kontext hilft der KI, Ihnen eine genauere Lösung zu geben.',
    },
    analyzeButton: 'Fleck analysieren',
    analyzing: 'Analysiere...',
    error: {
      title: 'Es gab ein Problem',
      noImage: 'Bitte laden Sie ein Bild des Flecks hoch.',
      noMaterial: 'Bitte geben Sie mindestens ein Stoffmaterial und dessen Prozentsatz an.',
    },
    resultDisplay: {
        summary: 'Zusammenfassung',
        materialsNeeded: 'Benötigte Materialien',
        stepsTitle: 'Schritt-für-Schritt-Anleitung',
        stepsSubtitle: 'Befolgen Sie diese Schritte sorgfältig, um die besten Ergebnisse zu erzielen.',
        additionalTip: 'Zusätzlicher Tipp',
    }
  },
  fr: {
    title: 'stAIn',
    subtitle: 'Votre guide expert pour des vêtements impeccables.',
    imageUploader: {
      label: '1. Télécharger l\'Image de la Tache',
      uploadFile: 'Télécharger un fichier',
      dragAndDrop: 'ou glisser-déposer',
      fileTypes: 'PNG, JPG, GIF jusqu\'à 10 Mo',
      errorInvalid: 'Veuillez sélectionner un fichier image valide.',
      errorFailed: 'Échec de la lecture du fichier.',
    },
    materialInput: {
      label: '2. Composition du Tissu',
      placeholderName: 'ex. Coton',
      placeholderPercentage: 'Pourcentage',
      addButton: 'Ajouter un Tissu',
    },
    stainContextInput: {
      label: '3. Comment la tache est-elle apparue ? (Optionnel)',
      placeholder: 'ex. J\'ai renversé du vin rouge dessus pendant le dîner.',
      description: 'Fournir plus de contexte aide l\'IA à vous donner une solution plus précise.',
    },
    analyzeButton: 'Analyser la Tache',
    analyzing: 'Analyse en cours...',
    error: {
      title: 'Il y a eu un problème',
      noImage: 'Veuillez télécharger une image de la tache.',
      noMaterial: 'Veuillez spécifier au moins un matériau de tissu et son pourcentage.',
    },
    resultDisplay: {
        summary: 'Résumé',
        materialsNeeded: 'Matériaux Nécessaires',
        stepsTitle: 'Instructions Étape par Étape',
        stepsSubtitle: 'Suivez attentivement ces étapes pour obtenir les meilleurs résultats.',
        additionalTip: 'Conseil Supplémentaire',
    }
  },
  es: {
    title: 'stAIn',
    subtitle: 'Tu guía experta para ropa impecable.',
    imageUploader: {
      label: '1. Subir Imagen de la Mancha',
      uploadFile: 'Subir un archivo',
      dragAndDrop: 'o arrastrar y soltar',
      fileTypes: 'PNG, JPG, GIF hasta 10MB',
      errorInvalid: 'Por favor, seleccione un archivo de imagen válido.',
      errorFailed: 'No se pudo leer el archivo.',
    },
    materialInput: {
      label: '2. Composición del Tejido',
      placeholderName: 'ej. Algodón',
      placeholderPercentage: 'Porcentaje',
      addButton: 'Añadir Material',
    },
    stainContextInput: {
      label: '3. ¿Cómo ocurrió la mancha? (Opcional)',
      placeholder: 'ej. Derramé vino tinto sobre ella durante la cena.',
      description: 'Proporcionar más contexto ayuda a la IA a darte una solución más precisa.',
    },
    analyzeButton: 'Analizar Mancha',
    analyzing: 'Analizando...',
    error: {
      title: 'Hubo un problema',
      noImage: 'Por favor, sube una imagen de la mancha.',
      noMaterial: 'Por favor, especifique al menos un material de tejido y su porcentaje.',
    },
    resultDisplay: {
        summary: 'Resumen',
        materialsNeeded: 'Materiales Necesarios',
        stepsTitle: 'Instrucciones Paso a Paso',
        stepsSubtitle: 'Siga estos pasos cuidadosamente para obtener los mejores resultados.',
        additionalTip: 'Consejo Adicional',
    }
  },
};