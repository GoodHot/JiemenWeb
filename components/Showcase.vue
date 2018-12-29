<template>
  <div class="card content-showcase">
    <div class="card-image">
      <figure class="image video"  @mouseenter="play" @mouseleave="pause">
        <video preload="auto" :poster="collect.cover.posterUrl" loop="loop" muted ref="video" >
          <source :src="collect.cover.url" type="video/mp4"> 
        </video>
        <div class="presenting"></div>
        <a class="title is-3 marked" :href="`/collect/${collect.id}`">{{collect.title}}</a>
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-24x24">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-5">John Smith</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    collect: {
      type: Object
    }
  },
  methods: {
    play(){
      this.$refs.video.play();
    },
    pause(){
      this.$refs.video.pause();
    }
  }
}
</script>

<style lang="scss" scoped>
.content-showcase {
  margin-bottom: 1rem;
  .video {
    overflow: hidden;
    height: 12rem;
    font-size: 0;
    display: block;
    .presenting {
      position:absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000;
      filter:alpha(Opacity=50);
      -moz-opacity:0.5;
      opacity: 0.5;
    }
    .marked {
      position:absolute;
      top: 2rem;
      left: 1rem;
      right: 1rem;
      bottom: 1rem;
      color: #fff;
      // line-height: 2rem;
    }
  }
}
</style>
