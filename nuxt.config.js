const publicPath = process.env.PUBLIC_PATH;

module.exports = {
  // application
  router: {
    base: '/',
  },
  plugins: [
    '~/plugins/device.js',
  ],

  // building
  build: {
    publicPath,
    extend(config, { isDev, isClient }) {
      // yaml
      config.module.rules.push({
        test: /\.ya?ml$/,
        use: [
          { loader: 'json-loader' },
          { loader: 'yaml-loader' },
        ],
      })
    }
  },

  // appearance / metadata
  loading: false,
  css: [
    { src: '~assets/styles/global.styl', lang: 'stylus' },
  ],
  head: {
    title: 'Megahertz',
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { property: "og:title", content: "Megahertz" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: publicPath },
      { property: "og:image", content: "https://github.com/ztrehagem.png" },
      { property: "og:locale", content: "ja_JP" },
      { property: "og:site_name", content: "Megahertz" },
      { property: "og:description", content: "Megahertz's portfolio" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@ztrehagem" },
      { name: "theme-color", content: "#3C3C3C" },
      { name: "msapplication-navbutton-color", content: "#3C3C3C" },
      { name: "apple-mobile-web-app-status-bar-style", content: "#3C3C3C" },
    ],
    link: [
      { href: "https://fonts.googleapis.com/css?family=Poiret+One", rel: "stylesheet" },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      {
        defer: true,
        src: "https://use.fontawesome.com/releases/v5.0.9/js/all.js",
        integrity: "sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl",
        crossorigin: "anonymous",
      },
    ],
  },
}
