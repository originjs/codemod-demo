// import Vue from "vue";
import App from './App.vue'
import router from './router'
import ButtonCounter from "./components/button_counter"
import store from "./store";
import { createApp } from 'vue';

// Vue.config.productionTip = false
const app = createApp(App)
app.use(router)
app.use(store)
app.use(ButtonCounter)



//used by new_directive_api
app.directive('demo', {
    bind: function (el, binding, vnode) {
        // var s=JSON.stringify()
        el.innerHTML = `
        <p>
        value of the Custom Directives（like the test in the v-model:foo="test"）
        </p>
        <p>
        value:${binding.value}
        </p>
        <p>
        arguments of the Custom Directives（like the foo in the v-model:foo="test"）
        </p>
        <p>
        argument:${binding.arg}
        </p>
        `
    }
})

app.mount('#app')

