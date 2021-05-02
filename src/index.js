import * as Vue from "vue/dist/vue.esm-bundler.js"

    const app = Vue.createApp({
      data() {
        return {
        msg: "world"
        }
      }
    })
    app.mount("#app")