<template>
  <div class="card content-media">
    <header class="card-header" v-if="post.showTitle">
      <h2 class="card-header-title">{{post.title}}</h2>
      <a href="#" class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </a>
    </header>
    <div class="card-content cart-auth" v-if="post.category">
      <div class="media">
        <div class="media-left">
          <figure class="image is-32x32">
            <img :src="post.category.icon" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-7">{{post.category.name}}</p>
          <p class="subtitle is-7">{{timeFormat(post.created)}}</p>
        </div>
      </div>
    </div>
    <CartMedia v-for="item of post.medias" v-bind:key="item.url" :media="item" ref="media"></CartMedia>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">
        <b-icon
            icon="star-outline"
            size="is-small">
        </b-icon> 收藏
      </a>
      <a href="#" class="card-footer-item">
        <b-icon
            icon="comment-outline"
            size="is-small">
        </b-icon> {{post.comments}}
      </a>
      <a href="#" class="card-footer-item">
        <b-icon
            icon="thumb-up-outline"
            size="is-small">
        </b-icon> {{post.like}}
      </a>
      <a href="#" class="card-footer-item">
        <b-icon
            icon="thumb-down-outline"
            size="is-small">
        </b-icon> {{post.dislike}}
      </a>
    </footer>
  </div>
</template>
<script>
import CartMedia from './CartMedia'
import { format} from 'timeago.js'

export default {
  components: {CartMedia},
  props: {
    post: {
      type: Object
    }
  },
  created(){
  },
  methods: {
    timeFormat(time){
      return format(time, 'zh_CN');
    },
    firstCanPlayMedia(){
      for(let i=0;i<this.post.medias.length; i++){
        let m = this.post.medias[i];
        if(m.type == 'VIDEO'){
          return m;
        }
      }
      return null;
    },
    playMedia(){
      for(let i=0;i<this.$refs.media.length; i++){
        let m = this.$refs.media[i];
        m.playVideo(this.firstCanPlayMedia().url);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content-media {
  margin-bottom: 1rem;
  .cart-auth {
    border-bottom: solid 1px #f3f3f3;
  }
  .cart-text {
    margin-top: 0;
    padding-top: 0.75rem ;
    padding-bottom: 0.75rem ;
  }
  .card-footer-item .icon{
    margin-right: .3rem;
  }
  .card-header {
    padding: .3rem ;
    font-size: 1.3rem;
  }
}
</style>
