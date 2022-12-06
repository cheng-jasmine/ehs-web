// 级联选择器
<template>
  <div class="cascader">
    <span>{{ label }}：</span>
    <el-cascader
      :options="options"
      :props="{ multiple: multiple }"
      clearable
      @change="handleChange"
    ></el-cascader>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "管理场景",
    },
    // 级联选择器的数据
    options: {
      type: Array,
      require: true,
    },
    // 是否可多选
    multiple: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    handleChange(value) {
      this.$emit("cascaderChange", value);
    },
  },
};
</script>

<style scoped lang="less">
.cascader {
  width: 100%;
  display: flex;
  align-items: center;
  .el-cascader {
    flex: 1;
  }
}
</style>