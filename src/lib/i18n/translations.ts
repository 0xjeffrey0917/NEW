export type Language = 'en' | 'zh' | 'ja';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      features: 'Features',
      howItWorks: 'How It Works',
      pricing: 'Pricing',
      faq: 'FAQ',
      login: 'Login',
      gifMaker: 'GIF Maker',
      memeCreation: 'Meme Creation'
    },
    hero: {
      title: 'AI-Powered Meme Creation Platform',
      subtitle: 'Upload your favorite memes and let AI create unique variations. Share instantly to make your creativity go viral.'
    },
    upload: {
      title: 'Upload your meme',
      dragDrop: 'Click or drag & drop to upload',
      formats: 'Supports JPG, PNG formats',
      change: 'Click to change image'
    },
    creation: {
      prompt: 'Creative Prompt',
      promptPlaceholder: 'Describe your creative vision...',
      promptTip: 'Detailed descriptions help AI better understand your creative ideas',
      generateWithPrompt: 'Generate with Prompt',
      generateRandom: 'Random Generation',
      generating: 'AI is creating...',
      popularPrompts: 'Popular Prompts',
      funnyStyle: 'Funny Style',
      retroEffect: 'Retro Effect',
      cyberpunk: 'Cyberpunk',
      pixelArt: 'Pixel Art'
    },
    results: {
      title: 'AI Creation Results',
      download: 'Download Image',
      shareTwitter: 'Share on Twitter'
    },
    features: {
      title: 'Powerful Features',
      ai: {
        title: 'AI Smart Creation',
        desc: 'Deep learning-based image generation that preserves the original meme essence'
      },
      share: {
        title: 'One-Click Share',
        desc: 'Direct sharing to Twitter for rapid spread of your creativity'
      },
      social: {
        title: 'Social Sharing',
        desc: 'Share your creative works with the Web3 community'
      }
    },
    howItWorks: {
      title: 'How It Works',
      step1: {
        title: 'Upload Original',
        desc: 'Choose and upload your favorite meme'
      },
      step2: {
        title: 'Add Prompts',
        desc: 'Enter creative prompts or choose random generation'
      },
      step3: {
        title: 'Share Creation',
        desc: 'Share to Twitter with one click'
      }
    },
    pricing: {
      title: 'Pricing Plans',
      free: {
        title: 'Free',
        price: '0',
        features: [
          '5 generations per day',
          'Basic sharing features'
        ],
        cta: 'Start Using'
      },
      pro: {
        title: 'Pro',
        price: '99',
        features: [
          'Unlimited generations',
          'Advanced sharing features',
          'Priority generation queue'
        ],
        cta: 'Upgrade to Pro'
      },
      enterprise: {
        title: 'Enterprise',
        price: 'Custom',
        features: [
          'Customized solutions',
          'Dedicated account manager',
          'API support'
        ],
        cta: 'Contact Us'
      }
    },
    faq: {
      title: 'FAQ',
      questions: [
        {
          q: 'How do you ensure generated image quality?',
          a: 'We use state-of-the-art AI models to ensure generated images maintain the original meme style and quality. Our algorithms continuously learn and optimize to provide better generation results.'
        },
        {
          q: 'What image formats are supported?',
          a: 'Currently, we support JPG and PNG formats. We will continue to add support for other formats based on user needs.'
        },
        {
          q: 'Who owns the copyright to generated images?',
          a: 'Images generated on our platform belong to the users. However, please comply with relevant laws and regulations and do not generate inappropriate content.'
        }
      ]
    },
    footer: {
      slogan: 'Making creativity more fun, sharing more simple',
      quickLinks: 'Quick Links',
      contact: 'Contact Us',
      followUs: 'Follow Us',
      copyright: '© 2025 MemeAI by Jeffrey. All rights reserved.'
    },
    gifCreator: {
      title: 'Free Online GIF & Meme Maker - How to Make a GIF',
      subtitle: 'Convert Videos, Images & Tweets to GIF - Create Anime Memes & Funny GIFs',
      upload: {
        title: 'Drop any file to create a GIF',
        subtitle: 'Support mpg to gif, webp to gif, MP4, MOV, PNG, JPEG conversion',
        changeImage: 'Change source file'
      },
      generation: {
        title: 'AI Generation',
        button: 'Generate with AI',
        generating: 'Generating...',
        processing: 'Processing your image...'
      },
      results: {
        title: 'Generated GIFs',
        download: 'Download GIF',
        share: 'Share on Twitter'
      },
      features: {
        title: 'Everything You Need for GIF Creation',
        instant: {
          title: 'Universal Converter',
          desc: 'Convert any format to GIF - video (MP4, MOV, mpg to gif), images (PNG, JPEG, webp to gif), or tweets. Also convert GIF to video format.'
        },
        sharing: {
          title: 'Meme Creation Tools',
          desc: 'Create funny GIFs and viral memes with our advanced tools and effects'
        },
        styles: {
          title: 'Anime & Custom Styles',
          desc: 'Special effects for anime GIFs and memes - perfect for social media'
        }
      },
      howItWorks: {
        title: 'How It Works',
        step1: {
          title: 'Upload Image',
          desc: 'Upload any image in JPG, PNG, or WebP format'
        },
        step2: {
          title: 'Auto-Generate',
          desc: 'Our AI automatically creates multiple GIF variations'
        },
        step3: {
          title: 'Download & Share',
          desc: 'Download your favorite GIF or share directly to social media'
        }
      },
      faq: {
        title: 'Frequently Asked Questions',
        q1: {
          question: 'How do I convert video (MP4, MOV, mpg to gif) to GIF?',
          answer: 'Simply upload your video and our tool will automatically convert it to GIF format. You can adjust the quality and duration.'
        },
        q2: {
          question: 'Can I convert images (PNG, JPEG, WebP) to GIF?',
          answer: 'Yes! Our tool supports converting static images to animated GIFs. Upload any PNG, JPEG, or WebP file to get started.'
        },
        q3: {
          question: 'How to create anime memes and GIFs?',
          answer: 'We offer special effects and filters designed specifically for anime content. Upload your anime image or video and choose from various animation styles.'
        },
        q4: {
          question: 'Can I convert GIF to video format?',
          answer: 'Yes! Our tool supports converting GIFs back to video format (MP4, MOV) for better compatibility with video platforms.'
        },
        q5: {
          question: 'Can I convert tweets to GIF?',
          answer: 'Yes! Just paste the tweet URL and we\'ll convert it into an animated GIF perfect for sharing on social media.'
        }
      }
    }
  },
  zh: {
    nav: {
      home: '首页',
      features: '功能',
      howItWorks: '使用方法',
      pricing: '价格',
      faq: '常见问题',
      login: '登录',
      gifMaker: 'GIF制作',
      memeCreation: 'Meme制作'
    },
    hero: {
      title: 'AI驱动的Meme创作平台',
      subtitle: '上传你喜欢的Meme，让AI帮你创造独特的二创作品。一键分享，让你的创意传播得更远。'
    },
    upload: {
      title: '上传你的meme',
      dragDrop: '点击或拖拽上传',
      formats: '支持 JPG, PNG 格式',
      change: '点击更换图片'
    },
    creation: {
      prompt: '创意提示词',
      promptPlaceholder: '描述你想要的创意效果...',
      promptTip: '提供详细的描述可以帮助AI更好地理解你的创意想法',
      generateWithPrompt: '根据提示词生成',
      generateRandom: '随机创意生成',
      generating: 'AI正在创作中...',
      popularPrompts: '热门提示词',
      funnyStyle: '搞笑风格',
      retroEffect: '复古效果',
      cyberpunk: '赛博朋克',
      pixelArt: '像素艺术'
    },
    results: {
      title: 'AI创作结果',
      download: '下载图片',
      shareTwitter: '分享到Twitter'
    },
    features: {
      title: '强大功能',
      ai: {
        title: 'AI智能创作',
        desc: '基于深度学习的图像生成技术，保持原始Meme的精髓'
      },
      share: {
        title: '一键分享',
        desc: '直接分享到Twitter，让你的创意快速传播'
      },
      social: {
        title: '社交分享',
        desc: '与Web3社区分享你的创意作品'
      }
    },
    howItWorks: {
      title: '使用方法',
      step1: {
        title: '上传原图',
        desc: '选择你喜欢的Meme图片上传'
      },
      step2: {
        title: '添加提示词',
        desc: '输入创意提示词或选择随机生成'
      },
      step3: {
        title: '分享创作',
        desc: '一键分享到Twitter，展示你的创意'
      }
    },
    pricing: {
      title: '价格方案',
      free: {
        title: '免费版',
        price: '0',
        features: [
          '每日5次生成机会',
          '基础分享功能'
        ],
        cta: '开始使用'
      },
      pro: {
        title: '专业版',
        price: '99',
        features: [
          '无限生成次数',
          '高级分享功能',
          '优先生成队列'
        ],
        cta: '升级专业版'
      },
      enterprise: {
        title: '企业版',
        price: '定制',
        features: [
          '定制化解决方案',
          '专属客户经理',
          'API接口支持'
        ],
        cta: '联系我们'
      }
    },
    faq: {
      title: '常见问题',
      questions: [
        {
          q: '如何保证生成图片的质量？',
          a: '我们使用最先进的AI模型，确保生成的图片保持原始Meme的风格和质量。同时，我们的算法会不断学习和优化，提供更好的生成效果。'
        },
        {
          q: '支持哪些图片格式？',
          a: '目前支持JPG和PNG格式的图片上传。我们会根据用户需求，持续增加对其他格式的支持。'
        },
        {
          q: '生成的图片版权归属？',
          a: '使用我们平台生成的图片版权归用户所有。但请注意遵守相关法律法规，不要生成违规内容。'
        }
      ]
    },
    footer: {
      slogan: '让创意更有趣，让分享更简单',
      quickLinks: '快速链接',
      contact: '联系我们',
      followUs: '关注我们',
      copyright: '© 2025 MemeAI by Jeffrey. 保留所有权利。'
    },
    gifCreator: {
      title: '免费在线GIF和Meme制作工具',
      subtitle: '视频、图片、推文转GIF - 制作动漫Meme和搞笑GIF',
      upload: {
        title: '拖放任意文件制作GIF',
        subtitle: '支持MP4、MOV、PNG、JPEG、WebP转GIF',
        changeImage: '更换源文件'
      },
      generation: {
        title: 'AI生成',
        button: 'AI生成GIF',
        generating: '生成中...',
        processing: '正在处理您的图片...'
      },
      results: {
        title: '生成的GIF',
        download: '下载GIF',
        share: '分享到Twitter'
      },
      features: {
        title: 'GIF制作全能工具',
        instant: {
          title: '万能转换器',
          desc: '支持任何格式转GIF - 视频、图片或推文。支持MP4、MOV、PNG、JPEG和WebP格式'
        },
        sharing: {
          title: 'Meme制作工具',
          desc: '使用我们的高级工具和特效制作有趣的GIF和病毒式Meme'
        },
        styles: {
          title: '动漫和自定义风格',
          desc: '动漫GIF和Meme专用特效 - 完美适配社交媒体分享'
        }
      },
      howItWorks: {
        title: '使用方法',
        step1: {
          title: '上传图片',
          desc: '上传JPG、PNG或WebP格式的图片'
        },
        step2: {
          title: '自动生成',
          desc: 'AI自动创建多个GIF变体'
        },
        step3: {
          title: '下载分享',
          desc: '下载你喜欢的GIF或直接分享到社交媒体'
        }
      },
      faq: {
        title: '常见问题',
        q1: {
          question: '如何将视频转换为GIF？',
          answer: '只需上传视频（MP4、MOV），我们的工具会自动将其转换为GIF格式。您可以调整质量和时长。'
        },
        q2: {
          question: '可以将图片（PNG、JPEG、WebP）转换为GIF吗？',
          answer: '可以！我们的工具支持将静态图片转换为动态GIF。上传任何PNG、JPEG或WebP文件即可开始。'
        },
        q3: {
          question: '如何制作动漫Meme和GIF？',
          answer: '我们提供专门为动漫内容设计的特效和滤镜。上传您的动漫图片或视频，选择各种动画风格。'
        },
        q4: {
          question: '可以将推文转换为GIF吗？',
          answer: '可以！只需粘贴推文URL，我们就会将其转换为适合社交媒体分享的动态GIF。'
        }
      }
    }
  },
  ja: {
    nav: {
      home: 'ホーム',
      features: '機能',
      howItWorks: '使い方',
      pricing: '料金',
      faq: 'よくある質問',
      login: 'ログイン',
      gifMaker: 'GIF作成',
      memeCreation: 'ミーム作成'
    },
    hero: {
      title: 'AIを使用したミーム作成プラットフォーム',
      subtitle: 'お気に入りのミームをアップロードし、AIによる独自のオリジナルミームを作成しましょう。1クリックで共有し、クリエイティブを広めましょう。'
    },
    upload: {
      title: 'ミームをアップロード',
      dragDrop: 'クリックまたはドラッグ＆ドロップでアップロード',
      formats: 'JPG、PNG形式に対応',
      change: 'クリックして画像を変更'
    },
    creation: {
      prompt: 'クリエイティブプロンプト',
      promptPlaceholder: 'クリエイティブな効果を説明してください...',
      promptTip: '詳細な説明はAIにクリエイティブなアイデアをよりよく理解させるのに役立ちます',
      generateWithPrompt: 'プロンプトで生成',
      generateRandom: 'ランダムなクリエイティブ生成',
      generating: 'AIが作成中...',
      popularPrompts: '人気のプロンプト',
      funnyStyle: 'お笑いスタイル',
      retroEffect: 'レトロ効果',
      cyberpunk: 'サイバーパンク',
      pixelArt: 'ピクセルアート'
    },
    results: {
      title: 'AI作成結果',
      download: '画像をダウンロード',
      shareTwitter: 'Twitterで共有'
    },
    features: {
      title: '強力な機能',
      ai: {
        title: 'AIスマート作成',
        desc: 'ディープラーニングに基づく画像生成技術、オリジナルミームの精髓を維持'
      },
      share: {
        title: '1クリック共有',
        desc: '最新のAI技術を使用して、クリエイティブを迅速に広めましょう'
      },
      social: {
        title: 'ソーシャルシェアリング',
        desc: 'Web3コミュニティとクリエイティブな作品を共有'
      }
    },
    howItWorks: {
      title: '使用方法',
      step1: {
        title: '画像をアップロード',
        desc: 'JPG、PNG、WebP形式の画像をアップロード'
      },
      step2: {
        title: 'プロンプトを追加',
        desc: 'クリエイティブなプロンプトを入力するか、ランダムな生成を選択'
      },
      step3: {
        title: '作成を共有',
        desc: '1クリックでTwitterに共有'
      }
    },
    pricing: {
      title: '料金プラン',
      free: {
        title: '無料版',
        price: '0',
        features: [
          '1日5回の生成機会',
          '基本の共有機能'
        ],
        cta: '無料版を使用'
      },
      pro: {
        title: 'プロ版',
        price: '99',
        features: [
          '無制限の生成回数',
          '高度な共有機能',
          '優先的な生成キュー'
        ],
        cta: 'プロ版にアップグレード'
      },
      enterprise: {
        title: 'エンタープライズ版',
        price: 'カスタマイズ',
        features: [
          'カスタマイズされたソリューション',
          '専用のアカウントマネージャー',
          'APIサポート'
        ],
        cta: 'お問い合わせ'
      }
    },
    faq: {
      title: 'よくある質問',
      questions: [
        {
          q: '生成された画像の品質をどのように保証しますか？',
          a: '最新のAIモデルを使用して生成された画像の品質を保証します。同時に、アルゴリズムは継続的に学習し、最適化して、より良い生成結果を提供します。'
        },
        {
          q: 'どの画像形式がサポートされていますか？',
          a: '現在、JPGとPNG形式の画像のアップロードのみサポートされています。ユーザーのニーズに基づいて、他の形式のサポートを継続的に追加します。'
        },
        {
          q: '生成された画像の著作権は？',
          a: 'このプラットフォームで生成された画像の著作権はユーザーに帰属します。ただし、関連する法律や規制に従い、不適切なコンテンツを生成しないでください。'
        }
      ]
    },
    footer: {
      slogan: 'クリエイティブをもっと楽しく、シェアをもっと簡単に',
      quickLinks: 'クイックリンク',
      contact: 'お問い合わせ',
      followUs: 'フォロー',
      copyright: '© 2025 MemeAI by Jeffrey. 全著作権所有。'
    },
    gifCreator: {
      title: '無料オンラインGIF・ミーム作成ツール',
      subtitle: '動画・画像・ツイートをGIFに変換 - アニメミーム＆面白いGIF作成',
      upload: {
        title: 'ファイルをドロップしてGIFを作成',
        subtitle: 'MP4、MOV、PNG、JPEG、WebPからGIFへの変換に対応',
        changeImage: 'ソースファイルを変更'
      },
      generation: {
        title: 'AI生成',
        button: 'AIでGIFを生成',
        generating: '生成中...',
        processing: '画像を処理中...'
      },
      results: {
        title: '生成されたGIF',
        download: 'GIFをダウンロード',
        share: 'Twitterでシェア'
      },
      features: {
        title: 'GIF作成に必要な全ての機能',
        instant: {
          title: '万能コンバーター',
          desc: 'あらゆる形式をGIFに変換 - 動画、画像、ツイートに対応。MP4、MOV、PNG、JPEG、WebP形式をサポート'
        },
        sharing: {
          title: 'ミーム作成ツール',
          desc: '面白いGIFやバイラルミームを作成できる高度なツールとエフェクト'
        },
        styles: {
          title: 'アニメ＆カスタムスタイル',
          desc: 'アニメGIFやミーム用の特殊エフェクト - SNSでの共有に最適'
        }
      },
      howItWorks: {
        title: '使い方',
        step1: {
          title: '画像をアップロード',
          desc: 'JPG、PNG、WebP形式の画像をアップロード'
        },
        step2: {
          title: '自動生成',
          desc: 'AIが自動的に複数のGIFバリエーションを作成'
        },
        step3: {
          title: 'ダウンロード＆シェア',
          desc: 'お気に入りのGIFをダウンロードまたはSNSでシェア'
        }
      },
      faq: {
        title: 'よくある質問',
        q1: {
          question: '動画をGIFに変換するには？',
          answer: '動画（MP4、MOV）をアップロードするだけで、自動的にGIF形式に変換されます。品質や長さの調整も可能です。'
        },
        q2: {
          question: '画像（PNG、JPEG、WebP）からGIFを作れますか？',
          answer: 'はい！静止画からアニメーションGIFを作成できます。PNG、JPEG、WebPファイルをアップロードするだけで始められます。'
        },
        q3: {
          question: 'アニメミームやGIFの作り方は？',
          answer: 'アニメコンテンツ専用の特殊エフェクトやフィルターを用意しています。アニメ画像や動画をアップロードして、様々なアニメーションスタイルから選択できます。'
        },
        q4: {
          question: 'ツイートをGIFに変換できますか？',
          answer: 'はい！ツイートのURLを貼り付けるだけで、SNSでの共有に最適なアニメーションGIFに変換できます。'
        }
      }
    }
  }
} as const;