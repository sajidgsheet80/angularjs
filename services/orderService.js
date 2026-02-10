// Order Service - Manages order history and order placement
app.service('OrderService', function() {
    var orders = [];
    var orderId = 1;

    this.placeOrder = function(cartItems, total, customerInfo) {
        var order = {
            id: orderId++,
            items: angular.copy(cartItems),
            total: total,
            customerInfo: angular.copy(customerInfo),
            status: 'Pending',
            orderDate: new Date(),
            estimatedDelivery: new Date(Date.now() + 45 * 60000) // 45 minutes from now
        };

        orders.push(order);
        return order;
    };

    this.getOrders = function() {
        return orders;
    };

    this.getOrderById = function(id) {
        return orders.find(function(order) {
            return order.id === id;
        });
    };

    this.updateOrderStatus = function(orderId, status) {
        var order = this.getOrderById(orderId);
        if (order) {
            order.status = status;
        }
    };

    // Simulate order status updates
    this.simulateOrderProgress = function(orderId) {
        var self = this;
        var statuses = ['Pending', 'Confirmed', 'Preparing', 'Out for Delivery', 'Delivered'];
        var currentIndex = 0;

        var updateStatus = function() {
            if (currentIndex < statuses.length) {
                self.updateOrderStatus(orderId, statuses[currentIndex]);
                currentIndex++;
            }
        };

        // Update status every 10 seconds for demo purposes
        setInterval(updateStatus, 10000);
    };
});
