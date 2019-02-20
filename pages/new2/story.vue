<template>
<div>
    <div class="columns">
      <div class="column is-two-thirds">
        <JMStory v-for="item of storys.content" v-bind:key="item.id" :data="item"></JMStory>
        <a class="button is-fullwidth">更多故事</a>
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
import JMStory from "@/components/new2/JMStory";
export default {
  components: {JMRightAd, JMStory},
  layout: "new1",
  async asyncData({ $axios }) {
    const storys = await $axios.$get("/story/newest");
    return {storys: storys.data};
  }
};
</script>