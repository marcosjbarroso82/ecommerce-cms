window.endpoint = '/api/public/v1/';

var App = angular.module('App', [
        'cart'
    ])
    .config(function ($locationProvider, $httpProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    });
