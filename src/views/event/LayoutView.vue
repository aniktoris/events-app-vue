<script setup>
import { ref, onMounted } from 'vue'
import EventService from '@/services/EventService'
import { useRouter } from 'vue-router'

const props = defineProps({
  id: {
    required: true
  }
})

const router = useRouter()

const event = ref(null)

onMounted(() => {
  EventService.getEvent(props.id)
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        router.push({
          name: '404Resource',
          params: { resource: 'event' }
        })
      } else {
        router.push({
          name: 'NetworkError'
        })
      }
    })
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'EventDetailsView' }">Details</router-link> |
      <router-link :to="{ name: 'EventRegisterView' }">Register</router-link>
      |
      <router-link :to="{ name: 'EventEditView' }">Edit</router-link>
    </div>
    <router-view :event="event" />
  </div>
</template>
