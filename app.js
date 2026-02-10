// Main AngularJS App Module
var app = angular.module('foodOrderApp', ['ngRoute']);

// Route Configuration
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/menu.html',
            controller: 'MenuController'
        })
        .when('/cart', {
            templateUrl: 'views/cart.html',
            controller: 'CartController'
        })
        .when('/orders', {
            templateUrl: 'views/orders.html',
            controller: 'OrdersController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

// Filters
app.filter('currency', function() {
    return function(amount) {
        return '$' + parseFloat(amount).toFixed(2);
    };
});
