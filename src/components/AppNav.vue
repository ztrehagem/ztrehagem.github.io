<template>
  <nav>
    <ul class="flex">
      <li v-for="breadcrumb in breadcrumbs" :key="breadcrumb.path" class="flex">
        <span v-if="!breadcrumb.first" class="mx-2">/</span>
        <nuxt-link :to="breadcrumb.path">{{ breadcrumb.dir }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    breadcrumbs() {
      const dirs = this.$route.path === '/' ? [] : this.$route.path
        .replace(/^\//, '')
        .split('/')

      const paths = dirs
        .map((dir, index) => dirs.slice(0, index + 1).join('/'))
        .map((path) => `/${path}`)

      const breadcrumbs = paths.map((path, index) => ({
        path,
        dir: dirs[index],
      }))

      const root = {
        path: '/',
        dir: this.$config.site.title,
        first: true,
      }

      return [root, ...breadcrumbs]
    },
  },
})
</script>
