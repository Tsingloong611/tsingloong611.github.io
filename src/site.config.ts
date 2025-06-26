import type { CardListData, Config, IntegrationUserConfig, ThemeUserConfig } from 'astro-pure/types'

export const theme: ThemeUserConfig = {
  // === Basic configuration ===
  /** Title for your website. Will be used in metadata and as browser tab title. */
  title: "Tsing_loong's Blog",
  /** Will be used in index page & copyright declaration */
  author: 'Tsing_loong',
  /** Description metadata for your website. Can be used in page metadata. */
  description: '三旬尚远浓烟撒，一如年少迟夏归', // [!code word:MODIFIED]
  /** The default favicon for your site which should be a path to an image in the `public/` directory. */
  favicon: '/favicon/favicon.ico',
  /** Specify the default language for this site. */
  locale: {
    lang: 'en-US', // [!code word:MODIFIED]
    attrs: 'en_US', // [!code word:MODIFIED]
    // Date locale
    dateLocale: 'en-US', // [!code word:MODIFIED]
    dateOptions: {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  },
  /** Set a logo image to show in the homepage. */
  logo: {
    src: 'src/assets/avatar.png',
    alt: 'Avatar'
  },

  // === Global configuration ===
  titleDelimiter: '•',
  prerender: true,
  npmCDN: 'https://cdn.jsdelivr.net/npm',

  // Still in test
  head: [
    /* Baidu site verification */ // [!code word:MODIFIED]
    // {
    //   tag: 'meta',
    //   attrs: { name: 'baidu-site-verification', content: '7otrvMjSkY' },
    //   content: ''
    // }
  ],
  customCss: [],

  /** Configure the header of your site. */
  header: {
    menu: [
      { title: 'Blog', link: '/blog' },
      { title: 'Projects', link: '/projects' },
      { title: 'Links', link: '/links' },
      { title: 'About', link: '/about' }
    ]
  },

  /** Configure the footer of your site. */
  footer: {
    links: [
      // Travellings Link
      // {
      //   title: 'Travellings', // [!code word:MODIFIED] "开往" is a specific project, using its URL name is best.
      //   link: 'https://www.travellings.cn/go.html',
      //   style: 'text-sm'
      // },
      // // Forever Blog Link
      // {
      //   title: 'Forever Blog', // [!code word:MODIFIED] "十年之约" is a project, using its URL name is best.
      //   link: 'https://www.foreverblog.cn/',
      //   style: 'text-sm'
      // },
      // Site Policies Link
      {
        title: 'Site Policies', // [!code word:MODIFIED]
        link: '/terms/list',
        pos: 2 // position set to 2 will be appended to copyright line
      }
    ],
    /** Enable displaying a "Astro & Pure theme powered" link in your site's footer. */
    credits: true,
    /** Optional details about the social media accounts for this site. */
    social: { 
      github: 'https://github.com/Tsingloong611'
      // You can add other social media here
    }
  },

  content: {
    externalLinksContent: ' ↗',
    /** Blog page size for pagination (optional) */
    blogPageSize: 10,
    externalLinkArrow: true,
    // You might want to change 'weibo' to other platforms for an English audience
    share: ['x', 'bluesky'] // [!code word:MODIFIED]
  }
}

export const integ: IntegrationUserConfig = {
  // Links management
  // See: https://astro-pure.js.org/docs/integrations/links
  links: {
    // Friend logbook
    logbook: [
      { date: '2025-04-05', content: 'Added friend link for PerseverantMind' }, // [!code word:MODIFIED]
      { date: '2023-10-29', content: 'Move friend link for NpusionD(2021-07-07) into archives' }, // [!code word:MODIFIED]
      { date: '2021-07-08', content: 'Added special links for Paddy and Akilar.' }, // [!code word:MODIFIED]
      { date: '2021-07-07', content: 'Added friend link for NupsionD' }, // [!code word:MODIFIED]
      { date: '2021-02-10', content: 'Friend links page created.' } // [!code word:MODIFIED]
    ],
    // Yourself link info
    applyTip: [
      { name: 'Site Name', val: theme.title }, // [!code word:MODIFIED]
      { name: 'Site Description', val: theme.description || '三旬尚远浓烟撒，一如年少迟夏归' }, // [!code word:MODIFIED]
      { name: 'Site URL', val: 'https://tsingloong.xyz/' }, // [!code word:MODIFIED]
      { name: 'Avatar URL', val: 'https://tsingloong.xyz/favicon/avatar.png' } // [!code word:MODIFIED]
    ]
  },
  // Enable page search function
  pagefind: true,
  // Add a random quote to the footer (default on homepage footer)
  // See: https://astro-pure.js.org/docs/integrations/advanced#web-content-render
  quote: {
    // Using an English quote API instead of Hitokoto
    server: 'https://v1.hitokoto.cn/?c=i',
    target: '(data) => data.hitokoto || Error'
  },
  // UnoCSS typography
  // See: https://unocss.dev/presets/typography
  typography: {
    class: 'prose text-base text-muted-foreground'
  },
  // A lightbox library that can add zoom effect
  // See: https://astro-pure.js.org/docs/integrations/others#medium-zoom
  mediumZoom: {
    enable: true,
    selector: '.prose .zoomable',
    options: {
      className: 'zoomable'
    }
  },
  // Comment system
  waline: {
    enable: true,
    // You need to deploy your own Waline service
    server: 'https://my-waline-service-tsingloong611s-projects.vercel.app/', // Please replace with your own Waline service URL
    // Refer https://waline.js.org/en/guide/features/emoji.html
    emoji: ['bmoji', 'weibo'],
    // Refer https://waline.js.org/en/reference/client/props.html
    additionalConfigs: {
      pageview: true,
      comment: true,
      avatar: 'monsterid',
      lang: 'en-US',
      meta: ['nick', 'mail', 'link'],
      requiredMeta: ['nick'],
      wordLimit: [0, 1000],
      locale: {
        reaction0: 'Like', // [!code word:MODIFIED]
        placeholder: '你是我一生仅会遇见一次的惊喜',
      },
      imageUploader: true,
    }
  }
}

export const terms: CardListData = {
  title: 'Terms', // [!code word:MODIFIED]
  list: [
    {
      title: 'Privacy Policy', // [!code word:MODIFIED]
      link: '/terms/privacy-policy'
    },
    {
      title: 'Terms of Use', // [!code word:MODIFIED]
      link: '/terms/terms-and-conditions'
    },
    {
      title: 'Copyright Notice', // [!code word:MODIFIED]
      link: '/terms/copyright'
    },
    {
      title: 'Disclaimer', // [!code word:MODIFIED]
      link: '/terms/disclaimer'
    }
  ]
}

const config = { ...theme, integ } as Config
export default config