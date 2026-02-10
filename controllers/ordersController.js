// Orders Controller - Manages order history view
app.controller('OrdersController', ['$scope', 'OrderService', function($scope, OrderService) {
    $scope.orders = OrderService.getOrders();
    $scope.selectedOrder = null;

    // View order details
    $scope.viewOrderDetails = function(order) {
        $scope.selectedOrder = order;
    };

    // Close order details
    $scope.closeDetails = function() {
        $scope.selectedOrder = null;
    };

    // Get status class for styling
    $scope.getStatusClass = function(status) {
        var statusClasses = {
            'Pending': 'status-pending',
            'Confirmed': 'status-confirmed',
            'Preparing': 'status-preparing',
            'Out for Delivery': 'status-delivery',
            'Delivered': 'status-delivered'
        };
        return statusClasses[status] || 'status-pending';
    };

    // Check if there are any orders
    $scope.hasOrders = function() {
        return $scope.orders.length > 0;
    };

    // Format date
    $scope.formatDate = function(date) {
        return new Date(date).toLocaleString();
    };

    // Refresh orders (useful if implementing real-time updates)
    $scope.refreshOrders = function() {
        $scope.orders = OrderService.getOrders();
    };

    // Auto-refresh orders every 5 seconds to show status updates
    setInterval(function() {
        $scope.$apply(function() {
            $scope.refreshOrders();
        });
    }, 5000);
}]);
