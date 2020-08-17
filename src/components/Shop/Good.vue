<template>
  <div class="good">
    <div class="good-image">

    </div>

  </div>
</template>

<script>
import bus from 'components/bus/bus'
export default {
  name: "Good",
  props: {
    gid: String || Number
  },
  data () {
    return {
      headerData: {
        type: 'HeaderTitle',
        title: '商品详情',
        navData: [

        ]
      }
    }
  },
  components: {

  },
  methods: {

  },
  computed: {

  },
  mounted () {
    bus.$emit("headNavTransfer", this.headerData)
  },
}
</script>

<style lang="scss" scoped>
.good {
  display: flex;
}
</style>
