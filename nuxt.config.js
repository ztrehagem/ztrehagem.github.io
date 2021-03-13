import * as tailwindcssConfig from './tailwind.config'

const publicPath = process.env.PUBLIC_PATH ?? 'https://ztrehagem.dev/'
const title = 'ztrehagem.dev'
const description = 'a portfolio'

export default {
  target: 'static',

  head: {
    titleTemplate: (str) => (str ? `${str} - ztrehagem.dev` : 'ztrehagem.dev'),
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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap',
      },
    ],
  },

  css: ['~/assets/global.css'],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
  ],

  tailwindcss: {
    config: tailwindcssConfig,
  },

  googleAnalytics: {
    id: 'UA-129758740-3',
  },

  modules: [],

  srcDir: 'src',

  build: {},

  publicRuntimeConfig: {
    site: {
      title,
    },
  },
}
