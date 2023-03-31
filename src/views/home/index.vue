<template>
  <div>
    <div ref="echarts" id="echarts"></div>
    <div class="style-class"></div>
  </div>
</template>

<script>
import storage from "store";
export default {
  data() {
    return {
      option: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      },
    };
  },
  created() {
    storage.set("111", "111111111111");
    console.log(storage.get("111"));
    this.getData();
    this.getEcharts()
  },
  methods: {
    getData() {
      let params = {};
      this.$api.user.login(params).then((res) => {
        console.log(res);
      });
    },
    getEcharts() {
      this.$nextTick(() => {
        let echarts = this.$echarts.init(this.$refs.echarts);
        echarts.setOption(this.option, true);
      });
    },
  },
};
</script>

<style lang="less" scoped>
#echarts {
  width: 1000px;
  height: 650px;
}
</style>