
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'de'
    },
    title: 'Trageberatung Lisa Reif',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/tailwindcss',// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@bazzite/nuxt-optimized-images' //For optimizing images
  ],

  optimizedImages: {
    optimizeImages: true
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-webfontloader', //for loading fonts
    '@nuxtjs/robots' //for setting a valid robots.txt

  ],

  webfontloader: {
    google: {
      families: ['Lato:400,700&display=swap'] //Loads Lato font with weights 400 and 700
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
