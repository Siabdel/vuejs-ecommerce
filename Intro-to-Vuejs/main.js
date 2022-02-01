var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        description: "A pair of warm,fuzzy socks",
        image: "./assets/vmSocks-green-onWhite.jpg",
        link: "https://www.google.com",
        onSale: true,
        inStock: false,
        inventory: 8,
        details: [
            '80% cottun',
            '20% polyester',
            'Gender-neutral'
        ],
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
            }
        ],
        cart: 0
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        delToCart() {
            
            this.cart = this.cart > 0 ?  this.cart - 1 : 0
        },
        updateProduct(img) {
            this.image = img
        }
    }
});