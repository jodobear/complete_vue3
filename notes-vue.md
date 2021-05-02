# Vue Meta Notes

## Directives

- `v-on:click` = `@click` others: `mouseover`,

- `v-show`: will render the node but set `style="display": none`, e.g. use in animations.

- `v-if`: will completely remove the node from the DOM. syntax: `<div v-if="isEven()">`

- `v-else`

- `v-for`

- `v-bind:<html attribute>="<obj>"` = `:<html attribute>="<obj>"`: used to bind objects in `data`, `methods` or `computed` to html attributes.

- `v-model`: achieves two-way binding, kind of shorthand for listener `v-on` & `v-bind` between DOM & `data`. On the fly updating the DOM.

## Lifecycle Hooks

- `created()`: creates the DOM element in memory but doesn't mount it on the DOM. Vite, because hot-reloads without re-rendering anything for performance reasons, actually creates the element. But, on refreshing the page, the element would be null. Good way to fetch data. This is good for development, but not for production because the element is not going to exist nor for low level DOM manipulation. Here we use it to fetch our data.

- `mounted()`: mounts an element in the DOM. Good for low level DOM manipulation and when you actually need to use the element.