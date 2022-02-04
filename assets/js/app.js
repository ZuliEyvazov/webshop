let app = new Vue({
    el: '#app',
    data:{
        inventory: 100,
        cart: 0
        
        },
        

    
    methods: {
        showCart() {
            console.log("hierismycart");
            $('.cart').toggle({
                direction: 'right',
            })
        },

        addToCart() {
            this.cart +=1
        }


            



    }            
        
})

  