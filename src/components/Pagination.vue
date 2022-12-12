<template>
  <div class="pagination">
    <div class="left">
      <span>共{{ total }}条记录</span>
      <span>第{{ current }}/{{ pageCount }}页</span>
    </div>
    <div class="right">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :current-page="current"
        @current-change="handlePageChange"
        :page-size="pageSize"
      >
      </el-pagination>
      <div class="ipt">
        <span>跳至</span>
        <el-input v-model="toPage" @change="fromToPage"></el-input
        ><span>页</span>
      </div>
      共{{ pageCount }}页
    </div>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      //总条数
      type: Number,
      default: 0,
    },
    current: {
      //当前页码
      type: Number,
      default: 1,
    },
    pageSize: {
      // 每页条数
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      toPage: "",
    };
  },
  computed: {
    // 计算总页数
    pageCount() {
      return Math.ceil(this.total / this.pageSize);
    },
  },
  methods: {
    handlePageChange(page) {
      this.$emit("pageChange", +page);
    },
    fromToPage() {
      // console.log(this.toPage);
      if (
        +this.toPage !== this.current &&
        +this.toPage <= this.pageCount &&
        +this.toPage >= 1
      ) {
        this.handlePageChange(this.toPage);
        this.toPage = "";
      }
    },
  },
};
</script>

<style scoped lang="less">
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  color: #989393;
  position: absolute;
  bottom: 10px;
  left: 20px;
  right: 20px;
}
.left {
  :nth-child(1) {
    margin-right: 10px;
  }
}
.right {
  display: flex;
  align-items: center;
  .ipt {
    display: flex;
    align-items: center;
    margin: 0 10px;
    .el-input {
      width: 70px;
      margin: 0 6px;
    }
    /deep/.el-input__inner {
      height: 30px;
      line-height: 30px;
    }
  }
}
</style>