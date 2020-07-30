<template>
    <div class="banner-item" @click="bannerClick">
        <slot name="banner-item-img"></slot>
    </div>
</template>

<script>
export default {
  name: "BannerItem",
  data() {
    return {

    }
  },
  props: {
      path: String,
  },
  components: {

  },
  methods: {
    bannerClick() {
      this.$router.push(this.path)
    }
  },
}
</script>

<style scoped>

</style>
