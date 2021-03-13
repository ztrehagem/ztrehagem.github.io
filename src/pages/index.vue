<template>
  <div class="flex flex-col items-center py-16 px-4 space-y-32">
    <div class="container flex justify-center">
      <profile-box />
    </div>

    <nav>
      <ul class="flex flex-col space-y-4">
        <li>
          <nuxt-link to="#as-a-web-application-developer" class="align-middle inline-flex items-center">
            <span class="material-icons">chevron_right</span>
            <link-text>As A Web Application Developer</link-text>
          </nuxt-link>
        </li>

        <li>
          <nuxt-link to="#as-a-music-composer" class="align-middle inline-flex items-center">
            <span class="material-icons">chevron_right</span>
            <link-text>As A Music Composer</link-text>
          </nuxt-link>
        </li>

        <!-- <li>
          <nuxt-link to="#" class="align-middle inline-flex items-center">
            <span class="material-icons">chevron_right</span>
            <link-text>Biography</link-text>
          </nuxt-link>
        </li> -->
      </ul>
    </nav>

    <section-web id="as-a-web-application-developer" class="container" />

    <section-music id="as-a-music-composer" class="container" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LinkText from '../components/LinkText.vue'
import SectionMusic from '../components/SectionMusic.vue'
export default Vue.extend({
  components: { LinkText, SectionMusic },})
</script>
