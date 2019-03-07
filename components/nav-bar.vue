<template lang="pug">
nav.nav-bar
  nuxt-link.link(to="/") ACTIVITY
  nuxt-link.link(to="/profile") PROFILE
</template>

<style lang="stylus" scoped>
@require "~assets/styles/include"

.nav-bar
  &
    display flex
    justify-content center
    align-items center
    box-shadow 0 0 20px rgb(200, 200, 200)
    background-color white

  .link
    padding 0.5rem
    margin 0 0.5rem
    font-size 0.8em
    position relative
    color rgb(150, 150, 150)
    transition 0.2s ease
    transition-property background-color color
    &.nuxt-link-exact-active
      color black
      &::after
        border-width 0.4rem
    +hover()
      &:not(.nuxt-link-exact-active)
        background-color rgb(240, 240, 240)

    &::after
      content ""
      display block
      position absolute
      bottom 0
      left 0
      width 100%
      // border-bottom 0px solid skyblue
      border-bottom 0px solid lightgray
      transition 0.2s ease
      transition-property border-width
</style>


<script>
export default {
}
</script>
