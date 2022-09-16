import pkg from "contentstack";

const { Stack, Region } = pkg;

export default defineNuxtPlugin((nuxtApp) => {
  const options = useRuntimeConfig().public.$contentstack;
  const { api_key, delivery_token, environment } = options;

  return {
    provide: {
      contentstack: new Stack({
        api_key,
        delivery_token,
        environment,
        region: Region.US,
      }),
    },
  };
});
