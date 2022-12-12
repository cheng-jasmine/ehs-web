<template>
  <div class="head">
    <div class="left" @click="goback">
      <img src="@/assets/img/back.png" alt="" />
      <span>{{ header }}</span>
    </div>
    <div class="right">
      <el-input
        v-model="search"
        prefix-icon="el-icon-search"
        placeholder="搜索文件名或关键词"
      ></el-input>
      <div class="button">搜索</div>
      <el-badge :value="news" class="item">
        <img class="news" src="@/assets/img/news.png" alt="" />
      </el-badge>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      search: "",
      news: 1,
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.head {
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.08);
  margin-bottom: 2px;
  box-sizing: border-box;
}
.left {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  cursor: pointer;
  img {
    width: 16px;
    height: 16px;
    margin-right: 10px;
  }
}
.right {
  display: flex;
  align-items: center;
  .button {
    width: 78px;
    background: #4385e3;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
  }
  .button:hover {
    opacity: 0.9;
  }
  .el-input {
    width: 282px;
  }
  /deep/.el-input__inner {
    border-radius: 0;
    height: 36px;
    line-height: 36px;
  }
  .news {
    width: 24px;
    height: 24px;
    margin-left: 28px;
    cursor: pointer;
  }
}
</style>