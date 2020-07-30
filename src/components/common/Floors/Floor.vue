<template>
    <div class="floor">
        <div class="floor-title">
            <h3 class="floor-title-text">{{title}}</h3>
        </div>
        <Layer v-for="(layer,index) in info" 
              :key="index" 
              :layerType="layer.type" 
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
    info: Array,
    title: String
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
    console.log(this.info);
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
      font: {
        size: 24px;
      }
      color: grey;
      padding: 15px 25px;

      &-text {
        border-bottom: 1px solid #000;
        line-height: 50px;
      }
      
    }


  }
</style>
