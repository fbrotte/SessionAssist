// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    title: 'Session Assist',
    head: {
        meta: [
          { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ],
    },
    css: [
    '~/assets/css/main.scss'
    ],
    modules: [
      '@pinia/nuxt',
    ]
})
