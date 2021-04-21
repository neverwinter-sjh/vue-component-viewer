<template>
  <div>
    <h2>Data fetched using fetch method (not from server)</h2>
    <p v-if="$fetchState.pending">
      <span class="loading"></span>
    </p>
    <p v-else-if="$fetchState.error">Error while fetching mountains 🤬</p>
    <ul v-else>
      <li v-for="mountain in mountains" :key="mountain.title">
        <!-- <NuxtLink :to="{ name: 'mountains-slug', params: { slug: mountain.slug } }"> -->
        {{ mountain.title }}
        <!-- </NuxtLink> -->
      </li>
    </ul>
    <button @click="$fetch">Refresh Data</button>
  </div>
</template>
<script>
export default {
  async fetch() {
    const res = await this.$axios.get('https://api.nuxtjs.dev/mountains');
    this.mountains = res.data;
  },
  data() {
    return {
      mountains: []
    };
  },
  activated() {
    // if (this.$fetchState.timestamp <= Date.now() - 30000) {
    this.$fetch();
    // }
  },
  fetchOnServer: false
};
</script>
<style scoped>
li {
  margin-bottom: 0.5rem;
}
li:first-letter {
  text-transform: uppercase;
}
</style>
