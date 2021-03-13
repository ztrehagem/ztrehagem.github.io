<template>
  <div class="flex flex-col items-center py-8 px-4">
    <section class="container flex justify-center">
      <div class="flex flex-col md:flex-row items-center md:items-stretch py-8 px-8 sm:px-16 w-full sm:w-auto shadow-2xl rounded bg-dark text-smoke">
        <img src="https://github.com/ztrehagem.png" alt="profile icon" class="rounded-full overflow-hidden w-48 h-auto">

        <div class="mt-8 md:mt-0 md:ml-16">
          <h1 class="text-2xl font-bold">Shigeki Suwa</h1>
          <p class="text-sm text-muted mt-2">ztrehagem</p>
          <ul class="mt-8 leading-relaxed">
            <li>
              <a href="https://twitter.com/ztrehagem">
                <link-text>Twitter</link-text>
              </a>
            </li>
            <li>
              <a href="https://github.com/ztrehagem">
                <link-text>GitHub</link-text>
              </a>
            </li>
            <li>
              <a href="https://gitlab.com/ztrehagem">
                <link-text>GitLab</link-text>
              </a>
            </li>
            <li>
              <a href="https://qiita.com/ztrehagem">
                <link-text>Qiita</link-text>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <nav class="mt-16">
      <ul class="flex flex-col space-y-4">
        <li>
          <nuxt-link to="/web" class="align-middle inline-flex items-center">
            <span class="material-icons">chevron_right</span>
            <link-text>As A Web Application Developer</link-text>
          </nuxt-link>
        </li>

        <li>
          <nuxt-link to="/music" class="align-middle inline-flex items-center">
            <span class="material-icons">chevron_right</span>
            <link-text>As A Music Composer</link-text>
          </nuxt-link>
        </li>

        <li>
          <nuxt-link to="/bio" class="align-middle inline-flex items-center">
            <span class="material-icons">chevron_right</span>
            <link-text>Biography</link-text>
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LinkText from '../components/LinkText.vue'
export default Vue.extend({
  components: { LinkText },})
</script>
