<template>
  <div class="tab-bar">
    <tab-bar-item path="/home" tabActiveColor="blue">
        <img slot="item-icon" src="@/static/image/qe-icon.jpg" alt="">
        <img slot="item-icon-active" src="" alt="">
        <p slot="item-title">首页</p>
    </tab-bar-item>
    <tab-bar-item path="/shop">
        <img slot="item-icon" src="@/static/image/qe-icon.jpg" alt="">
        <img slot="item-icon-active" src="@/static/image/qe-icon.jpg" alt="">
        <p slot="item-title">商城</p>
    </tab-bar-item>
    <tab-bar-item path="/home" tabActiveColor="pink">
        <img slot="item-icon" src="~static/image/qe-icon.jpg" alt="">
        <img slot="item-icon-active" src="~static/image/qe-icon.jpg" alt="">
        <p slot="item-title">权益</p>
    </tab-bar-item>
    <tab-bar-item>
        <img slot="item-icon" src="~static/image/qe-icon.jpg" alt="">
        <img slot="item-icon-active" src="~static/image/qe-icon.jpg" alt="">
        <p slot="item-title">权益</p>
    </tab-bar-item>
    <tab-bar-item>
        <img slot="item-icon" src="~static/image/qe-icon.jpg" alt="">
        <img slot="item-icon-active" src="~static/image/qe-icon.jpg" alt="">
        <p slot="item-title">权益</p>
    </tab-bar-item>
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
      z-index: 90;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
    }
</style>
