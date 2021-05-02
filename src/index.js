import * as Vue from "vue/dist/vue.esm-bundler.js"

    const app = Vue.createApp({
      template: `
      <H2>Step 04: Computed Properties</H2>
        <div v-for="num in evenList">
          {{ num }}
        </div>
      `,
      computed: {
        evenList() {
          return this.numbers.filter(num => this.isEven(num))
        }
      },
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
        isEven(val) {
          return val % 2 === 0
        }
      }
    })
    app.mount("#app")