import * as Vue from "vue/dist/vue.esm-bundler.js"

const Num = {
  props: [
    'number'
  ],
  template: `
    <div :class=getClass(number)>
      {{ number }}
    </div>
  `,
  methods: {
    getClass(num) {
      return this.isEven(num) ? 'red' : 'blue'
    },
    isEven(num) {
      return num % 2 === 0
    }
  }
}

const app = Vue.createApp({
  components: {
    Num
  },
  template: `
      <div>
        <h2>Step 08: Custom components</h2>
        <h3>Num Component:</h3>
        <num
          v-for="number in numbers"
          :number="number" />
      </div>
    `,
  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7]
    }
  }
})
app.mount("#app")
