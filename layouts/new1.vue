<template>
  <div>
    <JMNavbar></JMNavbar>
    <div class="jm-menu">
      <HappyScroll>
        <JMNav></JMNav>
      </HappyScroll>
    </div>
    <div class="jm-content">
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
