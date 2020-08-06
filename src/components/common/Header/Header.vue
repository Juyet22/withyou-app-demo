<template>
    <div class="header-bar"
        :style="HeaderOpacity"
        v-show="headerShow"

    >
        <div class="header-bar-search">
          <i class="el-icon-search"></i>
          <slot name="search-icon"></slot>
          <input 
              class="header-bar-search-input" type="text" 
          >
        </div>

        <div class="header-bar-nav">
          <router-link 
              class="header-bar-nav-item" v-for="item in headerNavData" 
              :key="item.name" 
              :to="item.link"
              
          >
            <img :src="require(item.img)" alt="">
          </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      HeaderOpacity: {
        opacity: 0.8
      },
      headerShow: true
    }
  },
  components: {

  },
  methods: {
    topNavScroll() {
      const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;

      if (top > 60) {
        let opacity = top / 140
        if (opacity >= 1) {
          opacity = 1
        }
        this.HeaderOpacity = { opacity }
        this.headerShow = false
      } else {
        this.headerShow = true
      }
    }
  },
}
</script>

<style lang="scss" scoped>
    .header-bar {
      position: fixed;
      min-height: 7.5vh;
      top: 0;
      left: 0;
      right: 0;
      z-index: 90;
      background: linear-gradient(to right,blue,#34b2ec);
      display: flex;
      align-items: center;
      padding: 0 15px;

      & &-search {
        padding: 0 20px;
        background: #fff;
        flex: 1;
        display: flex;
        align-items: center;
        border-radius: 12px;

        &-input {
          height: 80%;
          padding: 0 8px;
          flex:1;
          overflow: auto;
          
          &::before {
            content: '';
            position: absolute;
            width: 100px;
            height: 100%;
          }
        }

        i,img{
          margin-right: 10px;
        }

      }

      & &-nav {
        margin-left: 20px;
      }

    }
</style>
