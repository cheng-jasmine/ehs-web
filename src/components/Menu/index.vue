<template>
  <el-menu
    :default-active="active"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    @select="menuSelected"
  >
    <sideItem
      v-for="item in menuList"
      :key="item.value"
      :Item="item"
      :active="active"
    ></sideItem>
  </el-menu>
</template>

<script>
import sideItem from "./sideItem.vue";
export default {
  components: {
    sideItem,
  },
  props: {
    menuList: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      active: "",
    };
  },
  created() {
    this.active = this.$route.path;
  },
  watch: {
    $route(val, old) {
      this.active = val.path;
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },

    menuSelected(e) {
      // console.log(e);
      this.$emit("menuChange", e);
    },
  },
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 262px;
  /* min-height: 100vh; */
  height: inherit;
  overflow-y: auto;
}
</style>