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
      active: "1",
    };
  },
  created() {
    this.active = this.menuList[0].value;
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

    menuSelected(e) {
      console.log(e);
      this.active = e;
    },
  },
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  /* width: 200px; */
  min-height: 100vh;
}
</style>