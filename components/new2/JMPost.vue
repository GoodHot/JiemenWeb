<template>
  <div class="post">
    <div class="post-simple-info" v-if="model == 'min'">
      <div class="info-title">
        <h5>{{post.title}}</h5>
        <span>
          Created by <a href="#">张三</a> · 15.321 views
        </span>
      </div>
      <span class="social">
        <JMIconBtn>3.2k</JMIconBtn>
      </span>
    </div>
    <div class="post-author" v-if="model == 'full'">
      <a href="#" class="avatar">
        <img src="https://bulma.io/images/placeholders/128x128.png">
      </a>
      <div class="author-title">
        <h6>{{post.title}}</h6>
        <span class="name">
          <a href="#">强迫症</a> @ 1 min ago
        </span>
      </div>
    </div>
    <div class="post-player">
      <JMPlayer :media="media"></JMPlayer>
    </div>
    <ul class="post-tags"  v-if="model == 'full'">
      <!-- <li class="active"><a href="#">{{post.category.name}}</a></li> -->
      <li><a href="#">分享到微信</a></li>
      <li><a href="#">分享到微博</a></li>
      <div class="social">
        <JMIconBtn >{{post.like}}</JMIconBtn>
        <JMIconBtn icon="eye" >{{post.views}}</JMIconBtn>
      </div>
    </ul>
  </div>
</template>
<script>
import JMIconBtn from "@/components/new2/JMIconBtn";
import JMPlayer from "@/components/new2/JMPlayer";
import JMShareBar from "@/components/new2/JMShareBar";

export default {
  components: {JMPlayer, JMIconBtn, JMShareBar},
  props: {
    model: {
      type: String,
      default: 'full' // 显示模式，full 或者 min
    },
    post: {
      type: Object,
      default: {}
    },
    media: {
      type: Object,
      default: {}
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/css/func.scss';

@mixin social {
  display: inline-block;
  margin-left: auto;
}

.post {
  &-simple-info {
    @include align-item;
    margin-bottom: .5rem;
    .info-title {
      display: inline-block;
      font-size: .8rem;
      color: #999;
      a {
        color: #000;
        font-weight: bold;
      }
    }
    .social {
      @include social;
    }
  }
  &-tags {
    @include align-item;
    margin-top: .5rem;
    margin-bottom: 3.5rem;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    padding-bottom: .5rem;
    li {
      display: inline-block;
      background: #f3f3f3;
      color: #000000;
      padding: 0 10px;
      margin-right: 5px;
      height: 30px;
      line-height: 30px;
      margin-bottom: 5px;
      border-radius: 8px;
      a{
        color: #7B7B7B;
        font-size: .85rem;
      }
    }
    .active {
      background-color: #f8e71c;
      border-radius: 15px;
      a{
        color: #000;
        font-size: 1rem;
      }
    }
    .social {
      @include social;
    }
  }
  &-author {
    @include align-item;
    margin-bottom: .5rem;
    .social {
      @include social;
    }
    .author-title {
      margin-left: 1rem;
      height: 100%;
      .name {
        font-size: .8rem;
        font-weight: normal;
        color: #999;
        a {
          font-weight: bold;
          color: #000;
        }
      }
      h6 {
        display: block;
        font-size: 1.2rem;
        font-weight: bold;
        color: #000;
      }
    }
    .avatar {
      font-size: 0;
      img {
        width: 3rem;
        height: 3rem;
      }
    }
    
  }
  &-footer {
    margin-bottom: 3rem;
  }
}
</style>
