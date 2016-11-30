(function () {
    'use strict';

    angular
        .module('product.services')
        .factory('Category', Category);

    Category.$inject = ['$resource'];


    function Category($resource) {
       return $resource(window.endpoint + "categories/:id",{id: '@id'}, {
            query: {method: 'get', isArray: false }
        });
    }
})()