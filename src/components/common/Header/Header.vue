<template>
    <div class="header-bar"
        v-if="headerShow"

    >
        <div class="header-bar-bg" :style="HeaderOpacity"></div>
        <div class="header-bar-search">
          <i class="el-icon-search"></i>
          <slot name="search-icon"></slot>
          <div class="header-bar-search-input">
            <input 
               type="text"
               placeholder="请输入搜索内容"
            >
          </div>
            
          
        </div>

        <div class="header-bar-nav">
          <router-link 
              class="header-bar-nav-item" v-for="item in headerNavData" 
              :key="item.name" 
              :to="item.link"
              
          >
            <img v-if="item.iconType == 'img'" :src="item.img" alt="item.name">
            <i v-if="item.iconType == 'el'" :class="item.elIcon"></i>
          </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    headerNavData: Array
  },
  data() {
    return {
      HeaderOpacity: {
        opacity: 0.2
      },
      headerShow: true
    }
  },
  components: {

  },
  methods: {
    topNavScroll() {
      const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
      var opacity = 0.2;

      if (top > 50 && top < 600) {
        opacity += top / 200
        this.headerShow = true
      } else if (top > 600 || top == 600){
        this.headerShow = false
      }
      this.HeaderOpacity = { opacity }
    } 
  },
  computed: {
    
  },
  mounted() {
    window.addEventListener('scroll',this.topNavScroll)
  },
}
</script>

<style lang="scss" scoped>
    .header-bar {
      position: fixed;
      min-height: 8vh;
      top: 0;
      left: 0;
      right: 0;
      z-index: 90;
      background: transparent;
      display: flex;
      align-items: center;

      & &-bg {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        background: linear-gradient(to right,#1a2bc5,#6cb5e6)
      }

      & &-search {
        padding: 7px 20px;
        margin: 20px 15px;
        background: #fff;
        flex: 1;
        display: flex;
        align-items: center;
        border-radius: 12px;

        &-input {
          
          flex:1;
          position: relative;

          input {
            padding-left: 12px;
            overflow: auto;
            width: 100%;
          }

          &::before {
            content: '';
            position: absolute;
            top: 0;
            width: 100px;
            height: 100%;
            border-left: 1px solid #6e6a6a;
          }
          
        }

        i,img{
          margin-right: 12px;
        }

      }

      & &-nav {
        margin-right: 25px;
        display: flex;

        &-item {
          flex: 1;
          position: relative;
          width: 40px;
          margin-left: 14px;
          align-items: center;

          i {
            font-size: 40px;
          }
        }
      }

    }
</style>
