window.endpoint = '/api/public/v1/';

var App = angular.module('App', [
        'ngResource',
        'product'
    ])

    .factory('httpPaginationInterceptor', function($q, $log, $location){
            return {
                response: function (response) {
                    // do something on success
                    if(response['data'] && response['data']['list']){
                        var cant_by_page = 8;

                        if($location.search()['limit']){
                            try {
                                cant_by_page = Number($location.search()['limit']);
                            }
                            catch(err) {
                                console.log("Error when format limit parameter from url");
                            }
                        }
                        var quantity_pages = response['data']['count'] / cant_by_page;
                        if(quantity_pages > parseInt(quantity_pages)){
                            quantity_pages = parseInt(quantity_pages) + 1;
                        }else{
                            quantity_pages = parseInt(quantity_pages);
                        }
                        response['data']['pages'] = new Array(quantity_pages).join().split(',').map(function(item, index){ return ++index;})
                    }
                    return response;
                },
                responseError: function (response) {
                    // do something on error
                    return $q.reject(response);
                }
            };
        })


    .config(function ($locationProvider, $httpProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

        $locationProvider.html5Mode(true).hashPrefix('!');

        $httpProvider.interceptors.push('httpPaginationInterceptor');
    })

    ;
