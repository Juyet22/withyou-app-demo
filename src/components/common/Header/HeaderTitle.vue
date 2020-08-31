<template>
  <div class="header">
    <div class="header-title">
      {{this.$route.meta.title}}
    </div>

    <div class="header-back"
         @click="routerBack">
      <i class="el-icon-arrow-left"></i>
      <span>返回</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderTitle",
  data () {
    return {

    }
  },
  components: {

  },
  methods: {
    routerBack () {
      this.$router.go(-1)
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  min-height: 8vh;
  color: #ffffff;
  display: flex;
  align-items: center;
  background: #3f79cf;
  justify-content: center;
  position: relative;

  &-title {
    font-size: 38px;
  }

  &-back {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    font-size: 30px;
    padding: 0 10px;
  }
}
</style>
