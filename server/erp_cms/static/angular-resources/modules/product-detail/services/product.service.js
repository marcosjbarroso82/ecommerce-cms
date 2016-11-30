/**
 * Ad
 * @namespace App.ad.services
 */
(function () {
    'use strict';

    console.log("declare product service");
    angular
        .module('App.product.services')
        .factory('Product', Product);

    Product.$inject = [];

    /**
     * @namespace Product
     * @returns {Factory}
     */
    function Product() {
        var variations = variants_json;
       var Product = {
            get: get
        };

        return Product;

        function get(){
            return variations;
        }
    }
})()