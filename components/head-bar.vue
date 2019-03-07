<template lang="pug">
header.head-bar
  nuxt-link.link(to="/")
    h1 Megahertz
</template>

<style lang="stylus" scoped>
@require "~assets/styles/include"

.head-bar
  &
    text-align center
    font-size 1.5rem
    font-family 'Poiret One'
    position relative
    background-color white

  .link
    margin 0.5rem
    display inline-block
</style>


<script>
export default {
}
</script>

