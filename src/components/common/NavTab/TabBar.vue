<template>
  <div class="tab-bar">
    <tab-bar-item path="/about" tabActiveColor="blue">
        <img slot="item-icon" src="" alt="">
        <img slot="item-icon-active" src="" alt="">
        <p slot="item-title">关于</p>
    </tab-bar-item>
    <tab-bar-item path="/test">
        <img slot="item-icon" src="~static/image/icon.jpg" alt="">
        <img slot="item-icon-active" src="" alt="">
        <p slot="item-title">测试</p>
    </tab-bar-item>
    <tab-bar-item path="/home" tabActiveColor="pink">
        <img slot="item-icon" src="~static/image/icon.jpg" alt="">
        <img slot="item-icon-active" src="~static/image/icon.jpg" alt="">
        <p slot="item-title">首页</p>
    </tab-bar-item>
    <tab-bar-item></tab-bar-item>
    <tab-bar-item></tab-bar-item>
  </div>
</template>

<script>
import TabBarItem from './TabBarItem'
export default {
  name: "TabBar",
  data() {
    return {

    }
  },
  components: {
      TabBarItem
  }
}
</script>

<style lang="scss" scoped>
    .tab-bar {
      display: flex;
      background: #f6f6f6;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
    }
</style>
