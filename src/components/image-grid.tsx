import React from 'react';
import { Download, Twitter } from 'lucide-react';

interface ImageGridProps {
  images: string[];
  onDownload: (imageUrl: string, index: number) => Promise<void>;
  onShare: (imageUrl: string) => void;
}

export function ImageGrid({ images, onDownload, onShare }: ImageGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="group relative aspect-square bg-gray-800/50 rounded-xl overflow-hidden">
          <img
            src={image}
            alt={`Generated ${index + 1}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            <button
              onClick={() => onDownload(image, index)}
              className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-colors"
              title="下载图片"
            >
              <Download size={20} />
            </button>
            <button
              onClick={() => onShare(image)}
              className="bg-[#1DA1F2] text-white p-3 rounded-full hover:bg-[#1a8cd8] transition-colors"
              title="分享到Twitter"
            >
              <Twitter size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}