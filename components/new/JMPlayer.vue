<template>
  <div class="jm-player">
    <div class="video">
      <video preload="auto" poster="https://img-9gag-fun.9cache.com/photo/a2ZW79d_460swp.webp" loop="loop" width="500" style="min-height: 497.826px; width: 500px;"><!----> <source src="https://img-9gag-fun.9cache.com/photo/a2ZW79d_460svvp9.webm" type="video/webm"> <source src="https://img-9gag-fun.9cache.com/photo/a2ZW79d_460sv.mp4" type="video/mp4"> <source src="https://img-9gag-fun.9cache.com/photo/a2ZW79d_460svwm.webm" type="video/webm"></video>
      <button class="presenting" ><span class="play">GIF</span></button>
    </div>
  </div>
</template>
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

