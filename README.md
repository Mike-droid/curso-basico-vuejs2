# Curso básico de Vue.js 2

## Introducción

### Qué aprenderás sobre Vue.js 2

[Qué es Vue.js](https://ed.team/comunidad/que-es-vue-js)

### El Framework Progresivo

- [Documentación de Vue.js 2](https://vuejs.org/)
- [Perfil de Vue en Github](https://github.com/vuejs)
- [Repositorio de Vue en Github](https://github.com/vuejs/vue)
- [Vue en NPM](https://www.npmjs.com/package/vue)

Vue no solamente es un framework, pues tiene un montón de herramientas, como [VueX](https://vuex.vuejs.org/) y [VueDevTools](https://chrome.google.com/webstore/detail/vuejs-devtools/).

Podemos usar Vue tanto para proyectos sencillos como para proyectos más complejos.

Vue usa el *sistema declarativo* y el *sistema de componentes* para crear su aplicación.

- El sistema declarativo nos permite manejar el DOM de manera declarativa.
- El sistema de componentes es lo que hace que podamos modularizar nuestra app con distintos componentes reutilizables.

### Hola Vue

[Sintaxis básica de Vue.js](https://ed.team/comunidad/sintaxis-basica-de-vue-js)

Ejemplo sencillo en Vue.js:

```html
<div id="app">
  <!--Nuestra app de vue se monta en el div-->
  <!--Todas las apps de Vue tienen 1 único elemento padre--->
  <h1>{{ title }}</h1>
</div>
```

```javascript
const app = new Vue({
  el: '#app', // Selector de css, aquí diremos en qué nodo montamos la app de Vue
  data () { //Función donde definimos las propiedades del template
    return {
      title: '¡Hola Vue!'
    }
  }
})
```

[Código en codepen](https://codepen.io/mike-droid/pen/vYeKmMV)

## Rendering Declarativo y Manipulación del DOM

### Introducción al Rendering Declarativo

Vue usa *2 way data binding* para que los datos se actualicen en el DOM.

- Vista -> HTML
- Estado -> JS

JS le dice al HTML cómo y cuando tiene que hacer render.

El usuario está en medio de ambos y entonces la vista le dice al estado que hay cambios, entonces el estado va a reaccionar y nuevamente actualizará la vista.

### Expresiones y Propiedades

Podemos usar expresiones en el template de nuestra app de Vue.js:

```html
<div id="app">
  <!--Nuestra app de vue se monta en el div-->
  <!--Todas las apps de Vue tienen 1 único elemento padre--->
  <h1>{{ title }}</h1>
  <p>{{ 1+1+1 }}</p>
  <p>{{ true || false }}</p>
  <p>{{ 'string'.toUpperCase() }}</p>
  <p>{{ JSON.stringify({name: 'Miguel'}) }}</p>
</div>
```

### Atributos Dinámicos

[Directivas de Vue.js](https://edteam-media.s3.amazonaws.com/infographics/original/2d4c6361-3141-4e9a-90e8-9ad2031d8939.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Primera Vue</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="app">
    <h1>{{ name }}</h1>
    <img v-bind:src="img" v-bind:alt="bitcoin">
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
  <script src="app.js"></script>
</body>
</html>
```

```javascript
new Vue({
  el: '#app',

  data() {
    return {
      name: 'Bitcoin',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png'
    }
  }
})
```

Con `v-bind` podemos usar algunas directivas de Vue.js.

### Control de Flujo con Directivas

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Primera Vue</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="app">
    <h1>
      {{ name }}
      <span v-if="changePercent > 0">🤑</span>
      <span v-else>🤯</span>

      <span v-show="changePercent === 0">✊</span>
    </h1>
    <img v-bind:src="img" v-bind:alt="bitcoin">
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
  <script src="app.js"></script>
</body>
</html>
```

```javascript
new Vue({
  el: '#app',

  data() {
    return {
      name: 'Bitcoin',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent: 10,
    }
  }
});

```

Usamos `v-if` y `v-else` para mostrar u ocultar elementos. También usamos `v-show`. La diferencia entre ambas es que la primera elimina o crea elementos en el DOM mientras que la segunda cambia la propiedad `display` del elemento.

En general, si nuestra información va a cambiar mucho, es mejor usar `v-show` para evitar menos mutaciones en el DOM. Si es algo más fijo, mejor usamos `v-if`.

### Renderizado de Listas

Podemos iterar sobre un array con `v-for`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Primera Vue</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="app">
    <img v-bind:src="img" v-bind:alt="Bitcoin">
    <h1>
      {{ name }}
      <span v-if="changePercent > 0">🤑</span>
      <span v-else>🤯</span>
    </h1>

    <ul>
      <li v-for="(p, index) in prices" v-bind:key="p">
        {{index}} - {{ p }}
      </li>
    </ul>

    <ul>
      <li v-for="(p, index) in pricesWithDays" v-bind:key="p.day">
        {{index}} - {{ p.day }} - {{ p.value }}
      </li>
    </ul>

  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
  <script src="app.js"></script>
</body>
</html>
```

```javascript
new Vue({
  el: '#app',

  data() {
    return {
      name: 'Bitcoin',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent: 10,
      prices: [8400, 7900, 8200, 9000, 9400, 10000, 10200],
      pricesWithDays: [
        { day: 'Lunes', value: 8400 },
        { day: 'Martes', value: 7900 },
        { day: 'Miercoles', value: 8200 },
        { day: 'Jueves', value: 9000 },
        { day: 'Viernes', value: 9400 },
        { day: 'Sabado', value: 10000 },
        { day: 'Domingo', value: 10200 },
      ]
    }
  }
});

```

### Manejo de eventos

[Vue.js 2 CheatSheet](https://marozed.com/vue-cheatsheet/)

Podemos hacer cambios en la UI con los eventos del DOM.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Primera Vue</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="app">

    <img
      v-on:mouseover="toggleShowPrices"
      v-on:mouseout="toggleShowPrices"
      v-bind:src="img"
      v-bind:alt="Bitcoin"
    >

    <h1>
      {{ name }}
      <span v-if="changePercent > 0">🤑</span>
      <span v-else>🤯</span>
      <button v-on:click="toggleShowPrices">
        {{ showPrices? '🙈' : '🐵' }}
      </button>
    </h1>

    <ul v-show="showPrices">
      <li v-for="(p, index) in pricesWithDays" v-bind:key="p.day">
        {{index}} - {{ p.day }} - {{ p.value }}
      </li>
    </ul>

  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
  <script src="app.js"></script>
</body>
</html>
```

```javascript
new Vue({
  el: '#app',

  data() {
    return {
      name: 'Bitcoin',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent: 10,
      pricesWithDays: [
        { day: 'Lunes', value: 8400 },
        { day: 'Martes', value: 7900 },
        { day: 'Miercoles', value: 8200 },
        { day: 'Jueves', value: 9000 },
        { day: 'Viernes', value: 9400 },
        { day: 'Sabado', value: 10000 },
        { day: 'Domingo', value: 10200 },
      ],
      showPrices: false,
    }
  },
  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices;
    }
  }
});

```

### Clases en tiempo real

Podemos usar condicionales para mostrar distintos estilos en la UI con las clases de CSS.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Primera Vue</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="app">

    <img
      v-on:mouseover="toggleShowPrices"
      v-on:mouseout="toggleShowPrices"
      v-bind:src="img"
      v-bind:alt="Bitcoin"
    >
    <h1
      v-bind:class="changePercent > 0 ? 'green' : 'red'">
      {{ name }}
      <span v-if="changePercent > 0">🤑</span>
      <span v-else>🤯</span>
      <button v-on:click="toggleShowPrices">
        {{ showPrices? '🙈' : '🐵' }}
      </button>
    </h1>

    <ul v-show="showPrices">
      <li
        class="uppercase"
        v-bind:class="{
          green: p.value > price,
          orange: p.value === price,
          red: p.value < price,
        }"
        v-for="(p, index) in pricesWithDays"
        v-bind:key="p.day">
        {{index}} - {{ p.day }} - {{ p.value }}
      </li>
    </ul>

  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
  <script src="app.js"></script>
</body>
</html>
```

```css
img {
  width: 100px;
}

.red {
  color: red;
}

.green {
  color: green;
}

.orange {
  color: orange;
}

.uppercase {
  text-transform: uppercase;
}

```

```javascript
new Vue({
  el: '#app',

  data() {
    return {
      name: 'Bitcoin',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent: 10,
      price: 8400,
      pricesWithDays: [
        { day: 'Lunes', value: 8400 },
        { day: 'Martes', value: 7900 },
        { day: 'Miercoles', value: 8200 },
        { day: 'Jueves', value: 9000 },
        { day: 'Viernes', value: 9400 },
        { day: 'Sabado', value: 10000 },
        { day: 'Domingo', value: 10200 },
      ],
      showPrices: false,
    }
  },
  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices;
    }
  }
});

```

### Estilos en tiempo real

Podemos cambiar estilos en tiempo real de forma sencilla:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Primera Vue</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div
    id="app"
    v-bind:style="{ background: '#' + color }">

    <img
      v-on:mouseover="toggleShowPrices"
      v-on:mouseout="toggleShowPrices"
      v-bind:src="img"
      v-bind:alt="Bitcoin"
    >
    <h1
      v-bind:class="changePercent > 0 ? 'green' : 'red'">
      {{ name }}
      <span v-if="changePercent > 0">🤑</span>
      <span v-else>🤯</span>
      <button v-on:click="toggleShowPrices">
        {{ showPrices? '🙈' : '🐵' }}
      </button>
    </h1>

    <ul v-show="showPrices">
      <li
        class="uppercase"
        v-bind:class="{
          green: p.value > price,
          orange: p.value === price,
          red: p.value < price,
        }"
        v-for="(p, index) in pricesWithDays"
        v-bind:key="p.day">
        {{index}} - {{ p.day }} - {{ p.value }}
      </li>
    </ul>

  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
  <script src="app.js"></script>
</body>
</html>
```

```javascript
new Vue({
  el: '#app',

  data() {
    return {
      name: 'Bitcoin',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent: 10,
      color: 'f4f4f4',
      price: 8400,
      pricesWithDays: [
        { day: 'Lunes', value: 8400 },
        { day: 'Martes', value: 7900 },
        { day: 'Miercoles', value: 8200 },
        { day: 'Jueves', value: 9000 },
        { day: 'Viernes', value: 9400 },
        { day: 'Sabado', value: 10000 },
        { day: 'Domingo', value: 10200 },
      ],
      showPrices: false,
    }
  },
  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices;

      this.color = this.color.split('').reverse().join(''); //* Tomamos el string del color y le damos la vuelta.
    }
  }
});

```

### Computed properties y watchers

Las propiedades computadas son propiedades que se calculan en tiempo real en base a los valores de otras propiedades.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Primera Vue</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div
    id="app"
    v-bind:style="{ background: '#' + color }">

    <img
      v-on:mouseover="toggleShowPrices"
      v-on:mouseout="toggleShowPrices"
      v-bind:src="img"
      v-bind:alt="Bitcoin"
    >
    <h1
      v-bind:class="changePercent > 0 ? 'green' : 'red'">
      {{ title }}
      <span v-if="changePercent > 0">🤑</span>
      <span v-else>🤯</span>
      <button v-on:click="toggleShowPrices">
        {{ showPrices? '🙈' : '🐵' }}
      </button>
    </h1>

    <ul v-show="showPrices">
      <li
        class="uppercase"
        v-bind:class="{
          green: p.value > price,
          orange: p.value === price,
          red: p.value < price,
        }"
        v-for="(p, index) in pricesWithDays"
        v-bind:key="p.day">
        {{index}} - {{ p.day }} - {{ p.value }}
      </li>
    </ul>

  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
  <script src="app.js"></script>
</body>
</html>
```

```javascript
new Vue({
  el: '#app',

  data() {
    return {
      name: 'Bitcoin',
      symbol: 'BTC',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent: 10,
      color: 'f4f4f4',
      price: 8400,
      pricesWithDays: [
        { day: 'Lunes', value: 8400 },
        { day: 'Martes', value: 7900 },
        { day: 'Miercoles', value: 8200 },
        { day: 'Jueves', value: 9000 },
        { day: 'Viernes', value: 9400 },
        { day: 'Sabado', value: 10000 },
        { day: 'Domingo', value: 10200 },
      ],
      showPrices: false,
    }
  },
  computed: { //*Propiedades computadas, son funciones que siempre devuelven un valor
    title () {
      return `${this.name} - ${this.symbol}`
    }
  },
  watch: { //* funciones donde el nombre tiene que corresponder con el nombre de la propiedad de data
    showPrices(oldValue, newValue) {
      console.log(oldValue, newValue)
    }
  },
  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices;

      this.color = this.color.split('').reverse().join(''); //* Tomamos el string del color y le damos la vuelta.
    }
  }
});

```

### Two-y Data Binding

Podemos linkear las cosas que escribe un usurio (por ejemplo con un input) con las propiedades de nuestra app.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Primera Vue</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div
    id="app"
    v-bind:style="{ background: '#' + color }">

    <img
      v-on:mouseover="toggleShowPrices"
      v-on:mouseout="toggleShowPrices"
      v-bind:src="img"
      v-bind:alt="Bitcoin"
    >
    <h1
      v-bind:class="changePercent > 0 ? 'green' : 'red'">
      {{ title }}
      <span v-if="changePercent > 0">🤑</span>
      <span v-else>🤯</span>
      <button v-on:click="toggleShowPrices">
        {{ showPrices? '🙈' : '🐵' }}
      </button>
    </h1>

    <input type="number" v-model="value">
    <span>{{ convertedValue }}</span>

    <ul v-show="showPrices">
      <li
        class="uppercase"
        v-bind:class="{
          green: p.value > price,
          orange: p.value === price,
          red: p.value < price,
        }"
        v-for="(p, index) in pricesWithDays"
        v-bind:key="p.day">
        {{index}} - {{ p.day }} - {{ p.value }}
      </li>
    </ul>

  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
  <script src="app.js"></script>
</body>
</html>
```

```javascript
new Vue({
  el: '#app',

  data() {
    return {
      name: 'Bitcoin',
      symbol: 'BTC',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent: 10,
      value: 0,
      color: 'f4f4f4',
      price: 8400,
      pricesWithDays: [
        { day: 'Lunes', value: 8400 },
        { day: 'Martes', value: 7900 },
        { day: 'Miercoles', value: 8200 },
        { day: 'Jueves', value: 9000 },
        { day: 'Viernes', value: 9400 },
        { day: 'Sabado', value: 10000 },
        { day: 'Domingo', value: 10200 },
      ],
      showPrices: false,
    }
  },
  computed: { //*Propiedades computadas, son funciones que siempre devuelven un valor
    title () {
      return `${this.name} - ${this.symbol}`
    },
    convertedValue () {
      if(!this.value){
        return 0
      }
      return this.value / this.price
    }
  },
  watch: { //* funciones donde el nombre tiene que corresponder con el nombre de la propiedad de data
    showPrices(oldValue, newValue) {
      console.log(oldValue, newValue)
    }
  },
  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices;

      this.color = this.color.split('').reverse().join(''); //* Tomamos el string del color y le damos la vuelta.
    }
  }
});

```

[Miniproyecto realizado con Vue.js en Codepen](https://codepen.io/mike-droid/pen/zYEKLgj)

## Sistema de componentes

### Sistema de componentes con Vue.js

Tenemos un componente principal 'root' y de ahí se crean los demás componentes.

La idea de los componentes es crear código HTML reutilizable y este código está personalizado.

### Crear componentes custom

Podemos crear componentes con 'Vue.component':

```html
<div id="app">
  <h1>{{title}}</h1>
  <counter></counter>
</div>
```

```javascript
Vue.component('counter', {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment() {
      this.counter += 1;
    }
  },
  template: `
      <div>
        <button v-on:click="increment">Click me!</button>
        <span>{{counter}}</span>
      </div>
    `
})

new Vue({
  el: "#app",
  data(){
    return {
      title: "Hola"
    }
  }
})
```

### Comunicación entre Componentes: propiedades

En el componente de Vue podemos poner como nombre 'coinDetail' y en el HTML usar el nombre 'coin-detail'.

El nombre de 'coin' dentro de props viene del componente padre, en el objeto 'btc'.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Primera Vue</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div
    id="app"
    v-bind:style="{ background: '#' + color }">

    <coin-detail
      v-bind:coin="btc"
    >
    </coin-detail>

  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
  <script src="app.js"></script>
</body>
</html>
```

```javascript
Vue.component('coinDetail', {
  props: ['coin'], //*Pertenecen al componente 'padre'
  data() {
    return {
      showPrices: false,
      value: 0,
    }
  },
  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices
    }
  },
  computed: {
    title () {
      return `${this.coin.name} - ${this.coin.symbol}`
    },

    convertedValue () {
      if(!this.value){
        return 0
      }
      return this.value / this.coin.price
    }
  },
  template: `
    <div>
      <img
        v-on:mouseover="toggleShowPrices"
        v-on:mouseout="toggleShowPrices"
        v-bind:src="coin.img"
        v-bind:alt="coin.name"
      >

      <h1
        v-bind:class="coin.changePercent > 0 ? 'green' : 'red'">
        {{ title }}
        <span v-if="coin.changePercent > 0">🤑</span>
        <span v-else>🤯</span>
        <button v-on:click="toggleShowPrices">
          {{ showPrices? '🙈' : '🐵' }}
        </button>
      </h1>

      <input type="number" v-model="value">
      <span>{{ convertedValue }}</span>

      <ul v-show="showPrices">
        <li
          class="uppercase"
          v-bind:class="{
            green: p.value > coin.price,
            orange: p.value === coin.price,
            red: p.value < coin.price,
          }"
          v-for="(p, index) in coin.pricesWithDays"
          v-bind:key="p.day">
          {{ index }} - {{ p.day }} - {{ p.value }}
        </li>
      </ul>
    </div>
  `
})

new Vue({
  el: '#app',

  data() {
    return {
      btc: {
        name: 'Bitcoin',
        symbol: 'BTC',
        img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        changePercent: 10,
        price: 8400,
        pricesWithDays: [
          { day: 'Lunes', value: 8400 },
          { day: 'Martes', value: 7900 },
          { day: 'Miercoles', value: 8200 },
          { day: 'Jueves', value: 9000 },
          { day: 'Viernes', value: 9400 },
          { day: 'Sabado', value: 10000 },
          { day: 'Domingo', value: 10200 },
        ],
      },
      color: 'f4f4f4',
    }
  },

  /* methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices;

      this.color = this.color.split('').reverse().join('');
    }
  } */
});
```

### Comunicación entre Componentes: eventos

Las propiedades que pertenecen al componente padre nunca deben ser actuliazadas por el componete hijo. El hijo debe notificar al padre con eventos.

Podemos decir que la comunicación de padre a hijo es a través de propiedades y de hijo a padre es a través de eventos.

[Eventos personalizados con $emit](https://es.vuejs.org/v2/guide/components-custom-events.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Primera Vue</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div
    id="app"
    v-bind:style="{ background: '#' + color }">

    <coin-detail
      v-on:change-color="updateColor"
      v-bind:coin="btc"
    >
    </coin-detail>

  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
  <script src="app.js"></script>
</body>
</html>
```

```javascript
Vue.component('coinDetail', {
  props: ['coin'], //*Pertenecen al componente 'padre'
  data() {
    return {
      showPrices: false,
      value: 0,
    }
  },
  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices

      this.$emit('change-color',
      this.showPrices ? 'FF96C8' : '3D3D3D') //*Segundo parametro es el color que tiene que utilizar el componente padre
    }
  },
  computed: {
    title () {
      return `${this.coin.name} - ${this.coin.symbol}`
    },

    convertedValue () {
      if(!this.value){
        return 0
      }
      return this.value / this.coin.price
    }
  },
  template: `
    <div>
      <img
        v-on:mouseover="toggleShowPrices"
        v-on:mouseout="toggleShowPrices"
        v-bind:src="coin.img"
        v-bind:alt="coin.name"
      >

      <h1
        v-bind:class="coin.changePercent > 0 ? 'green' : 'red'">
        {{ title }}
        <span v-if="coin.changePercent > 0">🤑</span>
        <span v-else>🤯</span>
        <button v-on:click="toggleShowPrices">
          {{ showPrices? '🙈' : '🐵' }}
        </button>
      </h1>

      <input type="number" v-model="value">
      <span>{{ convertedValue }}</span>

      <ul v-show="showPrices">
        <li
          class="uppercase"
          v-bind:class="{
            green: p.value > coin.price,
            orange: p.value === coin.price,
            red: p.value < coin.price,
          }"
          v-for="(p, index) in coin.pricesWithDays"
          v-bind:key="p.day">
          {{ index }} - {{ p.day }} - {{ p.value }}
        </li>
      </ul>
    </div>
  `
})

new Vue({
  el: '#app',

  data() {
    return {
      btc: {
        name: 'Bitcoin',
        symbol: 'BTC',
        img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        changePercent: 10,
        price: 8400,
        pricesWithDays: [
          { day: 'Lunes', value: 8400 },
          { day: 'Martes', value: 7900 },
          { day: 'Miercoles', value: 8200 },
          { day: 'Jueves', value: 9000 },
          { day: 'Viernes', value: 9400 },
          { day: 'Sabado', value: 10000 },
          { day: 'Domingo', value: 10200 },
        ],
      },
      color: 'f4f4f4',
    }
  },

  methods: {
    updateColor(color) {
      this.color = color || this.color.split('').reverse().join('');
    }
  }
});

```

### Slots

Los slots son una API de distribución de contenido que permite que los componentes padres le inyecten HTML a los componentes hijos.

Podemos usar cualquier HTML válido dentro de los slots.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Primera Vue</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div
    id="app"
    v-bind:style="{ background: '#' + color }">

    <coin-detail
      v-on:change-color="updateColor"
      v-bind:coin="btc"
      >
      <template v-slot:text>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam, rem voluptas reprehenderit sapiente eveniet adipisci laudantium illo eum, voluptates corporis eos. Vel neque est quos dignissimos autem pariatur saepe?
        </p>
      </template>
      <template v-slot:link>
        <a href="#">Link!</a>
      </template>
    </coin-detail>

  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
  <script src="app.js"></script>
</body>
</html>
```

```javascript
Vue.component('coinDetail', {
  props: ['coin'], //*Pertenecen al componente 'padre'
  data() {
    return {
      showPrices: false,
      value: 0,
    }
  },
  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices

      this.$emit('change-color',
      this.showPrices ? 'FF96C8' : '3D3D3D') //*Segundo parametro es el color que tiene que utilizar el componente padre
    }
  },
  computed: {
    title () {
      return `${this.coin.name} - ${this.coin.symbol}`
    },

    convertedValue () {
      if(!this.value){
        return 0
      }
      return this.value / this.coin.price
    }
  },
  template: `
    <div>
      <img
        v-on:mouseover="toggleShowPrices"
        v-on:mouseout="toggleShowPrices"
        v-bind:src="coin.img"
        v-bind:alt="coin.name"
      >

      <h1
        v-bind:class="coin.changePercent > 0 ? 'green' : 'red'">
        {{ title }}
        <span v-if="coin.changePercent > 0">🤑</span>
        <span v-else>🤯</span>
        <button v-on:click="toggleShowPrices">
          {{ showPrices? '🙈' : '🐵' }}
        </button>
      </h1>

      <input type="number" v-model="value">
      <span>{{ convertedValue }}</span>

      <slot name="text"></slot>
      <slot name="link"></slot>

      <ul v-show="showPrices">
        <li
          class="uppercase"
          v-bind:class="{
            green: p.value > coin.price,
            orange: p.value === coin.price,
            red: p.value < coin.price,
          }"
          v-for="(p, index) in coin.pricesWithDays"
          v-bind:key="p.day">
          {{ index }} - {{ p.day }} - {{ p.value }}
        </li>
      </ul>
    </div>
  `
})

new Vue({
  el: '#app',

  data() {
    return {
      btc: {
        name: 'Bitcoin',
        symbol: 'BTC',
        img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        changePercent: 10,
        price: 8400,
        pricesWithDays: [
          { day: 'Lunes', value: 8400 },
          { day: 'Martes', value: 7900 },
          { day: 'Miercoles', value: 8200 },
          { day: 'Jueves', value: 9000 },
          { day: 'Viernes', value: 9400 },
          { day: 'Sabado', value: 10000 },
          { day: 'Domingo', value: 10200 },
        ],
      },
      color: 'f4f4f4',
    }
  },

  methods: {
    updateColor(color) {
      this.color = color || this.color.split('').reverse().join('');
    }
  }
});

```

### Ciclo de Vida y Hooks

Podemos manejar los ciclos de vida con funciones.

[Hooks del Ciclo de vida de la instancia](https://es.vuejs.org/v2/guide/instance.html#Hooks-del-Ciclo-de-vida-de-la-Instancia)

```javascript
created() {
    console.log('Componente creado')
  },

  mounted() {
    console.log('Componente montado')
  },
```

### Repaso

[Vue Mastery](https://www.vuemastery.com/)

## Ambiente de desarrollo

### VS Code + Vetur / Chrome / Firefox + Dev Tools

### Qué es, cómo usarlo y aplicaciones profesionales con el CLI

Instalamos `npm install -g @vue/cli`

### Single File Components

### Funcionalidades, UI y comandos básicos

- `vue ui` crea una interfaz gráfica para manejar el proyecto desde el navegador.
- `npm i -g serve` & `serve -s build` nos permite crear un servidor para ver nuestro proyecto en producción.

## Platzi Exchange

### Introducción y Setup de Tailwind CSS

[Tailwind CSS](https://tailwindcss.com/)

Para este proyecto en particular, hacemos `vue add @ianaya/tailwind`

### Primeros componentes

Creamos los componentes y los mandamos a llamar en App.vue:

```vue
<template>
  <main>
    <PxHeader />
    <PxAssetsTable />
  </main>
</template>

<script>
import PxHeader from "./components/PxHeader";
import PxAssetsTable from "@/components/PxAssetsTable";

export default {
  name: "App",
  components: {
    PxHeader,
    PxAssetsTable,
  },
};
</script>

```

### Introducción y Setup de Vue Router

[Vue Router](https://router.vuejs.org/)

Haremos una single page application. El contenido del index cambiará dinámicamente.

Hacemos `npm i -S vue-router`

Creamos un archivo router.js en src y aquí tendremos las rutas de nuestro sitio web.

```javascript
import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import Error from "@/views/Error";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "*",
      name: "Error",
      component: Error,
    },
  ],
});

```

Las vistas las estamos creando en la carpeta views y simplemente las mandamos a llamar en el router de vue.

### Introducción a Fetch y API de Coincap

Usaremos [Coincap API](https://docs.coincap.io/)

Creamos el archivo api.js:

```javascript
const url = "https://api.coincap.io/v2";

const getAssets = async () => {
  try {
    const response = await fetch(`${url}/assets?limit=20`);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(`¡Ocurrió un error con el API!: ${error}`);
  }
};

export default {
  getAssets,
};

```

Modificamos Home.vue:

```vue
<template>
  <div>
    <PxAssetsTable :assets="assets" />
  </div>
</template>

<script>
import api from "@/api";
import PxAssetsTable from "@/components/PxAssetsTable";

export default {
  name: "Home",
  components: {
    PxAssetsTable,
  },
  data() {
    return {
      assets: [],
    };
  },
  created() {
    api.getAssets().then((assets) => (this.assets = assets));
  },
};
</script>

```

ModificamosPxAssetsTable.vue:

```vue
<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th></th>
        <th>
          <span>Ranking</span>
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden sm:block"></td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="asset in assets"
        :key="asset.id"
        class="border-b border-gray-200 hover:bg-orange-100"
      >
        <td>
          <img
            :src="`https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`"
            :alt="asset.name"
          />
        </td>
        <td>
          <b># {{ asset.rank }}</b>
        </td>
        <td>
          {{ asset.name }}
        </td>
        <td>
          {{ asset.priceUsd }}
        </td>
        <td>
          {{ asset.marketCapUsd }}
        </td>
        <td>{{ asset.changePercent24Hr }} %</td>
        <td class="hidden sm:block"></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "PxAssetsTable",

  props: {
    assets: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.up::before {
  content: "👆";
}

.down::before {
  content: "👇";
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>

```

### Mejorar la UI con filtros

Instalamos `npm i -s numeral`

Y creamos un archivo filter.js para poder mostrar la información numérica de mejor manera:

```javascript
import numeral from "numeral";

const dollarFilter = (value) => {
  return !value ? "$ 0" : numeral(value).format("($ 0.00a)");
};

const percentFilter = (value) => {
  return !value ? "0%" : `${Number(value).toFixed(2)}%`;
};

export { dollarFilter, percentFilter };

```

Lo mandamos a llamar en main.js:

```javascript
import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import router from "@/router";
import { dollarFilter, percentFilter } from "@/filters";

Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);
Vue.config.productionTip = false;

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");

```

Lo usamos en la tabla:

```vue
<tbody>
      <tr
        v-for="asset in assets"
        :key="asset.id"
        class="border-b border-gray-200 hover:bg-orange-100"
      >
        <td>
          <img
            class="w-6 h-6"
            :src="`https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`"
            :alt="asset.name"
          />
        </td>
        <td>
          <b># {{ asset.rank }}</b>
        </td>
        <td>
          {{ asset.name }}
        </td>
        <td>
          {{ asset.priceUsd | dollar }}
        </td>
        <td>
          {{ asset.marketCapUsd | dollar }}
        </td>
        <td
          :class="
            asset.changePercent24Hr.includes('-')
              ? 'text-red-600'
              : 'text-green-600'
          "
        >
          {{ asset.changePercent24Hr | percent }}
        </td>
        <td class="hidden sm:block"></td>
      </tr>
    </tbody>
```

### Rutas dinámicas

`$route` es una propiedad disponible en Vue Router

### Navegación programática

Creamos un botón PxButton.vue:

```vue
<template>
  <button
    @click="onClick"
    class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-2 border border-green-500 hover:border-transparent rounded"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "PxButton",
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

```

Modifico CoinDetail.vue:

```vue
<template>
  <div class="flex-col">
    <template>
      <div class="flex flex-col sm:flex-row justify-around items-center">
        <div class="flex flex-col items-center">
          <h1 class="text-5xl">
            {{ asset.name }}
            <small class="sm:mr-2 text-gray-500">{{ asset.symbol }}</small>
          </h1>
        </div>

        <div class="my-10 flex flex-col">
          <ul>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Ranking</b>
              <span>#{{ asset.rank }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio actual</b>
              <span>{{ asset.priceUsd | dollar }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio más bajo</b>
              <span>{{ min | dollar }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio más alto</b>
              <span>{{ max | dollar }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio Promedio</b>
              <span>{{ avg | dollar }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Variación 24hs</b>
              <span>{{ asset.changePercent24Hr | percent }}</span>
            </li>
          </ul>
        </div>

        <div class="my-10 sm:mt-0 flex flex-col justify-center text-center">
          <button
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Cambiar
          </button>

          <div class="flex flex-row my-5">
            <label class="w-full" for="convertValue">
              <input
                id="convertValue"
                type="number"
                class="text-center bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              />
            </label>
          </div>

          <span class="text-xl"></span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import api from "@/api";

export default {
  name: "CoinDetail",

  data() {
    return {
      asset: {},
      history: [],
    };
  },

  computed: {
    min() {
      return Math.min(
        ...this.history.map((h) => parseFloat(h.priceUsd).toFixed(2))
      );
    },

    max() {
      return Math.max(
        ...this.history.map((h) => parseFloat(h.priceUsd).toFixed(2))
      );
    },

    avg() {
      return (
        this.history.reduce((a, b) => a + parseFloat(b.priceUsd), 0) /
        this.history.length
      );
    },
  },

  created() {
    this.getCoin();
  },

  methods: {
    getCoin() {
      const id = this.$route.params.id;
      Promise.all([api.getAsset(id), api.getAssetHistory(id)]).then(
        ([asset, history]) => {
          this.asset = asset;
          this.history = history;
        }
      );
    },
  },
};
</script>

<style scoped>
td {
  padding: 10px;
  text-align: center;
}
</style>

```

**Importante**: Crear un archivo vue.config.js para evitar el problema CORS:

```javascript
module.exports = {
  devServer: {
    proxy: "https://api.coincap.io/v2/assets/",
  },
};

```

### Utilizar componentes de terceros

Para que funcione esto en Vue.js 2 necesitamos específicamente estas versiones:

Instalamos `npm i -S @saeris/vue-spinners vue-chartkick@0.6.1 chart.js@2.9`

Modificamos main.js:

```javascript
import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import router from "@/router";
import { dollarFilter, percentFilter } from "@/filters";
import Chartkick from "vue-chartkick";
import Chart from "chart.js";
import { VueSpinners } from "@saeris/vue-spinners";

Vue.use(VueSpinners);
Vue.use(Chartkick.use(Chart));
Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);
Vue.config.productionTip = false;

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");

```

Modificamos Home.vue:

```vue
<template>
  <div>
    <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
    <PxAssetsTable v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import api from "@/api";
import PxAssetsTable from "@/components/PxAssetsTable";

export default {
  name: "Home",
  components: {
    PxAssetsTable,
  },
  data() {
    return {
      isLoading: false,
      assets: [],
    };
  },
  created() {
    this.isLoading = true;
    api
      .getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => (this.isLoading = false));
  },
};
</script>

```

Modificamos CoinDetail.vue:

```vue
<template>
  <div class="flex-col">
    <div class="flex justify-center">
      <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
    </div>
    <template v-if="!isLoading">
      <div class="flex flex-col sm:flex-row justify-around items-center">
        <div class="flex flex-col items-center">
          <h1 class="text-5xl">
            {{ asset.name }}
            <small class="sm:mr-2 text-gray-500">{{ asset.symbol }}</small>
          </h1>
        </div>

        <div class="my-10 flex flex-col">
          <ul>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Ranking</b>
              <span>#{{ asset.rank }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio actual</b>
              <span>{{ asset.priceUsd | dollar }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio más bajo</b>
              <span>{{ min | dollar }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio más alto</b>
              <span>{{ max | dollar }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio Promedio</b>
              <span>{{ avg | dollar }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Variación 24hs</b>
              <span>{{ asset.changePercent24Hr | percent }}</span>
            </li>
          </ul>
        </div>

        <div class="my-10 sm:mt-0 flex flex-col justify-center text-center">
          <button
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Cambiar
          </button>

          <div class="flex flex-row my-5">
            <label class="w-full" for="convertValue">
              <input
                id="convertValue"
                type="number"
                class="text-center bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              />
            </label>
          </div>

          <span class="text-xl"></span>
        </div>
      </div>
      <line-chart
        class="my-10"
        :colors="['orange']"
        :min="min"
        :max="max"
        :data="history.map((h) => [h.date, parseFloat(h.priceUsd).toFixed(2)])"
      />
    </template>
  </div>
</template>

<script>
import api from "@/api";

export default {
  name: "CoinDetail",

  data() {
    return {
      asset: {},
      history: [],
      isLoading: true,
    };
  },

  computed: {
    min() {
      return Math.min(
        ...this.history.map((h) => parseFloat(h.priceUsd).toFixed(2))
      );
    },

    max() {
      return Math.max(
        ...this.history.map((h) => parseFloat(h.priceUsd).toFixed(2))
      );
    },

    avg() {
      return (
        this.history.reduce((a, b) => a + parseFloat(b.priceUsd), 0) /
        this.history.length
      );
    },
  },

  created() {
    this.getCoin();
  },

  methods: {
    getCoin() {
      const id = this.$route.params.id;
      Promise.all([api.getAsset(id), api.getAssetHistory(id)])
        .then(([asset, history]) => {
          this.asset = asset;
          this.history = history;
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>

<style scoped>
td {
  padding: 10px;
  text-align: center;
}
</style>

```

### Problemas de Reactividad

Modificamos api.js:

```javascript
const url = "https://api.coincap.io/v2";

const getAssets = async () => {
  try {
    const response = await fetch(`${url}/assets?limit=20`);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(`¡Ocurrió un error con el API!: ${error}`);
  }
};

const getAsset = async (coin) => {
  try {
    const response = await fetch(`${url}/assets?/${coin}`);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(`¡Ocurrió un error con el API!: ${error}`);
  }
};

const getAssetHistory = async (coin) => {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();
  try {
    const response = await fetch(
      `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
    );
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(`¡Ocurrió un error con el API!: ${error}`);
  }
};

const getMarkets = async (coin) => {
  try {
    const response = await fetch(`${url}/assets/${coin}/markets?limit=5`);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(`¡Ocurrió un error con el API!: ${error}`);
  }
};

const getExchange = async (id) => {
  try {
    const response = await fetch(`${url}/exchanges/${id}`);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(`¡Ocurrió un error con el API!: ${error}`);
  }
};

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange,
};

```

Modificamos PxButton.vue:

```vue
<template>
  <button
    @click="onClick"
    class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-2 border border-green-500 hover:border-transparent rounded"
  >
    <beat-loader :loading="isLoading" :color="'#68d391'" :size="8" />
    <slot v-show="isLoading"></slot>
  </button>
</template>

<script>
export default {
  name: "PxButton",
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

```

Modificamos CoinDetail.vue:

```vue
<template>
  <div class="flex-col">
    <div class="flex justify-center">
      <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
    </div>
    <template v-if="!isLoading">
      <div class="flex flex-col sm:flex-row justify-around items-center">
        <div class="flex flex-col items-center">
          <h1 class="text-5xl">
            {{ asset.name }}
            <small class="sm:mr-2 text-gray-500">{{ asset.symbol }}</small>
          </h1>
        </div>

        <div class="my-10 flex flex-col">
          <ul>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Ranking</b>
              <span>#{{ asset.rank }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio actual</b>
              <span>{{ asset.priceUsd | dollar }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio más bajo</b>
              <span>{{ min | dollar }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio más alto</b>
              <span>{{ max | dollar }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio Promedio</b>
              <span>{{ avg | dollar }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Variación 24hs</b>
              <span>{{ asset.changePercent24Hr | percent }}</span>
            </li>
          </ul>
        </div>

        <div class="my-10 sm:mt-0 flex flex-col justify-center text-center">
          <button
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Cambiar
          </button>

          <div class="flex flex-row my-5">
            <label class="w-full" for="convertValue">
              <input
                id="convertValue"
                type="number"
                class="text-center bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              />
            </label>
          </div>

          <span class="text-xl"></span>
        </div>
      </div>
      <line-chart
        class="my-10"
        :colors="['orange']"
        :min="min"
        :max="max"
        :data="history.map((h) => [h.date, parseFloat(h.priceUsd).toFixed(2)])"
      />

      <h3 class="text-xl my-10">Mejores Ofertas de Cambio</h3>
      <table>
        <tr
          v-for="market in markets"
          :key="`${market.exchangeId}-${market.priceUsd}`"
          class="border-b"
        >
          <td>
            <b>{{ market.exchangeId }}</b>
          </td>
          <td>
            {{ market.priceUsd | dollar }}
          </td>
          <td>{{ market.baseSymbol }} / {{ market.quoteSymbol }}</td>
          <td>
            <PxButton
              :is-loading="market.isLoading || false"
              v-if="!market.url"
              @click="getWebsite(market)"
            >
              <slot>Obtener link</slot>
            </PxButton>
            <a v-else class="hover:underline text-green-600" target="_blanck">
              {{ market.url }}
            </a>
          </td>
        </tr>
      </table>
    </template>
  </div>
</template>

<script>
import PxButton from "@/components/PxButton";
import api from "@/api";

export default {
  name: "CoinDetail",

  components: { PxButton },

  data() {
    return {
      asset: {},
      history: [],
      markets: [],
      isLoading: true,
    };
  },
  computed: {
    min() {
      return Math.min(
        ...this.history.map((h) => parseFloat(h.priceUsd).toFixed(2))
      );
    },
    max() {
      return Math.max(
        ...this.history.map((h) => parseFloat(h.priceUsd).toFixed(2))
      );
    },
    avg() {
      return (
        this.history.reduce((a, b) => a + parseFloat(b.priceUsd), 0) /
        this.history.length
      );
    },
  },
  created() {
    this.getCoin();
  },
  methods: {
    getCoin() {
      const id = this.$route.params.id;
      Promise.all([
        api.getAsset(id),
        api.getAssetHistory(id),
        api.getMarkets(id),
      ])
        .then(([asset, history, markets]) => {
          this.asset = asset;
          this.history = history;
          this.markets = markets;
        })
        .finally(() => (this.isLoading = false));
    },

    getWebsite(exchange) {
      this.$set(exchange, "isLoading", true);
      return api
        .getExchange(exchange.exchangeId)
        .then((res) => {
          this.$set(exchange, "url", res.exchangeUrl);
        })
        .finally(() => (exchange.isLoading = false));
    },
  },
};
</script>

<style scoped>
td {
  padding: 10px;
  text-align: center;
}
</style>

```

### Mejorar proyecto: filtros

Actualizamos la PxAssetsTable.vue:

```vue
<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th></th>
        <th :class="{ up: this.sortOrder === 1, down: this.sortOrder === -1 }">
          <span class="underline cursor-pointer" @click="changeSortOrder">
            Ranking
          </span>
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden sm:block">
          <input
            class="bg-gray-100 focus:outline-none border-b border-gray-400 py-2 px-4 block w-full appearance-none leading-normal"
            id="filter"
            placeholder="Buscar..."
            type="text"
            v-model="filter"
          />
        </td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="asset in filteredAssets"
        :key="asset.id"
        class="border-b border-gray-200 hover:bg-orange-100"
      >
        <td>
          <img
            class="w-6 h-6"
            :src="`https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`"
            :alt="asset.name"
          />
        </td>
        <td>
          <b># {{ asset.rank }}</b>
        </td>
        <td>
          <router-link
            :to="{ name: 'coin-detail', params: { id: asset.id } }"
            class="hover:underline text-green-600"
          >
            {{ asset.name }}
          </router-link>
          <small class="ml-1 text-gray-500">
            {{ asset.symbol }}
          </small>
        </td>
        <td>
          {{ asset.priceUsd | dollar }}
        </td>
        <td>
          {{ asset.marketCapUsd | dollar }}
        </td>
        <td
          :class="
            asset.changePercent24Hr.includes('-')
              ? 'text-red-600'
              : 'text-green-600'
          "
        >
          {{ asset.changePercent24Hr | percent }}
        </td>
        <td class="hidden sm:block">
          <PxButton @click="goToCoin(asset.id)">
            <span>Detalle</span>
          </PxButton>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import PxButton from "@/components/PxButton";
export default {
  name: "PxAssetsTable",
  components: {
    PxButton,
  },

  data() {
    return {
      filter: "",
      sortOrder: 1,
    };
  },

  computed: {
    filteredAssets() {
      const altOrder = this.sortOrder === 1 ? -1 : 1;

      return this.assets.filter((asset) => {
        asset.symbol.toLowerCase().includes(this.filter.toLowerCase()) ||
          asset.name
            .toLowerCase()
            .includes(this.filter.toLowerCase())
            .sort((a, b) => {
              if (parseInt(a.rank) > parseInt(b.rank)) {
                return this.sortOrder;
              }
              return altOrder;
            });
      });
    },
  },

  props: {
    assets: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    goToCoin(id) {
      this.$router.push({ name: "coin-detail", params: { id } });
    },
    changeSortOrder() {
      this.sortOrder = this.sortOrder === 1 ? -1 : 1;
    },
  },
};
</script>

<style scoped>
.up::before {
  content: "👆";
}

.down::before {
  content: "👇";
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>

```

### Mejorar proyecto: links y conversión
