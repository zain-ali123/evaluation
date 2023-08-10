import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: '',
    alltasks: [],
    cart: [],
    cartCount:null
  },
  getters: {
    getTasksList(state) {
      console.log("getter>>",state.tasks)
      return state.tasks
    },
    getAllTaskList(state) {
          return state.alltasks
         
    },
    getCart(state) {
      state.cartCount = state.cart.length
      console.log('items in cart now (getter) >>>>>>>',state.cartCount)
         return state.cart
       }
  },
  mutations: {
    SET_TASKS(state, payload) {
      console.log('payload from settask >>>>',payload)
      state.tasks = payload
      
    },

  },
  actions: {
    async createTask(_,payload) {
       await localStorage.setItem(`${payload.id}`, `Title:${payload.title} , Task:${payload.task}`)
      // commit('SET_ALL_TASKS', localStorage.getItem(`${payload.id}`))
      this.state.alltasks.push({'task':payload.task , 'title':payload.title,'price':payload.price ,'status':'In-Progress'} )
      console.log(payload) 
      // console.log(localStorage.getItem(`${payload.id}`))
    },
    async readTasks({commit},id) {
      const response = await localStorage.getItem(`${id}`)
      console.log(response)
      commit('SET_TASKS',response)
    },
    async deleteTask( _,id) {
     await localStorage.removeItem(`${id}`)
      
    },
    updateTask(_,{id,payload}) {
      console.log('index from component>>>',id)
      console.log('data from component>>>', payload)
      this.state.alltasks[id]=payload

    },
    addTOCart(_,id) {
      this.state.cart.push(this.state.alltasks[id])
      console.log(this.state.cart)
    }
 

  }
})
