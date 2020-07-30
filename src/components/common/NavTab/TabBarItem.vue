<template>
    <div class="tab-bar-item" @click="tabClick">
        <div v-if="tabActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"></slot>
        </div>
        <div :style="tabActive ? {color: this.tabActiveColor} : {}" :class="{titleActive:tabActive}">
            <slot name="item-title"></slot>
        </div>
        <!-- <img v-if="tabActive" class="tab-bar-item-normal"  src="" alt="loading">
        <img v-else class="tab-bar-item-active"  src="" alt="loading">
        <p :class="{titleActive: tabActive}">首页</p> -->
    </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
    }
  },
  props: {
      path: String,
      tabActiveColor: String
  },
  computed: {
      tabActive() {
          return this.$route.path.indexOf(this.path) !== -1;
      }
  },
  methods: {
      tabClick() {
          this.$router.replace(this.path);
      }
  },
}
</script>

<style lang="scss" scoped>
    .tab-bar-item {
        flex: 1;
        height: 120px;
        text-align: center;
        font-size: 14px;

        img {
            width: 50px;
            height: 50px;
            margin-top: 13px;
        }


        .titleActive {
            color: red;
            margin-top: 0px;
        }
    }
</style>
