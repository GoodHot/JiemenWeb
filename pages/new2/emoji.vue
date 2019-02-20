<template>
<div>
  <div class="tabs">
    <ul>
      <li class="is-active"><a href="/new2/emoji">表情专辑</a></li>
      <li ><a href="/new2/emoji-repository">表情库</a></li>
    </ul>
  </div>
  <div class="columns">
    <div class="column">
      <!-- <JMStory></JMStory>
      <JMStory></JMStory>
      <JMStory></JMStory> -->
    </div>
    <div class="column">
      <!-- <JMStory></JMStory>
      <JMStory></JMStory>
      <JMStory></JMStory> -->
    </div>
    <div class="column">
      <!-- <JMStory></JMStory>
      <JMStory></JMStory>
      <JMStory></JMStory> -->
    </div>
  </div>
</div>
</template>

<script>
import JMPost from "@/components/new2/JMPost";
import JMStory from "@/components/new2/JMStory";
export default {
  components: {JMPost, JMStory},
  layout: "new1"
};
</script>
