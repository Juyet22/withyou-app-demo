<template>
    <div class="quick-entry">
      <ul class="quick-entry-list">
        <li class="quick-entry-box" v-for="item in quickEntryData" :key="item.poID" @click=$global.linkTo(item.link)>
          <div class="quick-entry-box-img">
            <img :src="item.icon">
          </div>
          <p class="">
            {{item.title}}
          </p>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: "QuickEntry",
  props: {
    quickEntryData: Array
  },
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>

  .quick-entry {

    width: 95%;
    margin: 30px auto;
    font-size: 24px;

    & &-list {
    display: grid;
    grid-template-columns: repeat(5,minmax(100px,1fr));
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    
    .quick-entry-box {
      display:flex;
      flex-direction: column;
      align-items: center;

      &-img {
        width: 80%;
        margin: 20px auto 0;
      }

      p {
        text-align: center;
        margin-bottom: 1em;
      }
    }
  }
  }
  
</style>
