// Header Controller - Manages header and cart count
app.controller('HeaderController', ['$scope', 'CartService', function($scope, CartService) {
    $scope.cartCount = CartService.getCartCount();

    // Listen for cart updates
    $scope.$on('cartUpdated', function(event, count) {
        $scope.cartCount = count;
    });
}]);
