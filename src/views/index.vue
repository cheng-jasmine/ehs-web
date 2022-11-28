<template>
  <div class="index">
    <!-- <Page :total="total" :current="page" @pageChange="pageChange"></Page> -->
    <!-- <RadioSelector
      :options="radioOptions"
      @radioChange="radioChange"
      style="width: 400px"
    /> -->
    <!-- <multipleSelector
      :options="multipleOptions"
      @multipleChange="multipleChange"
      style="width: 400px"
    /> -->
    <!-- <cascader @updateLunar="updateLunar" style="width: 350px; padding: 20px" /> -->

    <Menu :menuList="menuList" style="width: 300px" />
  </div>
</template>

<script>
import Page from "@/components/pagination.vue";
import RadioSelector from "@/components/radioSelector.vue";
import multipleSelector from "@/components/multipleSelector.vue";
import cascader from "@/components/calendar.vue";
import Menu from "@/components/Menu/index.vue";

import Year from "@/assets/img/environment/nian.png";
import Month from "@/assets/img/environment/yue.png";
import ji from "@/assets/img/environment/ji.png";
import week from "@/assets/img/environment/zhou.png";
export default {
  components: {
    Page,
    RadioSelector,
    multipleSelector,
    cascader,
    Menu,
  },
  data() {
    return {
      page: 1,
      total: 481,
      radioOptions: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "yizhi",
              label: "一致",
            },
            {
              value: "fankui",
              label: "反馈",
            },
            {
              value: "xiaolv",
              label: "效率",
            },
            {
              value: "kekong",
              label: "可控",
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
        {
          value: "zujian",
          label: "组件",
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components",
            },
            {
              value: "sketch",
              label: "Sketch Templates",
            },
            {
              value: "jiaohu",
              label: "组件交互文档",
            },
          ],
        },
      ],
      multipleOptions: [
        {
          value: "yizhi",
          label: "一致",
        },
        {
          value: "fankui",
          label: "反馈",
        },
        {
          value: "xiaolv",
          label: "效率",
        },
        {
          value: "kekong",
          label: "可控",
        },
        {
          value: "daohang",
          label: "导航",
        },
      ],
      menuList: [
        {
          name: "文件柜",
          value: "1",
          imgs: [
            require("@/assets/img/environment/icon_1_blue.png"),
            require("@/assets/img/environment/icon_1.png"),
          ],
          tags: [Year],
        },
        {
          name: "环境元素",
          value: "2",
          imgs: [
            require("@/assets/img/environment/icon_2_blue.png"),
            require("@/assets/img/environment/icon_2.png"),
          ],
          tags: [Year],
        },
        {
          name: "风险机遇措施",
          value: "3",
          imgs: [
            require("@/assets/img/environment/icon_3_blue.png"),
            require("@/assets/img/environment/icon_3.png"),
          ],
          tags: [Year],
        },
        {
          name: "法律法规",
          value: "4",
          imgs: [
            require("@/assets/img/environment/icon_4_blue.png"),
            require("@/assets/img/environment/icon_4.png"),
          ],
          tags: [Year],
          children: [
            {
              name: "法律法规清单",
              value: "4-1",
            },
            {
              name: "合规性评价",
              value: "4-2",
            },
          ],
        },
        {
          name: "建设项目环保管理",
          value: "5",
          imgs: [
            require("@/assets/img/environment/icon_5_blue.png"),
            require("@/assets/img/environment/icon_5.png"),
          ],
          tags: [Year],
        },
        {
          name: "设施设备",
          value: "6",
          imgs: [
            require("@/assets/img/environment/icon_6_blue.png"),
            require("@/assets/img/environment/icon_6.png"),
          ],
          tags: [Year, Month],
        },
        {
          name: "在线监测",
          value: "7",
          imgs: [
            require("@/assets/img/environment/icon_7_blue.png"),
            require("@/assets/img/environment/icon_7.png"),
          ],
          tags: [week],
        },
        {
          name: "排口管理",
          value: "8",
          imgs: [
            require("@/assets/img/environment/icon_8_blue.png"),
            require("@/assets/img/environment/icon_8.png"),
          ],
          tags: [Month],
        },
        {
          name: "环境应急预案",
          value: "9",
          imgs: [
            require("@/assets/img/environment/icon_9_blue.png"),
            require("@/assets/img/environment/icon_9.png"),
          ],
          tags: [Year],
        },
        {
          name: "目标指标",
          value: "10",
          imgs: [
            require("@/assets/img/environment/icon_10_blue.png"),
            require("@/assets/img/environment/icon_10.png"),
          ],
          tags: [Month],
        },
        {
          name: "重点工作",
          value: "11",
          imgs: [
            require("@/assets/img/environment/icon_11_blue.png"),
            require("@/assets/img/environment/icon_11.png"),
          ],
          tags: [ji],
        },
        {
          name: "环保投入",
          value: "12",
          imgs: [
            require("@/assets/img/environment/icon_12_blue.png"),
            require("@/assets/img/environment/icon_12.png"),
          ],
          tags: [Month],
        },
        {
          name: "环保培训 ",
          value: "13",
          imgs: [
            require("@/assets/img/environment/icon_13_blue.png"),
            require("@/assets/img/environment/icon_13.png"),
          ],
          tags: [Year],
        },
        {
          name: "问题整改",
          value: "14",
          imgs: [
            require("@/assets/img/environment/icon_14_blue.png"),
            require("@/assets/img/environment/icon_14.png"),
          ],
          tags: [Month],
        },
        {
          name: "综合台账",
          value: "15",
          imgs: [
            require("@/assets/img/environment/icon_15_blue.png"),
            require("@/assets/img/environment/icon_15.png"),
          ],
          tags: [ji],
        },
        {
          name: "政府盯办",
          value: "16",
          imgs: [
            require("@/assets/img/environment/icon_16_blue.png"),
            require("@/assets/img/environment/icon_16.png"),
          ],
          tags: [ji],
        },
      ],
    };
  },
  methods: {
    pageChange(val) {
      console.log(val);
      this.page = val;
    },
    radioChange(val) {
      console.log(val);
    },
    multipleChange(val) {
      console.log(val);
    },
    updateLunar(val) {
      console.log(val);
    },
  },
};
</script>

<style>
</style>