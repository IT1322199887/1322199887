<template>
  <div>
    <div ref="echarts" id="echarts"></div>
  </div>
</template>

<script>
import country from "../../utils/country";
export default {
  data() {
    return {
      countrys: [],
    };
  },
  created() {
    let datas = [];
    for (let key in country) {
      let keys = Object.keys(country[key]);
      let values = Object.values(country[key]);
      keys.map((item, index) => {
        let obj = {
          keys: keys[index],
          values: values[index],
          icons: `../../assets/flags/${keys[index]}.gif`,
          // ----------------------------------------------
          name: values[index],
          value: keys[index],
          selected: true,
          emphasis: {
            itemStyle: {
              areaColor: "red",
            },
          },
        };
        datas.push(JSON.parse(JSON.stringify(obj)));
      });
      key !== country[key] && datas;
    }
  },
  mounted() {
    this.getEcharts();
  },
  methods: {
    getEcharts() {
      this.$nextTick(() => {
        let option = {
          series: [
            {
              type: "map",
              map: "world",
              itemStyle: {
                borderColor: "black",
                borderWidth: 1,
                borderJoin: "round",
                color: "grey",
              },
              emphasis: {
                label: {
                  show: false,
                },
                itemStyle: {
                  areaColor: "yellow",
                },
              },
              data: this.countrys,
            },
          ],
        };
        let echarts = this.$echarts.init(this.$refs.echarts);
        echarts.setOption(option, true);
      });
    },
  },
};
</script>

<style lang="less" scoped>
#echarts {
  width: 100%;
  height: 900px;
}
</style>