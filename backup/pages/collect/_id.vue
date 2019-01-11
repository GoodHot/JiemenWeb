<template>
  <div class="columns">
    <div class="column">
      <Category :categories="categories"></Category>
    </div>
    <div class="column is-half">
      <Cart :post="post"></Cart>
    </div>
    <div class="column">
      asdfasfd
    </div>
  </div>
</template>

<script>
import Category from '@/components/Category'
import Cart from '@/components/Cart'

export default {
  components: {Category, Cart},
  async asyncData({ $axios, params }) {
    const result = await $axios.$get(`/collect/${params.id}`)
    const post = result.dataMap.collect;
    post.showTitle = true;
    return { categories: result.dataMap.categories, post: post }
  }
}
</script>
