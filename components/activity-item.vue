<template lang="pug">
a.activity-item(:href="href", target="_blank")
  .bg
    img.img(v-if="item.img", :src="item.img")
  .inner
    h3.title {{item.title}}
    .description {{item.description | description}}
    .info
      span {{item.date}}
      span(v-for="tag in item.tags") &ensp;{{tag | tag}}
</template>

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
