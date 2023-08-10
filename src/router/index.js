import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import TaskView from '../views/TaskView.vue'
import CreateTask from '../components/CreateTask.vue'
import ReadTask from '../components/ReadTask.vue'
import DeleteTask from '../components/DeleteTask.vue'
import ALLTask from '../components/AllTasks.vue'
import Cartview from '../views/CartView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
    {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
    {
    path: '/task',
    name: 'task',
    component: TaskView,
      children: [
      {
        path: 'create',
        component:CreateTask
      },
      {
        path: 'read',
        component:ReadTask
      },
      {
        path: 'delete',
        component:DeleteTask
        },
      {
        path: 'all',
        component:ALLTask
      },
        
    ]
  },
      {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/about',
    name: 'about',
    component:AboutView
  },
    {
    path: '/cart',
    name: 'cart',
    component:Cartview
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
