import * as Vue from "vue/dist/vue.esm-bundler.js"

    const app = Vue.createApp({
      template: `
      <H2>Step 06: Form Validation</H2>
        <input
          :value="value"
          @input="handleInput()"
        />
        <div class="red">
          {{ error }}
        </div>

      `,
      computed: {
        error() {
          if (this.value.length < 5) {
            return "Must be greater than 5"
          }
        }
      },
      data() {
        return {
          value: 'user'
        }
      },
      methods: {
        handleInput($evt) {
          this.value = $evt.target.value
        }
      }
    })
    app.mount("#app")