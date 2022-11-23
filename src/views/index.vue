<template>
  <div class="wrapper">
    <div id="container"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: null,
    };
  },
  create() {},
  mounted() {
    this.createMap();
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
        icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
        position: position,
        offset: new AMap.Pixel(-10, -10),
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
        offset: new AMap.Pixel(120, 180),
      });
      let onMarkerClick = function (e) {
        infoWindow.open(map, e.target.getPosition()); //打开信息窗体
        //e.target就是被点击的Marker
      };
      Marker.on("click", onMarkerClick); //绑定click事
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
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
}
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
    // span {
    //   position: absolute;
    //   top: 2px;
    //   right: 10px;
    //   font-family: "微软雅黑";
    //   color: #556473;
    // }
  }
  .info {
    font-size: 12px;
    li {
      line-height: 20px;
    }
  }
}
</style>