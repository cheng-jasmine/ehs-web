// 级联选择器的单选功能
<template>
  <div class="cascader">
    <span>{{ label }}：</span>
    <el-cascader
      :show-all-levels="false"
      clearable
      v-model="value"
      :options="options"
      @change="handleChange"
    ></el-cascader>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "场景类别",
    },
    // 级联选择器的数据
    options: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      value: [],
    };
  },
  methods: {
    handleChange(value) {
      this.$emit("radioChange", value);
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