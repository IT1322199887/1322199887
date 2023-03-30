<template>
  <div></div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      let params = {};
      this.$api.user.login(params).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>