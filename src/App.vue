<template>
  <div id="app">
    <div v-if="headerShow"
         :is="headerType"
         :headerNavData="headerNavData"></div>
    <router-view>
      <!-- 匹配到的组件都会缓存 -->
    </router-view>

    <TabBar></TabBar>

  </div>
</template>

<script>

import bus from 'components/bus/bus'
import HeaderSearch from 'common/Header/HeaderSearch'
import HeaderTitle from 'common/Header/HeaderTitle'
import Banner from "common/Banner/Banner";
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
      headerType: '',
      headerShow: this.$store.state.headerShow
    }
  },
  methods: {
    childMount () {

    }
  },
  created () {
    bus.$on("headNavTransfer", (val) => {
      // console.log(val);
      this.headerNavData = val.navData;
      this.headerType = val.type;
    })
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
