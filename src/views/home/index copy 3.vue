<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      redBalls: [],
    };
  },
  created() {
    this.rollRedBall();
  },
  methods: {
    rollRedBall() {
      let redBalls = this.redBalls;
      let rolledNumber;
      // 每次随机一个1到33之间的数字，直到这个数字没有在已滚出的红球号码中出现过
      do {
        rolledNumber = Math.floor(Math.random() * 33) + 1;
      } while (redBalls.includes(rolledNumber));
      // 将这个数字加入已滚出的红球号码中
      redBalls.push(rolledNumber);
      // 如果已经滚动了6次，就进行排序，并将蓝球号码加入结果中
      if (redBalls.length === 6) {
        redBalls.sort((a, b) => a - b);
        let blueBall = Math.floor(Math.random() * 16) + 1;
        redBalls.push(blueBall);
        // TODO: 保存中奖号码
      }
      // 如果还没有滚动6次，就每隔1分钟再滚动一次红球
      else {
        setTimeout(this.rollRedBall, 1000);
      }
      console.log(redBalls)
    },
  },
};
</script>

<style lang="less" scoped>
</style>