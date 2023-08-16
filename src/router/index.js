import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import TaskView from '../views/TaskView.vue'
import CreateTask from '../components/CreateTask.vue'
import ReadTask from '../components/ReadTask.vue'
import DeleteTask from '../components/DeleteTask.vue'
import ALLTask from '../components/AllTasks.vue'
import Cartview from '../views/CartView.vue'
import UserView from '../views/UserView.vue'

import store from '@/store'


const routes = [

    {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
    {
    path: '/task',
    name: 'task',
    component: TaskView,
    beforeEnter: (to, from, next) => {
      console.log('isAuthenticated:', store.state.isAuthenticated);
      store.state.userAuth = false;
      if (store.state.isAuthenticated) {
        next();
      }
      else {
        next('/')
      }
    },

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
    path: '/cart',
      name: 'cart',
       beforeEnter:(to, from, next) => {
        store.state.isAuthenticated=false
      if (store.state.userAuth) {
        next();
      }
      else {
        next('/')
      }
    },
    component:Cartview
    },
    {
    path: '/user',
    name: 'user',
    component: UserView,
      beforeEnter:(to, from, next) => {
    store.state.isAuthenticated=false
      if (store.state.userAuth) {
        next();
      }
      else {
        next('/')
      }
    },
 
      children: [
        {
        path: 'all',
        component:ALLTask
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// router.beforeEach((to, from, next) => {
//   const isAuthenticated = store.getters.isAuthenticated;
//   console.log(isAuthenticated)

//   if (to.name === 'task' && !isAuthenticated) {
//     next('/');
//   } else {
//     next();
//   }
// });

export default router
