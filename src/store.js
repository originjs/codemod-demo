import { createStore } from 'vuex'

const store= createStore({
    state(){
        return{
            message:'message from store.js'
        }
    }
})

export default store
