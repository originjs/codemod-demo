import * as Vuex from 'vuex';
const store=Vuex.createStore({
    state(){
        return{
            message:'message from store.js'
        }
    }
})

export default store
