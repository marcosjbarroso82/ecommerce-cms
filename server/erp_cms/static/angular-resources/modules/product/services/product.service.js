(function () {
    'use strict';

    angular
        .module('product.services')
        .factory('Product', Product);

    Product.$inject = ['$resource'];

    /**
     * @namespace Product
     * @returns {Factory}
     */
    function Product($resource) {
       return $resource(window.endpoint + "products/:id",{id: '@id'}, {
            query: {method: 'get', isArray: false }
        });
    }
})()