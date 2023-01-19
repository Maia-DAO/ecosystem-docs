const math = require('remark-math')
const katex = require('rehype-katex')

module.exports = {
  title: 'Maia Ecosystem',
  tagline: 'Documentation and Guides',
  url: 'https://maia-dao.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'Maia-DAO', // Usually your GitHub org/user name.
  projectName: 'maia-dao.github.io', // Usually your repo name.
  deploymentBranch: 'Maia-DAO',
  trailingSlash: false,
  themeConfig: {
    image: 'img/twitter_card_bg.png',
    prism: {
      additionalLanguages: ['solidity'],
    },
    algolia: {
      apiKey: '215a980d267cf35cc81fa49332092a8b',
      indexName: 'maia-ecosystem-docs',
      appId: 'HUFIQABVG5',
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
        {
          to: '/protocols/technical/reference/smart-contracts',
          label: 'Contracts',
          position: 'left',
          className: 'Maia_active',
        },
        {
          to: '/protocols/Hermes/technical/reference/smart-contracts',
          label: 'Contracts',
          position: 'left',
          className: 'Hermes_active',
        },
        {
          to: '/protocols/Talos/technical/reference/smart-contracts',
          label: 'Contracts',
          position: 'left',
          className: 'Talos_active',
        },
        {
          to: '/protocols/Ulysses/technical/reference/smart-contracts',
          label: 'Contracts',
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
          to: '/protocols/concepts/governance/overview',
          label: 'Governance',
          position: 'left',
          className: 'Maia_active',
        },
        {
          to: '/protocols/Hermes/concepts/governance/overview',
          label: 'Governance',
          position: 'left',
          className: 'Hermes_active',
        },
        {
          to: '/protocols/Talos/concepts/governance/overview',
          label: 'Governance',
          position: 'left',
          className: 'Talos_active',
        },
        {
          to: '/protocols/Ulysses/concepts/governance/overview',
          label: 'Governance',
          position: 'left',
          className: 'Ulysses_active',
        },
        {
          to: '/protocols/Hermes/partners/program',
          label: 'Hermes Partners',
          position: 'left',
          className: 'persistent',
        },
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
          href: 'https://github.com/Maia-DAO/v2-maia-ecosystem-docs',
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
              label: '#dev-chat',
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
              href: 'https://twitter.com/HermesOminchain',
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
      respectPrefersColorScheme: true,
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
          editUrl: 'https://github.com/Maia-DAO/v2-maian-ecosystem-docs/tree/main/',
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
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'SDK',
        path: 'sdk',
        routeBasePath: 'sdk/',
        sidebarPath: require.resolve('./sdkSidebars.js'),
        remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]],
        includeCurrentVersion: false,
        versions: {
          'Maia': {
            banner: 'none',
          }
        },
      },
    ],
  ],
}
