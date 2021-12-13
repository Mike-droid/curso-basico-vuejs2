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
