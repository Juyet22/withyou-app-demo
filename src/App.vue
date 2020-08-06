<template>
  <div id="app">
    <router-view @hook:mounted="childmount()">
        <!-- 匹配到的组件都会缓存 -->
    </router-view>
    <Header v-if=""></Header>
    <TabBar></TabBar>
    
  </div>
</template>

<script>

import Header from 'common/Header/Header'
import Banner from "common/Banner/Banner";
import TabBar from "common/NavTab/TabBar"

export default {
  name: 'App',
  components: {
    Header,
    TabBar
  },
  methods: {
    childmount() {
      console.log('ccc');
    }
  },
}
</script>

<style>
#app {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
