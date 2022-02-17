let app = new Vue({
    el: '#app',
    data:{
        inventory: 100,
        cart: 0,
        details: ["Men","Organic","Delivery:22-02-22 -28-02-22(Standaard)","Brand:Stanley & Stella","100% cotton"]
        
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

  