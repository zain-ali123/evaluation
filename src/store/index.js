import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks:''
  },
  getters: {
    getTasksList(state) {
      console.log("getter>>",state.tasks)
      return state.tasks
    }
  },
  mutations: {
    SET_TASKS(state, payload) {
      console.log('payload from settask >>>>',payload)
      state.tasks = payload
      
    }
  },
  actions: {
    async createTask(_,payload) {
      const response = await localStorage.setItem(`${payload.id}`,payload.task)
      console.log(response)
    },
    async readTasks({commit},id) {
      const response = await localStorage.getItem(`${id}`)
      console.log(response)
      commit('SET_TASKS',response)
    },
    async deleteTask( id) {
      const response = await localStorage.removeItem(`${id}`)
      console.log(response);
    }

  }
})
