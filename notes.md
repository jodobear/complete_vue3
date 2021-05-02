# Vuejs Fundamentals

## ERRATA & NOTE

Re-recorded course with vite 2x

~~At the time of recording, the version of Vite was 1.x. As of Jan 2021, Vite 2.x has been released which has some breaking changes.~~

~~I will re-record the course periodically to keep it up to date, but until then please run `yarn add vite@1.0.0-rc.13` when installing Vite to ensure things work correctly.~~

## Tooling

- Vite: dev env, uses ES modules from Nodejs & has hot reload.

## Vue Parts

- Essentials
- Options API
- Composition API
- Vue Router
- Vuex

## Vue Directives

- `v-on:click` = `@click` others: `mouseover`,

- `v-show`: will render the node but set `style="display": none`, e.g. use in animations.

- `v-if`: will completely remove the node from the DOM. syntax: `<div v-if="isEven()">` the parenthesis is important here.

- `v-else`

- `v-for`

- `v-bind:<html attribute>="<obj>"` = `:<html attribute>="<obj>"`: used to bind objects in `data`, `methods` or `computed` to html attributes.

- `v-model`: achieves two-way binding, kind of shorthand for listener `v-on` & `v-bind` between DOM & `data`. On the fly updating the DOM.

## Introduction

### Basics

- `<script type="module" src="./index.js">`: `type="module"` is important else error: `Cannot use import statement outside a module`.

- `createApp(App).mount('#app')`: createApp(<component>).mount('<location>')

- `data()` has to return values.

- `Hello {{ msg }}`: `{{ msg }}` interpolation symbol. The `app` will render the var `msg` as described in `data()` where it is mounted in the html element.

- Moved `data` & `template` to `index.js`. `template` holds all the DOM elements.

- If `<button @click="increment()">` `increment` function isn't going to take any args, you don't need the parenthesis as Vue knows it's a function if defined in `methods`.

- Vue uses `SFC: Single File Component` so we also include our styles with `data` & `template`.

- **Options API:** The component `app` is using options `template` & `data` this is the classic way of building components using `Options API`.

- `this.`: to use any object described in `data` by `methods` option.

- `methods`: where you define functions.

- `window.app = app` will bind the app to the browser window. Then you can use the app in the console in the browser e.g. `window.app.increment()` will call the function `increment`. This uses Vue's  reactivity system i.e. all we need to do is update the `data` and as everything in `data` is reactive, Vue will update the DOM automatically. This is data-driven UI.

- **Vue directives** are basically control-flow statements.

- **Computed properties** are functions that take no arguments. Vue is able to track the dependencies and update the DOM based on the computed properties. Can they be thought of as lambda functions?

- Class bindings using `v-bind` or `:`.

#### Form Validation I

- Two-way binding: `:value="value"` and defining `value: '<default_value>'` variable in data.

- If you don't provide an argument to a function passed to a html attribute, then the first arg is native js event called `$evt` by convention.

- `<input @input="handleInput()" />` produces `undefined` on `console.log($evt)` even with `return` while `<input @input="handleInput" />` logs the event to the console properly. `handleInput` without `()` it gives us the native js event as the value.

- `$evt` gives us all the information regarding the event. So, you can access the value of the event for e.g. using `$evt.target.value`. Very useful.

#### `v-model`

- `<input @input="handleInput" :value="value" />` we listen for the input event and bind it's value to the variable `value` in data, this way we keep the state out of our DOM and in our `data` function.

- By rendering the `{{ value }}` here we did two-way binding; we listen for DOM event `input` send it's value to be stored in `data` and render it from `data` into `{{ value }}`.

- This is extremely common esp. with inputs, enter `v-model`:

```html
<input @input="input" :value="value" /> = <input v-model="value" />
```

- `v-model` is a shorthand for `input` listener & `value` attribute or rather any custom attribute.

-  If works with any kind of values as demonstrated in the code.

#### Components

- create a component then to use it in another component add `components: {}` to that component and use it as a custom html tag e.g. `<hello />` or `<Hello />`.

- **Props**: Properties are how you can pass data from **parent -> child** components. In `<num :number="n" />`, `:number` is the prop which should match the `props` in the component `Num`, `n` is the value it receives from the parent component(`app`). You define `props` that you are going to receive in child component:

```vue
<script>
export default {
  props: {
    number: {
      type: Number
    }
  }
}
</script>
```

- `<num v-for="n in numbers" :number="n" />` you can use `v-for` in custom components.

- **`$emit`**: To send data from child to parent use `$emit`. You emit event `chosen` which you listen for in parent component as `@chosen` and then define methods as req. You can send simple data `this.number` or payload `{ number: this.number}`.

## Proj 01 - Form Validation

- `<style scoped>` will only apply styles to the component within which it is defined.

- `data() {}` is to be defined within `export default {}`.

### SFC - Single File Component

```vue
// binding style (style) to props with same name variables, we can just mention it once
// binding class (:class) `disabled-button` to `disabled` prop
// the reason to do it like this instead of as in style is because:
// this way we can have multiple styles of button with one component definition.
// Each class can have different stylings all exported with their dedicated props.
<template>
  <button
    :style="{ background, color }"
    :class="{ 'disabled-button': disabled }"
  >
  <!--
    Since { background: background, color: color }
    i.e. key: var is the same we can only provide the var.
  -->
    Button
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String
    },
    background: {
      type: String
    },
    disabled: {
      type: Boolean
    }
  }
}
</script>

<style scoped>
button {
  color: #000;
  background: red;
  border: none;
  border-radius: 5px;
  padding: 10px 40px;
  font: caption;
  cursor: pointer;
}
button:hover {
  filter: brightness(125%);
}
.disabled-button {
  opacity: 0.5;
}
</style>
```

- `:for` & `:id` are bound to the `name` prop so when the `label` is clicked the element that's bound with it will be highlighted - very good for accessibility & UX.
```vue
<template>
  <div>
    <label :for="name">{{ name }}</label>
    <input
      :id="name"
      type="text"
    />
  </div>
</template>
```

- `v-model="value"` in `input` to store the value of input in `data`
- `:rules="{ required: true, min: 3}` rules prop returning object. Values are accessed using json syntax.

**GENERAL NOTE:** Use `class` to your advantage to segregate concerns so that you can customize them as you want.

### Child -> Parent

- The way the app stands rn is not suitable to validate the entire form i.e. if both fields match requirements, enable the button. So, we move the `value` from `data()` in `MyInput` to `App` passed as a prop.

- Now at this stage this won't work because we only have one way communication going from App(Parent) -> MyInput(Child). Implementing now using `$emit` as update in the code. We listen for the `@input` event & use `handleInput` method with the `$evt` as it's first argument to `$emit` the event `update` with `payload`.

### Full Form Validation

- We also need to pass the `valid` state to the parent. To do that we pass `valid` as another key in the payload and create a `validate` method moving the logic from `error` computed property as we need to pass an argument.

- Then to validate the entire form, we just created a computed property `valid` returning `&&` of both removing it from `data`.. and viola!

- We added a `placeholder` & another prop `type` to make hide password characters.

### Event Modifiers: Submitting the Form

`@submit.prevent` = `$evt.preventDefault()` is very common when you don't want the page to refresh after the `@submit` event which is it's default action.

## Proj 2: Pokemon Evolutions

Project init: dir structure & basic component styling

### Fetching Data: async/await

For now we have a button to trigger the api call to fetch data.

- **`async`:** makes a function return a promise
- **`await`:** makes js wait until that promise settles & returns its result - only works inside async.
- `window.fetch()` will fetch data from the endpoint
- we need to convert the returned `blob` from `fetch` to json(`.json()`) to start working with it.
- To fetch multiple endpoints, use `Promise.all`, naturally we `await` for all of them to return, then map over the response.

### Lifecycle Hooks

- `created()`: creates the DOM element in memory but doesn't mount it on the DOM. Vite, because hot-reloads without re-rendering anything for performance reasons, actually creates the element. But, on refreshing the page, the element would be null. Good way to fetch data. This is good for development, but not for production because the element is not going to exist nor for low level DOM manipulation. Here we use it to fetch our data.

- `mounted()`: mounts an element in the DOM. Good for low level DOM manipulation and when you actually need to use the element.

### Fetching Data: automatically `created()`

- Used `created()` lifecycle hook to call function `fetchData()` to make the api call automatically.
- Saved response in `this.starters` since `starters` is defined in `data()` as how we refer any object in `data()`.
- Looped over `starters` in `template` to render all the cards.
- Created card wrapper `<div class="cards">` and set `display: flex` to align them horizontally.
- Set `img` width to 100% to contain it within its `div`.

### `<slot />`

The `Card` component as of now isn't very reusable, we need to have a `title`, an `image` & `type` and needs a `starter` prop. This is where slots come into picture.

Now, after implementing `slot` our `Card` component is reusable and we don't even need the prop as all the data is contained where the `Card` is used. Within each slot `template` we can have whatever elements we want e.g. a button.

### Dependency Injection

- ids -> STARTER_IDS
- Pokemon 1 has evolutions 2 & 3 and so on..
- Made `created` an async function and assigned it to `starters` in `data`.
- `fetchData` takes in an arg instead of hard coding `ids` so as to be reused. This is **dependency injection** - passing dynamic data as function arguments. It now returns data instead of hard coding return value to `starters`. Added `id` to data object.
- Created `fetchEvolutions` using `fetchData` and is assigned to `this.evolutions`
- Created a new `div#cards` to render evolutions.

### Static & Dynamic Classes

```html
<card
:class="{ opace: selectedId && starter.id !== selectedId }"
class="card"
>
```
`:class` is a dynamic class i.e. a class applied through logic & `class` is a static class that is appended to the element after the dynamic class no matter what. You can chain many such classes. Here `class` is appended to the unselected card on hover.

### Refactoring PokemonCards

- Separating business logic & moving UI logic to PokemonCards, for which had to receive props `pokemons` and `selectedId` (for styling)
- Adding `handleClick` to `emit` event `pokemonClicked` with payload `pokemon` that is caught by `pokemon-cards` in `App.vue` triggering `fetchEvolutions` which gets the payload `pokemon`