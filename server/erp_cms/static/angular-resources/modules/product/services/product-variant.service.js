(function () {
    'use strict';

    angular
        .module('product.services')
        .factory('ProductVariant', ProductVariant);

    ProductVariant.$inject = ['$resource'];

    /**
     * @namespace Product
     * @returns {Factory}
     */
    function ProductVariant($resource) {
       return $resource(window.endpoint + "product-variants/:id",{id: '@id'}, {
            query: {method: 'get', isArray: false }
        });
    }
})()