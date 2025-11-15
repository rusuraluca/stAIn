import React from 'react';

interface StainContextInputProps {
  context: string;
  onContextChange: (context: string) => void;
  t: {
    label: string;
    placeholder: string;
    description: string;
  }
}

const StainContextInput: React.FC<StainContextInputProps> = ({ context, onContextChange, t }) => {
  return (
    <div className="w-full">
      <label htmlFor="context" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {t.label}
      </label>
      <div className="mt-1">
        <textarea
          id="context"
          name="context"
          rows={3}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 px-3 py-2"
          placeholder={t.placeholder}
          value={context}
          onChange={(e) => onContextChange(e.target.value)}
        />
      </div>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {t.description}
      </p>
    </div>
  );
};

export default StainContextInput;