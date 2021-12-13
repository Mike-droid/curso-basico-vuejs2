Vue.component('modal', {
  props: ['parent'],
  template: `
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <h3>{{ title }}</h3>
          <slot name="modalbody"></slot>
          <footer>
            <button v-on:click="close">Cerrar</button>
          </footer>
        </div>
      </div>
    </div>`,
    data() {
      return {
        title: this.parent.title,
      }
    },
    methods: {
      close() {
        this.$emit('close')
      }
    }
  })

new Vue({
  el: '#app',
  data() {
    return {
      parent: {
        title: 'Este es el título del modal',
        body: 'Este es el cuerpo del modal',
      },
      showModal: true,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  }
})