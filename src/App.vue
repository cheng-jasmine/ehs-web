<template>
  <div id="app">
    <!-- <Page :total="total" :current="page" @pageChange="pageChange"></Page> -->
    <!-- <RadioSelector :options="radioOptions" @radioChange="radioChange" style="width:400px"/> -->
    <!-- <multipleSelector
      :options="multipleOptions"
      @multipleChange="multipleChange"
      style="width: 400px"
    /> -->
    <!-- <cascader @updateLunar="updateLunar" style="width: 350px;padding:20px"/> -->

    <router-view></router-view>
  </div>
</template>

<script>
import Page from "./components/pagination.vue";
import RadioSelector from "./components/radioSelector.vue";
import multipleSelector from "./components/multipleSelector.vue";
import cascader from "./components/calendar.vue"
export default {
  name: "App",
  components: {
    Page,
    RadioSelector,
    multipleSelector,
    cascader
  },
  data() {
    return {
      page: 1,
      total: 481,
      radioOptions: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "yizhi",
              label: "一致",
            },
            {
              value: "fankui",
              label: "反馈",
            },
            {
              value: "xiaolv",
              label: "效率",
            },
            {
              value: "kekong",
              label: "可控",
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
        {
          value: "zujian",
          label: "组件",
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components",
            },
            {
              value: "sketch",
              label: "Sketch Templates",
            },
            {
              value: "jiaohu",
              label: "组件交互文档",
            },
          ],
        },
      ],
      multipleOptions: [
        {
          value: "yizhi",
          label: "一致",
        },
        {
          value: "fankui",
          label: "反馈",
        },
        {
          value: "xiaolv",
          label: "效率",
        },
        {
          value: "kekong",
          label: "可控",
        },
        {
          value: "daohang",
          label: "导航",
        },
      ],
    };
  },
  methods: {
    pageChange(val) {
      this.page = val;
    },
    radioChange(val) {
      console.log(val);
    },
    multipleChange(val) {
      console.log(val);
    },
    updateLunar(val){
      console.log(val)
    }
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
