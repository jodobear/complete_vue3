import * as Vue from "vue/dist/vue.esm-bundler.js"

    const app = Vue.createApp({
      template: `
      <h1>Hello {{ msg }}</h1>
      <hr>
      <H2>Step 02: Methods & <span style="color: orange">v-on</span> directive</H2>
        <button @click="increment">Increment</button>
        <p>{{ count }}</p>
      <hr>
      <H2>Step 03: Control Flow</H2>
        <p v-if="isEven()">
          Even
        </p>
        <p v-else>
          Odd
        </p>
      <hr>
      `,
      data() {
        return {
        msg: "world",
        count: 0,
        numbers: [1, 2, 3, 4, 5, 6, 7]
        }
      },
      methods: {
        increment() {
          this.count += 1
        },
        isEven() {
          return this.count % 2 === 0
        }
      }
    })
    app.mount("#app")