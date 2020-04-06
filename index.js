const { Keystone } = require('@keystonejs/keystone');
const { Text } = require('@keystonejs/fields');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { NuxtApp } = require('@keystonejs/app-nuxt');
// const { StaticApp } = require('@keystonejs/app-static');
const dotenv = require('dotenv')

const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');

const { Todo, Post, PostCategory, Author } = require('./schema');

dotenv.config()

const PROJECT_NAME = "MSSN Center Ilorin";


const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(),
});

const NuxtConfig = {
  srcDir: 'src',
  buildDir: 'dist',
  head: {
    title: 'MSSN Center Ilorin' || process.env.npm_package_name,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'MSSN Center Ilorin' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'MSSNCI' },
      { hid: 'og:title', name: 'og:title', content: 'MSSN Center Ilorin' },
      { name: 'msapplication-TileColor', content: '#FFFFFF' },
      { name: 'msapplication-TileImage', content: '/favicons/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#FFFFFF' }
    ],
    link: [
      // Fonts
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Poppins:400,700,900|Rubik:400,500,600,700,800' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Amiri:400,700,900|Rubik:400,500,600,700,800' },
      // Favicons
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicons/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/favicons/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicons/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicons/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicons/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicons/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicons/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicons/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-icon-180x180.png' },
      { rel: 'apple-touch-icon', sizes: '', href: '/favicons/apple-icon-.png' },
      { rel: 'apple-touch-icon', sizes: '', href: '/favicons/apple-icon-.png' },
      { rel: 'apple-touch-icon', sizes: '', href: '/favicons/apple-icon-.png' },
      { rel: 'icon', type: 'image/png', sizes: '36x36', href: '/favicons/android-icon-36x36.png' },
      { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/favicons/android-icon-48x48.png' },
      { rel: 'icon', type: 'image/png', sizes: '72x72', href: '/favicons/android-icon-72x72.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicons/android-icon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '144x144', href: '/favicons/android-icon-144x144.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicons/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicons/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
      { rel: 'manifest', href: '/favicons/manifest.json' }
    ]
  },
  loading: { color: '#FFFFFF' },
  css: [
    // './assets/scss/animate.scss',
    // './assets/scss/main.scss'
  ],
  plugins: [
    { src: '~/plugins/universal', ssr: true },
    { src: '~/plugins/mixins', ssr: true },
    { src: '~/plugins/front-only', ssr: false }
    // { src: '~/plugins/request', ssr: true }
  ],
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv'
  ],
  // styleResources: {
  //   scss: './assets/scss/variables.scss'
  // },
  router: {
    linkExactActiveClass: 'active'
  },
  axios: {},
  env: {
    MuslimSalatApiUrl: process.env.MUSLIM_SALAT_API_URL,
    AppHostUrl: process.env.APP_HOST_URL
  }
};

// Schemas Creation
keystone.createList('Todo', Todo);
keystone.createList('Author', Author);
keystone.createList('Post', Post);
keystone.createList('PostCategory', PostCategory);

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    // new StaticApp({ path: '/static', src: 'static' }),
    new AdminUIApp(),
    new NuxtApp(NuxtConfig),
  ],
};
