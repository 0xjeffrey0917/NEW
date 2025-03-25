import React from 'react';
import { Sparkles } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 border-4 border-purple-500/30 rounded-full animate-pulse"></div>
        <div className="absolute inset-0 border-t-4 border-purple-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-purple-500" />
        </div>
      </div>
    </div>
  );
}