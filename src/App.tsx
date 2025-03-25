import React, { useState, useRef } from 'react';
import { Upload, Sparkles, Share2, Twitter, ChevronDown, Menu, X, Mail, Globe, Download } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { LanguageSwitch } from '@/components/LanguageSwitch';

function App() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
        alert(t('upload.formats'));
        return;
      }
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
        alert(t('upload.formats'));
        return;
      }
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleGenerate = async (isRandom: boolean) => {
    if (!selectedFile) {
      alert(t('upload.title'));
      return;
    }

    setIsGenerating(true);
    setGeneratedImages([]);

    // Simulate AI generation process
    setTimeout(() => {
      const mockImages = [
        'https://source.unsplash.com/random/800x800?meme,1',
        'https://source.unsplash.com/random/800x800?meme,2',
        'https://source.unsplash.com/random/800x800?meme,3',
        'https://source.unsplash.com/random/800x800?meme,4',
        'https://source.unsplash.com/random/800x800?meme,5',
        'https://source.unsplash.com/random/800x800?meme,6'
      ];
      setGeneratedImages(mockImages);
      setIsGenerating(false);
    }, 3000);
  };

  const handleDownload = async (imageUrl: string, index: number) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `meme-ai-${index + 1}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      alert(t('results.downloadError'));
    }
  };

  const handleShare = (imageUrl: string) => {
    const tweetText = t('results.shareText');
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(imageUrl)}`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed w-full top-0 bg-black/80 backdrop-blur-md z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center">
          <div className="text-2xl font-bold flex-shrink-0">MemeAI</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-grow justify-center space-x-8">
            <a href="#features" className="hover:text-gray-300">{t('nav.features')}</a>
            <a href="#how-it-works" className="hover:text-gray-300">{t('nav.howItWorks')}</a>
            <a href="#pricing" className="hover:text-gray-300">{t('nav.pricing')}</a>
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
              <a href="#features" className="hover:text-gray-300">{t('nav.features')}</a>
              <a href="#how-it-works" className="hover:text-gray-300">{t('nav.howItWorks')}</a>
              <a href="#pricing" className="hover:text-gray-300">{t('nav.pricing')}</a>
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
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <ChevronDown className="animate-bounce mx-auto" size={32} />
        </div>
      </section>

      {/* Main Creation Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-8 min-h-[500px]">
              {/* Left Side - Upload Area */}
              <div className="flex-1">
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/jpeg,image/png"
                  onChange={handleFileSelect}
                />
                <div
                  className="h-full bg-gray-700/50 rounded-xl border-2 border-dashed border-gray-600 flex items-center justify-center cursor-pointer hover:border-purple-500 transition-colors relative overflow-hidden"
                  onClick={handleUploadClick}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                >
                  {previewUrl ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src={previewUrl}
                        alt="Preview"
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <p className="text-white">{t('upload.change')}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center p-8">
                      <Upload className="mx-auto mb-4 text-gray-400" size={48} />
                      <p className="text-lg">{t('upload.dragDrop')}</p>
                      <p className="text-sm text-gray-400">{t('upload.formats')}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Side - Controls */}
              <div className="flex-1 flex flex-col">
                <div>
                  <h3 className="text-xl font-medium text-gray-200 mb-4">
                    {t('creation.prompt')}
                  </h3>
                  <textarea
                    placeholder={t('creation.promptPlaceholder')}
                    className="w-full h-32 bg-gray-700/50 rounded-xl px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400 resize-none"
                  />
                  <p className="mt-2 text-sm text-gray-400">{t('creation.promptTip')}</p>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-medium text-gray-200 mb-4">
                    {t('creation.generateOptions')}
                  </h3>
                  <div className="space-y-4">
                    <button 
                      className="w-full bg-purple-600 hover:bg-purple-700 rounded-xl px-6 py-4 flex items-center justify-center gap-3 transition-colors text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={() => handleGenerate(false)}
                      disabled={isGenerating || !selectedFile}
                    >
                      {isGenerating ? (
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 border-t-2 border-r-2 border-white rounded-full animate-spin" />
                          <span>{t('creation.generating')}</span>
                        </div>
                      ) : (
                        <>
                          <Sparkles size={24} />
                          <span>{t('creation.generateWithPrompt')}</span>
                        </>
                      )}
                    </button>
                    <button 
                      className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl px-6 py-4 flex items-center justify-center gap-3 transition-colors text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={() => handleGenerate(true)}
                      disabled={isGenerating || !selectedFile}
                    >
                      {isGenerating ? (
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 border-t-2 border-r-2 border-white rounded-full animate-spin" />
                          <span>{t('creation.generating')}</span>
                        </div>
                      ) : (
                        <>
                          <Share2 size={24} />
                          <span>{t('creation.generateRandom')}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="mt-auto pt-8 border-t border-gray-700">
                  <p className="text-base text-gray-300 mb-3">{t('creation.popularPrompts')}</p>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-gray-700/50 rounded-full text-sm hover:bg-gray-600/50 transition-colors">
                      {t('creation.funnyStyle')}
                    </button>
                    <button className="px-4 py-2 bg-gray-700/50 rounded-full text-sm hover:bg-gray-600/50 transition-colors">
                      {t('creation.retroEffect')}
                    </button>
                    <button className="px-4 py-2 bg-gray-700/50 rounded-full text-sm hover:bg-gray-600/50 transition-colors">
                      {t('creation.cyberpunk')}
                    </button>
                    <button className="px-4 py-2 bg-gray-700/50 rounded-full text-sm hover:bg-gray-600/50 transition-colors">
                      {t('creation.pixelArt')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Generated Images Grid */}
          {(isGenerating || generatedImages.length > 0) && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-8 text-center">{t('results.title')}</h3>
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
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {generatedImages.map((image, index) => (
                    <div key={index} className="group relative aspect-square bg-gray-800/50 rounded-xl overflow-hidden">
                      <img
                        src={image}
                        alt={`Generated ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                        <button
                          onClick={() => handleDownload(image, index)}
                          className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-colors"
                          title={t('results.download')}
                        >
                          <Download size={20} />
                        </button>
                        <button
                          onClick={() => handleShare(image)}
                          className="bg-[#1DA1F2] text-white p-3 rounded-full hover:bg-[#1a8cd8] transition-colors"
                          title={t('results.shareTwitter')}
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
          <h2 className="text-4xl font-bold text-center mb-16">{t('features.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/30 rounded-2xl p-6">
              <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('features.ai.title')}</h3>
              <p className="text-gray-400">{t('features.ai.desc')}</p>
            </div>
            <div className="bg-gray-800/30 rounded-2xl p-6">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Share2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('features.share.title')}</h3>
              <p className="text-gray-400">{t('features.share.desc')}</p>
            </div>
            <div className="bg-gray-800/30 rounded-2xl p-6">
              <div className="bg-pink-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Twitter size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('features.social.title')}</h3>
              <p className="text-gray-400">{t('features.social.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">{t('howItWorks.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-6xl font-bold text-purple-500 mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">{t('howItWorks.step1.title')}</h3>
              <p className="text-gray-400">{t('howItWorks.step1.desc')}</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-500 mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">{t('howItWorks.step2.title')}</h3>
              <p className="text-gray-400">{t('howItWorks.step2.desc')}</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-pink-500 mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">{t('howItWorks.step3.title')}</h3>
              <p className="text-gray-400">{t('howItWorks.step3.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">{t('pricing.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-800/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">{t('pricing.free.title')}</h3>
              <div className="text-4xl font-bold mb-4">¥{t('pricing.free.price')}<span className="text-lg text-gray-400">/月</span></div>
              <ul className="space-y-3 mb-8">
                {t('pricing.free.features').map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Sparkles className="text-purple-500" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gray-700 hover:bg-gray-600 rounded-lg px-6 py-3">
                {t('pricing.free.cta')}
              </button>
            </div>
            <div className="bg-purple-900/30 rounded-2xl p-8 transform scale-105 border-2 border-purple-500">
              <h3 className="text-2xl font-bold mb-4">{t('pricing.pro.title')}</h3>
              <div className="text-4xl font-bold mb-4">¥{t('pricing.pro.price')}<span className="text-lg text-gray-400">/月</span></div>
              <ul className="space-y-3 mb-8">
                {t('pricing.pro.features').map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Sparkles className="text-purple-500" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-purple-600 hover:bg-purple-700 rounded-lg px-6 py-3">
                {t('pricing.pro.cta')}
              </button>
            </div>
            <div className="bg-gray-800/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">{t('pricing.enterprise.title')}</h3>
              <div className="text-4xl font-bold mb-4">{t('pricing.enterprise.price')}<span className="text-lg text-gray-400">/年</span></div>
              <ul className="space-y-3 mb-8">
                {t('pricing.enterprise.features').map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Sparkles className="text-purple-500" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gray-700 hover:bg-gray-600 rounded-lg px-6 py-3">
                {t('pricing.enterprise.cta')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-16">{t('faq.title')}</h2>
          <div className="space-y-8">
            {t('faq.questions').map((qa, index) => (
              <div key={index} className="bg-gray-800/30 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">{qa.q}</h3>
                <p className="text-gray-400">{qa.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MemeAI</h3>
              <p className="text-gray-400">{t('footer.slogan')}</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">{t('footer.quickLinks')}</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white">{t('nav.features')}</a></li>
                <li><a href="#how-it-works" className="hover:text-white">{t('nav.howItWorks')}</a></li>
                <li><a href="#pricing" className="hover:text-white">{t('nav.pricing')}</a></li>
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
                  <a href="#" className="hover:text-white">@MemeAI</a>
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

export default App;