<template>
  <div class="jm-story">
    <video preload="auto" poster="https://img-9gag-fun.9cache.com/photo/a1QWDZ2_460swp.webp" loop="loop" ><!----> <source src="https://img-9gag-fun.9cache.com/photo/a1QWDZ2_460svvp9.webm" type="video/webm"> <source src="https://img-9gag-fun.9cache.com/photo/a1QWDZ2_460sv.mp4" type="video/mp4"> <source src="https://img-9gag-fun.9cache.com/photo/a1QWDZ2_460svwm.webm" type="video/webm"></video>
    <span class="cover"></span>
    <div class="category">
      <span>精选合集</span>&nbsp;&nbsp;|&nbsp;&nbsp;10 posts
    </div>
    <div class="description">
      <h2>2018年第50周最受欢迎的抖音小姐姐</h2>
      <div>by
        <span class="hbold">Mashups</span>&nbsp;·&nbsp;1613 views
      </div>
    </div>
    <a href="/new/story-detail" class="link"></a>
  </div>
</template>

<style lang="scss" scoped>
.jm {
  &-story {
    border-radius: 6px;
    height: 260px;
    background: #fee;
    margin-bottom: 1rem;
    overflow: hidden;
    position: relative;
    video {
      top: 0;
      left: 0;
      position: absolute;
      width: 100%;
    }
    .description {
      position: absolute;
      left: 1.5rem;
      bottom: 1.5rem;
      color: #fff;
      h2 {
        font-weight: bold;
        font-size: 1.5rem;
      }
      div {
        margin-top: .7rem;
        font-size: .7rem;
      }
    }
    .category {
      position: relative;
      top: 1.5rem;
      left: 1.5rem;
      color: #fff;
      font-size: .85rem;
      span {
        font-weight: bold;
      }
    }
    .cover {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0px;
      right: 0px;
      top: 0px;
      bottom: 0px;
      background: linear-gradient(to right, rgba(0,0,0,0.6), transparent);
    }
    .link {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0px;
      right: 0px;
      top: 0px;
      bottom: 0px;
    }
  }
}
</style>
