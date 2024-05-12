import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import LayoutView from '../views/event/LayoutView.vue'
import RegisterView from '../views/event/RegisterView.vue'
import EditView from '../views/event/EditView.vue'
import DetailsView from '../views/event/DetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: (route) => ({
        page: parseInt(route.query.page) || 1
      })
    },
    {
      path: '/events/:id',
      name: 'LayoutView',
      props: true,
      component: LayoutView,
      children: [
        {
          path: '',
          name: 'EventDetailsView',
          component: DetailsView
        },
        {
          path: 'register',
          name: 'EventRegisterView',
          component: RegisterView
        },
        {
          path: 'edit',
          name: 'EventEditView',
          component: EditView
        }
      ]
    },
    {
      path: '/event/:id',
      redirect: () => {
        return {
          name: 'EventDetailsView'
        }
      },
      children: [
        {
          path: 'register',
          redirect: () => ({ name: 'EventRegister' })
        },
        {
          path: 'edit',
          redirect: () => ({ name: 'EventEdit' })
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
