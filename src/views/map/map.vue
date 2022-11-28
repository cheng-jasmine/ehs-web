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
      <div class="weather"></div>
    </div>
    <div class="right">
      <el-input
        prefix-icon="el-icon-search"
        v-model="search"
        placeholder="搜索你想要的内容"
      ></el-input>
      <div class="title">预警信息</div>
      <div class="yujing">
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
        <div class="steps">
          <div class="step" v-for="(item, index) in steps" :key="index">
            <div v-if="index !== steps.length - 1" class="line"></div>
            <img
              class="icon"
              v-if="index < step"
              src="@/assets/img/step_over.png"
              alt="step_over"
            />
            <div v-else-if="index == step" class="icon current">
              <div></div>
            </div>
            <div v-else class="icon undone"><div></div></div>
            <span
              :style="{
                color: index == step ? '#fc8452' : '',
              }"
              >{{ item }}</span
            >
          </div>
        </div>
        <div class="person">
          <span style="color: #666">处理人员：</span><span>黄晓明</span>
        </div>
      </div>
    </div>

    <img class="footer" src="@/assets/img/footer_bg.png" alt="footer_bg" />
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
      pieData: [
        { value: 15, name: "氨氮" },
        { value: 100, name: "cod" },
        { value: 20, name: "总磷" },
        { value: 20, name: "总氮" },
      ],
      address: address, // 地图标点
      search: "",

      state: 3,
      step: 3, //当前流程
      steps: [
        "三级预警",
        "短信通知",
        "预警响应任务分配",
        "任务接收",
        "现场处理",
        "上传报告",
        "处理完成",
      ],
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
      //加载天气查询插件
    },
    // 添加标记点
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
        <div class="infoContent" onclick="WindowClose()">
          <div class="title">
            XXX排口
          </div>
          <ul class="info">
            <li>cod：100</li>
            <li>氨氮：15</li>
            <li>总磷：20 </li>
            <li>总氮：20</li>
          </ul>
        </div>`;
      this.drawInfo(content, marker, this.map);
    },

    drawInfo(contents, Marker, map) {
      let infoWindow = new AMap.InfoWindow({
        //创建信息窗体
        isCustom: true, //使用自定窗体
        content: contents, //信息窗体的内容可以是任意html片段
        offset: new AMap.Pixel(130, 200),
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
          right: "3%",
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
          right: "12%",
          top: "22%",
          itemWidth: 8,
          itemHeight: 8,
          textStyle: {
            color: "#fff", // 图例文字颜色
            fontSize: 14,
          },
          // itemGap设置各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔
          itemGap: 25,

          formatter: (name) => {
            let target;
            for (let i = 0; i < this.pieData.length; i++) {
              if (this.pieData[i].name === name) {
                target = this.pieData[i].value;
              }
            }
            let arr = [" " + name + "：" + target];
            return arr.join(" ");
          },
        },
        color: ["#43AAD8", "#C457AD", "#7F5EDC", "#D24B4B"],
        graphic: {
          type: "text",
          left: "19%",
          top: "48%",
          style: {
            text: "数据统计",
            textAlign: "center",
            fill: "#fff",
            fontSize: 14,
          },
        },
        series: [
          {
            // name: "数据统计",
            type: "pie",
            radius: ["65%", "70%"],
            center: ["25%", "50%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 5,
              borderColor: "transparent",
              borderWidth: 6,
            },
            // 自定义中心内容的话需要把这个关闭
            emphasis: {
              label: {
                show: false,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            label: {
              show: false,
              position: "center",
            },
            labelLine: {
              show: false,
            },
            data: this.pieData,
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
  border-radius: 6px;
  background: fade(#000, 33);
  width: 162px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  .title {
    width: 100%;
    height: 34px;
    line-height: 34px;
    background-image: url("@/assets/img/paikou_bg.png");
    background-position: 100%;
    background-repeat: no-repeat;
    text-align: center;
  }
  .info {
    width: 98%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #e65656;
    box-sizing: border-box;
    li {
      height: 26px;
      line-height: 26px;
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
  .weather {
    height: 50px;
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
  .title {
    border-top: 1px solid #3385ff;
    padding: 0 20px;
    font-size: 14px;
    text-align: center;
    color: #bed8ff;
    font-weight: bold;
    height: 50px;
    line-height: 50px;
    text-shadow: 0px 3px 16px #3385ff;
  }
  .yujing {
    color: #fff;
    font-size: 14px;
    padding: 0 20px;
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
    .steps {
      .step {
        display: flex;
        align-items: center;
        line-height: 26px;
        position: relative;
        .line {
          position: absolute;
          left: 6px;
          top: 21px;
          width: 5px;
          height: 14px;
          border-left: 1px solid #666666;
        }
        .icon {
          margin-right: 10px;
          width: 13px;
          height: 13px;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .current {
          border: 1px solid #fc8452;
          border-radius: 50%;
          background-color: #fff;
          > div {
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: #fc8452;
          }
        }
        .undone {
          border: 1px solid #999999;
          border-radius: 50%;
          background-color: #fff;
          > div {
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: #999999;
          }
        }
      }
    }
    .person {
      height: 40px;
      line-height: 40px;
    }
  }
}
.footer {
  width: 100vw;
  position: absolute;
  bottom: 0;
  z-index: 7;
  pointer-events: none;
}
</style>