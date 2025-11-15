import React from 'react';
import { Material } from '../types';
import { PlusIcon, TrashIcon } from './icons';

interface MaterialInputProps {
  materials: Material[];
  onMaterialsChange: (materials: Material[]) => void;
  t: {
    label: string;
    placeholderName: string;
    placeholderPercentage: string;
    addButton: string;
  }
}

const MaterialInput: React.FC<MaterialInputProps> = ({ materials, onMaterialsChange, t }) => {

  const handleAddMaterial = () => {
    onMaterialsChange([...materials, { id: Date.now().toString(), name: '', percentage: '' }]);
  };

  const handleRemoveMaterial = (id: string) => {
    onMaterialsChange(materials.filter(material => material.id !== id));
  };

  const handleMaterialChange = (id: string, field: 'name' | 'percentage', value: string) => {
    const newMaterials = materials.map(material => {
      if (material.id === id) {
        return { ...material, [field]: value };
      }
      return material;
    });
    onMaterialsChange(newMaterials);
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t.label}</label>
      <div className="space-y-3">
        {materials.map((material, index) => (
          <div key={material.id} className="flex items-center space-x-2">
            <input
              type="text"
              placeholder={t.placeholderName}
              value={material.name}
              onChange={(e) => handleMaterialChange(material.id, 'name', e.target.value)}
              className="flex-grow block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 dark:text-gray-200"
            />
            <div className="relative flex-shrink-0 w-28">
                <input
                    type="number"
                    placeholder={t.placeholderPercentage}
                    value={material.percentage}
                    onChange={(e) => handleMaterialChange(material.id, 'percentage', e.target.value)}
                    className="block w-full pl-3 pr-6 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 dark:text-gray-200"
                    min="0"
                    max="100"
                />
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-500 dark:text-gray-400">%</span>
            </div>
            <button
              type="button"
              onClick={() => handleRemoveMaterial(material.id)}
              className="p-2 rounded-full text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <TrashIcon />
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={handleAddMaterial}
        className="mt-3 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <PlusIcon />
        <span className="ml-2">{t.addButton}</span>
      </button>
    </div>
  );
};

export default MaterialInput;