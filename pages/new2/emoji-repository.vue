<template>
<div>
  <div class="tabs">
    <ul>
      <li><a href="/new2/emoji">表情专辑</a></li>
      <li class="is-active"><a href="/new2/emoji-repository">表情库</a></li>
    </ul>
  </div>
  <div class="emojis">
    <figure class="image is-128x128">
      <img src="https://bulma.io/images/placeholders/128x128.png">
    </figure>
    <figure class="image is-128x128">
      <img src="https://bulma.io/images/placeholders/128x128.png">
    </figure>
    <figure class="image is-128x128">
      <img src="https://bulma.io/images/placeholders/128x128.png">
    </figure>
    <figure class="image is-128x128">
      <img src="https://bulma.io/images/placeholders/128x128.png">
    </figure>
    <figure class="image is-128x128">
      <img src="https://bulma.io/images/placeholders/128x128.png">
    </figure>
    <figure class="image is-128x128">
      <img src="https://bulma.io/images/placeholders/128x128.png">
    </figure>
    <figure class="image is-128x128">
      <img src="https://bulma.io/images/placeholders/128x128.png">
    </figure>
    <figure class="image is-128x128">
      <img src="https://bulma.io/images/placeholders/128x128.png">
    </figure>
    <figure class="image is-128x128">
      <img src="https://bulma.io/images/placeholders/128x128.png">
    </figure>
    <figure class="image is-128x128">
      <img src="https://bulma.io/images/placeholders/128x128.png">
    </figure>
    <figure class="image is-128x128">
      <img src="https://bulma.io/images/placeholders/128x128.png">
    </figure>
    <figure class="image is-128x128">
      <img src="https://bulma.io/images/placeholders/128x128.png">
    </figure>
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
<style lang="scss" scoped>
.emojis {
  figure {
    padding: .3rem;
    margin: .2rem;
    display: inline-block;
    border: 1px solid #fff;
    cursor: pointer;
    &:hover {
      border: 1px solid #ddd;
    }
  }
}
</style>
