import * as Vue from "vue/dist/vue.esm-bundler.js"

const Num = {
    props: {
      number: {
        type: Number
      }
    },
    template: `
    <button
      :class=getClass(number)
      @click="handleClick"
    >
    {{ number }}
    </button>
    `,
    methods: {
      handleClick() {
        this.$emit("chosen", this.number)
      },
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
        <h2>Step 09: Child -> Parent Communication</h2>
        <h3>Num Component:</h3>
        <num
          v-for="number in numbers"
          :number="number"
          @chosen="addToChosen"
        />
        <div>
        Chosen Numbers: {{ chosenNumbers }}
        </div>
        <hr>
        <num
        v-for="number in chosenNumbers"
        :number="number"
      />
      </div>
    `,
  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7],
      chosenNumbers: []
    }
  },
  methods: {
    addToChosen(number) {
      this.chosenNumbers.push(number)
    }
  }
})
app.mount("#app")
