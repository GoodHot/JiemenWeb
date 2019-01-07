<template>
  <div class="cart-media">
    <div class="card-content cart-text" v-if="media.type == 'TEXT'">
      <div class="content">
        {{media.text}}
      </div>
    </div>
    <div class="card-image" v-if="media.type == 'JPEG'">
      <figure class="image">
        <img :src="media.url">
      </figure>
    </div>
    <div class="card-image" v-if="media.type == 'VIDEO'">
      <figure class="image video">
        <div class="video-bg-blur" :style="videoBG(media.posterUrl)"></div>
        <video preload="auto" :poster="media.posterUrl" loop="loop" :ref="media.url" >
          <source :src="media.url" type="video/mp4"> 
        </video>
        <button class="presenting" @click="playVideo(media.url)"><span class="play" v-show="this.videoPlayBtn">GIF</span></button>
      </figure>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    media: {
      type: Object
    }
  },
  methods: {
    playVideo(url){
      let video = this.$refs[url];
      if(!video){
        return ;
      }
      if(video.paused){
        const playPromise = video.play();
        if (playPromise !== null){
            playPromise.catch(() => { video.play(); })
        }
        this.videoPlayBtn = false;
      } else {
        video.pause();
        this.videoPlayBtn = true;
      }
    },
    videoBG(bg){
      return `background-size: cover; background-repeat: no-repeat; background-image: url("${bg}"); `
    }
  },
  data(){
    return {
      videoPlayBtn: true
    }
  }
}
</script>
<style lang="scss" scoped>
$bg-blur: 2px;

.cart-media {
  .card-image {
    // background: linear-gradient(45deg,
    //           #ddd 25%, #fff 0, #fff 50%,
    //           #ddd 0, #ddd 75%, #fff 0);
    // background-size: 20px 20px;
    text-align: center;
    img {
      width: auto;
      max-width: 100%;
      margin: 0 auto;
      margin-bottom: 1rem;
    }
    .video {
      overflow: hidden;
      margin-bottom: 1rem;
      &-bg-blur {
        position:absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        -webkit-filter: blur($bg-blur);
        -moz-filter: blur($bg-blur);
        -o-filter: blur($bg-blur);
        -ms-filter: blur($bg-blur);
        filter: blur($bg-blur);
      }
      video {
        position: relative;
        max-height: 35rem;
        font-size: 0;
        display: block;
        margin: 0 auto;
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
