<template lang="pug">
.layout-default
  head-bar.head
  nav-bar.nav
  nuxt.nuxt
</template>

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
