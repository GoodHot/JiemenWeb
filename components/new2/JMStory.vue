<template>
  <div class="jm-story">
    <video preload="auto" :poster="data.cover.posterUrl" loop="loop" >
      <source ：src="data.cover.url" type="video/mp4">
    </video>
    <span class="cover"></span>
    <div class="category">
      <span>故事</span>&nbsp;&nbsp;|&nbsp;&nbsp;{{data.medias.length}} posts
    </div>
    <div class="description">
      <h2>{{data.title}}</h2>
      <div>by
        <span class="hbold">Mashups</span>&nbsp;·&nbsp;1613 views
      </div>
    </div>
    <a :href="`/new2/story-detail/${data.id}`" class="link"></a>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object
    }
  }
}
</script>

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
