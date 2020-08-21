<template>
  <div class="good">

    <div class="good-content"
         v-if="this.goodInfo">
      <div class="good-image">
        <img :src="goodInfo.image"
             alt="">
      </div>

      <div class="good-info">

        {{goodInfo.saleWords}}
      </div>

      <div class="good-purchase">

      </div>
    </div>

    <div v-else>
      nono
    </div>

  </div>
</template>

<script>
import bus from 'components/bus/bus'
export default {
  name: "Good",
  props: {
  },
  data () {
    return {
      gId: this.$route.query.gId,
      headerData: {
        type: 'HeaderTitle',
        title: '商品详情',
        navData: [

        ]
      },
      goodInfo: null
    }
  },
  components: {

  },
  methods: {

  },
  computed: {

  },
  created () {

    this.goodInfo = this.$store.getters.GetGoodInfo(this.gId)
  },
}
</script>

<style lang="scss" scoped>
.good {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  place-items: center;

  &-image {
    min-width: 80%;
    margin-top: 50px;
  }

  &-info {
  }
}
</style>
