module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Red Hat Communities of Practice',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    logo: '/images/Logo-Red_Hat-Communites_of_Practice-A-Reverse-RGB.svg',
    nav: [
      {
        text: 'Communities',
        link: '/communities/'
      },
      {
        text: 'RedHat.com',
        link: 'https://redhat.com/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/redhat-cop/'
      }
    ],
    sidebar: {
      '/communities/': [
        {
          title: 'Communities',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/google-analytics',
    {
      'ga': 'G-9QY7W4KN4' // UA-00000000-0
    }
  ]
}
