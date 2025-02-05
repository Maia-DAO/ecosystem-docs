const math = require('remark-math')
const katex = require('rehype-katex')

module.exports = {
  title: 'Maia Ecosystem',
  tagline: 'Documentation and Guides',
  url: 'https://v2-docs.maiadao.io/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'Maia-DAO', // Usually your GitHub org/user name.
  projectName: 'ecosystem-docs', // Usually your repo name.
  deploymentBranch: 'main',
  trailingSlash: false,
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig: {
    image: 'img/twitter_card_bg.png',
    prism: {
      additionalLanguages: ['solidity'],
    },
    algolia: {
      apiKey: 'feec8d3ebb219a69c27e6e675015127f',
      indexName: 'ecosystem_docs',
      appId: 'KP5MH8H1FE',
    },
    navbar: {
      title: 'Maia Ecosystem Docs',
      logo: {
        alt: 'Maia Ecosystem',
        src: 'img/uni_dark_icon.png',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Protocols',
          position: 'left',
          dropdownActiveClassDisabled: true,
          docsPluginId: 'default',
          className: 'persistent',
          items: [
            {
              label: 'Maia',
              href: '/protocols/introduction',
            },
            {
              label: 'Hermes',
              href: '/protocols/Hermes/introduction',
            },
            {
              label: 'Talos',
              href: '/protocols/Talos/introduction',
            },
            {
              label: 'Ulysses',
              href: '/protocols/Ulysses/introduction',
            },
          ],
        },
        // {
        //   type: 'docsVersionDropdown',
        //   //// Optional
        //   position: 'left',
        //   dropdownActiveClassDisabled: true,
        //   docsPluginId: 'default',
        //   className: 'persistent',
        // },
        {
          to: '/protocols/introduction',
          label: 'Maia',
          position: 'left',
          className: 'Maia_active',
        },
        {
          to: '/protocols/Hermes/introduction',
          label: 'Hermes',
          position: 'left',
          className: 'Hermes_active',
        },
        {
          to: '/protocols/Talos/introduction',
          label: 'Talos',
          position: 'left',
          className: 'Talos_active',
        },
        {
          to: '/protocols/Ulysses/introduction',
          label: 'Ulysses',
          position: 'left',
          className: 'Ulysses_active',
        },
        // {
        //   to: '/sdk/introduction',
        //   label: 'SDK',
        //   position: 'right',
        //   className: 'persistent',
        // },
        // {
        //   to: '/sdk/widgets/swap-widget',
        //   label: 'Widgets',
        //   position: 'left',
        //   className: 'persistent',
        // },
        // {
        //   to: '/sdk/subgraph/subgraph-data',
        //   label: 'Subgraph (API)',
        //   position: 'right',
        //   className: 'persistent',
        // },
        {
          to: '/protocols/governance/overview',
          label: 'Governance',
          position: 'left',
          className: 'Maia_active',
        },
        {
          to: '/protocols/Hermes/governance/overview',
          label: 'Governance',
          position: 'left',
          className: 'Hermes_active',
        },
        {
          to: '/protocols/Hermes/partners/program',
          label: 'Hermes Partners',
          position: 'left',
          className: 'persistent',
        },
        {
          to: '/protocols/Audits/audits',
          label: 'Audits',
          position: 'right',
          className: 'persistent',
        },
        {
          to: '/protocols/Transparency/transparency',
          label: 'Transparency',
          position: 'right',
          className: 'persistent',
        },
        // {
        //   to: '/protocols/Contracts/introduction',
        //   label: 'Contracts',
        //   position: 'left',
        //   className: 'Maia_active',
        // },
        // {
        //   to: '/protocols/Contracts/introduction',
        //   label: 'Contracts',
        //   position: 'left',
        //   className: 'Hermes_active',
        // },
        // {
        //   to: '/protocols/Contracts/introduction',
        //   label: 'Contracts',
        //   position: 'left',
        //   className: 'Talos_active',
        // },
        // {
        //   to: '/protocols/Contracts/introduction',
        //   label: 'Contracts',
        //   position: 'left',
        //   className: 'Ulysses_active',
        // },
        // {
        //   label: 'Give Feedback',
        //   to: 'https://forms.gle/13XtjmkwdXQ2jMn26',
        //   position: 'right',
        //   className: 'persistent',
        // },
        // {
        //   label: 'Whitepaper',
        //   to: 'https://uniswap.org/whitepaper-v3.pdf',
        //   position: 'right',
        //   className: 'persistent',
        // },
        {
          href: '/protocols/FAQs/faq',
          label: 'FAQs',
          position: 'right',
          className: 'persistent',
        },
        {
          href: 'https://github.com/Maia-DAO/ecosystem-docs',
          label: 'GitHub',
          position: 'right',
          className: 'persistent',
        },
        // {
        //   href: 'https://unigrants.org/',
        //   label: 'Grants',
        //   position: 'right',
        //   className: 'persistent',
        // },
      ],
    },
    footer: {
      // style: "dark",
      links: [
        {
          title: 'Developers',
          items: [
            // {
            //   label: 'Feedback',
            //   href: 'https://forms.gle/13XtjmkwdXQ2jMn26',
            // },
            // {
            //   label: 'Bug Bounty',
            //   href: 'https://github.com/Uniswap/uniswap-v3-periphery/blob/main/bug-bounty.md',
            // },
            {
              label: 'Discord',
              href: 'https://discord.gg/maiadao',
            },
            // {
            //   label: 'Whitepaper',
            //   href: 'https://uniswap.org/whitepaper-v3.pdf',
            // },
          ],
        },
        {
          title: 'Github',
          items: [
            {
              label: 'Maia DAO',
              href: 'https://github.com/Maia-DAO',
            },
            // {
            //   label: 'uniswap-v3-sdk',
            //   href: 'https://github.com/Uniswap/uniswap-v3-sdk',
            // },
            // {
            //   label: 'uniswap-v3-periphery',
            //   href: 'https://github.com/Uniswap/uniswap-v3-periphery',
            // },
            // {
            //   label: 'Deployment addresses',
            //   href: 'https://github.com/Uniswap/uniswap-v3-periphery/blob/main/deploys.md',
            // },
          ],
        },
        {
          title: 'Ecosystem',
          items: [
            {
              label: 'Home',
              href: 'https://maiadao.io/',
            },
            {
              label: 'Maia',
              href: 'https://app.maiadao.io/',
            },
            {
              label: 'Hermes',
              href: 'https://hermes.maiadao.io/',
            },
            {
              label: 'Uni Maia',
              href: 'https://uni.maiadao.io/',
            },
            // {
            //   label: 'Analytics',
            //   href: 'https://info.maiadao.io/home',
            // },
            // {
            //   label: 'Token Lists',
            //   href: 'https://tokenlists.org/',
            // },
            // {
            //   label: 'Brand Assets',
            //   href: 'https://maiadao.io/Uniswap_brand_assets.zip',
            // },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Governance',
              href: 'https://commonwealth.im/maia-dao',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/maiadao',
            },
            {
              label: 'Medium',
              href: 'https://medium.com/@maiaDAO',
            },
            {
              label: 'Maia\'s Twitter',
              href: 'https://twitter.com/MaiaDAOEco',
            },
            {
              label: 'Hermes\' Twitter',
              href: 'https://twitter.com/HermesOmnichain',
            },
            {
              label: 'Talos\' Twitter',
              href: 'https://twitter.com/TalosOmnichain',
            },
          ],
        },
      ],
      // copyright: `unlicensed`,
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'protocols',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          routeBasePath: 'protocols/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Maia-DAO/ecosystem-docs/tree/main/',
          includeCurrentVersion: false,
          versions: {
            Maia: {
              banner: 'none',
            },
            Hermes: {
              banner: 'none',
            },
            Talos: {
              banner: 'none',
            },
            Ulysses: {
              banner: 'none',
            },
            // Contracts: {
            //   banner: 'none',
            // },
            Transparency: {
              banner: 'none',
            },
            Audits: {
              banner: 'none',
            },
            FAQs: {
              banner: 'none',
            }
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          // customCss2: require.resolve('./src/css/colors.css'),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
}
