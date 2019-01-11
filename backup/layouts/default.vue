<template>
  <div>
    <div class="nav">
      <div class="container">
        <Nav></Nav>
      </div>
    </div>
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<script>

import Nav from '@/components/Nav'

export default {
  components: {Nav},
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  background: #fff;
  border-bottom: solid 1px #e5e9ec;
  -webkit-box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}
</style>

