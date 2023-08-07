import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import TaskView from '../views/TaskView.vue'
import CreateTask from '../components/CreateTask.vue'
import ReadTask from '../components/ReadTask.vue'
import DeleteTask from '../components/DeleteTask.vue'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
