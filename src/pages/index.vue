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

    <div class="mt-32 space-y-48">
      <section-web id="as-a-web-application-developer" class="container -mt-10 pt-10" />
      <section-music id="as-a-music-composer" class="container -mt-10 pt-10" />
      <section-biography id="biography" class="container -mt-10 pt-10" />
    </div>
  </div>
</template>
