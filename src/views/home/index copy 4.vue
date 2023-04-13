<template>
  <div>
    <!-- <h1>双色球</h1> -->
    <div>
      <span v-for="(ball, index) in redBalls" :key="index">{{ ball }} </span>
      <span v-if="blueBall">{{ blueBall }}</span>
    </div>
    <button @click="start">开始滚动</button>
    <!-- <h2>历史中奖号码</h2> -->
    <ul>
      <li v-for="(history, index) in histories" :key="index">
        {{ history.join(" ") }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      redBalls: [],
      blueBall: null,
      histories: [],
    };
  },
  created() {},
  methods: {
    start() {
      let self = this;
      self.redBalls = [];
      self.blueBall = null;
      rollRedBall();
      function rollRedBall() {
        let rolledNumber;
        // 每次随机一个1到33之间的数字，直到这个数字没有在已滚出的红球号码中出现过
        do {
          rolledNumber = Math.floor(Math.random() * 33) + 1;
        } while (self.redBalls.includes(rolledNumber));
        // 将这个数字加入已滚出的红球号码中
        self.redBalls.push(rolledNumber);
        // 如果已经滚动了6次，就进行排序，并将蓝球号码加入结果中
        if (self.redBalls.length === 6) {
          self.redBalls.sort((a, b) => a - b);
          self.blueBall = Math.floor(Math.random() * 16) + 1;
          console.log(`中奖号码：${self.redBalls.join(" ")} ${self.blueBall}`);
          // 将中奖号码保存到历史记录中
          self.histories.push([...self.redBalls, self.blueBall]);
        }
        // 如果还没有滚动6次，就每隔1分钟再滚动一次红球
        else {
          setTimeout(rollRedBall, 3000);
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
</style>