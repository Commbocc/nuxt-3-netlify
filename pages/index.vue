<script setup lang="ts">
// const { data, refresh, pending } = await useAsyncData("github", () =>
//   $fetch("https://api.github.com/orgs/commbocc/repos"),
// );

// const { stack } = useContentstack();
const { $contentstack } = useNuxtApp();

const { data, refresh, pending } = await useAsyncData("home", () =>
  $contentstack
    .ContentType("home")
    .Entry("bltcfcb6510d07cfc20")
    .toJSON()
    .fetch(),
);
</script>

<template>
  <details open>
    <pre>{{ data }}</pre>
  </details>
</template>
