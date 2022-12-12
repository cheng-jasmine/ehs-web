<template>
  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <template slot="empty">
      <img src="@/assets/img/no_file.png" alt="" />
      <div style="font-size: 20px; font-weight: bold; color: #333333">
        没有找到你要的内容
      </div>
      <div style="font-size: 14px; color: #999">你可以换一个词重新搜索</div>
    </template>

    <el-table-column type="selection" width="55"> </el-table-column>
    <el-table-column v-for="(it, i) in headerList" :key="i" :label="it.name">
      <template slot-scope="scope">{{ scope.row[it.prop] }}</template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    headerList: {
      type: Array,
      require: true,
    },
    tableData: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      multipleSelection: [],
    };
  },
  methods: {
    // toggleSelection(rows) {
    //   if (rows) {
    //     rows.forEach((row) => {
    //       this.$refs.multipleTable.toggleRowSelection(row);
    //     });
    //   } else {
    //     this.$refs.multipleTable.clearSelection();
    //   }
    // },
    handleSelectionChange(val) {
      console.log(val);
      this.multipleSelection = val;
    },
  },
};
</script>

<style scoped lang="less">
.el-table {
  height: 100%;
}
/deep/.el-table__body-wrapper {
  height: 88%;
}
/deep/.el-table__empty-text {
  line-height: 30px;
}
</style>