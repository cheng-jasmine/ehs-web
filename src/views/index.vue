<template>
  <div class="index">
    <!-- <Page :total="total" :current="page" @pageChange="pageChange"></Page> -->

    <!-- <Selector
      label="文件类别"
      :options="options2"
      @selectChange="selectChange"
      style="width: 400px"
    /> -->
    <!-- <Cascader
      :options="casOptions2"
      style="width: 400px"
      @cascaderChange="cascaderChange"
    /> -->

    <!-- <calendar @updateLunar="updateLunar" style="width: 350px; padding: 20px" /> -->

    <Menu :menuList="menuList2" style="width: 300px" />
  </div>
</template>

<script>
import Page from "@/components/pagination.vue";
import Selector from "@/components/selector.vue";
import calendar from "@/components/calendar.vue";
import Menu from "@/components/Menu/index.vue";
import Cascader from "@/components/cascader.vue";

import Year from "@/assets/img/environment/nian.png";
import Month from "@/assets/img/environment/yue.png";
import ji from "@/assets/img/environment/ji.png";
import week from "@/assets/img/environment/zhou.png";
export default {
  components: {
    Page,
    Selector, // 下拉选择器
    calendar, // 日期
    Menu,
    Cascader, //级联选择器
  },
  data() {
    return {
      page: 1,
      total: 481,
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
      casOptions1: [
        {
          value: "0",
          label: "水环境",
        },
        {
          value: "1",
          label: "大气",
        },
        {
          value: "2",
          label: "固废",
        },
        {
          value: "3",
          label: "固废",
        },
        {
          value: "4",
          label: "光污染",
        },
      ],
      casOptions2: [
        {
          value: "0",
          label: "全部",
        },
        {
          value: "1",
          label: "行政部",
          children: [
            {
              value: "1-1",
              label: "张",
            },
            {
              value: "1-2",
              label: "黄",
            },
            {
              value: "1-3",
              label: "李",
            },
          ],
        },
        {
          value: "2",
          label: "研发部",
          children: [
            {
              value: "2-1",
              label: "张",
            },
            {
              value: "2-2",
              label: "黄",
            },
            {
              value: "2-3",
              label: "李",
            },
          ],
        },
      ],
      // 环保数据库
      menuList1: [
        {
          name: "文件柜",
          value: "1",
          imgs: [
            require("@/assets/img/icon_1_blue.png"),
            require("@/assets/img/icon_1.png"),
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
      // 工业固废管理
      menuList2: [
        {
          name: "文件柜",
          value: "1",
          imgs: [
            require("@/assets/img/icon_1_blue.png"),
            require("@/assets/img/icon_1.png"),
          ],
        },
        {
          name: "厂内转运管理",
          value: "2",
          imgs: [
            require("@/assets/img/icon/icon2_blue.png"),
            require("@/assets/img/icon/icon2.png"),
          ],
        },
        {
          name: "化验管理",
          value: "3",
          imgs: [
            require("@/assets/img/icon/icon3_blue.png"),
            require("@/assets/img/icon/icon3.png"),
          ],
        },
        {
          name: "视频监控",
          value: "4",
          imgs: [
            require("@/assets/img/icon/icon4_blue.png"),
            require("@/assets/img/icon/icon4.png"),
          ],
        },
        {
          name: "数据统计",
          value: "5",
          imgs: [
            require("@/assets/img/icon/icon5_blue.png"),
            require("@/assets/img/icon/icon5.png"),
          ],
        },
        {
          name: "智能报表",
          value: "6",
          imgs: [
            require("@/assets/img/icon/icon6_blue.png"),
            require("@/assets/img/icon/icon6.png"),
          ],
        },
        {
          name: "知识库",
          value: "7",
          imgs: [
            require("@/assets/img/icon/icon7_blue.png"),
            require("@/assets/img/icon/icon7.png"),
          ],
        },
        {
          name: "相关链接",
          value: "8",
          imgs: [
            require("@/assets/img/icon/icon8_blue.png"),
            require("@/assets/img/icon/icon8.png"),
          ],
        },
      ],
      // 水环境管理 大气环境管理
      menuList3: [
        {
          name: "文件柜",
          value: "1",
          imgs: [
            require("@/assets/img/icon_1_blue.png"),
            require("@/assets/img/icon_1.png"),
          ],
        },
        {
          name: "监测及预警",
          value: "2",
          imgs: [
            require("@/assets/img/icon/icon-2_blue.png"),
            require("@/assets/img/icon/icon-2.png"),
          ],
        },
        {
          name: "手工监测",
          value: "3",
          imgs: [
            require("@/assets/img/icon/icon-3_blue.png"),
            require("@/assets/img/icon/icon3.png"),
          ],
        },
        {
          name: "巡检巡查",
          value: "4",
          imgs: [
            require("@/assets/img/icon/icon-4_blue.png"),
            require("@/assets/img/icon/icon4.png"),
          ],
        },
        {
          name: "数据统计",
          value: "5",
          imgs: [
            require("@/assets/img/icon/icon5_blue.png"),
            require("@/assets/img/icon/icon5.png"),
          ],
        },
        {
          name: "智能报表",
          value: "6",
          imgs: [
            require("@/assets/img/icon/icon6_blue.png"),
            require("@/assets/img/icon/icon6.png"),
          ],
        },
        {
          name: "知识库",
          value: "7",
          imgs: [
            require("@/assets/img/icon/icon7_blue.png"),
            require("@/assets/img/icon/icon7.png"),
          ],
        },
        {
          name: "相关链接",
          value: "8",
          imgs: [
            require("@/assets/img/icon/icon8_blue.png"),
            require("@/assets/img/icon/icon8.png"),
          ],
        },
      ],
    };
  },
  methods: {
    pageChange(val) {
      console.log(val);
      this.page = val;
    },

    selectChange(val) {
      console.log(val);
    },
    updateLunar(val) {
      console.log(val);
    },
    cascaderChange(val) {
      console.log(val);
    },
  },
};
</script>

<style>
.el-cascader-menu {
  width: 300px;
}
</style>