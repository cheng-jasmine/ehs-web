<template>
  <div class="file">
    <div class="row">
      <div class="screen">
        <Selector
          :options="options1"
          @selectChange="selectChange1"
          style="margin-right: 30px"
        />
        <Selector
          label="文件类别"
          :options="options2"
          @selectChange="selectChange2"
        />
      </div>
      <div class="btns">
        <div class="btn btn1">
          <img src="@/assets/img/delete.png" alt="" />
          <span>批量删除</span>
        </div>
        <div class="btn btn2">
          <img src="@/assets/img/upload.png" alt="" />
          <span>上传文件</span>
        </div>
        <div class="btn btn3">
          <img src="@/assets/img/set.png" alt="" />
          <span>管理类别</span>
        </div>
      </div>
    </div>
    <div class="tablelist">
      <SelectTable :headerList="headerList" :tableData="tableData" />
      <Page
        v-if="tableData.length"
        :total="total"
        :current="page"
        @pageChange="pageChange"
      ></Page>
    </div>
  </div>
</template>

<script>
import Selector from "@/components/selector";
import SelectTable from "@/components/table/selectTable.vue";
import Page from "@/components/pagination.vue";
export default {
  components: {
    Selector,
    SelectTable,
    Page,
  },
  data() {
    return {
      page: 1,
      total: 50,
      options1: [
        {
          value: "0",
          label: "全部",
        },
        {
          value: "1",
          label: "水环境",
        },
        {
          value: "2",
          label: "大气",
        },
        {
          value: "3",
          label: "固废",
        },
      ],
      options2: [
        {
          value: "0",
          label: "全部",
        },
        {
          value: "1",
          label: "治炼厂环评文件",
        },
        {
          value: "2",
          label: "治炼厂排污许可文件",
        },
        {
          value: "3",
          label: "工程项目文件",
        },
      ],

      headerList: [
        {
          name: "文件名称",
          prop: "date",
        },
        {
          name: "上传部门",
          prop: "name",
        },
        {
          name: "上传人员",
          prop: "address",
        },
        {
          name: "关键词",
          prop: "date",
        },
        {
          name: "更新日期",
          prop: "name",
        },
        {
          name: "管理场景",
          prop: "address",
        },
        {
          name: "操作",
          prop: "",
        },
      ],
      tableData: [
        // {
        //   date: "2016-05-06",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1518 弄",
        // },
        // {
        //   date: "2016-05-07",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1518 弄",
        // },
      ],
    };
  },
  methods: {
    selectChange1(val) {
      console.log(val);
    },
    selectChange2(val) {
      console.log(val);
    },
    pageChange(val) {
      console.log(val);
      this.page = val;
    },
  },
};
</script>

<style scoped lang="less">
.file {
  height: 100%;
  position: relative;
  .row {
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .screen {
    display: flex;
  }
}
.btns {
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 14px;
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 112px;
    height: 36px;
    box-sizing: border-box;
    cursor: pointer;
    margin-right: 20px;

    img {
      width: 16px;
      height: 16px;
      margin-right: 4px;
    }
  }
  .btn:hover {
    opacity: 0.9;
  }
  .btn1 {
    color: #333333;
    background: #fff;
    border: 1px solid #e5e6e6;
  }
  .btn2 {
    background: #13b464;
  }
  .btn3 {
    background: #4385e3;
  }
}
.tablelist {
  height: calc(100% - 76px);
  background: #fff;
}
</style>