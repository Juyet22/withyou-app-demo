<template>
  <div class="good">

    <div class="good-content"
         v-if="this.goodInfo">
      <div class="good-image">
        <div class="good-image-swiper">
          <div class="good-image-box"
               :style="goodImageStyle">
            <img :src="goodInfo.image">
          </div>
          <div class="good-image-box"
               :style="goodImageStyle">
            <img :src="goodInfo.image">
          </div>
        </div>

        <div class="good-image-arrow left-arrow"
             @click="goodImgChange(1)">
          <i class="el-icon-arrow-left"></i>
        </div>
        <div class="good-image-arrow right-arrow"
             @click="goodImgChange(-1)">
          <i class="el-icon-arrow-right"></i>
        </div>

      </div>

      <div class="good-info">
        <div class="good-dscrp">
          <h2 class="good-dscrp-title">

          </h2>
          <p>

          </p>
          <p>
            <span>¥xxx</span>
          </p>

        </div>

        <div class="good-detail">
          <ul class="good-detail-tab">
            <li>商品介绍</li>
            <li>规格参数</li>
            <li>售后规范</li>
          </ul>

        </div>

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
      goodInfo: null,
      goodImageStyle: {
        'transform': `translateX()`
      },
      goodImageIndex: 0
    }
  },
  components: {

  },
  methods: {
    goodImgChange (n) {
      this.goodImageIndex += n;
      if (this.goodImageIndex < -1) this.goodImageIndex = -1;
      if (this.goodImageIndex > 0) this.goodImageIndex = 0;
      this.goodImageStyle['transform'] = `translateX(${this.goodImageIndex * 100}%)`
    }
  },
  computed: {

  },
  mounted () {
    this.$store.dispatch('GET_HEADERTYPE', {
      headerType: 'HeaderTitle',
      headerShow: true
    })
  },
  created () {
    this.goodInfo = this.$store.getters.GetGoodInfo(this.gId)

  },
  beforeCreate () {

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
  font-size: 30px;

  &-content {
    width: 100%;

    .good-image {
      min-height: 500px;
      position: relative;
      border-bottom: 1px grey solid;

      &-swiper {
        width: 100%;
        overflow: auto;
        display: flex;

        .good-image-box {
          width: 100%;
          flex-shrink: 0;
          transition: linear 0.25s;
        }
      }

      &-arrow {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 80px;
        display: flex;
        align-items: center;

        i {
          font-size: 80px;
          background: #bdbabaf3;
          border-radius: 50%;
          transition: 0.4s;

          &:hover {
            background: #7a7676d0;
          }
        }
      }
      .left-arrow {
        left: 5px;
      }
      .right-arrow {
        right: 5px;
      }
    }

    .good-info {
      text-align: center;
    }
  }
}
</style>
