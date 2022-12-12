// 下拉选择器的单/多选功能
<template>
  <div class="selector">
    <span>{{ label }}</span>
    <el-select
      v-model="value"
      placeholder="请选择"
      @change="handleChange"
      clearable
      :multiple="multiple"
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
      default: "场景类别",
    },
    // 级联选择器的数据
    options: {
      type: Array,
      require: true,
    },
    // 是否可多选
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      value: "0",
    };
  },
  methods: {
    handleChange(value) {
      this.$emit("selectChange", value);
    },
  },
};
</script>

<style scoped lang="less">
.selector {
  // width: 100%;
  display: flex;
  align-items: center;
  color: #666666;
  font-size: 14px;
  .el-select {
    // flex: 1;
    width: 320px;
  }
  > span {
    margin-right: 11px;
  }
}
/deep/.el-input__inner {
  height: 36px;
  line-height: 36px;
}
</style>