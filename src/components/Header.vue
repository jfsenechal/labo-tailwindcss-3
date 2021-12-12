<script setup lang="ts">
import Navigation from './Navigation.vue'
import IconesSocial from "./IconesSocial.vue";
</script>

<template>
  <header class="flex justify-between items-center p-3">
    <a href="#" class="flex flex-grow flex-shrink-0">
      <img class="w-85 h-50 inline" alt="logo"
           src="https://www.marche.be/wp-content/themes/marchebe/assets/tartine/rsc/img/img_logo.png"/>
    </a>
    <nav class="ml-au45to">
      <Navigation/>
    </nav>
    <IconesSocial/>
  </header>
</template>
