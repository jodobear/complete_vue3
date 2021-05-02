import * as Vue from "vue/dist/vue.esm-bundler.js"

    const app = Vue.createApp({
      template: `
      <h1>Hello {{ msg }}</h1>
      `,
      data() {
        return {
        msg: "world"
        }
      }
    })
    app.mount("#app")