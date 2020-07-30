<template>
    <div class="home">
        <h2>首页</h2>
        <div class="home-body" ref="homebody">
            <banner></banner>
            <Floor v-for="floor in homeFloorData" 
                :key="floor.id" 
                :title="floor.title"
                :info="floor.floorInfo"
                
            >

            </Floor>
        </div>
    </div>
</template>

<script>
import Floor from 'common/Floors/Floor'
import Banner from 'common/Banner/Banner'

export default {
    name: 'Home',
    components: {
        Floor,
        Banner
    }
    ,
    data() {
        return {
            homeFloorData: [
                {
                    name: '流量专区',
                    title: '流量专区',
                    id: '1001',
                    style: {

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
                                    mode: 'imglink',
                                    image: require('static/image/banner/summer.gif'),
                                    link: '/shop'
                                },
                                {
                                    mode: 'customize',
                                    content: `
                                        <span style="color:red">2222</span>
                                    `,
                                    image: require('static/image/banner/banner3.jpg'),
                                    link: '/shop'
                                }
                            ]
                        },
                        {
                            type: 'scroll',
                            itemNum: 3,
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
                        }
                    ]
                }
                
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
    }
</style>
