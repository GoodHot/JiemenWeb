<template>
  <div>
    <nav class="navbar jm-navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>
        
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="/new/story">精选合集</a>
          <a class="navbar-item" href="/new/news">歪果趣闻</a>
          <a class="navbar-item">表情包</a>
          <a class="navbar-item">装13图</a>
          <a class="navbar-item">下载Apps!</a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-link">登录</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="jm-menu">
      <HappyScroll>
        <JMNav></JMNav>
      </HappyScroll>
    </div>
    <div class="jm-content">
      <div class="jm-banner-ad">
        <div class="columns">
          <div class="column"></div>
          <div class="column is-three-fifths" style="background:#feeeee;height:200px;">
            这里是广告位<br>
            Google AD?<br>
            或者其他广告
          </div>
          <div class="column"></div>
        </div>
      </div>
      <div class="columns">
        <div class="column"></div>
        <div class="column is-three-fifths">
          <div class="tabs">
            <ul>
              <li class="is-active"><a>热门</a></li>
              <li><a>最新</a></li>
              <li><a>7日最佳</a></li>
            </ul>
          </div>
          <div class="columns">
            <div class="column is-two-thirds">
              <JMPost></JMPost>
              <JMPost></JMPost>
              <JMPost></JMPost>
            </div>
            <div class="column">
              <JMStory></JMStory>
              <JMStory></JMStory>
              <JMStory></JMStory>
              <a class="button is-fullwidth">更多合集</a>
            </div>
          </div>
        </div>
        <div class="column"></div>
      </div>
    </div>
  </div>
</template>

<script>
import JMNav from "@/components/new/JMNav";
import JMPost from "@/components/new/JMPost";
import JMStory from "@/components/new/JMStory";
import { HappyScroll } from 'vue-happy-scroll';
import 'vue-happy-scroll/docs/happy-scroll.css';
export default {
  components: {JMNav, JMPost, HappyScroll, JMStory},
  layout: "new"
};
</script>

<style lang="scss" scoped>
.jm {
  &-navbar {
    position: fixed;
    width: 100%;
    background: #fff;
    box-shadow: 0 1px 0 0 rgba(0,0,0,0.05);
    z-index: 800;
  }
  &-menu {
    position: fixed;
    top: 64px;
    width: 240px;
    height: 100%;
    background: #f7f7f7;
    z-index: 800;
  }
  &-content {
    position:absolute;
    padding-left: 240px;
    padding-top: 64px;
    left: 0;
    right: 0;
    z-index: 700;
  }
  &-banner-ad {
    background: #FBF9F9;
    height: 200px;
    text-align: center;
    margin-bottom: 1rem;
  }
}
</style>
