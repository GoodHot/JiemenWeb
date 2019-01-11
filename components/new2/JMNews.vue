<template>
  <div class="jm-story">
    <img src="https://coubsecure-s.akamaihd.net/get/b34/p/coub/simple/cw_timeline_pic/da4ae8aae0b/6b48e9ccb66949f6f0320/big_1517460908_image.jpg" alt="">
    <span class="cover"></span>
    <div class="category">
      <span>趣闻</span>&nbsp;&nbsp;|&nbsp;&nbsp;狗子
    </div>
    <div class="description">
      <h2>"Avengers: Endgame" Trailers Will Only Show Footage From The First 20 Minutes</h2>
      <div>by
        <span class="hbold">Mashups</span>&nbsp;·&nbsp;1613 views
      </div>
    </div>
    <a href="/new2/news-detail" class="link"></a>
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
    img {
      top: 0;
      left: 0;
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .description {
      position: absolute;
      left: 1.5rem;
      bottom: 1.5rem;
      right: 1.5rem;
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
