<template>
  <div class="wrapper">
    <!-- 地图及遮罩层 -->
    <div id="container">
      <img class="mask" src="@/assets/img/mask.png" alt="mask" />
    </div>
    <!-- 头部图片 -->
    <img class="header" src="@/assets/img/head_bg.png" alt="head_bg" />
    <div class="left">
      <div class="back">
        <img src="@/assets/img/arrow_left.png" alt="" />
        <span>返回</span>
      </div>
      <div class="select">
        <span>位置选择</span>
        <el-select v-model="position" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="title">XXX排口折线图</div>
      <div id="line"></div>
      <div class="title">XXX排口饼状图</div>
      <div id="pie"></div>
    </div>
    <div class="right">
      <el-input
        prefix-icon="el-icon-search"
        v-model="search"
        placeholder="搜索你想要的内容"
      ></el-input>
      <div class="yujing">
        <div class="title">预警信息</div>
        <div class="content">
          <div class="text">
            <span
              class="state"
              :style="{
                color: state == 3 ? '#E65656' : '',
              }"
              >【三级预警】</span
            >
            2022-08-01 xx区域xxx排口废水COD超标
            <span>+18.5%</span>
            监测值达到
            <span>118.5(100)</span>
            ，预警信息已发送至黄晓明、赵薇。
          </div>
          <div class="tip">任务流：监测预警</div>
          <div class="step"></div>
        </div>
      </div>
    </div>
    <img class="footer" src="@/assets/img/footer_bg.png" alt="" />
  </div>
</template>

<script>
import address from "@/assets/img/address.png";
export default {
  data() {
    return {
      map: null,
      options: [
        {
          value: 0,
          label: "全部",
        },
      ],
      position: 0,
      address: address,
      search: "",

      state: 3,
    };
  },
  create() {},
  mounted() {
    this.createMap();
    this.$nextTick(() => {
      this.createLine();
      this.createPie();
    });
  },
  methods: {
    createMap() {
      let satellite = new AMap.TileLayer.Satellite({
        zIndex: 3,
        opacity: 0.3,
      });
      let loads = new AMap.TileLayer.RoadNet({ opacity: 0 });
      this.map = new AMap.Map("container", {
        center: [104.080236, 30.628323],
        layers: [satellite, loads],
        zoom: 15,
        mapStyle: "amap://styles/grey",
      });
      this.addMarker([104.080236, 30.628323]);
      // var clickHandler = (e) => {
      //   console.log(
      //     "您在[ " +
      //       e.lnglat.getLng() +
      //       "," +
      //       e.lnglat.getLat() +
      //       " ]的位置点击了地图！"
      //   );
      //   console.log(this.map.getZoom());
      // };
      // // 绑定事件
      // this.map.on("click", clickHandler);
    },
    addMarker(position) {
      const marker = new AMap.Marker({
        icon: this.address,
        position: position,
        offset: new AMap.Pixel(-60, -60),
        zoom: 13,
      });
      this.map.add(marker);

      window.WindowClose = () => {
        this.map.clearInfoWindow();
      };
      const content = `
        <div class="infoContent">
          <div>
            <span>XXX排口</span>
            <span id="close" onclick="WindowClose()">x</span>
          </div>
          <ul class="info">
            <li>cod: XXX</li>
            <li>cod: XXX</li>
            <li>cod: XXX</li>
            <li>cod: XXX</li>
          </ul>
        </div>`;
      this.drawInfo(content, marker, this.map);
    },

    drawInfo(contents, Marker, map) {
      let infoWindow = new AMap.InfoWindow({
        //创建信息窗体
        isCustom: true, //使用自定窗体
        content: contents, //信息窗体的内容可以是任意html片段
        offset: new AMap.Pixel(200, 220),
      });
      let onMarkerClick = function (e) {
        infoWindow.open(map, e.target.getPosition()); //打开信息窗体
        //e.target就是被点击的Marker
      };
      Marker.on("click", onMarkerClick); //绑定click事
    },

    createLine() {
      const temp = this.$echarts.init(document.getElementById("line"));
      temp.setOption({
        tooltip: {
          trigger: "axis",
        },
        grid: {
          left: "0%",
          right: "0%",
          bottom: "20%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false, // 不留白，从原点开始
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
          axisLabel: {
            interval: 0,
            // 设置X轴上的字体样式
            textStyle: {
              color: "#fff",
              fontSize: 12,
            },
          },
          splitLine: {
            //分割线配置
            show: true,
            lineStyle: {
              color: "#1E3F64",
            },
          },
          axisLine: {
            //x轴线的颜色以及宽度
            show: true,
            lineStyle: {
              color: "#fff",
              width: 1,
              type: "solid",
            },
          },
        },
        yAxis: {
          type: "value",
          name: "(单位：排放量/月)",
          nameGap: 40, // 表现为上下位置
          axisLabel: {
            // 设置Y轴上的字体样式
            textStyle: {
              color: "#fff",
              fontSize: 12,
            },
          },
          nameTextStyle: {
            //y轴上方单位的颜色
            color: "#999999",
            fontSize: 14,
            padding: [0, 0, 0, 35],
          },
          splitLine: {
            //分割线配置
            show: false,
          },
          axisLine: {
            //y轴线的颜色以及宽度
            show: true,
            lineStyle: {
              color: "#fff",
              width: 1,
              type: "solid",
            },
          },
        },
        series: [
          {
            data: [
              820, 932, 901, 934, 1290, 1330, 1320, 158, 356, 405, 509, 610,
            ],
            type: "line",
            symbol: "none",
            areaStyle: {
              normal: {
                // 设置折线图颜色渐变
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 1, color: "transparent" },
                  { offset: 0, color: "#4385E3" },
                ]),
              },
            },
            lineStyle: {
              width: 1,
              color: "#4385E3",
            },
          },
        ],
      });
      window.addEventListener("resize", () => {
        temp.resize();
      });
    },
    createPie() {
      const pie = this.$echarts.init(document.getElementById("pie"));
      const dataCake = [
        { value: 15, name: "氨氮" },
        { value: 100, name: "cod" },
        { value: 20, name: "总磷" },
        { value: 20, name: "总氮" },
      ];
      pie.setOption({
        tooltip: {
          trigger: "item",
        },
        title: {
          text: "(单位：排放量/月)",
          // x 设置水平安放位置，默认左对齐，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
          x: "left",
          // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
          y: "top",
          // backgroundColor: "#EEE",
          // 主标题文本样式设置
          textStyle: {
            fontSize: 14,
            // fontWeight: "bolder",
            color: "#999999",
          },
        },
        legend: {
          orient: "vertical",
          right: "9%",
          top: "18%",
          itemWidth: 12,
          itemHeight: 12,
          textStyle: {
            color: "#fff", // 图例文字颜色
            fontSize: 14,
          },
          // itemGap设置各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔
          itemGap: 30,
          data: ["氨氮", "cod", "总磷", "总氮"],
          formatter: function (name) {
            let target;
            for (let i = 0; i < dataCake.length; i++) {
              if (dataCake[i].name === name) {
                target = dataCake[i].value;
              }
            }
            let arr = [" " + name + "：" + target];
            return arr.join(" ");
          },
        },
        color: ["#43AAD8", "#C457AD", "#7F5EDC", "#D24B4B"],
        series: [
          {
            // name: "数据统计",
            type: "pie",
            radius: ["55%", "65%"],
            center: ["25%", "50%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 2,
              borderColor: "transparent",
              borderWidth: 16,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: false,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: dataCake,
          },
        ],
      });
      window.addEventListener("resize", () => {
        pie.resize();
      });
    },
  },
};
</script>

<style lang="less">
.wrapper {
  height: 100vh;
  position: relative;
}
#container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
    pointer-events: none;
    width: 100%;
    height: 100vh;
  }
}

// 信息窗体的样式
.infoContent {
  color: #fff;
  border: 1px solid #000;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.5);
  width: 180px;
  // height: 200px;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 2px 6px 0 rgba(114, 124, 245, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 14px;
  > div {
    height: 30px;
    display: flex;
    justify-content: space-between;
    #close {
      color: #556473;
      cursor: pointer;
    }
  }
  .info {
    font-size: 12px;
    li {
      line-height: 20px;
    }
  }
}
</style>
<style scoped lang="less">
.header {
  width: 100vw;
  position: absolute;
  top: 0;
  z-index: 6;
}
.left {
  position: absolute;
  top: 9vh;
  left: 0;
  z-index: 7;
  width: 433px;
  height: calc(100vh - 9vh);
  padding-left: 43px;
  color: #fff;
  font-size: 14px;
  .back {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 600;
    :nth-child(1) {
      margin-right: 10px;
    }
  }
  .select {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    .el-select {
      flex: 1;
      margin-left: 10px;
      /deep/.el-input__inner {
        background-color: #000000;
        color: #fff;
        border: 1px solid #3385ff;
        height: 36px;
        line-height: 36px;
      }
    }
  }
  .title {
    width: 100%;
    height: 39px;
    line-height: 39px;
    background-image: url("@/assets/img/title_bg.png");
    background-size: contain;
    text-align: center;
    color: #bed8ff;
    font-weight: bold;
  }
  #line {
    width: 100%;
    height: 36vh;
  }
  #pie {
    width: 100%;
    height: 24vh;
  }
}
.right {
  position: absolute;
  top: 14vh;
  right: 0;
  z-index: 7;
  width: 390px;
  height: calc(100vh - 14vh);
  background: fade(#000, 33);
  .el-input {
    border: 1px solid #3385ff;
    margin-bottom: 30px;
    /deep/.el-input__inner {
      background-color: #000000;
      color: #fff;
      border: 1px solid transparent;
      height: 36px;
      line-height: 36px;
    }
  }
  .yujing {
    border-top: 1px solid #3385ff;
    color: #fff;
    font-size: 14px;
    padding: 0 20px;
    .title {
      text-align: center;
      color: #bed8ff;
      font-weight: bold;
      height: 50px;
      line-height: 50px;
      text-shadow: 0px 3px 16px #3385ff;
    }
    .text {
      line-height: 24px;
      span {
        color: #e65656;
      }
    }

    .tip {
      color: #bed8ff;
      font-weight: bold;
      height: 50px;
      line-height: 50px;
      text-shadow: 0px 3px 16px #3385ff;
    }
  }
}
.footer {
  width: 100vw;
  position: absolute;
  bottom: 0;
  z-index: 8;
}
</style>