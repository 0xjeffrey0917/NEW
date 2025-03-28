import React, { useState, useRef } from 'react';
import { Upload, Sparkles, Share2, Twitter, ChevronDown, Download, Play, Menu, X, Mail, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { LanguageSwitch } from '@/components/LanguageSwitch';
import { FileUpload } from '@/components/file-upload';
import { LoadingSpinner } from '@/components/loading-spinner';
import { ImageGrid } from '@/components/image-grid';

function GifCreator() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedGifs, setGeneratedGifs] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!['image/jpeg', 'image/png', 'image/gif', 'image/webp'].includes(file.type)) {
        alert('Please upload a valid image file (JPG, PNG, GIF, WebP)');
        return;
      }
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      // Auto-generate GIFs when file is selected
      handleGenerate();
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      if (!['image/jpeg', 'image/png', 'image/gif', 'image/webp'].includes(file.type)) {
        alert('Please upload a valid image file (JPG, PNG, GIF, WebP)');
        return;
      }
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      // Auto-generate GIFs when file is dropped
      handleGenerate();
    }
  };

  const handleGenerate = async () => {
    if (!selectedFile) {
      alert('Please upload an image first');
      return;
    }

    setIsGenerating(true);
    setGeneratedGifs([]);

    // Simulate GIF generation process
    setTimeout(() => {
      const mockGifs = [
        'https://source.unsplash.com/random/400x400?animation,1',
        'https://source.unsplash.com/random/400x400?animation,2',
        'https://source.unsplash.com/random/400x400?animation,3',
        'https://source.unsplash.com/random/400x400?animation,4',
        'https://source.unsplash.com/random/400x400?animation,5',
        'https://source.unsplash.com/random/400x400?animation,6',
      ];
      setGeneratedGifs(mockGifs);
      setIsGenerating(false);
    }, 2000);
  };

  const handleDownload = async (imageUrl: string, index: number) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `generated-gif-${index + 1}.gif`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download GIF');
    }
  };

  const handleShare = (imageUrl: string) => {
    const tweetText = 'Check out this awesome GIF I created with GIF Maker!';
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(imageUrl)}`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed w-full top-0 bg-black/80 backdrop-blur-md z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center">
          <Link to="/" className="text-2xl font-bold flex-shrink-0 hover:text-gray-300 transition-colors">
            MemeAI
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-grow justify-center space-x-8">
            <Link to="/gif-maker" className="hover:text-gray-300">{t('nav.gifMaker')}</Link>
            <Link to="/" className="hover:text-gray-300">{t('nav.memeCreation')}</Link>
            <a href="#features" className="hover:text-gray-300">{t('nav.features')}</a>
            <a href="#how-it-works" className="hover:text-gray-300">{t('nav.howItWorks')}</a>
            <a href="#faq" className="hover:text-gray-300">{t('nav.faq')}</a>
          </div>

          {/* Language Switch and Login (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitch />
            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition-colors">
              {t('nav.login')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 p-4">
            <div className="flex flex-col space-y-4">
              <Link to="/gif-maker" className="hover:text-gray-300">{t('nav.gifMaker')}</Link>
              <Link to="/" className="hover:text-gray-300">{t('nav.memeCreation')}</Link>
              <a href="#features" className="hover:text-gray-300">{t('nav.features')}</a>
              <a href="#how-it-works" className="hover:text-gray-300">{t('nav.howItWorks')}</a>
              <a href="#faq" className="hover:text-gray-300">{t('nav.faq')}</a>
              <LanguageSwitch />
              <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition-colors text-left">
                {t('nav.login')}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            {t('gifCreator.title')} {/* Free Online GIF & Meme Maker */}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            {t('gifCreator.subtitle')} {/* Convert Images, Videos, and Tweets to GIF - Create Anime Memes & Funny GIFs */}
          </p>
          <div className="text-sm text-gray-500 space-x-2">
            <span>Video to GIF</span> • <span>PNG to GIF</span> • <span>JPEG to GIF</span> • <span>WebP to GIF</span>
          </div>
          <ChevronDown className="animate-bounce mx-auto mt-8" size={32} />
        </div>
      </section>

      {/* Main Creation Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Upload Area */}
              <div className="flex-1">
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileSelect}
                />
                <div
                  className="h-full min-h-[400px] bg-gray-700/50 rounded-xl border-2 border-dashed border-gray-600 flex items-center justify-center cursor-pointer hover:border-purple-500 transition-colors relative overflow-hidden"
                  onClick={() => fileInputRef.current?.click()}
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                >
                  {previewUrl ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src={previewUrl}
                        alt="Preview"
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <p className="text-white">{t('gifCreator.upload.changeImage')}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center p-8">
                      <Upload className="mx-auto mb-4 text-gray-400" size={48} />
                      <p className="text-lg">{t('gifCreator.upload.title')}</p>
                      <p className="text-sm text-gray-400">{t('gifCreator.upload.subtitle')}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Controls Area */}
              <div className="flex-1 flex flex-col">
                <div className="bg-gray-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">{t('gifCreator.generation.title')}</h3>
                  <button
                    onClick={handleGenerate}
                    disabled={!selectedFile || isGenerating}
                    className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-xl px-6 py-4 flex items-center justify-center gap-3 transition-colors text-lg font-medium mb-4"
                  >
                    {isGenerating ? (
                      <>
                        <div className="w-6 h-6 border-t-2 border-r-2 border-white rounded-full animate-spin" />
                        <span>{t('gifCreator.generation.generating')}</span>
                      </>
                    ) : (
                      <>
                        <Sparkles size={24} />
                        <span>{t('gifCreator.generation.button')}</span>
                      </>
                    )}
                  </button>
                  
                  {isGenerating && (
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-600 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 animate-progress" style={{ width: '100%' }} />
                      </div>
                      <p className="text-sm text-gray-400 text-center">{t('gifCreator.generation.processing')}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Generated GIFs Grid */}
          {(isGenerating || generatedGifs.length > 0) && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-8 text-center">{t('gifCreator.results.title')}</h3>
              {isGenerating ? (
                <div className="flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 border-4 border-purple-500/30 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 border-t-4 border-purple-500 rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-purple-500" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {generatedGifs.map((gif, index) => (
                    <div key={index} className="group relative aspect-square bg-gray-800/50 rounded-xl overflow-hidden">
                      <img
                        src={gif}
                        alt={`Generated GIF ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                        <button
                          onClick={() => handleDownload(gif, index)}
                          className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-colors"
                          title={t('gifCreator.results.download')}
                        >
                          <Download size={20} />
                        </button>
                        <button
                          onClick={() => handleShare(gif)}
                          className="bg-[#1DA1F2] text-white p-3 rounded-full hover:bg-[#1a8cd8] transition-colors"
                          title={t('gifCreator.results.share')}
                        >
                          <Twitter size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">{t('gifCreator.features.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/30 rounded-2xl p-6">
              <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Play size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('gifCreator.features.instant.title')}</h3>
              <p className="text-gray-400">{t('gifCreator.features.instant.desc')}</p>
            </div>
            <div className="bg-gray-800/30 rounded-2xl p-6">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Share2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('gifCreator.features.sharing.title')}</h3>
              <p className="text-gray-400">{t('gifCreator.features.sharing.desc')}</p>
            </div>
            <div className="bg-gray-800/30 rounded-2xl p-6">
              <div className="bg-pink-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('gifCreator.features.styles.title')}</h3>
              <p className="text-gray-400">{t('gifCreator.features.styles.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">{t('gifCreator.howItWorks.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-6xl font-bold text-purple-500 mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">{t('gifCreator.howItWorks.step1.title')}</h3>
              <p className="text-gray-400">{t('gifCreator.howItWorks.step1.desc')}</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-500 mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">{t('gifCreator.howItWorks.step2.title')}</h3>
              <p className="text-gray-400">{t('gifCreator.howItWorks.step2.desc')}</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-pink-500 mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">{t('gifCreator.howItWorks.step3.title')}</h3>
              <p className="text-gray-400">{t('gifCreator.howItWorks.step3.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with updated questions */}
      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-16">{t('gifCreator.faq.title')}</h2>
          <div className="space-y-8">
            <div className="bg-gray-800/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-2">{t('gifCreator.faq.q1.question')}</h3>
              <p className="text-gray-400">{t('gifCreator.faq.q1.answer')}</p>
            </div>
            <div className="bg-gray-800/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-2">{t('gifCreator.faq.q2.question')}</h3>
              <p className="text-gray-400">{t('gifCreator.faq.q2.answer')}</p>
            </div>
            <div className="bg-gray-800/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-2">{t('gifCreator.faq.q3.question')}</h3>
              <p className="text-gray-400">{t('gifCreator.faq.q3.answer')}</p>
            </div>
            <div className="bg-gray-800/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-2">{t('gifCreator.faq.q4.question')}</h3>
              <p className="text-gray-400">{t('gifCreator.faq.q4.answer')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">{t('nav.gifMaker')}</h3>
              <p className="text-gray-400">{t('gifCreator.subtitle')}</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">{t('footer.quickLinks')}</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white">{t('nav.features')}</a></li>
                <li><a href="#how-it-works" className="hover:text-white">{t('nav.howItWorks')}</a></li>
                <li><a href="#faq" className="hover:text-white">{t('nav.faq')}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">{t('footer.contact')}</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  <a href="mailto:x932662464@gmail.com" className="hover:text-white">x932662464@gmail.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Twitter size={16} />
                  <a href="#" className="hover:text-white">@GIFMaker</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">{t('footer.followUs')}</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Globe size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default GifCreator;