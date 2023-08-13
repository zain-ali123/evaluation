import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: '',
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
      // console.log('items in cart now (getter) >>>>>>>',state.cartCount)
         return state.cart
       }
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
      //  await localStorage.setItem(`${payload.id}`, `Title:${payload.title} , Task:${payload.task}`)
      // commit('SET_ALL_TASKS', localStorage.getItem(`${payload.id}`))
      ++this.state.idCounter
      this.state.alltasks.push({ 'task': payload.task, 'title': payload.title, 'price': payload.price, 'status': 'In-Progress', 'image': payload.image, 'itemId': this.state.idCounter, 'quantity': 0 })
      console.log(this.state.alltasks)
      // console.log(localStorage.getItem(`${payload.id}`))
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
      console.log('product id is : ', payload.productId)
      console.log('index is : ', payload.index)
      // console.log("id in vuex  ", id)
      // console.log('item id is : ', this.state.alltasks[--id].itemId)
      // let index = id-1;
      // if (this.state.cart.length != 0) {
      //   for (let i = 0; i < this.state.cart.length; i++) {

      //     if (id==this.state.cart[id-1].itemId) {
      //       console.log('in if block')
      //     }
      //   }
      // }
      // else {
      if (this.state.cart.length != 0) {
        // for (let i = 0; i < this.state.cart.length; i++) {
        let matching = this.state.cart.find(item => item.itemId == payload.productId)
          if (matching) {
            matching.quantity++
            this.state.cartCount++
            console.log('in if block cart is', this.state.cart)
          }
          else {
            this.state.cart.push(this.state.alltasks[payload.index])
            
            this.state.cart[this.state.productCount].quantity++
            this.state.cartCount++
            this.state.productCount++;
            console.log('in if block cart is', this.state.cart)
          }
        // }
      }
      else {
        this.state.cart.push(this.state.alltasks[payload.index])
        this.state.productCount++
        this.state.cart[0].quantity++
        this.state.cartCount = this.state.cart.length
        console.log('cart in else block is : ', this.state.cart)
      }

        // }
        // for (const item in this.state.cart) {
        
        // if (id == item.itemId) {
        //   console.log('in of block')
        //   item.quantity++
        //   console.log("item now : ", item)
        //   console.log('cart after change by iteration is : ', this.state.cart)
        //   return 0;
        // }
        
        // }
      

        
     
 

      
    }
  }
})
