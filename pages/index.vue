<template>
  <div class="columns">
    <div class="column">
      <Category :categories="categories"></Category>
    </div>
    <div class="column is-half">
      <Cart v-for="item of posts.content" v-bind:key="item.id" :post="item" ref="posts"></Cart>
    </div>
    <div class="column">
      <Showcase v-for="item of collects.content" v-bind:key="item.id" :collect="item"></Showcase>
    </div>
  </div>
</template>

<script>
import BLogo from "@/components/Logo";
import Category from "@/components/Category";
import Cart from "@/components/Cart";
import Showcase from "@/components/Showcase";

export default {
  components: { BLogo, Category, Cart, Showcase },
  data() {
    return {
      features: [
        {
          icon: "github-circle",
          title: "Free",
          content: `<span>Open source on <a href="https://github.com/buefy/buefy"> GitHub</a></span>`
        },
        {
          icon: "cellphone-link",
          title: "Responsive",
          content: `<span><b class="has-text-grey">Every</b> component is responsive</span>`
        },
        {
          icon: "alert-decagram",
          title: "Modern",
          content: `<span>Built with <a href="https://vuejs.org/">Vue.js</a> and <a href="http://bulma.io/">Bulma</a></span>`
        },
        {
          icon: "arrange-bring-to-front",
          title: "Lightweight",
          content: `<span>No other internal dependency</span>`
        }
      ],
      playIndex: {
        index: 0,
        scrollTop: 0
      }
    };
  },
  methods: {
    canPlay(post) {
      if (!post) return false;
      if (!post.medias) return false;
      for (let i = 0; i < post.medias.length; i++) {
        let media = post.medias[i];
        if (media.type == "VIDEO" || media.type == "COUB") return true;
      }
      return false;
    },
    // getPlayCart(playCartArray, index){
    //   if(index < 0 || playCartArray.length >= index){
    //     return null;
    //   }
    //   return playCartArray[index];
    // }
  },
  mounted() {
    let playCartArray = new Array();
    for (let i = 0; i < this.$refs.posts.length; i++) {
      let post = this.$refs.posts[i];
      let data = post.post;
      if (this.canPlay(data)) {
        playCartArray.push({
          top: post.$el.offsetTop,
          height: post.$el.offsetHeight,
          post: post
        });
      }
    }
    let self = this;
    window.addEventListener("scroll", function() {
      let top = document.body.scrollTop;
      if(top == 0){
        top = document.documentElement.scrollTop;
      }
      let height = document.documentElement.clientHeight + top;
      let arrow = "down";
      if (top < self.playIndex.scrollTop) {
        arrow = "up";
      }
      
      let postCart = playCartArray[self.playIndex.index];
      console.log(postCart);
      console.log(top + ":" + height);
      if (postCart.top < top && (postCart.height + postCart.top) < height) {
        postCart.post.playMedia();
        if (arrow == "down") {
          self.playIndex.index++;
        } else {
          self.playIndex.index--;
        }
      }
      self.scrollTop = top;
    });
  },
  async asyncData({ $axios }) {
    const data = await $axios.$get("/index/all");
    return {
      categories: data.dataMap.categories,
      posts: data.dataMap.posts,
      collects: data.dataMap.collects
    };
  }
};
</script>
