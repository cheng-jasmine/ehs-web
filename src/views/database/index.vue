<template>
  <div class="database">
    <Head header="环保数据库" />
    <div class="container">
      <Menu :menuList="menuList" @menuChange="menuChange" />
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "@/components/Head/index.vue";
import Menu from "@/components/Menu/index.vue";

import Year from "@/assets/img/environment/nian.png";
import Month from "@/assets/img/environment/yue.png";
import ji from "@/assets/img/environment/ji.png";
import week from "@/assets/img/environment/zhou.png";
export default {
  components: {
    Head,
    Menu,
  },
  data() {
    return {
      // 环保数据库
      menuList: [
        {
          name: "文件柜",
          value: "/database/file",
          imgs: [
            require("@/assets/img/icon_1_blue.png"),
            require("@/assets/img/icon_1.png"),
          ],
          tags: [Year],
        },
        {
          name: "环境元素",
          value: "/database/2",
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
    menuChange(val) {
      // console.log(val, this.$route);
      if (val !== this.$route.path) {
        this.$router.push(val);
      }
    },
  },
};
</script>

<style scoped lang="less">
.container {
  height: calc(100vh - 52px);
  display: flex;
}
.content {
  background-color: #f8f8f8;
  width: calc(100% - 262px);
  padding-left: 21px;
}
</style>