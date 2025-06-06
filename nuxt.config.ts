export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
  ],
  css: [
    '~/assets/css/main.css'
  ],
  devtools: { enabled: true },
  ssr: true
});