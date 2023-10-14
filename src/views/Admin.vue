<template>
  <v-container>
    <h1>Admin</h1>
  </v-container>

  <v-container>
    <h2>Clear Storage</h2>
    <v-btn @click="clearTodos">Clear Todos</v-btn>
  </v-container>
</template>

<script lang="ts" setup>
  import { useAppStore } from '@/store/app'

  function clearTodos() {
    useAppStore().clearTodos()
  }
</script>
