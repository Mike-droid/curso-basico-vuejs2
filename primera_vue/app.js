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
