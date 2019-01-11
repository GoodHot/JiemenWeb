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
          <a class="navbar-item">精选合集</a>
          <a class="navbar-item">歪果趣闻</a>
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
          <div class="column is-three-fifths" style="background:#feeeee;height:200px;">这里是广告位
            <br>Google AD?
            <br>或者其他广告
          </div>
          <div class="column"></div>
        </div>
      </div>
      <div class="columns">
        <div class="column"></div>
        <div class="column is-three-fifths">
          <div class="jm-content-title">
            <div class="jm-content-title-category">
              <span class="category-title">趣闻</span>
              <span>|</span>
              <span class="author">by&nbsp;
                <a href="/celebrities">小王</a>
              </span>
              <span>·</span>
              <span>2819 views</span>
            </div>
            <h1 class="title is-size-2">银河系与其他星系将更早相撞</h1>
          </div>
          <div class="columns">
            <div class="column is-two-thirds">
              <div class="jm-content-share">
                <a class="button is-primary">分享微信</a>
                <a class="button is-danger">分享微博</a>
                <hr>
              </div>
              <JMPost model="player" :showMeta="false"></JMPost>
              <JMText>未来某刻，我们的银河系将会经历一场可怕的、无人问津的灾难，而我们这些贫弱的大脑几乎无法理解这些灾难。一股巨大的热能和气体将冲进我们的银河系，把构成银河系的所有不同部分扔进一个可怕的宇宙混乱漩涡中。星星会相互撞击，行星会被破碎并燃烧 - 如果它们没有完全蒸发完的话 - 所有的一切都将面目全非。</JMText>
              <JMPost model="player" :showMeta="false"></JMPost>
              <JMText>但我们还无需担心：数十亿年内还不会发生这种情况。不幸的是，无论生命形式在不久的将来会变成什么样，这种情况很快就会发生(相对我们来说)。我们已经知道银河系在大约80亿年后最终会与仙女座星系碰撞，并形成新星系。但根据上星期五在皇家天文学会月刊上公布的新发现，我们应该关注与另一个星际物体的另一次碰撞，这将在20亿年后发生。</JMText>
              <JMText>让我们来了解一哈大麦哲伦星云，这是一个距离我们大约16万光年的卫星星系。它的质量高达100亿颗太阳(明显低于银河系的质量，但仍然是一个庞然大物)。虽然科学家长期以来认为大麦哲伦星云是一个相对较新的邻居，只有微弱的引力与银河系相联系，但对暗物质的新发现表明大麦哲伦星云比我们想象的更大，因此更有可能在未来击中银河系。</JMText>
              <JMText>“过去两年的观察结果表明，大麦哲伦星云嵌入暗物质中的光环几乎是之前认为的两倍，”英国杜伦大学的科学家、新研究的主要作者Marius Cautun说。“大麦哲伦星云的质量越高，我们的命运就越密切，这意味着大麦哲伦星云与银河系的联系更紧密，并且它将在大约20亿年内与我们的银河系碰撞。”</JMText>
              <JMText>Cautun和他的同事们认为，在新的暗物质估计的背景下可以更好地说明大麦哲伦星云如何与银河系相互作用，以及这种关系如何向前发展。该团队使用计算机建模来设想多种情景，这些情景可以解释在未来几十亿年内决定大麦哲伦星云和银河系的运动和行为的各种因素，并且在大约93％的模型中，大麦哲伦星云会与银河系相撞，比与仙女座星系更早。</JMText>
              <JMText>这样的合并将导致更多令人不安的宇宙爆炸，并将大量物体从稳定的轨道中抛出，在银河系周围形成一个弥散的恒星晕，并且从星系中驱逐出许多恒星。 “其中一个不幸的系统可能是我们的太阳系，这对我们的后代来说可能意味着一个危险而孤独的未来。”</JMText> 
            </div>
            <div class="column">
              <JMAd></JMAd>
              <JMAd></JMAd>
              <JMAd></JMAd>
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
import JMText from "@/components/new/JMText";
import JMAd from "@/components/new/JMAd";
import JMStory from "@/components/new/JMStory";
import { HappyScroll } from "vue-happy-scroll";
import "vue-happy-scroll/docs/happy-scroll.css";
export default {
  components: { JMNav, JMPost, HappyScroll, JMStory, JMAd , JMText},
  layout: "new"
};
</script>

<style lang="scss" scoped>
.jm {
  &-navbar {
    position: fixed;
    width: 100%;
    background: #fff;
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.05);
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
    position: absolute;
    padding-left: 240px;
    padding-top: 64px;
    left: 0;
    right: 0;
    z-index: 700;
    &-share {
      margin-bottom: 1rem;
      hr{
        border: none;
        height: 1px;
        background-color: rgba(0,0,0,0.05);
        margin-top: 1rem;
      }
    }
    &-title {
      h1 {
        margin-bottom: 1.5rem;
        color: #000;
      }
      &-category {
        margin-bottom: 1rem;
        color: #999;
        font-size: 1.1rem;
        span {
          margin-right: 5px;
        }
        .category-title {
          color: #000;
          font-weight: bold;
        }
        .author {
          color: #999;
          a {
            color: #000;
            font-weight: bold;
          }
        }
      }
    }
  }
  &-banner-ad {
    background: #fbf9f9;
    height: 200px;
    text-align: center;
    margin-bottom: 1rem;
  }
}
</style>
