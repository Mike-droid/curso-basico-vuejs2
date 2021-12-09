# Curso básico de Vue.js 2

## Introducción

### Qué aprenderás sobre Vue.js 2

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
