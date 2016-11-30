(function () {
    'use strict';
    angular
        .module('product.controllers')
        .controller('ProductSearchCtrl', ProductSearchCtrl);

    ProductSearchCtrl.$inject = ['Product', 'Category', '$location'];


    function ProductSearchCtrl(Product, Category, $location) {
        var vm = this;

        vm.q = {
            search: '',
            page: 1
        };

        // Declare vars
        vm.data = {
            list: []
        };

        vm.category_data = {
            list: []
        };

        

        function loadList(){
            $location.search(vm.q);
            Product.query(vm.q, function(data) {
                vm.data = data;
            });
        }

        init();

        function init(){
            vm.path = angular.copy(window.location.pathname);
            if(vm.path.slice(-1) == '/'){
                vm.path = angular.copy(vm.path.slice(0, -1))
            }

            Category.query({}, function(data){
               vm.category_data = data;

            });

            vm.q = angular.copy($location.search());
            if(!vm.q.page){
                vm.q.page = 1;
            }
            loadList();
        }

        vm.changeParams = function(){
            vm.q.page = 1;
            loadList();
        };

        vm.loadPage = function (page_nro){
            vm.q.page = page_nro;
            loadList();
        };

        vm.changeCategory = function(category){
            if(category.id == vm.q.category){
                vm.category_selected = null;
                vm.q.category = null;
            }else{
                vm.category_selected = angular.copy(category);
                vm.q.category = angular.copy(category.id);
            }
            vm.changeParams();
        };

        vm.toggle_favorite = function(product){
            console.log("TOGGLE FAVORITE");
        }
    }
})();