import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: '',
    userAuth:false,
    isAuthenticated:false,
    alltasks: [],
    cart: [],
    cartCount: 0,
    idCounter: 0,
    productCount:0
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
         return state.cart
    },
    isAuthenticated: state => state.isAuthenticated,
  },
  mutations: {
    SET_TASKS(state, payload) {
      console.log('payload from settask >>>>',payload)
      state.tasks = payload
      
    },
      increment(state) {
      state.cartCount++;
    },
    decrement(state) {
      state.cartCount--;
    }

  },
  actions: {
    async createTask(_, payload) {

      ++this.state.idCounter
      this.state.alltasks.push({ 'task': payload.task, 'title': payload.title, 'price': payload.price, 'status': 'In-Progress', 'image': payload.image, 'itemId': this.state.idCounter, 'quantity': 0 })

    },
    async readTasks({ commit }, id) {
      const response = await localStorage.getItem(`${id}`)
      console.log(response)
      commit('SET_TASKS', response)
    },
    async deleteTask(_, id) {
      await localStorage.removeItem(`${id}`)
      
    },
    updateTask(_, { id, payload }) {
      console.log('index from component>>>', id)
      console.log('data from component>>>', payload)
      this.state.alltasks[id] = payload

    },
    addTOCart(_, payload) {
   

      if (this.state.cart.length != 0) {
  
        let matching = this.state.cart.find(item => item.itemId == payload.productId)
          if (matching) {
            matching.quantity++
            this.state.cartCount++
          
          }
          else {
            this.state.cart.push(this.state.alltasks[payload.index])
            
            this.state.cart[this.state.productCount].quantity++
            this.state.cartCount++
            this.state.productCount++;
          
          }
      
      }
      else {
        this.state.cart.push(this.state.alltasks[payload.index])
        this.state.productCount++
        this.state.cart[0].quantity++
        this.state.cartCount = this.state.cart.length
       
      }  
    }
  }
})
