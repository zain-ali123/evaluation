import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: '',
    alltasks:[],
  },
  getters: {
    getTasksList(state) {
      console.log("getter>>",state.tasks)
      return state.tasks
    },
       getAllTaskList(state) {
      
      return state.alltasks
    }
  },
  mutations: {
    SET_TASKS(state, payload) {
      console.log('payload from settask >>>>',payload)
      state.tasks = payload
      
    },
    SET_ALL_TASKS(state, payload) {
      state.alltasks=payload
    }
  },
  actions: {
    async createTask({commit},payload) {
      const response = await localStorage.setItem(`${payload.id}`, `Title of task is ${payload.title} and task is ${payload.task}`)
      commit('SET_ALL_TASKS', localStorage.getItem(`${payload.id}`))
      console.log(response)
    },
    async readTasks({commit},id) {
      const response = await localStorage.getItem(`${id}`)
      console.log(response)
      commit('SET_TASKS',response)
    },
    async deleteTask( _,id) {
     await localStorage.removeItem(`${id}`)
      
    },
 

  }
})
