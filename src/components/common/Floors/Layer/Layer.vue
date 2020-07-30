<template>
    <div :class="layerClass">
        <div class="floor-layer-box" v-for="(layer,index) in layerInfoFilter" :key="index" @click="linkTo(layer.link)" >
            <div v-if="layer.mode == 'imglink'" class="floor-layer-box-img" >
              <img :src="layer.image">
            </div>
            <div v-else v-html="layer.content" class="layer-cmbox">
              <p class="layer-cmbox-title"></p>
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
    layerInfo: Array
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
    linkTo (link) {
      let reg=/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
      if (link.match(reg)) {
        window.location.href = link;
      } else {
        this.$router.push(link);
      }
    }
  },
  mounted() {
  },
}
</script>

<style lang="scss" scoped>
    
    .floor-layer {
      
      
      &-scroll {
        overflow-x: auto;
        display: flex;
        margin: 5px 20px;

        & .floor-layer-box {
          flex-shrink: 0;
        }

      }

      &-flex {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }

      & &-box {
        margin: 5px;
        overflow: hidden;
        max-width: 250px;

        .layer-cmbox {
        }

        &-img {
          display: block;
          height: 100%;

          img {
            width: 100%;
          }
        }
      }
    }
</style>
