/**
 * ProductCtrl
 * @namespace App.ad.controllers
 */

(function () {
    'use strict';
    angular
        .module('App.product.controllers')
        .controller('ProductCtrl', ProductCtrl);

    ProductCtrl.$inject = ['Product', 'Cart'];

    /**
     * @namespace ProductCtrl
     */
    function ProductCtrl(Product, Cart) {
        var vm = this;
        vm.variations = [];
        vm.selected_variation = {};

        vm.attributes = {};
        vm.selected_attributes = {};

        vm.option_set_list = [];
        vm.selected_option_set_ids = {};

        vm.search_option = {};
        vm.quantity = 1;

        vm.add_cart = function(){
            var item = {};
            item['id'] = angular.copy(vm.selected_variation.id);
            item['quantity'] = angular.copy(vm.quantity);

            Cart.add_item(item);
            vm.quantity = 1;
        };

        vm.get_extra_data = function(){
            var remove_last_char = false;
            var data = "[";
            for (var key in vm.selected_option_set_ids) {
                var value = vm.selected_option_set_ids[key];
                if(value != 0) {
                    data = data + "(" + key + "," + value +"),";
                    remove_last_char = true;
                }
            }
            if( remove_last_char) {
                data = data.substr(0, data.length - 1);
            }
            data =  data + "]"
            return data;
        };

        vm.init_attribules_list = function(){
            vm.variations.forEach(function(variation, index, array){
                variation.attributes.forEach(function bb(attribute, index, array){
                    if(vm.attributes[attribute.id] == undefined) {
                        vm.attributes[attribute.id] = {'values': {}, 'name': ''};
                    }
                    vm.attributes[attribute.id]['values'][attribute.value] = attribute;
                    vm.attributes[attribute.id]['name'] = attribute.name;
                    vm.attributes[attribute.id]['display_name'] = attribute.display_name;
                    vm.attributes[attribute.id]['widget_type'] = attribute.widget_type;
                    vm.attributes[attribute.id]['values'][attribute.value] = attribute;
                });
            });

        };

        vm.select_attribute = function(attr_key, attr_value){
            vm.selected_attributes[attr_key] = attr_value;

            var variation = vm.get_variation_by_attr(vm.selected_attributes)

            if(variation) {
                // select variation with all selected attributes
                vm.selected_variation = variation;
            } else {
                var aux = {};
                aux[attr_key] = attr_value;

                // Select the first variation found with the last selected attribute
                vm.selected_variation = vm.get_variation_by_attr(aux);

                // reset attributes to current variation
                vm.selected_variation.attributes.forEach(function(attr, index, array){
                vm.selected_attributes[attr.id] = attr.value;
                });
            }

        };

        // Get first variation found with the fiven attributes
        vm.get_variation_by_attr = function(attrs) {
            var result = {};
            var variation = {};
            var variation_attr = {};
            for(var i=0; i<vm.variations.length; i++) {
                variation = vm.variations[i];
                var match_flag = true;

                $.each(attrs, function(key, value){
                    for(var j=0;j<variation.attributes.length; j++) {
                        variation_attr =  variation.attributes[j];

                        if(variation_attr.id == key && variation_attr.value != value) {
                            match_flag = false;
                        }
                    }
                });
                if(match_flag) {
                    return variation;
                }
            }
        };

        // Initialize Controller
        activate();


        function activate(){
            vm.variations = Product.get();
            vm.selected_variation = vm.variations[0];

            // set attributes
            vm.selected_variation.attributes.forEach(function(attr, index, array){
                vm.selected_attributes[attr.id] = attr.value;
            });

            // Init Attributes
            vm.init_attribules_list();

            vm.option_set_list = vm.variations[0].parent.options;

            vm.option_set_list.forEach(function logArrayElements(element, index, array){
                // Order options
                element.options = element.options.sort(function(a, b){return a.id- b.id});
                if(element.required) {
                    // Add null option
                    element.options.push({"id":0,"name":"Ninguno","image":{"url":element.image.url},"description":"Ninguno"});
//                    vm.selected_option_set_ids[element.id] = {"id":0,"title":"Ninguno","parent_id":1,"image":{"url":element.image.url},"description":"Ninguno"};
                    vm.selected_option_set_ids[element.id] = 0;
                } else {
                    // Select first option
                    vm.selected_option_set_ids[element.id] = element.options[0].id;
                }
            });
        }
    }
})();