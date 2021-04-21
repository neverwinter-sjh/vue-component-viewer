<template>
  <div>
    <h1>Zipkin Test</h1>
    <p v-if="$fetchState.pending">
      <span class="loading"></span>
    </p>
    <p v-else-if="$fetchState.error">Error while fetching jsonplaceholder 🤬</p>
    <template v-else>
      <p v-for="(todo, idx) in todos" :key="idx" style="border-bottom: 1px solid red">
        {{ todo.title }}
      </p>
    </template>
    <br />
    <button @click="$fetch">Refresh Data</button>
  </div>
</template>
<script>
export default {
  async fetch() {
    const _this = this;
    this.$axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        console.group('Zipkin test');
        _this.todos = [];
        for (let i = 0; i < res.data.length; i++) {
          if (i < 5) _this.todos.push(res.data[i]);
        }
        console.groupEnd();
      })
      .catch(err => {
        console.group('Zipkin error');
        console.log(err);
        console.groupEnd();
      });
  },
  data() {
    return {
      todos: []
    };
  },
  watch: {
    todos() {
      console.log(this.todos);
    }
  },
  activated() {
    // if (this.$fetchState.timestamp <= Date.now() - 30000) {
    this.$fetch();
    // }
  },
  fetchOnServer: false
};
</script>
