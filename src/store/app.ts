// Utilities
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import TodoItem from '@/models/TodoItem'

export const useAppStore = defineStore('app', {
  state: () => ({
    todos: useStorage('todos', new Array<TodoItem>()),
  }),

  actions: {
    addTodo (todo: TodoItem) {
      this.todos.push(todo)
    },

    clearTodos () {
      this.todos = new Array<TodoItem>()
    }
  }
})
