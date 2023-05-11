<template>
  <div class="ball-content">
    <div class="ball-input">
      <div class="ball-item-input">
        <p>红球1号</p>
        <span>
          <Input v-model="redValue1" placeholder="" style="width: 80px" />
        </span>
      </div>
      <div class="ball-item-input">
        <p>红球2号</p>
        <span>
          <Input v-model="redValue2" placeholder="" style="width: 80px" />
        </span>
      </div>
      <div class="ball-item-input">
        <p>红球3号</p>
        <span>
          <Input v-model="redValue3" placeholder="" style="width: 80px" />
        </span>
      </div>
      <div class="ball-item-input">
        <p>红球4号</p>
        <span>
          <Input v-model="redValue4" placeholder="" style="width: 80px" />
        </span>
      </div>
      <div class="ball-item-input">
        <p>红球5号</p>
        <span>
          <Input v-model="redValue5" placeholder="" style="width: 80px" />
        </span>
      </div>
      <div class="ball-item-input">
        <p>红球6号</p>
        <span>
          <Input v-model="redValue6" placeholder="" style="width: 80px" />
        </span>
      </div>
      <div class="ball-item-input">
        <p>蓝球</p>
        <span>
          <Input v-model="blueValue" placeholder="" style="width: 80px" />
        </span>
      </div>
      <div class="ball-item-input">
        <p></p>
        <span>
          <Button @click="beginRoll">开始滚动</Button>
        </span>
      </div>
    </div>
    <div class="ball-number-content">
      <div class="ball-number">
        <div class="red-number style-number">
          {{ redNumber }}
        </div>
      </div>
      <div class="blue-number style-number">
        {{ blueNumber }}
      </div>
    </div>
    <div class="ball-number-content">
      <div v-for="(item, index) in redResult" :key="index" class="ball-number">
        <div class="red-number style-number">{{ item }}</div>
      </div>
      <div v-for="(item, index) in blueResult" :key="index" class="ball-number">
        <div class="blue-number style-number">{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      redNumber: "", //红色
      redResult: [], //红色结果
      redBall: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
      ],
      // --------------------------------------------------------------------
      blueNumber: "", //蓝色
      blueResult: [], //蓝色色结果
      blueBall: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      // -------------------------------------------------------------------
      timer: null,
      timers: null,
      // ------------------------------------------------------------------
      time: 0,
      redValue1: "",
      redValue2: "",
      redValue3: "",
      redValue4: "",
      redValue5: "",
      redValue6: "",
      blueValue: "",
    };
  },
  created() {},
  methods: {
    // 开始滚动
    beginRoll() {
      let value =
        Number(this.redValue1) +
        Number(this.redValue2) +
        Number(this.redValue3) +
        Number(this.redValue4) +
        Number(this.redValue5) +
        Number(this.redValue6) +
        Number(this.blueValue);
      let redTime = 0; //红色时间
      let blueBall = 0; //蓝色时间
      this.redBall.map((item) => {
        redTime = redTime + item;
      });
      this.blueBall.map((item) => {
        blueBall = blueBall + item;
      });
      this.time = redTime + blueBall + Number(value);
      this.timer = setInterval(() => {
        this.redNumber = Math.floor(Math.random() * this.redBall.length + 1);
      }, 0);
      if (this.redResult.length <= 5) {
        setTimeout(() => {
          this.finishRoll();
        }, this.time);
      } else {
        this.finishRoll();
      }
    },
    // 结束滚动
    finishRoll() {
      if (this.redResult.length <= 5) {
        this.redResult.push(this.redNumber);
        this.redResult.sort((a, b) => {
          return a - b;
        });
        this.redResult = this.redResult.filter((item, index) => {
          return this.redResult.indexOf(item) === index;
        });
        this.setClearInterval();
        setTimeout(() => {
          this.beginRoll();
        }, this.time);
      } else {
        this.setBlue();
      }
    },
    // 删除定时器
    setClearInterval() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    setBlue() {
      this.setClearInterval();
      this.timers = setInterval(() => {
        this.blueNumber = Math.floor(Math.random() * this.blueBall.length + 1);
      }, 0);
      setTimeout(() => {
        this.blueResult.push(this.blueNumber);
        if (this.timers) {
          clearInterval(this.timers);
          this.timers = null;
        }
      }, this.time);
    },
  },
};
</script>

<style lang="less" scoped>
.ball-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .ball-input {
    display: flex;
    .ball-item-input {
      display: flex;
      align-items: center;
      p {
        margin: 0 10px;
      }
    }
  }
}
.ball-number-content {
  display: flex;
  align-items: center;
  margin: 20px;
}

.ball-number {
  display: flex;
  align-items: center;
}
.style-number {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  line-height: 80px;
  font-size: 50px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin: 0 20px;
}
.red-number {
  background: rgba(255, 0, 0, 0.8);
}
.blue-number {
  background: rgba(0, 47, 255, 0.8);
}
</style>