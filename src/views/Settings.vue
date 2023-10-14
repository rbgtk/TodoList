<template>
  <v-container>
    <h1>Settings</h1>
  </v-container>

  <v-container>
    <h2>Clear Storage</h2>
    <v-btn @click="useAppStore().clearTodos">Clear Todos</v-btn>
  </v-container>
</template>

<script lang="ts" setup>
  import { useAppStore } from '@/store/app'
</script>
