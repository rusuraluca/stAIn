import React, { useState, useCallback, ChangeEvent } from 'react';
import { ImageData } from '../types';
import { UploadIcon } from './icons';

interface ImageUploaderProps {
  onImageChange: (imageData: ImageData | null) => void;
  t: {
    label: string;
    uploadFile: string;
    dragAndDrop: string;
    fileTypes: string;
    errorInvalid: string;
    errorFailed: string;
  }
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageChange, t }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      setPreview(null);
      onImageChange(null);
      return;
    }

    if (!file.type.startsWith('image/')) {
        setError(t.errorInvalid);
        setPreview(null);
        onImageChange(null);
        return;
    }

    setError(null);
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = (reader.result as string).split(',')[1];
      setPreview(reader.result as string);
      onImageChange({ file, base64: base64String });
    };
    reader.onerror = () => {
        setError(t.errorFailed);
    }
    reader.readAsDataURL(file);
  }, [onImageChange, t]);

  return (
    <div className="w-full">
      <label htmlFor="image-upload" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t.label}</label>
      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md">
        <div className="space-y-1 text-center">
          {preview ? (
            <img src={preview} alt="Stain preview" className="mx-auto h-48 w-auto rounded-md object-contain" />
          ) : (
            <>
              <UploadIcon />
              <div className="flex text-sm text-gray-600 dark:text-gray-400">
                <label htmlFor="file-upload" className="relative cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <span>{t.uploadFile}</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept="image/*" />
                </label>
                <p className="pl-1">{t.dragAndDrop}</p>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-500">{t.fileTypes}</p>
            </>
          )}
        </div>
      </div>
       {error && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
};

export default ImageUploader;