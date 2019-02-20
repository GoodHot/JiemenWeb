<template>
<div>
    <h1 class="title is-size-2">{{detail.title}}</h1>
    <div class="columns">
      <div class="column is-two-thirds">
        <JMShareBar class="story-sharebar">2,321 views</JMShareBar>
        <JMPlayer v-for="item of detail.medias" v-bind:key="item.id" :media="item" class="story-player"></JMPlayer>
      </div>
      <div class="column">
        <JMRightAd></JMRightAd>
        <JMRightAd></JMRightAd>
        <JMRightAd></JMRightAd>
      </div>
    </div>
</div>
</template>

<script>
import JMRightAd from "@/components/new2/JMRightAd";
import JMPlayer from "@/components/new2/JMPlayer";
import JMShareBar from "@/components/new2/JMShareBar";

export default {
  components: {JMRightAd, JMPlayer, JMShareBar},
  layout: "new1",
  async asyncData({ $axios, params }) {
    const detail = await $axios.$get(`/story/${params.id}`);
    return {detail: detail.data};
  }
};
</script>
<style lang="scss" scoped>
.story-post {
  margin-bottom: 2.5rem;
}
.story-sharebar {
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #eee;
}
.story-player {
  margin-bottom: 1rem;
}
</style>
