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
      headerShow: this.$store.state.headerShow,
      headerType: this.$store.state.headerType
    }
  },
  methods: {
    childMount () {

    }
  },
  beforeCreate () {

    bus.$on("headNavTransfer", (val) => {
      // console.log(val);
      this.headerNavData = val.navData;
    })
    this.$store.dispatch('GET_headerType', {
      headerType: 'HeaderSearch',
      headerShow: true
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
