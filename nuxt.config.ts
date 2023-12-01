// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title: "Space Tourism",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        // <link rel="preconnect" href = "https://fonts.googleapis.com" >
        // <link rel="preconnect" href = "https://fonts.gstatic.com" crossorigin >
        // <link href="https://fonts.googleapis.com/css2?family=Barlow&family=Bellefair&display=swap" rel = "stylesheet" >
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com"},
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&family=Bellefair&display=swap" },
      ]
    },
  },
  modules: [
    'nuxt-mdi'
  ],
  css: ['vuetify/lib/styles/main.sass', '@/assets/css/styles.css'],
  build: {
    transpile: ['vuetify'],
  },
  // vite: {
  //   define: {
  //     'process.env.DEBUG': false,
  //   },
  // },
})

