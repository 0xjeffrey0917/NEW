export type Language = 'en' | 'zh';

export const translations = {
  en: {
    nav: {
      features: 'Features',
      howItWorks: 'How It Works',
      pricing: 'Pricing',
      faq: 'FAQ',
      login: 'Login'
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
    }
  },
  zh: {
    nav: {
      features: '功能',
      howItWorks: '使用方法',
      pricing: '价格',
      faq: '常见问题',
      login: '登录'
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
    }
  }
} as const;