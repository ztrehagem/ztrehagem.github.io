<template lang="pug">
.page-index
  .inner
    activity-item.item(v-for="item in contents", :key="item.slug", :item="item")
</template>

<script>
import contents from '~/assets/contents.json';
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
