<template>
  <div>
    <ul class="flex">
      <li v-for="(breadcrumb, index) in breadcrumbs" :key="breadcrumb.path" class="flex">
        <span v-if="index > 0" class="mx-2">/</span>
        <nuxt-link :to="breadcrumb.path">{{ breadcrumb.dir }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Breadcrumb {
  path: string
  dir: string
}

export default Vue.extend({
  computed: {
    breadcrumbs(): Breadcrumb[] {
      const dirs = this.$route.path === '/' ? [] : this.$route.path
        .replace(/^\//, '')
        .split('/')

      const paths = dirs
        .map((dir, index) => dirs.slice(0, index + 1).join('/'))
        .map((path) => `/${path}`)

      const breadcrumbs: Breadcrumb[] = paths.map((path, index) => ({
        path,
        dir: dirs[index],
      }))

      breadcrumbs.unshift({
        path: '/',
        dir: this.$config.site.title,
      })

      return breadcrumbs
    },
  },
})
</script>
