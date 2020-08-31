<template>
  <div class="home">
    <div class="home-body main-body"
         ref="homebody">
      <Banner :bannerData="homeBannerData"></Banner>
      <QuickEntry :quickEntryData="quickEntryData">

      </QuickEntry>
      <Floor v-for="floor in homeFloorData"
             :key="floor.id"
             :floorData=floor>

      </Floor>
      <div class="bottom"></div>
    </div>
  </div>
</template>

<script>

import bus from 'components/bus/bus'
import Floor from 'common/Floors/Floor'
import Banner from 'common/Banner/Banner'
import QuickEntry from './QuickEntry'


export default {
  name: 'Home',
  components: {
    Floor,
    Banner,
    QuickEntry,

  }
  ,
  data () {
    return {
      homeBannerData: [
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
      homeFloorData: [
        {
          name: '流量专区',
          floorTitle: '流量专区',
          id: '1001',
          moreFlag: true,
          moreTitle: '更多',
          moreIcon: require('static/image/more-icon.jpg'),
          floorStyle: {

          },
          floorInfo: [
            {
              type: 'flex',
              itemNum: 2,
              layerStyle: {

              },
              layerInfo: [
                {
                  mode: 'imglink',
                  image: require('static/image/llzq-1.png'),
                  link: 'https://segmentfault.com/q/1010000013945750'
                },
                {
                  mode: 'customize',
                  content: {
                    boxTitle: '测试',
                    description: '测试测试测试测试测'
                  },
                  image: require('static/image/qe-icon.jpg'),
                  link: '/shop'
                },
                {
                  mode: 'imglink',
                  image: require('static/image/llzq-1.png'),
                  link: 'https://segmentfault.com/q/1010000013945750'
                },
              ]
            },
            {
              type: 'scroll',
              itemNum: 6,
              layerStyle: {

              },
              layerInfo: [
                {
                  mode: 'imglink',
                  image: require('static/image/banner/banner3.jpg'),
                  link: '/shop'
                },
                {
                  mode: 'imglink',
                  image: require('static/image/banner/banner3.jpg'),
                  link: '/shop'
                },
                {
                  mode: 'imglink',
                  image: require('static/image/banner/banner3.jpg'),
                  link: '/shop'
                },
                {
                  mode: 'imglink',
                  image: require('static/image/banner/banner3.jpg'),
                  link: '/shop'
                },
                {
                  mode: 'imglink',
                  image: require('static/image/banner/banner3.jpg'),
                  link: '/shop'
                }

              ]
            },
            {
              type: 'grid',
              itemNum: 8,
              layerStyle: {
                'grid-template-columns': '1fr 1fr 1.5fr',
                'grid-template-rows': 'repeat(2,1fr)',
                'place-items': 'center center'
              },
              layerInfo: [
                {
                  mode: 'imglink',
                  image: require('static/image/llzq-large-2.png'),
                  link: 'https://segmentfault.com/q/1010000013945750',
                  itemStyle: {
                    'grid-column-start': 1,
                    'grid-column-end': 3,
                    'grid-row-start': 1,
                    'grid-row-end': 3,
                  }

                },
                {
                  mode: 'imglink',
                  image: require('static/image/llzq-1.png'),
                  link: '/shop'
                },
                {
                  mode: 'imglink',
                  image: require('static/image/llzq-1.png'),
                  link: '/shop'
                },

              ]

            }
          ]
        }

      ],
      quickEntryData: [
        {
          title: '流量',
          icon: require('static/image/banner/qe-icon.jpg'),
          poID: 1001,
          link: '/shop'
        },
        {
          title: '流量',
          icon: require('static/image/banner/qe-icon.jpg'),
          poID: 1002,
          link: '/shop'
        },
        {
          title: '流量',
          icon: require('static/image/banner/qe-icon.jpg'),
          poID: 1003,
          link: '/shop'
        },
        {
          title: '流量',
          icon: require('static/image/banner/qe-icon.jpg'),
          poID: 1004,
          link: 'https://www.baidu.com'
        },
        {
          title: '流量',
          icon: require('static/image/banner/qe-icon.jpg'),
          poID: 1005,
          link: 'https://www.baidu.com'
        },
        {
          title: '流量',
          icon: require('static/image/banner/qe-icon.jpg'),
          poID: 1006
        },
        {
          title: '流量',
          icon: require('static/image/banner/qe-icon.jpg'),
          poID: 1007
        },
        {
          title: '流量',
          icon: require('static/image/banner/qe-icon.jpg'),
          poID: 1008
        },
        {
          title: '流量',
          icon: require('static/image/banner/qe-icon.jpg'),
          poID: 1009
        },
      ],

      homeHeaderData: {
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
            iconType: 'el',
            img: require('static/image/qe-icon.jpg'),
            elIcon: 'el-icon-search'
          }
        ]
      }
    }
  },
  computed: {

  },
  mounted () {
    bus.$emit("headNavTransfer", this.homeHeaderData)
    this.$store.dispatch('GET_HEADERTYPE', {
      headerType: 'HeaderSearch',
      headerShow: true,
      tabBarShow: true
    })
  },
  created () {

  },
  activated () {

  },
  destroyed () {
    this.$store.dispatch('GET_HEADERTYPE', {
      headerShow: false
    })
  },
}
</script>

<style lang="scss">
.bottom {
  height: 10vh;
}
</style>
