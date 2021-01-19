const publicPath = process.env.PUBLIC_PATH ?? 'https://ztrehagem.dev/'
const title = 'ztrehagem.dev'
const description = 'a portfolio'

export default {
  target: 'static',

  head: {
    title,
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: description, content: '' },
      { property: 'og:title', content: title },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: publicPath },
      { property: 'og:image', content: 'https://github.com/ztrehagem.png' },
      { property: 'og:locale', content: 'ja_JP' },
      { property: 'og:site_name', content: title },
      { property: 'og:description', content: description },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@ztrehagem' },
      { name: 'theme-color', content: '#3C3C3C' },
      { name: 'msapplication-navbutton-color', content: '#3C3C3C' },
      { name: 'apple-mobile-web-app-status-bar-style', content: '#3C3C3C' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~/assets/global.css'],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],

  modules: [],

  srcDir: 'src',

  build: {},

  publicRuntimeConfig: {
    site: {
      title,
    },
  },
}
