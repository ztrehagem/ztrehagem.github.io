<template lang="pug">
.layout-default._layout(:class="{_touchdevice: isTouchDevice}")
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
  data() {
    return {
      isTouchDevice: false,
    };
  },
  mounted() {
    if ('ontouchstart' in document.documentElement) {
      this.isTouchDevice = true;
    }
  },
}
</script>
