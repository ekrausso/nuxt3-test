// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
      '@nuxtjs/tailwindcss',
      ["nuxt-ssr-lit", { litElementPrefix: ["eclipsoft-",] }]
    ]
})
