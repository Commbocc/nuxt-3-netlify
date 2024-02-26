// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    storage: {
      rawGraphql: {
        driver: "fs",
        base: "server/plugins/graphql/raw",
      },
      graphql: {
        driver: "fs",
        base: ".cache/graphql",
      },
    },
  },
});
