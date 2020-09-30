<template>

  <div class="goods-gallery normal-box">
    <div class="goods-gallery-title">
      <p>
        {{galleryData.title}}
      </p>
    </div>
    <div class="goods-gallery-header">
      <ul class="goods-gallery-nav">

        <li v-for="(nav,index) in galleryData.navData"
            :key="nav.typeId"
            class="goods-gallery-nav-item"
            :class="{'goods-gallery-nav-active': navIndex == index}"
            @click="navTabChange(index,nav.goodsType)">
          <div v-if="index == 0"
               class="nav-underline"
               :style={left:lineMove}></div>
          <span>
            {{nav.navTitle}}
          </span>

        </li>
      </ul>

      <div class="goods-gallery-choose">
        <span>筛选</span>
        <i class="el-icon-search"></i>
      </div>
    </div>

    <div class="goods-gallery-content">
      <ul class="goods-gallery-list">
        <router-link class="goods-gallery-list-item"
                     v-for="good in goodsListShow"
                     :key="good.id"
                     :to="{
                       name: 'good',
                       query:{gId: good.goodId}
                      }"
                     tag="li">
          <div class="goods-box">
            <div class="goods-box-image">
              <img :src="good.image"
                   alt="">
            </div>

            <div class="goods-box-dscrp">
              <p class="goods-box-dscrp-name hotgood">
                {{good.name}}
              </p>
              <p class="goods-box-dscrp-saleword">
                {{good.saleWord}}
              </p>
            </div>

          </div>
        </router-link>
      </ul>

    </div>

  </div>

</template>

<script>
export default {
  name: "Gallery",
  props: {
    galleryData: Object,
    goodsData: Array
  },
  data () {
    return {
      navIndex: 0,
      lineMove: 0,
      goodsShowType: 'smartphone'
    }
  },
  components: {

  },
  computed: {
    goodsListShow () {
      let goodsShow = this.$store.state.goodsData.filter(item => item.goodsType == this.goodsShowType)

      return goodsShow;
    }
  },
  methods: {
    navTabChange (index, type) {
      this.lineMove = index * 100 + '%';
      this.navIndex = index;
      this.goodsShowType = type;
    }
  },
  mounted () {
  },
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 750px) {
  ::-webkit-scrollbar {
    display: none;
  }
}

.goods-gallery {
  margin-top: 30px;
  overflow: auto;
  min-height: 300px;

  // 标题
  &-title {
    font-size: 30px;
    font-weight: 600;
    color: rgb(196, 115, 115);
    padding: 20px 20px 15px;
    position: relative;
    text-align: center;
    letter-spacing: 2px;
  }
  // 导航&筛选
  &-header {
    display: flex;

    .goods-gallery-nav {
      display: flex;
      align-items: center;
      margin-left: 20px;
      width: 550px;
      overflow-x: scroll;
      border-bottom: 1px solid rgba(160, 153, 153, 0.884);
      position: relative;

      &-item {
        position: relative;
        font-size: 26px;
        width: 150px;
        text-align: center;
        flex-shrink: 0;
        padding: 20px;
        cursor: pointer;
        white-space: nowrap;
        -webkit-tap-highlight-color: transparent;

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

      &-active {
        color: rgb(82, 123, 211);
        font-weight: 600;
      }
    }

    .goods-gallery-choose {
      display: inline-flex;
      margin-left: 22px;
      font-size: 26px;
      font-weight: 600;
      align-items: center;
      position: relative;

      span {
        margin-left: 12px;
      }

      i {
        margin-left: 6px;
        font-size: 26px;
      }

      &::before {
        content: "";
        position: absolute;
        width: 94%;
        height: 85%;
        border-left: 1px solid #000;
      }
    }
  }

  // 商品陈列
  &-content {
    .goods-gallery-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
      place-items: center;
      margin: 30px 21px 30px;
      font-size: 26px;

      &-item {
        width: 80%;
        text-align: center;
        margin: 20px 0;

        .goods-box {
          display: flex;
          flex-direction: column;

          &-image {
            min-height: 170px;
          }

          &-dscrp {
            margin-top: 30px;
          }
        }
      }
    }
  }
}
</style>
