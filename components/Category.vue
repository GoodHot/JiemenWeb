<template>
  <nav class="panel category">
    <p class="panel-heading is-size-7">
      2H热门更新还有：2:02:02
    </p>
    <label class="panel-block">
      <b-switch :value="true" size="is-small" type="is-info">
        自动播放GIF
      </b-switch>
    </label>
    <label class="panel-block">
      <b-switch :value="true" size="is-small" type="is-info">
        自动播放声音
      </b-switch>
    </label>
    <a class="panel-block" v-for="item of categories" v-bind:key="item.id">
      <img :src="item.icon" class="image is-24x24 icon" />
      {{item.name}}
    </a>
  </nav>
</template>
<script>
export default {
  props: {
    categories: {
      type: Array
    }
  },
  created(){
  }
}
</script>

<style lang="scss" scoped>
.category {
  background: #fff;
  .icon {
    margin-right: .5rem;
  }
}
</style>
