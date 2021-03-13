<template>
  <div class="flex flex-col items-center py-16 px-4">
    <div class="container flex justify-center">
      <profile-box />
    </div>

    <nav class="mt-24">
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

        <li>
          <nuxt-link to="#biography" class="align-middle inline-flex items-center">
            <span class="material-icons">chevron_right</span>
            <link-text>Biography</link-text>
          </nuxt-link>
        </li>
      </ul>
    </nav>

    <div class="container mt-32 space-y-48">
      <div>
        <section-web id="as-a-web-application-developer" class="-mt-12 pt-12" />
      </div>
      <div>
        <section-music id="as-a-music-composer" class="-mt-12 pt-12" />
      </div>
      <div>
        <section-biography id="biography" class="-mt-12 pt-12" />
      </div>
    </div>
  </div>
</template>
