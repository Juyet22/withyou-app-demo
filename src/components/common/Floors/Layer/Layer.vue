<template>
    <div :class="layerClass" :style="layerStyle" ref="layer">
        <router-link class="floor-layer-box" v-for="(layer,index) in layerInfoFilter" :key="index" :to="layer.link"  :style="layerBoxStyle(layer.itemStyle)">

            <div v-if="layer.mode == 'imglink'" class="floor-layer-box-img" >
              <img :src="layer.image">
            </div>

            <div v-else class="layer-cmbox">
              
              <div class="layer-cmbox-text">
                <p class="layer-cmbox-title">{{layer.content.boxTitle}}</p>
                <p class="layer-cmbox-dscrp">{{layer.content.description}}</p>
              </div>
              <div class="layer-cmbox-img">
                <img :src="layer.image">
              </div>
              
            </div>
        </router-link>
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
    },
    
  },
  methods: {
    layerBoxStyle(ls) {
      let newls = {};
      let type = this.layerType;
      if (type === 'flex') {
        if (ls) {
          newls = ls;
          newls['width'] = `calc(100% / ${this.layerNum})`;
        } else {
          newls['width'] = `calc(100% / ${this.layerNum})`;
        }
      } else {
        newls = ls ? ls : newls;
      }

      return newls;
    },


    

    
  },
  mounted() {
    

  },
}
</script>

<style lang="scss" scoped>

     
    .floor-layer {
      margin: 10px 20px;

      & &-box {
        margin: 5px;
        flex-shrink: 1;
        pointer-events: none;

        .layer-cmbox {
          display: flex;
          position: relative;
          justify-content: space-between;
          min-width: 250px;
          
          &-text {
            
            max-width: 200px;
            margin-top: 8%;
            
            .layer-cmbox-title {
              font-size: 30px;
              font-weight: 800;
              
            }
            .layer-cmbox-dscrp {
              font-size: 20px;
              margin-top: 10px;
            }
          }

          &-img {
            
            img {
              margin-top: 55px;
              width: 100px;
            }
          }
          
        }
        
      }

      // 横排滚动layer样式
      &-scroll {
        overflow-x: scroll;
        display: flex;

        & .floor-layer-box {
          flex-shrink: 0;
          max-width: 300px;;
        }

      }

      // 普通横向陈列layer样式
      &-flex {
        display: flex;
        align-items: flex-start;
        justify-content: space-evenly;
      }
      
      // 网格grid layer样式
      &-grid {
        display: grid;

        & .floor-layer-box {
          max-width: 500px;
        }
      }

      
    }
</style>
