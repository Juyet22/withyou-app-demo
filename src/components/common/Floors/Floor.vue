<template>
    <div class="floor normal-box" :style="floorData.floorStyle">
        <div class="floor-title">
            <p class="floor-title-text">{{floorData.floorTitle}}</p>
            <div v-show="floorData.moreFlag" class="floor-title-more">
              <span>
                {{floorData.moreTitle}}
              </span>
              <i class="el-icon-arrow-right"></i>
            </div>
        </div>
        
        <!-- 每一列 Layer -->

        <Layer v-for="(layer,index) in floorData.floorInfo" 
              :key="index" 
              :layerType="layer.type" 
              :layerStyle="layer.layerStyle"
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
    floorData: Object,
    // floorInfo: Array,
    // floorTitle: String,
    // moreFlag: Boolean,
    // moreTitle: String,
    // moreIcon: String,
    // floorStyle: Object
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
    

    &-title {

      font-size: 28px;
      color: grey;
      padding: 20px 10px 15px 25px;
      position: relative;
      display: inline-flex;
      justify-content: space-between;

      &-more {
        max-width: 30%;
        display: inline-block;
        align-self: center;

        span {
          margin-right: 5px;
          vertical-align: middle;
          line-height: 28px;
        }
        i,img {
          width: 28px;
          height: 28px;
          vertical-align: middle;
        }
      }

      &-text {
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
