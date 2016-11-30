var App = angular.module('App', [
        'nya.bootstrap.select',
        'App.product',
        'cart'
    ])
    .config(function ($httpProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

    });
