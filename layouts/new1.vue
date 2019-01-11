<template>
  <div>
    <JMNavbar></JMNavbar>
    <div class="jm-menu" ref="nav" v-bind:class="{ hideMenu: !lockerIsOpen }">
      <HappyScroll>
        <JMNav></JMNav>
      </HappyScroll>
      <button class="locker" @click="hideNav">{{lockerIcon}}</button>
    </div>
    <div class="jm-content" v-bind:style="{ paddingLeft: lockerWidth}">
      <div class="jm-banner-ad">
        <JMContainer>
          <JMAd style="height:200px;"></JMAd>
        </JMContainer>
      </div>
      <JMContainer>
        <nuxt />
      </JMContainer>
    </div>
  </div>
</template>

<script>
import JMNavbar from "@/components/new2/JMNavbar";
import JMAd from "@/components/new2/JMAd";
import JMContainer from "@/components/new2/JMContainer";
import JMNav from "@/components/new2/JMNav";
import { HappyScroll } from 'vue-happy-scroll';
import 'vue-happy-scroll/docs/happy-scroll.css';
export default {
  components: {JMNavbar, JMAd, JMContainer, JMNav, HappyScroll},
  layout: "new",
  methods: {
    hideNav(){
      this.lockerIcon = this.lockerIsOpen ? '→' : '←';
      this.lockerIsOpen = !this.lockerIsOpen;
      this.lockerWidth = this.lockerIsOpen ? '240px' : '0';
    }
  },
  data(){
    return {
      lockerIcon: '←',
      lockerIsOpen: true,
      lockerWidth: '240px'
    }
  }
};
</script>

<style lang="scss" scoped>
$nav-width: 240px;
.hideMenu {
  left: -$nav-width;
}
.fullContent {
  padding-left: 0;
}
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
    width: $nav-width;
    height: 100%;
    background: #f7f7f7;
    z-index: 800;
    .locker {
      position: absolute;
      left: $nav-width;
      top: 30%;
      border: 0;
      padding: 0;
      margin: 0;
      outline: none;
      cursor: pointer;
      height: 40px;
      width: 25px;
      background: #f7f7f7;
      border: 1px solid #f2f2f2;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      font-weight: bold;
      font-size: 1rem;
      &:hover {
        background: #f2f2f2;
      }
    }
  }
  &-content {
    position:absolute;
    padding-left: $nav-width;
    padding-top: 77px;
    left: 0;
    right: 0;
    z-index: 700;
  }
  &-banner-ad {
    background: #FBF9F9;
    margin-bottom: 1rem;
  }
}
</style>
