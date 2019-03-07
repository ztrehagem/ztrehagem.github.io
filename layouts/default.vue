<template lang="pug">
.layout-default
  head-bar.head
  nav-bar.nav
  nuxt.nuxt
</template>

<style lang="stylus" scoped>
@require "~assets/styles/include"

.layout-default
  &
    display flex
    flex-direction column
    align-items stretch

  .head
    z-index 10

  .nav
    z-index 9
</style>


<script>
import HeadBar from '~/components/head-bar.vue';
import NavBar from '~/components/nav-bar.vue';

export default {
  components: {
    HeadBar,
    NavBar,
  },
}
</script>
