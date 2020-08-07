<template>
  <div id="app">
    <Header :headerNavData="headerNavData"></Header>
    <router-view @hook:mounted="childMount()">
        <!-- 匹配到的组件都会缓存 -->
    </router-view>
    <TabBar></TabBar>
    
  </div>
</template>

<script>

import bus from 'components/bus/bus'
import Header from 'common/Header/Header'
import Banner from "common/Banner/Banner";
import TabBar from "common/NavTab/TabBar"

export default {
  name: 'App',
  components: {
    Header,
    TabBar
  },
  data() {
    return {
      headerNavData: []
    }
  },
  methods: {
    childMount() {
      bus.$on("headNavTransfer",(val) => {
        console.log(val);
        this.headerNavData = val;
      })
    }
  },
  created() {
    
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
