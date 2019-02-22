<template>
  <div class="jm-player" v-if="media.type == 'VIDEO'">
    <div class="video">
      <video preload="auto" :poster="util.url(media.posterUrl)" loop="loop" muted @click="pauseGIF" >
        <source :src="util.url(media.url)" type="video/mp4">
      </video>
      <button class="presenting" @click="playGIF" v-show="shopPresenting" ><span class="play">GIF</span></button>
    </div>
  </div>
</template>
<script>
import util from '../../util/util';
export default {
  props: {
    media: {
      type: Object,
      default: {}
    }
  },
  data(){
    return {
      util: util,
      shopPresenting: true
    }
  },
  methods: {
    playGIF(e){
      let video = e.currentTarget.previousElementSibling;
      if(video.paused){
        video.play();
        this.shopPresenting = false;
      }
    },
    pauseGIF(e){
      let video = e.currentTarget;
      if(!video.paused){
        video.pause();
        this.shopPresenting = true;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.jm {
  &-player {
    position: relative;
    border-radius: 6px;
    background-color: rgba(0,0,0,0.02);
    border: 1px solid #e5e5e5;
    overflow: hidden;
    width: 100%;
    .video {
      width: 100%;
      video {
        font-size: 0;
        display: block;
        margin: 0 auto;
        cursor: pointer;
      }
      .presenting {
        position: relative;
        border: 0;
        padding: 0;
        margin:0;
        outline: none;
        cursor: pointer;
        position:absolute;
        width: 100%;
        height: 100%;
        background: transparent;
        top: 0;
        left: 0;
        .play {
          position: absolute;
          top: 50%;
          margin-top: -36px;
          left: 50%;
          margin-left: -36px;
          height: 72px;
          width: 72px;
          text-align: center;
          overflow: hidden;
          background: rgba(0,0,0,.8);
          line-height: 72px;
          font-size: 20px;
          text-transform: uppercase;
          color: #fff;
          font-weight: 700;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>

