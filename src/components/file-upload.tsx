import React from 'react';
import { Upload } from 'lucide-react';
import { cn, formatBytes, isImageFile } from '@/lib/utils';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  className?: string;
  previewUrl?: string | null;
}

export function FileUpload({ onFileSelect, className, previewUrl }: FileUploadProps) {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && isImageFile(file)) {
      onFileSelect(file);
    } else {
      alert('请上传有效的图片文件 (JPG, PNG, GIF, WebP)');
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file && isImageFile(file)) {
      onFileSelect(file);
    } else {
      alert('请上传有效的图片文件 (JPG, PNG, GIF, WebP)');
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      className={cn(
        "h-full bg-gray-700/50 rounded-xl border-2 border-dashed border-gray-600 flex items-center justify-center cursor-pointer hover:border-purple-500 transition-colors relative overflow-hidden",
        className
      )}
      onClick={() => fileInputRef.current?.click()}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleFileSelect}
      />
      {previewUrl ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={previewUrl}
            alt="Preview"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <p className="text-white">点击更换图片</p>
          </div>
        </div>
      ) : (
        <div className="text-center p-8">
          <Upload className="mx-auto mb-4 text-gray-400" size={48} />
          <p className="text-lg">点击或拖拽上传你的Meme图片</p>
          <p className="text-sm text-gray-400">支持 JPG, PNG, GIF, WebP 格式</p>
        </div>
      )}
    </div>
  );
}