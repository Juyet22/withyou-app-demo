<template>
  <div class="banner">
    <div class="swiper">
      <div class="swiper-wrap">
        <banner-item v-for="banner in bannerData"
                     :path="banner.link"
                     :key="banner.id"
                     class="swiper-wrap-item">
          <img slot="banner-item-img"
               :src="banner.img"
               alt="">

        </banner-item>

      </div>
      <div class="swiper-arrow">

      </div>
      <div class="swiper-pagination">
        <ul class="swiper-pagination-points">
          <li v-for="n in bannerData.length"
              :key='n'></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BannerItem from './BannerItem'
import Swiper from './swiper'
export default {
  name: "Banner",
  props: {
    bannerData: Array
  },
  data () {
    return {
      swiper: '',


    }
  },
  components: {
    BannerItem
  },
  methods: {

  },
  mounted () {
    let _this = this;
    const newSwiper = new Swiper('.swiper');
    _this.swiper = newSwiper
    newSwiper.setTransform();
    newSwiper.setPagPoints();
    newSwiper.swiperStart();

    newSwiper.swiper.addEventListener('touchstart', newSwiper.touchStartHandle)
    newSwiper.swiper.addEventListener('touchmove', newSwiper.touchMoveHandle)
    newSwiper.swiper.addEventListener('touchend', newSwiper.touchEndHandle)
  },
  beforeDestroy () {
    clearInterval(this.swiper.timer);
  },
}
</script>

<style lang="scss" scoped>
$imgWidth: 750px;
$imgHeight: 310px;

.banner {
  width: 100%;
  margin: 10px auto;
}
.swiper {
  width: $imgWidth;
  height: $imgHeight;
  position: relative;
  border: 1px solid blue;
  overflow: hidden;
  margin: 0 auto;

  img {
    width: 100%;
    pointer-events: none;
  }

  &-wrap {
    position: relative;
    z-index: 1;
    width: $imgWidth;
    height: $imgHeight;

    &-item {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      -webkit-transform: translateX(300%);
      transform: translateX(300%);
    }
  }

  &-pagination {
    position: absolute;
    left: 50%;
    bottom: 5px;
    transform: translateX(-50%);

    &-points {
      display: flex;

      li {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 1px solid grey;
        margin: 0 2px;

        &.active {
          background: blue;
        }
      }
    }
  }
}
</style>
