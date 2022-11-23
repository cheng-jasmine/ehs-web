<template>
  <div id="app">
    <Page :total="total" :current="page" @pageChange="pageChange"></Page>
    <router-view></router-view>
  </div>
</template>

<script>
import Page from "./components/Pagination.vue";
export default {
  name: "App",
  components: {
    Page,
  },
  data() {
    return {
      page: 1,
      total: 481,
    };
  },
  methods: {
    pageChange(val) {
      this.page = val;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
</style>
