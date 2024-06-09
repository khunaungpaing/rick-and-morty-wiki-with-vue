import { createRouter, createWebHistory } from 'vue-router'
import CharacterView from '@/views/CharacterView.vue'
import LocationView from '@/views/LocationView.vue'
import CardDetails from '@/views/CardDetails.vue'
import EpisodeView from '@/views/EpisodeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: CharacterView
    },
    {
      path: '/characters',
      name: 'Character',
      redirect: '/'
    },
    {
      path: '/episodes',
      name: 'Episodes',
      component: EpisodeView
    },
    {
      path: '/locations',
      name: 'Locations',
      component: LocationView
    },
    {
      path: '/characters/:id(\\d+)',
      name: 'CardDetails',
      component: CardDetails,
      props: (route) => ({ id: Number(route.params.id) })
    }
  ]
})

export default router
