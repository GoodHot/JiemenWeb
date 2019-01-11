<template>
<div>
    <h1 class="title is-size-2">2018年第50周最受欢迎的抖音小姐姐</h1>
    <div class="columns">
      <div class="column is-two-thirds">
        <JMShareBar class="story-sharebar">2,321 views</JMShareBar>
        <JMPost model="min" class="story-post"></JMPost>
        <JMPost model="min" class="story-post"></JMPost>
        <JMPost model="min" class="story-post"></JMPost>
        <JMPost model="min" class="story-post"></JMPost>
        <JMPost model="min" class="story-post"></JMPost>
        <JMPost model="min" class="story-post"></JMPost>
        <JMPost model="min" class="story-post"></JMPost>
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
import JMPost from "@/components/new2/JMPost";
import JMShareBar from "@/components/new2/JMShareBar";

export default {
  components: {JMRightAd, JMPost, JMShareBar},
  layout: "new1"
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
</style>
