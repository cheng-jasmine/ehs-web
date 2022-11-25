// 下拉选择器的多选功能
<template>
  <div class="multipleSelector">
    <span>{{ label }}：</span>
    <el-select
      v-model="value"
      placeholder="请选择"
      @change="handleChange"
      clearable
      multiple 
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
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
  },
  data() {
    return {
      value: [],
    };
  },
  methods: {
    handleChange(value) {
      this.$emit("multipleChange", value);
    },
  },
};
</script>

<style scoped lang="less">
.multipleSelector {
  width: 100%;
  display: flex;
  align-items: center;
  .el-select {
    flex: 1;
  }
}
</style>