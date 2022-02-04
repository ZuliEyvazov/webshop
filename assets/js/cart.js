Vue.component('cd-cart', {
    data: function () {
        return {

        }
    },

    props: {

    },

    methods: {
        closeShoppingCart() {
            $('.layer').fadeOut();
            $('.cart').fadeOut();
        },
    },

    template: `<div class="cart" @click="closeShoppingCart">
        
        </div>`,
})