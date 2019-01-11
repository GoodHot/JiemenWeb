<template>
<div>
    <div class="tabs">
      <ul>
        <li class="is-active"><a>热门</a></li>
        <li><a>最新</a></li>
        <li><a>7日最佳</a></li>
      </ul>
    </div>
    <div class="columns">
      <div class="column is-two-thirds">
        <JMStory></JMStory>
        <JMStory></JMStory>
        <JMStory></JMStory>
        <JMStory></JMStory>
        <JMStory></JMStory>
        <a class="button is-fullwidth">更多合集</a>
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
  layout: "new1"
};
</script>