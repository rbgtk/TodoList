<template>
  <v-container>
    <h2>Create Todo</h2>

    <CreateTodoForm />
  </v-container>

  <v-container>
    <h2>Todo List</h2>

    <TodoList />
  </v-container>

</template>

<script lang="ts" setup>
  import TodoList from '@/components/TodoList.vue'
  import CreateTodoForm from '@/components/CreateTodoForm.vue'
</script>
