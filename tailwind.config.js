/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'nuxt.config.js'
    ]
  },
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.2rem'
      },
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        footer: '#EEEEEE',
        background: '#F3F3F5',
        primary: '#6ECBB2'
      },
      inset: {
        '0': '0',
        auto: 'auto',
        '8' : '2rem',
        '12' : '3rem',
        '16' : '4rem'
      },
      fontFamily: {
        heading: ['Signatura', 'Roboto'],
        body: ['Lato', 'serif']
      },
    }
  },
  variants: {},
  plugins: []
}
