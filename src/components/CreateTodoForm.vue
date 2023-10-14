<template>
  <v-form>
    <v-text-field v-model="title" label="Title" />
    <v-text-field v-model="description" label="Description" />
    <v-btn @click="addTodo">Add Todo</v-btn>
  </v-form>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useAppStore } from '@/store/app'
  import TodoItem from '@/models/TodoItem'

  let title = ref('')
  let description = ref('')

  function addTodo() {
    const todo: TodoItem = {
      id: Date.now(),
      title: title.value,
      description: description.value,
      completed: false
    }

    useAppStore().addTodo(todo)

    title.value = ''
    description.value = ''
  }
</script>
