<template>
  <div class="sharebar">
    <a class="button is-primary wechat">分享微信</a>
    <a class="button is-danger">分享微博</a>
    <span class="views">
      <slot></slot>
    </span>
  </div>


  <!-- <JMShareBar>
    <JMIconBtn :horizontal="true">3.4k</JMIconBtn>
    <JMIconBtn :horizontal="true" icon="repost">3.4k</JMIconBtn>
  </JMShareBar> -->
</template>

<script>
import JMIconBtn from "@/components/new2/JMIconBtn";
export default {
  components: {JMIconBtn},
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/func.scss';
.sharebar {
  @include align-item;
  .button {
    margin-right: .5rem;
  }
  .views {
    margin-left: auto;
    .icon-btn {
      margin-left: .5rem;
    }
  }
  .wechat {
    background: #09bb07;
  }
  .weibo {
    background: #e6172d;
  }
}
</style>

