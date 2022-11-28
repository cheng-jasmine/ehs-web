<template>
  <div>
    <el-submenu
      v-if="Item.children && Item.children.length"
      :index="Item.value"
    >
      <template slot="title">
        <img v-if="Item.imgs" class="icon_img" :src="Item.imgs[1]" alt="icon" />
        <span
          >{{ Item.name }}
          <template v-if="Item.tags">
            <img v-for="e in Item.tags" :key="e" class="tag" :src="e" alt="" />
          </template>
        </span>
      </template>
      <sideItem
        v-for="it in Item.children"
        :key="it.value"
        :Item="it"
      ></sideItem>
    </el-submenu>

    <el-menu-item v-else :index="Item.value">
      <img
        v-if="Item.imgs"
        class="icon_img"
        :src="active == Item.value ? Item.imgs[0] : Item.imgs[1]"
        alt="icon"
      />
      <span slot="title"
        >{{ Item.name }}
        <template v-if="Item.tags">
          <img v-for="e in Item.tags" :key="e" class="tag" :src="e" alt="tag" />
        </template>
      </span>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: "sideItem",
  props: {
    Item: {
      type: Object,
      require: true,
    },
    // 默认选中的菜单栏
    active: {
      type: String,
      default: "1",
    },
  },
};
</script>

<style scoped lang="less">
.el-menu-item,
/deep/.el-submenu__title {
  height: 50px;
  line-height: 50px;
  color: #333;
  span {
    margin-left: 12px;
    .tag {
      width: 16px;
      height: 18px;
      margin-left: 6px;
      margin-bottom: 6px;
    }
    :nth-child(1) {
      margin-left: 12px;
    }
  }
}
.el-menu-item.is-active {
  color: #4385e3;
  background-color: #eaf3ff;
}

.icon_img {
  width: 16px;
  height: 16px;
}
</style>