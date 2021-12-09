<script setup lang="ts">
import Navigation from './Navigation.vue'
import IconesSocial from "./IconesSocial.vue";
</script>

<template>
  <header class="flex justify-end items-center">
    <a href="#">
      <img class="w-85 h-50" alt="logo"
           src="https://www.marche.be/wp-content/themes/marchebe/assets/tartine/rsc/img/img_logo.png"/>
    </a>
    <nav class="ml-auto">
      <Navigation/>
    </nav>
    <IconesSocial/>
  </header>
</template>
