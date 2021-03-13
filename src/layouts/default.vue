<template>
  <div class="flex flex-col items-stretch">
    <header class="flex-none">
      <global-header />
    </header>

    <main class="flex-grow">
      <nuxt />
    </main>

    <footer class="pt-10">
      <global-footer class="fixed bottom-0 left-0 right-0 h-10" />
    </footer>
  </div>
</template>
