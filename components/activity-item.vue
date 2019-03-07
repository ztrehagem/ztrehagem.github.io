<template lang="pug">
a.activity-item(:href="href", target="_blank")
  .bg
    img.img(v-if="item.img", :src="item.img")
  .body
    h3.title {{item.title}}
    .description {{item.description | description}}
    .info
      span {{item.date}}
      span(v-for="tag in item.tags") &ensp;{{tag | tag}}
</template>

<style lang="stylus" scoped>
@require "~assets/styles/include"

.activity-item
  &
    box-shadow 0 0 12px rgb(235, 235, 235)
    background-color white
    position relative
    overflow hidden
    display block
    transition 0.4s ease
    transition-property box-shadow
    +hover()
      box-shadow 0 0 60px rgb(200, 200, 200)


  .bg
    position absolute
    top 0
    right 0
    height 100%
    width 10em
    overflow hidden
    &::after
      content ""
      display block
      height 100%
      width 10em
      position absolute
      top 0
      right 0
      background linear-gradient(to left, transparent 20%, rgba(255, 255, 255, 0.5) 60%, white)
      z-index 9

  .img
    position absolute
    top 0
    right 0
    height 100%
    opacity 0.6
    z-index 8

  .body
    padding 1rem
    width calc(100% - 2rem)
    height 100%
    box-sizing border-box
    display flex
    flex-direction column
    > *
      z-index 10

  .title
    display block
    font-weight bold

  .info
    font-size 0.8em

  .description
    flex 1 1 100%
    font-size 0.8em
    margin 0.8rem 0
</style>


<script>
export default {
  props: {
    item: { type: Object, required: true },
  },
  filters: {
    description(paragraphs) {
      return paragraphs && paragraphs[0] || '';
    },
    tag(tag) {
      return `#${tag}`;
    },
  },
  computed: {
    href() {
      const item = this.item;
      return item.links && item.links[Object.keys(item.links)[0]];
    },
  },
}
</script>
