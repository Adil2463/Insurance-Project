
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts'],
  googleFonts:{
    families:{
      Inter: [100,200,300,400,500,600,700,800,900]
    },
    display: "swap",
    preload: true
  },
  css: ['../assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
