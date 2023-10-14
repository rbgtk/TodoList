<template>
  <v-app-bar flat>
    <v-app-bar-nav-icon @click="drawer = true" />
    <v-app-bar-title>Vuetify TodoList</v-app-bar-title>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app clipped>
    <v-list-item link title="My Application" to="/"></v-list-item>
    <v-divider></v-divider>
    <v-list-item link title="Admin" to="/admin"></v-list-item>
    <v-list-item link title="Todos" to="/todos"></v-list-item>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const drawer = ref(false)
</script>
