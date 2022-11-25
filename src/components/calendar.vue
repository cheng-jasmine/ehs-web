<template>
  <div class="main">
    <!-- <div class="choose_year">
      <div class="icon" @click="chooseYears(-1)"><i class="el-icon-d-arrow-left"></i></div>
      <div class="icon" @click="chooseMonth(-1)"><i class="el-icon-arrow-left"></i></div>
      <div class="date">{{year}}.{{month.toString().padStart(2, '0')}}</div>
      <div class="icon" @click="chooseMonth(1)"><i class="el-icon-arrow-right"></i></div>
      <div class="icon" @click="chooseYears(1)"><i class="el-icon-d-arrow-right"></i></div>
    </div> -->

    <div class="choose_month">
      <div class="date">{{ year }}年{{ month.toString().padStart(2, "0") }}月</div>
      <div class="arrow">
        <div class="icon" @click="chooseMonth(-1)">
          <i class="el-icon-arrow-up"></i>
        </div>
        <div class="icon" @click="chooseMonth(1)">
          <i class="el-icon-arrow-down"></i>
        </div>
      </div>
    </div>
    <div class="days_area">
      <div class="week" v-for="week in weeks" :key="week">{{ week }}</div>
      <div
        class="day"
        @click="chooseThisDay(day)"
        v-for="(day, index) in days"
        :key="index"
        :class="day.gregorian === today ? 'choose_day' : ''"
      >
        <p>{{ day.gregorian }}</p>
        <span>{{ day.IDayCn }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import calendar from "@/utils/calendar";
export default {
  data() {
    return {
      year: 0,
      month: 0,
      today: 0,
      days: [],
      weeks: ["一", "二", "三", "四", "五", "六", "日"],
    };
  },
  mounted() {
    const now = new Date();
    this.year = now.getFullYear();
    this.month = now.getMonth() + 1;
    this.today = now.getDate();
    this.getDays();
  },
  methods: {
    getDays() {
      // 获取当前月份所有公历日期及其农历日期
      this.days = [];
      const day = new Date();
      day.setFullYear(this.year, this.month - 1, 1); // 此处较之前调整，获取当月第一天
      const month = new Date();
      month.setFullYear(this.year, this.month, 0); // 此处较之前调整，获取当月
      for (let i = 1; i < day.getDay(); i++) {
        // 当月第一天距离所在周周一的空白占位
        this.days.push({
          gregorian: "",
          IDayCn: "",
          IMonthCn: "",
          lDay: "",
          lMonth: "",
        });
      }
      for (let i = 1; i <= month.getDate(); i++) {
        // 获取当月天数填充日历
        let lunarCalendar = calendar.solar2lunar(this.year, this.month, i);
        this.days.push({
          //这里我只拿了我要的几个数据,你可以根据自己需要处理 ,lunarCalendar 数据很全
          gregorian: i,
          IDayCn: lunarCalendar.IDayCn, //初几等
          IMonthCn: lunarCalendar.IMonthCn, //正月等
          lDay: lunarCalendar.lDay, //农历日号
          lMonth: lunarCalendar.lMonth, //农历月号
        });
      }
    },
    dateTransition(month, day) {
      month = month >= 10 ? month : "0" + month;
      day = day >= 10 ? day : "0" + day;
      return [month, day].join("");
    },
    chooseYears(state) {
      // 改变年份
      this.year += state;
      this.today = 1;
      this.getDays();
    },
    chooseMonth(state) {
      // 改变月份
      this.month += state;
      this.today = 1;
      if (this.month < 1) {
        this.month = 12;
        this.chooseYears(-1);
      } else if (this.month > 12) {
        this.month = 1;
        this.chooseYears(1);
      } else {
        this.getDays();
      }
    },
    //这里是我要的数据处理, 你用的时候可以根据自己需要做更改
    chooseThisDay(days) {
      console.log(days)
      // 选择某天
      if (days.gregorian > 0) {
        this.today = days.gregorian;
      }
      let arr = this.dateTransition(days.lMonth, days.lDay);
      let { IDayCn, IMonthCn } = days;
      let data = {
        IDayCn,
        IMonthCn,
        year: this.year,
        arr,
      };
      //把 处理好的数据 抛给父组件(即调用此组件的父组件)
      this.$emit("updateLunar", data);
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  font-size: 14px;
  .choose_year {
    display: flex;
    .icon {
      width: 10%;
      height: 8vh;
      line-height: 8vh;
      text-align: center;
    }
    .date {
      width: 60%;
      text-align: center;
      height: 8vh;
      line-height: 8vh;
      font-size: 1.2rem;
    }
  }
  .days_area {
    display: flex;
    flex-wrap: wrap;
    color: #333333;
    .day {
      width: 14.28%;
      text-align: center;
      padding: 4px 0;
      cursor: pointer;
      border: 5px solid #fff;
      box-sizing: border-box;
    }
    .week {
      width: 14.28%;
      text-align: center;
      text-align: center;
      padding: 8px 0;
    }
    .choose_day {
      background-color: #4385e3;
      color: #fff;
    }
  }

  .choose_month {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #666666;
    height: 40px;
    font-size: 16px;
    .arrow{
      display: flex;
      align-items: center;
      .icon{
        width: 18px;
        height: 18px;
        margin-right: 16px;
        cursor: pointer;
      }
    }
  }
}
</style>

