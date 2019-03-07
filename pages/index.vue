<template lang="pug">
.page-index
  .inner
    activity-item.item(v-for="item in contents", :key="item.slug", :item="item")
</template>

<style lang="stylus" scoped>
@require "~assets/styles/include"

.page-index
  &
    padding 2rem
    display flex
    justify-content center
    +mobile()
      padding 2rem 0.5rem

  .inner
    display flex
    flex-wrap wrap
    margin-left -2rem
    margin-top -2rem
    width 100%
    max-width 1600px

  .item
    flex 0 0 calc((100% - 6rem) / 3)
    margin 2rem 0 0 2rem
    min-height 10em
    overflow hidden
    +tablet()
      flex 0 0 calc((100% - 4rem) / 2)
    +mobile()
      flex 0 0 calc(100% - 2rem)
</style>


<script>
import contents from '~/assets/contents.yml';
import ActivityItem from '~/components/activity-item.vue';

export default {
  components: {
    ActivityItem,
  },
  data() {
    return {
      contents,
    };
  },
}
</script>
