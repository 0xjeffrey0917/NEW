import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Globe, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' }
] as const;

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-800/50 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe size={20} className="text-gray-400" />
        <span className="flex items-center gap-2">
          <span className="text-sm">{currentLanguage?.flag}</span>
          <span className="text-sm font-medium">{currentLanguage?.name}</span>
        </span>
      </button>

      <div
        className={cn(
          "absolute right-0 mt-2 w-48 rounded-lg bg-gray-900 border border-gray-700 shadow-lg py-1 transition-all duration-200 ease-in-out",
          isOpen
            ? "transform opacity-100 scale-100"
            : "transform opacity-0 scale-95 pointer-events-none"
        )}
      >
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => {
              setLanguage(lang.code);
              setIsOpen(false);
            }}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-800/50 transition-colors",
              language === lang.code ? "text-purple-400" : "text-gray-300"
            )}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
            {language === lang.code && (
              <Check size={16} className="ml-auto text-purple-400" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}