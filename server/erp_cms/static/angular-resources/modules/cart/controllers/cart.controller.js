(function () {
    'use strict';

    angular
        .module('cart.controllers')
        .controller('CartCtrl', CartCtrl);

    CartCtrl.$inject = ['Cart'];

    /**
     * @namespace CartCtrl
     */
    function CartCtrl(Cart) {
        var vm = this;
        vm.cart = Cart.cart;

        // Initialize Controller
        activate();

        function activate(){
            console.log("CartCtrl activate");
            //vm.cart = Cart.cart;
        }


        vm.removeItem = function(index){
            Cart.remove_item(index);
        };

        function update_item(item){
            var item_cart = angular.copy(Cart.cart.data.items[vm.cart.data.items.indexOf(item)]);
            if(item_cart.id == item.id && item_cart.quantity != item.quantity){
                Cart.cart.data.items[vm.cart.data.items.indexOf(item)].quantity = angular.copy(item.quantity);
                return true;
            }else{
                return false;
            }
        }

        vm.updateItem = function(item){
            if(update_item(item)){
                Cart.save();
            }
        };

        vm.updateQuantities = function(){
            var update = false; //Flag to save if any item change
            angular.forEach(vm.cart.data.items, function(item) {
                if(update_item(item)){
                    update = true;
                }
            });
            if(update){
                Cart.save();
            }
        };

//        $scope.$watch(function() {
//            return window.localStorage.getItem('cart');
//        },function(newVal,oldVal){
//            console.log("Cambio el local storage");
//            Cart.refresh_cart();
//        });


        vm.createOrder = function(){
            Cart.create_order().then(function(data){
                console.log("CREATE ORDER");
                console.log(data);
                Cart.reset();
                window.location = '/profile/orders/' + String(data.data.id) + '/';
            },function(data){
                console.log("ERROR");
                console.log(data);
            });
        }
    }
})();