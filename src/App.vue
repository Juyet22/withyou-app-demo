<template>
  <div id="app">
    
    <router-view>
        <!-- 匹配到的组件都会缓存 -->
    </router-view>
  </div>
</template>

<script>
import Banner from "common/Banner/Banner";
// import NavTab from "common/NavTab/TabBar"

export default {
  name: 'App',
  components: {
    Banner
  }
}
</script>

<style>
#app {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
