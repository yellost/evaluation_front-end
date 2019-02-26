//------------------AXIOS & VUE-------------------//
new Vue({
    el: "#app",
    data: {
      travelList: [],
      filterID: "",
      multiplier: 0,
      cartPrice: 0,
      cart: []
    },
    created() {
      axios.get("https://wt-4abc83e5c2056740a9e00a6e0975a49a-0.sandbox.auth0-extend.com/city-trip")
        .then(response => {
          this.travelList = response.data;
          
        })
    },
    computed: {
        totalPrice: function() {
            return this.cartPrice*this.multiplier;
        }
    },
    methods: {
        setFilterID(element) {
            this.filterID = element.target.id;
            this.cartPrice = 0;
            this.multiplier = 0;
            this.cart = [];
        },
        setMultiplier(element) {
            this.multiplier = element.target.value;
            if (this.multiplier == 0) {
                this.cart = []
            }
            
        },
        increaseAmount(element) {
            this.cartPrice += parseInt(element.target.dataset.price);
            this.cart.push(element.target.dataset.name);
        }
    }
})