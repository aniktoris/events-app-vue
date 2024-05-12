<script setup>
import { useRouter } from 'vue-router'
import { inject } from 'vue'

const { event } = defineProps(['event'])
const router = useRouter()
const GStore = inject('GStore')

const register = () => {
  GStore.flashMessage = 'You are successfully registered for ' + event.title
  setTimeout(() => {
    GStore.flashMessage = ''
  }, 3000)
  router.push({
    name: 'EventDetailsView'
  })
}
</script>

<template>
  <p>Register for the event here</p>
  <button @click="register">Register Me!</button>
</template>
