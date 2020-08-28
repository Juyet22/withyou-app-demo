<template>
  <div id="app">
    <div v-if="this.$store.state.headerShow"
         :is="this.$store.state.headerType"
         :headerNavData="headerNavData"></div>
    <router-view>
      <!-- 匹配到的组件都会缓存 -->
    </router-view>

    <TabBar></TabBar>
    <div style="margin-top: 80px;"></div>
  </div>
</template>

<script>

import bus from 'components/bus/bus'
import HeaderSearch from 'common/Header/HeaderSearch'
import HeaderTitle from 'common/Header/HeaderTitle'
import TabBar from "common/NavTab/TabBar"

export default {
  name: 'App',
  components: {
    HeaderSearch,
    HeaderTitle,
    TabBar
  },
  data () {
    return {
      headerNavData: [],
    }
  },
  methods: {
    childMount () {

    }
  },
  mounted () {

  },
  beforeCreate () {

    bus.$on("headNavTransfer", (val) => {
      // console.log(val);
      this.headerNavData = val.navData;
    })

  },
}
</script>

<style>
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
