<template>
  <v-list>
    <v-list-item v-for="item in items" :key="item.id">
      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
        <v-list-item-action start>
          <v-checkbox v-model="item.completed" />
        </v-list-item-action>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useAppStore } from '@/store/app'

let items = ref(useAppStore().todos)
</script>
