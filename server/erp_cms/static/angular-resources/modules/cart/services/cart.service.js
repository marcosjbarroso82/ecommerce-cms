(function () {
    'use strict';

    angular
        .module('cart.services')
        .factory('Cart', Cart);

    Cart.$inject = ['$http'];

    function Cart($http) {
        window.endpoint = '/api/public/v1/';
        var cart = {}; //This var save public cart
        var _cart = {}; // This var save private cart
        var Cart = {
			cart: cart,
			create: create,
			create_order: create_order,
			add_item: add_item,
			remove_item: remove_item,
            reset: reset
        };

        init();

        function init() {
            if(window.localStorage.getItem('cart')) {
                cart['data'] = JSON.parse(window.localStorage.getItem('cart'));
                update_cart(cart['data']);
            } else {
                create();
            }
        }

        function _calculate_total(){
            cart['data']['total'] = 0;
            for(var i=0; i < cart.data.items.length; i++){
                    if(!cart.data.items[i].sub_total){
                        cart.data.items[i].sub_total = cart.data.items[i].quantity * cart.data.items[i].price;
                    }
                    cart['data']['total'] += cart.data.items[i].sub_total;
                }
        }

        function _update_cart(cart){
            return $http.post(window.endpoint + 'cart', cart);
        }


        function _save_cart(cart_data){
            _calculate_total();
            _cart = angular.copy(cart);
            window.localStorage.setItem('cart', JSON.stringify(cart_data));
        }

        function _create(){
            return $http.get(window.endpoint + 'cart');
        }

        function successCartService(data){
            cart['data'] = data['data'];
            _save_cart(cart['data']);
        }


        function create() {
            return _create().then(successCartService, function (data){
                toastr.error("Ha ocurrido un problema. Vuelve a cargar la página!");
            });
        }

        function update_cart(cart_data){
            _update_cart(cart_data).then(successCartService, function (data){
                toastr.error("Ha ocurrido un problema. Vuelve a cargar la página!");
            });
        }



        function create_order(send_cart){
            return $http.post(window.endpoint + 'cart/create_order',cart['data']);
        }

        function reset(){
            _create().then(function (new_cart){
                    cart['data'] = new_cart['data'];
                    _save_cart(cart['data']);
            });
        }

        function add_item(item){
            var temp_cart = angular.copy(cart['data']);
            temp_cart.items.push(item);

            return _update_cart(temp_cart).then(function (data){
                cart['data'] = data['data'];
                _save_cart(cart['data']);
                if(Cart.cart.data.messages.length == 0){
                    toastr.success("Se ha agregado el producto a tu carrito");
                }else{
                    show_cart_messages();
                }
                display_cart();

            }, function (data){
                toastr.error("No se ha podido agregar el producto a tu carrito!");
            });
        }

        function remove_item(item){
            cart.data.items.splice(cart.data.items.indexOf(item), 1);
            _save_cart(cart['data']);
        }

        function show_cart_messages(){
            if (Cart.cart.data.messages){
                for (var i=0; i < Cart.cart.data.messages.length; i++) {
                    toastr.warning(Cart.cart.data.messages[i]);
                }
            }
        }

        return Cart;
    }
})();