<template>
    <div class="floor" :style="floorStyle">
        <div class="floor-title">
            <p class="floor-title-text">{{floorTitle}}</p>
            <div v-show="moreFlag" class="floor-title-more">
              <span>
                {{moreTitle}}
              </span>
              <img :src="moreIcon" alt="">
            </div>
        </div>
        
        <!-- 每一列 Layer -->

        <Layer v-for="(layer,index) in floorInfo" 
              :key="index" 
              :layerType="layer.type" 
              :layerStyle="layer.style"
              :layerNum="layer.itemNum"
              :layerInfo="layer.layerInfo"

        >
        </Layer>
    </div>
</template>

<script>
import Layer from './Layer/Layer'

export default {
  name: "Floor",
  props: {
    floorInfo: Array,
    floorTitle: String,
    moreFlag: Boolean,
    moreTitle: String,
    moreIcon: Function,
    floorStyle: Object
  },
  data() {
    return {
        
    }
  },
  components: {
    Layer
  },
  computed: {

  },
  mounted() {

  },
}
</script>

<style lang="scss" scoped>
  .floor {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 95%;
    margin: 30px auto;
    border: 2px solid orange;
    
    &-title {

      font-size: 28px;
      color: grey;
      padding: 15px 25px;
      position: relative;
      display: inline-flex;
      justify-content: space-between;

      &-more {
        line-height: 50px;
        max-width: 30%;
        display: inline-flex;
        

        span {
          align-self: center;
          margin-right: 20px;
        }
        img {
          align-self: center;
          width: 28px;
          height: 28px;
        }
      }

      &-text {
        font-size: 1.3em;
        font-weight: 600;
        line-height: 50px;
        position: relative;
        align-self: center;
      }

      &::after {
          content: "";
          position: absolute;
          width: 94%;
          height: 85%;
          border-bottom: 1px solid #000;
        }
    }


  }
</style>
