<template>
  <div class="shop">
    <div class="shop-body main-body">
      <Banner :bannerData="shopBannerData"></Banner>
      <!-- <Floor v-for="floor in shopFloorData" 
            :key="floor.id" 
            :floorData=floor
      >

      </Floor> -->

      <Gallery :galleryData="galleryData">
      </Gallery>
    </div>

  </div>
</template>

<script>
import bus from 'components/bus/bus'
import Floor from 'common/Floors/Floor'
import Banner from 'common/Banner/Banner'
import Gallery from './Gallery'

export default {
  name: "Shop",
  components: {
    Banner,
    Floor,
    Gallery
  },
  data () {
    return {
      shopBannerData: [
        {
          name: '',
          link: '/shop',
          img: require('static/image/banner/banner1.jpg')
        },
        {
          name: '',
          link: '/shop',
          img: require('static/image/banner/banner2.jpg')
        },
        {
          name: '',
          link: '/shop',
          img: require('static/image/banner/banner3.jpg')
        },
        {
          name: '',
          link: '/shop',
          img: require('static/image/banner/banner4.jpg')
        }
      ],
      shopFloorData: [
        {
          name: '精选特惠',
          floorTitle: '精选特惠',
          id: '2001',
          moreFlag: false,
          moreTitle: '更多',
          moreIcon: require('static/image/more-icon.jpg'),
          floorStyle: {

          },
          floorInfo: [
            {
              type: 'flex',
              itemNum: 3,
              layerStyle: {

              },
              layerInfo: [
                {
                  mode: 'imglink',
                  image: require('static/image/qe-icon.jpg'),
                  link: 'https://segmentfault.com/q/1010000013945750'
                },
                {
                  mode: 'imglink',
                  image: require('static/image/qe-icon.jpg'),
                  link: 'https://segmentfault.com/q/1010000013945750'
                },
                {
                  mode: 'imglink',
                  image: require('static/image/qe-icon.jpg'),
                  link: 'https://segmentfault.com/q/1010000013945750'
                }

              ]
            }
          ]
        }
      ],
      shopHeaderData: {
        type: 'HeaderSearch',
        navData: [
          {
            name: 'pkg',
            link: '/shop',
            iconType: 'img',
            img: require('static/image/qe-icon.jpg')
          },
          {
            name: 'pkg1',
            link: '/shop',
            iconType: 'img',
            img: require('static/image/qe-icon.jpg'),
            elIcon: 'el-icon-search'
          }
        ]
      },
      galleryData: {
        title: '终端商城',
        navData: [
          {
            navTitle: '智能手机',
            typeId: 19230,
            goodsType: 'smartphone'
          },
          {
            navTitle: '智能手表',
            typeId: 19231,
            goodsType: 'smartwatch'
          },
          {
            navTitle: '智能家居',
            typeId: 19232,
            goodsType: 'smart'
          },
          {
            navTitle: '购机直降',
            typeId: 19233,
            goodsType: 'smart'
          },
          {
            navTitle: '其它',
            typeId: 19234,
            goodsType: 'smart'
          }
        ],
        goodsData: [
          {
            goodsType: 'smartphone',
            goodsList: [
              {
                name: 'iphone',
                goodId: '18723',
                img: require('static/image/more-icon.jpg'),
                link: 'https://segmentfault.com/q/1010000013945750',
                brand: 'iphone'
              },
              {
                name: 'iphone',
                goodId: '18724',
                img: require('static/image/more-icon.jpg'),
                link: 'https://segmentfault.com/q/1010000013945750',
                brand: 'iphone'
              },
              {
                name: 'iphone',
                goodId: '18725',
                img: require('static/image/more-icon.jpg'),
                link: '/home',
                brand: 'iphone'
              }
            ]
          },
          {
            goodsType: 'smartwatch',
            goodsList: [
              {
                name: '',
                img: ''
              }
            ]
          }
        ]
      }
    }
  },
  methods: {

  },
  mounted () {
    bus.$emit("headNavTransfer", this.shopHeaderData)
  },
}
</script>

<style lang="scss" scoped>
// 样式穿透

.shop-body {
  /deep/ .banner {
    background: rgb(143, 205, 235);
  }
}
</style>
