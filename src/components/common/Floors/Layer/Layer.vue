<template>
    <div :class="layerClass" :style="layerStyle" ref="layer" >
        <div class="floor-layer-box" v-for="(layer,index) in layerInfoFilter" :key="index" @click="$global.linkTo(layer.link)" :style="layer.itemStyle">

            <div v-if="layer.mode == 'imglink'" class="floor-layer-box-img" >
              <img :src="layer.image">
            </div>

            <div v-else v-html="layer.content" class="layer-cmbox">
              <div class="layercm-box-img">
                <img :src="layer.image">
              </div>
              <div class="layer-cmbox-text">
                <p class="layer-cmbox-title">{{layer.content.boxTitle}}</p>
                <p class="layer-cmbox-dscrp">{{layer.content.descrption}}</p>
              </div>
              
              
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Layer",
  
  data() {
    return {
      
    }
  },
  props: {
    layerType: String,
    layerNum: Number,
    layerInfo: Array,
    layerStyle: Object
  },
  components: {

  },
  computed: {
    layerClass(){
      return ['floor-layer',`floor-layer-${this.layerType}`]
    },
    layerInfoFilter() {
      if (this.layerInfo) {
        return this.layerInfo.slice(0,this.layerNum);
      }
    }
    
  },
  methods: {
    

    
  },
  mounted() {
    function mouseWheel(e) {

      var firefox = navigator.userAgent.indexOf('Firefox') != -1;
      e = e || window.event;
      
      if (e.stopPropagation) {
        e.stopPropagation();
      } else {
        e.cancelBubble=true;
      }
      
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue=false;
      }

    }

    this.$refs.layer.addEventListener('scroll',mouseWheel,{passive: false})
  },
}
</script>

<style lang="scss" scoped>

    ::-webkit-scrollbar {
        display: none;
      }
      
    .floor-layer {
      
      margin: 10px 20px;


      // 横排滚动layer样式
      &-scroll {
        overflow-x: auto;
        display: flex;
        

        & .floor-layer-box {
          flex-shrink: 0;
        }

      }

      // 普通横向陈列layer样式
      &-flex {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }
      
      // 网格grid layer样式
      &-grid {
        display: grid;

      }

      & &-box {
        margin: 5px;
        overflow: hidden;
        max-width: 250px;

        &-img {
          display: block;
          height: 100%;

          img {
            width: 100%;
          }
        }

        .layer-cmbox {
          display: flex;
          padding: 15px;

          
        }
      }
    }
</style>
