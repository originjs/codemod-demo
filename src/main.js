import * as Vue from "vue";
import App from './App.vue'
import router from './router'
import "./components/button_counter"
import store from "./store";

import button_counter from "../src/components/button_counter/index.js";
const app = Vue.createApp(App).use(button_counter).use(router).use(store);
//used by new_directive_api
app.directive('demo', {
    beforeMount: function (el, binding, vnode) {
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


app.mount("#app");


