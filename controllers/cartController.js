// Cart Controller - Manages cart view and checkout
app.controller('CartController', ['$scope', '$location', 'CartService', 'OrderService', function($scope, $location, CartService, OrderService) {
    $scope.cartItems = CartService.getCart();
    $scope.showCheckout = false;
    $scope.orderPlaced = false;
    
    // Customer information
    $scope.customerInfo = {
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: ''
    };

    // Get cart total
    $scope.getTotal = function() {
        return CartService.getTotal();
    };

    // Update item quantity
    $scope.updateQuantity = function(itemId, quantity) {
        CartService.updateQuantity(itemId, parseInt(quantity));
        $scope.cartItems = CartService.getCart();
    };

    // Remove item from cart
    $scope.removeItem = function(itemId) {
        if (confirm('Remove this item from cart?')) {
            CartService.removeFromCart(itemId);
            $scope.cartItems = CartService.getCart();
        }
    };

    // Check if cart is empty
    $scope.isCartEmpty = function() {
        return $scope.cartItems.length === 0;
    };

    // Proceed to checkout
    $scope.proceedToCheckout = function() {
        if ($scope.isCartEmpty()) {
            alert('Your cart is empty!');
            return;
        }
        $scope.showCheckout = true;
    };

    // Go back to cart
    $scope.backToCart = function() {
        $scope.showCheckout = false;
    };

    // Place order
    $scope.placeOrder = function() {
        if ($scope.checkoutForm.$invalid) {
            alert('Please fill in all required fields correctly.');
            return;
        }

        var order = OrderService.placeOrder($scope.cartItems, $scope.getTotal(), $scope.customerInfo);
        
        // Simulate order status updates
        OrderService.simulateOrderProgress(order.id);
        
        // Clear cart
        CartService.clearCart();
        
        // Show success message
        $scope.orderPlaced = true;
        $scope.placedOrder = order;
        
        // Redirect to orders page after 3 seconds
        setTimeout(function() {
            $scope.$apply(function() {
                $location.path('/orders');
            });
        }, 3000);
    };

    // Continue shopping
    $scope.continueShopping = function() {
        $location.path('/');
    };
}]);
