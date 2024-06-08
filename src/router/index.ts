import { createRouter, createWebHistory } from 'vue-router'
import CharacterView from '@/views/CharacterView.vue'
import CardDetails from '@/views/CardDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: CharacterView
    },
    {
      path: '/character/',
      name: 'Character',
      redirect: '/'
    },
    {
      path: '/character/:id(\\d+)',
      name: 'CardDetails',
      component: CardDetails,
      props: (route) => ({ id: Number(route.params.id) })
    }
  ]
})

export default router
