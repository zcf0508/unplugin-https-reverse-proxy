// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ['../../src/nuxt', {
      target: 'test.abc.com',
      showCaddyLog: true,
    }],
  ],
})
