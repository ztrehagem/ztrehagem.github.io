<template>
  <div class="p-12 space-y-8 flex flex-col items-center">
    <AppNav />

    <nav>
      <ul class="flex flex-col space-y-4">
        <li>
          <nuxt-link to="/dev" class="block border py-4 px-6 text-center leading-normal">
            <span>as Web Application Developer</span>
          </nuxt-link>
        </li>

        <li>
          <nuxt-link to="/music" class="block border py-4 px-6 text-center leading-normal">
            <span>as Music Composer</span>
          </nuxt-link>
        </li>

        <li>
          <nuxt-link to="/bio" class="block border py-4 px-6 text-center leading-normal">
            <span>Biography</span>
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
