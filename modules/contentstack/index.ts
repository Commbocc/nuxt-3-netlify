import pkg from "contentstack";
import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit";
const { Region } = pkg;

interface ModuleOptions {
  api_key: string;
  delivery_token: string;
  environment: string;
  region?: typeof Region;
}

export default defineNuxtModule<ModuleOptions>({
  setup(options, nuxt) {
    // Create resolver to resolve relative paths
    const { resolve } = createResolver(import.meta.url);

    // nuxt.options.build.transpile.push(runtimeDir)
    nuxt.options.runtimeConfig.public["$contentstack"] = { ...options };

    addPlugin(resolve("./plugin"), {
      // append: true,
    });
  },
});
