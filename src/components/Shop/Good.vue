<template>
  <div class="good">

    <div class="good-content"
         v-if="goodInfo">
      <div class="good-image">
        <div class="good-image-swiper">
          <div class="good-image-box"
               v-for="(image,index) in goodInfo.imageList"
               :key="index"
               :style="goodImageStyle">
            <img :src="image">
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
          <h3 class="good-dscrp-title">
            {{goodInfo.name}}
          </h3>
          <p class="good-dscrp-saleword">
            {{goodInfo.saleWord}}
          </p>
          <p class="good-dscrp-saleinfo">
            <span class="good-dscrp-price">¥{{goodInfo.price}}</span>
            <span class="good-dscrp-saleway">{{goodInfo.saleWay}}</span>
          </p>

        </div>

        <div class="good-delivery">
          <div class="good-delivery-area">
            <span>配送地区</span>
            <span class="good-delivery-area-text">{{goodInfo.delivery.area}}</span>
          </div>
        </div>

        <div class="good-chosen">
          <div class="good-chosen-info">
            <span>已选信息</span>
            <span class="good-chosen-info-text">
              {{goodInfo.color}} {{goodInfo.memory}}+{{goodInfo.storage}} 1个

            </span>
          </div>
        </div>

        <div class="good-detail">
          <ul class="good-detail-tab">
            <li v-for="(nav,index) in goodDetailNav"
                :key="index"
                @click="navTabChange(index)">
              <div class="nav-underline"
                   v-if="index == 0"
                   :style={left:lineMove}></div>
              {{nav}}
            </li>
          </ul>
          <div class="good-detail-content">
            <div v-if="detailTabIndex == 0">
              1
            </div>
            <div v-else-if="detailTabIndex == 1">
              2
            </div>
            <div v-else-if="detailTabIndex == 2">
              3
            </div>
          </div>
        </div>

      </div>

      <div class="good-purchase">
        <button></button>
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
      goodImageIndex: 0,
      goodDetailNav: [
        '商品介绍',
        '规格参数',
        '售后规范',
      ],
      lineMove: 0,
      detailTabIndex: 0,
      orderList: []
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
    },
    navTabChange (index) {
      this.lineMove = index * 100 + '%';
      this.detailTabIndex = index;
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

        &::-webkit-scrollbar {
          display: none;
        }

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
      .good-dscrp {
        display: flex;
        flex-direction: column;
        padding: 20px 18px;

        &-title {
        }

        &-saleword {
          color: #aca5a5;
        }

        &-saleinfo {
          display: flex;
          margin-top: 10px;
          align-items: center;
          line-height: 1.4em;

          .good-dscrp-price {
            color: #e95426;
            font-size: 1.4em;
          }
          .good-dscrp-saleway {
            margin-left: 8px;
          }
        }
      }

      .good-delivery {
        padding: 20px 18px;
        border-bottom: #aca5a5 1px solid;

        &-area {
          color: #aca5a5;
          display: grid;
          grid-template-columns: 25% 75%;
          justify-items: start;

          &-text {
            color: #000000;
          }
        }
      }

      .good-chosen {
        padding: 20px 18px;

        &-info {
          color: #aca5a5;
          display: grid;
          grid-template-columns: 25% 75%;
          justify-items: start;

          &-text {
            color: #000000;
          }
        }
      }

      .good-detail {
        margin-top: 12px;
        border-top: #aca5a5 2px solid;

        &-tab {
          display: flex;
          text-align: center;

          li {
            flex: 1;
            position: relative;
            padding: 20px;

            &:first-child {
              .nav-underline {
                position: absolute;
                content: "";
                top: 0;
                left: 0;
                width: 100%;
                height: 95%;
                border-bottom: 3px solid #4453d4;
                transition: all 0.4s ease;
              }
            }
          }
        }
      }
    }
  }
}
</style>
