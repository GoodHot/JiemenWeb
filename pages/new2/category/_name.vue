<template>
<div>
    <div class="tabs">
      <ul>
        <li class="is-active"><a>热门</a></li>
        <li><a>最新</a></li>
      </ul>
    </div>
    <div class="columns">
      <div class="column is-two-thirds">
        <JMPost v-for="item of posts.content" v-bind:key="item.id" :post="item" :media="item.medias[1]"></JMPost>
      </div>
      <div class="column">
        <JMStory v-for="item of storys.content" v-bind:key="item.id" :data="item"></JMStory>
        <a class="button is-fullwidth">更多故事</a>
      </div>
    </div>
</div>
</template>

<script>
import JMPost from "@/components/new2/JMPost";
import JMStory from "@/components/new2/JMStory";
export default {
  components: {JMPost, JMStory},
  layout: "new1",
  async asyncData({ $axios, params}) {
    const posts = await $axios.$get(`/post/category/${params.name}`);
    const storys = await $axios.$get("/story/newest");
    return {posts: posts.data, storys: storys.data};
  }
};
</script>