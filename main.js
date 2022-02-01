var eventBus = new Vue()

Vue.component(  'product-item',
{
  props : {
    article: Object,
  },

  methods: {
     emitAddToCart(id) {
          console.info("event add_to_card a été emit" + id)
          eventBus.$emit("add_to_card",  id)
      },

      emitDelToCart() {

          this.cart = this.cart > 0 ?  this.cart - 1 : 0
      },
      emitUpdateProduct(img) {
          //console.info("image avant " + this.image)

          this.image = img
          //console.info("image " + img)
      }
  },

  data : function(){
    return {
        selectedArt  : this.selectedArt,
        image : this.image,
        cart : this.cart,
        id : this.id
          }
  },


  template : "#prod_template"
})

var app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        product:[
           {
              id : 1001,
              selectedArt : false,
              name : "Socks",
              description: "A article.pair of warm,fuzzy socks",
              image: "./assets/vmSocks-green-onWhite.jpg",
              link: "https://www.google.com",
              onSale: true,
              inStock: false,
              inventory: 99 ,
              details: [ '80% cottun', '20% polyester', 'Gender-neutral' ],
              variants: [
                  {
                      variantId: 2234,
                      variantColor: "green",
                      variantImage: './assets/vmSocks-green-onWhite.jpg'
                  },
                  {
                      variantId: 2235,
                      variantColor: "blue",
                      variantImage: './assets/vmSocks-blue-onWhite.jpg'
                  }]
            },

          {
             id : 1002,
             selectedArt : false,
             name : "Baskets",
             description: "A adidas-originals-baskets-superstar-garcon-cuir",
             image: "./assets/adidas-originals-baskets-superstar-garcon-cuir.jpg",
             link: "https://www.google.com",
             onSale: true,
             inStock: false,
             inventory: 99 ,
             details: [ '80% cuir', '20% polyester' ],
             variants: [
                 {
                     variantId: 1178,
                     variantColor: "black",
                     variantImage: './assets/chaussures-adidas-originals-chaussures-skate-adidas-originals-core-black.jpg'
                 },
                 {
                     variantId: 1179,
                     variantColor: "white",
                     variantImage: './assets/adidas-originals-baskets-superstar-garcon-cuir.jpg'
                 }
             ]

             }
           ],

         // panier cart
           cart: [],
           show_cart :false,
         },  // fin data

    methods: {

        delToCart() {

            this.cart = this.cart > 0 ?  this.cart - 1 : 0
        },
        updateProduct(img) {
            this.image = img
        }
    },

    mounted : function(id){
      eventBus.$on('add_to_card', id => { this.cart.push(id)   , console.info("event add_to_card a été reçu " + id)} )

      //eventBus.$on('add_to_card',  () => { this.dict_ofs[v_id].statut = v_statut })
    },
});
