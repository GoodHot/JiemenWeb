<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
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
        <a class="navbar-item">2H热门</a>
        <a class="navbar-item">最新</a>
        <a class="navbar-item">合集</a>
        <a class="navbar-item">趣闻</a>
        <a class="navbar-item">表情包</a>
        <a class="navbar-item">装13</a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-info" @click="showLoginModal">登录</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import LoginModal from '@/components/LoginModal'

export default {
  methods:{
    showLoginModal(){
      this.$modal.open({
          parent: this,
          component: LoginModal,
          hasModalCard: true
      })
    }
  }
}
</script>
