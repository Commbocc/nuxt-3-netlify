<script setup lang="ts">
const { data } = await useFetch("/api/graphql");
</script>

<template>
  <h1>Home</h1>

  <pre>{{ data }}</pre>
</template>
