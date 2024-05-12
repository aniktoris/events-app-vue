<script setup>
import { useRouter } from 'vue-router'
defineProps(['event'])
const router = useRouter()

const register = () => {
  router.push({
    name: 'EventDetailsView'
  })
}
</script>

<template>
  <p>Register for the event here</p>
  <button @click="register">Register Me!</button>
</template>
