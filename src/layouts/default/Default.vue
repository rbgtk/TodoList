<template>
  <v-app>
    <default-bar />

    <default-nav-drawer />

    <default-view />
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultBar from './AppBar.vue'
  import DefaultNavDrawer from './NavDrawer.vue'
  import DefaultView from './View.vue'
</script>
