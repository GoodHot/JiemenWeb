<template>
  <div class="columns">
    <div class="column">
      <Category :categories="categories"></Category>
    </div>
    <div class="column is-half">
      <Cart v-for="item of posts.content" v-bind:key="item.id" :post="item"></Cart>
    </div>
    <div class="column">
      <Showcase v-for="item of collects.content" v-bind:key="item.id" :collect="item"></Showcase>
    </div>
  </div>
</template>

<script>
import BLogo from '@/components/Logo'
import Category from '@/components/Category'
import Cart from '@/components/Cart'
import Showcase from '@/components/Showcase'

export default {
  components: {BLogo, Category, Cart, Showcase},
  data() {
      return {
          features: [
              { icon: 'github-circle', title: 'Free', content: `<span>Open source on <a href="https://github.com/buefy/buefy"> GitHub</a></span>` },
              { icon: 'cellphone-link', title: 'Responsive', content: `<span><b class="has-text-grey">Every</b> component is responsive</span>` },
              { icon: 'alert-decagram', title: 'Modern', content: `<span>Built with <a href="https://vuejs.org/">Vue.js</a> and <a href="http://bulma.io/">Bulma</a></span>` },
              { icon: 'arrange-bring-to-front', title: 'Lightweight', content: `<span>No other internal dependency</span>` }
          ]
      }
  },
  async asyncData({ $axios }) {
    const data = await $axios.$get('/index/all')
    return { categories: data.dataMap.categories, posts: data.dataMap.posts, collects: data.dataMap.collects }
  }
}
</script>
