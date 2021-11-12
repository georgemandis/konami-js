// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '🕹 Konami JS',
  tagline: 'Making the web more fun since 2009!',
  url: 'https://konamijs.mand.is',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  // favicon: 'img/favicon.ico',
  organizationName: 'georgemandis', // Usually your GitHub org/user name.
  projectName: 'konami-js', // Usually your repo name.
  deploymentBranch: "docs",
  scripts: [
    {src: 'https://plausible.io/js/plausible.js', async: true, defer: true, 'data-domain': 'konamijs.mand.is'},
    {src: 'https://cdn.changelog.com/embed.js', async: true},
    {src: '/konami.js', async: true, defer: true}
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/georgemandis/konami-js/edit/gh-pages/',          
        },        
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Konami JS',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'doc',
            docId: 'about',
            position: 'left',
            label: "About",
          },{
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: "Let's Get Started!",
          },
          {
            type: 'doc',
            docId: 'examples/vanilla-javascript',
            position: 'left',
            label: 'Examples',
          },
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Docs',
          // },
          {
            type: 'doc',
            docId: 'showcase',
            position: 'left',
            label: 'Showcase',
          },          
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/sponsors/georgemandis',
            label: 'Support',
            position: 'right'
          },
          {
            href: 'https://github.com/georgemandis/konami-js',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: "Let's Get Started!",
                to: '/docs/intro',
              },
              {
                label: 'Examples',
                to: '/docs/examples/vanilla-javascript',
              },
            ],
          },
          {
            title: 'Watch & Listen',
            items: [
              {
                label: 'Talk at OdessaJS',
                href: 'https://www.youtube.com/watch?v=F3xI3ps7syI',
              },
              {
                label: 'Interview on JS Party',
                href: 'https://changelog.com/jsparty/81',
              },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },              
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },              
              {
                label: 'About the creator',
                href: 'https://george.mand.is',
              },              
              {
                label: "Become a better programmer",
                title: "Recurse Center",
                href: "https://www.recurse.com/scout/click?t=151b3c977197fc57d3ab8ce968bce35e"
              }
            ],
          },
        ],
        copyright: `Copyright © 2009-${new Date().getFullYear()}. A silly web-toy lovingly cobbled together by George Mandis.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};





module.exports = config;
