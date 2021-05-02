import * as Vue from "vue/dist/vue.esm-bundler.js"

const app = Vue.createApp({
  template: `
  <h2>Step 07: v-model</h2>
    <h3>Text Input:</h3>
      <input type="text" v-model="value" />
      <div class="red">
        {{ error }}
      </div>
  <hr>
    <h3>Checkbox Input:</h3>
      <input type="checkbox" v-model="checked" id="ina" value="Ina" />
      <label for="ina">Ina</label>
      <input type="checkbox" v-model="checked" id="mina" value="Mina" />
      <label for="mina">Mina</label>
      <input type="checkbox" v-model="checked" id="dika" value="Dika" />
      <label for="dika">Dika</label>
      <br>
      <span>Checked Names: {{ checked }}</span>
  <hr>
    <h3>Radio Input:</h3>
      <input type="radio" v-model="picked" value="A" />
      <label for="a">A</label>
      <input type="radio" v-model="picked" value="B" />
      <label for="b">B</label>
      <br>
      Picked: {{ picked }}
    <hr>
      <h3>Single Select:</h3>
        <select v-model="selected">
          <option disabled value="">Please select one</option>
          <option>Bouldering</option>
          <option>Sport</option>
          <option>Mountaineering</option>
          <option>Ice Climbing</option>
        </select>
        <br>
        <span>Selected: {{ selected }}</span>
    <hr>
      <h3>Multi Select:</h3>
      <select v-model="multi_select" multiple>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <br>
      <span>Selected: {{ multi_select }}</span>
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
      value: 'user',
      checked: [],
      picked: '',
      selected: '',
      multi_select: []
    }
  },
  methods: {
  }
})
app.mount("#app")
