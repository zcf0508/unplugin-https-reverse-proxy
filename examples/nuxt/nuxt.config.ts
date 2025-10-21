// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ['~/../../../src/nuxt', {
      enabled: true,
      target: 'test-nuxt.abc.com',
    }],
  ],
})
