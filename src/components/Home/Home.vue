<template>
    <div class="home">
        <h2>首页</h2>
        <div class="home-body" ref="homebody">
            <Banner></Banner>
            <QuickEntry             :quickEntryData="quickEntryData">

            </QuickEntry>
            <Floor v-for="floor in homeFloorData" 
                :key="floor.id" 
                :floorInfo="floor.floorInfo"
                :floorTitle="floor.title"
                :moreFlag="floor.moreFlag"
                :moreTitle="floor.moreTitle"
                :moreIcon="floor.moreIcon"
                :floorStyle="floor.floorStyle"
            >

            </Floor>
        </div>
    </div>
</template>

<script>
import Floor from 'common/Floors/Floor'
import Banner from 'common/Banner/Banner'
import QuickEntry from './QuickEntry'

export default {
    name: 'Home',
    components: {
        Floor,
        Banner,
        QuickEntry
    }
    ,
    data() {
        return {
            homeFloorData: [
                {
                    name: '流量专区',
                    title: '流量专区',
                    id: '1001',
                    moreFlag: true,
                    moreTitle: '更多',
                    moreIcon: require('static/image/more-icon.jpg'),
                    floorStyle: {

                    },
                    floorInfo: [
                        {
                            type: 'flex',
                            itemNum: 3,
                            layerInfo: [
                                {
                                    mode: 'imglink',
                                    image: require('static/image/banner/summer.gif'),
                                    link: 'https://segmentfault.com/q/1010000013945750'
                                },
                                {
                                    mode: 'imglink',
                                    image: require('static/image/banner/summer.gif'),
                                    link: '/shop'
                                },
                                {
                                    mode: 'customize',
                                    content: {
                                        boxTitle: '',
                                        description: ''
                                    },
                                    image: require('static/image/banner/banner3.jpg'),
                                    link: '/shop'
                                }
                            ]
                        },
                        {
                            type: 'scroll',
                            itemNum: 6,
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
                            style: {
                                'grid-template-columns': '1fr 1fr auto',
                                'grid-template-rows': 'repeat(2,1fr)',
                                'place-items': 'center center'
                            },
                            layerInfo: [
                                {
                                    mode: 'imglink',
                                    image: require('static/image/banner/summer.gif'),
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
                                    image: require('static/image/banner/summer.gif'),
                                    link: '/shop'
                                },
                                {
                                    mode: 'imglink',
                                    image: require('static/image/banner/summer.gif'),
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
            ]
        }
    },
    computed: {
        
    },
    created() {

    },
    activated() {
        
    },
}
</script>

<style lang="scss">
    .home-body {
        display: flex;
        flex-direction: column;
        max-width: 750px;
    }
</style>
